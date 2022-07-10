import {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  let summ = 0
  props.orders.forEach((el) => (summ += Number.parseFloat(el.price)))
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="summ">Сумма: {new Intl.NumberFormat().format(summ)}$</p>
    </div>
  )
}

const showNothing = () => (
  <div className="empty">
    <h2>Товары отсутствуют</h2>
  </div>
)

export const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className="logo">House Staf</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart-button ${cartOpen && 'active'}`}
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
