# Admin Panel Application

- The Admin Panel application is a responsive and accessible user management tool. It includes features for viewing, searching, and filtering user details, along with authentication and secure access control.

---

## Features

### **Authentication**

- Admin must log in using predefined credentials.
- Valid credentials redirect the user to the main page.
- Invalid credentials will display an error message without redirecting.
- Logged-out users are automatically redirected to the login page.

### **Search & Filter**

- Search functionality supports filtering users by:
  - **First Name**
  - **Last Name**
  - **Full Name**

### **User Management**

- View a list of users retrieved from a mocked JSON file via **Axios**.

- Perform **CRUD** operations:
  - Add New Users: Opens a modal to add user details.
  - Edit Existing Users: Update user details in a modal.
  - Delete Users: Remove users from the list with a confirmation prompt.

---

## Technologies Used

- **TypeScript**
- **React**
- **Tailwind CSS**
- **Material UI**
- **Axios**

## Getting Started

## Prerequisites

**Node.js (v16 or later)**
**npm or yarn (latest version)**

1. **Install Dependencies**:

   ```bash
   npm install

   ```

2. **Clone the Repository**:

   ```bash
   git clone https://frontend-dev-course-2024-gitlab.codelx.dev/leverx/lemonjava-guranda.git

   cd admin-panel

   ```

3. **Start the Development Server**:

   ```npm run dev

   ```

---

**Usage**

#### **Open the application in your browser:**

http://localhost:3000

#### **Log in with the following credentials**

- **Email**: `admin@example.com`
- **Password**: `testpass123`
