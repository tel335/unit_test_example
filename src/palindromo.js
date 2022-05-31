exports.isPalindrome = (word) => {
    if (!word) return false
    const arrayWord = Array.from(word)
    let reverse = arrayWord.reverse().join('')
    if (word === reverse) return true
    return false
}

exports.isPalindrome2 = (word) => {
    if (!word) return false
    let j = word.length - 1
    for (let i = 0; i < word.length/2; i++) {
        if (word[i] !== word[j]) return false
        j--
    }
    return true
}
