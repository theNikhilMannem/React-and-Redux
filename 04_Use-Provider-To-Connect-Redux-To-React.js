/*

Now, we got to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides its react-redux package to help accomplish these tasks.
React Redux provides a small API with two key features: 'Provider' and 'connect'.

Now, we use the Provider: a wrapper component from React Redux that wraps your React app.
This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree.
Provider takes two props, the Redux store and the child components of your app.

Defining the Provider for an App component might look like this:
  <Provider store={store}>
    <App/>
  </Provider>

*/



// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React Redux is available as a global variable here, so you can access the Provider with dot notation.
const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    // Returning the JSX: by rendering the Provider from ReactRedux, and passing the Redux store as a prop, and rendering the DisplayMessages component as a child.
    return (
      <Provider store={store} >
        <DisplayMessages />
      </Provider>
    );
  }
};
