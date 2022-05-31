const { isPalindrome, isPalindrome2 } = require('../src/palindromo')

test('debería retornar verdadero si el input es oso usando palindrome 1', () => {
    const result = isPalindrome('oso')
    expect(result).toBe(true)
})

test('debería retornar verdadero si el input es oso usando palindrome 2', () => {
    const result = isPalindrome2('oso')
    expect(result).toBe(true)
})

test('debería retornar falso si el input es nulo usando palindrome 1', () => {
    const result = isPalindrome(null)
    expect(result).toBe(false)
})

test('debería retornar falso si el input es undefined usando palindrome 1', () => {
    const result = isPalindrome()
    expect(result).toBe(false)
})

test('debería retornar false si el input es perro usando palindrome 2', () => {
    const result = isPalindrome2('perro')
    expect(result).toBe(false)
})

test('debería retornar false si el input es perro usando palindrome 1', () => {
    const result = isPalindrome('perro')
    expect(result).toBe(false)
})
