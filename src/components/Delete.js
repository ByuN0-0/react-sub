import React, { Component } from "react";

class Delete extends Component {
  render() {
    return (
      <div className="Delete">
        <a
          href="/delete"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("delete");
          }.bind(this)}
        >
          글 삭제
        </a>
      </div>
    );
  }
}

export default Delete;
