import { checkForName } from './nameChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    checkForName(formText);
    const text = document.getElementById("statement").value;
    if (!text) return;
    console.log(text);
    fetch("/checkStatement", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            document.getElementById("polarity").innerHTML = "Polarity: " + data.polarity;
            document.getElementById("polarity_confidence").innerHTML = "Polarity Confidence: " + data.subjectivity;
            document.getElementById("subjectivity").innerHTML = "Subjectivity: " + data.polarity_confidence;
            document.getElementById("subjectivity_confidence").innerHTML = "Subjectivity Confidence: " + data.subjectivity_confidence;
        });
}

export { handleSubmit }
