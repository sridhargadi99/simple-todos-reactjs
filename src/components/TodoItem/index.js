// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteList} = props
  const {title, id} = userDetails

  const deleteButton = () => deleteList(id)

  return (
    <li className="list-style">
      <p className="paragraph-style">{title}</p>
      <div className="button-container">
        <button className="button-style" type="button" onClick={deleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
