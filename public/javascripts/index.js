// 


// makes a request to the classes.js to get the classes for this user

// makes a request to assignments.js to get the assignments for this user from canvas
async function fetchAssignments() {

    let classID = document.getElementById("classIdInput").value 

    // get assignment groups
    let response = await fetch("/users/assignmentGroups?classID=" + classID)
    let assignmentGroups = await response.json()

    // get the assignments from the assignment group IDs
    let nextResponse = await fetch("/users/assignments", {
        method: "POST",
        body: assignmentGroups
    })
    let assignments = await nextResponse.json()

    // let testpython = await fetch('/usePython')
    // let pythonresult = await testpython.json()

    console.log("assignmentGroups: " + assignmentGroups.result)
    console.log("assignments" + assignments)
    // console.log(pythonresult)
}

