count3=0
count5=0
for(i=1;i<=100;i++){
    s=" "
    count3++
    count5++
    if(count3==3){
        s=s+"fizz"
        count3=0
    }
    if(count5==5){
        s=s+"buzz"
        count5=0
    }
    if(s==" "){
        console.log(i)
    }
    else{
        console.log(s)
    }
}    


