# My Blog App

A full-stack blog application built with a Django REST Framework backend and a React frontend. It allows users to register, log in, and perform CRUD (Create, Read, Update, Delete) operations on their blog posts.

## Features

*   **User Authentication**: Secure user registration and login/logout functionality.
*   **Post Management**: Authenticated users can create, view, update, and delete their own blog posts.
*   **RESTful API**: A well-structured API for interacting with the backend.
*   **Decoupled Frontend**: A modern single-page application built with React.

## Technology Stack

*   **Backend**:
    *   Python
    *   Django & Django REST Framework
    *   `dj-rest-auth` & `django-allauth` for authentication
    *   SQLite3 (default development database)

*   **Frontend**:
    *   React
    *   JavaScript (ES6+)
    *   `create-react-app`

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   Python 3.8+ & Pip
*   Node.js and npm

## Installation and Setup

Follow these steps to get your development environment set up.

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd my-blog-app
    ```

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

## API Endpoints

The core API endpoints provided by the backend are:

*   `POST /api/auth/registration/` - Register a new user.
*   `POST /api/auth/login/` - Log in to get an auth token.
*   `POST /api/auth/logout/` - Log out and invalidate the token.
*   `GET, POST /api/posts/` - List all posts or create a new one.
*   `GET, PUT, DELETE /api/posts/<id>/` - Retrieve, update, or delete a specific post.