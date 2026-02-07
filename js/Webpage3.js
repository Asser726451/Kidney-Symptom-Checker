const form = document.getElementById("symptomForm");
const errorMessage = document.getElementById("error");

errorMessage.style.display = "none";

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const checked = document.querySelectorAll('input[name="symptoms"]:checked');

  if (checked.length < 2 || checked.length > 10) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";

    const symptoms = Array.from(checked).map(cb => cb.value);
    localStorage.setItem("symptoms", JSON.stringify(symptoms));

    window.location.href = "Webpage4.html"; 
  }
});
