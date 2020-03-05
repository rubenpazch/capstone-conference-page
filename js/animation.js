var el = document.getElementById('nav-sticky-element');

window.addEventListener('scroll', function(){
  if (document.documentElement.scrollTop > 0){
      el.style.position = "fixed";
      el.style.top = "0px";
      el.style.width = "100%";
  }
  else
  {
      el.style.position = "static";
      el.style.top = "auto";
  }
});