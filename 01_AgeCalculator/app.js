const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (birthdayValue === "") {
    alert("Please enter a valir birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old `;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDay = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDay.getFullYear();

  const month = currentDate.getMonth() - birthDay.getMonth();

  if (month < 0 || (month == 0 && currentDate.getDate() < birthDay.getDate())) {
    age--;
  }
  return age;

  console.log(age);
}

btnEl.addEventListener("click", calculateAge);
