import { Component } from "react";

type WelcomeProps = { name: string };

class WelcomeMessage extends Component<WelcomeProps> {
    
  render() {
    return <h1>Hej, {this.props.name}!</h1>;
  }
}

export default WelcomeMessage;
