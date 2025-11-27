let toggleButton = document.querySelector(".switch-theme");



toggleButton.addEventListener("click", function (){
    switch(toggleButton.textContent){
        case "Dark Mode": /* change to light mode */
            let darkBody = document.querySelector(".body-color");
            if(darkBody){
                darkBody.setAttribute("class", "body-white-theme");
                toggleButton.textContent = "Light Mode";    
            }

            let expCatogoriesLight = document.querySelectorAll(".exp-category")
            /* this only applicabel in experience.html */
            if (expCatogoriesLight){
                
                /* here i will loop through all the category in experience page */
                for(let i = 0; i <expCatogoriesLight.length; i++){
                    expCatogoriesLight[i].className = "exp-category-light hover-animation"
                }
            }
            break;
            
        case "Light Mode": /* change to Dark Mode */
            let lightBody = document.querySelector(".body-white-theme");
            if(lightBody){
                lightBody.setAttribute("class", "body-color");
                toggleButton.textContent = "Dark Mode";
                
            }

            let expCatogoriesDark = document.querySelectorAll(".exp-category-light")
            /* this only applicabel in experience.html */
            if (expCatogoriesDark){
                
                /* here i will loop through all the category in experience page */
                for(let i = 0; i <expCatogoriesDark.length; i++){
                    expCatogoriesDark[i].className = "exp-category hover-animation"
                }
            }
            break;
    }
});