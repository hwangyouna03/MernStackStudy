import './App.css';
import Test from "./Test";

function App() {

  let flag = true;
  function CheckFlag(flag) {
    if(flag) {
      return "참입니다.";
    } else {
      return "거짓입니다."
    }
  }

  return (
      <div
          style={{
            display: "flex",
            flexDirection : "column",
            alignItems : "center",
          }}>
        <h1>Hello, React!</h1>
        {/*{CheckFlag(flag)}*/}
        <Test/>
      </div>
  );
}

export default App;
