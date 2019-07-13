function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4)
    let newArr = []
    for (let i = 0; i < ranks.length; i++) {
        if(ranks[i] - ranks[i] === 1) {
            newArr.push(ranks[i])
        }
    }
    return newArr
}



console.log(solution([4, 4, 3, 3, 1, 0]))