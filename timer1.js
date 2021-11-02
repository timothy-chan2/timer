const dong = (times) => {
  for (let time of times) {
    // Ignore negative numbers
    if (time >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};

let nums = process.argv.slice(2);

// Remove non-numbers
nums = nums.filter((num) => isNaN(num) === false);

dong(nums);