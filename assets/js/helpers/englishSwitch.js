function englishToggle() {
    const btnSwitchMod = document.querySelector(".navbar__toggle--language-input");
  
    if (btnSwitchMod) {
      btnSwitchMod.addEventListener("change", function() {
          if(this.checked) {
              window.location.href = "indexEn.html"
          } else {
            window.location.href = "index.html"
             
          }
      })
    }
  }
export default englishToggle