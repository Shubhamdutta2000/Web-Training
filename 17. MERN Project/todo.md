## 1. Client

- Tools Required:

  - React
  - Redux (Global State Management)
  - Style Framework: Material UI - Google

- Page

  - Login
  - Register
  - Home
  - Particular Note Page (View Note details and able to update note)
  - New Note Page
  - Bug Bounty Page
  - 404 Error Page

- Components
  - Navbar
  - Footer
  - NotesCard
  - New Note Box
  - BugForm
  - Bugillustration

---

---

## 2. Backend

- Tools Required:

  - Node Express
  - Mongoose
  - JWT - Json Web Token
  - Mail pathanor package (SendGrid)

- Architechture

  - Authentication with JWT
  - CRUD of Notes (Create Read Update Delete)
  - Bug Bounty (ignore this)

- Authentication

  - Register
    - Create User and add their creds to DB
    - create JWT and pass it to client side
    - API: /register
  - Login
    - Check email and password exists on user DB or not
    - create JWT and pass it to client side
    - API: /login
  - Logout (Client)

- API

  - /login (Jwt token pass in response and store this token in localStorage in cliend side)
  - /register
  - /forgotpassword
  - /noteCreate -- protected
  - /noteUpdate/:id -- protected
  - /allNotes -- protected
  - /deleteNote/:id -- protected

---

---


- Mongoose Population
  - Refere

// MERN Stack -- MongoDB Express React Node


