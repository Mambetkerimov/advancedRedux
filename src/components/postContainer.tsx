import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./postItem";
import "../App.css"

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 3000);
    }, []);
    return (
        <div className="post__list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Some error text</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;