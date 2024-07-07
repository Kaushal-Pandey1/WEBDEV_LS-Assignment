
const images = [
    'Dekstop.jpg',
    'Dekstop2.jpg',
    'in game screen.png',
    'ok.jpg',
    'okkk.jpg'
]



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


let currentindex =0; 




setInterval(() => {
    currentindex = (currentindex+1)% images.length;
    
    document.querySelector(".Display").src = images[currentindex];
   
}, 3500);

