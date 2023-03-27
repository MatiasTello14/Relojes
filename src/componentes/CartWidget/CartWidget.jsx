import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png";
  return (
    <div>
      <img className='Carrito' src={imagenCarrito} alt="Carrito de compra"/>
      <strong>2</strong>
    </div>
  )
}

export default CartWidget
