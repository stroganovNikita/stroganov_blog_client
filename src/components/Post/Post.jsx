import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./post.module.css";
import Nav from "../partials/Nav/Nav";
import { fetchPosts } from "../javascript/posts";
import Icon from '@mdi/react';
import { mdiArrowLeftCircle } from '@mdi/js';

function Post() {
  const [posts, setPosts] = useState(null);
  const post = useParams();
  useEffect(() => {
    const promisePosts = fetchPosts();
    promisePosts
      .then((promise) => promise.json())
      .then((promise) => setPosts(promise));
  }, []);
  return (
    <>
      <Nav />
      <main className={classes.mainPost}>
        {posts && (
          <div className={classes.postDiv}>
            <img src="https://cyfgfocmixveitalwndg.supabase.co/storage/v1/object/public/blog//welcome4.jpg" />
            <h2>{posts.posts[post.postId - 1].title}</h2>
            <p>{posts.posts[post.postId - 1].text}</p>
          </div>
        )}
        <hr />
        <form className={classes.formPostComment}>
          <label htmlFor="comment" className={classes.commentLabel}>Comment:</label>
          <textarea maxLength={1000}></textarea>
        </form>
        <Icon path={mdiArrowLeftCircle} size={4} className={classes.arrowBack}/>
      </main>
    </>
  );
}

export default Post;
