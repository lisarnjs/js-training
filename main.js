const firstEl = document.querySelector('.first-week');
const sectionEl = document.querySelector('section.section__first-week');

firstEl.addEventListener('click', ()=>{
    sectionEl.style.display = 'block';
});

// 내 문제 정답 - for문
function for__me() {
    for (let i = 0.1; ;i += 0.1){
        let sqLine = +i.toFixed(1);
        console.log(sqLine);
        // console.log(typeof sqLine)
        let total = sqLine * 4;
        if( total > 21 ) {
            console.log('total = '+total);
            // console.log(typeof total);
            console.log('total이 21을 초과하였습니다.');
            break;
        }
    }
}

// 박정후님 문제
function for__mem1() {
    const receipt = [
        {
            name: '칼국수',
            cost: 10000
        },
        {
            name: '해물칼국수',
            cost: 14000
        },
        {
            name: '왕만두',
            cost: 6000
        },
        {
            name: '소주',
            cost: 4000
        },
        {
            name: '맥주',
            cost: 5000
        }
    ]
    // 내 정답
    for(let i = 0; i < receipt.length; i ++) {
        // 영수증의 짝수가 배열의 홀수번이라고 생각함.
        if (i % 2 === 1) {
            console.log(receipt[i])
        }
    }
}


// 한호준님 문제
function for__mem2() {
    const fuelMil = [23.1, 21.5, 20.1, 19.5, 18.5];
    const price = [3600, 3200, 4000, 2900, 5000];
    // 내 정답
    for (let i = 0; i < 5; i++) {
        if(fuelMil[i] >= 19 && price[i] < 3500) {
            console.log(`${i+1}번째 차량 - 연비 : ${fuelMil[i]} / 가격 : ${price[i]}만원`)
        }
    }
}


// 내 문제 정답 - for in문 
function forIn__me() {
    const obj = {
        name: "lisa",
        age: 21,
        height: 100,
        city: "seoul",
        phone: 12345,
        puppy: "yomi"
    }
    console.log('Only Number')
    for (const prop in obj) {
        // console.log(`${prop} : ${obj[prop]}`)
        // console.log(prop)
        // console.log(obj[prop])
        // console.log(typeof obj[prop])
        if (typeof obj[prop] == 'number' ){
            // console.log('num')
            console.log(`${prop} : ${obj[prop]}`)
        }
    }
}


// 박정후님 문제
function forIn__mem1() {
    const avengers = [
        { 
          name: 'IronMan',
          age: 43
        },
        { 
          name: 'Hulk',
          age: 46
        },
        { 
          name: 'Hawkeye',
          age: 37
        },
        { 
          name: 'SpiderMan',
          age: 21
        },
        { 
          name: 'Thor',
          age: 100
        },
        { 
          name: 'BlackWidow',
          age: 47
        }
    ];
    // 내가 생각한 정답
    let totalAge = 0;
    let averAge;
    for (let index in avengers) {
        totalAge += avengers[index].age
        averAge = totalAge / avengers.length
    }
    console.log('평균 연령 : '+averAge)
}


// 한호준님 문제
function forIn__mem2() {
    let myBmi = {
        weight: 0,
        height: 0,
        bmi: 0
    }
    
    for (const prop in myBmi) {
        if (prop === 'weight') {
            let input = prompt('몸무게를 입력하세요(단위 : kg)')
            myBmi[prop] = parseFloat(input)
        } else if (prop === 'height') {
            let input = prompt('키를 입력하세요(단위 : m)')
            myBmi[prop] = parseFloat(input)
        }
    }
    const calculate = (myBmi.weight / Math.pow(myBmi.height, 2)).toFixed(2)
    myBmi.bmi = calculate
    
    for(const prop in myBmi) {
        console.log(`${prop} : ${myBmi[prop]}`)
    }
}
