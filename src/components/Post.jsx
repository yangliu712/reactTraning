import classes from "./Post.module.css";

const names = ["max", "yang"];

function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.b}</p>
    </li>
  );
}

export default Post;
