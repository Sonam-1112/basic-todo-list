import React,{useState} from 'react';

const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        addTodo(title,desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="todo-title" onChange={(e)=>{setTitle(e.target.value)}} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} className="form-control" id="todo-desc" onChange={(e)=>{setDesc(e.target.value)}} required/>
                </div>
                <button type="submit" className="btn btn-sm btn-secondary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
