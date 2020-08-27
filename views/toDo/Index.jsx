const React=require('react')

class Index extends React.Component{
    render(){
        const {toDo}=this.props
    //     const displayNone=()=>{
    //     if (toDo.length > 0){
    //         style={display: 'none'}
    //     } else { style={display:'block'}
    //     }
    // }

    //     displayNone()
        return(
                <div>
                    <h1>To Do List</h1>
                    <h3 id="none">There are no ToDos yet!</h3>
                    <if condition= {toDo.length > 0}>
                    
                    </if>
                    <hr></hr>
                    <div>
                        
                        <form action="/todo" method="POST">
                        Task: <input type="text" name="task"/><br/>
                        Is Done? <input type="checkbox" name="isDone" defaultValue='false'/><br/>
                        <input type='submit' name='' value="Add Task"/>
                        </form>
                        <ul>
                            {toDo.map((toDo, i)=>{
                                return(
                                    <li key={toDo.task}>
                                        <h4>{toDo.task}</h4>
                                        {toDo.isDone ? 'Not Done' :''}
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