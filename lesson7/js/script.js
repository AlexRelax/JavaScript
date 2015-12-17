/*
Написать функцию, которая находит в массиве значения, повторяющиеся два и более
раз, и возвращает их.
т.е. есть два массива [1,2,3,4] и [3,4,5,6], функция должны принять оба этих массива 
в качестве аргументов и вернуть в качестве результата массив [3,4]
давайте так - если переменная встречается больше чем 1 раз, то она попадает в результирующий
 массив только 1 раз [1,2,3,4, 3, 4] и [3,4,5,6, 3,4] всеравно вернет   [3,4]
*/

// ----------------------------------------------------------
function findDuplicate(arr1, arr2){
	var resultArr = [];

	for (var i = arr1.length - 1; i >= 0; i--) {
		var item1 = arr1[i];
		for (var j = arr2.length - 1; j >= 0; j--) {
			var item2 = arr2[j];
			if(item1 === item2 || 
				(item1 !== item1 && item2 !== item2)
				&& !contains(resultArr, arr2[j]))
			{
				resultArr.unshift(arr2[j]);
			}
		}
	}

	return resultArr;
}
// ----- Определяет, входит ли элемент в состав массива -----
function contains(arr, findItem){
	for (var i = arr.length - 1; i >= 0; i--) {
		var currentItem = arr[i];
		if(currentItem === findItem ||
			(currentItem !== currentItem && findItem !== findItem))
		{
			return true;
		}
	};
	return false;
}
// ------- Вывод на сонсоль ондо- и двумерных массивов ------
function printArray(arr){
	var table = "";
	for (var i = 0, lenA = arr.length; i < lenA; i++) {
		var item = arr[i];
		if(typeof item !== undefined 
			&& item !== null 
			&& item.length > 0)
		{
			for (var j = 0, lenB = item.length; j < lenB; j++) {
				table += "\t" + item[j];
			}
			table += "\n";
		}
		else{
			table += "\t" + item;
		}
	}
	console.log(table);
}
// -------------------------- Main --------------------------

var arr1 = [3, undefined, 4, 5, NaN, 2, 6, null]; 
var arr2 = [1, 2, 3, 4, undefined, 7, NaN, null];

var res = findDuplicate(arr1, arr2);
printArray(res);

// ----------------------------------------------------------