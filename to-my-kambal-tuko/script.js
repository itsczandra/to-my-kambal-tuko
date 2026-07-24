const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

reveal();

function reveal(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const trigger = window.innerHeight - 120;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}
