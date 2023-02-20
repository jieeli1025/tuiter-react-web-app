const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-8">
            <div class="text-black-50">${post.topic}</div>
            <div >${post.userName}  - ${post.time}</div>
            <div>${post.title}</div>
        </div>
        <div class="col-4">
            <img src=${post.image} class="float-end rounded" height="100%" width="100%">
        </div>
    </div>
</li>`
    );
}
export default PostSummaryItem;