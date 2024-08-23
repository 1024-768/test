
document.addEventListener('DOMContentLoaded',function(){
    const username=document.getElementById("usernameinput");
    const password=document.getElementById("passwordinput");
    const button=document.getElementById("userSubmit"); 
    function checkLength(){
        let u=false,p=false;
        const userWord=document.getElementById("usernameinput").value;
        const passWord=document.getElementById("passwordinput").value;
        const userWarn=document.getElementById("namewarn");
        const passWarn=document.getElementById("passwarn");        
        if(userWord.length<6 && userWord.length>0){  
            u=false;              
            userWarn.textContent="Username must have atleast six (6) characters.";                 
        }            
        if(passWord.length<8 && passWord.length>0){   
            p=false;             
            passWarn.textContent="Password must have atleast eight (8) characters.";   
        } 
        if(userWord.length>5){
            userWarn.textContent="";
            u=true;
        }
        if(passWord.length>7){
            passWarn.textContent="";
            p=true;
        } 
        if(u&&p){
            button.disabled=false;
            username1=userWord;
            password1=passWord;
        }            
        
    }    
    username.addEventListener('input',checkLength);
    password.addEventListener('input',checkLength);
    checkLength();
});

document.getElementById("welcometext").textContent=`Hello ${username1}!`;