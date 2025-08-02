document.addEventListener('DOMContentLoaded', () => {

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });


    // --- Testimonial Carousel ---
    const wrapper = document.querySelector('.testimonial-wrapper');
    const cards = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.carousel-nav.next');
    const prevBtn = document.querySelector('.carousel-nav.prev');

    if (wrapper && cards.length > 0) {
        let currentIndex = 0;
        const totalSlides = cards.length;

        function updateCarousel() {
            // The offset accounts for the margin on the cards
            const offset = cards[0].offsetWidth + 20; // card width + margin-right
            wrapper.style.transform = `translateX(-${currentIndex * offset}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Optional: Auto-play
        // setInterval(() => {
        //     nextBtn.click();
        // }, 5000);

        // Adjust on window resize
        window.addEventListener('resize', updateCarousel);
    }
});
// --- Project Gallery Filter ---
    const filterContainer = document.querySelector(".project-filters");
    const galleryItems = document.querySelectorAll(".project-item");

    if (filterContainer) {
        filterContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-btn")) {
                // Deactivate existing active button
                filterContainer.querySelector(".active").classList.remove("active");
                // Activate new button
                e.target.classList.add("active");
                
                const filterValue = e.target.getAttribute("data-filter");

                galleryItems.forEach((item) => {
                    if (item.classList.contains(filterValue) || filterValue === "all") {
                        item.classList.remove("hide");
                    } else {
                        item.classList.add("hide");
                    }
                });
            }
        });
    }