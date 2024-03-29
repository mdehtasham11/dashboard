console.log("hello world");
// localStorage.clear();
const inputName = document.getElementById('inputName');
const inputAge = document.getElementById('inputAge');
const inputDOB = document.getElementById('inputDOB');
const inputAbout = document.getElementById('inputAbout');
const inputMotherName = document.getElementById('inputMotherName');
const inputFatherName = document.getElementById('inputFatherName');
const inputUniversity = document.getElementById('inputUniversity');
const inputSchool = document.getElementById('inputSchool');
const inputAddress = document.getElementById('inputAddress');
const inputContact = document.getElementById('inputContact');
const cardDetail = document.getElementById("card-detail");
const formheader = document.getElementById("form-header");

const form = document.getElementById('form');
const div = document.getElementById("container");
const submit = document.getElementById("submit-btn");


window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const formData = JSON.parse(localStorage.getItem(key));
        createDivFromData(formData);
    }
});


function createDivFromData(formData) {
    const divEle = document.createElement('div');
    divEle.classList.add("container", "border", "mb-2", "d-flex");
    divEle.setAttribute('key', formData.id);
    const ele = `
        <p class="d-flex align-items-center">${formData.Name}</p>
        <button type="button" class="btn btn-primary btn-sm my-1 ms-auto">Open</button>
    `;
    divEle.innerHTML = ele;
    div.appendChild(divEle);

    const button = divEle.querySelector('button');
    button.addEventListener('click', () => {

        cardDetail.innerHTML = "";
        const key = divEle.getAttribute('key');
        const newFormData = JSON.parse(localStorage.getItem(key));
        console.log(newFormData);
        const divEle2 = document.createElement('div');
       const ele2 = `<div class="card-body">
            <h5 class="card-title">Name: ${newFormData.Name}</h5>
            <p class="card-text">
            ${newFormData.about}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Age: ${newFormData.age}</li>
            <li class="list-group-item">DOB: ${newFormData.dob}</li>
            <li class="list-group-item">Mothers Name: ${newFormData.mothername}</li>
            <li class="list-group-item">father Name: ${newFormData.fathername}</li>
            <li class="list-group-item">Adress: ${newFormData.add}</li>
            <li class="list-group-item">School Name: ${newFormData.school}</li>
            <li class="list-group-item">
              University name: ${newFormData.universityname}
            </li>
            <li class="list-group-item">Contact No: ${newFormData.contact}</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-primary btn-sm">
              Delete
            </button>
          </div>`
        divEle2.innerHTML = ele2;
        cardDetail.appendChild(divEle2);
        const delButton = divEle2.querySelector('button');
        delButton.addEventListener('click', ()=>{
          localStorage.removeItem(key);
          location.reload();
        })
    });
}

submit.addEventListener('click', (event) => {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission
}else{
    const id = Date.now();
    const formData = {
        id,
        Name: inputName.value,
        age: inputAge.value,
        dob: inputDOB.value,
        about: inputAbout.value,
        mothername: inputMotherName.value,
        fathername: inputFatherName.value,
        universityname: inputUniversity.value,
        school: inputSchool.value,
        add: inputAddress.value,
        contact: inputContact.value
    };
    localStorage.setItem(id, JSON.stringify(formData));
    createDivFromData(formData); 
    formheader.remove();
  }
});
function validateForm() {
  // Get all required input elements
  const requiredInputs = form.querySelectorAll('[required]');
  
  // Loop through each required input
  for (const input of requiredInputs) {
      // Check if the input value is empty
      if (input.value.trim() === '') {
          alert('Please fill in all required fields.');
          return false; // Prevent form submission
      }
  }
  return true; // Allow form submission
}


