// React 라이브러리와 Component 클래스를 import합니다.
import React, { Component } from "react";
import { useState } from "react";
// 다른 컴포넌트들을 import합니다.
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control.js";
import CreateContent from "./components/CreateContent.js";
import UpdateContent from "./components/UpdateContent.js";
import Delete from "./components/Delete.js";
// 이미지 파일들을 import합니다.
/*
import webImg from "./img/web.png";
import htmlImg from "./img/html.png";
import cssImg from "./img/css.png";
import jsImg from "./img/javascript.png";
import reactImg from "./img/react.png";
*/
import "./App.css";

function Clock(props) {
  return (
    <div className="Clock">
      <h2>
        접속 시간<br></br>
        {props.date.toLocaleTimeString()}
      </h2>
    </div>
  );
}

function CurrentTime(props) {
  const [date, setDate] = useState(new Date().toString());

  return (
    <div className="CurrentTime">
      현재 시간: {date}
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault(); // prevent the default behavior of the anchor tag
          setDate(new Date().toString());
        }}
      >
        현재 시간 갱신
      </a>
    </div>
  );
}

// App 클래스를 정의합니다. Component를 상속받습니다.
class App extends Component {
  // constructor를 통해 컴포넌트의 초기 상태를 설정합니다.
  constructor(props) {
    super(props); // Component 클래스의 생성자를 호출합니다.
    this.max_content_id = 4;
    this.state = {
      mode: "welcome", // 현재 모드를 'welcome'으로 설정합니다.
      selected_content_id: 0, // 선택된 content의 id를 0으로 초기화합니다.
      subject: { title: "CAT", sub: "The cutest CAT" }, // 상단 제목에 대한 정보를 객체로 설정합니다.
      welcome: {
        title: "gif cat",
        desc: "animation cat",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Gatos_de_Galicia.gif",
      }, // 환영 메시지와 이미지를 객체로 설정합니다.
      contents: [
        // 컨텐츠의 배열을 설정합니다. 각 항목은 id, title, desc, image 속성을 갖습니다.
        {
          id: 1,
          title: "5 cats",
          desc: "HTML is for information",
          image:
            "https://images.mypetlife.co.kr/content/uploads/2023/04/13121310/AdobeStock_163366644-1024x570.jpeg",
        },
        {
          id: 2,
          title: "manul cat",
          desc: "CSS is for design",
          image:
            "https://www.cat-lab.co.kr/data/editor/1805/4a609c416f6a655ac25324b32ff4aac9_1526562637_7365.jpg",
        },
        {
          id: 3,
          title: "liquid cat",
          desc: "Cat is liquid      with https://www.drgoulu.com/wp-content/uploads/2017/09/Rheology-of-cats.pdf  고양이의 뼈는 워낙 연골이 많아서 인간이나 개와 달리 몸 전체가 문어처럼 물렁물렁하다. 그 덕분에 머리뼈만 들어갈 수 있는 틈이면 어디든지 비집고 들어갈 수 있을 정도로 엄청난 유연성을 갖고 있다. 우스갯소리로 연체동물이라거나 실은 고체가 아니라 액체라는 이야기도 있을 정도다. 고양이 액체설(Cats are Liquid)은 고양이가 커다란 컵이나 물통 같은 곳에 마치 액체인 것처럼 들어가 있는 듯한 것을 해학으로 표현한 일종의 밈이다.",
          image:
            "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6j8l/image/5yuYDkk43MrgHdfYuVI5kM1htTs.jpg",
        },
        {
          id: 4,
          title: "Cat with fish",
          desc: "Cat likes fish leave the fish to the cat 통념과 마찬가지로 고양이는 실제로 대부분 생선을 좋아한다. 고양이가 살아가기 위해서는 타우린 성분이 필요하고 이게 없으면 생식능력 저하, 야맹증, 실명 등이 일어나는데, 고양이는 개와 달리 스스로 타우린을 합성하지 못하기 때문에 본능적으로 타우린이 많이 들어간 먹잇감을 찾게 된다. 1온스당 소고기 5.5~10mg, 닭고기 9.5mg, 생선 36mg, 새우 48mg의 타우린이 들어있다. 보다시피 수산물에 압도적으로 많이 들어있다. 단, 오징어나 새우는 고양이가 좋아하기는 하지만 알레르기성 질환이 생기기 쉬우므로 주지 말자.",
          image:
            "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/27QYQvhbGywASTMGZgd9x-UOhpM.jpg",
        },
      ],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _image,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
      _article = <ReadContent title={_title} desc={_desc} img={_image}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc} img={_content.image}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
              image: "",
            });
            this.setState({ contents: _contents });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      var _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  // render 함수는 컴포넌트가 화면에 렌더링될 때 호출됩니다.
  render() {
    return (
      <div className="App">
        {/* Subject 컴포넌트는 웹사이트의 제목 부분을 렌더링합니다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" }); // 클릭 시 mode를 'welcome'으로 설정합니다.
          }.bind(this)}
        ></Subject>

        {/* TOC 컴포넌트는 Table of Contents를 렌더링합니다. */}
        <div className="container">
          <div className="category">
            <Clock date={new Date()} />
            <CurrentTime />

            <Control
              onChangeMode={function (_mode) {
                if (_mode === "delete") {
                  if (window.confirm("really?")) {
                    var _contents = Array.from(this.state.contents);
                    var i = 0;
                    while (i < _contents.length) {
                      if (_contents[i].id === this.state.selected_content_id) {
                        _contents.splice(i, 1);
                        break;
                      }
                      i = i + 1;
                    }
                    this.setState({ mode: "welcome", contents: _contents });
                    alert("deleted!");
                  }
                } else {
                  this.setState({ mode: _mode });
                }
              }.bind(this)}
            ></Control>
            <TOC
              onChangePage={function (id) {
                this.setState({
                  mode: "read", // 클릭 시 mode를 'read'로 설정합니다.
                  selected_content_id: Number(id), // 선택된 컨텐츠의 id를 설정합니다.
                });
              }.bind(this)}
              data={this.state.contents}
            ></TOC>
          </div>
          <div className="content">
            <Delete
              onChangeMode={function (_mode) {
                if (_mode === "delete") {
                  if (window.confirm("really?")) {
                    var _contents = Array.from(this.state.contents);
                    var i = 0;
                    while (i < _contents.length) {
                      if (_contents[i].id === this.state.selected_content_id) {
                        _contents.splice(i, 1);
                        break;
                      }
                      i = i + 1;
                    }
                    this.setState({ mode: "welcome", contents: _contents });
                    alert("deleted!");
                  }
                } else {
                  this.setState({ mode: _mode });
                }
              }.bind(this)}
            ></Delete>
            {this.getContent()}
            {/* Content 컴포넌트는 선택된 컨텐츠의 내용과 이미지를 렌더링합니다. */}
          </div>
        </div>
      </div>
    );
  }
}

// App 컴포넌트를 export합니다. 다른 파일에서 App 컴포넌트를 사용할 수 있게 됩니다.
export default App;
