function validateForm() {
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (age === "" || gender === "") {
    message.textContent = "Please fill in all required fields";
    return;
  }

  if (age < 0 || age > 120) {
    message.textContent = "Please fill in a valid age between 1 and 120";
    return;
  }

  if (!/^\d+$/.test(age)) {
    message.textContent = "Please fill in a valid age between 1 and 120"
    return;
  }

  localStorage.setItem("age", age);
  localStorage.setItem("gender", gender);

  window.location.href = "Webpage3.html";
}