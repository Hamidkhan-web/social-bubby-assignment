import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard/PostCard';

const Home = () => {
   
    const [post, setPost, ] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, []);

    return (
        <div>
            {
                post.map(posts => <PostCard posts={posts}></PostCard>)
            }
          

        </div>
    );
};

export default Home;