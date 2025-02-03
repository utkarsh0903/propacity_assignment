Responsive Design with Material-UI: The website prioritizes responsive design principles through the integration of Material-UI, a popular React UI framework utilized in App.js. This ensures a seamless user experience across diverse devices and screen sizes, catering to both desktop and mobile users.

Modularization with Separate Components for Data Categories: To maintain code cleanliness and facilitate independent management of each section, such as people, vehicles, and species, the website employs separate components for each data category. This modular design enhances code organization and manageability.

Component-Based Architecture: The website embraces a component-based architecture, where distinct components handle various sections such as people, vehicles, and species. This approach enhances code reuse and modularity, facilitating the maintenance of clean and organized code.

Styling Integration: The website incorporates Bootstrap for styling Bootstrap cards and utilizes CSS modules, along with media queries, to achieve a visually appealing and responsive design. This combination of styling tools contributes to a cohesive and well-presented user interface.

Effective Data Fetching with useEffect Hook: Leveraging the useEffect hook in each component ensures data retrieval occurs only when necessary, minimizing unnecessary API calls and optimizing overall performance.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# URL Shortener

A full-featured URL shortening service built with **React**, **Node.js**, and **MongoDB**. Users can shorten links, track analytics, and manage their URLs efficiently.

## 🚀 Features

### 1️⃣ URL Shortening
- Users can input a long URL and generate a **unique** shortened version.
- Short links are created using a **random hash** (e.g., `https://<hostname>/<6-8 alphanumeric>`).
- Users can **set expiration dates** for links.

### 2️⃣ User Management
- **User Registration & Login** using **email and password**.
- Secure password storage with **hashing**.
- **Account Settings:**
  - **Update Profile:** Users can update their name and email.
    - Updating email logs the user out automatically.
  - **Delete Account:** Deletes all associated links and data.

### 3️⃣ Dashboard
- A user-friendly **dashboard** displaying:
  - **Original URL**.
  - **Shortened URL**.
  - **Click analytics**.
- Users can **edit or delete** their links.

### 4️⃣ Click Tracking
- **Track metadata** for every link click:
  - **Timestamp**.
  - **IP Address**.
  - **User Agent** (browser & OS details).
- Summarized click data is displayed on the **dashboard**.

### 5️⃣ Link Management
- **Edit** original URLs or aliases.
- **Delete** individual links.

### 6️⃣ Analytics
- **Detailed analytics** for each shortened link:
  - **Device type** (mobile, desktop, tablet).
  - **Browser details**.

### 7️⃣ Responsive Design
- Fully **responsive UI** for **desktop and mobile**.

### 8️⃣ Pagination
- **Pagination** added to:
  - **Links List**.
  - **Analytics Dashboard**.

---

## 🛠️ Tech Stack

### Frontend:
- **React**
- **Vanilla CSS**

### Backend:
- **Node.js** with **Express**
- **MongoDB** (Database)

### Hosting:
- **Frontend:** Vercel, [Deployed Link](https://url-shortner-sage-one.vercel.app/)
- **Backend:** Render, [Backend Repo](https://github.com/utkarsh0903/Url-Shortner)

---

## 📌 Setup Instructions

1️⃣ **Clone the Repository:**
```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

```
2️⃣ **Backend Setup:**
```sh
npm install
npm start
```

2️⃣ **Frontend Setup:**
```sh
npm install
npm start
```

4️⃣ **Access the Application:**
Open http://localhost:3000 in your browser.

---

## 🎮 **Demo Credentials**
Use the following credentials to test the application:

Email: u22@g.c  
Password: 123456
