let bookposting ;

const bookPost = async (answer) =>{
    let count = 0;
    if(answer){
        let keyword = answer.length > 0 ? answer[0].keyword : answer.keyword
        const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${keyword}`
        
        //fetch(api주소, {header : Authorization : 'KaKaoAK restapikey'})
        const result = await fetch(url,{
            method : "GET",
            headers : {Authorization: "KakaoAK 6b3776a709af1d7c758d1c501b5399d4"},
        })
        .then((res) => {
            return res.json()
        })
        .then((res)=>{
            console.log(res)
            bookposting = JSON.stringify(res)
            printAnswer(bookposting)
        })
        .catch((err) => {
            console.log("bookpost error")
        })
    }
};

//submit
$form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addFeel();
    Loading();
    addQuestion();
    sendQuestion(question);
    apiPost();
    bookPost();
    printAnswer();
})
