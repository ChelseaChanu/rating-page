const container = document.querySelector(".container");
const mainContent = document.querySelector(".main-content");
const imageDiv = document.querySelector(".img");
const image = document.querySelector(".img img");
const ratedPara = document.querySelector(".score");
const addedPara = document.querySelector(".score");
const header = document.querySelector(".content h1");
const para = document.querySelector(".content p");
const rating = document.querySelector(".rating");
const rate = document.querySelectorAll(".rate");
const button = document.querySelector(".btn");
const srcImage = "images/illustration-thank-you.svg";

for(let i=0;i<rate.length;i++){
    document.querySelectorAll(".rate")[i].addEventListener("click",(event)=>{
        let score = event.currentTarget.textContent;
        button.addEventListener("click", ()=>{
            container.classList.add("thank-you");
            mainContent.classList.add("thank-you-content");
            imageDiv.classList.add("thanks-image");
            image.setAttribute("src",srcImage);
            ratedPara.style.display="block";
            ratedPara.innerHTML = "You selected "+score+" out of 5";
            ratedPara.classList.add("rated");
            addedPara.classList.add("score-para");
            header.innerHTML = "Thank you!";
            para.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
            para.classList.add("thank-msg-p");
            rating.style.display = "none";
            button.style.display = "none";
        });
    });
}
// button.addEventListener("click", ()=>{
//     container.innerHTML = ''
// });