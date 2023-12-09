import { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar({createPost}) {



    const [newPost, setNewPost] = useState({
        text: "",
        color: "",
      })
    
    const handleTextChange = (e) => {
        setNewPost({
            ...newPost,
            text: e.target.value
        })
    }
    
    console.log(newPost);

    return (
        <div className={styles.sideBarContainer}>
            <h1>¡Crea tu Post It!</h1>
            <label>Texto</label>
            <input
            type='text'
            name='text'
            value={newPost.text}
            onChange={handleTextChange}
            />
            <p>Color</p>
            <button className={styles.yebotton} onClick={()=>{setNewPost({...newPost, color: 'ye'})}}></button>
            <button className={styles.grbotton} onClick={()=>{setNewPost({...newPost, color: 'gr'})}}></button>
            <button className={styles.lbbotton} onClick={()=>{setNewPost({...newPost, color: 'lb'})}}></button>
            <button className={styles.dbbotton} onClick={()=>{setNewPost({...newPost, color: 'db'})}}></button>
            <button className={styles.pubotton} onClick={()=>{setNewPost({...newPost, color: 'pu'})}}></button>
            <button className={styles.pibotton} onClick={()=>{setNewPost({...newPost, color: 'pi'})}}></button>
            <button onClick={()=> {createPost(newPost)}}>Crear</button>
        </div>
    );
}

export default Sidebar;