// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. 
// We are assuming that the counter is till 100.

function counter(n){
    for(let i = 0; i <= n; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}

counter(100);