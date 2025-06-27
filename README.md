# Task Dashboard

A task management application built with React, TypeScript, and TailwindCSS. Users can create, filter, sort, and manage their tasks in a responsive dashboard interface.

## Features

- Add and delete tasks
- Filter tasks by status or priority
- Sort tasks
- Live search functionality
- Form validation
- Task statistics display
- Light/Dark mode toggle
- Data stored in localStorage

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Vite

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-dashboard.git
   cd task-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Visit the app in your browser:

arduino
Copy
Edit
http://localhost:5173
Folder Structure
pgsql
Copy
Edit
task-dashboard/
├── src/
│   ├── components/
│   │   ├── TaskList/
│   │   │   ├── TaskList.tsx
│   │   │   └── TaskItem.tsx
│   │   ├── TaskForm/
│   │   │   └── TaskForm.tsx
│   │   ├── TaskFilter/
│   │   │   └── TaskFilter.tsx
│   │   └── Dashboard/
│   │       └── Dashboard.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── taskUtils.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
