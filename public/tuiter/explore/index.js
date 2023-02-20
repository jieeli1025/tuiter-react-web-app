import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
   
  
 
   <div class="col-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${ExploreComponent()}
 
   </div>
   
   <div class="col-4 col-lg-4 col-xl-4 d-lg-block d-none text-white">
    ${WhoToFollowList()}
   </div>
   
  
   `);
}
$(exploreComponent);