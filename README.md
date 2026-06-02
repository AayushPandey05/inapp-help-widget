# inapp-help-widget 🛟

You know that little "Need Help?" button floating in the corner of every SaaS app? Built one of those from scratch.

This is a floating in-app help widget built with plain HTML, CSS, and JS. It serves contextual FAQs, quick guides, and support content based on whatever page the user is on — no redirects, no leaving the app.

Inspired by tools like Intercom, Freshdesk, and Whatfix.

## Live Demo 🚀
[LIVE](https://inapp-help-widget.vercel.app/)

## What it does

- **Floating Help Button** - fixed at the bottom right, always accessible
- **Contextual FAQs** - help content updates automatically based on the current page
- **Live Search** - users can filter FAQs in real time as they type
- **3 Tabs** - FAQs, Quick Guides, and What's New
- **Smooth Animations** - panel slides open and closes with CSS transitions
- **Zero Dependencies** - pure HTML, CSS, and JS, no libraries

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | App structure and widget markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (ES6+) | Widget logic, DOM manipulation, event handling |

## Project Structure 📁

```
inapp-help-widget/
├── index.html   # Fake SaaS dashboard + widget HTML
├── style.css    # App and widget styles
├── widget.js    # Core widget logic (open/close, tabs, search, context)
└── app.js       # App logic (page switching, context updates)
```

## How it works

1. User sees the floating **"💬 Need Help?"** button on any page
2. Clicking it opens the help panel with a smooth slide-up animation
3. Widget reads the current active page and loads relevant FAQs
4. User can search FAQs, browse Quick Guides, or check What's New
5. Switching pages in the sidebar automatically updates the help content
6. Closing the panel brings back the floating button

## Running it locally

```bash
git clone https://github.com/AayushPandey05/inapp-help-widget.git
cd inapp-help-widget
open index.html
```

No installs, no build steps, just open and run.

**Aayush Pandey** · [LinkedIn](https://linkedin.com/in/aayushpandey05)
