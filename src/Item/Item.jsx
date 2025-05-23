import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <p>Stock: {stock}</p>
      <p>ID: {id}</p>
      <Link to={`/item/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  )
}

export default Item
