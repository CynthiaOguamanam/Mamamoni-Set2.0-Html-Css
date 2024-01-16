console.log("Javascript is running");


let username = prompt(`what is your name`);
let age = prompt(`Hi ${username}, how old are you?`)


if(age < 18){
    alert("You are not eligible to participate in this test")
}else{
    let Q1 = prompt("What is javascript? \n A.Java \nB. Script \n C. Python \n D. iiiiijhgfjke");
    if(Q1 == ("a" || "A") ){
        alert("correct");
        
        let Q2 = prompt("Which of these is not a javascript data type? \n choose only one answer \n A. Hide \n B. Boolean \n C. String D. Pink");
        if(Q2 == ("A" || "D" || "a" || "d")){
            alert("good")
        }else{
            alert("bad")
        }
    }else{
        alert("wrong answer")
    }
   
}