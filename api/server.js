const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

function readData() {
  if (!fs.existsSync('tasks_data.json')) {
    return { completed: [] };
  }
  return JSON.parse(fs.readFileSync('tasks_data.json', 'utf8'));
}

function writeData(data) {
  fs.writeFileSync('tasks_data.json', JSON.stringify(data, null, 2));
}

// Endpoint prueba
app.get('/', (req, res) => {
  res.json({ message: 'API local funcionando correctamente' });
});

// Guardar historial tarea completada
app.post('/completed', (req, res) => {
  const data = readData();
  const newCompleted = {...req.body, id: Date.now().toString()};
  data.completed = data.completed || [];
  data.completed.unshift(newCompleted);
  writeData(data);
  res.json(newCompleted);
});

// Obtener historial completadas
app.get('/completed', (req, res) => {
  const data = readData();
  res.json(data.completed || []);
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://192.168.1.83:${PORT}`);
});
