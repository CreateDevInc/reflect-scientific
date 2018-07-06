(function() {
  if (window.location.href.includes("company-profile")) {
    const showProfileButtons = document.querySelectorAll(".show-profile");

    showProfileButtons.forEach(function (val) {
      val.addEventListener('click', function(event) {
        if (event.target.innerText === 'See Profile') {
          event.target.innerText = 'Hide Profile'
          event.target.nextSibling.classList.remove('hidden');
        } else {
          event.target.innerText = 'See Profile'
          event.target.nextSibling.classList.add('hidden'); 
        }
      });
    });
  }
})();