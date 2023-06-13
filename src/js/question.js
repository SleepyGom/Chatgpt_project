let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;


let question;

function addQuestion(){
    question = `${genreData.join(',')} ${genreData.join(',') === undefined ? '' : '장르를 좋아하는'} ${personalData[0]}${personalData[1] === "" ? '':' '}${personalData[1]}${personalData[1] === "" ?'가':'이'} 읽기 좋은 책을 json형태로 추천해줘`
}


// 질문과 답변 저장
let data = [
    {
        role: "system",
        content: "assistant는 유능한 책 마스터이다.",
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

const printQuestion = async () => {
    if (question) {
        let li = document.createElement("li");
        li.classList.add("question");
        questionData.map((el) => {
        li.innerText = el.content;
        });
        $form.innerHTML = ''
        $form.appendChild(li);
        questionData = [];
        question = false;
    }
    };    

    function isJSON(data) {
        try {
            JSON.parse(data);
            return true;
        } catch (error) {
            return false;
        }
    }


let answerJson ;
// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
    console.log(answer)
    if(isJSON(answer)){
        answerJson = JSON.parse(answer);
        console.log(answerJson)
        let div = document.createElement("div");
        $form.innerHTML = ''
        div.classList.add(`answer`);

        
        $form.appendChild(div);      
        div.innerHTML += `<p class="bookinfo">${answerJson[0].answer}</p>
        <br/>
        <p>${answerJson[0].keyword}</p>`;
    }
    else{
        console.log(answer)
    }
};
