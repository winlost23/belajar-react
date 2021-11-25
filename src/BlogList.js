import { Link } from "react-router-dom";
 
const BlogList = ({ blogs, title, handleDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <img src={blog.avatar} alt="Avatar" width="40px" height="40px" />
            <p>Writen by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
 
export default BlogList;