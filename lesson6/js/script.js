function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
// ----------------------------------------------------------
function createArray(n, m){
	var arr = new Array(n);
	for (var i = 0; i < n; i++) {
		arr[i] = new Array(m);
		for (var j = 0; j < m; j++) {
			//arr[i][j] = i * m + j + 1;
			arr[i][j] = randomInteger(0, 100);
		}
	}
	return arr;
}
// ----------------------------------------------------------
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
// -------- Первый метод обхода массива по периметру --------
function firstWayToPerimeter(arr){
	var resultArr = arr[0].slice(); // Клонируем первую строку массива,
									// что бы избежать копирования ссылки
									// и изменения исходного массива
	for (var i = 1; i < arr.length; i++) {
		var lastIndex = arr[i].length - 1;
		resultArr.push( arr[i][lastIndex] );
	}
	var lastArr = arr[arr.length - 1];
	for (var i = lastArr.length - 2; i >= 0; i--) {
		resultArr.push( lastArr[i] );
	}
	for (var i = arr.length - 2; i > 0; i--) {
		resultArr.push( arr[i][0] );
	}
	return resultArr;
}
// -------- Второй метод обхода массива по периметру --------
function secondWayToPerimeter(arr){
	var resultArr = arr[0].slice();
	var left = [];
	for (var i = 1; i < arr.length; i++) {
		resultArr.push( arr[i][arr[i].length - 1] );
		if (i > 0 && i < arr.length - 1) {
			left.push(arr[i][0]);
		}
	}	
	var bottom = arr[arr.length - 1].slice()	// Клонируем последнюю строку массива,
												// что бы избежать копирования ссылки
												// и изменения исходного массива
				.reverse().slice(1);

	return resultArr.concat(bottom, left.reverse());
}
/* -------- Третий метод обхода массива по периметру --------
// Работает при условии размерности (n, m) m>=n
function thirdWayToPerimeter(arr){
	var xLength = arr[0].length;	// Количество учитываемых эл. массива в строке
	var yLength = arr.length - 2;	// Количество учитываемых эл. массива в столбце
	var resultArr = new Array(xLength * 2 + yLength * 2); // Вычистяем размер результирующего массива

	for (var i = 0; i < xLength; i++) {	
		// Копируем первую строку массива arr
		resultArr[i] = arr[0][i];	

		// Копируем последнюю строку массива arr
		resultArr[xLength + yLength + i] = arr[yLength + 1][xLength - i - 1];

		if(i < yLength){
			// Копируем последний столбец массива arr
			resultArr[xLength + i] = arr[i + 1][xLength - 1];	

			// Копируем первый столбец массива arr
			resultArr[xLength * 2 + yLength + i] = arr[yLength - i][0];
		}
	}
	return resultArr;
}
*/
// -------- Третий метод обхода массива по периметру --------
function thirdWayToPerimeter(arr){
	var xLength = arr[0].length;	// Количество эл. массива в строке
	var yLength = arr.length;		// Количество эл. массива в столбце
	var resultArr = new Array(xLength * 2 + (yLength - 2) * 2); // Вычистяем размер результирующего массива

	for (var i = 0; i < xLength; i++) {	
		// Копируем первую строку массива arr
		resultArr[i] = arr[0][i];	

		if(i < xLength - 1){
			// Копируем последний столбец массива arr
			resultArr[xLength + i] = arr[i + 1][xLength - 1];	
		}
		if(i < yLength - 1){
			// Копируем последнюю строку массива arr
			resultArr[xLength + (yLength - 1) + i] = arr[yLength - 1][(xLength - 2) - i ];			
		}
		if(i < yLength - 2){
			// Копируем первый столбец массива arr
			resultArr[xLength * 2 + (yLength - 2) + i] = arr[(yLength - 2) - i][0];
		}		
	}
	return resultArr;
}
// ---------- Обход массива по главной диагонали -----------
function wayAlongMainDiagonal(arr){
	var xLength = arr[0].length;	// Количество учитываемых эл. массива в строке
	var yLength = arr.length - 2;	// Количество учитываемых эл. массива в столбце
	var resultArr = new Array(xLength * 2 + yLength * 2); // Вычистяем размер результирующего массива

	for (var i = 0; i < xLength; i++) {	
		// Копируем первую строку массива arr
		resultArr[i] = arr[0][i];

		if(i < yLength){
			// Копируем последний столбец массива arr
			resultArr[xLength + i] = arr[i + 1][xLength - 1];
		}

		if(i < xLength - 1){
			// Копируем главную диагональ массива arr
			resultArr[xLength + yLength + i] = arr[yLength - i + 1][xLength - i - 1];
		}
	}
	return resultArr;
}
// ------- Обход массива по второстепенной диагонали --------
function wayAlongSecondaryDiagonal(arr){
	var xLength = arr[0].length;	// Количество учитываемых эл. массива в строке
	var yLength = arr.length - 2;	// Количество учитываемых эл. массива в столбце
	var resultArr = new Array(xLength * 2 + yLength * 2); // Вычистяем размер результирующего массива

	for (var i = 0; i < xLength; i++) {	
		// Копируем первую строку массива arr
		resultArr[i] = arr[0][i];	

		if(i < xLength - 1){
			// Копируем второстепенную диагональ массива arr
			resultArr[xLength + i] = arr[i + 1][xLength - i - 2];
		}
		if(i < yLength){
			// Копируем первый столбец массива arr
			resultArr[xLength * 2 - 1 + i] = arr[yLength - i][0];
		}
	}
	return resultArr;
}
// ---- Обход массива по периметру против часовой стрелки ---
function wayToPerimeterCounterclockwise(arr){
	var xLength = arr[0].length;	// Количество эл. массива в строке
	var yLength = arr.length;		// Количество эл. массива в столбце
	var resultArr = new Array((xLength - 2) * 2 + yLength * 2); // Вычистяем размер результирующего массива

	for (var i = 0; i < yLength; i++) {	
		// Копируем первый столбец массива arr
		resultArr[i] = arr[i][0];	

		if(i < yLength - 1){			
			// Копируем последнюю строку массива arr
			resultArr[yLength + i] = arr[yLength - 1][i + 1];

			// Копируем последний столбец массива arr
			resultArr[yLength + xLength - 1 + i] = arr[yLength - 2 - i][xLength - 1];
		}
		if(i < yLength - 1){
			// Копируем первую строку массива arr
			resultArr[yLength * 2 + xLength - 3 + i] = arr[0][xLength - i - 1];
		}
	}
	return resultArr;
}
// ----------------------------------------------------------
function goWay(title, action){
	var arr = action(initialArray);
	console.log(title);
	console.log(arr);
	console.log(arr.length);
}
// -------------------------- Main --------------------------
var initialArray = createArray(5,5);
console.log("Исходный массив:");
printArray(initialArray);

goWay("\nПервый способ обхода по периметру:", firstWayToPerimeter);
goWay("\nВторой способ обхода по периметру:", secondWayToPerimeter);
goWay("\nТретий способ обхода по периметру:", thirdWayToPerimeter);
goWay("\nОбход массива по главной диагонали:", wayAlongMainDiagonal);
goWay("\nОбход массива по второстепенной диагонали:", wayAlongSecondaryDiagonal);
goWay("\nОбход массива по периметру против часовой стрелки:", wayToPerimeterCounterclockwise);

// ----------------------------------------------------------
console.log("\nИсходный массив:");
printArray(initialArray);
