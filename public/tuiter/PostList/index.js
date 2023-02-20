import PostItem from "./PostItem.js";
import posts from "./post.js";
import PostItems from "./PostItems.js";

const PostList = () => {
    return (`
        ${
        posts.map(post => {
            if (post.content_shared === "") {
                return (PostItem(post));
            }
            return (PostItems(post));
        }).join('')
    }
    `);
}
export default PostList;