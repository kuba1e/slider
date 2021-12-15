document.addEventListener("DOMContentLoaded", (e) => {
  const images = [
    "../img/1.jpg",
    "../img/2.jpg",
    "../img/3.jpg",
    "../img/4.jpg",
    "../img/5.jpg",
    "../img/6.jpg",
    "../img/7.jpg",
    "../img/8.jpg",
    "../img/9.jpg",
  ];
  const imgContainer = document.querySelector('.img-container');
  const forwardBtn = document.querySelector('.forward-arrow');
  const backBtn = document.querySelector('.back-arrow')
  let currentSlide = 0;

  function appearImg(img){
    const fragment = document.createDocumentFragment()
    img.forEach((element) => {
      let imgElement = document.createElement('img');
      imgElement.setAttribute('alt','slider image');
      imgElement.dataset.slide = '';
      imgElement.setAttribute('src',element)
      fragment.append(imgElement)
    });
    imgContainer.append(fragment)
    backBtn.classList.add('hide')
  }
  appearImg(images)

  function hideImg(index){
    const images = document.querySelectorAll('img[data-slide]');
    images.forEach(element =>{
      element.classList.add('hide')
    })
    images[index].classList.remove('hide')
  }
  hideImg(currentSlide)

  forwardBtn.addEventListener('click', (e)=>{
    if(currentSlide === images.length-2){
      hideImg(++currentSlide)
      forwardBtn.classList.add('hide')
    } else {
      if(backBtn.classList.contains('hide')) backBtn.classList.remove('hide')
      hideImg(++currentSlide)
    }
  })

  backBtn.addEventListener('click', (e)=>{
    if(currentSlide === 1){
      hideImg(--currentSlide)
      backBtn.classList.add('hide')
    } else {
      if(forwardBtn.classList.contains('hide')) forwardBtn.classList.remove('hide')
      hideImg(--currentSlide)
    }
  })

});
