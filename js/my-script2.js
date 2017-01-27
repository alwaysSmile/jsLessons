
//Ajax
//Основы XMLHttpRequest
//Объект XMLHttpRequest (кратко "XHR") даёт возможность из JavaScript
//делать HTTP-запросы к серверу без перезагрузки страницы. Может работать с любыми данными
//загружает файл phones.json из текущей директории и выдаёт его содержимое:

//************
//Создаём новый объект XMLHttpRequest
//var xhr = new XMLHttpRequest();
////Конфигурируем его: Get-запрос на url 'phones.json'
//xhr.open('GET', 'jsons/phones.json', false);
////Отсылаем запрос
//xhr.send();
////Если код ответа сервера не 200, то это ошибка
//if (xhr.status != 200) {
//    //обработать ошибку
//    console.log(xhr.status + ': ' + xhr.statusText);//Пример вывода 404: Not Found
//}
//else {
//    //вывести результат
//    console.log(xhr.responseText);
//}
//************

//************
//Метод open, как правило вызывается первым после создания объекта XMLHttpRequest
//Синтаксис:
//xhr.open(metod, URL, async, user, password)

//metod - HTTP-метод. Как правило используются GET или POST, хотя есть и более экзотические
//TRACE/DELETE/PUT и т.п

//URL - адрес запроса. Можно использовать не только http/https, но и другие протоколы,
//например ftp:// и file

//async - если установлено в false, то запрос производится синхронно, если true - асинхронно

//"Синхронный запрос" означает, что после вызова xhr.send()
//и до ответа сервера главный поток будет "заморожен":
//посетитель не сможет взаимодействовать со страницей - прокручивать, нажимать на кнопочки и т.п
//После получения ответа выполнение продолжится со следующей строки

//"Асинхронный запрос" означает, что браузер отправит запрос,
//а далее результат нужно будет получить через обработчик событий

//user, password - логин и пароль для HTTP-авторизации, если нужны
//************

//вызов open, в противоположность своему названию (open – англ. «открыть») не открывает соединение.
//Он лишь настраивает запрос, а коммуникация инициируется методом send.

//************
//Метод Send открывает соединение и отправляет запрос на сервер
//Синтаксис:

//xhr.send([body])

//В body находится тело запроса. GET-запрос не имеет тела,
//POST-запрос основные данные передаются через body
//************

//************
//Отмена: abort
//xhr.abort() - прерывает выполнение запроса
//************

//************
//Ответ: status, statusText, responseText

//status
//HTTP-код ответа: 200, 404, 403. 0-Если сервер не ответил, или при запросе на другой домен.

//statusText - текстовое описание статуса от сервера: OK, Not Found, Forbidden и так далее.

//responseText - текст ответа сервера

//responseXML
//Если сервер вернул XML, снабдив его правильным заголовком Content-type: text/xml,
//то браузер создаст из него XML-документ. По нему можно будет делать запросы xhr.responseXml.querySelector("...") и другие.
//************

//************

var buttonRequest = document.getElementsByClassName('button-request')[0];

function loadJson() {
    var xhr = new XMLHttpRequest();
    //Конфигурируем его: Get-запрос на url 'phones.json'
    xhr.open('GET', 'jsons/phones.json', true);
    //Отсылаем запрос
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4)
            return;
        buttonRequest.innerHTML = 'Готово';

        //Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            //обработать ошибку
            console.log(xhr.status + ': ' + xhr.statusText);//Пример вывода 404: Not Found
        } else {
            //вывести результат
            console.log(xhr.responseText);
        }

    };
    buttonRequest.innerHTML = 'Загружаю';
    buttonRequest.disabled = true;
}
;

buttonRequest.onclick = loadJson;
//************

//************
//Событие onreadystatechange происходит несколько раз в процессе отсылки и получения ответа.
//При этом можно посмотреть текущее состояние запроса в свойстве xhr.readyState.
//В примере выше мы использовали только состояние 4 (запрос завершён), но есть и другие

//const unsigned short UNSENT = 0; // начальное состояние
//const unsigned short OPENED = 1; // вызван open
//const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
//const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
//const unsigned short DONE = 4; // запрос завершён
//************

//************
function User(name) {
    this.name = name;
}
var exports = User;
var phrases = {
    Hello: "Привет",
    Run: "Запуск успешен"
}
console.log(phrases)
//exports.connect - база данных загружает фразы
exports.connect = function () {

};

exports.getPhrase = function (name) {
    console.log(phrases[name]);
    if (!phrases[name]) {
        throw  new Error("Нет такой фразы " + name);
    }
    return phrases[name];
};


var db = exports;


User.prototype.hello = function (who) {
    console.log(db.getPhrase("Hello") + ", " + who.name);
};




var vasya = new User("Вася");
var petya = new User("Петя");

vasya.hello(petya);
//************

