class Todo {
	// we just have to do this in ts
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}

export default Todo;
