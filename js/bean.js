function Bs(str){
    let count=0
    for(let i=0;i<str.length-1;i++){
        if(str[i]==='B'){
            count++
        }
    }
    return count
}
let word = Bs("BoB the Builder")
console.log(word)

function chars(str1,character){
    let count=0
    for(i=0;i<str1.length-1;i++){
        if(str1[i]=== character){
            count++
        }
    }
    return count
}
let word1=chars("sindhu",'s')
console.log(word1)