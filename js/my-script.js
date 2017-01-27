//Часы
function startTime()
{
    var tm = new Date();
    var h = tm.getHours();
    var m = tm.getMinutes();
    var s = tm.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}
function checkTime(i)
{
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}
startTime();

//************
window.onload = function () {
    var elements = document.getElementsByClassName('main-el__inner');
    for (var i = 0; i < elements.length; i++) {
        var elt = elements[i];
        var title = elt.getElementsByClassName('handle')[0];
        addRevealHandler(title, elt);
    }
    function addRevealHandler(title, elt) {
        title.onclick = function () {
            var countClassInEl = elt.classList;
            for (var i = 0; i < countClassInEl.length; i++) {//перечислить классы
                console.log(countClassInEl[i]);
            }
            if (countClassInEl.contains('reveal')) {//проверить наличие класса
                elt.classList.remove('reveal');
            } else {
                elt.classList.add('reveal');
            }
        }
    }
};
//************

$(document).ready(function () {
});//end .ready

//Объекты
//Два варианта создания объектов
//var o = new Object();
//var o = {};

//Есть два синтаксиса добавления свойств в объект.
//Первый - точка, второй - квадратные скобки:
//o.test = 5;
//o["test"] = 5;

//Квадратные скобки используются в основном, когда название свойства находится в переменной:
// var name = 'test';
// o[name] = 5;
//Здесь имя свойства "test" является ключом в ассоциативном массиве, по которому лежит значение 5.
//console.log(o.test);
// console.log(o['test']);

//Свойства можно указывать непосредственно при создании объекта,
//через список в фигурных скобках вида {..., имя : значение, ...}:

//var o = {
//test: 5,
//bla: true
//};

//console.log(o['test'], o['bla']);
//Объекты

//Массивы
// var primes = [2, 3, 5, 7];
//console.log(primes);// выводит [2, 3, 5, 7]
//console.log(primes.length);// выводит 4 - количество элементов

//Добавляю новый элемент присваиванием
// primes[4] = 9;

// console.log(primes);// выводит [2, 3, 5, 7, 9]
// console.log(primes.length);// выводит 5 - количество элементов

//Массивы могут хранить другие массивы и объекты
//Массив с двумя элементами
//Каждыйй элемент это объект
//var points = [
//    {x:0, y:0},
//    {x:1, y:1}
//];
// console.log(points);

//Объект с 2 - мя свойствами
//var data = {
//	trial1:[[1, 2], [3, 4]],//Значения каждого свойства - это массив
//	trial2:[[2, 3], [4, 5]]//Элементами массива являются массивы
//};
// console.log(data);

//Функции - это параметризованные блоки програмного кода, JavaScript
//которые можно вызывать многократно

//var userName = 'Вася';
//function showMessage() {
//    var message = 'Привет, я ' + userName;
//    console.log(message);
//}
//showMessage(); // Привет, я Вася


//function plus1(x, y){
//    console.log((x + ' and ' + y));
//};
//plus1(1, 2);

//Возврат значения
//Для возврата значения используется директива return.
//Она может находиться в любом месте функции.
//Как только до неё доходит управление –
//функция завершается и значение передается обратно.
//function calcD(a, b, c) {
//   return b*b - 4*a*c;
//}
//
//var test = calcD(-4, 2, 1);
//console.log(test); // 20




//var y = 3;
//function plus1(x){//Определить функцию с именем plus1() и с параметром х
//    return x + 1;//вернуть значение на 1 больше полученного
//};
//plus1(y);
//console.log(plus1(y));//y имеет значение 3, поэтому этот вызво вернёт 3 + 1 = 4

//Функции можно присваивать переменным
//var square = function(x){
//    return x*x;
//};
//square(plus1(y));// Вызов 2 - ух функций в одном выражении => 16
//console.log(square(plus1(y)));

//Создаём массив
//var a = [];
//a.push(1, 2, 3);//Метод .push добавляет эл - ты в массив
//console.log(a);//[1, 2, 3]
//a.reverse(1, 2, 3);//Метод .reverse переставляет эл - ты в массиве в обратном порядке
//console.log(a);//[3, 2, 1]

//Функции, присвоенные свойствам объектов, называются методами
//Все объекты в javaScript имеют  методы

//Определяем собственный метод, ключевое слово this ссылается на объект,
//в котором определён метод: в данном случае на массив points

//var points = [2, 8];
//
//points.dist = function() {//Метод вычисления расстояния между точками
//    var p1 = this[0];//Первый эл-т массива, относительно которого вызван метод
//    var p2 = this[1];//Второй эл-т объекта this
//    var a = p2.x - p1.x;//Разность координат X
//    var b = p2.y - p1.y;//Разность координат Y
//    return Math.sqrt(a*a + b*b);//Теорема Пифагора, Math.sqrt ывчисляет корень квадратный
//
//};
//points.dist();
//console.log(points.dist());


//При объявлении объекта можно указать свойство-функцию, например:
//var user = {
//    name: 'Василий',
//    // метод
//    sayHi: function () {
//        console.log('Привет!');
//    }
//};
//// Вызов
//user.sayHi();

//Свойства-функции называют «методами» объектов.
//Их можно добавлять и удалять в любой момент, в том числе и явным присваиванием:
//var user = {
//  name: 'Василий'
//};
//user.sayHi = function() { // присвоили метод после создания объекта
//    var x = 5+3;
//    console.log('Привет!');
//    console.log(x);
//};
//// Вызов метода:
//user.sayHi();

//Для доступа к текущему объекту из метода используется ключевое слово this.
//Значением this является объект перед «точкой», в контексте которого вызван метод, например:
//var user = {
//    name: 'Василий',
//    sayHi: function() {
//        console.log( this.name );
//    }
//};
//user.sayHi(); // sayHi в контексте user

//function factorial2(n){
//    var i, product = 1;//Начать с i
//    for(i=2; i<=n; i++){//i автоматически увеличивается с 2 до n
//        product *= i;//Выполнять в каждом цикле. {} можно опустить, если тело цикла состоит из одной инструкции
//    console.log(product);
//    };
//    return product;//Вернуть факториал
//};
//
//factorial2(5);
//console.log(factorial2(5));

//Определение функции-конструктора для инициализации нового объекта Point
//function Point(x,y){//По соглашению имя конструкторов начинается с заглавной буквы
//    this.x = x;//this - это ссылка на инициализируемый объект
//    this.y = y;//this - Сохранить аргументы в свойствах объекта
//};//Ничего возвращать не требуется
////Чтобы создать новый экземпляр, необходимо вызвать функцию конструктор
////с ключевым словом 'new'
//var p = new Point(1,1);//Точка на плоскости с координатами (1, 1)
////Методы объектов Point определяются за счёт присваивания функций свойствам
////объекта-прототипа, ассоциированного с функцией-конструктором
//Point.prototype.r = function() {
//    return Math.sqrt(//Вернуть x² + y²
//    this.x * this.x//this это объект Point, относительно которого
//            +
//    this.y * this.y//вызывается метод
//    );
//};
////Теперь объект p типа Point(и все последующие объекты Point) наследуют метод r()
//p.r();
//console.log(p.r());// => 1.4142135623730951


//Создание объектов через "new"
//Конструктором становится любая функция, вызванная через new.


//function Animal(name) {
//  this.name = name;
//  this.canWalk = true;
//}
//
//var animal = new Animal("ёжик");

//Детальнее – функция, запущенная через new, делает следующее:

//Создаётся новый пустой объект.
//Ключевое слово this получает ссылку на этот объект.
//Функция выполняется. Как правило, она модифицирует this, добавляет методы, свойства.
//Возвращается this.
//В результате вызова new Animal("ёжик"); получаем такой объект:

//animal = {
//  name: "ёжик",
//  canWalk: true
//}

//Иными словами, при вызове new Animal происходит что-то в таком духе
//(первая и последняя строка – это то, что делает интерпретатор):

//function Animal(name) {
// this = {};

// в this пишем свойства, методы
//this.name = name;
//this.canWalk = true;

// return this;
//}

//Теперь многократными вызовами new Animal с разными параметрами мы можем
//создать столько объектов, сколько нужно. Поэтому такую функцию и называют
//конструктором – она предназначена для «конструирования» объектов.


//function moveon(){
//    //Вывести модальный диалог, чтобы получить объект пользователя
//    var answer = confirm('Ready to move on?');
//    //Если пользователь кликнул ОК, заставить браузер занрузить новую страницу
//    if(answer)window.location = 'http://google.com';
//};
////Запустить функцию, объявленную выше через 400 милисекунд
//setTimeout(moveon, 400);


//function myFunction() {
//    var btn = document.createElement("BUTTON");
//    var t = document.createTextNode("CLICK ME");
//    btn.appendChild(t);
//    document.body.appendChild(btn);
//}
//myFunction();



//function myFunction2() {
//    var d = document.createElement('div');
//    d.id = 'my-id';
//    var text = document.getElementById('text');
//    d.style.width='200px';
//    d.style.height='100px';
//    d.style.background='gray';
//    d.style.margin='0px auto';
//    text.appendChild(d);
//}
//myFunction2();

//Выводит сообщение в спецобласти для отладочных сообщений внутри документа
//Если док-т не  несодержит такой области, она создаётся
//Найти область для отладочных сообщенийв в документе, поиск по HTML - атрибуту id

//    function debug(){
//    var log = document.getElementById('debuglog');
//    //Если эл-т с атр-том id='debuglog', отсутствует, создать его.
//    if(!log){
//        log = document.createElement('div');//Создать эл-т <div></div>
//        log.id = 'debuglog';//Назаначает id
//        log.innerHTML = '<h1>Debug Log</h1>';//Создаём тэг
//        var wrap = document.getElementById('wrap');//Выбираем id="wrap"
//        wrap.appendChild(log);//В конце элемента с id="wrap" создаём <div id="debuglog"></div>
//    }
//    else{
//        console.log('Он уже есть');
//    }
//
//};
//debug();

//Обработчики событий
//var elem = document.getElementById('myButton');
//function sayThanks() {
//  alert( 'Спасибо!' );
//}
//elem.onclick = sayThanks;

//Методы addEventListener и removeEventListener являются современным способом
//назначить или удалить обработчик, и при этом позволяют использовать сколько угодно любых обработчиков.
//Назначение обработчика осуществляется вызовом addEventListener с тремя аргументами:
//element.addEventListener(event, handler[, phase]);
//event
//Имя события, например click
//handler
//Ссылка на функцию, которую надо поставить обработчиком.
//phase
//Необязательный аргумент, «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен, мы его рассмотрим позже.

//Удаление обработчика осуществляется вызовом removeEventListener:
// передать те же аргументы, что были у addEventListener
//element.removeEventListener(event, handler[, phase]);

//var elem = document.getElementById('myButton');
//elem.addEventListener("click", function() {
//    console.log('Спасибо!');
//});

//var elem = document.getElementById('myButton');
//function handler() {
//    console.log('Спасибо!');
//}
//
//elem.addEventListener("click", handler);//Назначение обработчика
//elem.removeEventListener("click", handler);//Удаление обработчика

//Узнаю количество элементов с классом button
// function find_c1() {
//   var f1 = document.getElementsByClassName('button')
//     for (var i=0; i<f1.length; i++)
//       console.log(i);
// }
//find_c1();

//Длина строки
//var s = 'Hello, world';
//console.log('Длина строки равна: ' + s.length);//=>12
//console.log(s.charAt(0));//=>H Первый символ
//console.log(s.charAt(s.length-1));//=>d Последний символ
//console.log(s.substring(1,4));//=>ell 2,3,4 символы
//console.log(s.slice(1,4));//=>ell 2,3,4 символы
//console.log(s.indexOf('l'));//=>2 Позиция 2 символа
//console.log(s.lastIndexOf('l'));//=>10 Позиция последнего символа l
//console.log(s.indexOf('l',3));//=>3 Позиция первого символа l, следующего за 3 символом в строке
//console.log(s.split(', '));//=>["Hello", "world"] разбивает на подстроки
//console.log(s.replace('h', 'H'));//=>Hello, world замещает все вхождения, все h заменяются на H
//console.log(s.toUpperCase());//=>HELLO, WORLD верхний регистр
//Методы .replace() и .toUpperCase()возвращают новые строки,
//они не изменяют строку, относительно которой были вызваны

//Строки могут интерпретироваться как массивы,
//доступные только для чтения, вместо использования .charAt()
//var s2 = 'hello, world';
//console.log(s2[0]);//=>h
//console.log(s2[s2.length-1]);//=>d

//var text = 'testing: 1, 2, 3';//Образец текста
//var pattern = /\d+/g;//Соответствует всем вхождениям одной или более цифр
//console.log(pattern.test(text));//=> true имеется совпадение
//console.log(text.search(pattern));//=> 9 имеется совпадение
//console.log(text.match(pattern));//["1", "2", "3"] - массив всех совпадений

//Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).
//function showFullName() {
//    console.log( this.firstName + " " + this.lastName );
//}
//var user = {
//    firstName: "Василий",
//    lastName: "Петров"
//};
//// функция вызовется с this=user
//showFullName.call(user) // "Василий Петров"


//Вызов функции при помощи func.apply работает аналогично func.call,
//но принимает массив аргументов вместо списка.
//func.call(context, arg1, arg2);

//var result = function.apply(thisArg[, argsArray]);

//thisArg
//Задает значение this внутри функции. Если thisArg - null или undefined, то это будет глобальный объект.
//В ином случае, this будет равно Object(thisArg) (то есть thisArg, если thisArg уже объект, или String, Boolean или Number, если thisArg -
//примитивное значение соответствующего типа).

//argsArray
//Массив аргументов, с которыми будет вызвана функция, или null/undefined для вызова без аргументов.
//Таким образом, при выполнении функции всегда соблюдается условие typeof this == 'object'.

//Вы также можете использовать arguments в качестве параметра argArray.
//Это избавляет от необходимости знать, с какими параметрами была вызвана исходная функция.

//идентичен вызову
//func.apply(context, [arg1, arg2]);
//Преимущество apply перед call отчётливо видно,
//когда мы формируем массив аргументов динамически.

//Например, в JavaScript есть встроенная функция Math.max(a, b, c...),
//которая возвращает максимальное значение из аргументов:
//console.log( Math.max(1, 5, 2) ); //=> 5

//var arr = [];
//arr.push(1);
//arr.push(5);
//arr.push(2);
//// получить максимум из элементов arr
//console.log( Math.max.apply(null, arr) ); // 5

//В примере выше мы передали аргументы через массив – второй параметр apply…
//Но вы, наверное, заметили небольшую странность? В качестве контекста this был передан null.
//Строго говоря, полным эквивалентом вызову Math.max(1,2,3) был бы вызов Math.max.apply(Math, [1,2,3]).
//В обоих этих вызовах контекстом будет объект Math.
//Но в данном случае в качестве контекста можно передавать что угодно,
//поскольку в своей внутренней реализации метод Math.max не использует this.
//Действительно, зачем this, если нужно всего лишь выбрать максимальный из аргументов?
//Вот так, при помощи apply мы получили короткий и
//элегантный способ вычислить максимальное значение в массиве!

//func.apply(context, args) // this = context (явная передача)
//func.call(context, arg1, arg2, ...)

//var result = f.apply(this, arguments); // (*)
//Этот приём называется «форвардинг вызова» (от англ. forwarding):
//текущий контекст и аргументы через apply передаются в функцию f,
// так что изнутри f всё выглядит так, как была вызвана она напрямую

//Если в объекте присутствует метод toString,
//который возвращает примитив, то он используется для преобразования.
//var user = {
//    firstName: 'Василий',
//    toString: function() {
//        return 'Пользователь ' + this.firstName;
//    }
//};
//console.log( user );  // alert=>Пользователь Василий, a console.log=>Object {firstName: "Василий"}


