import React from 'react'
import Items from './Items'

const items = ["Lavar la ropa", "Cocinar", "Hacer la tarea", "Estudiar", "Jugar jueguitos", "Jugar otros Jueguitos", "Mirar una peli", "Mirar otra peli", "Hacer las compras", "Bañar al perro"]

const Form = () => {
  return (
    <form action="#" method="post">
      <label>Item</label>
      <input type="text" id="item" name="item" />
      <button type="submit">Add</button>
    <Items items={items}/>
    </form>
  )
}

export default Form