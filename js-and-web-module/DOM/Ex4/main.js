// const validate = function () {
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  const name = document.getElementById("name").value.trim();
  const salary = parseFloat(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();

  let response = "";
  if (typeof name !== "string") {
    console.log(typeof name);
    response = "Name is required";
  } else if (name.length < 2) {
    response = "Name must be longer than 2 characters";
  }
  else if (salary > 16000 || salary < 10000) {
    response = "Salary must be greater than 10,000 but less than 16,000";
  }
  else if (birthday === null) {
    response = "Birthday may not be null";
  }
  else if (phone.length < 10) {
    response = "Phone must be 10 digits long";
  }
  if(response){
    event.preventDefault();
    handleEvent(response);
  }
});
// };
function handleEvent(response) {
    if(!response) return;
  const oldMessage = document.getElementById("validation-message");
  if (oldMessage) oldMessage.remove();
  const message = document.createElement("h2");

  message.id = "validation-message";
  message.textContent = response;
  message.style.color = "red";

  const button = document.getElementById("btn");
  form.insertBefore(message, form.lastElementChild);
}
