# 🌐 Week 9: Flask - CS50x 2026

## 🌟 Overview

This folder contains my solutions for Week 9 of Harvard's CS50x 2025 course, focusing on back-end web development with Python and Flask. Week 9 introduces the Model-View-Controller (MVC) design pattern, handling HTTP requests, and integrating SQL databases with web applications. These exercises have been pivotal in understanding how dynamic websites function behind the scenes. 🚀

## 🧩 Problem Sets

Below are the problem sets and labs included in this folder, with brief descriptions:

- **Lab 9: Birthdays**: A web application to keep track of friends' birthdays. This project involves handling form submissions requests to add new birthdays to a SQL database and displaying them dynamically using Jinja templates. 🎂
- **Problem Set 9: Finance**: A comprehensive stock trading simulation. This web app allows users to:
  - Register and log in (authentication).
  - "Buy" and "sell" stocks using real-time data from the IEX API.
  - View their portfolio, transaction history, and account balance.
  - Manage cash balance and check stock quotes.
  - Built using Flask, SQL, and Bootstrap. 📈💰

## 📚 Learning Objectives

Through these assignments, I aimed to master the following concepts:

- **Flask Framework**: Setting up a Flask server, defining routes, and handling HTTP methods (GET vs. POST).
- **Jinja Templating**: Dynamic HTML generation using loops, conditionals, and template inheritance.
- **Database Integration**: Using `cs50.SQL` to execute queries and manage persistent data within a web app.
- **Session Management**: Handling user login states and flash messages using `flask.session`.
- **API Integration**: Fetching and parsing data from external APIs (like stock quotes in Finance).
- **MVC Architecture**: Structuring code by separating logic (Python), presentation (HTML/CSS), and data (SQL).

## 🏃‍♂️ How to Run the Code

To run the Flask applications:

1. Ensure Python and Flask are installed.
2. Navigate to the specific project folder (e.g., `cd Week-09-Flask/Problem-Set-09/01-Birthdays`).
3. Set the Flask app environment variable (optional but recommended): `export FLASK_APP=app.py` (or `set FLASK_APP=app.py` on Windows).
4. Run the application: `flask run`.
5. Open the provided URL (usually `http://127.0.0.1:5000`) in your browser to interact with the app.

## 💭 Reflections

Week 9 was a game-changer! Connecting the front-end (HTML/CSS) with back-end logic (Python) and a database (SQL) felt like creating a "real" application. The **Finance** problem set was particularly rewarding, as it required piecing together everything learned so far—authentication, database design, API calls, and responsive UI. It was challenging but clearly demonstrated the power of full-stack development!

## 📚 Resources

- 📺 [Lecture Video](https://cs50.harvard.edu/x/2025/weeks/9/)
- 📝 [Lecture Notes](https://cs50.harvard.edu/x/2025/notes/9/)
- 📊 [Slides](https://cs50.harvard.edu/x/2025/slides/9/)
- 💾 [Source Code](https://cdn.cs50.net/2024/fall/lectures/9/src9.zip)

## 📂 Directory Structure

Here’s how the repository is organized:

```
Week-09-Flask/
├── Problem-Set-09/
│   ├── 01-Birthdays/
│   ├── 02-Finance/
├── 01-Froshims/
├── 02-Hello/
├── 03-Login/
├── 04-Shows/
├── 05-Store/
└── README.md
```

Thanks for checking out my CS50x Flask projects! Onward to the Final Project! 💻✨
