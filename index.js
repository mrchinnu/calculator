function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function percentage(a,b){
    return b*a/100;
}

let firstnumber=0;
let secondnumber=0;
let operator='';


function operation(first,operator,second){
    if(operator==='+'){
        return add(firstnumber,secondnumber);
    }else if(operator==='-'){
        return substract(firstnumber,secondnumber);
    }else if(operator==='*'){
        return multiplication(firstnumber,secondnumber);
    }else if(operator==='/'){
        return division(firstnumber,secondnumber);
    }else{
        return percentage(firstnumber,secondnumber);
    }
}

const buttons=document.querySelector(".buttons");
const display=document.querySelector(".display");
const minidisplay=document.querySelector(".minidisplay");
const audio=document.querySelector(".audio");
buttons.addEventListener("click",(event)=>{
    audio.play();
    console.log(event.target.value);
    let a="1234567890."
    if(a.includes(event.target.value)){
        if(firstnumber===1*display.innerHTML){
            display.innerHTML='';
        }
        display.innerHTML=display.innerHTML+event.target.value;
        minidisplay.innerHTML=minidisplay.innerHTML+event.target.value;
    }else if(event.target.value==='ac'){
        display.innerHTML='';
        minidisplay.innerHTML='';
        firstnumber=0;
        secondnumber=0;
        operator='';
    }else if(event.target.value==='equals'){
        secondnumber=1*display.innerHTML;
        minidisplay.innerHTML=display.innerHTML=operation(firstnumber,operator,secondnumber);
        firstnumber=0;
        secondnumber=0;
        operator='';
    }else if(event.target.value==='clear'){
        display.innerHTML=(display.innerHTML).substring(0,display.innerHTML.length-1);
        minidisplay.innerHTML=(minidisplay.innerHTML).substring(0,minidisplay.innerHTML.length-1);
    }else {
        if(operator===''){
        firstnumber=1*display.innerHTML;
        operator=event.target.value;
        display.innerHTML="";
        minidisplay.innerHTML=minidisplay.innerHTML+operator;
        }else{
            secondnumber=1*display.innerHTML;
            firstnumber=operation(firstnumber,operator,secondnumber);
            operator=event.target.value;
            display.innerHTML=firstnumber;
            minidisplay.innerHTML=display.innerHTML+operator;
        }
    }
});

