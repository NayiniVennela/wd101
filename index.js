const registrationForm=document.getElementById('registration-form');
const userDataTable=document.getElementById('user-date');
const userDataTableBody=userDataTable.querySelector('tbody');
const dobInput=document.getElementById('dob');
const dobError=document.getElementById('dobError');

 window.addEventListener('load', () => {
  updateUserDataTable();
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

const userData= {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  password: document.getElementById('password').value,
  dob: document.getElementById('dob').value,
  terms: document.getElementById('terms').checked
};
  
if (!validateUserData(userData)){
  const errorMessage=document.createElement('p');
  errorMessage.textContent='Value must be 09/11/1967 or later';
  errorMessage.classList.add('error.message');

  const dateField=document.getElementById('dob');
  dateField.parentNode.appendChild(errorMessage);
}
  else {
    saveUserData(userData);
    updateUserDataTable();
    clearForm();
  }
  
});
function validateUserData(userData) {
  const minAge=18;
  const maxAge=55;

  const today = new Date();
  const birthDate = new Date(userDate.dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  if( age < minAge || age > maxAge) {
    return fale;
  }
  return true;
}
function saveUserData(userData) {
  //Retrieve existing user data or initialize an empty array
  const existingUserData = JSON.parse(localStorage.getItem('userList')) || [];
  existingUserData.push(userData);
  localStorage.setItem('userList',JSON.stringify(existingUserData));
}
function updateUserDataTable() {
  userDataTableBody.innerHTML = ' ';
    const userList=JSON.parse(localStorage.getItem('userList')) || [];
  document.createElement('tr');
  Id(headerRow);
  userList.forEach((userData) => {
    const userDataRow = createUserDataTableRow(userData);
    userDataTableBody.appendChild(userDataRow);
  });
  if (userList.length > 0) {
    userDataTable.classList.remove('hidden');
  }
  else {
    userDataTable.classList.add('hidden');
  }
}
function createUserDataTableRow(userData) {
  const row= document.createElement('tr');
  row.innerHTML= `
  <td>${userData.name}</td>
  <td>${userData.email}</td>
  <td>${userDta.password}</td>
  <td>${userData.dob}</td>
  <td>${userDta.terms ? 'true' : 'false'}</td>
  `;
  return row;
}
function clearForm() {
  registrationForm.reset();
}
  
