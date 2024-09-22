import fs from 'fs';
import readline from 'readline';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      return reject(new Error('No file path provided'));
    }

    // Verifica si el archivo existe
    if (!fs.existsSync(filePath)) {
      return reject(new Error('Cannot load the database'));
    }

    const studentsByField = {};
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      const [firstName, , field] = line.split(',');
      if (firstName !== 'firstname') { // Evita la cabecera
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    });

    rl.on('close', () => {
      resolve(studentsByField);
    });

    rl.on('error', (error) => {
      reject(new Error('Cannot load the database'));
    });
  });
};
