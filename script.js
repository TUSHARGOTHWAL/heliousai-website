// small interactions: responsive hamburger toggle and simple scroll header effect
document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.getElementById('hamburger');
  const header = document.querySelector('.site-header');

  hamburger && hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // simple mobile nav overlay (basic)
    let nav = document.querySelector('.mobile-nav');
    if(!nav){
      nav = document.createElement('div');
      nav.className = 'mobile-nav';
      nav.innerHTML = `
        <div class="mobile-nav-inner">
          <a href="#">Platform</a>
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Industries</a>
          <a href="#">Resources</a>
          <a href="#">Company</a>
          <div style="margin-top:12px;"><button class="btn primary block">Request a demo</button></div>
        </div>
      `;
      document.body.appendChild(nav);
    } else {
      nav.remove();
    }
  });

  // header shadow on scroll
  window.addEventListener('scroll', () => {
    if(window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
});
