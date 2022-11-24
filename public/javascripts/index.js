async function fetchAssignments() {

    let classID = document.getElementById("classIdInput").value 

    let response = await fetch("/users?classID=" + classID)
    let result = await response.json()

    console.log(result)
}

