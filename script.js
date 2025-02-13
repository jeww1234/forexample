let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

let num = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    num.push(i);
  }
}

console.log(num);

//1 ~ 50 369 -> 짝 33 36 39 -> 짝짝

for (let i = 1; i <= 50; i++) {
  if (Math.floor(i / 10) === 3) {
    // 10의 자리가 3과 3이 아닌것으로 분류류
    //10의 자리가 3일때 369면 짝짝 아니면 짝
    if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
      console.log(i, "짝짝");
    } else {
      console.log(i, "짝");
    }
  } else {
    //10의 자리가 3이 아닌 숫자
    //369면 짝 아니면 i
    if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
      console.log(i, "짝");
    } else {
      console.log(i);
    }
  }
}


let prime = (number) => {
  if (number === 1) {
    console.log("1은 소수가 아니다");
  }
  else if (number === 2){
    console.log("2는 소수다");
  }
  else if (number % 2 === 0){
    console.log("2보다 큰 짝수는 소수가 아니다.");
  }

  const sqrt = Math.sqrt(number);

  for (let i = 3; i <= sqrt; i += 2) {
    //짝수는 어차피 소수가 아니니까 홀수만 검사
    if (number % i === 0) {
        console.log(`${number}은(는) 소수가 아니다.`);
        return;
    }
  }  
  //for 문을 통과하면 소수
  console.log(number, "은 소수다");
};

prime(117);
