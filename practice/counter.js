// ## Create a counter in JavaScript
// It should go up as time goes by in intervals of 1 second
// We are assuming that the counter is till 100. 

function counter(n){
    for(let i = 0; i <= n; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}

counter(100);