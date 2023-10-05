import React, { useEffect, useState } from 'react';
import todologo from './assets/Logo.svg';
import Header from './components/Header/index';
import Tasks from './components/Tasks';
import Task from './components/Task/index';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const App = () => {
    const [completed, setCompleted] = useState("");
    const [tasks, setTasks] = useState([]); // will hold the tasks list
    const [count, setCount] = useState(0);
    const [old_state, setold_state] = useState([]);

    function add_to_tasks_list(title) {
        setCompleted(false);
        setTasks([...tasks, {
            title: title,
            checked: completed,
            key: Math.random()
        }]);
    }

    function remove_task(key_passed) {
        setTasks(tasks.filter(
            curr_task => (
                (curr_task.key != +key_passed)
            )
        ));
    }

    function check_toggle(task_id) {
        const new_task = tasks.map( task => {
            if (task.key === task_id) {
                task.checked = !task.checked;
            }
            return task;
        });
        setTasks(new_task);
    }

    function getcompleted() {
        setTasks(tasks.filter(task => task.checked == true))
    }

    function get_all() {
        setTasks(old_state);
    }

    useEffect(()=>{
        setCount(0);
        let tmp = tasks.map(task => {
            if(task.checked == true) {
                setCount(count+1);
            }
            return task;
        });
    }, [tasks])



    return (
        <div> 
            <Header handle_create_task={add_to_tasks_list} />
            <Tasks old_state={old_state} get_all={get_all} getcompleted={getcompleted} setold_state={setold_state} count={count} check_toggle={check_toggle} set_status={setCompleted} tasks_arr={tasks} remove_task={remove_task} />
        </div>
    );
};
export default App;