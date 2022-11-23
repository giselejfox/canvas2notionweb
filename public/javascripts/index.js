async function fetchAssignments() {

    let assID = document.getElementById("classIdInput").value 

    let response = await fetch("/users?assIs=" + assID)
    let result = await response.json()

    console.log(result)
}

