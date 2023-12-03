import React, { Component } from "react";
class ReadContent extends Component {
  constructor(props) {
    super(props);

    // 초기 state 설정
    this.state = {
      mode: "welcome",
      contents: [], // contents에 대한 초기값을 설정해주세요.
      selected_content_id: null, // selected_content_id에 대한 초기값을 설정해주세요.
    };
  }
  render() {
    return (
      <div className="ReadContent">
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
          <div>
            <img src={this.props.img} alt={this.props.title}></img>
          </div>
        </article>
      </div>
    );
  }
}

export default ReadContent;
