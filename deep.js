function deep(val1,val2){
    if(val1 === val2)
    return true;
    if(val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object")
    return false;
    var countA=0, countB=0;
    for(var i in val1)
    countA +=1;
    for(var i in val2){
    countB +=1;
    if(!(i in val1) || !deep(val1[i],val2[i]))
    return false;
}
return countA == countB;
}

let num ={
    year:1996,
    school: "srk"
}
let num1 ={
    year:1996,
    school: "srk"
}
console.log(deep(num,num1))
