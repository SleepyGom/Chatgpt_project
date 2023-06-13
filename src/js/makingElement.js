const $form = document.querySelector("form");
const $startBtn = document.querySelector(".start");
const $nextBtn = document.querySelector(".next");
const $data = document.querySelectorAll("fieldset div .data")
const $field = document.querySelector("fieldset")
const $input = document.querySelectorAll("div input")
const $subBtn = document.querySelector(".test button")


    //input 생성 및 question 폼 구성
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
            div.classList.add("textdata")
            div.appendChild(textarea);
            $field.appendChild(div)
        }
        }
    }

