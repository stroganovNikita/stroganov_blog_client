import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiCommentMultiple } from "@mdi/js";
import classes from "./app.module.css";
import { fetchPosts } from "../javascript/posts.js";
import brain from "../../assets/brain.png";
import Nav from "../partials/Nav/Nav.jsx";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const promisePosts = fetchPosts();
    promisePosts
      .then((promise) => promise.json())
      .then((promise) => setPosts(promise));
  }, []);
  console.log(posts);
  return (
    <>
      <Nav />
      <main className={classes.mainArticles}>
        <h2 className={classes.articlesHeader}>
          Hello to my blog. Feel you at home
        </h2>
        <div className={classes.postsDiv}>
          {posts &&
            posts.posts.map((post, index) => {
              return (
                <div key={index} className={classes.postDiv}>
                  <img src="https://cyfgfocmixveitalwndg.supabase.co/storage/v1/object/public/blog//welcome.jpg" />
                  <div className={classes.postHeader}>
                    <h3>{post.title}</h3>
                    <div className={classes.postMessageDiv}>
                      <Icon path={mdiCommentMultiple} size={1} />
                      <p>{post.comments.length}</p>
                    </div>
                  </div>
                  <p className={classes.postText}>
                  &nbsp;&nbsp;community for aspiring web developers! This is the first post on this blog since hosting it on the web. As you know, I'm just an aspiring web developer myself, so thiscommunity for aspiring web developers! This is the first post on this blog since hosting it on the web. As you know, I'm just an aspiring web developer myself, so thiscommunity for aspiring web developers! This is the first post on this blog since hosting it on the web. As you know, I'm just an aspiring web developer myself, so this
                  </p>
                </div>
              );
            })}
        </div>
        <h3 className={classes.textBeforeBrain}>Posts here...</h3>
        <img src={brain} className={classes.brain} />
      </main>
    </>
  );
}

export default App;
