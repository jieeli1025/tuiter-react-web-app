import React from "react";
import tuitsArray from './post.json';
import PostListItem from "./homecomponent";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                tuitsArray.map(post =>
                    <PostListItem tuit={post}/> )
            }
        </ul>
    );
};
export default PostList;