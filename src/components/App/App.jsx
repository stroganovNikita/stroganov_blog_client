import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiCommentMultiple, mdiCalendarClock, mdiLoading } from "@mdi/js";
import classes from "./app.module.css";
import { fetchPosts } from "../javascript/posts.js";
import { Link } from "react-router-dom";
import me from "../../assets/me.png";
import Nav from "../partials/Nav/Nav.jsx";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    try {
    const promisePosts = fetchPosts();
    promisePosts
      .then((promise) => promise.json())
      .then((promise) => setPosts(promise));
    } catch {
      console.log('failed fetch')
    }
  }, []);

  return (
    <>
      <Nav />
      <main className={classes.mainArticles}>
        <Welcome />
        <div className={classes.postsDiv}>
          {posts &&
            posts.posts.map((post, index) => {
              return (
                <Link to={`/posts/${post.id}`} key={index} viewTransition>
                  <div key={index} className={classes.postDiv}>
                    <img src="https://cyfgfocmixveitalwndg.supabase.co/storage/v1/object/public/blog//welcome4.jpg" />
                    <div className={classes.postHeader}>
                      <h3>{post.title}</h3>
                      <div className={classes.infoAboufPost}>
                        <div className={classes.postTimeDiv}>
                          <Icon path={mdiCalendarClock} size={1} />
                          <p>{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                        <div className={classes.postMessageDiv}>
                          <Icon path={mdiCommentMultiple} size={1} />
                          <p>{post.comments.length}</p>
                        </div>
                      </div>
                    </div>
                    <p className={classes.postText}>
                      &nbsp;&nbsp;community for aspiring web developers! This is
                      the first post on this blog since hosting it on the web.
                      As you know, I'm just an aspiring web developer myself, so
                      thiscommunity for aspiring web developers! This is the
                      first post on this blog since hosting it on the web. As
                      you know, I'm just an aspiring web developer myself, so
                      thiscommunity for aspiring web developers! This is the
                      first post on this blog since hosting it on the web. As
                      you know, I'm just an aspiring web developer myself, so
                      this
                    </p>
                  </div>
                </Link>
              );
            })}
            {!posts && <Icon path={mdiLoading} size={5} className={classes.loading}/>}
        </div>
      </main>
    </>
  );
}

function Welcome() {
  return (
    <div className={classes.welcomeDiv}>
      <img src={me} className={classes.brain} />
      <h2 className={classes.articlesHeader}>
        Welcome to my blog. My name is Nikita. Here I’ll share my thoughts, and
        I’ll also use this site as a pet project, which I’ll show when applying
        for a job. In general, the site is written using React and Node.js. In
        fact, the world of API is built in a surprising way, which I got to know
        better while building this simple blog. I won’t give any comments about
        the strange design, I’m an artist and that’s how I feel.
      </h2>
    </div>
  );
}

export default App;
