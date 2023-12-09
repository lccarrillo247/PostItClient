import Post from '../Post/Post';
import styles from './Board.module.css';

function Board({posts}) {
    return (
        <div>
            <h1>AAAAAAAAA</h1>
        <div className={styles.PostContainer}>
        {posts.map((post) => (
            <Post
            text={post.text}
            color={post.color}
            />
        ))}
        </div>
        </div>
    );
}

export default Board;