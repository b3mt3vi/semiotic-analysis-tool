# Semiotic Analysis Tool

## Overview

The Semiotic Analysis Tool is a web-based application designed to visualize and analyze semiotic squares for literary and linguistic studies. This tool leverages Django for the backend API and D3.js for interactive data visualization. It enables users to input and analyze texts and visualize relationships using a semiotic square.

## Features

- **Text Analysis:** Process and analyze textual content using NLP techniques.
- **Semiotic Square Visualization:** Create and display semiotic squares to explore relationships between terms.
- **Interactive Elements:** Use D3.js to provide interactive visualizations and enhance data exploration.
- **Backend API:** Utilize Django REST Framework to manage data and integrate with the frontend.

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js and npm
- Django
- Django REST Framework
- D3.js

### Clone the Repository

```bash
git clone
cd
```

### Backend Setup

1. **Create a Virtual Environment:**

   ```bash
   python -m venv venv
   ```

2. **Activate the Virtual Environment:**

   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Install Required Packages:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply Migrations and Create Superuser:**

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

5. **Run the Development Server:**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Build the Frontend:**

   ```bash
   npm run build
   ```

4. **Serve Static Files:**

   Ensure Django is configured to serve static files correctly. The built frontend files should be placed in the `static` directory.

## Usage

1. **Access the Application:**

   Open your browser and navigate to `http://127.0.0.1:8000/` to view the application.

2. **Add Text Data:**

   Use the API endpoint `/api/texts/` to add textual data for analysis.

3. **View Semiotic Square:**

   Navigate to `/analysis/` to view and interact with the semiotic square visualization.