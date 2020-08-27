const React=require('react')

class Index extends React.Component{
    render(){
        const {toDos}=this.props

        return(
                <div>
                    <h1>To Do List</h1>
                    <h3>
                        { toDos.length > 0 
                            ? "" 
                            : <span className='display'>There are no ToDos yet!</span> 
                        }
                    </h3>
                    <hr></hr>
                    <div>
                        <form action="/todos" method="POST">
                            Task: <input type="text" name="task"/><br/>
                            Is Done? <input type="checkbox" name="isDone" defaultValue=''/><br/>
                            <input type='submit' name='' value="Add Task"/>
                        </form>
                        <ul>
                            {toDos.map((toDo, i)=>{
                                return(
                                    <li key={toDo.task}>
                                        <h4>{toDo.task}</h4>
                                        {toDo.isDone ? 'complete' :'Not complete'}
                                        <form action={`todos/${toDo._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="delete"/>
                                        </form>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            )};
};
module.exports = Index