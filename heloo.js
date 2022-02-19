if(!localStorage.getItem("data")) localStorage.setItem("data", "[]")

let users = JSON.parse(localStorage.getItem("data"));

let minChar = 3;

let maxChar = 11;

let myFunction = () => {
    let userName = prompt('please create an username');
    
    if(!userName.length) {
        return alert('please type an username');
    }

    if(userName.length <= minChar) {
        alert('Please type more than 3 characters');
        return myFunction()
    }
    
    else if(userName.length >= maxChar) {
        alert('Please type less than 11 characters');
        return myFunction()
    }      
    users.push({
       user: userName
    })
    localStorage.setItem("data", JSON.stringify(users));
}
