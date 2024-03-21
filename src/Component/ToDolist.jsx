import { useState } from "react";



export default function ToDolist() {
    const [ToDo, setToDo] = useState("")
    const [AddToDo, setAddToDo] = useState("");
    const [EndToDo, setEndToDo] = useState("");

    const handleToDo = () => {

        if (ToDo.trim()==="") 
        return;  setToDo:{ ToDo, AddToDo};
        setAddToDo:{""};
    };


    return (
        <>
            <form action="">
                
            <div className="Container">
                <h1>MY TODO LIST</h1>


                <input type="text" defaultValue={AddToDo} onchangeAddToDo={() => setAddToDo} placeholder="Enter a task" /> <br />

                <button onClick={AddToDo}> Add Task</button>
                <button onClick={() => this.ToDo} type="button"> Remove Task</button>

                <ul v>
                    <li>ToDolist one</li>
                    <li>ToDolist one</li>
                    <li>ToDolist one</li>
                    <li>ToDolist one</li>
                    <li>ToDolist one</li>
                </ul>


            </div>
 
            </form>       
            
        </>

    );
}