document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
