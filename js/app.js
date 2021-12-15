document.addEventListener("DOMContentLoaded", (e) => {
  const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
  ];
  const dotsImages = ["./img/0.svg", "./img/1.svg"];

  const imgContainer = document.querySelector(".img-container");
  const forwardBtn = document.querySelector(".forward-arrow");
  const backBtn = document.querySelector(".back-arrow");
  const dotsContainer = document.querySelector(".dots");
  let currentSlide = 0;

  function appearImg(img) {
    const fragment = document.createDocumentFragment();
    backBtn.classList.add("hide");
    img.forEach((element) => {
      let imgElement = document.createElement("img");
      imgElement.setAttribute("alt", "slider image");
      imgElement.dataset.slide = "";
      imgElement.setAttribute("src", element);
      fragment.append(imgElement);
    });
    imgContainer.append(fragment);
  }

  function appearDots(dotsContainer, dotsImages) {
    for (let i = 0; i < images.length; i++) {
      const liElement = document.createElement("li");
      const dotImage = document.createElement("img");
      dotImage.setAttribute("alt", "dot");
      if (i === 0) {
        dotImage.setAttribute("src", dotsImages[1]);
      } else {
        dotImage.setAttribute("src", dotsImages[0]);
      }
      liElement.append(dotImage);
      dotsContainer.append(liElement);
    }
  }

  function hideImg(index) {
    const images = document.querySelectorAll("img[data-slide]");
    images.forEach((element) => {
      element.classList.add("hide");
    });
    images[index].classList.remove("hide");
  }

  function changeDotSrc(slide, dotsImg) {
    let dotsElements = dotsContainer.querySelectorAll("img");
    if (dotsElements) {
      Array.from(dotsElements).forEach((element) => {
        element.setAttribute("src", dotsImg[0]);
      });
      dotsElements[slide].setAttribute("src", dotsImg[1]);
    }
  }

  forwardBtn.addEventListener("click", (e) => {
    if (currentSlide === images.length - 2) {
      hideImg(++currentSlide);
      forwardBtn.classList.add("hide");
    } else {
      if (backBtn.classList.contains("hide")) backBtn.classList.remove("hide");
      hideImg(++currentSlide);
    }
    changeDotSrc(currentSlide, dotsImages);
  });

  backBtn.addEventListener("click", (e) => {
    if (currentSlide === 1) {
      hideImg(--currentSlide);
      backBtn.classList.add("hide");
    } else {
      if (forwardBtn.classList.contains("hide"))
        forwardBtn.classList.remove("hide");
      hideImg(--currentSlide);
    }
    changeDotSrc(currentSlide, dotsImages);
  });

  appearImg(images);
  appearDots(dotsContainer, dotsImages);
  hideImg(currentSlide);
});
