// export {};
import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => {
				return <TodoItem id={item.id} text={item.text} />;
			})}
		</ul>
	);
};

export default Todos;
