

let obj = {
    1: '#FFB6C1', 
    2:'#ADD8E6', 
    3:'#90EE90', 
    4:'#FFFFE0', 
    5:'#F08080', 
    6:'#87CEFA',  
    7:'#FFA07A', 
    8:'#FAFAD2', 
    9:'#E0FFFF', 
    10:'#20B2AA'  
};

setInterval(() => {
    let liElements = document.querySelectorAll(".Navbar ul li");
    liElements.forEach((li) => {
        let a = Math.floor(1 + Math.random() * 9);
        let color = obj[a];
        li.style.backgroundColor = color;
    });
}, 2000);


const questionCards = document.querySelectorAll('.QuestionCard');
let currIndex = 0;

function showSlide(index) {
    questionCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currIndex = (currIndex + 1) % questionCards.length;
    showSlide(currIndex);
}

// Initial display of the first slide
showSlide(currIndex);






// console.log("Hello")
// console.log(document.querySelector(".red .Options li").textContent);

let chosen1 = document.querySelectorAll(".red .Options img");

chosen1.forEach(img => {
    img.addEventListener("click", () => {
      
        

document.querySelectorAll(".red .Options img" ).forEach(imag =>{
            if(imag.parentElement.textContent.trim() != "Plumber"){
                        
                    imag.src = "incorrect.svg"; 
            }

                else{
                      imag.src= "correct.svg"; 
                } 
             })




            setTimeout(() => {
                nextSlide();

            }, 2500);
});
});



let chosen2 = document.querySelectorAll(".green .Options img");
chosen2.forEach(img => {
    img.addEventListener("click", () => {
        

        document.querySelectorAll(".green .Options img" ).forEach(imag =>{

                        if(imag.parentElement.textContent.trim() != "Luigi"){
                                
                            imag.src = "incorrect.svg"; 
                    }
        
                        else{
                              imag.src= "correct.svg"; 
                        } 
                     })


                     
            setTimeout(() => {
                nextSlide();

            }, 2500);
       

    });
});





let chosen3 = document.querySelectorAll(".red2 .Options img");
chosen3.forEach(img => {
    img.addEventListener("click", () => {
        
        document.querySelectorAll(".red2 .Options img" ).forEach(imag =>{

                        if(imag.parentElement.textContent.trim() != "Dinosaur"){
                                
                            imag.src = "incorrect.svg"; 
                    }
        
                        else{
                              imag.src= "correct.svg"; 
                        } 
                     })



                     
            setTimeout(() => {
                nextSlide();

            }, 2500);
    });
});






let chosen4 = document.querySelectorAll(".Wow .Options img");
chosen4.forEach(img => {
    img.addEventListener("click", () => {
        
        document.querySelectorAll(".Wow .Options img" ).forEach(imag =>{

                        if(imag.parentElement.textContent.trim() != "Super Mushroom"){
                                
                            imag.src = "incorrect.svg"; 
                    }
        
                        else{
                              imag.src= "correct.svg"; 
                        } 
                     })


                     
            setTimeout(() => {
                nextSlide();

            }, 2500);
    });
});







let chosen5 = document.querySelectorAll(".blue .Options img");
chosen5.forEach(img => {
    img.addEventListener("click", () => {
        
        document.querySelectorAll(".blue .Options img" ).forEach(imag =>{

                        if(imag.parentElement.textContent.trim() != "Mushroom Kingdom"){
                                
                            imag.src = "incorrect.svg"; 
                    }
        
                        else{
                              imag.src= "correct.svg"; 
                        } 
                     })

                     setTimeout(() => {
                        nextSlide();
                        
const audioElement = document.getElementById("myAudio");
                          audioElement.play();
                        }, 2500);      

    });
});



