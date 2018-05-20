import * as Redux from 'redux';

//reducer, which sits inside store
//0 is intitial state of application
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
      break;
    case 'DECREMENT':
      return state - 1;
      break;
    default:
      return state;
  }
};

//leveraging Redux library to create store
const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

//registers a callback that is called anytime action is dispatched
store.subscribe(render);
//call to render initial state
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
