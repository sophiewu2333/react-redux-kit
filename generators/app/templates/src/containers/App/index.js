import React from "react";
import { connect } from "react-redux";
import { increment } from "../../modules/entry/actions";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <div>
        <div>
          current number： {this.props.number}{" "}
          <button className="red" onClick={() => this.onClick()}>点击+1</button>
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  number: state.number
}))(App);
