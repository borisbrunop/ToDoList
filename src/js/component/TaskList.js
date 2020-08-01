import React from "react";
import ToDo from "./ToDo";

function TaskList({ todos, removeTodo }) {
	let styleSpan = "";
	if (todos.length === 0) {
		styleSpan = "d-none";
	} else {
		styleSpan = "";
	}

	return (
		<>
			<ul id="list" className="list-group list-group-flush">
				{todos.map(task => (
					<ToDo key={task.id} task={task} removeTodo={removeTodo} />
				))}
			</ul>
			<span className={"float-left " + styleSpan}>
				{todos.length} items left
			</span>
		</>
	);
}

export default TaskList;

{
	/* <li className="list-group-item">
como
<span className="float-right">
	<i className="fas fa-times" />
</span>
</li> */
}
