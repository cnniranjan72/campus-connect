CampusConnect - College Information Portal
CampusConnect is a centralized portal designed to connect students and faculty by providing easy access to notices, timetables, and campus events in real-time.

Features
Student Portal
View latest notices and announcements

Access personalized class timetables

Discover campus events and activities

Receive instant notifications on updates

Admin Dashboard
Manage and publish notices

Create and organize events

Update class schedules

Publish updates instantly to all users

Technology Stack
Frontend: React 18 with hooks and components

Styling: TailwindCSS using a custom design system

Icons: Lucide icon library

Database: Trickle Database for persistent storage

Multi-page architecture supporting distinct user roles

File Structure Preview
text
CAMPUS_CONNECT/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── AdminHeader.jsx
│       │   ├── AdminStats.jsx
│       │   ├── EventCard.jsx
│       │   ├── EventForm.jsx
│       │   ├── FeatureCard.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── HeroSection.jsx
│       │   ├── NoticeCard.jsx
│       │   ├── NoticeForm.jsx
│       │   ├── StudentHeader.jsx
│       │   └── TimetableView.jsx
│       ├── pages/
│       │   └── NoticePage.jsx
│       ├── api.js
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       └── vite.config.js
│
├── server/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Event.js
│   │   ├── Notice.js
│   │   ├── Timetable.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── Event.js
│   │   ├── Notice.js
│   │   └── Timetable.js
│   ├── .env
│   └── index.js
│
├── trickl/
│   ├── assets/
│   │   └── college-hero-image.json
│   ├── notes/
│   │   └── README.md
│   └── rules/
│       └── rule_for_readme_maintenance.md
Pages
Landing Page (index.html) - Entry point with portal options

Student Portal (student.html) - Interface for students

Admin Dashboard (admin.html) - Interface for faculty and admins

Design System
Primary color: Blue (#2563eb)

Secondary color: Light gray (#f1f5f9)

Accent color: Green (#10b981)

Typography: Inter font family

Layout: Card-based with consistent spacing

Data Models
notice: College announcements

event: Campus activities

timetable: Class schedules

Running the Project
Open index.html in a web browser

Select the Student Portal or Admin Dashboard

Navigate using the sidebar menu

All data is automatically saved using Trickle Database
