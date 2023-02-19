const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;  
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
        return alert('Усі поля повинні бути заповнені.');
    } else {
        const formData = {
            email: email,
            password: password,
        };
        console.log(formData);
        event.currentTarget.reset();
    }
}