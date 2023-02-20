const WhoToFollowListItem = (who) => {
    return(`

  <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-lg-2 col-xl-2">
            <img class="rounded-circle" src="${who.avatarIcon}" width="48px" height="48px">
              </div>
            <div class="col-lg-6 col-xl-7 wd-text-col " style="position: relative; left:4px; display: flex; flex-direction: column; ">
              <span class="fw-bold ">${who.userName}</span>
              <span >@${who.handle}</span>
            </div>
            <div class="col-lg-4 col-xl-3">
              <button class="btn btn-primary rounded-pill">Follow</button>
            </div>
          </div>
        </li>



`



    );
}
export default WhoToFollowListItem;