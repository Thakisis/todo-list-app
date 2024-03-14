
export function TaskPriority({ isActive = false, priority, name, setter }) {
    const changePriority = () => setter((task) => ({ ...task, priority }))
    const className = `${name}-select priority ${isActive ? `${name}-active` : ""}`
    return (
        <li
            key={priority}
            onClick={changePriority}
            className={className}
        >
            {name}
        </li>
    )
}


