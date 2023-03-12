import throttle from 'lodash.throttle'


const form = document.querySelector('.feedback-form');
console.log(form);

const LOCALSTORAGE_KEY = "feedback-form-state";

const inputData = form.addEventListener('input',throttle(handleInputData, 500));


function handleInputData(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;

  const formData = {
    email: emailValue,
    message: messageValue
  };

  const storageData = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function reloadPage() {

    const dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

    if (dataForm) {
        
      email.value = dataForm.email || '';
      message.value = dataForm.message || '';
    }
  }



const submitData = form.addEventListener('submit', (event) => {
  event.preventDefault();

  const storedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  const emailValue = storedFormData.email;
  const messageValue = storedFormData.message;

  console.log({
    email: emailValue,
    message: messageValue,
  });

  localStorage.removeItem(LOCALSTORAGE_KEY);

  event.currentTarget.reset();
});

