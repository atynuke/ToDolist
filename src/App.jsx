import React from 'react';
import { Component } from 'react';
import ToDolist from './Component/ToDolist';
import './App.css'



class App extends Component {
  render() {

    return (
      <>
        <div className='ToDoApp' >
          <ToDolist></ToDolist>
        </div>

        
      </>
    );
  }
}


export default App




// class App { 
//   // const [ToDo, setToDo] : Component;

//   render (){
//     return (
//       <>
//         {/* <div>
//           Todolist
//         </div> */}
//         <h1>Vite + React</h1>
//         <div className="card">
//           <button onClick={() => setToDo((ToDo) => ToDo + 1)}>
//             count is {ToDo}
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </>
//     )
//   }

// }

// export default App
