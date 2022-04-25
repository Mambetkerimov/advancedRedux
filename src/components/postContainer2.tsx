import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./postItem";
import "../App.css"

const PostContainer2 = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(15);
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

export default PostContainer2;