import React from 'react';
import styles from './styles/post.module.scss';

type Props = {};

const Post = ({ title, description, img }) => {
  return (
    <div className={styles.post}>
      <div className={styles.wrapper__post}>
        <h2 className={styles.post__title}>{title}</h2>
        <div className={styles.post__description}>{description}</div>
        <img className={styles.post__img} src={img} alt="post" />
      </div>
    </div>
  );
};

export default Post;