//Значения объектов можно изменять
//var o = {
//    x:1
//};
//
//o.x = 2;
//
//console.log( o );  //console.log=>Object {x: 2}

//Значения массивов можно изменять
//var a = [1,2,3];
//a[0] = 0;
//a[3] = 4;
//console.log(a);  //console.log=>[0, 2, 3, 4]

//var a = ['a', 'b', 'c']; // Копируемый массив
//var b = [];//Массив, куда выполняется копирование
//for(var i = 0; i < a.length; i++){//Для каждого эл - та в массиве а
//    b[i] = a[i];//Скопировать эл-т a[] в b[]
//    console.log(b[i]);
//    console.log(b);//=>["a", "b", "c"], при каждой итерации в массив добавляется эл-т
//}


//Преимущество локальной переменной над глобальной,
//т.к она находится в теле функции
//var scope = 'global';
//function  checkscope(){
//    var scope = 'local';
//    return scope;
//}
//
//checkscope();
//console.log(checkscope());//=>local

//var p = {
//    x:2.3,
//    y:-1.2
//};//Объект с двумя свойствами
//
//var q = {};//Пустой объект без свойств
//q.x = 2.3;//Теперь q имеет те же свойства, что и p
//q.y = -1.2;//Теперь q имеет те же свойства, что и p
//console.log(q);//=>Object {x: 2.3, y: -1.2}

//Выражения обращения к свойствам
//В javaScript имеется 2 способа обращения к свойствам
//выражение.идентификатор
//выражение[выражение]
//var o = {x:1, y:{z:3}};//Пример объекта
//var a = [o,4,[5,6]];//Пример массива, содержащего объект
//console.log(o.x);//=>1: свойство x выражения o
//console.log(o.y.z);//=>3: свойство z выражения o.y
//console.log(o['x']);//=>1: свойство x объекта o
//console.log(a[1]);//=>4: элемент с индексом 1 выражения а
//console.log(a[2]['1']);//=>6: элемент с индексом 1 выражения а[2]
//console.log(a[0].x);//=>1: свойство x выражения а[0]

//Оператор вопросительный знак „?“
//условие ? значение1 : значение2
//var access;
//var age = prompt('Сколько вам лет?', '');
//
//if (age > 14) {
//  access = true;
//} else {
//  access = false;
//}
//
//alert(access);

//Одно и тоже, только короче
//var access;
//var age = prompt('Сколько вам лет?', '');
//access = (age > 14) ? true : false;
//alert(access);

//Несколько операторов „?“
//
//var age = prompt('возраст',18);
//var message = (age < 3) ? 'Привет, малыш':
//    (age < 18) ? 'Привет':
//    (age < 100) ? 'Здравствуйте':
//'Какой необычный возраст';
//alert(message);


//То же самое через if..else:
//var age = prompt('возраст',18);
//if (age < 3) {
//  message = 'Здравствуй, малыш!';
//} else if (age < 18) {
//  message = 'Привет!';
//} else if (age < 100) {
//  message = 'Здравствуйте!';
//} else {
//  message = 'Какой необычный возраст!';
//}
//alert(message);


//Строгое равенство ==
//console.log(0 == false);//=>true
////Для проверки равенства без преобразования типов используются операторы строгого равенства === (тройное равно) и !==.
//console.log(0 === false);//=>false, т.к. типы различны

//console.log('1' == true);//=>true(Логическое значение true преобразуется в число 1)
//console.log('2' == true);//=>false(Логическое значение true преобразуется в число 1, 1 не равно 2)

//Оператор in требует, чтобы левый операнд был строкой или мог быть преобразован в строку
//var point = {x:1, y:1};
//console.log('x' in point);//=>true, объект имеет свойство с именем 'x'
//console.log('z' in point);//=>false, объект неимеет свойство с именем 'z'
//console.log('toString' in point);//=>true, объект наследует метод toString

//var data = [7,8,9];//Массив с эл-тами 0,1 и 2
//console.log('0' in data)//=>true, массив содержит эл-т '0'
//console.log('1' in data)//=>true, числа преобразуются в строки
//console.log('3' in data)//=>false, нет эл-та с порядковым номером 3

//var d = new Date;//Создать новый объект с помощью конструктора Date()
//console.log(d instanceof Date);//=>true, объект d был создан функцией Date()
//console.log(d instanceof Object);//=>true, все объекты являются экземплярами Object
//console.log(d instanceof Number);//=>false, d не является объектом Number

//var a = [1, 2, 3];//Создаём массив с помощью литерала массива
//console.log(a instanceof  Array);//=>true, а это массив
//console.log(a instanceof  Object);//=>true, все массивы являются объектами
//console.log(a instanceof  RegExp);//=>false, массивы не являются регулярными выражениями

//Сокращённая арифметика с присваиванием
//var n = 2;
//n = n + 5;
//console.log(n);//=>7

//Тоже самое, только сокращённое
//var n = 2;
//n += 5;
//console.log(n);//=>7


//var o = {x : 1, y : 2};//Определить объект
//console.log(o.x);//=>1
//delete o.x;//Удалить одно из его свойств
//console.log(o.x);//=>undefined
//console.log('x' in o);//=>false, св-ва больше не сущуствует

//Оператор удаления эл-та массива, оставляет в массиве 'дырку', при этом его длинна не меняется.
//В результате получается разряжённый массив
//var a = [1, 2, 3];//Создать массив
//delete a[2];//Удалить эл-т с порядковым номером 2
//console.log(2 in a);//=>false, второй эл-т больше не существует
//console.log(a.length);//=>3, длинна массива не изменилась

//Инструкция function
//Выражение присваивается переменной
//var f = function(x){
//    return x+1;
//};
//console.log(f(1));

//Инструкция включает имя переменной
//function f(x){
//    return x+1;
//};
//console.log(f(1));

//Конструкции switch
//function convert(a){
//    switch (a) {
//        case 3:
//            console.log('3');
//            break
//        case 4:
//            console.log('4');//=>4
//            break
//        case 5:
//            console.log('5');
//            break
//        default:
//            console.log('Больше 5');
//    }
//
//}
//convert(4);

//Циклы for
//for(инициализация; проверка; инкремент){
//    инструкция
//}

//for(var count = 0; count < 10; count++){
//    console.log(count);
//}

//var i, j;
//for(i = 0, j = 10; i < 10; i++, j--){
//    summ = i * j;
//    console.log(summ);
//}


//Инструкция for/in
//for (key in obj) {
//  /* ... делать что-то с obj[key] ... */
//}

//При этом for..in последовательно переберёт свойства объекта obj,
// имя каждого свойства будет записано в key и вызвано тело цикла.

//for(переменная in объект){
//    инструкция
//}

//var a = [1,3,5,7,9];
//for(var i = 0; i < a.length; i++){//Присваивать индексы в массиве переменной i
//    console.log(a[i]);//Вывести значения каждого элемента массива
//}


//var o = {
//    property1: 1,
//    property2: 2,
//    property3: 3
//};
//var valuesDrive = 0;
//for(var p in o){//Присваивать имена свойств объекта o переменной p
//    console.log(o[p]);//Вывести значение каждого свойства
//    valuesDrive++;
//}
//console.log( "Всего свойств: " + valuesDrive);//Вывести значение каждого свойства


//var menu = {
//    width: 300,
//    height: 200,
//    title: 'Menu'
//};
//
//for(var key in menu){
//    // этот код будет вызван для каждого свойства объекта
//    // ..и выведет имя свойства и его значение
//console.log('Ключ: ' + key + ' значение: ' + menu[key]);
//}

//Обратите внимание, мы использовали квадратные скобки menu[key].
//Как уже говорилось, если имя свойства хранится в переменной,
//то обратиться к нему можно только так, не через точку.


//var user = {
//    name: 'Вася',
//    surname: 'Петров'
//};
//user.age = 25;
//for(var prop in user){
//    console.log('Ключ: ' + prop + ' значение: ' + user[prop]);
//}

//var a = [1,3,5,7,8];
//var target = 3;
//for(var i = 0; i < a.length; i++){
//    console.log(a[i]);
//    if(a[i] == target){
//        console.log('Я тут выхожу');
//        break;
//    }
//}

//continue аналог break
//var data = [1,3,5,7];
//for(i=0; i < data.length; i++){
//    if(data[i] == 3){
//        console.log('Не обрабатывать');
//        continue;//Не обрабатывать неопределённые данные
//        total += data[i];
//    }
//}


//function matrixArray(rows,columns){
//    var arr = new Array();
//    for(var i=0; i<columns; i++){
//        arr[i] = new Array();
//        for(var j=0; j<rows; j++){
//            arr[i][j] = j;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
//        }
//    }
//    return arr;
//}
//var myMatrix = matrixArray(3,3);
//console.log(myMatrix);

//try & catch
//Таким образом, при ошибке в try скрипт не «падает»,
//и мы получаем возможность обработать ошибку внутри catch.

//try{
//    console.log('Начало блока try');
//    console.log('Конец блока try');
//}
//
//catch(e) {
//    console.log('Блок catch не получит управление, т,к нет ошибок');
//
//}
//console.log('Потом код продолжит выполнение');

//Пример с ошибкой
//Объект ошибки
//name
//Тип ошибки. Например, при обращении к несуществующей переменной: "ReferenceError".

//message
//Текстовое сообщение о деталях ошибки.

//stack
//Везде, кроме IE8-, есть также свойство stack, которое содержит строку с информацией
//о последовательности вызовов, которая привела к ошибке.

//try {
//  console.log('Начало блока try');  // (1) <--
//  lalala; // ошибка, переменная не определена!
//  console.log('Конец блока try');  // (2)
//}
//catch(e) {
//  console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
//}
//console.log("Потом код продолжит выполнение...");

//В JavaScript есть встроенный метод JSON.parse(str),
// который используется для чтения JavaScript-объектов (и не только) из строки.

//var data = '{"name": "Вася", "age": 30}';//строка с данными, полученная из сервера
//var user = JSON.parse(data);//преобразовали строку в объект
//// теперь user -- это JS-объект с данными из строки
//console.log(user.name);
//console.log(user.age);


//Используем try..catch, чтобы обработать некорректный ответ:

//var data = 'Has Error';//В данных ошибка
//try{
//var user = JSON.parse(data);//<= ошибка при выполнении
//    console.log(user.name);//не сработает
//}
//
//catch (e){
//    //..выполнится catch
//    console.log(e.name);//=>SyntaxError
//    console.log(e.message);//=>SyntaxError
//}


//Оператор throw
//Оператор throw генерирует ошибку.
//Синтаксис: throw <объект ошибки>.


//var data = '{ "age": 30 }'; // данные неполны
//try {
//    var user = JSON.parse(data); // <-- выполнится без ошибок
//    if (!user.name) {
//        throw new SyntaxError("Данные некорректны");
//    }
//    console.log( user.name );
//}
//catch (e) {
//    console.log( "Извините, в данных ошибка" );
//}


//Создание объектов с помощью оператора new
//var o = new Object();//Создать новый пустой объект, тоже, что и {}.
//var a = new Array();//Создать пустой массив, тоже, что и [].
//var d = new Date();//Создать объект Date, пердставляющий текущее время
//var r = new RegExp('js');//Создать объект RegExp для операций сопоставления с шаблоном


//var o1 = Object.create({x:1, y:2});//o1 наследует свойства x y
//console.log(o1);

//var o2 = Object.create(null);//o2 не наследует не свойств не методов
//console.log(o2);

//var o3 = Object.create(Object.prototype);//подобен объекту созданному с помошью {} или new Object() - пустой объект
//console.log(o3);



//var animal = {
//    eats: true
//};
//var rabbit = {
//    jumps: 25
//};
//
//rabbit.__proto__ = animal;
//
//// в rabbit можно найти оба свойства
//console.log( rabbit.jumps ); // 25
//console.log( rabbit.eats ); // true

//Получение и изменение свойств

//var author = book.author;//Получить свойство author объекта book
//var name = author.surname;//Получить свойство surname объекта author
//var title = book['main title'];//Получить свойство 'main title' объекта book

//Создать новое своййтво или изменить значение существующего
//book.edition = 6;//Создать свойство edition объекта book
//book['main title'] = 'ECMAScript'//Изменить значение св-ва

//var addr = '';
//for(i=0; i < 4; i++){
//addr += ['address' + i] + '\n';
//}
//console.log(addr);//address0 address1 address2 address3

//Проверка существования свойств
//var o = {x:1};
//console.log('x' in o);//=> true, o имеет собственное свойство 'x'
//console.log('y' in o);//=> false, o НЕ имеет собственное свойство 'y'
//console.log('toString' in o);//=> true, o имеет собственное свойство 'toString'

// Метод hasOwnProperty() объекта проверяет, имеет ли объект собственное свойство с указанным именем
//var o = {x:1};
//console.log(o.hasOwnProperty('x'));//=> true, o имеет собственное свойство 'x'
//console.log(o.hasOwnProperty('y'));//=> false, o НЕ имеет собственное свойство 'y'
//console.log(o.hasOwnProperty('toString'));//=> true, o имеет собственное свойство 'toString'

//метод propertyIsEnumerable возвращает true, если указанное свойство является собственным свойством
//var o = {y:2};
//o.x = 1;
//console.log(o.propertyIsEnumerable('x'));//=>true o имеет собственное перечислимое свойство x
//console.log(o.propertyIsEnumerable('y'));//=>true y унаследованное свойство, не собственное
//console.log(Object.prototype.propertyIsEnumerable('toString'));//=>false не перечислимое

//Если о имеет св-во х, значение которого отлично от null и underfind,
// то удвоить это значение
//var o = {x:2};
//if(o.x!= null){
//    o.x *= 2;
//    console.log(o.x);
//}

//Если о имеет св-во х, значение которого не может быть преобразованно в false, то удвоить это значение.
// Если х имеет значение null, underfind, false, "", o или NaN,
// оставить его в исходном состоянии
//var o = {x:2};
//if(o.x){
//    o.x *= 2;
//    console.log(o.x);
//}


//Перечисление свойств
//var o = {x:1, y:2, z:3};//Три собственных перечислимых свойства
//console.log(o.propertyIsEnumerable('toString'));//=>false; неперечислимое
//for(p in o){//Цикл по свойствам
//    console.log(p +': '+o[p]);//=> x, y, z, но не toString
//}


//var p = {x:1, y:2, z:3};
//var o = {};
//for(prop in p){
//    o[prop] = p[prop];//Добавить свойство в объект о
//    console.log(prop +': '+o[prop]);//=>x: 1, y: 2, z: 3
//}


//Дескрипторы в примерах

// Основной метод для управления свойствами – Object.defineProperty.
//Он позволяет объявить свойство объекта и, что самое главное,
//тонко настроить его особые аспекты, которые никак иначе не изменить.
//    Object.defineProperty(obj, prop, descriptor)

//Аргументы:
//obj - Объект, в котором объявляется свойство.
//prop - Имя свойства, которое нужно объявить или модифицировать.
//descriptor - Дескриптор – объект, который описывает поведение свойства.

//В нём могут быть следующие поля:
//value – значение свойства, по умолчанию undefined
//writable – значение свойства можно менять, если true. По умолчанию false.
//configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
//enumerable – если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
//get – функция, которая возвращает значение свойства. По умолчанию undefined.
//set – функция, которая записывает значение свойства. По умолчанию undefined.

//var user = {};
//// 1. простое присваивание
//user.name = 'Вася';
// 2. указание значения через дескриптор
//Object.defineProperty(user, 'name',{
//    value: 'Вася',
//    configurable: true,
//    writable: true,
//    enumerable: true
//});
//Оба вызова выше добавляют в объект user обычное (удаляемое, изменяемое, перечисляемое) свойство.

