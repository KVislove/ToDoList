import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = (props) => {

    return (
        <>
            <div className='list_style'>
                <Tooltip title='Delete'>
                    <Button className='remove' onClick={() => { return (props.onSelect(props.id)) }}><DeleteIcon /></Button>
                </Tooltip>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList