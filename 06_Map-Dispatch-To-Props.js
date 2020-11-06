/*

The mapDispatchToProps() function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store.
It returns an object that maps dispatch actions to property names, which become component props.
However, instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relevant action data.

You have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter when you define the function.
Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps().

For example, you have a loginUser() action creator that takes a username as an action payload.
The object returned from mapDispatchToProps() for this action creator would look something like:
  {
    submitLoginUser: function(username) {
      dispatch(loginUser(username));
    }
  }

*/



const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// mapDispatchToProps() function, returning an object with a prop.
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  };
}

console.log(mapDispatchToProps())
