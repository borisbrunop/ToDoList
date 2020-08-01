import React from "react";

function ToDo({ task, removeTodo }) {
	function handleRemoveClick() {
		removeTodo(task.id);
	}

	return (
		<>
			<li className="list-group-item">
				{task.taskString}
				<span className="float-right">
					<i
						className="fas fa-times ml-3"
						onClick={handleRemoveClick}
					/>
				</span>
			</li>
		</>
	);
}

export default ToDo;
