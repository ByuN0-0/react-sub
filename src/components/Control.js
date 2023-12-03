import { Component } from "react";

class Control extends Component {
  render() {
    return (
      <div className="Control">
        <a
          href="/create"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("create");
          }.bind(this)}
        >
          추가
        </a>
        |
        <a
          href="/update"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("update");
          }.bind(this)}
        >
          수정
        </a>
        {/*}
        |
        <a
          href="/delete"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)}
        >
          delete
        </a
        <input
          type="button"
          value="create"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("create");
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="update"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("update");
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="delete"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)}
        />*/}
      </div>
    );
  }
}
export default Control;
