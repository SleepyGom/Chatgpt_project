const $form = document.querySelector("form")
const $startBtn = document.querySelector(".btn-start")

// 시작하기 눌렀을 시에 반응
$startBtn.addEventListener("click" ,function(){
    //(positon :fixed), (top,left: 0), (로고 크기 2rem 조정) ,(margin top,left : 30px;),(line-height: 2.5rem)
    //(transform :transltate(0,0))
    document.querySelector(".logo").classList.add("after-logo")

    //(margin-left:12px 조정)
    document.querySelector(".logo h1 span").classList.add("after-span")
    
    //버튼 클릭시 opacity 조정과 display none,block 조정
    document.querySelector(".fir-que").classList.add("disbl")
    $startBtn.classList.add("op0")
    
    setTimeout(()=>{
        $startBtn.classList.add("disno")
        document.querySelector(".fir-que").classList.add("op1")
    },1000)
})