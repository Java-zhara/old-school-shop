import React from 'react'
import Categories from './components/Categories'

import {Footer} from './components/Footer'
import {Header} from './components/Header'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'farniture.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chair',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Стол',
          img: 'farniture.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'table',
          price: '149.00',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'farniture.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'sofa',
          price: '549.99',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'farniture.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'light',
          price: '25.00',
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'farniture.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chair',
          price: '49.99',
        },
      ],
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  chooseCategory(category) {
    console.log('category :', category)
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray)
      this.setState({
        orders: [...this.state.orders, item],
      })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter((el) => el.id !== id)})
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }
}

export default App
