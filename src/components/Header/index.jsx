import styles from './header.module.css';
import todologo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';



const Header = (props) => {
    const [title, setTitle] = useState("");

    return (
        <header className={styles.header}>
            <img src={todologo} />

            <form className={styles.newTaskForm} onSubmit={ e => {
                e.preventDefault();
                props.handle_create_task(title);
            }} >
                <input placeholder='Add a new task' onChange={e => (setTitle(e.target.value))} />
                <button>Create
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
};

export default Header;