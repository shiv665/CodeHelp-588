document.addEventListener('DOMContentLoaded', function () {

    
document.addEventListener('animationend',function shiv(event){
    if (event.animationName === "fadeAndGrow"){
        const element=document.querySelector('.fader');
        element.style.display='none';
    }
      
});

const change=document.querySelector('.YOOY');
change.style.color='blue';
const arr = [
    'P', 'PY', 'PYT', 'PYTH', 'PYTHO', 'PYTHON', 'PYTHON', 'PYTHON', 'PYTHON', 'PYTHON', 'PYTHON', 'PYTHON', 'PYTHON',
    'J', 'JA', 'JAV', 'JAVA', 'JAVA', 'JAVA', 'JAVA', 'JAVA', 'JAVA', 'JAVA', 'JAVA',
    'C', 'C+', 'C++', 'C++', 'C++', 'C++', 'C++', 'C++', 'C++', 'C++',
    '', 'D', 'DS', 'DSA', 'DSA', 'DSA', 'DSA', 'DSA', 'DSA', 'DSA', 'DSA',
    '', 'M', 'Ma', 'Mac', 'Mach', 'Machi', 'Machin', 'Machine', 'Machine ', 'Machine L', 'Machine Le', 'Machine Lea', 'Machine Lear',
    'Machine Learn', 'Machine Learni', 'Machine Learnin', 'Machine Learning', 'Machine Learning', 'Machine Learning', 'Machine Learning',
    'Machine Learning', 'Machine Learning', 'Machine Learning', 'Machine Learning',
    '', 'W', 'We', 'Web', 'Web D', 'Web De', 'Web Dev', 'Web Deve', 'Web Devel', 'Web Develo', 'Web Develop',
    'Web Developm', 'Web Developme', 'Web Developmen', 'Web Development', 'Web Development', 'Web Development', 'Web Development',
    'Web Development', 'Web Development'
];

let index=0;

setInterval(function changef(){

    change.textContent=arr[index];
    index=(index+1)%arr.length;

},100);
let idit = document.querySelector('#idiot');
let exploreDiv = document.querySelector('.explore_div');

// Show the div on mouseover
idit.addEventListener('mouseover', function () {
    exploreDiv.style.display = 'flex'; // Or 'block' depending on your layout
});

// Hide the div on mouseout
idit.addEventListener('mouseout', function () {
    exploreDiv.style.display = 'none';
});
exploreDiv.addEventListener('mouseover', function () {
    exploreDiv.style.display = 'flex'; // Or 'block' depending on your layout
});

// Hide the div on mouseout
exploreDiv.addEventListener('mouseout', function () {
    exploreDiv.style.display = 'none';
});


const cross=document.querySelector('.menu_img');
const menuButton=document.querySelector('.extra_stuff_container');
cross.addEventListener('click', function xyz(){
    if(menuButton.style.display==='none'){
        cross.src='5.png';
        menuButton.style.display='flex';
    }
    else{
        cross.src='3.png';
        menuButton.style.display='none';
    }
    

})


























const mainBox = document.querySelector('.main_box');
const light=document.querySelector('.light_effect');

        mainBox.addEventListener('mousemove', (e) => {
            const rect = mainBox.getBoundingClientRect();
            const x = e.clientX - rect.left; // X position relative to the element
            const y = e.clientY - rect.top;  // Y position relative to the element
            light.style.display='block';
            light.style.left = `${x - light.offsetWidth / 2}px`; // Subtract half of the light's width
            light.style.top = `${y - light.offsetHeight / 2}px`;
            // Map the x and y positions to rotation angles
            const rotateY = ((x / rect.width) - 0.5) * 5; // Rotate up to ±10 degrees
            const rotateX = ((y / rect.height) - 0.5) * -5; // Inverse rotation for natural feel

            mainBox.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        mainBox.addEventListener('mouseleave', () => {
            light.style.display='none';
            // Reset the transformation when the mouse leaves
            mainBox.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) ';
        });


})


