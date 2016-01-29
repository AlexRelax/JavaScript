/*
*/

// ----------------------------------------------------------
function createTable(n){

	var div = document.getElementById("tb1");	
	var table = document.createElement("table");
	var caption = document.createElement("caption");
	var tr, td;
	
	for(var i = 0; i < n; i += 1){
		tr = document.createElement("tr");
		for(var j = 0; j < n; j += 1){
			td = document.createElement("td");
			td.textContent = i * n + j + 1;			
			tr.appendChild(td); 
		}
		table.appendChild(tr);
	}
	caption.innerHTML = "<b>Table 1. CreateElement</b>";
	table.appendChild(caption);
	
	div.appendChild(table);
}
// ----------------------------------------------------------
function createTable2(n){

	var div = document.getElementById("tb2");
	var strTable = "<table><caption><b>Table 2. Concat</b></caption>";

	for(var i = 0; i < n; i += 1){
		strTable = strTable.concat("<tr>");
		for(var j = 0; j < n; j += 1){
			strTable = strTable.concat("<td>", i * n + j + 1, "</td>");
		}
		strTable = strTable.concat("</tr>");
	}
	strTable = strTable.concat("</table>");
		
	div.innerHTML = strTable;
}
// ----------------------------------------------------------
function createTable3(n){

	var div = document.getElementById("tb3");
	var arrTable = [];

	arrTable.push("<table>", "<caption>", "<b>Table 3. Array.join</b>", "</caption>");
	for(var i = 0; i < n; i += 1){
		arrTable.push("<tr>");
		for(var j = 0; j < n; j += 1){
			arrTable.push("<td>", i * n + j + 1, "</td>");
		}
		arrTable.push("</tr>");
	}
	arrTable.push("</table>");
		
	div.innerHTML = arrTable.join("");
}
// -------------------------- Main --------------------------
createTable(10);
createTable2(10);
createTable3(10);
// ----------------------------------------------------------
