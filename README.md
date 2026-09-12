Accessibility Baseline & Repository Architecture Audit

A full-stack project foundation created from an accessibility and architecture audit of a real public-facing website.

📌 Project Overview

This project demonstrates how to evaluate a public service website for:

- Web accessibility
- Keyboard navigation
- Semantic HTML
- Responsive design
- Maintainable project architecture
- Frontend and backend separation
- Testing and documentation

The project is organized as a monorepo containing client, server, documentation, and test directories.

🎯 Objectives

1. Perform an accessibility audit.
2. Identify major accessibility and architecture issues.
3. Document evidence and remediation priorities.
4. Create an accessible frontend foundation.
5. Create a backend API foundation.
6. Organize the project for future development and testing.

🏗️ Project Structure

accessibility-architecture-audit/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── server.js
│   └── package.json
│
├── docs/
│   ├── audit-report.md
│   └── architecture.md
│
├── tests/
│   └── accessibility.test.js
│
├── .gitignore
├── package.json
└── README.md

♿ Accessibility Focus

The project focuses on improving:

- Keyboard-only navigation
- Visible focus indicators
- Proper heading hierarchy
- Form labels
- Alternative text for images
- Color contrast
- Semantic HTML
- Accessible buttons and links
- Responsive layouts

🔍 Audit Methodology

The audit uses two primary approaches:

1. Automated Testing

Accessibility issues can be identified using tools such as:

- Lighthouse
- Browser accessibility audits
- HTML validation tools

2. Manual Keyboard Testing

The website is tested using keyboard controls such as:

Tab
Shift + Tab
Enter
Space
Arrow Keys
Esc

This helps identify navigation and focus-related accessibility problems that automated tools may not detect.

🚨 Identified Issues

The audit documentation records five accessibility or architecture issues, including:

Issue| Priority| Recommended Action
Missing/incorrect form labels| High| Add accessible labels
Poor keyboard focus visibility| High| Add clear focus styles
Incorrect heading hierarchy| Medium| Use logical heading levels
Insufficient color contrast| High| Improve foreground/background contrast
Unstructured frontend architecture| Medium| Separate components and pages

💻 Technologies

Frontend

- HTML5
- CSS3
- JavaScript
- React

Backend

- Node.js
- Express.js

Testing & Auditing

- Lighthouse
- Keyboard navigation testing
- Accessibility testing

📁 Documentation

Additional project documentation is available in the "docs/" directory.

Audit Report

"docs/audit-report.md"

Contains:

- Website audit findings
- Accessibility issues
- Evidence
- Priority levels
- Recommended remediation

Architecture

"docs/architecture.md"

Contains:

- Repository architecture
- Frontend structure
- Backend structure
- API organization
- Maintainability considerations

🚀 Getting Started

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project directory:

cd accessibility-architecture-audit

Install dependencies:

npm install

Start the development environment:

npm run dev

🧪 Testing

Run the project's tests with:

npm test

Accessibility testing should also be performed using Lighthouse and manual keyboard navigation.

📊 Expected Outcome

The completed project provides:

- A documented accessibility audit
- Five identified issues
- Remediation priorities
- A maintainable monorepo structure
- Frontend foundation
- Backend foundation
- Testing foundation
- Accessibility-focused development practices

👩‍💻 Author

ASWATHI K

📄 License

This project is created for educational and portfolio purposes.
