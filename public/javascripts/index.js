// 


// makes a request to the classes.js to get the classes for this user
async function fetchClasses() {
    
}

// makes a request to assignments.js to get the assignments for this user from canvas
async function fetchAssignments() {

    let classID = document.getElementById("classIdInput").value 

    // let response = await fetch("/users?classID=" + classID)
    // let result = await response.json()

    let testpython = await fetch('/usePython')
    let pythonresult = await testpython.json()


    // console.log(result)
    console.log(pythonresult)
}

