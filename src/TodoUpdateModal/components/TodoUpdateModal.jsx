export const TodoUpdateModal = () => {
  return <div></div>
}





/*

import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { useAddModal } from "../../TodoAddModal/hooks/useAddModal";
import { CustomModal } from "../../core/share/CustomModal/CustomModal";
import { CustomButton } from "../../core/share/CustomButton/CustomButton";


import "../../core/share/ModalStyles/styles.css"
import { useUpdateModal } from "../hooks/useUpdateModal";

export const TodoUpdateModal = () => {

  const {
    openUpdateModal,
    setOpenUpdateModal,
    updateId,
    updateInput: contextUpdateInput,
    updatePriority: contextUpdatePriority,
  } = useContext(TodoContext);

  const { error } = useAddModal();
  const { selectPriority, 
    handleItemUpdate,
     handlePriorityUpdate, 
     handleUpdateSubmit,
     updateInputLocal, 
     setUpdateInputLocal,
     updatePriorityLocal, 
     setUpdatePriorityLocal 
    } = useUpdateModal()


  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  


 useEffect(() => {
   setUpdateInputLocal(contextUpdateInput);
   setUpdatePriorityLocal(contextUpdatePriority);
 }, [openUpdateModal, contextUpdateInput, contextUpdatePriority]);


  return (
    <>
      <CustomModal 
         title="Edit a task"
         viewHeader={true}
        clickAction={() => setOpenUpdateModal(false)}
      >
        <form action="">
        <div className="modal__inputContainer">
            <label for='updateTask' className="modal__label" >Task</label>
            <input
              id='updateTask'
              type="text"
              placeholder="Type your task here..."
              onChange={handleItemUpdate}
              value={updateInputLocal}
              error={error.error}
              helperText={error.message}
              className="modal__input"
              ref={inputRef}
        
            />
          </div>
    <div className="modal__priorityContainer">
    <span className="modal__priority">Priority</span>

    <ul className="priority-list" >
      {selectPriority.map((priorityItem, index) => {
        return (
          <li
            key={index}
            onClick={() => handlePriorityUpdate(priorityItem)}
           className={
            `${priorityItem}-select priority ${updatePriorityLocal === priorityItem ? `${priorityItem}-active` : ""} `
          
          }
          >
            {priorityItem}
          </li>
        );
      })}
    </ul>
  </div>
  <div className="add-item-button-container">
      <CustomButton
               onClick={() =>handleUpdateSubmit(updateId, updateInputLocal, updatePriorityLocal)}
              value= 'Edit'
              className='button confirmation-button'
      />
  </div>
</form>
      
      </CustomModal>
    </>
  );
};
*/
