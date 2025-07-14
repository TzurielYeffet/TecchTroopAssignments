let score = 85;
if(score < 60){ // I could add here another condition in order to handle negative numbers, but the rule is "Below 60"
    console.log("F");
}else if(score >= 60 && score <=69){
    console.log("D");
}else if(score >= 70 && score <=79){
    console.log("C");
}else if(score >= 80 && score <=89){
    console.log("B");
}else if(score >=90 && score <=100){
    console.log("A");
}else{
    console.log("Number is out of range");
}
