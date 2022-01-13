const firstEl = document.querySelector('.first-week');
const secondEl = document.querySelector('.second-week');
const sectionEl = document.querySelector('section.section__first-week');
const secondSection = document.querySelector('section.section__second-week');
let zIndex = 0;
firstEl.addEventListener('click', ()=>{
    // sectionEl.style.zIndex = zIndex++;
    sectionEl.style.display = 'block';
    secondSection.style.display = 'none';
});
secondEl.addEventListener('click', () => {
    // secondSection.style.zIndex = zIndex++
    sectionEl.style.display = 'none';
    secondSection.style.display = 'block';
})

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

// for of문 - 내 문제 내 정답
function forOf__me() {
    let sentence = "Rome is not built in a day"
    let count = 0;
    let findAlphabet = prompt("찾고싶은 알파벳을 입력하세요",'알파벳');
    for(const value of sentence) {
        if (value.toLowerCase() === findAlphabet.toLowerCase()) count+=1;
    }
    console.log(findAlphabet+"의 개수 : "+count);
}

// for of문 - 팀원1문제 내 정답
function forOf__mem1() {
    const snackBag = [
        { name: "썬칩", price: 2500 },
        { name: "자가비", price: 1500 },
        { name: "쵸코송이", price: 1000 },
        { name: "칸쵸", price: 1700 },
        { name: "쫀득 초코칩", price: 2500 },
        { name: "코카콜라", price: 1800 }
    ];

    function saleCoupon() {
        let priceSum = 0;
        for(let value of snackBag){
            priceSum+=value.price;
        }
        if(priceSum>=10000){
            priceSum = priceSum * (1-0.2)
        }
        return priceSum;
    }
    console.log(`${saleCoupon()}`);
}

// for of문 - 팀원2문제 내 정답
function forOf__mem2() {
    const students = [
        {number: 1, name: "kelly"},
        {number: 2, name: "sam"},
        {number: 3, name: "amy"},
        {number: 4, name: "tom"},
        {number: 5, name: "steve"}
    ];

    const randomNum = Math.floor(Math.random()*10) % students.length + 1;

    for(const value of students) {
        if(randomNum===value.number){
            console.log(`우리반 주번 : ${value.name}`)
        }
    }
}

// foreach() - 내 문제 내 정답
// 홀수, 짝수의 합을 구해라
function forEach__me() {
    const numbers = [12, 13, 21, 4, 51, 62, 48];
    let even = 0;
    let odd = 0;
    numbers.forEach(function(element) {
        if(element % 2 === 0)even+=element;
        else odd+=element;
    });
    console.log(`홀수: ${odd} / 짝수: ${even}`);
}

// forEach() - 팀원1문제 내 정답
function forEach__mem1() {
    const list = [
        { name: "호빵맨", gender: "male", type: "vip" },
        { name: "식빵맨", gender: "female", type: "normal" },
        { name: "세균맨", gender: "male", type: "vip" },
        { name: "치즈맨", gender: "male", type: "normal" },
        { name: "카레맨", gender: "female", type: "vip" },
        { name: "원펀맨", gender: "male", type: "normal" },
        { name: "후래쉬맨", gender: "female", type: "normal" },
        { name: "매가맨", gender: "male", type: "vip" },
        { name: "백터맨", gender: "female", type: "normal" },
    ];

    list.forEach(element => {
        if(element.type === "vip"){
            console.log(`vip : ${element.name}`)
        }
    })
}

// foreach() - 팀원2문제 내 정답
function forEach__mem2() {
    let numbersArr = [];

    for (let i = 0; i < 100; i++) {
        numbersArr.push(i+1);
    }

    numbersArr.forEach((element, index) => {
        if (index%2===1 && element%5===0){
            console.log(`Value: ${element}, Index: ${index}`)
        }
    })
}
