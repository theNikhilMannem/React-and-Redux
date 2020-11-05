/*

Starting with a simple React component which has a constructor and a render() method. Recalling the React-ness.

*/



class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }
  render() {
    return <div />
  }
};
