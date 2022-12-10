var express = require('express');
var router = express.Router();
// node.jsでPythonを扱うためのライブラリ
// node.jsのchild_processでの実行に変更する
var {PythonShell} = require('python-shell');


function pyRun() {
    let pyshell = new PythonShell('./public/python/main.py');
    pyshell.on('message', function (data) {
        // console.log(data);
        return data;
    });
    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });
}

router.post('/', (req, res) => {
    // returnPassword().then(result => {
        //     console.log("パスワードを生成しました");
        //     console.log(result);
        //     res.send("show");
        // });
    async function returnPassword() {
        try {
            const password = await pyRun();
            return password;
        } catch (err) {
            console.log(err);
        }
    }

    returnPassword().then(result => {
        console.log(result);
        // res.send("show");
        res.render("generate", { password: result })
    })

});

router.get('/show', (req, res) =>{
    res.send("This page is show page");
})

module.exports = router;
