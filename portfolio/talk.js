console.log("Discussion page opened");
function hello() {
    alert("Hello world!");
}
function send(event) {
    event.preventDefault();

  let birthdayField = document.getElementById("birthdayField");
    let emailField = document.getElementById("emailField");
    let typeField = document.getElementById("typeField");
    let usageField = document.getElementById("usageField");
    let bodyField = document.getElementById("bodyField");
    let birthday = birthdayField.value;
    let email = emailField.value;
    let type = typeField.value;
    let usage = usageField.checked;
    let body = bodyField.value;
     console.log(birthday);
    console.log(email);
    console.log(type);
    console.log(usage);
    console.log(body);

   
    commentDialog.close();
}