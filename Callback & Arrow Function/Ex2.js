const returnTime = function (time) {
  console.log('The current time is: ' + time)
}


function getTime(func){
    time = new Date();
    func(time);
}
getTime(returnTime)
