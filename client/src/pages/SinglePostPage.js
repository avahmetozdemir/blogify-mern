import React from "react";
import Navbar from "../components/Navbar.js";
import SinglePost from "../components/SinglePost.js";
import Footer from "../components/Footer.js";

function SinglePostPage() {
  return (
    <div style={{ width: "1500px", margin: "auto" }}>
      <Navbar />
      <SinglePost />
      <Footer />
    </div>
  );
}

export default SinglePostPage;
