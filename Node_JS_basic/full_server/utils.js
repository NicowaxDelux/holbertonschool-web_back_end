import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      return reject(new Error('Cannot load the database'));
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter((line) => line); 
      const fields = {};

      for (const line of lines.slice(1)) {
        const [firstname, , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      resolve(fields);
    });
  });
}

