import styles from './tasks.module.css';
import Task from '../Task/index';

const Tasks = (props) => {
    let tasksQuantity = props.tasks_arr.length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <a onClick={
                        e=> {
                            if(props.old_state.length !== 0) {
                                props.get_all();
                                tasksQuantity = props.tasks_arr.length;
                            }
                        }
                    } className={styles.completed_task_link}><p>Created tasks</p></a>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <a onClick={
                        e=> {
                            if(props.old_state.length != 0 || props.tasks_arr.length != 0) {
                                props.setold_state(props.tasks_arr);
                                props.getcompleted();
                                tasksQuantity = props.old_state.length;
                            }
                        }
                    } className={styles.completed_task_link}><p className={styles.textPurple}>Completed tasks</p></a>
                    <span>{props.count} of {tasksQuantity}</span>
                </div>
            </header>

                <div className={styles.list}>
                    {
                        props.tasks_arr.map(task => (
                            <Task check_toggle={props.check_toggle} main_task={task} set_status={props.set_status} remove_task={props.remove_task} key={task.key} />
                        ))
                    }
                </div>
        </section>
    )
}

export default Tasks;