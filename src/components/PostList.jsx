import React, { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostList({ isPosting, onClose }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fectchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fectchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "post",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((old) => [postData, ...old]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} onSubmit={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>this is no post</h2>
          <p>aaa ?</p>
        </div>
      )}
    </>
  );
}

export default PostList;
