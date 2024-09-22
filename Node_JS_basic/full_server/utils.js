import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export const readDatabase = async (filePath) => {
    try {
        const data = await readFile(filePath, 'utf-8');
        const lines = data.split('\n').slice(1); // Ignorar la cabecera
        const students = {};

        lines.forEach(line => {
            const [firstname, lastname, age, field] = line.split(',');
            if (field) {
                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstname);
            }
        });

        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};
