
import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeCompenent from "./HomeCompenent.js";
import PostSummaryList from "../PostSummaryList/index.js";

function HomeScreen() {
    $('#wd-explore').append(`
   
   <div class="col-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${HomeCompenent()}
 
   </div>
   
   <div class="col-4 col-lg-4 col-xl-4 d-lg-block d-none text-white">
    ${PostSummaryList()}
   </div>
  
   `);
}
$(HomeScreen);