//Дескриптор позволяет задать свойство, которое на самом деле работает как функция.
//Для этого в нём нужно указать эту функцию в get.
//Например, у объекта user есть обычные свойства: имя firstName и фамилия surname.
//Создадим свойство fullName, которое на самом деле является функцией:

//var user = {
//  firstName: "Вася",
//  surname: "Петров"
//}
//
//Object.defineProperty(user, "fullName", {
//  get: function() {
//    return this.firstName + ' ' + this.surname;
//  }
//});
//
//console.log(user.fullName); //=> Вася Петров

//Обратим внимание, снаружи fullName – это обычное свойство user.fullName.
//Но дескриптор указывает, что на самом деле его значение возвращается функцией.
//Также можно указать функцию, которая используется для записи значения, при помощи дескриптора set.
//Например, добавим возможность присвоения user.fullName к примеру выше:

// var user = {
//  firstName: "Вася",
//  surname: "Петров"
//}
//
//Object.defineProperty(user, "fullName", {
//
//  get: function() {
//    return this.firstName + ' ' + this.surname;
//  },
//
//  set: function(value) {
//      var split = value.split(' ');
//      this.firstName = split[0];
//      this.surname = split[1];
//    }
//});
//
//user.fullName = "Петя Иванов";
//console.log( user.firstName ); // Петя
//console.log( user.surname ); // Иванов

//Указание get/set в литералах
//var user = {
//  firstName: "Вася",
//  surname: "Петров",
//
//  get fullName() {
//    return this.firstName + ' ' + this.surname;
//  },
//
//  set fullName(value) {
//    var split = value.split(' ');
//    this.firstName = split[0];
//    this.surname = split[1];
//  }
//};
//
//console.log( user.fullName ); // Вася Петров (из геттера)
//
//user.fullName = "Петя Иванов";
//console.log( user.firstName ); // Петя  (поставил сеттер)
//console.log( user.surname ); // Иванов (поставил сеттер)


//function  User(name, age){
//    this.name = name;
//    this.age = age;
//}
//    var pete = new User('Петя', '25');
//    console.log(pete.name);


//Например, в User может стать более целесообразно
// вместо возраста age хранить дату рождения birthday:
//function User(name, birthday) {
//    this.name = name;
//    this.birthday = birthday;
//}
//
//var pete = new User("Петя", new Date(1987, 6, 1));
//Что теперь делать со старым кодом, который выводит свойство age?
//Можно, конечно, найти все места и поправить их, но это долго, а иногда и невозможно,
// скажем, если вы взаимодействуете со сторонней библиотекой, код в которой – чужой и влезать в него нежелательно.
//Добавление get-функции age позволяет обойти проблему легко и непринуждённо:
//function User(name, birthday) {
//    this.name = name;
//    this.birthday = birthday;
//
//// age будет высчитывать возраст по birthday
//    Object.defineProperty(this, "age", {
//        get: function() {
//            var todayYear = new Date().getFullYear();
//            return todayYear - this.birthday.getFullYear();
//        }
//    });
//}
//
//var pete = new User("Петя", new Date(1987, 6, 1));
//console.log( pete.birthday ); // и дата рождения доступна
//console.log( pete.age );      // и возраст

//var p = {
//    x: 1.0,
//    y: 1.0,
//    //r - доступное для чтения/записи свойство с двумя методами доступа
//    get r(){
//        return Math.sqrt(this.x*this.y + this.y*this.y);
//    },
//    set r(newvalue){
//        var oldvalue = Math.sqrt(this.x*this.y + this.y*this.y);
//        var ratio = newvalue/oldvalue;
//        this.x *= ratio;
//        this.y *= ratio;
//    },
//    //theta - доступное только для чтения свойство
//    get theta(){
//        return Math.atan2(this.y, this.x);
//    }
//
//};
//console.log( p.r ); // =>1.4142135623730951
//console.log( p.theta ); // =>1.4142135623730951

//document.getElementById("indoor").setAttribute("data-id2", "special");
//console.log(document.getElementById("myId").innerHTML);//=><div id="indoor" data-id2="special"></div>

//elem - это название id, в котором мы ищем атрибут 'data-id' и получаем его содержимое 'Elephant',
//это помогает нам избежать большой записи document.getElementById("elem") - найти атрибут,
// а потом записать .setAttribute("data-id2", "special"), где data-id2, а special его значение;
//console.log( elem.getAttribute('data-id'));//Значительно сокращённая запись
//elem.setAttribute('data-id3', 'third');//Значительно сокращённая запись, выборка id="elem" и добавляем атрибут data-id3 со значением third
//console.log(elem.getAttribute("data-id3"));//=>third
//console.log( document.body.innerHTML ); //Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки. В innerHTML можно и читать и писать.
//Коллекция attributes содержит все атрибуты в виде объектов со свойствами name и value.
//var attrs = elem.attributes; // (4) все атрибуты элемента можно получить с помощью свойства elem.attributes
//for (var i = 0; i < attrs.length; i++) {
//    //attrs[i].name - это название атрибута id, attrs[i].value - значение атрибута elem
//  console.log( attrs[i].name + " = " + attrs[i].value );//=>id = elem, data-id = Elephant
//}

//Object.seal() - объект нельзя будет вернуть в прежнее состояние
//Object.freeze() - более жёсткая фиксация для объектов,
// 1. Делает объект нерасширяемым, а его свойства не доступными для настройки
// 2. Он также делает все собственные свойства с данными, доступными только для чтения

//Object.create(prototype, descriptors) - Создает объект, который имеет указанный прототип и (необязательно) содержит указанные свойства.


//Создать нерасширямый объект с ненастраиваемыми свойствами,
// с жёстко зафиксированным прототипом, недоступным для перечисления

//var o = Object.seal(Object.create(Object.freeze({x: 1}),{y: {value: 2, writable: true}}));
//console.log(o);


//Сериализация объектов - процесс преобразования объектов в строковую форму представления
//o = {x:1, y:{z:[false, null, '']}};//Определить испытательный объект
//s = JSON.stringify(o);//Метод JSON.stringify() преобразует значение JavaScript в строку JSON
//console.log(s);//=>{"x":1,"y":{"z":[false,null,""]}}
//p = JSON.parse(s);//Вызов JSON.parse(str) превратит строку с данными в формате JSON в JavaScript-объект/массив/значение.
//console.log(p);


//JSON.parse – читает объекты из строки в формате JSON.
//JSON.stringify – превращает объекты в строку в формате JSON, используется, когда нужно из JavaScript передать данные по сети.

//var numbers = '[0, 1, 2, 3]';
//numbers = JSON.parse(numbers);
//console.log(numbers);//=>[0, 1, 2, 3]
//console.log(numbers[0]);//=>0


//var user = '{"name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//user = JSON.parse(user);
//console.log( user); //=> Object {name: "Вася", age: 35, isAdmin: false, friends: Array[4]}
//console.log( user.friends[1] ); //=> 1

//Объекты в формате JSON похожи на обычные JavaScript-объекты,
// но отличаются от них более строгими требованиями к строкам – они должны быть именно в двойных кавычках.

//{
//    name: "Вася",       // ошибка: ключ name без кавычек!
//        "surname": 'Петров',// ошибка: одинарные кавычки у значения 'Петров'!
//    "age": 35,           // .. а тут всё в порядке.
//    "isAdmin": false    // и тут тоже всё ок
//}

//Кроме того, в формате JSON не поддерживаются комментарии. Он предназначен только для передачи данных.

//Для интеллектуального восстановления из строки у JSON.parse(str, reviver) есть второй параметр reviver,
// который является функцией function(key, value).
//var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
//var event = JSON.parse(str, function(key, value){
//    if(key == 'date')
//        return new Date(value);
//        return value;
//});
//
//console.log(event.date);//=>Sun Nov 30 2014 15:00:00 GMT+0300 (RTZ 2 (зима))
////.getDate() - Возвращает целое число от 1 до 31.
//console.log(event.date.getDate());//=>30


//Кстати, эта возможность работает и для вложенных объектов тоже:
//var schedule = '{ \
//  "events": [ \
//    {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
//    {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"} \
//  ]\
//}';
//
//schedule = JSON.parse(schedule, function(key, value) {
//    if (key == 'date') return new Date(value);
//    return value;
//});
//console.log( schedule.events[1].date.getDate() ); //=> 18

//Сериализация, метод JSON.stringify
//Метод JSON.stringify(value, replacer, space) преобразует («сериализует») значение в JSON-строку.

//var event = {
//    title: "Конференция",
//    date: "сегодня"
//};
//
//var str = JSON.stringify(event);
//console.log(str);//=>{"title":"Конференция","date":"сегодня"}
//
////Обратное преобразование
//event = JSON.parse(str);
//console.log(event);//=>Object {title: "Конференция", date: "сегодня"}

//При сериализации объекта вызывается его метод toJSON.
//Если такого метода нет – перечисляются его свойства, кроме функций.
//Посмотрим это в примере посложнее:


//var room = {
//    number: 23,
//    occupy: function(){
//        console.log(this.number);
//    }
//};
//
//event = {
//    title: "Конференция",
//    date: new Date(Date.UTC(2014, 0, 1)),
//    room: room
//};
//
//console.log( JSON.stringify(event) );//{"title":"Конференция","date":"2014-01-01T00:00:00.000Z","room":{"number":23}}

//Обратим внимание на два момента:
//1. Дата превратилась в строку. Это не случайно: у всех дат есть встроенный метод toJSON. Его результат в данном случае – строка в таймзоне UTC.
//2. У объекта room нет метода toJSON. Поэтому он сериализуется перечислением свойств.
//Мы, конечно, могли бы добавить такой метод, тогда в итог попал бы его результат:

//var room = {
//    number: 23,
//    toJSON: function(){
//        return this.number
//    }
//};
//console.log(JSON.stringify(room));//=> 23
//event = {
//    title: "Конференция",
//    date: new Date(Date.UTC(2014, 0, 1)),
//    room: room
//};
//console.log( JSON.stringify(event) );//{"title":"Конференция","date":"2014-01-01T00:00:00.000Z","room":23}

//Метод .toString
//var s = {x:1, y:1}.toString();
//console.log(s);//=> [object Object]

//Массивы
//var empty = [];//Пустой массив
//console.log(empty);//=>[]
//var primes = [2, 3, 5, 7, 11];//Массив с 5 числовыми эл-тами
//console.log(primes);//=>[2, 3, 5, 7, 11]
//var misc = [1.1, true, 'a', ];//3 эл-та разых типов + завершающая запятая
//console.log(misc);//=>[1.1, true, "a"]

//Значения в массиве не обязательно могут быть константами - это могут быть любые выражения
//var base = 1024;
//    var table = [base, base+1, base+2, base+3];
//console.log(table);//=>[1024, 1025, 1026, 1027]


//Литералы массивов могут содержать литералы объектов или других массивов
//var b = [[1,{x:1, y:2}], [2,{x:3, y:4}]];
//console.log(b);//=>[Array[2], Array[2]]

//Другой способ создания массива состоит в вызове конструктора  Array().
// Вызвать конструктор можно тремя способами:
// 1. Вызвать конструктор без аргументов, аналогично []
//var a = new Array();

//2. Вызвать конструктор с единственным числовым аргументом, определяющим длинну массива
//var a = new Array(10);
//В этом случае будет создан пустой массив указанной длинны

//3. Явно указать в вызове конструктора значения первых двух
// или более элементов массива или один нечисловой эл-т
//var a = new Array(5, 4, 3, 2, 1, 'testing, testing');
//console.log(a);//=>[5, 4, 3, 2, 1, "testing, testing"]


//Чтение и запись элеменов массивов
//var a = ['world'];//Cоздать массив с одним эл-том
//var value = a[0];//Прочитать эл-т 0
//console.log(value);//=>world
//a[1] = 3.14;//Записать значение в эл-т 1
//console.log(a);//=>["world", 3.14]
//i = 2;
//a[i] = 3;//Записать значение в эл-т 2
//console.log(a);//=>["world", 3.14, 3]
//    a[i + 1] = 'hello';//Записать значение в эл-т 3
//console.log(a);//=>["world", 3.14, 3, "hello"]
//a[a[i]] = a[0];//Прочитать эл-т 0, записать значение в элемент 3
//console.log(a);//=>["world", 3.14, 3, "world"]

//Добавление и удаление массива

//var a = [1,2,3];
//delete  a[1];//теперь в массиве a отсутствует эл-т с индексом 1
////После удаления эл-та массив превращается в разряжённый массив
//console.log(1 in a);//=>false
//console.log(a.length);//=>3; оператор delete не изменяет свойство length

//Обход эл-тов масства  используется цикл for

//var o = {
//    name: 'Вася',
//    age: 25
//};

//var keys = Object.keys(o);//Получить массив имён свойств объекта o
//var values = [];//Массив для сохранения значений свойств
//for (var i=0; i < keys.length; i++){//Для каждого эл - та в массиве
//    var key = keys[i];//Получить имя свойства по индексу
//    values[i] = o[key];//Сохранить значение в массиве values
//}
//console.log(values);//=>["Вася", 25]

//var o = {
//    name: 'Вася',
//    age: 25
//};
//var keys = Object.keys(o);//Получить массив имён свойств объекта o
//var values = [];//Массив для сохранения значений свойств
//for (var i=0; i < keys.length; i++){//Для каждого эл - та в массиве
//    //Предполагается, что это плотный массив и все эл-ты содержат допустимые значения, по-этому делаем проверку ниже
//    if(!keys[i]) continue;//Пропустить null, underfined и не существующие эл-ты
//    var key = keys[i];//Получить имя свойства по индексу
//    values[i] = o[key];//Сохранить значение в массиве values
//}
//console.log(values);//=>["Вася", 25]

//forEach метод для «умного» перебора массивов
//Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
//Он для каждого элемента массива вызывает функцию callback.
//Этой функции он передаёт три параметра callback(item, i, arr):
//item – очередной элемент массива.
//i – его номер.
//arr – массив, который перебирается.

//var arr = ["Яблоко", "Апельсин", "Груша"];
//arr.forEach(function (item, i, arr) {
//    console.log(i + ': ' + item + ' (массив: ' + arr + ')');
//})
//=>0: Яблоко (массив: Яблоко,Апельсин,Груша)
//=>1: Апельсин (массив: Яблоко,Апельсин,Груша)
//=>2: Груша (массив: Яблоко,Апельсин,Груша)

//Методы pop/push, shift/unshift
//Конец массива

//pop - Удаляет последний элемент из массива и возвращает его:
//var fruits = ["Яблоко", "Апельсин", "Груша"];
//console.log(fruits.pop());//=>Груша; Удалили груша
//console.log(fruits);//=>["Яблоко", "Апельсин"]

//push - Добавляет элемент в конец массива:
//Вызов fruits.push(...) равнозначен fruits[fruits.length] = ....
//var fruits = ["Яблоко", "Апельсин"];
//fruits.push('Груша');//=>["Яблоко", "Апельсин"]
//console.log(fruits);//=>["Яблоко", "Апельсин", "Груша"]

//Начало массива
//shift - Удаляет из массива первый элемент и возвращает его:
//var fruits = ["Яблоко", "Апельсин", "Груша"];
//console.log(fruits.shift());//=>Яблоко; Удалили Яблоко
//console.log(fruits);//=>["Апельсин", "Груша"]

//unshift - Добавляет элемент в начало массива:
//var fruits = ["Апельсин", "Груша"];
//fruits.unshift('Яблоко');//добавить Яблоко
//console.log(fruits);//=>["Яблоко", "Апельсин", "Груша"]

