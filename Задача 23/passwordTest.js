function testPassword(password) {
  let score = 0;
  const minLength = 8;
  const minScore = 3;
  const maxScore = 10;

  // Проверка длины пароля
  if (password.length >= minLength) {
    score++;
  }

  // Проверка наличия разных типов символов
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  if (hasLowercase) {
    score++;
  }
  if (hasUppercase) {
    score++;
  }
  if (hasNumber) {
    score++;
  }
  if (hasSpecialChar) {
    score++;
  }

  // Вывод оценки сложности пароля
  if (score >= minScore && score <= maxScore) {
    console.log(`Оценка сложности пароля: ${score} из ${maxScore}`);
  } else if (score < minScore) {
    console.log(`Оценка сложности пароля: ${score} из ${maxScore}`);
    console.log("Пароль слишком слабый. Рекомендации для улучшения:");
    console.log("- Используйте более длинный пароль (минимум 8 символов)");
    console.log(
      "- Включите в пароль символы разных типов (буквы в разных регистрах, цифры, специальные символы)"
    );
  } else {
    console.log(`Оценка сложности пароля: ${score} из ${maxScore}`);
    console.log("Пароль надежный!");
  }
}

testPassword("password123"); // 4 из 10
testPassword("Password"); // 2 из 10
testPassword("S3cureP@ssw0rd"); // 7 из 10
testPassword("123456");
