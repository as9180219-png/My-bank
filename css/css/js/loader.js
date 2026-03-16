‎window.addEventListener("load", () => {
‎    setTimeout(() => {
‎        const loader = document.getElementById("loader");
‎        loader.style.opacity = "0";
‎        loader.style.transition = "0.8s";
‎
‎        setTimeout(() => {
‎            loader.style.display = "none";
‎            document.getElementById("loginPage").classList.remove("hidden");
‎        }, 800);
‎    }, 1500);
‎});
‎
