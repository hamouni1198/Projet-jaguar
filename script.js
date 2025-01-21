window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
        const images = document.querySelectorAll('.image .gauche, .image .centre .ve1, .image .centre .ve2, .image .droit');
    
    images.forEach(function (image) {
        const imagePosition = image.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > imagePosition) {
            image.style.opacity = '1'; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".show img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateImages() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImages();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImages();
    });

    updateImages(); 
});

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.play().catch(function (error) {
      console.error('Autoplay bloqué : ', error);
    });
  });


  function updateVideoSource() {
    const video = document.getElementById("myVideo");
    const source = video.querySelector("source");

    if (window.matchMedia("(max-width: 480px)").matches) {
        source.src = "media/Jaguar - Type 00. An original work of art..mp4"; 
    } else {
        source.src = "media/Jaguar Type 00  An Original Work of Art.mp4"; 
    }

}