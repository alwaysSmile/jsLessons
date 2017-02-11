// 1. Конструктор Animal
function Animal(name) {
    this.name = name;
    this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
    this.speed = 0;
    console.log( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
    this.speed += parseInt(speed);
    console.log( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
//Я за коментировал, так как ниже использую apply
// function Rabbit(name) {
//     this.name = name;
//     this.speed = 0;
// }

//Чтобы не дублировать код конструктора Animal, а на прямую вызвать его:
function Rabbit(name) {
    Animal.apply(this, arguments);
}

//Такой вызов запустит функцию Animal в контексте текущего объекта,
//со всеми аргументами, она выполнится и запишет в this всё, что нужно

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
    this.speed++;
    console.log( this.name + ' прыгает, скорость ' + this.speed );
}

var dog = new Animal('Sharky');
console.log(dog.name);
console.log(dog.speed);
dog.stop();
dog.run(12);

var rab = new Rabbit('rabbit');
console.log(rab.name);
console.log(rab.speed);
rab.stop();
rab.run(18);