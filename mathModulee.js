 export function factorial(num) {
        if (num === 0 || num === 1) {
          return 1;
        } else if (num < 0) {
          alert("Please enter a valid number");
        } else {
          return num * factorial(num - 1);
        }
      }