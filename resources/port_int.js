const first=document.getElementById("4c");
const engine=document.getElementById("5c");
const ada=document.getElementById("6c");
const counter=document.getElementById("counter")

const firstdiv=document.getElementById("4");
const enginediv=document.getElementById("5");
const adadiv=document.getElementById("6");
firstdiv.hidden=true;
enginediv.hidden=true;
adadiv.hidden=true;

const startdate=new Date("October 20, 2024 01:19:00");
const current=new Date();
counter.innerHTML=`Fun fact! this page is live for ${Math.floor((current-startdate)/86400000)} days!` // 60000-minute ,86400000-day

first.onclick=function(){
    if(firstdiv.hidden===true){
        firstdiv.hidden=false;
    }else{
        firstdiv.hidden=true;
    }
};

engine.addEventListener("click",function(){
    if(enginediv.hidden===true){
        enginediv.hidden=false;
    }else{
        enginediv.hidden=true;
    }
});

ada.addEventListener("click",function(){
    if(adadiv.hidden===true){
        adadiv.hidden=false;
    }else{
        adadiv.hidden=true;
    }
});

