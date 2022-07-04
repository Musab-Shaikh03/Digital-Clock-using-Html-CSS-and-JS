let a;
let date;
let time;

setInterval(()=>{
    a = new Date();
    days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    i = a.getDay();
    day = days[i];
    date = a.toLocaleDateString();
    time = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    document.getElementById("time").innerHTML=time;
    document.getElementById("date").innerHTML=date;
    // document.getElementById("day").innerHTML=day;
    if (a.getHours()>=06 && a.getHours()<=14) {
        document.body.style.background="white";
        document.getElementById("box").style.backgroundColor='black';
        document.getElementById("time").style.color='white';
        document.getElementById("date").style.color='white';
        document.getElementById("format").style.color='white';
    }
    else if(a.getHours()>=14 && a.getHours()<=19){
        document.body.style.background="#FF7F50";
        document.getElementById("box").style.backgroundColor='black';
        document.getElementById("time").style.color='white';
        document.getElementById("date").style.color='white';
        document.getElementById("format").style.color='white';
    }
    else{
        document.body.style.background='black'
        document.getElementById("box").style.backgroundColor='gainsboro';
    }
},1000);