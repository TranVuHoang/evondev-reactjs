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

function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Triggle</h3>
      <p className="feature-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        distinctio eaque in quibusdam? Accusamus, sapiente labore maiores sed
        odit illo maxime facilis sequi libero. Voluptatem mollitia inventore
        vero labore enim!
      </p>
    </div>
  );
}

//parent component
function App() {
  // const name = "";

  // function fullname(firstName, lastName) {
  //   return `${firstName} ${lastName}`;
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Hello {name === "Evondev" ? "Tuan" : "Anh"}</h1>
  //       <h2>{fullname("Tran Anh", "Tuan")}</h2>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  /**
   * Bài 8: Thực hành JSX
   * Tạo 1 div có class="feauture"
   * bên trong div có img và class là feature-image
   * h3 class: feature-title
   * p class: feature-desc
   */
  return (
    <div className="">
      <h1>Less8</h1>

      {/* children component */}
      <Feature></Feature>
      <Feature />
      <Feature />
    </div>
  );
}

export default App;
