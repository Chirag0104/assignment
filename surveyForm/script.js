function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const genderCheckboxes = document.querySelectorAll(
    "input[type='radio']:checked"
  );
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;


  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Please enter a valid 10 digit mobile number.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  let genders = [];
  genderCheckboxes.forEach((checkbox) => {
    genders.push(checkbox.value);
  });

  if (genders.length == 0) {
    alert("Please select at least one gender.");
    return;
  }
  if (!firstName.trim()) {
    alert("First Name cannot be empty.");
    return;
  }

  if (!lastName.trim()) {
    alert("Last Name cannot be empty.");
    return;
  }

  if (!country.trim() || country === "Select Country") {
    alert("Please select a country.");
    return;
  }

  if (!profession.trim()) {
    alert("Profession cannot be empty.");
    return;
  }

  let popupContent = `
                First Name: ${firstName}<br>
                Last Name: ${lastName}<br>
                Date of Birth: ${dob}<br>
                Country: ${country}<br>
                Gender: ${genders.join(", ")}<br>
                Profession: ${profession}<br>
                Email: ${email}<br>
                Mobile Number: ${mobile}
            `;

  document.getElementById("popupContent").innerHTML = popupContent;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}
