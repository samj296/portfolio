let toggleButton = document.querySelector(".switch-theme-dark");
if(!toggleButton){
    toggleButton = document.querySelector(".switch-theme-light");
}


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
            if (expCatogoriesLight.length>0){
                
                /* here i will loop through all the category in experience page */
                for(let i = 0; i <expCatogoriesLight.length; i++){
                    expCatogoriesLight[i].className.replace = "exp-category-light"
                }
            }
            toggleButton.setAttribute("class", "switch-theme-light") 
            break;
            
        case "Light Mode": /* change to Dark Mode */
            let lightBody = document.querySelector(".body-white-theme");
            if(lightBody){
                lightBody.setAttribute("class", "body-color");
                toggleButton.textContent = "Dark Mode";
                
            }

            let expCategoriesDark = document.querySelectorAll(".exp-category-light")
            /* this only applicabel in experience.html */
            if (expCategoriesDark.length>0){
                
                /* here i will loop through all the category in experience page */
                for(let i = 0; i <expCategoriesDark.length; i++){
                    expCategoriesDark[i].className.replace = "exp-category"
                }
            }
            toggleButton.setAttribute("class", "switch-theme-dark") 
            break;
    }
});
