const icons = document.querySelectorAll(".step-icon");
const checkIcons = document.querySelectorAll(".check-icon");
const progressBar = document.querySelector(".bar");
const stepTexts = document.querySelectorAll(".step-text");

checkIcons.forEach((checkIcon, index) => {
    checkIcon.addEventListener("click", () => {
        // Update progress bar width
        const progressWidth = ((index + 1) / checkIcons.length) * 100;
        progressBar.style.width = `${progressWidth}%`;

        // Update active check icons
        checkIcons.forEach((icon, i) => {
            if (i <= index) {
                icon.classList.add("active");
            } else {
                icon.classList.remove("active");
            }
        });

        // Update active step icons
        icons.forEach((icon, i) => {
            if (i <= index) {
                icon.classList.add("active");
            } else {
                icon.classList.remove("active");
            }
        });

        // Update active step texts
        stepTexts.forEach((text, i) => {
            if (i <= index) {
                text.classList.add("active");
            } else {
                text.classList.remove("active");
            }
        });
    });
});