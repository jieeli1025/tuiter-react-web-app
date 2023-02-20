import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div style="display: flex; justify-content: space-around;">
        <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
        <a href="./explore-settings.html" class="mt-2"><i class="fas fa-cog fa-2x m-1"></i></a>
      </div>
      <ul class="nav nav-tabs mb-1 mt-2 ">
        <li class="nav-item">
          <a href="#for-you" class="nav-link active">For You</a>
        </li>
        <li class="nav-item">
          <a href="#trending" class="nav-link ">Trending</a>
        </li>
        <li class="nav-item">
          <a href="#news" class="nav-link ">News</a>
        </li>
        <li class="nav-item">
          <a href="#sports" class="nav-link ">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
          <a href="#entertainment" class="nav-link ">Entertainment </a>
        </li>
      </ul>
      <div class="position-relative">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" width="100%">
        <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
      </div>
      
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

