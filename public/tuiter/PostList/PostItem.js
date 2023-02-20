const PostItem = (post) => {

    return (`
             <div class="wd-posts">
    <div >
        <img id="profile-pic" src=${post.userPic}>
    </div>
    <div class="wd-contents">
        <div>
            <div class="wd-name">
                <h1 class="wd-name-font">${post.userName}</h1>
                <h2 class="wd-name-font wd-light-gray">${post.at} -${post.time}</h2>
                <h2 id="post-dots">...</h2>
            </div>
            <div>
                <p class="wd-name-font p">${post.content} ${post.link_content} ${post.content_after_link} </div>
            <div class="wd-img-content">
                <img class ="wd-contents-image" src=${post.userimage} alt="">
               
</h2>
            </div>
            <div>
                <nav>
                    <span><i class="fa-regular fa-comment"> ${post.comments}</i></span>
                    <span> <i class="fa-sharp fa-solid fa-retweet"></i> ${post.tweet}</span>
                    <span><i class="fa-regular fa-heart"></i> ${post.like}</span>
                    <span><i class="fa-solid fa-upload"></i></span>
                </nav>
            </div>



        </div>
    </div>
</div>           
 `);
};

export default PostItem;