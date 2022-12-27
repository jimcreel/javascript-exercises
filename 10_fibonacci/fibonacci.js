const fibonacci = function(target) {
    if (target <= 0) return "OOPS";
    let n1=0, n2=1, next;
    for (let i = 1; i <= target; i++){
        next = n1+n2;
        n1=n2;
        n2=next;
    }
    return n1;

};

// Do not edit below this line
module.exports = fibonacci;
