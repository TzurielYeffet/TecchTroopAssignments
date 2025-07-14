const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(){}
displayData(console.error, logData, "I like to party")
