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
	var result = [];

	for (var i = 0, lenArr1 = arr1.length; i < lenArr1; i++) {
		var item1 = arr1[i];
		for (var j = 0, lenArr2 = arr2.length; j < lenArr2; j++) {
			var item2 = arr2[j];
			if((item1 === item2 || 
				(item1 !== item1 && item2 !== item2)) // NaN == NaN
				&& !contains(result, item2))
			{
				result.push(item2);
			}
		}
	}

	return result;
}
// ----- Определяет, входит ли элемент в состав массива -----
function contains(arr, item){
	for (var i = arr.length - 1; i >= 0; i--) {
		var current = arr[i];
		if(current === item ||
			(current !== current && item !== item)) // NaN == NaN
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
		if(typeof item !== "undefined" 
			&& typeof item !== "string"
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

var arr1 = [3, undefined, 4, "a", 5, NaN, 2, 6, null, NaN, 3, 7, "a"]; 
var arr2 = [1, 2, 3, 4, undefined, 7, "a", NaN, 9, 90, null, 3];

var res = findDuplicate(arr1, arr2);
printArray(res);

// ----------------------------------------------------------