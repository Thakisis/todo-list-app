
export function TaskInput({ placeholder = "Input your task here ..", taskText, setter }) {

    const changeHandler = (e) => setter((task) => ({ ...task, taskText: e.target.value }))
    return (
        <div className="modal__inputContainer">
            <label htmlFor='task' className="modal__label" >Task</label>
            <input
                id='task'
                type="text"
                placeholder={placeholder}
                onChange={changeHandler}
                value={taskText}
                className="modal__input"

            />
        </div>
    )
}

