const $form = document.querySelector("form");
const $startBtn = document.querySelector(".start");
const $nextBtn = document.querySelector(".next");
const $data = document.querySelectorAll("fieldset div .data")
const $field = document.querySelector("fieldset")
const $input = document.querySelectorAll("div input")

const personalData = [];
const genreData = [];

// start 버튼
    $startBtn.addEventListener("click" ,function(){
        //(positon :fixed), (top,left: 0), (로고 크기 2rem 조정) ,(margin top,left : 30px;),(line-height: 2.5rem)
        //(transform :transltate(0,0))
        document.querySelector(".logo").classList.add("after-logo")

        //(margin-left:12px 조정)
        document.querySelector(".logo h1 span").classList.add("after-span")
        
        //버튼 클릭시 opacity 조정과 display none,block 조정
        document.querySelector(".fir-que").classList.add("disbl")
        $startBtn.classList.add("op0")
        $nextBtn.classList.add("disfl")

        setTimeout(()=>{
            $startBtn.classList.add("disno")
            document.querySelector(".fir-que").classList.add("op1")
            $nextBtn.classList.add("op1")
        },1000)
    })




    // next 버튼
    let queTitleCount = 0;
    let queContentCount = 0;
    $nextBtn.addEventListener("click",function(){
        // 연령 데이터 저장
        const selectedInputs = document.querySelectorAll("input:checked");
        selectedInputs.forEach(function (input) {
            if (input.type === "radio") {
            personalData.push(input.value);
            } else if (input.type === "checkbox") {
            genreData.push(input.value);
            }
        });

        console.log(genreData)
        console.log(personalData)

        // 애니메이션
        document.querySelector(".fir-que").classList.remove("op1")
        setTimeout(()=>{
            document.querySelector("form h2").innerText = queData[0][queTitleCount];
            document.querySelector("form p").innerText = queData[1][queTitleCount];

            document.querySelector(".fir-que").classList.add("op1")

        // 화면 데이터 전환
        if(queContentCount < 2){
            $field.innerHTML =''
        }
        else{
            $field.innerHTML = '';
            document.querySelector(".test").innerHTML = `<button class="btn next op1 disbl" type = 'submit'><p>책 찾아보기</p></button>`
        }
        createinput()     
        
        queTitleCount += 1;
        queContentCount += 1;
        console.log(queContentCount)

        },1000)
    })

    
    function createinput(){
        for(let i =0; i < quedataOB[queContentCount].length; i++){
        // Element 선언
        let div = document.createElement("div")
        let input = document.createElement("input")
        let label = document.createElement("label")
        let textarea = document.createElement("textarea")

        // Element 속성 설정
        if(queContentCount === 1){
            input.setAttribute("type","checkbox")
        }
        else{
            input.setAttribute("type","radio")
        }

        if(i === 0 && queContentCount < 1 ){
            input.setAttribute("checked","checked")
        }

        
        input.setAttribute("name",queID[queTitleCount])
        input.setAttribute("value",`${queDataValue[queContentCount][i]}`)
        label.setAttribute("for",`${queID[i]}${i}`)
        
        input.classList.add("data");
        div.classList.add("que-wrap");
        input.id = `${queID[i]}${i}`;
        label.innerHTML = `<p>${quedataOB[queContentCount][i]}</p>`
    
        if(queContentCount === 2){
            input.setAttribute("type","textarea")
        }

        // Element 구성
        if(queContentCount < 2){
            div.appendChild(input);
            div.appendChild(label);
            $field.appendChild(div);
        }
        else{
            textarea.setAttribute("placeholder","오늘 하루 기분이나 느낌을 말해주세요.")
            let p = document.createElement("p")
            div.classList.add("textdata")
            div.appendChild(textarea);
            textarea.appendChild(p)
            $field.appendChild(div)
        }
        }
    }

    
    // 데이터
    const queData = {
        0:["성별", "관심 분야", "오늘의 기분"],
        1:["본인의 성별을 선택해 주세요","관심있는 분야에 대해서 선택해 주세요.","오늘 하루의 기분이나 지금의 감정에 대해서 간략하게 설명해 주세요."]
    }
    
    const queID = {
        0:["gender"],
        1:["genre"],
        2:["feeling"]
    }

    const quedataOB = {
        0: ["선택 안함","남자","여자"],
        1: ["로맨스","SF","액션","무협","판타지","추리","스릴러","공포","게임"],
        2: [""]
    }

    const queDataValue = {
        0:[" ", "남성","여성"],
        1: ["로맨스","SF","액션","무협","판타지","추리","스릴러","공포","게임"],
        2:[""]
    }
    

