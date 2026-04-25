# inapp-help-widget

A floating in-app help and support widget built with vanilla HTML, CSS, and JavaScript. It provides contextual FAQs, quick guides, and support content based on the user's current page — without them ever leaving the application.

Inspired by modern SaaS support tools like Intercom, Freshdesk, and Whatfix.

---

## Live Demo

[View Live →](https://inapp-help-widget.heyitsaayush.me) &nbsp;|&nbsp; [GitHub →](https://github.com/AayushPandey05/inapp-help-widget)

---

## Features

- **Floating Help Button** — Fixed at the bottom right of the screen, always accessible
- **Contextual FAQs** — Help content updates automatically based on which page the user is on
- **Live Search** — Users can search FAQs in real time with instant filtering
- **3 Tabs** — FAQs, Quick Guides, and What's New
- **Smooth Animations** — Panel slides open and closes with CSS transitions
- **Zero Dependencies** — Built with pure HTML, CSS, and JavaScript, no libraries used

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | App structure and widget markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (ES6+) | Widget logic, DOM manipulation, event handling |

---

## Project Structure

```
inapp-help-widget/
├── index.html    # Fake SaaS dashboard + widget HTML
├── style.css     # App and widget styles
├── widget.js     # Core widget logic (open/close, tabs, search, context)
└── app.js        # App logic (page switching, context updates)
```

---

## How It Works

1. User sees the floating **"💬 Need Help?"** button on any page
2. Clicking it opens the help panel with a smooth slide-up animation
3. The widget reads the current active page and loads relevant FAQs
4. User can search FAQs, browse Quick Guides, or check What's New
5. Switching pages in the sidebar automatically updates the help content
6. Closing the panel brings back the floating button

---

## Getting Started

```bash
git clone https://github.com/AayushPandey05/inapp-help-widget.git
cd inapp-help-widget
open index.html
```

No installs. No build steps. Just open and run.

---

## Author

**Aayush Pandey**
[LinkedIn](https://linkedin.com/in/aayushpandey05) · [GitHub](https://github.com/AayushPandey05)
