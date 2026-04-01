import Header from "../Header";
import CreateForm from "../CreateForm";
import BasicText from "../BasicText";
import TaskCard from "../TaskCard";
import TextWithHeader from "../TextWithHeader";

function TaskCreate(){

    return (
        <>
           <Header title="Add a task" />
            <CreateForm />
            <TextWithHeader mySubtitle="Or" myText="Revisit an old task" />
            <BasicText myText="click here to filter by category 'BUTTON'" />
        <div className="grid grid-cols-4 gap-4">
            <TaskCard task="do the laundry"></TaskCard>
            <TaskCard task="take out the trash"></TaskCard>
            <TaskCard task="do the laundry"></TaskCard>
            <TaskCard task="take out the trash"></TaskCard>
      </div>
   


      
      </>
    )
};

export default TaskCreate;