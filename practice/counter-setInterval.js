// ## Create a counter in JavaScript
// It should go up as time goes by in intervals of 1 second
// We are assuming that the counter is till 100. 

function counter(n) {
    let count = 0;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count > n) {
            clearInterval(interval);
        }
    }, 1000);
  }
  
  counter(10);