function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "simran",
        "review",
        "udacity",
        "sharma",
        "frontend"
    ]
    if(!inputText) inputText = "guest";
    if(names.includes(inputText.toLowerCase())) {
        document.getElementById('username').innerHTML = "Welcome, Captain";
    } else {
        document.getElementById('username').innerHTML = "Welcome, Guest User";
    }
}

export { checkForName }
