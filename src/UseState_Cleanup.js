import { useState, useEffect } from "react";

function Hello() {

  useEffect(function() {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    }
  }, []);
  // 같은 방법 아래 방법이 더 가독성이 느껴짐
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    //create, destory (숨기는 것이 아님)
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
  </div>
  );

}

export default App;


//test
// import { useState, useEffect } from "react";

// function Hello() {
  
//   useEffect( () => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   },[])

//   return <h1>Hello</h1>
// }

// function App() {
//   const [showing, setShowing] = useState();
//   const onClick = () => setShowing((prev) => !prev);

//   return (
//   <div> 
//     {showing ? <Hello />:null}
//     <button onClick={onClick} >{showing ? "Hide": "Show"}</button>
//   </div>
//   );
// }
// export default App;