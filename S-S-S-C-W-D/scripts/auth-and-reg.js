let SuperLogin = "Capybara";
let SuperPass = "Capybara";

function authorizationUser()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == SuperLogin && password == SuperPass)
    {
        window.location.href = 'D:\html projects\Сервис помощи по уборик мусора\S-S-S-C-W-D\ssscwd.html';
    }
}

function registerUser() {
var username = document.getElementById("usernamesignup").value;
var email = document.getElementById("emailsignup").value;
var password = document.getElementById("passwordsignup").value;
var passwordConfirm = document.getElementById("passwordsignup_confirm").value;
// Проверка, что все поля заполнены
if (username === '' || email === '' || password === '' || passwordConfirm === '') {
    alert("Пожалуйста, заполните все поля формы.");
} else {
    // Отправка данных на сервер для регистрации пользователя
    // Добавьте здесь код для отправки данных на сервер
    alert("Вы успешно зарегистрировались!");
}
}
