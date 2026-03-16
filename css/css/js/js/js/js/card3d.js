‎const card = document.getElementById("card");
‎card.classList.add("auto-rotate");
‎
‎card.addEventListener("mouseover", () => {
‎    card.style.animationPlayState = "paused";
‎});
‎card.addEventListener("mouseout", () => {
‎    card.style.animationPlayState = "running";
‎});
‎
