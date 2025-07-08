let temperature = 20;
let weather = "rainy";

if(weather === "sunny"){
    if(temperature > 24)
        console.log("Go to the beach");
    if(temperature >= 15 && temperature <=24)
        console.log("Go for a walk");
    if(temperature < 15)
        console.log("Stay inside and read");       
}else if(weather === "cloudy"){
    if(temperature > 21)
        console.log("Go hiking");
    else{
        console.log("Visit a museum");    
    }
}else{
    console.log("Watch a movie indoors");
}