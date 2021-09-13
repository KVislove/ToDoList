import React, { useState } from 'react'
import ToDoList from './Components/ToDoList'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

  const [inputList, setInputList] = useState('')
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    if (inputList === '')
      return alert('Enter item first')
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList('')
  }

  const deleteItem = (id) => {
    return (
      setItems((oldItems) => {
        return (
          oldItems.filter((arrElem, index) => {
            return index !== id
          })
        )
      })
    )
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <div className='head_input'>
            <h1> ToDo List </h1>
            <br />
            <input type='text' placeholder='Add an item' onChange={itemEvent} value={inputList} />
            <Tooltip title='Add'>
              <Button className='add' onClick={listOfItems}><AddIcon /></Button>
            </Tooltip>
          </div>
          <ul>
            {
              Items.map((item, index) => {
                return (
                  <ToDoList text={item} key={index} id={index} onSelect={deleteItem} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
