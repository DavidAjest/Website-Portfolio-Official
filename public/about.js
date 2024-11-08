const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // /* code from comments  https://www.youtube.com/watch?v=T33NN_pPeNI&t=104s*/
      entry.target.classList.toggle("show", entry.isIntersecting);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
