import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userList: initialTodosList}

  deleteList = value => {
    const {userList} = this.state
    const finalList = userList.filter(item => item.id !== value)
    this.setState({userList: finalList})
  }

  render() {
    const {userList} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading-style">Simple Todos</h1>
          <ul className="list-container">
            {userList.map(eachList => (
              <TodoItem
                deleteList={this.deleteList}
                userDetails={eachList}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
