const child_process = require('child_process');


const getProcessEnv = (region, path) => {
    try {
        var data = child_process.execSync(`node ${__dirname}/ssm.js ${region} ${path}`);
        let parseData = JSON.parse(data.toString());
        if (parseData) {
            let env_keys = Object.keys(parseData);
            for (let index = 0; index < env_keys.length; index++) {
                if (parseData[env_keys[index]] === 'true') {
                    parseData[env_keys[index]] = true;
                } else if (parseData[env_keys[index]] === 'false') {
                    parseData[env_keys[index]] = false;
                } else if (!isNaN(parseData[env_keys[index]])) {
                    if (parseData[env_keys[index]].indexOf('.') > 0) {
                        parseData[env_keys[index]]=parseFloat(parseData[env_keys[index]]);
                    } else {
                        parseData[env_keys[index]]=parseInt(parseData[env_keys[index]]);
                    }
                }
            }
            process.env = {
                ...process.env,
                ...parseData
            }
        }
    } catch (e) {
        throw new Error(e);
    }


}

module.exports = {
    getProcessEnv
}