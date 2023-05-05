//check color in localstorage
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main--color', mainColors);
   //remove active class from ColorList
   document.querySelectorAll(".colors-list li").forEach(Element=>{
    Element.classList.remove("active");
    if(Element.dataset.color== mainColors){
      //Add active Class
    Element.classList.add("active")
    }
  
     })
     //add activeClass on element
     
}

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
const randomBackgroundEL=document.querySelectorAll(".random-backgrounds span");
randomBackgroundEL.forEach(span => {
  span.addEventListener("click",(e)=>{
   //remove active Class from All Children
   e.target.parentElement.querySelectorAll(".active").forEach(Element=>{
  Element.classList.remove("active");


   })
    // add active class on tareget
   e.target.classList.add("active")
  })
  
});
//Random BackgroundOption
const colorList=document.querySelectorAll(".colors-list li");
colorList.forEach(li => {
  li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
   localStorage.setItem("color-option",e.target.dataset.color);

   //remove active Class from All Children
   e.target.parentElement.querySelectorAll(".active").forEach(Element=>{
  Element.classList.remove("active");

   })
    // add active class on tareget
   e.target.classList.add("active")
  })
  
});
let background_option=true;







// Select Skills Selector
let ourSkills = document.querySelector(".skills");



window.onscroll = function () {

  // // Skills Offset Top
  // let skillsOffsetTop = ourSkills.offsetTop;

  // // Skills Outer Height
  // let skillsOuterHeight = ourSkills.offsetHeight;

  // // Window Height
  // let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >  (ourSkills.offsetTop - 200)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    
    console.log(allSkills)

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};

//create pop up
let ourGallery=document.querySelectorAll(".gallery img");
ourGallery.forEach((img)=>{
  img.addEventListener("click",(e)=>{
    //create overlay
    let overlay=document.createElement("div")
    overlay.className="overlay-popup";
    document.body.appendChild(overlay)

  //create popBox
  let popBox=document.createElement("div");
  popBox.className="pop-Box"


  //create heading
  let headingBox=document.createElement("h3");
  let imgText=document.createTextNode(img.alt);
  headingBox.appendChild(imgText);
  popBox.appendChild(headingBox);
    //create image
    let imgOverlay=document.createElement("img");
    imgOverlay.src=img.src;

    popBox.appendChild(img);
    document.body.appendChild(popBox);


    //create Button
    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = 'close-button';
    popBox.appendChild(closeButton);


  })
})
//close Pop-up
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".overlay-popup").remove();

  }

});
/*toggle-menu*/
let tLinks = document.querySelector(".links");
let toggle=document.querySelector(".toggle-menu");
toggle.addEventListener("click",function(e){
  e.stopPropagation();
  tLinks.classList.toggle("open");
})