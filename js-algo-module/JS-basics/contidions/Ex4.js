let usernameLength = 6;
let passwordLength = 7;
let userAge = 11;

if(usernameLength <5 || passwordLength <8 || userAge < 13 ){
    if(usernameLength <5)
        console.log("Invalid username length");
    if(passwordLength <8)
        console.log("Invalid password length");
    if(userAge < 13)
    console.log("Sorry too young");
}else{
    console.log("Success");   
}

    