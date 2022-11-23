import express from 'express';
var router = express.Router();

import canvasToken from '../secrets.js'

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    console.log("made it in users.js")
    
    let url = "https://canvas.uw.edu/api/v1/courses/" + req.query.assID + "/assignment_groups"

    //let url = "https://canvas.uw.edu/api/v1/courses?enrollment_state=completed"
    //let url = "https://canvas.uw.edu/api/v1/users/self/favorites/courses" //?include[]=term&exclude[]=enrollments&sort=nickname"
    //let url = "https://canvas.uw.edu/api/v1/users/self/courses"
    
    let token = canvasToken

    let response = await fetch(url, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    let result = await response.json()

    res.send(result)

  } catch (err) {
    res.status(500).send({error: err})
  }
});

export default router;
