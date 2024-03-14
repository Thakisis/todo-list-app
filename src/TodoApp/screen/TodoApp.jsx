import { useTodoStore } from "src/state"
import { CustomButton } from "../../core/share/CustomButton/CustomButton"
import { TodoTask } from "../components/TodoTask"

import { TodoAddModal, TodoEditModal } from "src/TodoAddModal"
import "../styles/styles.css"
import { modalList } from "src/state/Constants"
import { DeleteItem } from "src/TodoDeleteModal"

export const TodoApp = () => {
  const modalState = useTodoStore(state => state.modal)
  const openModal = useTodoStore((state) => state.Actions.openModal)
  const Modals = [NoModal, TodoAddModal, DeleteItem, TodoEditModal]
  const ModalComponent = Modals[modalState.modalOpen]
  const props = modalState.modal === modalList.add ? {} : { taskid: modalState.idTask }
  const modal = <ModalComponent {...props}></ModalComponent>
  return (
    <>
      {modal}
      <div className="container">
        <div className="header">
          <h1 className="header__title">Task List</h1>
          <CustomButton
            className="button"
            onClick={() => openModal(modalList.add)}
            value="Add Task"
          />
        </div>
        <div className="task-container">
          <TodoTask />
        </div>

        {/* <CustomButton
            value="Add Task"
            classNameName="todo-app-add-button"
            onClick={() => setOpenModal(true)}
            style={{backgroundColor: '#646ff0', color: 'white'}}
          /> */}

      </div>

    </>
  )
}


function NoModal() {
  return <></>
}