//Методы push и unshift могут добавлять сразу по несколько элементов:
//var fruits = ["Яблоко"];
//fruits.push("Апельсин", "Персик");
//fruits.unshift("Ананас", "Лимон");
//console.log(fruits);//=>["Ананас", "Лимон", "Яблоко", "Апельсин", "Персик"]


//Массив – это объект, где в качестве ключей выбраны цифры, с дополнительными методами и свойством length.
//Так как это объект, то в функцию он передаётся по ссылке:

//function eat(arr){
//    arr.pop();
//}
//
//var arr = ["нам", "не", "страшен", "серый", "волк"];
//console.log(arr.length);//=> 5
//eat(arr);
//eat(arr);
//console.log(arr.length);//=> 3

//Ещё одно следствие – можно присваивать в массив любые свойства.
//var fruits = []; // создать массив
//fruits[99999] = 5; // присвоить свойство с любым номером
//fruits.age = 25; // назначить свойство со строковым именем
//console.log(fruits);//=>[99999: 5, age: 25]

//Вывод массива с «дырами»
//var a = [];
//a[0] = 0;
//a[5] = 5;
//console.log( a ); //Chrome=> [0, 5: 5], Firefox=> Array [ 0, <4 пустых слота>, 5 ]

//Многомерные массивы
//var matrix = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
//];
//console.log(matrix[1][1]);//=>5, центральный элемент

//Создать многомерный массив
//var table = new Array(10);//В таблице 10 строк
//for(var i = 0; i < table.length; i++){
//    table[i] = new Array(10);// В каждой строке 10 столбцов
//}
////Инициализировать массив
//for (var row = 0; row < table.length; row++){
//    for (var col = 0; col < table.length; col++){
//        table[row][col] = row*col;
//    }
//}
//console.log(table);

//Метод join() - преобразует все эл-ты массива в строки, объеденяет их и возвращает получившуюся строку
//Метод join() - является обратным по отношению к методу String.split(), создающему массив путём разбиения строки на фрагменты
//Если строка-разделитель не указана, используется запятая
//var a = [1, 2, 3];//Создаёт массив с указанными тремя эл-тами
//console.log(a.join());//=>"1,2,3"
//console.log(a.join(" "));//=>"1 2 3"
//console.log(a.join(""));//=>"123"
//var b = new Array(10);//Массив с длинной, равной 10, и без эл-тов
//console.log(b.join('-'));//=> '---------'; Строка из 9 дефисов

//Метод split - позволяет превратить строку в массив, разбив ее по разделителю s.
//var names = 'Маша, Петя, Марина, Василий';
//var arr = names.split(', ');
//for (var i = 0; i < arr.length; i++){
//    console.log('Вам сообщение ' + arr[i]);
//}

//У метода split есть необязательный второй аргумент – ограничение на количество элементов в массиве.
//Если их больше, чем указано – остаток массива будет отброшен:
//console.log('a,b,c,d'.split(',', 2));//["a", "b"]

//var str = 'тест';
//console.log(str.split(''));//["т", "е", "с", "т"]

//Метод join
//Вызов arr.join(str) делает в точности противоположное split.
// Он берет массив и склеивает его в строку, используя str как разделитель.

//var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
//var str = arr.join(';');//; - это разделитель между эл-тами
//console.log(str);//=>Маша;Петя;Марина;Василий

//new Array + join = Повторение строки
//Код для повторения строки 3 раза:
//console.log(new Array(4).join('ля'));//=>ляляля
//Как видно, new Array(4) делает массив без элементов длины 4, который join объединяет в строку, вставляя между его элементами строку "ля".
//В результате, так как элементы пусты, получается повторение строки. Такой вот небольшой трюк.

//Удаление из массива
//Так как массивы являются объектами, то для удаления ключа можно воспользоваться обычным delete:
//var arr = ["Я", "иду", "домой"];
//delete arr[1];//значение с индексом 1 удалено
//console.log(arr);//=>["Я", 2: "домой"]
//console.log(arr[1]);//=>undefined

//Метод splice
//Метод splice – это универсальный раскладной нож для работы с массивами.
//Умеет все: удалять элементы, вставлять элементы, заменять элементы – по очереди и одновременно.
//Его синтаксис:
//arr.splice(index[, deleteCount, elem1, ..., elemN])
//Удалить deleteCount элементов, начиная с номера index,
//а затем вставить elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.

//var arr = ["Я", "изучаю", "JavaScript"];
//arr.splice(1, 1);//начиная с позиции 1, удалить 1 элемент
//console.log(arr);//=>["Я", "JavaScript"]

//var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//arr.splice(0, 3, "Мы", "изучаем");//удалить 3 первых элемента и добавить другие вместо них
//console.log(arr);//=>["Мы", "изучаем", "JavaScript"]

//var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
//var removed = arr.splice(0, 2);//удалить 2 первых элемента
//console.log(removed);//=>["Я", "сейчас"] - Здесь видно, что splice возвращает массив из удаленных элементов:


//Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:
//var arr = ["Я", "изучаю", "JavaScript"];
//// с позиции 2
//// удалить 0
//// вставить "сложный", "язык"
//arr.splice(2, 0, "сложный", "язык");
//console.log(arr);//=>["Я", "изучаю", "сложный", "язык", "JavaScript"]

//Допускается использование отрицательного номера позиции, которая в этом случае отсчитывается с конца:
//var arr = [1, 2, 5];
//// начиная с позиции индексом -1 (перед последним элементом)
//// удалить 0 элементов,
//// затем вставить числа 3 и 4
//arr.splice(-1, 0, 3, 4);
//console.log(arr);//=>[1, 2, 3, 4, 5]

//Метод slice
//Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.
//var arr = ["Почему", "надо", "учить", "JavaScript"];
//var arr2 = arr.slice(1, 3);// элементы 1, 2 (не включая 3)
//console.log(arr2);//=>["надо", "учить"] - возвращает массив удалённых эл-тов

//Аргументы ведут себя так же, как и в строковом slice:
//Если не указать end – копирование будет до конца массива:

//var arr = ["Почему", "надо", "учить", "JavaScript"];
//console.log(arr.slice(1));//=>["надо", "учить", "JavaScript"] - взять все элементы, начиная с номера 1

//Можно использовать отрицательные индексы, они отсчитываются с конца:
//var arr = ["Почему", "надо", "учить", "JavaScript"];
//var arr2 = arr.slice(-2);//-копировать от 2-го элемента с конца и дальше
//console.log(arr2);//=>["учить", "JavaScript"]

//Если вообще не указать аргументов – скопируется весь массив:
//var arr = ["Почему", "надо", "учить", "JavaScript"];
//var fullCopy = arr.slice();
//console.log(fullCopy);//=>["Почему", "надо", "учить", "JavaScript"]
//Синтаксис метода slice одинаков для строк и для массивов. Тем проще его запомнить.

//Сортировка, метод sort(fn)
//Метод sort() сортирует массив на месте
//var arr = [1, 2, 15];
//arr.sort();
//console.log(arr);//=>[1, 15, 2]
//по умолчанию sort сортирует, преобразуя элементы к строке.

//Свой порядок сортировки
//Для указания своего порядка сортировки в метод arr.sort(fn)
//нужно передать функцию fn от двух элементов, которая умеет сравнивать их.
//function compareNumeric(a, b){
//    if(a > b){
//        return 1;
//    }
//    else if(a < b){
//        return -1;
//    }
//}
//
//var arr = [1, 2, 15];
//arr.sort(compareNumeric);
//console.log(arr);//=>[1, 2, 15]
//Обратите внимание, мы передаём в sort() именно саму функцию compareNumeric, без вызова через скобки.
//Алгоритм сортировки, встроенный в JavaScript, будет передавать ей для сравнения элементы массива. Она должна возвращать:
//Положительное значение, если a > b,
//Отрицательное значение, если a < b,
//Если равны – можно 0, но вообще – не важно, что возвращать, их взаимный порядок не имеет значения.

//Кстати, те значения, с которыми sort вызывает функцию сравнения, можно увидеть, если вставить в неё console.log:
//[1, -2, 15, 2, 0, 8].sort(function(a, b) {
//    console.log( a + " <> " + b );
//});

//Сравнение compareNumeric в одну строку
//Эта функция вполне подходит для sort, так как возвращает положительное число, если a > b,
// отрицательное, если наоборот, и 0, если числа равны.
//function compareNumeric(a, b){
//    return a - b;
//}
//
//var arr = [1, 2, 15];
//arr.sort(compareNumeric);
//console.log(arr);//=>[1, 2, 15]

//Оператор return завершает выполнение текущей функции и возвращает значение этой функции.
//При вызове оператора return в функции, выполнение этой функции прекращается.
//Данная функция возвращает квадрат аргумента x, где x - число.
//function square(x){
//    return x * x;
//}
//square(2);
//console.log(square(2));

//reverse
//Метод arr.reverse() меняет порядок элементов в массиве на обратный.
//var arr = [1, 2, 3];
//arr.reverse();
//console.log(arr);//=>[3, 2, 1]

//concat
//Метод arr.concat(value1, value2, … valueN) создаёт новый массив,
//в который копируются элементы из arr, а также value1, value2, ... valueN.
//У concat есть одна забавная особенность.
//Если аргумент concat – массив, то concat добавляет элементы из него.
//var arr = [1, 2];
//var newArr = arr.concat([3, 4], 5);// то же самое, что arr.concat(3,4,5)
//console.log(newArr);//=>[1, 2, 3, 4, 5]

//indexOf/lastIndexOf
//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.
//Для поиска используется строгое сравнение ===.
//var arr = [1, 0, false];
//console.log(arr.indexOf(0));//=>1
//console.log(arr.indexOf(false));//=>2
//console.log(arr.indexOf(null));//=>-1
//Метод «arr.lastIndexOf(searchElement[, fromIndex])» ищет справа-налево: с конца массива или с номера fromIndex, если он указан.
//Если нужно проверить, существует ли значение в массиве – его нужно перебрать.
//Только так. Внутренняя реализация indexOf/lastIndexOf осуществляет полный перебор,
//аналогичный циклу for по массиву. Чем длиннее массив, тем дольше он будет работать.

//Коллекция уникальных элементов
//Рассмотрим задачу – есть коллекция строк, и нужно быстро проверять:
//есть ли в ней какой-то элемент. Массив для этого не подходит из-за медленного indexOf.
//Но подходит объект! Доступ к свойству объекта осуществляется очень быстро,
//так что можно сделать все элементы ключами объекта и проверять, есть ли уже такой ключ.

//var store = {};// объект для коллекции
//var items = ['div', 'a', 'form'];
//for(var i = 0; i < items.length; i++){
//    var key = items[i];// для каждого элемента создаём свойство
//    store[key] = true;// значение здесь не важно
//}
//console.log(store);
//Такое решение работает только со строками, но применимо к любым элементам, для которых можно вычислить строковый «уникальный ключ».

//Object.keys(obj)
//Ранее мы говорили о том, что свойства объекта можно перебрать в цикле for..in.
//Если мы хотим работать с ними в виде массива, то к нашим услугам – замечательный метод Object.keys(obj).
//var user = {
//    name: 'Петя',
//    age: 30
//};
//
//var keys = Object.keys(user);
//console.log(keys);//=>["name", "age"]

//filter
//Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
//Он создаёт новый массив, в который войдут только те элементы arr,
//для которых вызов callback(item, i, arr) возвратит true.
//var arr = [1, -1, 2, -2, 3];
//var positiveArr = arr.filter(function(number) {
//    return number > 0;
//});
//console.log(positiveArr);//=>[1, 2, 3]

//map
//Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
//Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.
//var names = ['HTML', 'CSS', 'JavaScript'];
//var nameLengths = names.map(function(name) {
//    return name.length;
//});
//// получили массив с длинами
//console.log(nameLengths );//=>// 4,3,10
//Метод map() передаёт указанной функции каждый эл-т массива, относительно которого он вызван
//и возвращает массив значений, возвращаемых этой функцией
//a = [1, 2, 3];
//b = a.map(function(x) {
//    return x*x;
//});
//console.log(b);//=>b=[1, 4, 9];

//var numbers = [1, 4, 9];
//var doubles = numbers.map(function(num) {
//    return num * 2;
//});
//console.log(doubles);//=>[2, 8, 18] - теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

//reduce/reduceRight
//Метод «arr.reduce(callback[, initialValue])» используется для последовательной
//обработки каждого элемента массива с сохранением промежуточного результата.
//Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.
//Аргументы функции callback(previousValue, currentItem, index, arr):
//previousValue – последний результат вызова функции, он же «промежуточный результат».
//currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
//index – номер текущего элемента.
//arr – обрабатываемый массив.
//Например, в качестве «свёртки» мы хотим получить сумму всех элементов массива.
//var arr = [1, 2, 3, 4, 5];
//// для каждого элемента массива запустить функцию,
//// промежуточный результат передавать первым аргументом далее
//var result = arr.reduce(function(sum, current) {
//    console.log(sum);
//    console.log(current);
//   return sum + current;
//}, 0);
//console.log(result);//=>15
//При первом запуске sum – исходное значение, с которого начинаются вычисления, равно нулю (второй аргумент reduce).
//Сначала анонимная функция вызывается с этим начальным значением и первым элементом массива,
//результат запоминается и передаётся в следующий вызов, уже со вторым аргументом массива,
//затем новое значение участвует в вычислениях с третьим аргументом и так далее.

//Объект, подобный массиву
//var a = {'0':'a', '1':'b', '2':'c', length:3};//Объект, подобный массиву
//console.log(Array.prototype.join.call(a, '+'));//=>a+b+c
//console.log(Array.prototype.slice.call(a, 0));//=>["a", "b", "c"]
//var newTransformArray = Array.prototype.map.call(a, function(x) {
//    return x.toUpperCase();
//});
//console.log(newTransformArray);//=>["A", "B", "C"]


//Строки как массивы
//var s = 'test';
//console.log(s.charAt(0));//=>t

//s = 'JavaScript';
//console.log(Array.prototype.join.call(s, ' '));//=>J a v a S c r i p t
//var newArray = Array.prototype.filter.call(s, function(x) {
//    return x.match(/[`JvScrpt]/);
//}).join(' ');
//console.log(newArray);//=>J v S c r p t

//Функции
//Выводит имена и значения всех свойств объекта o.
//var o = {
//    property1: 1,
//    property2: 2,
//    property3: 3
//};
//function printprops(o){
//    for(var p in o){
//        console.log( p + ': ' + o[p] + '\n');
//    }
//}
//printprops(o);//=>property1: 1, property2: 2, property3: 3

//Вычисляет Декартово расстояние между точками (x1,y1) и (x2,y2)
//function distance(x1, y1, x2, y2){
//    var dx = x2 - x1;
//    var dy = y2 - y1;
//    return Math.sqrt(dx*dx + dy*dy);
//}
//
//distance(2, 6, 8, 10);
//console.log(distance(2, 6, 8, 10));//=>7.211102550927978

//var square = function(x){return x*x};
//console.log(square(2));//=>4

//Выражения определения функции могут иметь имена,
//что позволяет производить рекурсивные вызовы
//var f = function fact(x) {
//    if (x <= 1){
//        return 1;
//    }
//    else{
//        return x*fact(x-1);
//    }
//}
//
//console.log(f(1));//=>1
//console.log(f(6));//=>720

//Выражения определения функций иногда могут тут же вызываться:
//var tensquared = (function (x){return x*x;}(10));
//console.log(tensquared);//=>100

//Внешние переменные
//var userName = 'Вася';
//function showMessage(){
//    var message = 'Привет,  я ' + userName;
//    console.log(message);
//}
//showMessage();//=>Привет,  я Вася

