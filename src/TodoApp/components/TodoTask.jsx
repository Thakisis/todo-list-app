import { TodoCard } from "./TodoCard"
import { useTodoStore } from "src/state/todoStore"
export const TodoTask = () => {
  const todoList = useTodoStore((state) => state.todoList)

  return (
    <>

      {todoList.map((task) => {
        return (


          <TodoCard {...task} key={task.taskid} />
        )
      })}

    </>
  )
}
