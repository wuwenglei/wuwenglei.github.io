var language = "English";
var mainLocation = 'documents/main.html';

function setLanguage(lan) {
  language = document.getElementById(lan).value;
  if (language == "English") {
    mainLocation = 'documents/main.html';
  } else if (language == "Français") {
    mainLocation = 'documents/main_f.html';
  } else if (language == "Deutsche") {
    mainLocation = 'documents/main_g.html';
  } else if (language == "简体中文") {
    mainLocation = 'documents/main_c.html';
  }
}
