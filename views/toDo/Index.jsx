const React=require('react')

class Index extends React.Component{
    render(){
        const {toDo}=this.props
        const displayNone=()=>{
        if (toDo.length > 0){
           return {span: null}
        }
    }

        displayNone()
        return(
                <div>
                    <h1>To Do List</h1>
                    <h3>
                        <span className='display'>There are no ToDos yet!</span>
                        {/* {toDo.length > 0 ? span: null} */}
                        
                        </h3>
                    {///My attempt at JSX Control flow from React Docs...I couldn't figure it out////
                                                            }
                    <if condition= {toDo.length > 0}>
                        < span span={null} />
                    </if>
                    <hr></hr>
                    <div>
                        
                        <form action="/todo" method="POST">
                        Task: <input type="text" name="task"/><br/>
                        Is Done? <input type="checkbox" name="isDone" defaultValue=''/><br/>
                        <input type='submit' name='' value="Add Task"/>
                        </form>
                        <ul>
                            {toDo.map((toDo, i)=>{
                                return(
                                    <li key={toDo.task}>
                                        <h4>{toDo.task}</h4>
                                        {toDo.isDone ? 'complete' :'Not complete'}
                                        <form action={`todo/${toDo._id}?_method=DELETE`} method="POST">
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