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

    updateImages(); // Initial update to display the first image
});

    