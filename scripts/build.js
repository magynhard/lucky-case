/**
 * release build script
 */
const fs = require("fs");
const util = require('util');
const exec = require("child_process").exec;
const exec_prom = util.promisify(exec);
const { spawn } = require("child_process");
const LuckyCase = require('./../src/lucky-case/lucky-case');
const chalk = require('chalk');

const build_destination_dir = './dist/';

const build_exclusion_markers = [
    /\/\/<!-- MODULE -->\/\/(.*?)\/\/<!-- \/MODULE -->\/\//gs,
    /\/\/<!-- DOC -->\/\/(.*?)\/\/<!-- \/DOC -->\/\//gs,
]

const version_regex = /"version":\s*"([^"]*)"/sgm;

const release_header_template = `/**
 * lucky-case
 *
 * The lucky javascript library to identify and convert strings from any letter case to another
 *
 * @version {{version}}
 * @date {{date}}
 * @link https://github.com/magynhard/lucky-case
 * @author Matthäus J. N. Beyrle
 * @copyright Matthäus J. N. Beyrle
 */
`;

const builds = {
    default_build: {
        destination_file: build_destination_dir + 'lucky-case.js',
        destination_min_file: build_destination_dir + 'lucky-case.min.js',
        options: { babelize: false, uglify: false },
        source_files: [
            './src/lucky-case/lucky-case.js',
            './src/lucky-case/custom-errors/invalid-case-error.js',
            './src/lucky-case/custom-errors/invalid-constant-error.js',
    ]},
    string_build: {
        destination_file: build_destination_dir + 'lucky-case.string.js',
        destination_min_file: build_destination_dir + 'lucky-case.string.min.js',
        options: { babelize: false, uglify: false },
        source_files: [
            './src/lucky-case/lucky-case.js',
            './src/lucky-case/string.js',
            './src/lucky-case/custom-errors/invalid-case-error.js',
            './src/lucky-case/custom-errors/invalid-constant-error.js',
    ]}
}

function version() {
    const package_json = fs.readFileSync('./package.json','utf8');
    version_regex.lastIndex = 0;
    return version_regex.exec(package_json)[1];
}

function releaseTemplate() {
    return release_header_template.replace('{{version}}', version()).replace('{{date}}',(new Date).toISOString());
}

function prependToFile(file, string) {
    const org_file = fs.readFileSync(file,'utf8');
    fs.writeFileSync(file, string + org_file);
}

function updateJsProjectVersion() {
    let split_version = version().split('.');
    split_version[split_version.length-1] = parseInt(split_version[split_version.length-1])+1;
    const new_version = split_version.join('.');
    // package.json
    let package_json = fs.readFileSync('./package.json','utf8');
    package_json = package_json.replace(version_regex, `"version": "${new_version}"`);
    fs.writeFileSync('./package.json', package_json, 'utf8');
    // project class
    let project_js = fs.readFileSync('./src/lucky-case/lucky-case.js','utf8');
    project_js = project_js.replace(/LuckyCase\._version\s*=\s*"[^"]+";/gm, `LuckyCase._version = "${new_version}";`)
    fs.writeFileSync('./src/lucky-case/lucky-case.js', project_js, 'utf8');
    return new_version;
}

console.log(chalk.yellow('##############################'));
console.log(chalk.yellow('# LuckyCase build script'));
console.log(chalk.yellow('##############################'));
console.log(`Updating version from ${version()} ...`);
console.log(`... to version ${updateJsProjectVersion()}`);
console.log();
console.log('Building JS ...');
for(let build_key of Object.keys(builds)) {
    const build = builds[build_key];
    console.log(` ${chalk.yellow('-')} ${LuckyCase.toSentenceCase(build_key)} ...`);
    if (fs.existsSync(build.destination_file)) {
        fs.unlinkSync(build.destination_file);
    }
    console.log(`${chalk.yellow('    - transpile and minify')} ...`);
    (function buildRawDestinationFile() {
        let final_file = "";
        build.source_files.forEach((source_file) => {
           final_file += fs.readFileSync(source_file, 'utf8') + "\n";
        });
        build_exclusion_markers.forEach((regex) => {
           final_file = final_file.replace(regex,'');
        });
        fs.writeFileSync(build.destination_file, releaseTemplate() + final_file);
    })();
    (async function createMinifiedBuilds() {
        const babel_command = `babel ${build.destination_file} --no-comments --out-file ${build.destination_min_file}`;
        const uglify_command = `uglifyjs ${build.destination_min_file} -m -c -o ${build.destination_min_file}`;
        await exec_prom(babel_command + ' && ' + uglify_command).then(() => {
            prependToFile(build.destination_min_file, releaseTemplate());
        });
    })();
}

console.log(chalk.green('All done!'));
