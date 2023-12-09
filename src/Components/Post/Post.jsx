import styles from './Post.module.css';

function Post({text,color}) {

const colorClasses = {
    ye: styles.PostYe,
    gr: styles.PostGr,
    lb: styles.PostLb,
    db: styles.PostDb,
    pu: styles.PostPu,
    pi: styles.PostPi,
}

const cName = colorClasses[color]

    return (
        <div className= {cName}>
            <p>{text}</p>
        </div>
    );
}

export default Post;