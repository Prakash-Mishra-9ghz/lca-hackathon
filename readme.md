# AI-Driven Life Cycle Assessment (LCA) Tool for Metallurgy

Prototype built for **Hackathon Project** 🛠️  
An AI-powered Life Cycle Assessment (LCA) tool for metals like aluminium and copper, focusing on sustainability and circularity.

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
│   ├── lca_engine.py  
│   └── models/  
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
.\venv\Scripts\activate   # Windows
pip install flask flask-cors
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
-
-
-  

---