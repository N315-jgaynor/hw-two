import * as MODEL from "../model/model.js";

function initListeners() {
  // this area is for the nav menu change
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $(".links a").click(function (e) {
    $(".bars").removeClass("active");
    $(".links").removeClass("active");
  });
}

// want to add a class that will push the content down 400px depending on the page, attempt shown below

// function navAdjust() {
//   $(".bars").click(function (e) {
//     $(".home").toggle(function () {
//       $(".home").css("margin-top", "400px");
//     });
//   });
// }

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  MODEL.changePageContent(pageID);
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
