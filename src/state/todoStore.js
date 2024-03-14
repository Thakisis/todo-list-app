import { create } from 'zustand'
import { modal, modalList, priorities } from './Constants'
export const useTodoStore = create((set, get) => ({
    todoList: [],
    modal: { isOpen: modal.closed, modalOpen: modalList.none, idTask: null },
    modalData: { taskid: null, taskText: "", priority: priorities.notSet },
    Actions: {
        openModal(newModal, idTask = null) {

            set({ modal: { isOpen: modal.open, modalOpen: newModal, idTask } })
        },
        closeModal() {

            set({ modal: { isOpen: modal.closed, modalOpen: modalList.none } })

        },
        AddTask({ taskText, priority }) {
            const nextId = get().todoList.reduce((lastTask, task) => task.taskid < lastTask ? lastTask : task.taskid + 1, 0)


            set(({ todoList }) => ({ todoList: [...todoList, { taskid: nextId, taskText, priority, progress: "To Do" }] }))

        },
        getDataTask(id) {
            return get().todoList.find(({ taskid }) => taskid === id)
        },
        deleteTask(taskId) {
            const newTodolist = get().todoList.filter(todo => todo.taskid !== taskId)
            set({ todoList: newTodolist })
        },
        saveTask({ taskid, ...updateFields }) {
            const newTodolist = get().todoList.map(todo => todo.taskid !== taskid ? todo : { ...todo, ...updateFields })
            set({ todoList: newTodolist })
        }

    }
}))

