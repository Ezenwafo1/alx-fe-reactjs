import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  // Grab the dynamic "id" parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>
        This is the content for blog post <strong>{id}</strong>. 
        You could fetch this data from an API using the id.
      </p>
    </div>
  );
};

export default BlogPost;
