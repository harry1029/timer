const args = process.argv.slice(2).sort((a, b) => a - b);

for (const time of args) {
  if (Number(time) && Number(time) >= 0) {
    setTimeout(() => {
      process.stdout.write(`beep: at ${time} seconds\n`);
    }, Number(time) * 1000);
  }
}