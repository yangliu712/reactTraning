import classes from "./NewPost.module.css";

function NewPost({ authorChange, textareaChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={textareaChange}
        ></textarea>
      </p>

      <p>
        <label htmlFor="name">your name</label>
        <input type="text" id="name" required onChange={authorChange} />
      </p>

      <p>
        <button>Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
