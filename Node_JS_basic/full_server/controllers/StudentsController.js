import { readDatabase } from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');
            const response = ['This is the list of our students'];

            for (const field in students) {
                response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
            }

            res.status(200).send(response.join('\n'));
        } catch (error) {
            // Respuesta cuando no se puede cargar la base de datos
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major;

        // Verificar si el major es válido
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const students = await readDatabase('./database.csv');
            const list = students[major] || [];

            if (list.length === 0) {
                return res.status(200).send(`List: No students found for ${major}`);
            }

            res.status(200).send(`List: ${list.join(', ')}`);
        } catch (error) {
            // Respuesta cuando no se puede cargar la base de datos
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
