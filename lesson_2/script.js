const progressBar = document.querySelector('.progress-bar');
const nextButton = document.getElementById('next');

let step = 1;
const totalSteps = 5;

nextButton.addEventListener('click', () => {
  if (step < totalSteps) {
    step++;
    const newWidth = (step / totalSteps) * 100;
    progressBar.style.width = `${newWidth}%`;
  }
});
