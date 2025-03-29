Here's a refined AI prompt that will generate a step-by-step tutorial with explanations for learning purposes:

"Create a step-by-step tutorial for building a minimal MERN stack e-commerce website designed for educational purposes. The guide should:

Explain each step clearly with reasoning behind technical choices

Include all installation instructions for beginners

Provide minimal but complete code examples

Offer learning insights about key concepts

Tech Stack Requirements:
Frontend: React via Vite + Tailwind CSS (utilities only)

Backend: Express.js (<100 lines total)

Database: MongoDB Atlas (free tier)

Infrastructure: Docker containers + Kubernetes (Minikube)

Project Features:
Frontend:

Single product display (name, price, image)

Functional 'Add to Cart' using React Context

Fully responsive with Tailwind

Backend:

One GET endpoint (/products)

MongoDB connection with Product schema

Deployment:

Docker setup for both frontend/backend

Basic Kubernetes configuration

Learning-Focused Deliverables:
Detailed Setup Guide with:

Software installation requirements

Configuration explanations

Common troubleshooting tips

Annotated Code Walkthrough covering:

markdown
Copy
## 🛠️ Project Setup
- How to initialize both frontend/backend
- Package installation explanations

## 🖥️ Frontend Development
- Breaking down the React components
- Context API usage explanation
- Tailwind implementation notes

## ⚙️ Backend Development
- Express server structure
- MongoDB connection best practices
- API endpoint design

## 🐳 Containerization & Deployment
- Docker concepts explained
- Kubernetes basics for development
Implementation Instructions with:

Copy-paste ready code blocks

Console commands with expected outputs

Visual diagrams of architecture

Knowledge Checkpoints like:

"Why we use React Context here"

"How MongoDB Atlas connection works"

"What each Dockerfile instruction does"

Constraints:
Absolutely minimal code (single files where possible)

No advanced features (auth/payments)

Focus on educational value over functionality

Include 'Key Takeaways' after each major section

Format Requirements:
Beginner-friendly language

Clear section headers

Code blocks with syntax highlighting

Visual flow where helpful

Complete from setup to deployment"

Example of desired output structure:

markdown
Copy
# Lesson 1: Project Setup
## Objective: 
Create the basic project structure

## Steps:
1. Install Node.js (explain why we need v18+)
   - Check installation: `node -v`
2. Create Vite React project
   ```bash
   npm create vite@latest frontend --template react
Initialize Express backend

bash
Copy
mkdir backend && cd backend
npm init -y
Key Takeaways:
Modern JavaScript projects use Node.js as runtime

Vite provides faster development than Create React App

We separate frontend/backend for maintainability

