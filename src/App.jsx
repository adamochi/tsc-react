import "./App.scss";
import Loader from "react-loaders";
import React, { Suspense } from "react";
import Header from "./components/Header/AnimatedLetters.jsx";
import Potato from "./components/Potato/Potato.tsx";
import { fetchData } from "./api";

const resource = fetchData();

function App() {
  return (
    <main className="Potato-App">
      <Header />
      <Potato />
      <Suspense fallback={<Loader type="pacman" />}>
        <ProfileDetails />
        <ProfilePosts />
      </Suspense>
    </main>
  );
}

const ProfileDetails = () => {
  const user = resource.user.read();
  return (
    <div className="card">
      <h1 className="label">{user.name}</h1>
      <ul>
        <li>Username: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </div>
  );
};

const ProfilePosts = () => {
  const posts = resource.posts.read();
  return (
    <>
      <h2 className="list-group-item">
        <strong>Latest Posts</strong>
      </h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
