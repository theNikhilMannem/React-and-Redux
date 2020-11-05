/*

You need to move the logic the React app is performing locally in its state into Redux: This is the first step to connect the simple React app to Redux.
The only functionality your app has is to add new messages from the user to an unordered list.

*/



// Action type.
const ADD = 'ADD';

// Action creator.
const addMessage = (message) => {
    return {
        type: ADD,
        message
    };
};

// Reducer.
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
          return [...state, action.message];
        default:
          return state;
    }
};

// Store.
const store = Redux.createStore(messageReducer);