//Доступ возможен не только на чтение, но и на запись.
//При этом, так как переменная внешняя, то изменения будут видны и снаружи функции:
//var userName = 'Вася';
//function showMessage() {
//    userName = 'Петя'; // (1) присвоение во внешнюю переменную
//    var message = 'Привет, я ' + userName;
//    console.log( message );
//}
//showMessage();
//console.log(userName); // Петя, значение внешней переменной изменено функцией
////Конечно, если бы внутри функции, в строке (1), была бы объявлена своя локальная переменная var userName,
////то все обращения использовали бы её, и внешняя переменная осталась бы неизменной.

//Вложенные функции
//function hypotenuse(a, b){
//    function square(x) {return x*x;}
//    return Math.sqrt(square(a) + square(b));
//}
//console.log(hypotenuse(2, 4));//=>4.47213595499958

//Возврат функции
//Рассмотрим более «продвинутый» вариант, при котором внутри
//одной функции создаётся другая и возвращается в качестве результата.
//Здесь мы будем создавать функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
//В примере ниже makeCounter создает такую функцию:

//function makeCounter() {
//    var currentCount = 1;
//    return function() {
//        return currentCount++;
//    };
//}
//// каждый вызов увеличивает счётчик и возвращает результат
//var counter = makeCounter();
//console.log(counter());//=>1
//console.log(counter());//=>2

//Свойства функции
//Функция в JavaScript является объектом, поэтому можно присваивать свойства прямо к ней, вот так:
//function f() {}
//
//f.test = 5;
//console.log(f.test);

//Свойства функции не стоит путать с переменными и параметрами. Они совершенно никак не связаны.
//Переменные доступны только внутри функции, они создаются в процессе её выполнения. Это – использование функции «как функции».
//А свойство у функции – доступно отовсюду и всегда. Это – использование функции «как объекта».
// Если хочется привязать значение к функции, то можно им воспользоваться вместо внешних переменных.
//В качестве демонстрации, перепишем пример со счётчиком:

//function makeCounter() {
//    function counter() {
//        return counter.currentCount++;
//    };
//    counter.currentCount = 1;
//    return counter;
//}
//
//var counter = makeCounter();
//console.log( counter() );//=> 1
//console.log( counter() );//=> 2
//
////При запуске пример работает также.
////Принципиальная разница – во внутренней механике и в том, что свойство функции, в отличие от переменной из замыкания – общедоступно,
////к нему имеет доступ любой, у кого есть объект функции.
////Например, можно взять и поменять счётчик из внешнего кода:
//
//var counter = makeCounter();
//console.log(counter()); // 1
//counter.currentCount = 5;
//console.log(counter());//=> 5
//
////Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны.
////Таково стандартное определение, которое есть в Wikipedia и большинстве серьёзных источников по программированию.
////То есть, замыкание – это функция + внешние переменные.

//Метод - это функция, которая хранится в виде свойства объекта.
//Если имеется функция f  и объект o, то можно определить метод объекта o с именем m, как показано ниже:
//o.m = f;
//После этого можно вызвать метод m() объекта o:
//o.m();
//Или, если метод m() принимкет два аргумента, его можно вызвать так:
//o.m(x, y);

//var calculator = {
//    operand1: 1,
//    operand2: 1,
//    add: function(){
//        //Для ссылки на этот объект используется ключевое слово this
//        this.result = this.operand1 + this.operand2;
//    }
//};
//calculator.add();//Вызвать метод, чтобы вычислить 1+1
//console.log(calculator.result);//=>2
//При вызове методов форма обращения к свойствам с поиощью оператора точки,
//но так же можно обращаться к свойствам через квадратные скобки
//o['m'](x,y);//Другой способ записать это выражение: o.m(x,y)
//    a[0](z);//a[0] - это функция

//var user = {
//    name: 'Вася',
//    // метод
//    sayHi: function(){
//        console.log('Привет');
//    }
//}
//user.sayHi();//=>Привет
//user['sayHi'];//=>Привет

//Свойства-функции называют «методами» объектов.
//Их можно добавлять и удалять в любой момент, в том числе и явным присваиванием:
//var user = {
//    name: 'Василий'
//};
//user.sayHi = function() { // присвоили метод после создания объекта
//    console.log('Привет!');
//};
//// Вызов метода:
//user.sayHi();

//Доступ к объекту через this
//Для доступа к текущему объекту из метода используется ключевое слово this.
//Значением this является объект перед «точкой», в контексте которого вызван метод, например:
//var user = {
//    name: 'Вася',
//    sayHi: function(){
//        console.log(this.name);//=>Вася
//        //или
//        console.log(user.name);//=>Вася
//    }
//};
//user.sayHi();
//Здесь при выполнении функции user.sayHi() в this будет храниться ссылка на текущий объект user.
//Использование this гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана.
//Через this метод может не только обратиться к любому свойству объекта, но и передать куда-то ссылку на сам объект целиком:
//var user = {
//    name: 'Вася',
//    sayHi: function() {
//        showName(this);//передаём текущий объект
//    }
//};
//function showName(namedObj){
//    console.log(namedObj.name);
//}
//user.sayHi();//=>Вася

//Подробнее про this
//Любая функция может иметь в себе this. Совершенно неважно, объявлена ли она в объекте или отдельно от него.
//Значение this называется контекстом вызова и будет определено в момент вызова функции.
//Например, такая функция, объявленная без объекта, вполне допустима:

//function sayHi() {
//    console.log(this.firstName);
//}
//Эта функция ещё не знает, каким будет this. Это выяснится при выполнении программы.

//Если одну и ту же функцию запускать в контексте разных объектов, она будет получать разный this:
//var user = {firstName: 'Вася'};
//var admin = {firstName: 'Админ'};
//function  func() {
//    console.log(this.firstName);
//}
//user.f = func;
//admin.g = func;
////this равен объекту перед точкой
//user.f(); //=>Вася
//admin.g(); //=>Админ
//admin['g']();//=>Админ

//Вызов конструкторов
//много однотипных объектов.
//Для этого используют «функции-конструкторы», запуская их при помощи специального оператора new.

//var = new Object();
//var = new Object;
//Вызов конструктора создаёт новый пустой объект, наследующий свойство prototype конструктора
//Назанчение функции-конструктора - инициализировать объект и этот новый объект передаётся конструктору как контекст вызова,
//благодаря чему функция-конструктор может ссылаться на него с помощью ключевого слова this

//function Animal(name){
//    this.name = name;
//    this.canWalk = true;
//}
//var animal = new Animal('Ёжик');
//console.log(animal);//=>Animal {name: "Ёжик", canWalk: true}
//Детальнее – функция, запущенная через new, делает следующее:
//1.Создаётся новый пустой объект.
//2.Ключевое слово this получает ссылку на этот объект.
//3.Функция выполняется. Как правило, она модифицирует this, добавляет методы, свойства.
//4.Возвращается this.

//Иногда функцию-конструктор объявляют и тут же используют, вот так:
//var animal = new function (){
//    this.name = "Васька";
//    this.canWalk = true;
//}
//Так делают, когда хотят создать единственный объект данного типа
//Как правило, конструкторы ничего не возвращают. Их задача – записать всё, что нужно, в this, который автоматически станет результатом.

//Использование функций для создания объекта дает большую гибкость.
//Можно передавать конструктору параметры, определяющие как его создавать, и он будет «клепать» объекты заданным образом.
//function User(name){
//    this.name = name;
//    this.sayHi = function(){
//        console.log('Моё имя ' + this.name);
//    }
//}
//var ivan = new User('Иван');
//ivan.sayHi();//=>Моё имя Иван

//Локальные переменные
//В функции-конструкторе бывает удобно объявить вспомогательные локальные переменные
//и вложенные функции, которые будут видны только внутри:

//function User(firstName, lastName){
////вспомагательная переменная
//var phrase = 'Привет';
////вспомогательная вложенная функция
//    function getFulllName(){
//        return firstName + " " + lastName;
//    }
//    this.sayHi = function(){
//        console.log(phrase + ', ' + getFulllName());//использование
//    }
//}
//var vasya = new User('Вася','Петров');
//vasya.sayHi();//=>Привет, Вася Петров

//Аргументы
//В старом стандарте JavaScript псевдо-массив arguments и переменные-параметры ссылаются на одни и те же значения.
//В результате изменения arguments влияют на параметры и наоборот.


//function f(x){
//    arguments[0] = 5;
//    console.log(x);//=>5
//}
//f(1);
//Наборот
//function f(x) {
//    x = 5;
//    console.log( arguments[0] ); //=>5, обновленный x
//}
//f(1);

//В современной редакции стандарта это поведение изменено. Аргументы отделены от локальных переменных:
//function f(x) {
//    "use strict"; // для браузеров с поддержкой строгого режима
//    arguments[0] = 5;
//    console.log( x ); // не 5, а 1! Переменная "отвязана" от arguments
//}
//f(1);

//Пример: копирование свойств copy(dst, src1, src2...)
//Копирует свойства из объектов src1, src2,... в объект dst. Возвращает получившийся объект.
//var vasya = {
//    age: 21,
//    name: 'Вася',
//    surname: 'Петров'
//};
//
//var user = {
//    isAdmin: false,
//    isEmailConfirmed: true
//};
//
//var student = {
//    university: 'My university'
//};
//
//function copy() {
//    var dst = arguments[0];
//    for (var i = 1; i < arguments.length; i++) {
//        var arg = arguments[i];
//        for (var key in arg) {
//            dst[key] = arg[key];
//            console.log(dst);
//        }
//    }
//    return dst;
//}
////добавить к vasya свойства из user и student
//copy(vasya, user, student);
//console.log(vasya.isAdmin);//=>false
//console.log(vasya.university);//=>My university

//Функции могут быть даже безимянными, например, в случае присваивания их элемента массива:
//var a = [function(x) {return x*x}, 20];
//console.log(a[0](a[1]));//=>400

//Использование функций как данных
//Определения нескоьких простых функций
//function  add(x,y) { return x + y; }
//function  subtract(x,y) { return x - y; }
//function  multiply(x,y) { return x * y; }
//function  divide(x,y) { return x / y; }
//
////Эта функция принимает одну из предыдущих функций в качестве аргумента и вызывает её с двумя операндами
//function operate(operator, operand1, operand2){
//    return operator(operand1, operand2)
//}
////Так можно вызвать эту функцию для вычисления выражения (2+3)+(4*5)
//var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
//console.log(i);//=>25

//uniqueInteger.counter = 0;
//function uniqueInteger() {
//    return uniqueInteger.counter++;
//}
//uniqueInteger();
//console.log(uniqueInteger.counter);

//Замыкания
//function counter(){
//    var n = 0;
//    return{
//        count: function() { return n++; },
//        reset: function() { return n = 0; }
//    };
//}
//var c = counter(), d = counter();//Создать два счётчика
//console.log(c.count());//=>0
//console.log(d.count());//=>0
//console.log(d.reset());//=>0
//console.log(c.count());//=>0
//console.log(d.count());//=>1


//Эта функция всегда возвращает функцию, которая всегда возвращает v
//function constfunc(v) { return function () {return v;}; }
////Создать массив функций-констант:
//var funcs = [];
//for(var i = 0; i < 10; i++){
//    funcs[i] = constfunc(i);
//}
//console.log(funcs[5]());//=>5

//Свойство length в функции
//args.length - число фактически переданных аргументов
//args.callee.length - число ожидаемых аргументов
//function check(args){
//    var actual = args.length;//Фактическое число аргументов
//    var expected = args.callee.length;//Ожидаемое число аргументов
//    if(actual !== expected){//Если не совпадают, генерируется исключение
//        throw new Error('ожидается: ' + expected + '; получено ' + actual);
//    }
//}
//
//function f(x, y, z){
//    //Проверить число ожидаемых и фактически переданных аргументов
//    check(arguments);
//    //Теперь выполнить оставшуюся часть функции как обячно
//    return x + y + z;
//}
//
//console.log(f(1, 2, 3));//=>6
//console.log(f(1, 2, 3, 4));//=>Uncaught Error: ожидается: 3; получено 4

//Метод bind - состоит в том, чтобы связать функцию с объектом

//function f(y){
//    return this.x + y;//Функция, которую требуется привязать
//}
//
//var o = {//Объект, к которому выполняется привязка
//    x : 1
//};
//
//var g = f.bind(o);//Вызов g(x) вызовет o.f(x)
//console.log(g(2));//=>3

//Функция bind, нами написанная
//function  bind(func, content){
//    return function (){
//        return func.apply(content, arguments)
//    };
//}
//
//function f(){
//    alert(this);
//}
//
//var g = bind(f, 'Context');
//g();//Context


//function  bind(func, content){
//    return function (){
//        return func.apply(content, arguments)
//    };
//}
//
//function f(a, b){
//    console.log(this);
//    console.log(a+b);
//}
//
//var g = bind(f, 'Context');
//g(1,2);//Context, затем 3

//function  bind(func, context){
//    return function (){
//        return func.apply(context, arguments)
//    };
//}
//
//var user = {
//    firstName: 'Вася',
//    sayHi: function() {
//        alert(this.firstName);
//    }
//};
//
//setTimeout(bind(user.sayHi, user), 1000);//=>Вася


//function  bind(func, context){
//    return function (){
//        return func.apply(context, arguments)
//    };
//}
//
//var user = {
//    firstName: 'Вася',
//    sayHi: function(who){//здесь у sayHi есть один аргумент
//        console.log(this.firstName + ': Привет, ' + who);
//    }
//};
//
//var sayHi = bind(user.sayHi, user);
//// контекст Вася, а аргумент передаётся "как есть"
//sayHi('Петя');// Вася: Привет, Петя
//sayHi('Маша');// Вася: Привет, Маша

//встроенный метод bind

//function f(a, b) {
//    alert(this);
//    alert(a + b);
//}
////вместо
////var g = bind(f, 'Context')
//var g = f.bind('Context');
//g(1, 2);//Context, затем 3

//Синтаксис встроенного bind:
//var wrapper = func.bind(context[, arg1, arg2...]);
//func - Произвольная функция
//context - Контекст, который привязывается к func
//arg1, arg2,... - Если указаны аргументы arg1, arg2... – они будут прибавлены к каждому вызову новой функции,
//при чём станут перед теми, которые указаны при вызове
//Результат вызова func.bind(context) аналогичен вызову bind(func, context), описанному выше.
//То есть, wrapper – это обёртка, фиксирующая контекст и передающая вызовы в func.
//Также можно указать аргументы, тогда и они будут фиксированы, но об этом чуть позже.

//Пример со встроенным методом bind:

//var user = {
//    firstName: 'Вася',
//    sayHi: function() {
//        console.log(this.firstName);
//    }
//};
//// setTimeout( bind(user.sayHi, user), 1000 );
//setTimeout(user.sayHi.bind(user), 1000);//=>Вася, аналог через встроенный метод

//bind не похож на call/apply
//Методы bind и call/apply близки по синтаксису, но есть важнейшее отличие.
//Методы call/apply вызывают функцию с заданным контекстом и аргументами.
//А bind не вызывает функцию. Он только возвращает «обёртку», которую мы можем вызвать позже,
//и которая передаст вызов в исходную функцию, с привязанным контекстом.

//Частичное применение - распространнёный приём в функциональном программировании и иногда назвается каррингом(currying).

//var sum = function(x,y) {console.log(x); console.log(y); console.log(x + y)}; //Возвращает сумму 2 аргументов
////Создать новую функцию, подобную sum, но со связанным значением null
////ключевого слова this и со связанным значением первого аргумента, равным 1.
////Новая функция принимает всего один аргумент
//var succ = sum.bind(null, 1);
//succ(2);//=>3

