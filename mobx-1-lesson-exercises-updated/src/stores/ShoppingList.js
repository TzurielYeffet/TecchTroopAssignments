/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this,{
            list:observable,
            length:observable,
            checkItem:action,
            addItem:action,
            editItem:action,
            deleteItem:action

        })

    }
    checkItem = (name) => {
        let item = this.list.find(item=> item.name === name);
        item.completed = !item.completed
    }
    addItem = (name) => {
       this.list.push(new Item(name))
       this.length = this.list.length
    }
    editItem = (name,newLocation) => {
        let item = this.list.find(item=> item.name === name)
        item.location = newLocation
    }
    deleteItem = (name) => {
       this.list.replace( this.list.filter(item => item.name !==name))
    }
}

