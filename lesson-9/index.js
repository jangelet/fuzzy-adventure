const deepFreeze = require('deep-freeze');
const expect = require('expect');

// TODO
    // Run 'npm test' in the terminal, test should fail
    // Run 'npm test' in the terminal - test should pass if function is implemented correctly

const addCounter = (list) => {
    // TODO: Implement this function
};


const removeCounter = (list, index) => {
    // TODO: Implement this function
};

const incrementCounter = (list, index) => {
    // TODO: Implement this function
};

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
};


const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();


console.log('All test passed!');


