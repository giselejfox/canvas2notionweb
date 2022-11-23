async function fetchAssignments() {

    let response = await fetch("/users")
    let reesult = await response.json()

    console.log(reesult)
}

