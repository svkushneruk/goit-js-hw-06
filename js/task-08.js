
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const { email, password } = elements;
    
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені");
    } else {
        console.log({
            email: email.value,
            password: password.value,
        });
        e.target.reset();
    }
}