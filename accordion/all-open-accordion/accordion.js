window.addEventListener("load", function () {
  const container = document.querySelector(".panel-container");
  const headers = container.querySelectorAll(".panel-header");
  console.log(headers);

    for(let i =0; i<headers.length; i++) {
      headers[i].addEventListener("click",function(){
        const icon = headers[i].lastElementChild;
        const contents = document.querySelectorAll(".panel-content");
        
        if(contents[i].classList.contains("active")) {
          contents[i].classList.remove("active");
            icon.style.transform = "rotate(0deg)";
            return;
        }

          contents[i].classList.add("active");
          icon.style.transform = "rotate(180deg)";
        
      })
    }
  

});
