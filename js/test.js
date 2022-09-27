let head=document.getElementById("head");
for(let row=1;row<=5;row++){
    for(let col=1;col<=row;col++){
        head.innerHTML+="*";
    }
    head.innerHTML+="<br>";
}
for(let i=0;i<5;i++){
        for(let j=0;j<i;j++){
            console.log("*");
        }
        console.log("");
    }