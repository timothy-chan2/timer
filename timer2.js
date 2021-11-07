const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();

const handleUserInput = (key) => {
  // Beep when b is pressed
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  
  switch(key) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      console.log(`Setting timer for ${key} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, key * 1000);
      break;
  }

  // Escape out of program with Ctrl + C (close stdin connection)
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
};  

// Event listener for keyboard input
stdin.on("data", handleUserInput);