//Карринг (currying) или каррирование – термин функционального программирования,
//который означает создание новой функции путём фиксирования аргументов существующей.

//function mul(a, b) {
//    return a * b;
//};
////При помощи bind создадим функцию double, удваивающую значения. Это будет вариант функции mul с фиксированным первым аргументом:
////// double умножает только на два
//var double = mul.bind(null, 2);
//console.log(double(3));//mul(2, 3) => 6
//console.log(double(4));//mul(2, 4) => 8

//При вызове double будет передавать свои аргументы исходной функции mul после тех,
//которые указаны в bind, то есть в данном случае после зафиксированного первого аргумента 2.
//Говорят, что double является «частичной функцией» (partial function) от mul.

//function f(y,z) {//Ещё одна функция сложения
//    return this.x + y + z//Связать this и y
//};
//
//var g = f.bind({x: 1}, 2);
//console.log(g(3));//=>6: this.x - связан с 1, y - связан с 2, а 3 передаётся в z


//Функции нового порядка - это функции, которые оперируют функциями,
//принимая одну или более функций и возвращая новую функцию.

//Эта функция высшего порядка возвращает новую функцию,
//которая передаёт свои аргументы функции f и
//возвращает логическое отрицание значения, возвращаемого функцией f;

//function not(f) {
//    return function () {//Возвращет новую функцию
//        var result = f.apply(this, arguments);//Вызов f
//        return !result;//и инверсия результата
//    };
//};
//
//var even = function(x) {//Функция, определяющая чётность числа
//    return x % 2 === 0;
//};
//
//var odd = not(even);//Новая функция, выполняющая противоположную операцию
//console.log([1,1,3,5,5].every(odd));//=>true: все элементы массива нечётные
////Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr. Перебирает массив

//Возвращает функцию, которая принимает массив в ввиде аргумента,
//применяет функцию f к каждому элементу и возвращает массив возвращаемых знаякеий
//var map = Array.prototype.map
//?function(a, f) { return a.map(f); }//Если метод map() доступен
//:function (a, f){//Иначе реализовать свою версию
//   var results = [];
//        for (var i= 0, len = a.length; i<len; i++){
//            if(i in a) results[i] = f.call(nul, a[i], i, a);
//        }
//        return results;
// };
//
//function  mapper(f) {
//    return function (a) { return map(a, f); };
//};
//var increment = function(x) { return x + 1; };
//var incrementer = mapper(increment);
//console.log(incrementer([1,2,3]));//=>2,3,4

//function  compose(f, g) {
//    return function () {
//    //Для вызова f используется call, потому что ей передаётся
//    //единственное значение, а для вызова g используется apply,
//    //потому что ей передаётся массив значений
//        console.log(f);//function(x) { return x*x; };
//        console.log(g);//function(x,y) { return x+y; };
//        console.log(g.apply(this, arguments));//=>5
//        return f.call(this, g.apply(this, arguments))
//    };
//};
//
//var square = function(x) { return x*x; };
//var sum = function(x,y) { return x+y; };
//var squareofsum = compose(square, sum);
//console.log(squareofsum(2,3));//=>25

//Экземпляры Array наследуются от Array.prototype.
//Как и с остальными конструкторами, вы можете изменять прототип конструктора объекта
//для применения изменений ко всем экземплярам класса Array.
//Array.isArray(Array.prototype); // true - Небольшой факт: Array.prototype сам является экземпляром Array:

//Вспомогательная функция преобразования объекта (или его части),
//подобно массиву, в настоящий массив. Используется ниже
//для преобразования объекта arguments в настоящий массив.
//function array(a, n) { return Array.prototype.slice.call(a, n || 0); }
////Аргументы этой функции помещаются в начало списка
//    function partialLeft(f /*, ...*/) {
//        var args = arguments;//Сохранить внешний массив фргументов
//        console.log(arguments);//[function function, 2]
//        return function () {//И вернуть эту функцию
//        console.log(arguments);//[3,4]
//            var a = array(args, 1);//Начиная с элемента 1 во внешнем массиве
//            a = a.concat(array(arguments));//Добавить внутренний массив
//            console.log(a);//=>2,3,4
//            return f.apply(this, a);//Вызвать f с этим списком аргументов
//        }
//    };
//    var f = function(x,y,z) { return x * (y-z); };
//    console.log(partialLeft(f,2)(3,4));//=> -2; Свяжет первый аргумент: 2*(3-4)
//
////Аргументы этой функции помещаются в конец списка
//    function partialRight(f /*, ...*/){
//        var args = arguments;//Сохранить внешний массив фргументов
//        console.log(arguments);//=>[function function, 2]
//        return function () {//И вернуть эту функцию
//            console.log(arguments);//=>[3,4]
//            var a = array(arguments);//Начинать с внутр.массива аргументов
//            console.log('Внешние аргументы');
//            console.log(a);//=>[3,4]
//            a = a.concat(array(args, 1));//Добавить внешние аргументы начиная с 1
//            console.log(a);//=>3,4,2
//            return f.apply(this, a);//Вызвать f с этим списком аргументов
//        }
//    };
//    var f = function(x,y,z) { return x * (y-z); };
//    console.log(partialRight(f,2)(3,4));//=> 6; Свяжет последний аргумент: 3*(4-2)
//


//Аргументы этой функции играют роль шаблона
//Неопределённые значения в списке аргументов заполняются значениями из внутреннего набора
//function partial(f /*, ...*/){
//    var args = arguments;//Сохранить внешний массив фргументов
//    console.log(args);//[function, undefined, 2]
//    return function () {
//        var a = array(args, 1);//Начиная с элемента 1 во внешнем массиве
//        console.log(a);//[undefined, 2]
//        var i= 0, j=0;
//        console.log(a.length);//=> 2
//        //Цикл по этим аргументам заменит значения undefined значениями из внутреннего списка аргументов
//        for(; i < a.length; i++){
//            if(a[i] === undefined){
//                console.log(a[i]);//=> undefined
//                a[i] = arguments[j++];
//                console.log(a[i]);//=> 3
//                console.log(a);//=> [3, 2]
//                //Добавить оставшиеся аргументы в конец списка
//                a = a.concat(array(arguments, j))
//                console.log(j);//=> 1
//                console.log(a);//=> [3, 2, 4]
//                return f.apply(this, a);
//            }
//        }
//    };
//};
//
//var f = function(x,y,z) { return x * (y-z); };
//console.log(partial(f, undefined, 2)(3,4));//=> -6; Свяжет средний аргумент: 3*(2-4)

//Мемоизация
//Возвращает мемоизованую функцию f. Работает, только если все возможные аргументы
//имеют отличающиеся строковые представления f
//function memoize (f) {
//    var cache = {};//Кэш значений сохраняется в замыкании
//    console.log(cache);
//    return function () {
//        //Создать строковую версию массива argumets для ипользования в качестве ключа кэша
//        var key = Array.prototype.join.call(arguments,',');
//        console.log(key);
//        if(key in cache) {
//            console.log('Первый вариант');
//            return cache[key];
//        }
//        else{
//            console.log('Второй вариант');
//            return cache[key] = f.apply(this, arguments);
//        }
//    };
//};
//
////Возвращает наибольший общмй делитель двух целых чисел, используя алгоритм Эвклида
//function gcd(a,b) {//Проверка типов a и b опущена
//    var t;//Временная переменная для обмена
//    if(a < b) t=b, b=a, a=t;//Убедится, что a>=b
//    while(b != 0)  t=b, b=a%b, a=t;//Это алгоритм Эвклида поиска НОД
//    console.log(a+' внутренняя');
//    return a;
//};
//
////Первый вариант вызова мемоизации
////var gcdmemo = memoize(gcd);
////console.log(gcdmemo(85, 187));//=>17
//
////Второй вариант вызова мемоизации
////!!! При мемоизации рекурсивных функций желательно,
//// чтобы рекурсия выполнялась в мемоизованной версии, а не в оригинале.
//var factorial = memoize(function(n) {
//    console.log(n);
//    return (n <= 1) ? 1 : n*factorial(n-1);
//});
//console.log(factorial(5));//=> 120. Также поместит в кэш факториалы для чисел 4, 3, 2, 1.

//Классы и прототипы
// inherit() - возвращает вновь созданный объект, наследующий свойства объекта-прототипа p.
//Использует функцию Object.create() EcmaScript 5, если она определена иначе используется более старый приём
////************* Пример1
//function  inherit(p) {
//    if(p == null) throw TypeError();//p не может быть значением null
//    if(Object.create)// Если Object.create определена
//        return Object.create(p);//использовать её
//    var t = typeof p;//иначе выяснить тип и проверить его
//    if(t !== 'object' && t !== 'function') throw  TypeError();
//    function f() {};//Определить фиктивный конструктор
//    f.prototype = p;//Записать в его свойство prototype ссылку на объект p
//    return new f();//Использовать f() для создания наследника объекта p.
// };
//
//
//
//// range. js: Класс, представляющий диапазон значений
//// Это фабричная функция, которая возвращает новый объект range.
//function range(from, to) {
//    //Использует функцию inherit() для создания объекта, наследующего объект-прототип, определяемый ниже.
//    //Объект-прототип хранится как свойство данной функции и определяет общие методы (поведение) для всех объектов range.
//    var r = inherit(range.methods);
//    //Сохранить начальное и конечное значения в новом объекте range.
//    //Это не унаследованные свойства, и они являются уникальными для данного объекта.
//    r.from = from;
//    r.to = to;
//    //В заключение вернуть новый объект
//    return r;
//}
//
////Ниже следует объект-прототип, определяющий методы, наследуемые всеми объектами range.
//range.methods = {
//   //Возвращает true, если x - объект класса range, в противном случае возвращает false
//   //Этот метод может работать не только с числовыми диапазонами,
//   //но также с текстовыми диапазонами и с диапазонами дат Date.
//   includes: function(x) {return this.from <= x && x <= this.to;},
//   //Вызывает f для каждого целого числа в диапазоне
//   //Этот метод может работать только с числовыми диапазонами.
//   foreach: function (f) {
//       for(var x = Math.ceil(this.from); x <= this.to; x++){
//           f(x);
//       }
//   },
//   //Возвращает строковое представление диапазона
//   toString: function() {return "(" + this.from + "..." + this.to + ")";}
//};
//
////Ниже приводится пример использования объекта range.
//var r = range(1,3);//Создать новый объект range
//console.log(r.includes(2));//=> true: число 2 в диапазон
//r.foreach(console.log);//=> 1, 2, 3
//console.log(r);//=>Object {from: 1, to: 3}
////************* Пример1
//************* Пример2
//Реализация класса Range с помощью конструктора
//range2.js: ещё один класс, представляющий диапазон значений.
//Это функция-конструктор, которая инициализирует новые объекты Range.
//Она создаёт и не возвращает объект, она лишь инициализирут его
//function Range(from, to) {
//    //Сохранить начальное и конечное значения в новом обекте range.
//    //Это не унаследованные свойства, и они являются уникальными для данного объекта.
//    this.from = from;
//    this.to = to;
//};
////Все объекты Range наследуют свойства этого объекта.
////Обратите внимание, что свойство обязательно должно иметь имя "prototype"
//Range.prototype = {
//    includes: function(x) { return this.from <= x && this.to; },
//    foreach: function(f) {
//        for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
//    },
//    toString: function() { return '(' + this.from + '...' + this.to + ')'; }
//};
//
//var r = new Range(1,3);//Создать новый объект range
//console.log(r.includes(2));//=> true; число 2 входит в диапазон
//r.foreach(console.log);//=> 1,2,3
//console.log(r);//=>Range {from: 1, to: 3}
//************* Пример2

//************* Пример9.2
//Копирует свойство второго и последующих аргументов в первый аргумент.
//Реализован обход ошибки в IE
// var extend = (function() {//Присвоить значение, возвращаемое этой функцией
//    //Сначала проверить наличие ошибки, прежде чем исправлять её.
//    for(var p in {toString:null}){
//        //Если мы оказались здесь, значит, цикл for/in работает корректно и можно вернуть простую версию функции extend()
//        return function extend(o) {
//            for(var i = 1; i < arguments.length; i++){
//                var source = arguments[i];
//                for(var prop in source) o[prop] = source[prop];
//            }
//            return o;
//        };
//    }
//    //Если мы оказались здесь, следовательно цикл for/in
//    //не перечислил свойство toString тестового объекта.
//    //Поэтому необходимо вернуть версию extend(),
//    //которая явно проверяет неперечислимость свойств прототипа Object.prototype.
//    //Список свойств, которые необходимо проверить
//     var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString'];
//     return function patched_extend(o) {
//         for(var i = 1; i <= arguments.length; i++){
//             var source = arguments[i];
//             //Скопировать все перечислимые свойства
//             for(var prop in source) o[prop] = source[prop];
//             //А теперь проверить специальные случаи свойств
//             for(var j = 0; j < protoprops.length; j++){
//                 prop = protoprops[j];
//                 if(source.hasOwnProperty(prop)) o[prop] = source[prop];
//             }
//         }
//         return o;
//     };
// }());
//
// //Простая функция для определения простых классов
// function defineClass(constructor,//Функция, определяющая свойства экземпляра
// methods,//Методы экземпляров: копируются в прототип
// statics)//Свойства класса: копируются в конструктор
// {
//     if(methods) extend(constructor.prototype, methods);
//     if(statics) extend(constructor, statics);
//     return constructor;
// }
// //Простейший вариант нашего класса Range
// var SimpleRange = defineClass(function (f,t) { this.f = f; this.t = t; },
//     {
//         includes: function(x) { return this.f <= x && this.t; },
//         toString: function() { return this.f + '...' + this.t; }
//     },
//     { upto: function(t) { return new SimpleRange(0, t);} });
//************* Пример9.2

//требуется добавить в объект Array метод, который возвращает значение
//наибольшего элемента массива. Для этого объявляется функция,
//которая добавляется к объекту Array.prototype, а затем используется.
// function array_max( ){
//     var i, max = this[0];
//     for (i = 1; i < this.length; i++) {
//         if (max < this[i])
//             max = this[i];
//     }
//     return max;
// }
// Array.prototype.max = array_max;
// // а теперь создадим новый массив
// // и запустим новый метод
// var x = [1, 2, 3, 4, 5, 6];
// var y = x.max( );
// console.log(y);//=>6

//Для чего нужен prototype
// function Animal (name) {
//     this.name = name;
// }
// var dog = new Animal('Sharky');
//Мы создали новый объект dog, у которого есть свойство name,
//сделали мы это с помощью функции-конструктора Animal.
//В данном случае Animal - класс, dog - экземпляр

//Теперь к prototype, допустим, мы хотим, что бы у всех экземпляров класс Animal был метод walk().
//Добавлять этот метод к каждому экземпляру после создания, ни какого редактора не хватит,
//поэтому нам и нужен prototype.
//Вкратце - в прототипе ( prototype ) содержатся все унаследованные методы/свойства,
//которое нам выдает класс при создании

//function Animal(name) {
//    this.name = name;//для каждого экземпляра своё имя
//}
//Animal.prototype.walk = function () {//Общая для всех экземпляров
//    console.log('i can walk');
//}
//console.log(Animal.prototype);
//
//var dog = new Animal('dog');
//var cat = new Animal('cat');
//
//console.log(dog.name);//=>dog
//console.log(cat.name);//=>cat
////dog и cat имеют метод
//dog.walk();//=>i can walk
//cat.walk();//=>i can walk

//Прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске

//Свойство constructor
//У каждой функции по умолчанию уже есть свойство prototype.
//Он содержит объект такого вида
//function Rabbit() {}
//
//Rabbit.prototype = {
//        constructor: Rabbit
//};

