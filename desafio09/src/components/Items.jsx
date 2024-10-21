import React from 'react'

const Items = ({items}) => {
  return (
    <ul>
{
  items.map((item, index) => (
   <li key={index}>
    <input type="checkbox" id={item} name={item} value={item} />
    <label htmlFor={item}>{item}</label>
   </li>
  ))
} 
    </ul>
  )
}

export default Items