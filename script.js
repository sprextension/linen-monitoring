body {
  font-family: Arial, sans-serif;
  background: #f8f9fb;
  color: #222;
  margin: 20px;
}

h1 {
  text-align: center;
}

section {
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}

.bed {
  background: #eef4ff;
  padding: 8px;
  border-radius: 6px;
}

input {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.buttons {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  background: #2b7cff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #1f5ed1;
}

footer {
  text-align: center;
  margin-top: 30px;
  color: #555;
}
