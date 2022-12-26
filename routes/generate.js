var express = require('express');
var router = express.Router();
// node.jsでShellを実行するためのライブラリ
const { execSync } = require('node:child_process');

async function generatePassword() {
    try {
        console.log("Generating password...");
        const stdout = execSync('python ./public/python/main.py');
        console.log("Generated password.");
        return stdout.toString();
    } catch(err) {
        console.log(err);
        return "An error has occurred."
    }
}

router.post('/', (req, res) => {
    generatePassword().then(result => {
        res.render("generate", { password: result });
    })
});

router.get('/show', (req, res) =>{
    res.send("This page is show page");
})

module.exports = router;
