const express = require('express');
const fs = require('fs');

const app = express();
// Home route
app.get('/', (req, res) => {
  res.status(200).send('Student Record Management API');
});
// Get all students
app.get('/students', (req, res) => {
  fs.readFile('info.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.status(200).json(JSON.parse(data));
  });
});


//get students by id
app.get('/students/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('info.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    const students = JSON.parse(data);
    const student = students.find(s => s.id === id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  });
});

//Add Students
//POST /students/:id/:name/:email/:course
app.post('/students/:id/:name/:email/:course', (req, res) => {
  const { id, name, email, course } = req.params;

  fs.readFile('info.json', 'utf-8', (err, data) => {
    let students = [];

    if (!err) {
      students = JSON.parse(data);
    }

    const exists = students.find(s => s.id === id);
    if (exists) {
      return res.status(409).json({ message: 'Student already exists' });
    }

    students.push({ id, name, email, course });

    fs.writeFile('info.json', JSON.stringify(students, null, 2), err => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.status(201).json({ message: 'Student added successfully' });
    });
  });
});

//Update student name
//PUT /students/:id/:name
app.put('/students/:id/:name', (req, res) => {
  const { id, name } = req.params;

  fs.readFile('info.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const students = JSON.parse(data);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Student not found' });
    }

    students[index].name = name;

    fs.writeFile('info.json', JSON.stringify(students, null, 2), err => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.status(200).json({ message: 'Student updated successfully' });
    });
  });
});

//delete student
//DELETE /students/:id
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('info.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const students = JSON.parse(data);
    const newStudents = students.filter(s => s.id !== id);

    if (students.length === newStudents.length) {
      return res.status(404).json({ message: 'Student not found' });
    }

    fs.writeFile('info.json', JSON.stringify(newStudents, null, 2), err => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
