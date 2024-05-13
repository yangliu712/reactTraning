import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
function PostList() {
  return (
    <>
      <NewPost></NewPost>
      <ul className={classes.posts}>
        <Post author="heihei" b="asflasjflkjsdlfajsl"></Post>
        <Post author="heiheihei" b="asflasjflkjsdlfajslasdfasdfa"></Post>
      </ul>
    </>
  );
}

export default PostList;
