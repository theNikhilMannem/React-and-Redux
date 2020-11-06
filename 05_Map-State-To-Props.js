/*

The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want.
This way, you make sure that each component only has access to the state it needs.
You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().

In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch.
Once these functions are in place, you'll see how to use the React Redux connect method to connect them to your components in another challenge.

Note: Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps().

*/



const state = [];

// mapStateToProps() function.
function mapStateToProps(state) {
    return {
        messages: state
    };
}
