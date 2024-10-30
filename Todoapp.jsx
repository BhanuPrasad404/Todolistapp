import React, { useState } from 'react';

function Todolistapp() {

    const [tasks, setTasks] = useState(["having idea", "writting code "])
    const [newtask, setNewtask] = useState("")

    function handlechangeinput(event) {
        setNewtask(event.target.value)

    }

    function handleadd() {
        if (newtask.trim() !== "") {

            setTasks(t => [...t, newtask]);
            setNewtask("");
        }
    }

    function handledel(index) {

        const del = tasks.filter((_, i) => i !== index)

        setTasks(del);

    }

    function handlemoveup(index) {
        if (index > 0) {

            const del = [...tasks];
            [del[index], del[index - 1]] =
                [del[index - 1], del[index]];

            setTasks(del);
        }
    }

    function handlemovedown(index) {

        if (index < tasks.length - 1) {
            const del = [...tasks];
            [del[index], del[index + 1]] =
                [del[index + 1], del[index]];
            setTasks(del);
        }

    }
    return (
        <> 
        <div className='container'>
            <h1>To do list items </h1>
            <div className='container-1'>

                <input className='enter-input' type="text" value={newtask} onChange={handlechangeinput} placeholder='Enter the task' />

                <button className='Add-button' onClick={handleadd}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='span-content'>{task}</span>
                        <button className='remove' onClick={() => handledel(index)}>Remove</button>
                        <button className='Move-button' onClick={() => handlemoveup(index)}>👆</button>
                        <button className='Move-button' onClick={() => handlemovedown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
        </>
    )
}
export default Todolistapp;
