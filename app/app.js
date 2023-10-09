//this should be everything for this file!
import { changePageContent } from "../model/model.js";

function initListeners() {
  routing();
  login();
}

const routing = () => {
  //by having "a" on this function, routing will now work on every "a" tag, not just the nav
  $("a").on("click", (event) => {
    event.preventDefault();
    let btnID = event.currentTarget.id;
    let pageContentID = btnID + "Route";
    changePageContent(pageContentID);
    initListeners();
  });
};

const login = () => {
  let status = false;
  let banner = $("#banner").html();

  $("#logBtn").on("click", (e) => {
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    clearInputs();

    if (email == "admin" || password == "admin") {
      console.log("Login successful");
      status = true;
    } else {
      $("#banner").html("Whoops! Login failed!");
      console.log("Login failed");
    }

    status == true ? $("#banner").html("Hello, Admin!") : null;
  });
};

const clearInputs = () => {
  $("#username").val("");
  $("#password").val("");
};

$(document).ready(function () {
  initListeners();
  //change 'homeRoute' to any of the other routes to keep that page up on page load
  changePageContent("homeRoute");
});
