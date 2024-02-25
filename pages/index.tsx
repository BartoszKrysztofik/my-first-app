import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../pages/components/Navbar"
import Footer from "../pages/components/Footer"
import Posts from "../pages/components/Posts"
import data from "../db.json"
import BlogPost from "./blog/[id]";



export default function Home() {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    axios.get('/api/posts').then((response) => setPosts(response.data.posts)).catch((error)=>console.error(error))
  }, [])

  const handlePostClick = (e, post) => {
    e.preventDefault()
    setSelectedPost(post)
  }

  return (
    <div className="h-screen">
      <Navbar />
      <main>
        <h1 className="flex justify-center text-5xl p-5 text-gray-400">Welcome to my blog</h1>
        
        {selectedPost ? (
          <BlogPost post={selectedPost} />
        ) : (
            <Posts posts={data.posts} onPostClick={handlePostClick} />  
        )}
      </main>
      <Footer />
    </div>
  );
}




