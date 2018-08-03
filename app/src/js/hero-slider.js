<<<<<<< HEAD
(function() {
    // INSERT/MODIFY NEW IMAGES HERE
    let imageArray = [
        {
            src: "images/hero2.jpg",
            actionText: "See what Reflect can do for you!",
            subText: "Reflect is a great place to buy things from.",
            actionButtonText: "PRODUCT LINES",
            anchorHref: "product-lines.html",
            imageObject: null,
        },
        {
            src: "images/hero3.jpg",
            actionText: "Ever get tired of reading?",
            subText: "Good try.",
            actionButtonText: "Buy now",
            anchorHref: "product-lines.html",
            imageObject: null,
        },
        {
            src: "images/guy-smiling.jpg",
            actionText: "Yeah buddy?",
            subText: "Oh yeah buddy.",
            actionButtonText: "Yeah Buddy!",
            anchorHref: "product-lines.html",
            imageObject: null,
        },
    ];
    //Load all images on pageload
    for (let i = 0; i < imageArray.length; i++) {
        imageArray[i].imageObject = new Image();
        imageArray[i].imageObject.src = imageArray[i].src;
    }
    
    const heroSliders   = document.querySelectorAll('.hero-slider');


    for (let x = 0; x < heroSliders.length; x++) {
        const heroSlider = heroSliders[x];
        const dotsContainer = heroSlider.querySelector('.dot-container');
        const controlsContainer = heroSlider.querySelector('.controls-container');
 
        const textAction = document.getElementById('actionText');
        const subText = document.getElementById('subText');
        const buttonText = document.getElementById('actionButton');
    
        const arrows = controlsContainer.getElementsByClassName('arrow');
        const image = heroSlider.getElementsByTagName('img');
        
        
        let numOfSlides  = imageArray.length;
        let currentSlide = 0;
        
        
    
        // hide the slider controls if there's only a single image to display
        if (numOfSlides <= 1) {
            dotsContainer.style.display = 'none';
            arrows[0].style.display = 'none';
	        arrows[1].style.display = 'none';
        }
        
        for (let i = 0; i < numOfSlides; i++) {
            
            const dot = document.createElement('i');
            dot.className = 'fas fa-circle dot' + ((i === 0) ? ' active' : '');
            dot.data = i;
            dot.addEventListener('click', dotClick);
            dotsContainer.appendChild(dot);
        }

        function dotClick(e) {
            dots[currentSlide].classList.remove('active');
            currentSlide = e.target.data;
            fillSlide(currentSlide);
            dots[currentSlide].classList.add('active');

        }
        
        function fillSlide(cur) {
            textAction.textContent = imageArray[cur].actionText;
            subText.textContent = imageArray[cur].subText;
            buttonText.textContent = imageArray[cur].actionButtonText;
            buttonText.href = imageArray[cur].anchorHref;
            image[0].src = imageArray[cur].imageObject.src;            
        }

        fillSlide(currentSlide);
        
        arrows[0].addEventListener('click', changeSlide);
        arrows[1].addEventListener('click', changeSlide);

        const dots = dotsContainer.childNodes;

        function changeSlide(e) {
            const arrowClass = e.target.className;
        
            dots[currentSlide].classList.remove('active');
        
            if ((arrowClass.includes('left')) && (currentSlide > 0))                     { currentSlide--;                 }
            else if ((arrowClass.includes('left')) && (currentSlide === 0))              { currentSlide = numOfSlides - 1; }
            else if ((arrowClass.includes('right')) && (currentSlide < numOfSlides - 1)) { currentSlide++;                 }
            else                                                                         { currentSlide = 0;               }
        
            fillSlide(currentSlide);
        
            dots[currentSlide].classList.add('active');
        }
    }
  
  })();
=======
(function() {
  // INSERT/MODIFY NEW IMAGES HERE
  let imageArray = [
    {
      src: "images/hero2.jpg",
      actionText: "See what Reflect can do for you!",
      subText: "Reflect is a great place to buy things from.",
      actionButtonText: "PRODUCT LINES",
      anchorHref: "product-lines.html",
      imageObject: null
    },
    {
      src: "images/hero3.jpg",
      actionText: "Ever get tired of reading?",
      subText: "Good try.",
      actionButtonText: "Buy now",
      anchorHref: "product-lines.html",
      imageObject: null
    },
    {
      src: "images/hero4.jpg",
      actionText: "Yeah buddy?",
      subText: "Oh yeah buddy.",
      actionButtonText: "Yeah Buddy!",
      anchorHref: "product-lines.html",
      imageObject: null
    }
  ];
  //Load all images on pageload
  for (let i = 0; i < imageArray.length; i++) {
    imageArray[i].imageObject = new Image();
    imageArray[i].imageObject.src = imageArray[i].src;
  }

  const heroSliders = document.querySelectorAll(".hero-slider");

  for (let x = 0; x < heroSliders.length; x++) {
    const heroSlider = heroSliders[x];
    const dotsContainer = heroSlider.querySelector(".dot-container");
    const controlsContainer = heroSlider.querySelector(".controls-container");

    const textAction = document.getElementById("actionText");
    const subText = document.getElementById("subText");
    const buttonText = document.getElementById("actionButton");

    const arrows = controlsContainer.getElementsByClassName("arrow");
    const image = heroSlider.getElementsByTagName("img");

    let numOfSlides = imageArray.length;
    let currentSlide = 0;

    // hide the slider controls if there's only a single image to display
    if (numOfSlides <= 1) {
      dotsContainer.style.display = "none";
      arrows[0].style.display = "none";
      arrows[1].style.display = "none";
    }

    for (let i = 0; i < numOfSlides; i++) {
      const dot = document.createElement("i");
      dot.className = "fas fa-circle dot" + (i === 0 ? " active" : "");
      dot.data = i;
      dot.addEventListener("click", dotClick);
      dotsContainer.appendChild(dot);
    }

    function dotClick(e) {
      dots[currentSlide].classList.remove("active");
      currentSlide = e.target.data;
      fillSlide(currentSlide);
      dots[currentSlide].classList.add("active");
    }

    function fillSlide(cur) {
      textAction.textContent = imageArray[cur].actionText;
      subText.textContent = imageArray[cur].subText;
      buttonText.textContent = imageArray[cur].actionButtonText;
      buttonText.href = imageArray[cur].anchorHref;
      image[0].src = imageArray[cur].imageObject.src;
    }

    fillSlide(currentSlide);

    arrows[0].addEventListener("click", changeSlide);
    arrows[1].addEventListener("click", changeSlide);

    const dots = dotsContainer.childNodes;

    function changeSlide(e) {
      const arrowClass = e.target.className;

      dots[currentSlide].classList.remove("active");

      if (arrowClass.includes("left") && currentSlide > 0) {
        currentSlide--;
      } else if (arrowClass.includes("left") && currentSlide === 0) {
        currentSlide = numOfSlides - 1;
      } else if (
        arrowClass.includes("right") &&
        currentSlide < numOfSlides - 1
      ) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }

      fillSlide(currentSlide);

      dots[currentSlide].classList.add("active");
    }
  }
})();
>>>>>>> 4f9c6380728f960d23b7c6b932190a53ca31272d
