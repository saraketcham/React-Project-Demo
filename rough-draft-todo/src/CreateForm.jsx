function CreateForm(){
    return (
        <div>
        <div className="flex items-center justify-center">
            <div className="w-80 border p-3 m-6 rounded">

            <form className="text-left" action="">
            <label htmlFor="mytask">Task:  </label>
            <input type="text" id="mytask" name="mytask" className="border border-gray-400 rounded px-2 py-1 bg-white" />
            <br/>
            <label htmlFor="isurgent?">Urgent? </label>
            <input type="checkbox" name="urgent" id="isurgent?" />
            <br/>
            <label htmlFor="isimportant?">Urgent? </label>
            <input type="checkbox" name="important" id="isimportant?" />
            <input type="submit" />
            </form>
            </div>
        </div>
        </div>
)};

export default CreateForm;