import React, { useState } from "react";

//include images into your bundle
import ToDoList from "./ToDoList";
import TaskList from "./TaskList";

//create your first component
export function Home() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		setTodos([todo, ...todos]);
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	return (
		<>
			<div className="d-flex justify-content-center m-3">
				<div>
					<div className="d-flex justify-content-center m-3">
						<h1>To Do</h1>
					</div>
					<ToDoList addTodo={addTodo} />
					<TaskList todos={todos} removeTodo={removeTodo} />
				</div>
			</div>
		</>
	);
}
