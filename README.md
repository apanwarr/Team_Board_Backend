<h1>🚀 Team Board Backend (Node.js + Express + MongoDB)</h1>

<h2>📁 This is the <strong>Team_Board_Backend</strong> repository</h2>

🔗 <strong>Live API Base URL:</strong>  <a href="https://team-board-backend.onrender.com" target="_blank">https://team-board-backend.onrender.com</a>  

<hr>

<p>This is the backend for the <strong>Team Collaboration Board</strong> — a task and board management system using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB Atlas</strong>. It provides RESTful APIs to create and manage boards and their associated tasks.</p>

<hr>

<h2>📦 Features</h2>
<ul>
  <li>🧠 RESTful API built using Express.js</li>
  <li>📋 Create and manage Boards</li>
  <li>✅ Add and retrieve Tasks for specific Boards</li>
  <li>🔌 MongoDB Atlas as cloud database</li>
  <li>🛡️ CORS and JSON middleware configured</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Node.js</strong> – Server runtime</li>
  <li><strong>Express.js</strong> – Backend web framework</li>
  <li><strong>MongoDB Atlas</strong> – Cloud database</li>
  <li><strong>Mongoose</strong> – MongoDB ODM</li>
  <li><strong>dotenv</strong> – For environment variable handling</li>
  <li><strong>Render</strong> – For backend deployment</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>
<pre><code>
team-board-backend/
├── models/
│   ├── Board.js
│   └── Task.js
├── controllers/
│   └── boardController.js
├── routes/
│   ├── boardRoutes.js
│   └── taskRoutes.js
├── .env
├── server.js
└── package.json
</code></pre>

<hr>

<h2>🚀 Setup Instructions</h2>

<h3>1. 📦 Clone the Repository</h3>
<pre><code>git clone https://github.com/your-username/team-board-backend.git
cd team-board-backend
</code></pre>

<h3>2. 🧪 Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>3. 🔐 Configure Environment Variables</h3>
<p>Create a <code>.env</code> file in the root with the following content:</p>
<pre><code>MONGO_URI=your_mongo_connection_string</code></pre>

<p><strong>⚠️ Important:</strong> MongoDB Atlas does <u>not</u> allow any IP by default.<br>
Manually allow <code>0.0.0.0/0</code> under Network Access to connect from Render or any IP.</p>

<h3>4. ▶️ Start the Server</h3>
<pre><code>node server.js</code></pre>
<p>The server runs by default at: <code>http://localhost:5000</code></p>

<h3>5. 📡 API Endpoints</h3>
<ul>
  <li><code>GET /boards</code> – Get all boards</li>
  <li><code>POST /boards</code> – Create a board</li>
  <li><code>GET /boards/:id/tasks</code> – Get tasks in a board</li>
  <li><code>POST /boards/:id/tasks</code> – Add task to board</li>
</ul>

<hr>

<h2>🔗 Deployment</h2>
<p>Backend is deployed on <strong>Render</strong>.</p>
<p>
🌍 <strong>Live API:</strong>  
<a href="https://team-board-backend.onrender.com" target="_blank">https://team-board-backend.onrender.com</a>
</p>

<hr>

<h2>🌟 Bonus Features (Coming Soon)</h2>
<ul>
  <li>📊 API for board/task statistics</li>
  <li>🖥️ Dashboard with analytics</li>
</ul>

<hr>

<h2>🙌 Acknowledgements</h2>
<ul>
  <li>Built with ❤️ by <strong>Ashish Panwar</strong></li>
  <li>Frontend: <a href="https://team-board-frontend.onrender.com" target="_blank">team-board-frontend.onrender.com</a></li>
  <li>Database: <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a></li>
</ul>
