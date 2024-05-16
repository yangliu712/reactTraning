import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function closeModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalVisible} onClose={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
