import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];

    readDatabase(dbPath)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        sortedFields.forEach((field) => {
          const studentList = students[field];
          responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(dbPath)
      .then((students) => {
        const studentList = students[major];

        if (studentList) {
          res.status(200).send(`List: ${studentList.join(', ')}`);
        } else {
          res.status(500).send('Cannot load the database');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
