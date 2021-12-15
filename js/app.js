document.addEventListener("DOMContentLoaded", (e) => {
  const imagesArr = [
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
  const dotsImagesArr = ["./img/0.svg", "./img/1.svg"];

  const imgContainer = document.querySelector(".img-container");
  const forwardBtn = document.querySelector(".forward-arrow");
  const backBtn = document.querySelector(".back-arrow");
  const dotsContainer = document.querySelector(".dots");
  let currentSlide = 0;

  function appearImg(arr) {
    const fragment = document.createDocumentFragment();
    arr.forEach((element) => {
      let imgElement = document.createElement("img");
      imgElement.classList.add("slide-img");
      imgElement.setAttribute("alt", "slider image");
      imgElement.setAttribute("src", element);
      fragment.append(imgElement);
    });
    imgContainer.append(fragment);
  }

  function appearDots(container, arr) {
    for (let i = 0; i < imagesArr.length; i++) {
      const liElement = document.createElement("li");
      const dotImage = document.createElement("img");
      dotImage.classList.add("dot-img");
      dotImage.setAttribute("alt", "dot");
      dotImage.dataset.slideNum = `${i}`;
      if (i === 0) {
        dotImage.setAttribute("src", arr[1]);
      } else {
        dotImage.setAttribute("src", arr[0]);
      }
      liElement.append(dotImage);
      container.append(liElement);
    }
  }

  function hideImg(index) {
    const images = document.querySelectorAll(".slide-img");
    Array.from(images).forEach((element) => {
      element.classList.add("hide");
    });
    images[index].classList.remove("hide");
  }

  function changeDotSrc(slideNum, arr) {
    let dotsElements = dotsContainer.querySelectorAll(".dot-img");
    if (dotsElements) {
      Array.from(dotsElements).forEach((element) => {
        element.setAttribute("src", arr[0]);
      });
      dotsElements[slideNum].setAttribute("src", arr[1]);
    }
  }

  function checkSlideNum(slideNum) {
    if (slideNum > imagesArr.length - 2) {
      forwardBtn.classList.add("hide");
      if (backBtn.classList.contains("hide")) backBtn.classList.remove("hide");
    } else if (slideNum < 1) {
      backBtn.classList.add("hide");
      if (forwardBtn.classList.contains("hide")) forwardBtn.classList.remove("hide");
    } else {
      forwardBtn.classList.remove("hide");
      backBtn.classList.remove("hide");
    }
  }

  imgContainer.addEventListener("click", ({ target }) => {
    if (target.closest(".forward-arrow")) {
      hideImg(++currentSlide);
      changeDotSrc(currentSlide, dotsImagesArr);
      checkSlideNum(currentSlide);
    }

    if (target.closest(".back-arrow")) {
      hideImg(--currentSlide);
      changeDotSrc(currentSlide, dotsImagesArr);
      checkSlideNum(currentSlide);
    }
    
    if (target.closest(".dots img")) {
      let slideNumber = Number(target.dataset.slideNum);
      currentSlide = slideNumber;
      checkSlideNum(currentSlide);
      hideImg(currentSlide);
      changeDotSrc(currentSlide, dotsImagesArr);
    }
  });

  appearImg(imagesArr);
  appearDots(dotsContainer, dotsImagesArr);
  hideImg(currentSlide);
});