//function Rabbit(name) {
//    this.name = name;
//    console.log(name);
//}
//
//var rabbit = new Rabbit('Кроль');
//var rabbit2 = new rabbit.constructor('Крольчиха');
//Эта возможность бывает полезна, когда, получив объект, мы не знаем в точности,
//какой у него был конструктор (например, сделан вне нашего кода), а нужно создать такой же.

//Значением свойства constructor является объект функции
//************
// var F = function () {};//Это объект функции
// var p = F.prototype;//Это объект-прототип, связанный с ней
// var c = p.constructor;//Это функция, связанная с прототипом
// console.log(c == F);//=>true
// //Конструкторы играют роль идентификаторов
// var o = new F();//Создать объект класса F
// console.log(o.constructor === F);//=>true
//************

//Complex.js - В этом файле определяется класс Complex,
//представляющий комплесные числа -
//(сумма вещественной и мнимой части, где множитель i в мнимой части - это квадратный корень из -1)
//************Пример 9.3
// function Complex(real, imaginary) {
//     if(isNaN(real) || isNaN(imaginary))//Убедиться, что аргументы - числа
//         throw new TypeError();//Иначе возбудить исключение
//     this.r = real;//Вещественная часть числа
//     this.i = imaginary;//Мнимая часть числа
// }
// //Складывает с текущим и возвращает сумму в виде нового объекта
// Complex.prototype.add = function (that) {
//     return new Complex(this.r + that.r, this.i + that.i)
// };
// //Умножает текущее комплексное число на число that и возвращает произведение
// Complex.prototype.mul = function (that) {
//     return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r)
// };
//
// //Возвращает вещественный модуль комплексного числа.
// //Он определяется как расстояние до числа на комплексной плоскости от точки(0, 0)
// Complex.prototype.mag = function () {
//     return Math.sqrt(this.r*this.r + this.i*this.i)
// };
//
// //Возвращает комплексное число с противоположным знаком
// Complex.prototype.neg = function () {
//     return new Complex(-this.r, -this.i);
// };
//
// //Преобразует объект Complex в строку в нормальном формате
// Complex.prototype.toString = function () {
//     return '{' + this.r + ',' + this.i + '}';
// };
//
// //Проверяет равенство данного комплексного числа с заданным
// Complex.prototype.equals = function (that) {
//     return that != null &&//Должно быть определено, не равно null
//     that.constructor === Complex &&//И быть экземпляром Complex
//     this.r === that.r && this.i === that.i;//И иметь те же значения
//
// };
//
// Complex.ZERO = new Complex(0,0);
// Complex.ONE = new Complex(1,0);
// Complex.I = new Complex(0,1);
// //Следующий метод анализирует строку в формате,
// //возвращаемом методом экземпляра toString и возвращает объект Complex
// //или возбуждает исключение TypeError
// Complex.parse = function (s) {
//     try{
//         var m = Complex._format.exec(s);//Регулярное выражение
//         return new Complex(parseFloat(m[1]), parseFloat(m[2]));
//     }
//     catch (x){
//         throw new TypeError("Строка '" + s + "' не может быть преобразованна" + " в комплексное число.");
//     }
// };
// Complex._format = /^\{([^,]+),([^}]+)\}$/;
//
// var c = new Complex(2,3);//Создать новый объект с пом.конструктора
// var d = new Complex(c.i, c.r);//Использовать свойства экземпляра c
// console.log(c);//=>Complex {r: 2, i: 3}
// console.log(d);//=>Complex {r: 3, i: 2}
// console.log(c.add(d).toString());//=>{5,5}
// console.log(Complex.prototype);
//************Пример 9.3

//Примеры расширения классов
//************
//Вызываем функцию f в цикле, кол-во итераций равно самому числу;
//При этом функции каждый раз передаётся номер итерации
// Number.prototype.times = function (f, context) {
//     console.log(f);
//     var n = Number(this);
//     console.log(Number(this));
//     for(var i=0; i < n; i++) f.call(context, i);
// };
// var n = 3;
// n.times(function (n) { console.log(n + ' привет'); });
//************
//************Пример 9.6.Set.js Произвольное множество значений
//function Set() {//Это конструктор
//    this.values = {};//Свойства объекта составляют множество
//    this.n = 0;//Кол-во значений в множестве
//    this.add.apply(this, arguments);//Все аргументы являются значениями, добавляемыми в множество
//}
//
////Добавляет все аргументы в множество
//Set.prototype.add = function() {
//    for (var i=0; i<arguments.length; i++){//Для каждого аргумента
//        var val = arguments[i];//Добавляемое значение
//        var str = Set._v2s(val);//Преобразовать в строку
//        if (!this.values.hasOwnProperty(str)){//Если отсутствует в множестве
//            this.values[str] = val;//Отобразить строку в значении
//            this.n++;//Увеличить размер множество
//        }
//    }
//    return this;//Для поддержки цепочек вызовов методов
//};
//
////Функция для внутреннего использования. Отображает любые значения в строки
//Set._v2s = function() {
//    switch(val) {
//        case undefined: return 'u';//Специальные простые значения
//        case null: return 'n';//Отображаются в односимвольные строки
//        case true: return 't';//
//        case false: return 'f';//
//        default: switch (typeof  val) {
//            case 'number': return '#' + val;//Числа получают префикс #.
//            case 'string': return '"' + val;//Строки получают префикс ".
//            default: return '@' + objectId(val);//Объект и функции - @
//        }
//    }
//    function objectId(o){
//        var prop = "|**objectId**|";//Имя частного идентификационного свойства
//        if(!o.hasOwnProperty(prop))//Если объект не имеет этого свойства
//            o[prop] = Set._v2s.next++;//Присвоить ему слудующее доступное значение
//        return o[prop];//Вернуть идентификатор
//    }
//};
//Set._v2s.next = 100;//Начальное значение для идентификаторов объектов
//************
//Определение подкласса
//************
// function  inherit(p) {
//    if(p == null) throw TypeError();//p не может быть значением null
//    if(Object.create)// Если Object.create определена
//        return Object.create(p);//использовать её
//    var t = typeof p;//иначе выяснить тип и проверить его
//    if(t !== 'object' && t !== 'function') throw  TypeError();
//    function f() {};//Определить фиктивный конструктор
//    f.prototype = p;//Записать в его свойство prototype ссылку на объект p
//    return new f();//Использовать f() для создания наследника объекта p.
// };
//
// function A (aname) {
//     this.aname = aname;
// }
//
// function B (bname) {
//     this.bname = bname;
// }
//
// B.prototype = inherit(A.prototype);//Подкласс наследует суперкласс
// B.prototype.constructor = B;//Переопределить свойство constructor
// console.log(A.prototype);
// console.log(B.prototype);
//************
//Приём проектирования «Модуль»
//Файл hello.js, оформленный как модуль:
//************
// (function () {
//     //Глобальная переменная нашего скрипта
//     var message = 'Привет';
//     //Функция для вывода этой переменной
//     function showMessage() {
//         console.log(message);
//     }
//     //выводим сообщение
//     showMessage();
// })();//=>Привет
//Скобки за функцией означает вызов "на месте",
//!НО обязательно саму function обернуть в скобочки
//************

//Регулярные выражения
// var regexp = new RegExp('шаблон','флаги');
//Более короткая запись
// var regexp = /шаблон/;//Без флагов
// var regexp = /флаги/gmi;//С флагами gmi

// var str = "Я люблю JavaScript!"; // будем искать в этой строке
// console.log( str.search( /ЛЮ/ ) ); // -1
// console.log( str.search( /ЛЮ/i ) ); // 2

//Пример с использованием let
//************
// o = {x:1, y:2};
// for(let p in o)
//     console.log(p);//=>x,y
//
// for(let v in o)
//     console.log(o[v]);//=>1,2
//************
//Присваивание с разложением
//************
// let [x,y] = [1,2];//То же, что и let x=1, y=2
// [x,y] = [x+1,y+1];//То же, что x = x+1, y = y+1
// [x,y] = [y,x];//Обмен значений двух переменных
// console.log([x,y]);//=>Array [ 3, 2 ]
//************

//************
//Преобразует координаты [x,y] в полярные координаты [r, theta]
// function polar(x,y) {
//     return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
// }
// //Преобразует полярные координаты в декартовы координаты
// function cartesian(r,theta) {
//     return [r*Math.cos(theta), r*Math.sign(theta)];
// }
//
// let [r,theta] = polar(1.0, 1.0);//r=Math.sqrt(2), theta=Math.PI/4
// console.log([r,theta]);//=>[1.4142135623730951, 0.7853981633974483]
// let [x,y] = cartesian(r,theta);//x=1.0, y=1.0
// console.log([x,y]);//=>[1.0000000000000002, 1.4142135623730951]
//************
//Из операторов присваивания можно составлять "цепочки"
//************
// let  first, second, all;
// all = [first, second] = [1,2,3,4];//first=1, second=2, all=[1,2,3,4]
// console.log([first, second]);//=>[1, 2]
// console.log(all);//[1, 2, 3, 4]
//************
//Извлечение значений из вложенных массивов
//************
// let [one,[twoA, twoB]] = [1, [2, 2.5], 3];
// console.log([one,[twoA, twoB]]);//[1, Array[2]]
// console.log(one);//=>1
// console.log([twoA, twoB]);//=>2, 2.5
//************
//Извлечение значений из объектов
//************
// let transparent = {r:0.0, g:0.1, b:0.2, a:1.0};//Цвет в фомате RGB
// let {r:red, g:green, b:blue} = transparent;
// console.log({r:red, g:green, b:blue});//=>Object {r: 0, g: 0.1, b: 0.2}
//************
//Работа с вложенными объектами
//************
//let data = {
//    name: "присваивание с разложением",
//    type: "расширение",
//    impl: [{engine: "spidermonkey", version: 1.7},
//           {engine: "rhino", version: 1.9}
//          ]
//};
////Использовать присваивание с разложением для извлечения
////четырех значений из структурных данных
//let {name: feature, impl: [{engine: impl1, version: v1},{engine: impl2}]} = data;
//    console.log(feature);
//    console.log(impl1);
//    console.log(v1);
//    console.log(impl2);
//************

//Итератор - объект, который позволяет выполнить итерации
//по некоторой коллекции значений и хранит информацию
//о текущей "позиции" в коллекции

//************
//Функция возвращает итератор
//function counter(start){
//    let nextValue = Math.round(start);//Частная перемення итератора
//    return { next: function() { return nextValue++; } };//Вернуть итератор
//}
//
//let serialNubberGenerator = counter(1000);
//let sn1 = serialNubberGenerator.next();
//console.log(sn1);//1000
//let sn2 = serialNubberGenerator.next();
//console.log(sn2);//1001
//************
//************
//Функция возвращает итератор диапазона целых чисел
//function rangeIter(first, last) {
//    let nextValue = Math.ceil(first);
//    return {
//        next: function() {
//            if (nextValue > last) throw  StopIteration;//Работает только Firefox (Gecko)
//            return nextValue++;
//        }
//    };
//}
//************
//Цикл for..of.

//************
//let arr = [1,2,3];
//
//for (let value of arr){
//    console.log(value);//1 затем 2 затем 3
//}
//
//for (let char of 'Привет'){
//    console.log(char);//П затем р затем и затем в затем е затем т
//}
//************
//************
//let range = {
//    from: 1,
//    to: 5
//}
//
////сделаем объект range итерируемым
////Для возможности использовать объект в for..of
////нужно создать в нём свойство с названием Symbol.iterator (системный символ).
////При вызове метода Symbol.iterator перебираемый объект
////должен возвращать другой объект («итератор»),
////который умеет осуществлять перебор.
//
////Итератор — это объект, в котором определен метод
////next() — функция без аргументов, возвращающая
////объект с двумя свойствами:
////done (boolean) — принимает значение true,
////если итератор достиг конца итерируемой последовательности.
////В противном случае имеет значение false.
////value — определяет значение, возвращаемое итератором.
////Может быть не определено (отсутствовать),
////если свойство done имеет значение true.
//range[Symbol.iterator] = function() {
//    let current = this.from;
//    let last = this.to;
//    //Метод должен вернуть объект с методом next()
//    return {
//        next() {
//            if (current <= last) {
//                return {
//                    done: false,
//                    value: current++
//                };
//            }
//            else {
//                return {
//                    done: true
//                };
//            }
//        }
//    }
//};
//console.log(range);
//for (let num of range){
//    console.log(num);
//}
//************

//Генератор использует новое ключевое слово yield.
//Оно используется в функциях и выполняет роль return,
//возвращает значение из функции.
//Функция, возвращающая значение с помощью yield сохраняет информацияю
//о своём состоянии, благодаря чему её выполнение может быть возобновлено.
//Такие функции называются генераторами

//При создании генератора код находится в начале своего выполнения.
//Основным методом генератора является next(). При вызове он возобновляет выполнение кода
//до ближайшего ключевого слова yield.
//По достижении yield выполнение приостанавливается, а значение – возвращается во внешний код:

//************
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// let generator = generateSequence();
// let one = generator.next();
// alert(JSON.stringify(one));//=>{value: 1, done: false}
// let two = generator.next();
// alert(JSON.stringify(two));//=>{value: 2, done: false}
// let three = generator.next();
// alert(JSON.stringify(three));//=>{value: 3, done: true}
//************

//Генератор-итератор
//************
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// let generator = generateSequence();
// for(let value of generator){
//     console.log(value);//=>1,2, а 3 не будет выведено
//     //Потому что стандартный перебор итератора игнорирует value
//     //на последнем значении, при done: true. Так что результат
//     //return в цикле for..of не выводится.
// }
//************
//Здесь все 3 значения выводятся
//************
//     function* generateSequence() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
//
//     let generator = generateSequence();
//     for(let value of generator){
//         console.log(value);//=>1,2 3
//     }
//************

//Композиция – это естественное встраивание одного генератора в поток другого.
//То есть, при yield* интерпретатор переходит внутрь генератора-аргумента,
//к примеру, generateSequence(48, 57), выполняет его, и все yield,
//которые он делает, выходят из внешнего генератора.
//При этом, конечно, переменные вложенного генератора не попадают во внешний,
//«делегирование» только выводит результаты yield во внешний поток.
//************
// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
//
// function* generateAlphaNum() {
//
//     //0..9
//     yield* generateSequence(48, 57);
//
//     //A..Z
//     yield* generateSequence(65, 90);
//
//     //a..z
//     yield* generateSequence(97, 122);
// }
//
// let str = '';
// //Метод fromCharCode - возвращает элементарную строку, а не объект типа String.
// //Так как fromCharCode - статический метод String, он всегда вызывается как String.fromCharCode().
// for(let code of generateAlphaNum()) {
//     str += String.fromCharCode(code);
// }
// console.log(str);//=>0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
//************

//общий поток выполнения:
//************
// function* gen() {
//     let ask1 = yield 'Сколько будет 2 + 2?'
//     console.log(ask1);//4
//
//     let ask2 = yield '3 * 3'
//     console.log(ask2);//9
// }
//
// let generator = gen();
// console.log(generator.next().value);//Сколько будет 2 + 2?
// console.log(generator.next(4).value);//3 * 3
// console.log(generator.next(9).done);//true
//************

//************
//Отыскать элемент с атрибутом id
var timestamp = document.getElementById('timestamp');
//Если элемент пуст, вставить в него текущую дату и время
if (timestamp.firstChild == null)
    timestamp.appendChild(document.createTextNode(new Date().toString()))
