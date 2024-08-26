// import logo from "./logo.svg";
import "./App.css";

// JSX : (Javascript XML): định dạng cho phép viết HTML trong React
// ES6
// Babel: giúp compile code hỗ trợ những trình duyệt cũ
// curly braces: dấu {} ngoặc nhọn

/**
 *
 * element = <div className="info"> Hello world!</div> <-> JSX(nên dùng)
 * element = React.createElement('div', {class: 'info'}) <-> React element
 */

// Props (truyền vào component YoutubeItem)
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="">
      <div className="youtube-item">
        <div className="youtube-image" style={{ height: "250px" }}>
          <img
            className="youtube-bg"
            src={props.image}
            alt=""
            // style={{ display: "block", maxWidth: "100%", width: "100%", height:"100%"}}
          />
        </div>
        <div className="youtube-footer">
          <img
            src="https://plus.unsplash.com/premium_photo-1723744998399-3f9882ae00a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="youtube-avt"
            className="youtube-avt"
          />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.titleh3 || "This is title h3"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "This is example of author name"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
//parent component
function App() {
  return (
    <div className="">
      <h1>Less12</h1>
      <div className="youtube-list">
        <YoutubeItem
          image="https://images.unsplash.com/photo-1724313802120-2d507518854b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D"
          // titleh3="PHP master"
          // author="Phan Van Cuong"
        ></YoutubeItem>
        <YoutubeItem
          image="https://plus.unsplash.com/premium_photo-1724076827133-593437b8f16a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"
          titleh3="PHP master"
          author="Phan Van Cuong"
        ></YoutubeItem>
        <YoutubeItem
          image="https://images.unsplash.com/photo-1724004546082-edaf801e3129?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
          titleh3="HTML CSS Pro"
          author="Sơn Đặng F8 pro"
        ></YoutubeItem>
        <YoutubeItem
          image="https://images.unsplash.com/photo-1720457148840-f69a762729d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D"
          titleh3="Laravel"
          author="Hoangan unicode"
        ></YoutubeItem>
      </div>
    </div>
  );
}

export default App;
