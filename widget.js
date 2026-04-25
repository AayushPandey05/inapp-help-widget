// help content per page
let helpContent = {
  dashboard: [
    {
      q: "What do the stat cards show?",
      a: "Live numbers — active users, adoption rate, tasks done, and guides launched.",
    },
    {
      q: "How do I export a report?",
      a: "Click the Export button at the top right of the dashboard.",
    },
    {
      q: "What is adoption rate?",
      a: "Percentage of users who actively used core features this month.",
    },
  ],
  users: [
    {
      q: "How do I add a new user?",
      a: "Click 'Add user', fill in their details and hit Create.",
    },
    {
      q: "How do I change someone's role?",
      a: "Click on the user row, update the role and save.",
    },
    {
      q: "What does Inactive mean?",
      a: "The user hasn't logged in for 30+ days. You can re-invite them.",
    },
  ],
  reports: [
    {
      q: "How do I download a report?",
      a: "Click the Download button next to any report in the list.",
    },
    {
      q: "How often are reports made?",
      a: "Reports are auto-generated at the end of every month.",
    },
  ],
  settings: [
    {
      q: "How do I update my profile?",
      a: "Edit the fields and click Save changes.",
    },
    {
      q: "Will changing my email affect login?",
      a: "Yes, you'll need to use the new email to log in next time.",
    },
  ],
};

let guides = [
  {
    icon: "🚀",
    title: "Getting started",
    desc: "Set up your workspace in minutes",
  },
  {
    icon: "👥",
    title: "Adding your team",
    desc: "Invite members and assign roles",
  },
  {
    icon: "📊",
    title: "Reading your dashboard",
    desc: "Understand what each metric means",
  },
  {
    icon: "🎯",
    title: "Launching a guide",
    desc: "Create your first onboarding tour",
  },
];

let whatsNew = [
  {
    tag: "New",
    type: "new",
    title: "Context-aware help",
    desc: "Help content updates based on your current page.",
  },
  {
    tag: "Update",
    type: "update",
    title: "Faster dashboard",
    desc: "Stats now load 2x faster.",
  },
  {
    tag: "New",
    type: "new",
    title: "Multi-flow guides",
    desc: "Create different tours for different user roles.",
  },
];

let currentPage = "dashboard";

let helpBtn = document.getElementById("helpBtn");
let helpPanel = document.getElementById("helpPanel");
let closeBtn = document.getElementById("closeBtn");
let searchInput = document.getElementById("searchInput");
let faqList = document.getElementById("faqList");
let guideList = document.getElementById("guideList");
let newList = document.getElementById("newList");
let contextLabel = document.getElementById("contextLabel");

// open panel
helpBtn.addEventListener("click", () => {
  helpPanel.classList.add("open");
  helpBtn.classList.add("hidden");
  loadFaqs(currentPage);
  loadGuides();
  loadNew();
});

// close panel
closeBtn.addEventListener("click", () => {
  helpPanel.classList.remove("open");
  helpBtn.classList.remove("hidden");
  searchInput.value = "";
});

// tab switching
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-pane")
      .forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document
      .getElementById("tab-" + tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});

// live search
searchInput.addEventListener("input", () => {
  let q = searchInput.value.toLowerCase();
  let filtered = helpContent[currentPage].filter(
    (item) =>
      item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
  );
  renderFaqs(filtered);
});

function loadFaqs(page) {
  contextLabel.textContent =
    "Showing help for: " + page.charAt(0).toUpperCase() + page.slice(1);
  renderFaqs(helpContent[page] || []);
}

function renderFaqs(faqs) {
  faqList.innerHTML = "";
  if (faqs.length === 0) {
    faqList.innerHTML = '<div class="no-results">No results found.</div>';
    return;
  }
  faqs.forEach((faq, i) => {
    let div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <div class="faq-q">${faq.q} <span>▾</span></div>
      <div class="faq-a" id="a${i}">${faq.a}</div>
    `;
    div.addEventListener("click", () => {
      let ans = document.getElementById("a" + i);
      ans.classList.toggle("open");
      div.querySelector("span").textContent = ans.classList.contains("open")
        ? "▴"
        : "▾";
    });
    faqList.appendChild(div);
  });
}

function loadGuides() {
  guideList.innerHTML = "";
  guides.forEach((g) => {
    guideList.innerHTML += `
      <div class="guide-item">
        <div class="g-icon">${g.icon}</div>
        <div><div class="g-title">${g.title}</div><div class="g-desc">${g.desc}</div></div>
      </div>
    `;
  });
}

function loadNew() {
  newList.innerHTML = "";
  whatsNew.forEach((item) => {
    newList.innerHTML += `
      <div class="new-item">
        <span class="new-tag ${item.type === "update" ? "update" : ""}">${item.tag}</span>
        <div class="new-title-text">${item.title}</div>
        <div class="new-desc">${item.desc}</div>
      </div>
    `;
  });
}

// called from app.js when page changes
function updateWidgetContext(page) {
  currentPage = page;
  if (helpPanel.classList.contains("open")) {
    loadFaqs(page);
    searchInput.value = "";
  }
}
