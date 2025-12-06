# 📝 Simple To-Do List App

A minimal and clean to-do list application built with HTML, CSS, and vanilla JavaScript.
Features include adding tasks, selecting categories, marking tasks as completed, editing, deleting, and automatic saving using Local Storage.

---

## 🚀 Live Demo

Frontend (Netlify link): https://uendi-simple-todo-list.netlify.app/

---

## ✨ Features
✔ Add Tasks
- Enter a task name
- Choose a category (General, School, Work, Personal)

✔ Task Actions

- Mark as completed (toggle on click)
- Edit task text
- Delete tasks
- All changes update instantly

✔ Categories

- Each task includes a small label showing its category.

✔ Local Storage

- Tasks are saved in the browser, meaning:
- They stay even if you refresh the page
- They only disappear if the user clears their browser storage

---

## 🖥️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Browser Local Storage

No backend. No libraries. 100% beginner-friendly.

---

## 📂 Project Structure

```markdown
/project-folder
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 📜 How It Works
➕ Add a Task
1. Type a task
2. Select a category
3. Click Add or press Enter

---

## 🗂 Stored Task Format

Each task is saved as an object in Local Storage:

```json
{
  "id": 1710000000000,
  "text": "Finish homework",
  "category": "school",
  "completed": false
}
```

---

## 🔄 Mark Completed

Click a task → toggles a “completed” class.

---

## ✏️ Edit a Task

Click the Edit button → enter new text → saved instantly.

---

## ❌ Delete a Task

Click the X button → removed from UI + Local Storage.

---

## 🎨 UI Preview (Description)

- Clean card-style layout
- Soft shadows
- Rounded input fields
- Category badges
- Simple, readable typography

---

## 🔮 Possible Future Improvements

Ideas to expand this project later:

- Add due dates
- Add a search bar
- Add a filter menu (Completed / Active / By category)
- Color-coded categories
- Animations for adding/deleting tasks
- Reordering tasks (drag & drop)
- Custom category creation
- Save categories in local storage

---

## 👩‍💻 Author

Uendi Faja – B.Sc. Computer Science student at TUHH, Hamburg
