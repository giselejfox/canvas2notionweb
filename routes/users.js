import express from 'express';
var router = express.Router();

import canvasToken from '../secrets.js'

/* GET users listing. */
router.get('/assignmentGroups', async function(req, res, next) {
  try {
    
    console.log("made it at the top")
    
    // get the different categories of assignment
    let assignmentUrl = "https://canvas.uw.edu/api/v1/courses/" + req.query.classID + "/assignment_groups" // TO DO: replace the base url with the URL someone inputs for their own specific school
  

    let response = await fetch(assignmentUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + canvasToken
      }
    })
    
    let assignmentGroups = await response.json()

    console.log("got assignment groups: " + assignmentGroups.length)

    let assignmentGroupIds = []

    for (let i = 0; i < assignmentGroups.length; i++) {
      console.log(assignmentGroups[i]["id"])
      assignmentGroupIds.push(assignmentGroups[i]["id"])
    }

    let assignments = await getAssignmnets(assignmentGroupIds, assignmentUrl)
    console.log("flattened assignments? " + assignments.flat(1))

    assignments.flat(1).map((ass) => {
      console.log(ass["name"])
    })

    res.send({result: assignments})

  } catch (err) {
    console.log(err)
    res.status(500).send({error: err})
  }
});

async function getAssignmnets(ids, url) {
  // TODO: map the for each id request all the assignments and add them to a set
  let assignments = []

  for (let i = 0; i < ids.length; i++) {
    let response = await fetch(url + "/" + ids[i] + "/assignments", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + canvasToken
      }
    })
    let result = await response.json()

    // print out the results of each assignment
    assignments.push(result)
  }

  console.log(assignments)

  return assignments
}

router.post("/assignments", async (req, res) => {
  // DOES NOT WORK!!!
  try {
    res.send(req.body)
  } catch (err) {
    console.log(err)
    res.status(500).send({error: err})
  }


})

export default router;
