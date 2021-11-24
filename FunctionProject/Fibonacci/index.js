var bigInt = require("big-integer");

mem = []
function FiboMem(n){
    if (mem[n]!= null){
        return mem[n];
    }
    else {
        mem[n] = FiboMem(n-1).add(FiboMem(n-2));
        return mem[n]
    }
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        answer = FiboMem(nth);
    }

    context.res = {
        body: answer.toString()
    };
}