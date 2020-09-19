$(document).ready(function(){

    $("#signup-1").click(function(){
        console.log("clicked 1")
        $("#signUp-1").css("display", "none");
    $("#sign-up-google").css("display", "none");
    $("#signUp-2").css("display", "block");
    });
    $("#signup-2").click(function(){
            console.log("clicked 2")
        $("#signUp-2").css("display", "none");
    $("#signUp-3").css("display", "block");
    $("#finishSignUp").css("display","inline-block");
    });

    $("#finishSignUp").click(function(){
        $("#signUp-3").css("display", "none");
        window.location.href='https://www.google.com/';
    });
 });
