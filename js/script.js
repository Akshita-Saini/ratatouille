const yearEle = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEle.textContent=currentYear;

const mobileMenuEle = document.querySelector("[name='menu-outline']");
const mobileCloseEle = document.querySelector("[name='close-outline']");
const headerEle = document.querySelector("header");

mobileMenuEle.addEventListener("click", function(){
  headerEle.classList.toggle('nav-open');
});

mobileCloseEle.addEventListener("click", function(){
  headerEle.classList.toggle('nav-open');
});

const mainNavLinks = document.querySelectorAll(".main-nav-links");

 mainNavLinks.forEach( link => {
  link.addEventListener('click', function(e){
    const href = link.getAttribute("href");
    e.preventDefault();
     if(href == "#"){
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      })
    } 
    if(href !== "#" && href.startsWith("#")){
      console.log("hui", href);
      const sectionEle = document.querySelector(href);
      sectionEle.scrollIntoView({
        behavior:"smooth"
      })
    }
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-links")){
     headerEle.classList.toggle("nav-open"); 
   }
  })
}) 


// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

