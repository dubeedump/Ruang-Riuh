function mulai(){

    document.getElementById("cover").style.display = "none";

    let isi = document.getElementById("isi");

    isi.style.display = "block";

    setTimeout(function(){

        isi.style.opacity = "1";
        isi.style.transform="translateY(0)";

    },100);

    document.getElementById("musik").play();

    document.querySelectorAll(".reveal").forEach(function(item) {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        item.classList.add("active");
    }
});
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

    reveals.forEach(function(item){

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("active");

        }

    });

});