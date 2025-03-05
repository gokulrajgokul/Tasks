

document.getElementById("regform").addEventListener("submit",function (event){
    event.preventDefault();
var name=document.getElementById("name") ;
var email=document.getElementById("mail");
var pass=document.getElementById("pass");
var cpass=document.getElementById("cpass");

var namemsg=document.getElementById("nameerror");
var mailmsg=document.getElementById("mailerror");
var passmsg=document.getElementById("passerror");
var cpassmsg=document.getElementById("cpasserror");
var pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;
    if(name.value.trim()=== ""){
        namemsg.textContent="enter a name";
        isValid = false;

    }
    if(email.value.trim()=== ""){
        mailmsg.textContent="enter a mail id";
        isValid = false;

    }
    else if(!pattern.test(email.value.trim())){
        mailmsg.textContent="enter a valid mail id";
        isValid = false;

    }
    if(pass.value.trim()=== ""){
        passmsg.textContent="enter a password";
        isValid = false;

    }
    else if(pass.value.length<=8){
        passmsg.textContent="password must be 8 characters";
        isValid = false;

    }
    if(cpass.value.trim()=== ""){
        cpassmsg.textContent="enter a confirm password";
        isValid = false;

    }
    else if(pass.value!=cpass.value){
        cpassmsg.textContent="confirm password  not matched";
        isValid = false;

    }

    if(isValid){
        alert("submitted successfully")
        document.getElementById("regform").submit();
        document.getElementById("regform").reset();
    }
});
