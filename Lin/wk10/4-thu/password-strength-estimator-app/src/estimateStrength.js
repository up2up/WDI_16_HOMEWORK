const estimateStrength = (inputPassword) => {
  let score = 0;
  
  const hasLowerCase = /[a-z]/.test(inputPassword);
  const hasSpecialChar = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(inputPassword);
  const hasNumber = /\d/.test(inputPassword);
  const hasUpperCase = /[A-Z]/.test(inputPassword);
  const isOver8Char = inputPassword.length > 8 ? true : false;

  
  
  if (hasLowerCase && hasSpecialChar && hasNumber && hasUpperCase && isOver8Char){
    var result ={
      score: 5,
      hasSpecialChar,
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      isOver8Char
    }
  }
  if (hasLowerCase && hasSpecialChar && hasNumber && hasUpperCase && !isOver8Char){
    result ={
      score: 4,
      hasSpecialChar,
      hasLowerCase,
      hasUpperCase,
      hasNumber
    }
  }
  if (hasLowerCase && hasSpecialChar && hasNumber && !hasUpperCase && isOver8Char){
    result ={
      score: 4,
      hasSpecialChar,
      hasLowerCase,
      hasNumber,
      isOver8Char
    }
  }
  if (hasLowerCase && hasSpecialChar && !hasNumber && hasUpperCase && isOver8Char){
    result ={
      score: 4,
      hasSpecialChar,
      hasLowerCase,
      hasUpperCase,
      isOver8Char
    }
  }
  if (hasLowerCase && !hasSpecialChar && hasNumber && hasUpperCase && isOver8Char){
    result ={
      score: 4,
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      isOver8Char
    }
  }
  if (!hasLowerCase && hasSpecialChar && hasNumber && hasUpperCase && isOver8Char){
    result ={
      score: 4,
      hasSpecialChar,
      hasUpperCase,
      hasNumber,
      isOver8Char
    }
  }
//

if (hasLowerCase && hasSpecialChar && hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 3,
    hasSpecialChar,
    hasLowerCase,
    hasNumber
  }
}
if (hasLowerCase && hasSpecialChar && !hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 3,
    hasSpecialChar,
    hasLowerCase,
    hasUpperCase
  }
}
if (hasLowerCase && !hasSpecialChar && hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 3,
    hasLowerCase,
    hasNumber,
    hasUpperCase
  }
}
if (!hasLowerCase && hasSpecialChar && hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 3,
    hasSpecialChar,
    hasUpperCase,
    hasNumber
  }
}
if (hasLowerCase && hasSpecialChar && !hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasLowerCase,
    hasSpecialChar,
    isOver8Char
  }
}

if (hasLowerCase && !hasSpecialChar && hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasLowerCase,
    hasNumber,
    isOver8Char
  }
}
if (!hasLowerCase && hasSpecialChar && hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasSpecialChar,
    hasNumber,
    isOver8Char
  }
}
if (hasLowerCase && !hasSpecialChar && !hasNumber && hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasLowerCase,
    hasUpperCase,
    isOver8Char
  }
}
if (!hasLowerCase && hasSpecialChar && !hasNumber && hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasSpecialChar,
    hasUpperCase,
    isOver8Char
  }
}
if (!hasLowerCase && !hasSpecialChar && hasNumber && hasUpperCase && isOver8Char){
  result ={
    score: 3,
    hasNumber,
    hasUpperCase,
    isOver8Char
  }
}

if (!hasLowerCase && !hasSpecialChar && !hasNumber && hasUpperCase && isOver8Char){
  result ={
    score: 2,
    hasUpperCase,
    isOver8Char
  }
}
if (!hasLowerCase && !hasSpecialChar && hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 2,
    hasNumber,
    isOver8Char
  }
}
if (!hasLowerCase && hasSpecialChar && !hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 2,
    hasSpecialChar,
    isOver8Char
  }
}
if (hasLowerCase && !hasSpecialChar && !hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 2,
    hasLowerCase,
    isOver8Char
  }
}
if (!hasLowerCase && !hasSpecialChar && hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasNumber,
    hasUpperCase
  }
}
if (!hasLowerCase && hasSpecialChar && !hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasUpperCase,
    hasSpecialChar
  }
}
if (hasLowerCase && !hasSpecialChar && !hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasLowerCase,
    hasUpperCase
  }
}
if (!hasLowerCase && hasSpecialChar && hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasSpecialChar,
    hasNumber
  }
}
if (hasLowerCase && !hasSpecialChar && hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasLowerCase,
    hasNumber
  }
}
if (hasLowerCase && hasSpecialChar && !hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 2,
    hasLowerCase,
    hasSpecialChar
  }
}
if (hasLowerCase && !hasSpecialChar && !hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 1,
    hasLowerCase
  }
}
if (!hasLowerCase && hasSpecialChar && !hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 1,
    hasSpecialChar
  }
}
if (!hasLowerCase && !hasSpecialChar && hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 1,
    hasNumber
  }
}
if (!hasLowerCase && !hasSpecialChar && !hasNumber && hasUpperCase && !isOver8Char){
  result ={
    score: 1,
    hasUpperCase
  }
}
if (!hasLowerCase && !hasSpecialChar && !hasNumber && !hasUpperCase && isOver8Char){
  result ={
    score: 1,
    isOver8Char
  }
}
if (!hasLowerCase && !hasSpecialChar && !hasNumber && !hasUpperCase && !isOver8Char){
  result ={
    score: 0
  }
}


  return result;

}

module.exports = estimateStrength;