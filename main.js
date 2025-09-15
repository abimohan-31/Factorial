function calc(event) {
        event.preventDefault();
        const num = document.getElementById("num").value;

        const result = factorial(num);
        alert(result);
        console.log(result);
      

      document.getElementById("result").value = result;

      }