/*

Here, the state is locally managed first: when the user types into the input element, the state input property updates and as the button's clicked, it displays the message (each after another) in an unordered list.

*/



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
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage} >Submit</button>
        <ul>
          {
            this.state.messages.map((message) => <li key={this.state.messages.indexOf(message)}>{message}</li>)
          }
        </ul>
      </div>
    );
  }
};
