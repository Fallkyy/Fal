function darkmode() {
     let bodydark = document.getElementById("bodys")
    let dark = document.getElementById("haha")
    let darks = document.getElementById("hahas")
    let moon = document.getElementById("icons")
    
    dark.classList.toggle("darkmode")
    darks.classList.toggle("darkmode")
    bodydark.classList.toggle("darkmodebody")
  if (moon.classList.contains("fa-moon")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");

  }
   else {
    moon.classList.remove("fa-sun")
    moon.classList.add("fa-moon")
   }
}

    function revealOnScroll () {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const offset = 150;

        if(elementTop < windowHeight - offset) {
            el.classList.add("active")
        }

        else {
            el.classList.remove("active")
        }
    }
}

let place = document.getElementById("demo")
place.textContent = localStorage.getItem("username");

