import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
 
const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = UseFetch("http://localhost:8001/blogs");
 
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading.....</div>}
      {blogs && <BlogList blogs={blogs} title="Simplified All Blogs" />}
    </div>
  );
};
 
export default Home;