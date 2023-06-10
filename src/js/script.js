const $form = document.querySelector("form");
const $startBtn = document.querySelector(".start");
const $nextBtn = document.querySelector(".next");
const $data = document.querySelectorAll(".data")
const $field = document.querySelector("fieldset")
const personalData = [];

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


    let div = document.createElement("div")
    let input = document.createElement("input")
    let label = document.createElement("label")    


// next 버튼
    let count = 0;
    $nextBtn.addEventListener("click",function(){
        count += 1;
        console.log(count)
        // 연령 데이터 저장
        for(i of $data){
            if(i.checked){
                personalData.push(i.value)
                console.log(personalData)
            }
        }
        document.querySelector(".fir-que").classList.remove("op1")
        setTimeout(()=>{
            document.querySelector("form h2").innerText = queData[0][count];
            document.querySelector("form p").innerText = queData[1][count];

            document.querySelector(".fir-que").classList.add("op1")

            $field.innerHTML = ''


            for(let i=0; i < quedataOB[0].length; i++){
            createinput()     
            input.setAttribute("value",`${queDataObValue[0][i]}`)
            label.setAttribute("for",`gender${i}`)
            input.id = `gender${i}`
            label.innerHTML = `<p>${quedataOB[0][i]}</p>`
            }
        },1000)
    })

    function createinput(){

        input.setAttribute("type","radio")
        input.setAttribute("name","gender")
        input.classList.add("data")

        $field.appendChild(div)
        div.appendChild(input)
        div.appendChild(label)
    }

    

    const quedataOB ={
        0: ["선택 안함","남자","여자"],
        1: ["로맨스","SF","액션","무협"]
    }

    const queDataObValue ={
        0:[" ", "남성","여성"],
        1:["로맨스","SF","액션","무협"]
    }
    
    const queData = {
        0:["","성별", "관심 분야", "오늘의 기분"],
        1:["","본인의 성별을 선택해 주세요","오늘 하루의 기분이나 지금의 감정에 대해서 간략하게 설명해 주세요"]
}

    console.log(quedataOB[1][3])
    
