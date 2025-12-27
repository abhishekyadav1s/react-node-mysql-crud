\# React Node MySQL CRUD Application

    A full-stack CRUD (Create, Read, Update, Delete) application built using \*\*React\*\*, \*\*Node.js\*\*, \*\*Express\*\*, and \*\*MySQL\*\*.
\## 🚀 Features

    \- Add new users
    \- View users list
    \- Update existing users
    \- Delete users
    \- RESTful APIs
    \- MySQL database integration

\## 🛠 Tech Stack

    \*\*Frontend\*\*
    \- React (Vite)
    \- Axios
    \- HTML / CSS

  \*\*Backend\*\*
    
    \- Node.js
    \- Express.js
    \- MySQL
    \- CORS

\## 📁 Project Structure
        react-node-mysql-crud/
        │
        ├── react-crud-app/ # React frontend
        ├── backend/ # Node + Express backend
        ├── .gitignore
        └── README.md

\## ⚙️ Setup Instructions
  \### 1️⃣ Clone Repository
    ```bash
    git clone https://github.com/abhishekyadav1s/react-node-mysql-crud.git
    cd react-node-mysql-crud

2️⃣ Backend Setup

    cd backend
    npm install  
    node index.js
    
3️⃣ Frontend Setup
    
    cd react-crud-app
    npm install
    npm run dev



4️⃣ Database Setup

      CREATE DATABASE abhidb;

      CREATE TABLE users (

          id INT AUTO\_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          email VARCHAR(100),
          age INT
      );
      
🔗 API Endpoints

    | Method | Endpoint   | Description   |

    | ------ | ---------- | ------------- |

    | POST   | /users     | Create user   |

    | GET    | /users     | Get all users |

    | PUT    | /users/:id | Update user   |

    | DELETE | /users/:id | Delete user   |

    <img width="965" height="477" alt="image" src="https://github.com/user-attachments/assets/d9875e93-6a21-4121-a99e-6b5a6457df97" />


🧠 Learning Outcome

      This project demonstrates full-stack development skills, REST API design, and database integration.


            👨‍💻 Author:
            Abhishek Yadav
    Java | SQL | Full Stack Developer







