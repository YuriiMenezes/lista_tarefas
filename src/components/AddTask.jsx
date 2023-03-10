import React, { useState } from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = () => {

    const [inputData, setInputData] = useState('')

    const HandleInputChange = (e) => {
        setInputData(e.target.value);
    };

    return(

    <div className='add-task-container'>
        
        <input 
        onChange={HandleInputChange}
        value={inputData} 
        className='add-task-input' 
        type="text" />;
        
        <div className="add-task-button-container">

            <Button>Adicionar</Button>

        </div>
        
        
    </div>

    );
     
};
 
export default AddTask;