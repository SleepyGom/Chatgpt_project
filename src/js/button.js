// start 버튼
$startBtn.addEventListener("click" ,function(){
    //(positon :fixed), (top,left: 0), (로고 크기 2rem 조정) ,(margin top,left : 30px;),(line-height: 2.5rem)
    //(transform :transltate(0,0))
        document.querySelector(".logo").classList.add("after-logo")
        document.querySelector(".logo").classList.add("wi-100")

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
    

    //next button
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
            console.log(genreData.join(','))
            }
        });

        // 애니메이션
        document.querySelector(".fir-que").classList.remove("op1")
        setTimeout(()=>{
            document.querySelector("form h2").innerText = queData[0][queTitleCount];
            document.querySelector("form p").innerText = queData[1][queTitleCount];

            document.querySelector(".fir-que").classList.add("op1")

        // 화면 데이터 전환
        if(queContentCount < 2){
            $field.innerHTML =''
            createinput()     
        }
        else{
            $field.innerHTML = '';
            document.querySelector(".test").classList.add('disno');
            createinput()
            $form.innerHTML += `<button class="btn subbtn op1 disbl" type = 'submit'><p>책 찾아보기</p></button>`
        }
        
        queTitleCount += 1;
        queContentCount += 1;

        },1000)
    })

    // submit 시에 feelData로 textarea value값 저장
    function addFeel(){
        const $textarea = document.querySelector("textarea")
        feelData.push($textarea.value);
    }