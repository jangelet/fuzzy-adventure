const deepFreeze = require('deep-freeze');
const expect = require('expect');

// TODO
    // Run 'npm test' in the terminal, test should fail
    // Run 'npm test' in the terminal - test should pass if function is implemented correctly

const todos = (state=[], action) => {
    // TODO: Add code to implement this function
  };
  
  const testTodo = () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id  : 0,
      text: 'Learn Redux'
    };
    const stateAfter = [
      {
        id  : 0,
        text: 'Learn Redux',
        completed: false
      }
    ];
    
    deepFreeze(stateBefore);
    deepFreeze(action);
    
    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  };
  
  
  testTodo();
  
  console.log('All tests passed!');