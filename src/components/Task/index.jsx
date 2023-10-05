// import { useState } from 'react';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';



const Task = (props) => {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={ e => {
                props.check_toggle(props.main_task.key);
            }}>
                {(props.main_task.checked == true) ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p>{props.main_task.title}</p>
            <button className={styles.deleteButton} onClick={
                e => {
                    props.remove_task(props.main_task.key);
                }
            }>
                <TbTrash size={20} />
            </button>
        </div>
        
    )
}

export default Task;