//Изменить background
// timestamp.style.backgroundColor = "yellow";
//Или изменить класс(удаляет все текущие классы и добавляет тот, который мы указали)
// timestamp.className = 'highlight';
//Добавить класс
// timestamp.classList.add('new-bg');
//Удалить класс
// timestamp.classList.remove('for-remove');
timestamp.onclick = function () {
    this.innerHTML = new Date().toString();
}
//************

//Перебираем дочерние узлы html страницы.
//Все эти элементы являются коллекцией или псевдомассивом
//1 вариант
//************
//var elems = document.body.childNodes;
//for (var i = 0; i < elems.length; i++) {
//    console.log(elems[i]);
//}
//************

//2 вариант
//************
//var elems = document.documentElement.childNodes;
//[].forEach.call(elems, function(elem) {console.log(elem)})
//************

//3 вариант
//************
//var elems = document.documentElement.childNodes;
//elems = Array.prototype.slice.call(elems);//теперь elems - массив
//elems.forEach(function(elem) {
//    console.log(elem.tagName);//HEAD, undefined, BODY
//});
//************

//var curentEl = document.getElementById('collections__children');
//console.log(curentEl);
//console.log(curentEl.children);
//console.log(curentEl.previousElementSibling);
//console.log(curentEl.nextElementSibling);
//console.log(curentEl.parentElement);

//addEventListener и removeEventListener

//назначение обработчика
// elem.addEventListener(event, handler[, phase]);
//event - имя события, например 'click'
//handler - ссылка на функцию, которую надо поставить обработчиком
//phase - необязательный аргумент "фаза", на которой обработчик должен сработать

//удаление обработчика
// elem.removeEventListener(event, handler[, phase]);
//Удаление требует именно ту же функцию

//************
var myButton = document.getElementsByClassName('buttton-thank-you')[0];
function handler() {
    console.log('Спасибо');
}

myButton.addEventListener('click', handler);//=> Спасибо
//myButton.removeEventListener('click', handler);
//************

//Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента, например:
//************
function handler1() {
    console.log('Спасибо!');
}

function handler2() {
    console.log('Спасибо ещё раз!');
}

myHendler.onclick = function () {
    console.log('Привет');
};//=> Привет

myHendler.addEventListener('click', handler1);//=> Спасибо!
myHendler.addEventListener('click', handler2);//=> Спасибо ещё раз!
//************

//************
animateButton.onclick = function () {
    this.classList.toggle('wide');
}

animateButton.addEventListener('transitionend', function () {
    console.log('Окончание анимации addEventListener');
})
//************

//************
//var args = urlArgs();
//var q = args.q || '';
//var n = args.n ? parseInt(args.n) : 10;
//
//function urlArgs() {
//    var args = {};
//    var query = location.search.substring(1);//Строка запроса без '7'
//    var pairs = query.split('&');//Разбить по амперсандам
//    for (var i=0; i<pairs.length; i++){
//        var pos = pairs[i].indexOf('=');//Отъскать пару имя/значение
//        if (pos == -1) continue;//Не найдено - пропустить
//        var name = pairs[i].substring(0, pos);//Извлечь имя
//        var value = pairs[i].substring(pos+1);//Извлечь значение
//        value = decodeURIComponent(value);//Преобразовать значение
//        args[name] = value;//Сохранить в виде свойства
//    }
//    return args;//Вернуть полученные аргументы
//}
//************

//************
//function getElements() {
//    var elements = {};
//    for (var i = 0; i < arguments.length; i++) {
//        var id = arguments[i];
//        console.log(id);
//        var elt = document.getElementById(id);
//        if (elt == null)
//            console.log("No element width id: " + id);
//        elements[id] = elt;
//    }
//    return elements;
//};
//getElements('myHendler', 'animateButton', 'noId');
//************

//************
// var spans = document.getElementsByTagName('span');
// console.log(spans);//=>[span, span, span]
// var firEl = document.getElementsByTagName('p')[0];
// console.log(firEl);//=><p id="text" class="text">Click the button to make a BUTTON element with text.</p>
//
// //Для объектов NodeList и HTMLCollection нельзя вызвать методы класса Array,
// //но их можно вызвать коссвенно
// var content = Array.prototype.map.call(
//     document.getElementsByTagName('p'), function (e) {
//         return e;
//     }
// );
// console.log(content);//=>[p#text.text, p.collections__inner, p.collections__inner, p.collections__inner, p.main-el__button.handle, p.main-el__text, p.main-el__button.handle, p.main-el__text]
//
// var manyClass = document.getElementsByClassName('button test-button');
// console.log(manyClass);//[button.button.test-button, button.button.test-button, button.button.test-button]
//************

//************
// console.log(document.childNodes[0]);//=><!DOCTYPE html>
//************

//************
// var myBlock = document.getElementById('fullWidth');
// console.log(myBlock);
// var allStylesBlock = getComputedStyle(myBlock);
// console.log(allStylesBlock.width);//=>969px
// window.addEventListener('resize', function(event){
//     console.log(allStylesBlock.width);//=>ширина изменяется
// });
//************

//************
//Асинхронная загрузка сценария
//из указанного url адреса и его выполнение
//function loadasync(url){
//    var head = document.getElementsByTagName('head')[0];
//    var s = document.createElement('script');
//    s.src = url;
//    head.appendChild(s);
//};
//loadasync('here the path of the script');
//************

//************
//Создание текстовых узлов
// var newnode = document.createTextNode('create element and insert text');
// var myDiv = document.createElement('div');
// myDiv.className = 'create-class';
// myDiv.appendChild(newnode);
// console.log(myDiv);
// document.body.appendChild(myDiv);
//************

//************
//Создаём и Добавляем элемент в конец списка с id="list"
var newLi = document.createElement('li');
newLi.innerHTML = 'new Last Element';
list.appendChild(newLi);

//Создаём и Добавляем элемент в начало списка с id="list"
//Elem.insertBefore(elem, nextSibling) - elem - вставляемый узел,
//nextSibling - элемент перед которым мы хотим вставить новый узел
var newLiBefore = document.createElement('li');
newLiBefore.innerHTML = 'before current Element';
list.insertBefore(newLiBefore, list.children[0]);
//************

//************
//Клонирование узлов
var div = document.createElement('div');
div.className = 'current-element';
div.innerHTML = '<p class="info">Create Element</p>'
curentsClones.insertBefore(div, curentsClones.childNodes[0])

//Создать копию узла
var div2 = div.cloneNode(true);
//Меняем текст
div2.querySelector('p').innerHTML = 'This is a clone of created element';
div.parentNode.insertBefore(div2, div);
//************

//************
//parentElem.removeChild(elem);//=>Удалить узел
//elem.remove();//=>Удалить элемент на прямую, не требуя ссылки на родителя
//В примере ниже я удаляю текущий элемент, а не его узел
var myCurrentEl = document.getElementsByClassName('remove-el');
for (var i = 0; i < myCurrentEl.length; i++) {
    var buttonRemove = myCurrentEl[i];
    removeElement(buttonRemove);
}

function removeElement(buttonRemove) {
    buttonRemove.onclick = function () {
        this.classList.remove('show-element');
    }

    buttonRemove.addEventListener('transitionend', function () {
        this.remove();
    })
}
//************

//************
//Среди детей parentElem удаляет elem и вставляет на его место newElem.
//Все методы вставки автоматически удаляют вставляемый элемент со старого места.
//parentElem.replaceChild(newElem, elem)
var replaceElements = document.getElementsByClassName('replace-elements')[0];
var first = replaceElements.children[0];
var second = replaceElements.children[1];
replaceElements.insertBefore(second, first);
//************

//************
//Удаление сообщения
//var divRemove = document.createElement('div');
//divRemove.className = 'remove-node';
//divRemove.innerHTML = '<p>Удалить через интервал</p>';
//document.body.appendChild(divRemove);
//setTimeout(function() {divRemove.parentNode.removeChild(divRemove)}, 2000);
//************

//************
//Текстовые узлы для вставки
var insertDiv = document.createElement('div');
insertDiv.className = 'insert-text';
var divForInsert = document.getElementById('forInsert');
divForInsert.appendChild(insertDiv);
var text = 'insert the text';
insertDiv.appendChild(document.createTextNode(text));
//************

//************
//outerHtml
// var currentEl = document.getElementById('text');
// console.log(currentEl.outerHTML);//<p id="text" class="text">Click the button to make a BUTTON element with text.</p>
//************

//Метод insertAdjacentHTML позволяет вставлять
//произвольный HTML в любое место документа, в том числе и между узлами!
//elem.insertAdjacentHTML(where, html);
//where :Куда по отношению к elem вставлять строку. Всего четыре варианта:
//`beforeBegin` -- перед `elem`.
//`afterBegin` -- внутрь `elem`, в самое начало.
//`beforeEnd` -- внутрь `elem`, в конец.
//`afterEnd` -- после `elem`.

//************
var ul2 = document.getElementById('list2');
var li5 = ul2.children[2];
li5.insertAdjacentHTML('beforeBegin', '<li><p>third</p> <span class="litle-text">(dynamic element)</span></li><li><p>fourth</p> <span class="litle-text">(dynamic element)</span></li>');
//************

//Получение позиций полос прокрутки окна
//************
//возвращает текущие позиции полос прокрутки в виде свойств x и y объекта
// function getScrollOffsets(w) {
//     //использовать указанное окно или текущее,
//     //если функция вызвана без аргумента
//     w = w || window;
//     if (w.pageXOffset != null) return {x: w.pageXOffset, y: w.pageYOffset};
//     //Для IE и других браузеров в стандартном режиме
//     var d = w.document;
//     if (document.compatMode == 'CSS1Compat')
//         return {
//             x: d.documentElement.scrollLeft,
//             y: d.documentElement.scrollTop
//         };
//     //Для браузеров в режиме совместимости
//     return { x: d.body.scrollLeft, y: d.body.scrollTop };
// }
//
// window.onscroll = function() {
//     console.log(getScrollOffsets());
// }
//************
//Получение размеров видимой области документа
//************
// function getViewportSize(w) {
//     w = w || window;
//     if (w.innerWidth != null) return {w: w.innerWidth, h: w.innerHeight};
//     //Для IE и других браузеров в стандартном режиме
//     var d = w.document;
//     if (document.compatMode == 'CSS1Compat')
//         return {
//             w: d.documentElement.clientWidth,
//             h: d.documentElement.clientHeight
//         };
//     //Для браузеров в режиме совместимости
//     return { w: d.body.clientWidth, h: d.body.clientHeight };
// }
// console.log(getViewportSize());//=>Object {w: 820, h: 638}
//************

//Определение координат эл-та(top, right, bottom, left)
//************
// var element = document.getElementsByClassName('collections__inner')[1];
// var cords = element.getBoundingClientRect();
// console.log(cords);
//************

//************
function getScrollOffsets(w) {
    //использовать указанное окно или текущее,
    //если функция вызвана без аргумента
    w = w || window;
    if (w.pageXOffset != null)
        return {x: w.pageXOffset, y: w.pageYOffset};
    //Для IE и других браузеров в стандартном режиме
    var d = w.document;
    if (document.compatMode == 'CSS1Compat')
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        };
    //Для браузеров в режиме совместимости
    return {x: d.body.scrollLeft, y: d.body.scrollTop};
}

// window.onscroll = function() {
//     console.log(getScrollOffsets());
// }

var innerElement = document.getElementsByClassName('inner-center')[0];
var box = innerElement.getBoundingClientRect();//Координаты видимой области
var offsets = getScrollOffsets();
var x = box.left + offsets.x;
var y = box.top + offsets.y;
innerElement.innerHTML = '<p class="inner-element_info">Cords by x ' + x + '</p><p class="inner-element_info">Cords by y ' + y + '</p>';
//************

//************
//Получить высоту документа и видимой области
// var documentHeight = document.documentElement.offsetHeight;
// var viewportHeight = window.innerHeight;
// //Прокрутить окно так, чтобы переместить последнюю страницу в видимую область
// window.scrollTo(0, documentHeight - viewportHeight);
//************

//Цикл while
//************
//while (условие) {
//    //код, тело цикла
//}}

//var i = 0;
//while (i < 3) {
//    console.log(i);
//    i++;
//}

//Бесконечный цикл можно сделать и проще:
//while (true) {
//    // ...
//}

//Условие в скобках интерпретируется как логическое значение,
//поэтому вместо while (i!=0) обычно пишут while (i):
//var j = 3;
//while (j) { // при i, равном 0, значение в скобках будет false и цикл остановится
//    console.log( j );
//    j--;
//}
//************

//************
//var myElPos = document.getElementsByClassName('wrap-center')[0];
//
//function getElementPosition(e) {
//    var x = 0, y = 0;
//    while (e != null) {
//        x += e.offsetLeft;
//        y += e.offsetTop;
//        e = e.offsetParent;
//    }
//    return {x: x, y: y}
//}
//
//console.log(getElementPosition(myElPos));
//************

//Выбор элементов форм
//************
//var myinput = document.getElementsByClassName('form-control');
//    for (var i = 0; i < myinput.length; i++) {
//        myinput[i].classList.add('sd');
//        console.log(myinput);
//    }
//************

//************
var buttonResult = document.getElementsByClassName('button-result')[0];
var methods = document.forms.shipping.elements.method;
var resultOut = document.getElementById('output');
var shipping_method;
function checkButtons() {
    for (var i = 0; i < methods.length; i++) {
        if (methods[i].checked) {
            shipping_method = methods[i].value;
            resultOut.innerHTML = shipping_method;
        } else if (resultOut.innerHTML == '') {
            resultOut.innerHTML = 'please make your choice';
        }
    }
}

buttonResult.onclick = function () {
    checkButtons();
}
//************

//Получение выделенного текста
//************
//function getSelectedText1() {
//    if (window.getSelection)//Фунуция, определёнаая HTML5
//        return window.getSelection().toString();
//
//    else if (document.selection)//Приём харктерный для IE.
//        return document.selection.createRange().text;
//
//}
//
//document.onmouseup = function (e) {
//    console.log(getSelectedText1());
//    console.log(event.target);//Узнаю элемент, над которым была отжата левая клавиша мыши
//}
//
////on javascript, сочетание Ctrl+Enter
//document.onkeyup = function (e) {
//    if(e.which == 17) isCtrl = false;
//};
//
//document.onkeydown = function (e) {
//    if(e.which == 17) isCtrl=true;
//    if(e.which == 13 && isCtrl == true) {
//        // получаем и показываем выделенный текст
//        console.log(getSelectedText1());
//    }
//}
//************

//Пример из Интернета
//************
//function getSelectedText(){
//    var text = "";
//    if (window.getSelection) {
//        text = window.getSelection();
//    }else if (document.getSelection) {
//        text = document.getSelection();
//    }else if (document.selection) {
//        text = document.selection.createRange().text;
//    }
//    return text;
//}
//// при нажатии на Ctrl + Enter
//var isCtrl = false;
////on jquery
//$(document).keyup(function (e) {
//    if(e.which == 17) isCtrl = false;
//}).keydown(function (e) {
//    if(e.which == 17) isCtrl=true;
//    if(e.which == 13 && isCtrl == true) {
//        // получаем и показываем выделенный текст
//        alert(getSelectedText());
//    }
//});
//************

//************
//console.log(getComputedStyle(editor).margin);
//Записываем в атрибут style элемента editor строку s;
//var fs = 'font-size: 4vw;'
//editor.setAttribute('style', fs);
//
////Получаем значение аттрибута style
//var getS = editor.getAttribute('style');
//console.log(getS);//=>font-size: 4vw;
//console.log(editor.style.cssText);//=>font-size: 4vw;
//************


//************
//Получение, вставка и удаление правил из таблиц стилей
//var firstRule = document.styleSheets[0].cssRules[1];
//    console.log(firstRule);
//************

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

