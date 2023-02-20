import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"
const WhoToFollowList = () => {
    return (`
  <ul class="list-group fw-bold ">
          Who to follow
        </ul>
   <ul class="list-group wd-follower-background">
    ${
        
        whos.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
   </ul>
`); }

export default WhoToFollowList;