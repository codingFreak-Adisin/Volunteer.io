btn=document.getElementById("ChangeScreen");
login=document.getElementById("Name");
rightBtn=document.getElementById("RightBtn");
leftText=document.getElementById("leftText");
Greeting=document.getElementById("Greeting");

var btnCounter=0;
btn.addEventListener('click',function(){
    if (btnCounter==0){
    document.getElementById("TextChange").textContent="        Login        "
    login.style.display="none";
    btnCounter++
    btn.textContent="Sign up"
    rightBtn.textContent="Sign in"
    leftText.textContent="To Sign up click the button Below!"
    Greeting.textContent="Welcome!"
    }
    else{
        document.getElementById("TextChange").textContent="Create Account";
        login.style.display="block";
        btn.textContent="Sign in"
        rightBtn.textContent="Sign up"
        leftText.textContent="To Sign in click the button Below!"
        Greeting.textContent="Welcome Back"

        btnCounter--
    }
})
