import React, { useState } from "react";

function ToDoList({ addTodo }) {
	const [task, setTask] = useState({
		id: "",
		taskString: ""
	});

	function handleTaskInputChange(e) {
		setTask({ taskString: e.target.value });
	}

	function create_UUID() {
		var dt = new Date().getTime();
		var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function(c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
			}
		);
		return uuid;
	}

	function handleSubmit(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			if (task.taskString.trim()) {
				addTodo({ ...task, id: create_UUID() });
				//reset input
				setTask({ ...task, taskString: "" });
			}
		}
	}

	return (
		<>
			<div className="d-flex input-group input-group-sm">
				<input
					onChange={handleTaskInputChange}
					onKeyDown={handleSubmit}
					type="text"
					className="form-control"
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="Insert ToDo"
				/>
			</div>
		</>
	);
}

export default ToDoList;
