const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRating = document.getElementById("selected-rating");
const backBtn = document.querySelector(".back-btn");




let selectedValue = null;



// event listeners for the rating buttons
ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      
        
        selectedValue = button.textContent;
       
       
         selectedRating.textContent = `You selected ${selectedValue} out of 5`;
          button.classList.add("selected");
           console.log(button.classList);
          
       
     
       
        console.log(selectedRating.textContent);
    });
});



// event listener for the submit button
submitBtn.addEventListener("click", () => {
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
});


backBtn.addEventListener("click", () => {
    thankYouCard.style.display = "none";
    ratingCard.style.display = "flex";
    selectedRating.textContent = "";
    selectedRating.classList.remove("selected-rating");
     ratingButtons.forEach((button) => {
  
    button.classList.remove("selected");


       
    });
  


});
