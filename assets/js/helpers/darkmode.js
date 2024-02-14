function darkMode() {
    const btnSwitchMode = document.querySelector(".navbar__toggle--darkmode-input");
  
    if (btnSwitchMode) {
      btnSwitchMode.addEventListener("change", function() {
          if(this.checked) {
              window.location.href = "indexDark.html"
          } else {
            window.location.href = "index.html"
             
          }
      })
    }
  }
export default darkMode