window.onload = function () {
	var userInput = document.getElementById('btn');
	userInput.onclick = addElement;

	var userInputKeyPress = document.getElementById('myInput');
	userInputKeyPress.onkeypress = pressKeyBtn;


	// var nodeList = document.getElementsByTagName('li');
	// addClose(nodeList);
};

function pressKeyBtn(e) {
	var addBtn = document.getElementById('btn');
	if (e.keyCode === 13) {
		addBtn.click();
		return false;
	}
}

function addElement() {
	var li = document.createElement('li');
	var inputValue = document.getElementById('myInput').value;
	var inputValueToString = document.createTextNode(inputValue);
	var span = document.createElement('sapn');
	var txt = document.createTextNode('\u00D7');

	if (inputValue === '') {
		alert("Devi scrivere qualcosa!");
	} else {
		document.getElementById("myUl").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	span.className = 'close';
	span.appendChild(txt);
	span.setAttribute('onclick', 'deletElement(this)');

	li.appendChild(inputValueToString);
	li.appendChild(span);

	document.getElementById('myUl').appendChild(li);
}

// Click on a close button to remove the current list item
function deletElement(elem) {
	elem.parentElement.remove(elem);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checkedList');
	}
}, false);



// Create a "close" button and append it to each list item
// function addClose(nodeList) {
// 	for (let i = 0; i < nodeList.length; i++) {
// 		var span = document.createElement('sapn');
// 		var txt = document.createTextNode('\u00D7');
// 		span.className = 'close';
// 		span.appendChild(txt);
// 		nodeList[i].appendChild(span);
// 	}
// }
