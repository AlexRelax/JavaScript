var a1 = 10;
var b1 = 30;
var c1 = 20;
var d1 = 2;

/*
	Для четырех переменных
    Найти самую большую переменную. 
    Умножить её значение на 20,
    следующую по величине умножить на 10,
    следующую по величине умножить на 5,
    с наименьшей ничего не делать.
*/
function forFourVariables(first, second, third, fourth){
	var data;
	var result = {first, second, third, fourth};
	if(first > second && first > third && first > fourth){
		first *= 20;
		data = forThreeVariables(second, third, fourth);
		result = {a:first, b:data.a, c:data.b, d:data.c};
	}
	else if(second > first && second > third && second > fourth){
		second *= 20;
		data = forThreeVariables(first, third, fourth);
		result = {a:data.a, b:second, c:data.b, d:data.c};
	}
	else if(third > first && third > second && third > fourth){
		third *= 20;
		data = forThreeVariables(first, second, fourth);
		result = {a:data.a, b:data.b, c:third, d:data.c};
	}
	else if(fourth> first && fourth > second && fourth > third){
		fourth *= 20;
		data = forThreeVariables(first, second, third);
		result = {a:data.a, b:data.b, c:data.c, d:fourth};
	}
	return result;
}

/* 	
	Делаем, используя операторы сравнения if (else)
	Для трех переменных. 
	Найти самую большую переменную. 
	Умножить её значение на 10, 
	следующую по величине умножить на 5,
	с наименьшей ничего не делать.
*/
function forThreeVariables(a, b, c){	
	if(a > b && a > c){
		a *= 10;
		(b > c) ? b *= 5 : c *= 5;
	}
	else if(b > a && b > c){
		b *= 10;
		(a > c) ? a *= 5 : c *= 5;
	}
	else if(c > a && c > b){
		c *= 10;
		(a > b) ? a *= 5 : b *= 5;
	}
	return {a, b, c};
}

console.log("For three variables:");
console.log("a = " + a1 + "; \tb = " + b1 + "; \tc = " + c1 + ";");
var result = forThreeVariables(a1, b1, c1);
console.log("a = " + result.a + "; \tb = " + result.b + "; \tc = " + result.c + ";");

a1 = 10;
b1 = 30;
c1 = 20;
d1 = 40;

console.log("\nFor four variables:");
console.log("a = " + a1 + "; \tb = " + b1 + "; \tc = " + c1 + "; \td = "+ d1 + ";");
result = forFourVariables(a1, b1, c1, d1);
console.log("a = " + result.a + "; \tb = " + result.b + "; \tc = " + result.c + "; \td = " + result.d + ";");