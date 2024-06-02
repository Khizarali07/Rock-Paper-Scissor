let y=0;
let c=0;
function game (id){
    let a="";
    let comp="";
    let you="";
    let random=Math.round((Math.random()*(3-1)+1));
    let x=document.getElementById("message");
    let e=document.getElementById("data1");
    let f=document.getElementById("data2");
    let str="";
    if (id=="rock"){
        a="rock";
    }
    else if (id=="paper"){
        a="paper";
    }
    else {
        a="scissor";
    }
    you=a;

    if (random==1){
        comp="rock";
     }
     else if (random==2){
         comp="paper";
     }
     else {
        comp="scissor";
    }
    console.log(you);
    console.log(comp);
    if (you==comp){
        str=`It is a draw, Your move ${you} Computer move ${comp}`;
        x.innerHTML=str;
        x.style.backgroundColor="black";
    }
    else if (you=="rock" && comp=="scissor" || you=="paper" && comp=="rock" || you=="scissor" && comp=="paper"){
        str=`Congratulation for your win, Your move ${you} Computer move ${comp}`;
        x.innerHTML=str;
        x.style.backgroundColor="green";
        y++;
    }
    else {
        str=`Sorry you lose, Your move ${you} Computer move ${comp}`;
        x.innerHTML=str;
        x.style.backgroundColor="red";
        c++;
    }
    e.innerHTML=y;
    f.innerHTML=c;
}