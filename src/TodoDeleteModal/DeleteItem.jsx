import { Button, Box, Modal, Typography } from "@mui/material"
import { modalList } from "src/state/Constants"

import { useTodoStore } from "src/state"


export const DeleteItem = ({ id }) => {

  const { closeModal, deleteTask } = useTodoStore((state) => state.Actions)
  const modalState = useTodoStore((state) => state.modal)
  const idTask = useTodoStore(state => state.modal.idTask)

  const onHandleDelete = () => {
    deleteTask(idTask)
    closeModal()
  }

  return (
    <>
      <Modal
        open={modalState.isOpen && modalState.modalOpen === modalList.delete}
        className="modal-container"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          autoComplete="off"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            backgroundColor: "white",
            padding: "50px",
          }}
        >
          <Typography> Are you sure you want to delete this task?</Typography>
          <Box>
            <Button onClick={onHandleDelete}>Delete</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
