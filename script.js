const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register_btn');
const loginBtn = document.querySelector('.login_btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});