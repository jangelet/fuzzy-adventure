const deepFreeze = require('deep-freeze');
const expect = require('expect');

// TODO
    // Run 'npm test' in the terminal, test should fail
    // Run 'npm test' in the terminal - test should pass if function is implemented correctly

const toggleTodo = (todo) => {
	// TODO: Add code to implement this function
};

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};
	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

	deepFreeze(todoBefore);

	expect(
		toggleTodo(todoBefore)
	).toEqual(todoAfter);
};

testToggleTodo();

console.log('All Test Passed');