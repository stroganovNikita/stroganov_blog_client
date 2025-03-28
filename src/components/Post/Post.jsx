import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import checkTokenFetch from "../javascript/checkTokenFetch";
import classes from "./post.module.css";
import Nav from "../partials/Nav/Nav";
import { fetchPosts } from "../javascript/posts";
import Icon from "@mdi/react";
import { mdiArrowLeftCircle, mdiAccount, mdiCalendarClock, mdiLoading } from "@mdi/js";

function Post() {
  const [posts, setPosts] = useState(null);
  const [checkToken, setCheckToken] = useState(0);
  const [response, setResponse] = useState(0);
  const loading = useRef(null);
  const post = useParams();

  console.log('test')
  useEffect(() => {
    const promisePosts = fetchPosts();
    promisePosts
      .then((promise) => promise.json())
      .then((promise) => setPosts(promise));
  }, [response]);

  useEffect(() => {
    let checkFn = checkTokenFetch();
    checkFn.then((answer) => setCheckToken(answer));
  }, []);

  const handleSubmit = (event) => {
    loading.current.style.display = 'block'
    const body = event.currentTarget.elements;
    const token = localStorage.getItem("token");
    event.preventDefault();
    fetch(`http://localhost:3000/posts/${post.postId}/comments`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accent: "applicaiton/json",
        "Content-type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        comment: body.comment.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => setResponse(response));
      event.currentTarget.elements.comment.value = ''
      loading.current.style.display = 'none'
  };

  return (
    <>
      <Nav />
      <main className={classes.mainPost}>
        {!posts && <Icon path={mdiLoading} size={5} className={classes.loading}/>}
        {posts && (
          <div className={classes.postDiv}>
            <img src="https://cyfgfocmixveitalwndg.supabase.co/storage/v1/object/public/blog//welcome4.jpg" />
            <h2>{posts.posts[post.postId - 1].title}</h2>
            <p>{posts.posts[post.postId - 1].text}</p>
          </div>
        )}
        <hr />
        <form
          className={classes.formPostComment}
          onSubmit={handleSubmit}
          action={`http://localhost:3000/posts/${post.postId}/comments`}
        >
          <label htmlFor="comment" className={classes.commentLabel}>
            Comment:
          </label>
          {checkToken && checkToken.data ? (
            <>
              <textarea
                minLength={3}
                maxLength={1000}
                name="comment"
                id="comment"
              ></textarea>
              <button>Submit</button>
              {response && response.data ? <p className={classes.responseComment}>{response.data}</p> : ''}
              {response && response.errors ? response.errors.map((err) => <p>{err.msg}</p>) : ''}
              <Icon path={mdiLoading} size={2} className={classes.loadingComment} ref={loading}/>
            </>
          ) : (
            <h2 className={classes.commentsWarning}>
              Post comments only for authorized users
            </h2>
          )}
        </form>
        {posts &&
          posts.posts[post.postId - 1].comments.map((comment, index) => {
            return (
              <div key={index} className={classes.commentDiv}>
                <div className={classes.infoAboutUserComment}>
                  <div>
                    <Icon path={mdiAccount} size={1.3} />
                    <p>{comment.authorname}</p>
                  </div>
                  <div>
                    <Icon path={mdiCalendarClock} size={1.3} />
                    <p>{new Date(comment.date).toLocaleString()}</p>
                  </div>
                </div>
                <p>{comment.text}</p>
              </div>
            );
          })}
        <Link to="/" viewTransition>
          <Icon
            path={mdiArrowLeftCircle}
            size={4}
            className={classes.arrowBack}
          />
        </Link>
      </main>
    </>
  );
}

export default Post;
