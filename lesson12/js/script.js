/*
Напишите функцию-конструктор Accumulator(startingValue). 
Объекты, которые она создает, должны хранить текущую сумму и 
прибавлять к ней то, что вводит посетитель.

Более формально, объект должен:

Хранить текущее значение в своём свойстве value. 
Начальное значение свойства value ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель 
при вызовах метода read(), с учетом начального значения startingValue.
*/

// ----------------------------------------------------------
function Accumulator(startingValue){
	var value = startingValue;

	this.read = function(){
		var res = +prompt("Введите любое число: ");
		value += res;
	}
	this.toString = function(){
		return value;
	}
	Object.defineProperty(this, "result", {
		get: function() {
				return value;
			}
	});
}
// -------------------------- Main --------------------------
var accumulator = new Accumulator(0);
console.log("Starting value - " + accumulator.result);
accumulator.read();
accumulator.read();
accumulator.read();
console.log("toString - " + accumulator.toString());
console.log("Property get - " + accumulator.result);
// ----------------------------------------------------------