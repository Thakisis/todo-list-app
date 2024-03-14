
import "../styles/styles.css"
import { DeleteItem } from "../../TodoDeleteModal"
import ProgressEmptyIcon from "../../core/Icons/ProgressEmptyIcon"
import { InProgressIcon } from "../../core/Icons/InProgressIcon"
import { FinishedProgressIcon } from "../../core/Icons/FinishedProgressIcon"
import { UpdateIcon } from "../../core/Icons/UpdateIcon"
import { DeleteIcon } from "../../core/Icons/DeleteIcon"
import { useTodoStore } from "src/state"
import { modalList } from "src/state/Constants"

export const TodoCard = ({ taskid, taskText, priority, progress }) => {

  const priorityText = ["", "Low", "Medium", "High"]
  const openModal = useTodoStore((state) => state.Actions.openModal)
  const openDelete = () => {
    openModal(modalList.delete, taskid)
  }
  const openEdit = () => {
    openModal(modalList.update, taskid)
  }
  return (
    <>


      <DeleteItem id={taskid} />

      <div className="task">
        <div className="information column">
          <span className="information__title">Task</span>
          <span className="information__description">{taskText}</span>
        </div>

        <div className="priority column">
          <span className="priority__title">Priority</span>
          <span className={`priority__description ${priorityText[priority].toLowerCase()}`}>{priorityText[priority]}</span>
        </div>

        <div className="status column">
          <button
            className="status__button"
          //onClick={() => onProgressButton(progress)}
          >
            {progress}
          </button>
        </div>
        <div className="progress column">
          {

            progress === "To Do" ? (
              <ProgressEmptyIcon />
            ) : progress === "In Progress" ? (
              <InProgressIcon />
            ) : (
              <FinishedProgressIcon />
            )
          }
        </div>
        <div className="action column">
          <div className="action__update" onClick={openEdit}>
            <UpdateIcon />

          </div>
          <div className="action__delete" onClick={openDelete}>
            <DeleteIcon />
          </div>

        </div>
      </div>
    </>
  )
}
