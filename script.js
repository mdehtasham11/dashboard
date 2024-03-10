console.log("hello world");
const form = document.getElementById('form');
const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const inputDOB = document.getElementById("inputDOB");
const inputAbout = document.getElementById("inputAbout");
const inputMotherName = document.getElementById("inputMotherName");
const inputFatherName = document.getElementById("inputFatherName");
const inputUniversity = document.getElementById("inputUniversity");
const inputSchool = document.getElementById("inputSchool");
const inputAddress = document.getElementById("inputAddress");
const inputContact = document.getElementById("inputContact");
const div = document.getElementById("container");

const submit = document.getElementById("submit-btn");


let detail = [];

submit.addEventListener('click',(event)=>{
  const id = Date.now();
  const Name = inputName.value;
  const age = inputAge.value;
  const dob = inputDOB.value;
  const about = inputAbout.value;
  const mothername = inputMotherName.value;
  const fathername = inputFatherName.value;
  const universityname = inputUniversity.value;
  const school = inputSchool.value;
  const add = inputAddress.value;
  const contact = inputContact.value;
  const formData = {id,Name,age,dob,about,mothername,fathername,universityname,school,add,contact};

  localStorage.setItem(id,JSON.stringify(formData));

  const divEle = document.createElement('div');
  const ele = `
  <div class="container border mb-2 d-flex">
          <p class="d-flex align-items-center">${Name}</p>
          <button type="button" class="btn btn-primary btn-sm my-1 ms-auto">
            Open
          </button>
        </div>
  `
  divEle.innerHTML = ele;
  div.appendChild(divEle);
  
  event.preventDefault();
  
  // form.reset();
})