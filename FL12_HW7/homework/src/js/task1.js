let userMail = prompt('input yor e-mail');

if (userMail === null || userMail === ''){

    alert('Canceled');

} else if (userMail.length < 5){

    alert("I don't know any emails having name length less than 5 symbols");

} else if (['user@gmail.com','admin@gmail.com'].includes(userMail)){
    let passWord = prompt('Enter your password');

    if (['', null].includes(passWord)){

        alert('Canceled');
    
    } else if (userMail === 'user@gmail.com' && passWord === 'UserPass' ||
                 userMail === 'admin@gmail.com' && passWord === 'AdminPass'){

        console.log('Right password');
        let changePass = confirm('Do you want to change your password?');

        if (changePass === false){
            alert('You have failed the change');
        } else { 
            
            let passWordCheck = prompt('Enter your old password');
            if (passWordCheck === null || passWordCheck === ''){
                alert('Canceled');        
            } else if (userMail === 'user@gmail.com' && passWordCheck === 'UserPass'
                            || userMail === 'admin@gmail.com' && passWordCheck === 'AdminPass'){
                
                let newPassWord = prompt('enter new password')

                if (['', null].includes(newPassWord)){
                    alert('Canceled');
                } else if(newPassWord.length < 6){
                    alert('It’s too short password. Sorry');
                } else{
                    let newPassWordCheck = prompt('Enter your new password again');

                    if (newPassWord === newPassWordCheck){
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }

            } else{
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }

} else{

    alert('I don’t know you');
    
}


