let age = 88

if (age > 19) { // if(Boolean)  // Boolean : false , true
    console.log("You are eligible to drive car");
}
else {
    console.log("You are not eligible");
}

let age_as = 17

if (age_as >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible");
}

// example 1
let email = prompt("Enter your email")


console.log(email);


if (email) {
    alert("Move to next.")

    let password = prompt("Enter your password")

    if (password) {
        alert("Password accepted.")
        console.log(password);
    } else {
        alert("Please! Enter your Password.")
    }
} else {
    alert("Email is Required.")
}