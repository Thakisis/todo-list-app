import { priorities } from "src/state/Constants"

import { useState } from "react"


import "./styles.css"
import "src/core/share/ModalStyles/styles.css"
import { CustomModal } from "../core/share/CustomModal/CustomModal"
import { CustomButton } from "../core/share/CustomButton/CustomButton"
import { TaskInput } from "./TaskInput"
import { TaskPriority } from "./TaskPriority"
import { useTodoStore } from 'src/state'

export const TodoEditModal = ({ taskid }) => {
  const { closeModal, saveTask, getDataTask } = useTodoStore((state) => state.Actions)
  const { progress, ...originalData } = getDataTask(taskid)
  console.log(originalData)
  const [newTask, setNewTask] = useState({ ...originalData })


  const canAdd = newTask.taskText.length > 3 && newTask.priority !== 0

  const submitTask = (e) => {
    e.preventDefault()
    saveTask({ taskid, ...newTask })
    closeModal()
  }


  const priorityButtons = Object.entries(priorities).map(([keyPrior, priority]) => <TaskPriority key={priority} priority={priority} isActive={priority === newTask.priority} name={keyPrior} setter={setNewTask} />)
  return (
    <>
      <CustomModal
        title="edit task"
        viewHeader={true}
        clickAction={closeModal}
      >
        <form action="">
          <TaskInput setter={setNewTask} taskText={newTask.taskText} ></TaskInput>
          <div className="modal__priorityContainer">
            <span className="modal__priority">Priority</span>
            <ul className="priority-list">
              {priorityButtons}
            </ul>
          </div>
          <div className="add-item-button-container">
            <CustomButton
              onClick={submitTask}
              className={`button confirmation-button ${!canAdd && 'button-disabled'} `}
              value='Save'
              disabled={!canAdd}

            />


          </div>
        </form>
      </CustomModal>
    </>
  )
}
