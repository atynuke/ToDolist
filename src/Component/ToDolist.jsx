import { Component, useState } from "react";
import './ToDolist.css'


export default function ToDolist() {
    let [ToDo, setToDo] = useState([])
    let [inputText, changeText] = useState([])
   


    function AddToDo() {

        // To show the Length
        if (inputText.length > 0) {


            let cc = [...ToDo, inputText]
            setToDo(cc
            );

            // To Clear every Input that's written
            changeText("");
        }
        console.log(ToDo);
    }

    // To Change Task
    function nameChangeHandler(text) {
        changeText(
            text
        )
    }

    // To Display the InputText
    let components = [];

    ToDo.forEach((value)=>{
        components.push(<h1>{value}</h1>)
    })

    return (
        <>

            <div className="Container">
                <h1>MY TODO LIST</h1>
                <input type="text" value={inputText} onChange={() => nameChangeHandler(event.target.value)} placeholder="Enter a task" /> <br />

                <button onClick={AddToDo} > Add Task</button>

                {components}


            </div>


        </>

    );
}