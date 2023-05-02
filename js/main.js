let landingPage = document.querySelector(".landing-page");
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
setInterval(()=>{
    //randomColor
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

},1000)

//setting-box
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

     this.classList.toggle("fa-spin");
  
    document.querySelector(".settings-box").classList.toggle("open");
    
  };
//switch color
const colorList=document.querySelectorAll(".colors-list li");
colorList.forEach(li => {
  li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
   localStorage.setItem("color-option",e.target.dataset.color)
  })
  
});
