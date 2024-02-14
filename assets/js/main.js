import parallax from "./components/parallax.js";
import activeMenu from "./components/selectedmenu.js";
import darkMode from "./helpers/darkmode.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send_form.js";
import englishToggle from "./helpers/englishSwitch.js";


window.addEventListener("load", function() {
  parallax();
  resetToHome();
  sendEmail();
  darkMode()
  englishToggle()
});


document.addEventListener("DOMContentLoaded", updateCopyrightYear)