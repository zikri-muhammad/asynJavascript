// const smash = (words) => {
//     return words.join(" ").toString()
// }

const smash = (words) => {
    let smashsed = ''
    for (let i = 0; i < words.length; i++) {
        smashsed += words[i];  
        if(i != words.length - 1) smashsed += ' '
    }

    return smashsed
}

console.log(smash(["hello", "world"]))
console.log(smash(["hello", "world", "anemi", "ajkdsjkd"]))
console.log(smash(["hello", "world"]))