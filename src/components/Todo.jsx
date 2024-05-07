const Todo = ({task, isDone}) => 
    
    {

   
            if(isDone){
                return <li>Finished: {task}</li>
            }
                return <li>Keep working on: {task}</li>
        
};

export default Todo;