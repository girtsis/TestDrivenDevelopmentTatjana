function validPassword(password) {
    const validLength = password.length >= 8
    let hasNumber = /[0-9]/g.test(password)
    let hasUpperCaseLetters = /[A-Z]/g.test(password)
    let hasLowerCaseLetters = /[a-z]/g.test(password)
    let hasSpecialCharacters = /[\W]/g.test(password)

    return validLength && hasNumber && hasLowerCaseLetters && hasUpperCaseLetters && !hasSpecialCharacters
}
module.exports = validPassword