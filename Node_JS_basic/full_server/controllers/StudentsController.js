import { readDatabase } from '../utils';

class StudentsController {
  // Endpoint: /students
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];  // Ruta de la base de datos
    try {
      const students = await readDatabase(dbPath);
      let responseText = 'This is the list of our students\n';

      // Itera sobre los campos en la base de datos (por ejemplo, CS, SWE)
      for (const field in students) {
        if (students.hasOwnProperty(field)) {
          const studentList = students[field];
          responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
        }
      }

      res.status(200).send(responseText.trim()); // Envía la respuesta sin salto de línea al final
    } catch (error) {
      res.status(500).send('Cannot load the database'); // Error si no se puede cargar la base de datos
    }
  }

  // Endpoint: /students/:major
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = process.argv[2]; // Ruta de la base de datos

    // Verifica si el major es válido (CS o SWE)
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(dbPath);
      const studentList = students[major];

      if (studentList) {
        res.status(200).send(`List: ${studentList.join(', ')}`);
      } else {
        res.status(404).send(`No students found for major: ${major}`);
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
