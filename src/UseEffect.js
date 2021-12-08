import { useState, useEffect } from "react";

function App(){
    const [counter, setValue] = useState(0); // counter 처음 실행했을때 
    const [keyword, setKeyword] = useState(""); //
    const onClick = () => setValue((prev) => prev + 1); // counter + 1
    const onChange = (event) => setKeyword(event.target.value); // 입력 받은 text를 확인
    useEffect(() => {
        console.log("I run only once");
    }, []) //처음 실행 시작했을때 한번만 실행 확인

    useEffect(() => {
        console.log("I run when 'counter' change");
    }, [counter]) //Button 클릭 때 마다 실행 확인

    useEffect(() => {
        console.log("I run when 'keyword' change");
    }, [keyword]) //Keyword 입력할 때 마다 실행 확인

    return(
        <div>
            <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search here..."
            />
            <h1>{counter}</h1> 
            <button onClick={onClick}>Click me</button>
        </div>
    );

}

export default App;