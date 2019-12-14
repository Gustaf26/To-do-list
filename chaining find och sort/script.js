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



let todosEl = document.querySelector('.listor');
let undoneEl = document.querySelector('#undone');
let doneEl = document.querySelector('#done');



let lista = todos.forEach(function(todo) {

todoEl = document.createElement('li');

todoEl.innerHTML = todo.description;

undoneEl.append(todoEl)});



const renderList = function (todo) {

	doneEl.innerText = "";
	undoneEl.innerText= "";
	
	todo.completed = !todo.completed;

	  let a = todos.filter((item)=>{return item.completed ==false}).sort((itema, itemb)=>{if (itema.description>itemb.description) {return +1} else {return -1}});
	  
	  a.forEach((item)=> {todoEl = document.createElement('li');
	 todoEl.innerText = item.description;
	 undoneEl.append(todoEl)})

		

	 let b = todos.filter((thing)=>{return thing.completed ==true}).sort((itema, itemb)=>{if(itema.description>itemb.description) {return +1}else{return -1}});

	 b.forEach((thing) => {todoEl = document.createElement('li');
	 todoEl.innerText = thing.description;
	 doneEl.append(todoEl);})};
	
		


// Add click handler for updating completed status
todosEl.addEventListener('click', function(e) {
	
	if (e.target.tagName === "LI") {
		// find clicked todo
		const todo = todos.find(todo => todo.description === e.target.innerText);

		// update completed status for this todo item
		//todo.completed = !todo.completed;

		// save updated todo list
		

		// render the updated todo list to DOM
		renderList(todo);
	}});
	    
	





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
	sortedTodos.push(newTodo);

	undoneEl.append(todoEl);
});
