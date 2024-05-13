import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost() {
  const [enteredbody, setenterbody] = useState();

  function changeBodylister(event) {
    setenterbody(event.target.value);
    console.log(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          row={3}
          onChange={changeBodylister}
        ></textarea>
      </p>
      <p>{enteredbody}</p>
      <p>
        <label htmlFor="name">your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
