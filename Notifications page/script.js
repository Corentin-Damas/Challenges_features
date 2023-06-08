const unread = document.querySelectorAll(".unread");
const readMask = document.querySelector(".mask-read");
const notificationCount = document.querySelector(".notification-count");

let unreadNotice = unread.length;
const displayNotice = function (notices) {
  notificationCount.innerHTML = notices;
  console.log(notificationCount.innerHTML);
};

displayNotice(unreadNotice);

readMask.addEventListener("click", () => {
  unread.forEach((el) => {
    el.classList.remove("unread");
    unreadNotice--;
    if (unreadNotice <= 0) {
      unreadNotice = 0;
    }
  });
  displayNotice(unreadNotice);
});
