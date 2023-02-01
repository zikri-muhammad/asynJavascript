function likes(names) {
    // TODO
    if (names.length == 0) return 'no one likes this'
    // for (let i = 0; i < names.length; i++) {
        // const element = names[i];
    if (names.length == 1) {
        return `${names[0]} likes this`
    } else if(names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length > 3) {
        return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`
    }
    // }
}

// console.log(likes([]));
console.log(likes(['zikri']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['zikri', 'abu', 'kam']));
console.log(likes(['zikri', 'abu', 'kam', 'nama', 'ko']));