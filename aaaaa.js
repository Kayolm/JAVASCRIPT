const minChar = 3;
const maxChar = 11;


let myFunction = () => {
    let userName = prompt('please create an username');

    if(!userName.length) {
        return alert('please type an username');
    }

    if(userName.length <= minChar) {
        alert('PLease type more than 3 characters');
        return myFunction()
    }
    
    else if(userName.length >= maxChar) {
        alert('Please type less than 11 characters');
        return myFunction()
    }      
}





 

