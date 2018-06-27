import React from 'react';
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task_list: [
                {title: 'Task1'},
                {title: 'Task2'},
                {title: 'Task3'},
            ]
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(){
        this.state.task_list.unshift({
            title: this.refs.newTask.value
        });

        this.setState({
            task_list: this.state.task_list
        });

        this.refs.newTask.value='';
    }

    deleteTask(i){
        this.state.task_list.splice(i, 1);

        this.setState({
            task_list: this.state.task_list
        });
    }

    displayTaskList(){
        return this.state.task_list.map((task_list, i) => {
            return <li key={i}>{task_list.title}
                {this.displayTaskListDeleteButton(i)}
                </li>
        })
    }

    displayTaskListDeleteButton(i){
        return <input type="button" value='削除' onClick={() => this.deleteTask(i)} />
    }

    displayTaskForm(){
        return <input type="text" ref="newTask" />
    }

    displayTaskFormButton(){
        return <input type="button" value="追加" onClick={this.addTask}/>
    }

    render(){
        return(
            <div className="ToDo-List">
                <h1>ToDo-List</h1>
                {this.displayTaskForm()}
                {this.displayTaskFormButton()}
                <ul>
                    {this.displayTaskList()}
                </ul>
            </div>
        )
    }
}

export default App;