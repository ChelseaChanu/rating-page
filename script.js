const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const button = document.querySelector(".btn");
const rate = document.querySelectorAll(".rate");
const ratedPara = document.querySelector(".score");
const addedPara = document.querySelector(".score");

for(let i=0;i<rate.length;i++){
    document.querySelectorAll(".rate")[i].addEventListener("click",(event)=>{
        let score = event.currentTarget.textContent;
        button.addEventListener("click", ()=>{
            ratingContainer.style.display = "none";
            thankYouContainer.style.display = "block";
            ratedPara.style.display="block";
            ratedPara.innerHTML = "You selected "+score+" out of 5";
            ratedPara.classList.add("rated");
            addedPara.classList.add("score-para");
        });
    });
}
// button.addEventListener("click", ()=>{
//     container.innerHTML = ''
// });