$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Designer", "Developer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Designer", "Developer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
/*===== Portfolio Item Filter =====*/
const FilterContainer = document.querySelector(".portfolio-filter"),
filterBtns = FilterContainer.children;
totalFilterBtn = filterBtns.length;
PortfolioItems = document.querySelectorAll(".portfolio-item"),
totalportfolioItem = PortfolioItems.length;
for(let i=0; i < totalFilterBtn; i++)
{
    filterBtns[i].addEventListener("click", function()
    {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        for( let k=0; k<totalportfolioItem; k++)
        {
            if(filterValue === PortfolioItems[k].getAttribute("data-category"))
            {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
            else
            {
                PortfolioItems[k].classList.remove("show");
                PortfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all")
            {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
        }
    })
}
/*===== Lightbox =====*/
const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");
      let itemIndex = 0;
      for(let i=0; i<totalportfolioItem; i++)
      {
         PortfolioItems[i].addEventListener("click", function()
         {
             itemIndex=i;
             changeItem();
             toggleLightbox();
         })
      }
      function nextItem()
      {
          if(itemIndex == totalportfolioItem-1)
          {
              itemIndex=0;
          }
          else
          {
              itemIndex++
          }
          changeItem();
      }
      function prevItem()
      {
          if(itemIndex == 0)
          {
              itemIndex=totalportfolioItem-1;
          }
          else
          {
              itemIndex--
          }
          changeItem();
      }
      function toggleLightbox()
      {
          lightbox.classList.toggle("open");
      }
      function changeItem()
      {
          imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
          lightboxImg.src=imgSrc;
          lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
      }
      // close lightbox
      lightbox.addEventListener("click",function(event)
      {
         if(event.target === lightboxClose || event.target === lightbox)
         {
            toggleLightbox()
         }
      })
    })
