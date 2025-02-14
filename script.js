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

//숫자를 10으로 나누면 가장 오른쪽 숫자를 버릴 수 있다!
//자리수에 3,6,9 포함되면 count++
//count 갯수만큼 짝 출력
//count가 0이면 숫자 출력
function search(number){
  let count = 0;
  while(number > 0){
    const TSN = number % 10;
    if(TSN === 3 || TSN === 6 || TSN === 9){
      count++;
    }
    number = Math.floor(number / 10);
  }
  return count;
}

for(let i = 1; i < 1000; i++){
  const count = search(i);
  if(count > 0){
    let result = "";
    for(let j = 0; j < count; j++){
      result += "짝";
    }
    console.log(i, result);
  }else{
    console.log(i);
  }
}


let prime = (number) => {
  if (number === 1) {
    console.log("1은 소수가 아니다");
    return;
  }
  else if (number === 2){
    console.log("2는 소수다");
    return;
  }
  else if (number % 2 === 0){
    console.log("2보다 큰 짝수는 소수가 아니다.");
    return;
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
