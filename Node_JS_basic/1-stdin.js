process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit(0);
});

process.on('exit', () => {
  console.log('\rThis important software is now closing');
});
