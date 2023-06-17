function Loading (printAnswer){
    $form.innerHTML = '';
    if(!printAnswer){
        let div = document.createElement("div")
        let img = document.createElement("img")
        let p = document.createElement("p")

        div.classList.add("load")
        img.setAttribute("src","./src/img/Book_loading.png")
        p.classList.add("loadingM")
        p.innerText = '10 ~ 20 초 정도의 시간이 걸리는 점 양해 부탁드립니다.'

        div.appendChild(p)
        div.appendChild(img)
        $form.appendChild(div)
    }
}