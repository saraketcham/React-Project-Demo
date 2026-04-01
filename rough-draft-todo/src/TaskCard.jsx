function TaskCard({task}){


    return (
        <div className="m-6 max-w-60 border p-3 ">
            <div>
            <h1 className="inline-block px-3 my-3 text-xl font-bold border shadow-md  hover:shadow-xl " > {task}</h1>
            </div>
      
        </div>
    )
}

export default TaskCard;