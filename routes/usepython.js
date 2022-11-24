import express from 'express';
import { spawn } from 'child_process'
import moment from 'moment'
var router = express.Router();

router.get("/", (req, res) => {

    // var tz = new Date().getTimezoneOffset();
    // console.log(tz/60)

    // res.send({status: "success"})

    let dataToSend = '';

    const python = spawn('python3', ["routes/testscript.py"])

    python.stdout.on('data', (data) => {
        dataToSend = data.toString()
    })

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`)
    })

    python.on('exit', (code) => {
        console.log(`child process exited with code ${code}, ${dataToSend}`)
        console.log(typeof(dataToSend))
        console.log(dataToSend)
        res.send({status: "success"})
    })
})


export default router