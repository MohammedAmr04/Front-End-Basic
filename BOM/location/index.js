// ==============================================
// window.location - Understanding Page Location
// ==============================================

// The window.location object contains information about the current URL
// and allows you to navigate or reload the page.

// =======================
// 1. Get Full URL
// =======================
console.log("Full URL (href):", window.location.href);
// Example output: https://www.example.com/page?user=123#section1

// =======================
// 2. Get Protocol
// =======================
console.log("Protocol:", window.location.protocol);
// Example output: https:

// =======================
// 3. Get Hostname (Domain name)
// =======================
console.log("Hostname:", window.location.hostname);
// Example output: www.example.com

// =======================
// 4. Get Port (if exists)
// =======================
console.log("Port:", window.location.port);
// Example output: 8080 or "" (if using default port)

// =======================
// 5. Get Pathname (page path)
// =======================
console.log("Pathname:", window.location.pathname);
// Example output: /page

// =======================
// 6. Get Query Parameters (search)
// =======================
console.log("Search (query string):", window.location.search);
// Example output: ?user=123

// =======================
// 7. Get Hash (Anchor part)
// =======================
console.log("Hash:", window.location.hash);
// Example output: #section1

// =======================
// 8. Redirect to another URL using href
// =======================
// Uncomment to redirect with history:
// window.location.href = "https://www.google.com";

// =======================
// 9. Redirect using assign()
// =======================
// Keeps current page in session history (Back button will work)
// setTimeout(() => {
//   window.location.assign("../popup.html");
// }, 5000);

// =======================
// 10. Redirect using replace()
// =======================
// Replaces current page in session history (Back button WON'T work)
// setTimeout(() => {
//   window.location.replace("../popup.html");
// }, 5000);

// =======================
// 11. Reload the current page
// =======================
// window.location.reload();

// =======================
// 12. Change only the hash (scroll to a section)
// =======================
// window.location.hash = "#section2";

// ==============================================
// Summary:
// - location.href → redirects and keeps current page in history.
// - location.assign(url) → same as href.
// - location.replace(url) → redirects but removes current page from history.
// ==============================================
console.log("Viewport Width:", window.innerWidth);
console.log("Viewport height:", window.innerHeight);
console.log("height:", window.screen.height); // height for all screen for user
console.log("availHeight:", window.screen.availHeight); // height without any fixed elements like taskbar
console.log("width:", window.screen.width); // width for all screen for user
console.log("width:", window.screen.availWidth); // width without any fixed elements like sidebar

// history
console.log(window.history.length);
console.log(window.history.back());

console.log(window.history.forward());
console.log(window.history.go(1));
console.log(window.history.go(-1));
//
let btn = document.getElementById("scr");
btn.onclick = () => {
  // window.scrollTo(500, 1000);
  window.scrollTo({
    left: 0,
    top: 1000,
    behavior: "smooth",
  });
};

let btnBy = document.createElement("button");
btnBy.textContent = "Scroll By";
btnBy.id = "scrBy";
document.body.appendChild(btnBy);

btnBy.onclick = () => {
  // Scrolls down 200px and right 0px from the current position
  window.scrollBy({
    left: 0,
    top: 1000,
    behavior: "smooth",
  });
};
