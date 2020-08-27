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
                </div>
            )};
};
module.exports = Index