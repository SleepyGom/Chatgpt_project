function Loading (printAnswer){
    $form.innerHTML = '';
    if(!printAnswer){
        let img = document.createElement("img")

        img.classList.add("load")

        img.setAttribute("src","./src/img/Book_loading.png")
        
        $form.appendChild(img)
    }
}