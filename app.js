let navItems = document.querySelectorAll(".nav-item");
let pageLabel = document.getElementById("pageLabel");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    let page = item.getAttribute("data-page");

    // update sidebar active item
    navItems.forEach((n) => n.classList.remove("active"));
    item.classList.add("active");

    // show the right page
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");

    // update breadcrumb
    pageLabel.textContent = page.charAt(0).toUpperCase() + page.slice(1);

    // update widget help content for this page
    updateWidgetContext(page);
  });
});

// save button in settings
document.querySelector(".save-btn").addEventListener("click", () => {
  alert("Settings saved!");
});
