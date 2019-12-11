/**
 * My Awesomest TODO List.
 *
 */


let todos = [
	{ // 0
		description: "Have class meeting",
		completed: false,
	},
	{ // 1
		description: "Eat lunch",
		completed: false,
	},
	{ // 2
		description: "Code",
		completed: false,
	},
	{ // 3
		description: "Sleep",
		completed: false,
	},
	{ // 4
		description: "Repeat",
		completed: false,
	},
];



let todosEl = document.querySelector('#todos');

let first = todos.forEach(function(todo) {

todoEl = document.createElement('li');

todoEl.innerHTML = todo.description;

todosEl.append(todoEl)});


let doneEl = document.querySelector('#done');



const renderToDoList = function (todo) {

	 todoEl = document.createElement('li');
		todoEl.innerHTML = todo.description;
		todo.completed = false;
		todosEl.append(todoEl);
};
		

	
		//doneEl.remove(todoEl);*/
		

const renderDoneList = function (todo) {
	
	 nytodoEl = document.createElement('li');
	nytodoEl.innerHTML = todo.description;
	todo.completed =true;
	doneEl.append(nytodoEl);
	};

			//todosEl.remove(todoEl);
		


// Add click handler for updating completed status
todosEl.addEventListener('click', function(e) {
	
	 content = e.target.innerText;
	 e.target.remove();
	  found = todos.find(function(todo) {
		if (todo.description = content)
		{return true;}
		else {return false;}})
	
	renderDoneList(found)});

doneEl.addEventListener('click', function(e) {
	
	let content = e.target.innerText;
	e.target.remove();
	let found = todos.find(function(todo) {
	if (todo.description = content)
	{return true;}
	else {return false;}})
		
	renderToDoList(found)});



// Add click handler for creating a new TODO
let createNewTodoButton = document.querySelector("#createNewTodo");
createNewTodoButton.addEventListener('click', function() {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let newTodo = {
		description: text,
		completed: false
	}

	todoEl = document.createElement('li');
	todoEl.innerHTML = newTodo.description;
	todos.push(newTodo);

	todosEl.append(todoEl);
});
