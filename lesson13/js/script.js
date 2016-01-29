/*
Создать конструктор Horse, который принимает имя лошади и создает объект со следующими свойствами и методами:
// Свойства: 
// -имя лошади
// -пробег
// Методы:
//  -функция бежать, которая принимает расстояние, как параметр функции, и увеличивает на это расстояние пробег
// Создать двух лошадей и протестировать
Horse.prototype = {
  totalMileage: 0
 };
 Horse.prototype.totalMileage = 0;
добавить // ОБЩЕЕ СВОЙСТВО - ОБЩИЙ ПРОБЕГ (totalMileage)
заставить ф-цию run изменять как свой пробег, так и общий

Модифицируйте конструктор Horse следующим образом: добавьте свойство - усталость. 
Каждые 1 км пробега добавляет 1 единицу усталости. Когда усталость достигает 10 - лошадь должна отдохнуть 1 секунду. 
Реализуйте это в методе  - отдых, который принимает как параметр функции, метод  - который должен выполнятся после отдыха и параметры этого метода. 
Задача метода выводить сообщение “Лошадь отдыхает”. Задержку в 1 секунду реализуйте с помощью функции SetTimeout. 
После чего должна обнуляться усталость и  выполнятся метод, который пришел как параметр функции. 
// Например: лошадь должна пробежать 8 км. На текущий момент усталость составляет 4 единицы. 
Когда лошадь пробежит 6 км - усталость достигнет 10 единиц. На этом моменте лошадь должна отдохнуть 1 секунду. 
Усталость при этом обнулится. И после отдыха лошадь должна добежать оставшиеся 2 км.
*/

// ----------------------------------------------------------
function Horse(nameHorse, fatigueHorse){
	this.name = nameHorse;		// Имя лошади
	this.mileage = 0;			// Суммарный пробег этой лошади
	this.fatigue = 0;			// Текущаяя усталость 

	this.needToRun = 0;			// Сумма всех заданий на пробег run(13) + run(11)
	this.individualFatigue = fatigueHorse || 5; // Индивидуальная усталость, лошадь должна отдохнуть 
}
Horse.prototype.totalMileage = 0;	// Общий пробег всех лошадей

// ---------------- Задание лошади пробежать distance км --
Horse.prototype.run = function(distance){
	var i = 0;
	if(distance){
		if(this.needToRun == 0){	// Если лошадь стояла 
			this.needToRun = distance;
		}
		else{						// Если лошадь уже бежит, то добавляем км на пробег и выходим из функции
			this.needToRun += distance;
			return;
		}
	}
	// Бежать пока все заданные км или пока не устала
	while((i++ < this.needToRun) && (this.fatigue++ < this.individualFatigue))
	{
		this.mileage++;
		this.constructor.prototype.totalMileage++;
		console.log(this.name + " пробежала " + this.mileage + " км");
	}

	// Если лошадь устала, то отдыхаем
	if(this.fatigue - 1 == this.individualFatigue ){
		var fun = this; // Вот тут я не могу приктутить вызов CALL. 
		this.relaxation(function(){ fun.run()});
		return;
	}
	console.log(this.toString());
}
// ----------------------------------------------------------
Horse.prototype.relaxation = function(action){
	console.log(this.name + " отдыхает ");
	this.fatigue = 0;
	this.needToRun -= this.individualFatigue;	// Уменьшаем задание на пробег на величину индивидуальной усталости
	setTimeout(action, 1000);					// и после 1сек отдыха бежим далее
}
// ----------------------------------------------------------
Horse.prototype.toString = function(){
	return "Лошадь " + this.name + ". Пробежала " + this.mileage + ". Усталость " + this.fatigue + ". Общий прбег " + this.constructor.prototype.totalMileage;
}
// -------------------------- Main --------------------------
var horse1 = new Horse("First");
console.log(horse1.toString());
horse1.run(13);

var horse2 = new Horse("Second");
console.log(horse2.toString());
horse2.run(8);

horse1.run(11);
// ----------------------------------------------------------