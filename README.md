# CampusConnect - College Information Portal

## Overview
CampusConnect is a comprehensive college information portal that connects students and faculty through a centralized platform for notices, timetables, and events.

## Features

### Student Portal
- **Notices**: View latest announcements and important updates
- **Timetable**: Access personal class schedules and timings
- **Events**: Discover campus events and activities
- **Real-time Updates**: Get instant notifications when new content is posted

### Admin Dashboard
- **Notice Management**: Post and manage college notices
- **Event Creation**: Create and organize campus events
- **Timetable Management**: Update and maintain class schedules
- **Real-time Publishing**: Instantly publish updates to students

## Technical Architecture
- **Frontend**: React 18 with modern hooks and components
- **Styling**: TailwindCSS with custom design system
- **Icons**: Lucide icon library
- **Database**: Trickle Database for persistent data storage
- **Multi-page Structure**: Separate pages for different user roles

## File Structure
```
CAMPUS_CONNECT/
│
├── client/
│   ├── node_modules/
│   ├── public/
│   │   └── vite.svg
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
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── README.md
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
│   ├── node_modules/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── Event.js
│   │   ├── Notice.js
│   │   └── Timetable.js
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
├── trickle/
│   ├── assets/
│   │   └── college-hero-image.json
│   ├── notes/
│   │   └── README.md
│   └── rules/
│       └── rule_for_readme_maintenance.md

```

## Pages
1. **Landing Page** (`index.html`) - Main entry point with portal selection
2. **Student Portal** (`student.html`) - Student interface for viewing content
3. **Admin Dashboard** (`admin.html`) - Faculty interface for content management

## Design System
- **Primary Color**: Blue (#2563eb)
- **Secondary Color**: Light gray (#f1f5f9)
- **Accent Color**: Green (#10b981)
- **Typography**: Inter font family
- **Layout**: Card-based design with consistent spacing

## Data Models
The application uses Trickle Database with the following object types:
- `notice` - College notices and announcements
- `event` - Campus events and activities  
- `timetable` - Class schedules and timings

## Getting Started
1. Open `index.html` in a web browser
2. Choose between Student Portal or Admin Dashboard
3. Navigate through the interface using the sidebar menu
4. All data persists automatically using Trickle Database

## Last Updated
January 2025
