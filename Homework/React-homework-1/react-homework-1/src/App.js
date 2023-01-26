import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  HiBars3,
  HiOutlineMagnifyingGlass,
  HiEllipsisVertical,
} from "react-icons/hi2";
import Button from "react-bootstrap/Button";
import { Routes, Route, NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

const work = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
];

const writertag = [
  {
    id: 1,
    tag: "프로그래밍",
  },
  {
    id: 2,
    tag: "IT",
  },
  {
    id: 3,
    tag: "개발",
  },
];
const writing = [
  {
    id: 1,
    src: "https://img1.daumcdn.net/thumb/C280x280.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/5tdm/image/awCx6_lLVT4xus0_HP36eWQ_wjg.png",
    title: "내 정보",
    preview: "운동의 시작은 오늘부터",
    createDate: "2000-07-04",
  },
  {
    id: 2,
    src: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_273%2Fn9o7c_16728336929071Tu7t_JPEG%2F63b563a675681c5f2e39f913_upload_1672832008406.jpeg%22&type=nf464_260",
    title: "TV 드라마",
    preview: "다른 사모님을 찾아가",
    createDate: "2023-01-04",
  },
  {
    id: 3,
    src: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_113%2FigP1F_16728135918990o4pD_JPEG%2Fclip_20230104151431_9.jpg%22&type=nf464_260",
    title: "TV 예능",
    preview: "김남희 연기에 과몰입한",
    createDate: "2023-01-03",
  },
];

const writingList = writing.map((writing) => (
  <div key={writing.id} className="carddiv">
    {/* <div className="write">
      <img className="cropimg" src={writing.src} alt="thumbnail"></img>
    </div>
    <div>
      <h5>{writing.title}</h5> <article>{writing.preview}</article>
      <p>{writing.createDate}</p>
    </div> */}
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={writing.src} />
      <Card.Body>
        <Card.Title>{writing.title}</Card.Title>
        <Card.Text>{writing.preview}</Card.Text>
        <p>{writing.createDate}</p>
      </Card.Body>
    </Card>
  </div>
));

const workList = work.map((work) => (
  <div className="worklist" key={work.id}>
    <img src={work.src} alt="dog"></img>
  </div>
));

const tagList = writertag.map((writertag) => (
  <li className="inlineli" key={writertag.id}>
    <Button variant="outline-dark"> {writertag.tag}</Button>
  </li>
));

function Info() {
  return (
    <div>
      <h2>소개</h2>
      충북대학교 컴퓨터공학과 소속이다.
      <div className="tagdiv">
        <ul className="inlineul">{tagList}</ul>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div>
      <div className="grid-container">{writingList}</div>
    </div>
  );
}
function Works() {
  return (
    <div>
      <div className="grid-container">{workList}</div>
    </div>
  );
}
// function NotFound() {
//   return (
//     <div>
//       <h1>404 error</h1>
//       <p>잘못된 접근입니다.</p>
//     </div>
//   );
// }

function App() {
  return (
    <Container
      className="container1"
      fluid
      // style={{ paddingLeft: "26px", paddingRight: "26px" }}
    >
      <div className="containter2">
        <Row>
          <Col className="wrap_inner">
            <div className="wrap_inner"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="bar3">
              <HiBars3
                size="27px
              "
              />
            </button>
            <button>brunch</button>
          </Col>
          <Col className="magnifier">
            <button>
              <HiOutlineMagnifyingGlass
                size="27px
              "
              />
            </button>
          </Col>
        </Row>
        <div className="lineup">
          <div className="forpadding"></div>
          <Row className="row">
            <Col className="imageframe">
              <img className="image" alt="person" src="img/person.png" />
            </Col>
            <Col md="2">
              <div></div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <h3>유진영</h3>
                <p>대학생</p>
              </div>
            </Col>
            <Col>
              <div></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="people">
                <p>구독자</p>
                <a href="/info">0</a>
              </div>
            </Col>
            <Col>
              <div className="people">
                <p>관심작가</p>
                <a href="/info">0</a>
              </div>
            </Col>
            <Col>
              <div className="people">
                <Button variant="outline-success">구독하기</Button>{" "}
                <button>
                  <HiEllipsisVertical
                    size="27px
              "
                  />
                </button>
              </div>
            </Col>
          </Row>

          <Row className="category">
            <Col>
              <div className="categorydiv">
                <NavLink
                  to="/info"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : {
                          color: "black",
                        }
                  }
                >
                  작가소개
                </NavLink>
              </div>
            </Col>
            <Col>
              <div class="categorydiv">
                <NavLink
                  to="/articles"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : {
                          color: "black",
                        }
                  }
                >
                  글 {writing.length}
                </NavLink>
              </div>
            </Col>
            <Col>
              <div class="categorydiv">
                <NavLink
                  to="/works"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : {
                          color: "black",
                        }
                  }
                >
                  작품 {work.length}
                </NavLink>
              </div>
            </Col>
          </Row>
          <div className="context">
            <Routes>
              <Route path="/info" element={<Info />}></Route>
              <Route path="/articles" element={<Articles />}></Route>
              <Route path="/works" element={<Works />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
