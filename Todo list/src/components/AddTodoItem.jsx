// Child component aka form to add todo item

export default function AddTodoItem (){
    return (
        <form className="add__task">
            <input type="text" placeholder="What you want to do....?" className="add__task--input"/>
            <button type="submit" className="add__task--btn">Add Task</button>
        </form>
    )
}

