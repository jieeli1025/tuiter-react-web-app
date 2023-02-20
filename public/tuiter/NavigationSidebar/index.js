

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
        <div class="list-group-item ">
          <i class="fab fa-twitter m-1"></i>

        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fas fa-home m-1"></i>
          <a href="../HomeScreen/index.html" class="text-decoration-none text-white d-none d-xl-block ${active === 'home' ? 'active' : ''}">Home</a>
        </div>
        <div class="list-group-item list-group-item-action   d-flex align-items-center ">
          <i class="fas fa-hashtag m-1"></i>
          <a href="../explore/index2.html" class="text-decoration-none text-white d-none d-xl-block ${active === 'explore' ? 'active' : ''}">Explore</a>
        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fas fa-bell m-1"></i>
          <a href="../notifications.html" class="text-decoration-none text-white d-none d-xl-block">Notifications</a>
        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fas fa-envelope-square m-1"></i>
          <a href="../messages.html" class="text-decoration-none text-white d-none d-xl-block">Messages</a>
        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fas fa-bookmark m-1"></i>
          <a href="../bookmarks/bookmarks.html" class="text-decoration-none text-white d-none d-xl-block">Bookmarks</a>
        </div>
        <div class="list-group-item  d-flex align-items-center  list-group-item-action">
          <i class="fas fa-list m-1"></i>
          <a href="../lists.html" class="text-decoration-none text-white d-none d-xl-block">Lists</a>
        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fas fa-user-circle m-1"></i>
          <a href="../profile.html" class="text-decoration-none text-white d-none d-xl-block">Profile</a>
        </div>
        <div class="list-group-item  d-flex align-items-center list-group-item-action">
          <i class="fa-solid fa-circle-info m-1"></i>
          <a href="../more.html" class="text-decoration-none text-white d-none d-xl-block"> More</a>
        </div>
        <button class="btn btn-primary w-100 mt-1 rounded-pill d-none d-xl-block">Tweet</button>
      </div>
    </div>
 `);
}
export default NavigationSidebar;


