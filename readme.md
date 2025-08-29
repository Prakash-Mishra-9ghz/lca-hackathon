# AI-Driven Life Cycle Assessment (LCA) Tool for Metallurgy

Prototype built for **Hackathon Project** 🛠️  
An AI-powered Life Cycle Assessment (LCA) tool for metals like aluminium and copper, focusing on sustainability and circularity.

---

## ⚡ Quickstart
```bash
git clone https://github.com/Prakash-Mishra-9ghz/lca-hackathon.git
cd lca-hackathon/backend && python -m venv venv && .\venv\Scripts\activate && pip install -r requirements.txt && python app.py
cd ../frontend && npm install && npm start
```

- Backend → http://localhost:5000  
- Frontend → http://localhost:3000  

---

## 🚀 Tech Stack
- **Frontend:** React (Create React App)
- **Backend:** Flask (Python)
- **Languages:** JavaScript + Python

---

## 📂 Project Structure

lca-hackathon/  
│── backend/        → Flask API  
│   ├── app.py  
│   ├── 
│   ├── requirements.txt  
│   └── models/  
|       |__ lca_engine.py  
│  
│── frontend/       → React UI  
│   ├── src/  
│   │   ├── App.js  
│   │   ├── components/Form.js  
│   │   ├── components/Results.js  
│   │   └── App.css  
│   └── package.json  

---

## ⚡ Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/Prakash-Mishra-9ghz/lca-hackathon.git
cd lca-hackathon
```

---

### 2️⃣ Backend (Flask API)
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate   # PowerShell
venv\Scripts\activate.bat # cmd.exe
pip install -r requirements.txt
python app.py
```

➡ Flask API runs at: **http://localhost:5000**

---

### 3️⃣ Frontend (React App)
Open a new terminal:
```bash
cd frontend
npm install
npm start
```

➡ React app runs at: **http://localhost:3000**

---

## 🎯 How It Works
1. User enters material, process type, energy, and quantity in frontend.  
2. React sends data to Flask backend (`/analyze`).  
3. Flask runs `lca_engine.py` to calculate:  
   - Carbon footprint  
   - Recycled content %  
   - Resource efficiency  
4. Results displayed in the UI.

---

## 🌍 Impact
- Helps engineers, metallurgists, and policymakers analyze environmental impact.  
- Encourages **circular economy** by comparing **raw vs recycled** pathways.  
- Provides easy visualization for sustainability decisions.  

---

## 👥 Team
-  
-   
-   

---

## 🖥️ Setup Guide for Contributors

When you fork/clone this repo, do **not** push `venv/` or `node_modules/`.  
These will be created locally on your machine.

---

### 🔧 Backend (Python + Flask)
1. Navigate to backend:
```bash
cd backend
```

2. Create a virtual environment:

- **PowerShell**:
```bash
python -m venv venv
.\venv\Scripts\activate
```

- **Command Prompt**:
```bash
python -m venv venv
venv\Scripts\activate.bat
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run backend:
```bash
python app.py
```

➡ Runs on **http://localhost:5000**

---

### 🎨 Frontend (React)
1. Navigate to frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run frontend:
```bash
npm start
```

➡ Opens on **http://localhost:3000**

---

### ✅ Notes for Contributors
- Do **not** commit `venv/` or `node_modules/` (they are ignored via `.gitignore`).  
- Only commit actual **code changes** in `backend/*.py` or `frontend/src/*.js`.  
- Before pushing:
```bash
git pull origin main
git add .
git commit -m "Your message"
git push origin main
```
### 🌱 Working with Branches
- Do not commit directly to `main`.
- Always create a new branch for your feature or fix:
```bash
git checkout -b feature-name
```

- After making changes, push your branch:
```bash
git push origin feature-name
```

- Open a Pull Request (PR) on GitHub to merge into `main`.
