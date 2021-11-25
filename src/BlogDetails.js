import { useParams, useHistory } from "react-router-dom";
import UseFetch from "./UseFetch";
 
const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = UseFetch("http://localhost:8001/blogs/" + id);
 
  const handleDeleteBlog = () => {
    fetch("http://localhost:8001/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
 
  return (
    <div className="blog-details">
      {isLoading && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <img src={blog.avatar} alt="Avatar" width="100px" height="100px" />
          <p>Writen by {blog.author}</p>
          <div>{blog.body}</div>
          <br />
          <br />
          <button onClick={handleDeleteBlog}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};
 
export default BlogDetails;