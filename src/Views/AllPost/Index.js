import React, { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Do's and Don'ts in React",
      message:
        "lorem ipsum dolor sit amet, consect. lorem ipsum dolor, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et...",
    },
    {
      id: 2,
      title: "Why I like Programming",
      message:
        "lorem ipsum dolor sit amet, consect. lorem ipsum dolor, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et...",
    },
    {
      id: 3,
      title: "Go There! Congrats ",
      message:
        "lorem ipsum dolor sit amet, consect. lorem ipsum dolor, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et...",
    },
  ]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    let payload = {
      id: Math.ceil(Math.random() * 100),
      title: title,
      message: message,
    };
    setPosts([...posts, payload]);

    // console.log("You clicked add button");
  };

  const handleDelete = (id) => {
    console.log("you are deleting index", id);
    const filteredPost = posts.filter((post) => post.id !== id);
    setPosts(filteredPost);
  };

  const handleEdit = (id) => {
    const editPost = posts.filter((post) => post.id === id);
    console.log(editPost[0]);
    setTitle(editPost[0]?.title);
    setMessage(editPost[0]?.message);
    const payload = {
      id: id,
      title: title,
      message: message,
    };
    const updatedPost = posts.filter((post) => post.id !== payload.id);
    console.log("updatedPost", updatedPost);
    setPosts(updatedPost);
  };
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.message}</p>
          <button
            onClick={() => handleEdit(post.id)}
            style={{ marginRight: "10px" }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
      <br></br>
      <br></br>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder=" Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <br></br>
        <br></br>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
          value={message}
          rows={4}
          cols={28}
        ></textarea>
        <br></br>
        <button>Submit Post</button>
      </form>
    </div>
  );
}

export default Posts;
