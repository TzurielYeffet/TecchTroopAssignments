import React, {
  Component
} from 'react';
import {
  observer
} from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)

  }
  editItem = (e) => {
    let newLocation  = prompt("Add new Location")

    this.props.store.editItem(this.props.item.name,newLocation)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }

  render() {
    let item = this.props.item
    
    return ( <
      div className = {
        item.completed ? "crossed" : null
      } >
      <
      input type = "checkbox"
      value = {item.name}
      onClick={this.checkItem}
      />  
      {item.name}, {item.location}
      <button onClick={this.editItem}>Edit location</button>
      <button onClick={this.deleteItem} style={{color:"red"}}>Delete</button>
      </div>)
    }
  }

  export default observer(Item)