# Full-Stack Blog Platform (React + Django)

A comprehensive full-stack blog application featuring a robust Django REST Framework backend and a dynamic React frontend. This project implements complete user authentication, full CRUD (Create, Read, Update, Delete) functionality for posts, and a permission system that distinguishes between regular users and superusers. The application is fully containerized and deployed on the cloud.

---

## Live Demo Links

* **Live Frontend (Vercel):** `https://my-blog-app-opal-pi.vercel.app/`
* **Live Backend API (Render):** `https://my-blog-app-72v6.onrender.com/api/posts/`

*(Note: The free backend service on Render may "spin down" after a period of inactivity. The first visit might take up to a minute to load as the server performs a "cold start".)*

## Key Features

-   **Secure User Authentication**: Full user registration and login system with token-based authentication.
-   **Complete Blog Post Management**: Authenticated users can create and delete their own posts.
-   **Advanced Permissions**:
    -   Regular users can only delete their own posts.
    -   Superusers have administrative privileges and can delete any post directly through the UI.
-   **Publicly Viewable Content**: All blog posts are publicly accessible for reading.
-   **RESTful API**: A well-structured backend API built with Django REST Framework for all operations.
-   **Responsive Frontend**: A clean, modern, and mobile-friendly user interface built with React and styled with CSS.
-   **Cloud Deployed**: The backend is deployed on Render with a PostgreSQL database, and the frontend is deployed on Vercel for optimal performance.
-   **Automated Superuser Creation**: A Django data migration automatically creates a superuser on the production server using secure environment variables.

## Technology Stack

| Area      | Technologies & Services                                                                  |
| :-------- | :--------------------------------------------------------------------------------------- |
| **Frontend** | React.js, React Router, Axios, CSS                                                       |
| **Backend** | Python, Django, Django REST Framework, Gunicorn                                          |
| **Database** | PostgreSQL (Production), SQLite3 (Development)                                           |
| **Auth** | `dj-rest-auth`, `django-allauth`                                                         |
| **Deployment**| Vercel (Frontend), Render (Backend & Database), GitHub (CI/CD)                           |

## API Endpoints

The core API endpoints provided by the backend are:

*   `POST /api/auth/registration/` - Register a new user.
*   `POST /api/auth/login/` - Log in to get an auth token.
*   `POST /api/auth/logout/` - Log out and invalidate the token.
*   `GET, POST /api/posts/` - List all posts or create a new one.
*   `GET, PUT, DELETE /api/posts/<id>/` - Retrieve, update, or delete a specific post.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   Python 3.8+ & Pip
*   Node.js and npm

## Installation and Setup

Follow these steps to get your development environment set up.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/my-blog-app.git
    cd my-blog-app
    ```
    *(Replace `your-username` with your actual GitHub username or the correct repository URL)*

### Backend Setup (Django)

2.  **Navigate to the backend root directory** (the one with `manage.py`).

3.  **Create and activate a virtual environment:**
    ```bash
    # For Windows
    python -m venv venv
    .\venv\Scripts\activate

    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

4.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **Run the Django development server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will now be running at `http://127.0.0.1:8000/`.

### Frontend Setup (React)

7.  **Open a new terminal** and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

8.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

9.  **Start the React development server:**
    ```bash
    npm start
    ```
    The React application will now be running and will open automatically at `http://localhost:3000/`.