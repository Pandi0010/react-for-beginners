//통과
import { useState, useEffect } from "react";

function App() {

    const [toDo, setTodo] = useState();
    const [toDos, setTodos] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return
        };

    setTodos((currentArray)=> [toDo, ...currentArray]);
    toDo("");
    };

    return(

        <div>
            <h1></h1>
            <form onSubmit={onSubmit}>
                <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="TEXT"
                 />
                <button>Add To do</button>
            </form>
            <ul>
                {
                    toDos.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}
export default App;






/*Test_1
import { useState, useEffect } from "react";

function App() {
    const [toDo,setToDo] = useState();
    const [toDos,setToDos] = useState("");
    const onClick = (event) => setToDo(event.target.value); 
    const onSubmit = (event) => {
        event.target.value;
    }

  return(
    <div>
        <h1> TO DO LIST</h1>
        <form onSubmit={onSubmit}>
            <input
            onClick={onClick}
            value={toDo}
            type="text"
            placeholder="Text"
            />
            <button onClick={onClick} >Add To do</button>
        </form>
    </div>
  );

}
export default App;
*/


/*Test_2
import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState();
    const [toDos, setToDos] = useState();
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.target.value

    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    toDo("");

    return(

        <div>
            <h1>To Do List</h1>
            <form onSubmit={onsubmit}>
            <input
            onChange={onChange}
            value={toDo}
            type="text" 
            placeholder="TEXT"
            />
            <button>Add To do</button>
            </form>

            <hr />
            <ul>
                <li>
                    toDos.map(item, index) =>(
                        index {}
                    )
                </li>
            </ul>
        </div>
    );
}
export default App;
*/


/*Test_3
import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState();
    const [toDos, setToDos] = useState();
    const onChange = (event) => setToDos(event.target.value);
    const onSubmit = (event) =>{
        event.target.value;
        if (toDo === "") {
            return
        }
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    toDo("");

    return(

        <div>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="TEXT"
                 />
                <button>Add To do</button>
            </form>

            <hr />
            <ul>
                {
                    toDos.map((item, index) => 
                    {<li key={index}>item</li>}
                    )
                    
                }
            </ul>
        </div>
    );
}
export default App;

*/ 