// api 요청보내는 함수
let answerJson;
const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
    .then((res) => res.json())
    .then((res) => {
    answerJson = JSON.parse(res.choices[0].message.content)
    bookPost(answerJson);
    console.log(answerJson)
    })
    .catch((err) => {
    console.log(err);
    });
};
