

let question;

function addQuestion(){
    question = `${genreData.join(',')} ${genreData.length === 0 ? '' : '장르를 좋아하는'} ${personalData[0]}${personalData[1] === "" ? '':' '}${personalData[1]}${personalData[1] === "" ?'가':'이'} 읽기 좋은 책을 json형태로 추천해줘`
}


// 질문과 답변 저장
let data = [
    {
        role: "system",
        content: "assistant는 유능한 책 마스터이다.",
    },{
        role: "system",
        content: "assistant는 항상 책 한 권만 추천한다.",
    },{
        role: "user",
        content : `스릴러 장르를 좋아하는 20대 남성의 맞는 책을 추천해주고, json 형태로 답변을 줘 내가 원하는 형태는 [{
            answer :'스릴러 장르를 좋아하는 20대 남성에게 추천 할 책은 '죽이는 호러 스릴러 웹툰' 입니다.',
            keyword : '죽이는 호러 스릴러 웹툰',
        }] 이야`,
    },{
        role: "assistant",
        content:`${book = [{
            "answer" : '스릴러 장르를 좋아하는 20대 남성에게 추천 할 책은 "죽이는 호러 스릴러 웹툰" 입니다.',
            "keyword" : "죽이는 호러 스릴러 웹툰",
        }]}`,
    }
];


// 화면에 뿌려줄 데이터, 질문들
let questionData = [];

// input에 입력된 질문 받아오는 함수
// $input.addEventListener("input", (e) => {
//     question = e.target.value;
// });

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
    if (question) {
        data.push({
        role: "user",
        content: question,
        });
        questionData.push({
        role: "user",
        content: question,
        });
    }

};

// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
    if(answer){
        if(isJSON(answer)){
            Loading(data)
            let answerData = JSON.parse(answer)
            console.log(answer)
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
            let div = document.createElement("div")
            let p = document.createElement("p")
            

            img.setAttribute("src",`${answerData.documents[0].thumbnail}`)
            h2.innerText = `${answerData.documents[0].title}`
            p.innerText = `${answerJson ? answerJson.answer ?
                answerJson.answer : answerJson[0].answer : ''}`

            $form.innerHTML = '';

            $form.classList.add("bg-white")
            $form.classList.add("disfl")
            $form.classList.add("justify-center")
            $form.classList.add("color-static")
            $form.classList.add("flex-direct")
            $form.classList.add("border-round")
            
            h2.classList.add("font-2")
            p.classList.add("font-1")

            div.appendChild(img)
            $form.appendChild(div);
            $form.appendChild(h2)
            $form.appendChild(p)
            createContentBtn();
            
            $content.addEventListener("click",function (){
                $form.appendChild(p)
            
                p += `${answerData.document[0].content}`
            })
        }
        else{
            console.log("error")
        }
    }
}
