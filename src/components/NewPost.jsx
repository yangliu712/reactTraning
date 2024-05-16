import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ onCancel, onSubmit }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function textareaChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onSubmit(postData);
    console.log(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={textareaChangeHandler}
        ></textarea>
      </p>

      <p>
        <label htmlFor="name">your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>

      <p className={classes.actions}>
        <button> Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
