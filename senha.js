let pw = "Ca4´´5"

function validaComplexidade(pw) {
  if (characterVerify(pw) & upperLowerCaseNumberVerify(pw) & specialCharacters(pw)) {
    return console.log("1")
  } else {
    return console.log("0")
  }
}

validaComplexidade(pw)

function characterVerify(pw) {
  if (pw.length < 8 || pw.length > 32) {
    console.log("A senha deve conter entre 8 e 32 caracteres\n")
    return false
  }
  return true;
}

//verificaCaracteres(pw)

function upperLowerCaseNumberVerify(pw) {
  let regex = /[A-Z]+[a-z]+[0-9]/
  if (regex.test(pw)) {
    return true
  } else {
    console.log("A senha deve conter um caractere minusculo, um maiusculo e um numero\n")
    return false
  }
}

//upperLowerCaseNumberVerify(pw)

function specialCharacters(pw) {
  let regex = /[áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ¨~\.,´`\^\ \:; ]/
  if (regex.test(pw)) {
    console.log("A senha nao pode conter caracter de acentuação, pontuação ou espaço\n")
    return false
  }
  return true
}

//specialCharacters(pw)

