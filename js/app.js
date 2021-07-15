const acc = $(".accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const menu = $('.menu')
const navlink = $('ul')
// let show = false;



for (i = 0; i < menu.length; i++) {
    
    menu[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const ul = this.nextElementSibling;
      if (ul.style.display === "block") {
        ul.style.display = "none";
      } else {
        ul.style.display = "block";
      }
    });
  }
  


// const showMenu = (event) => {
//     if (show){
//         $navlink.each(function(i){
//             $(this).css('display', 'none')
//         })
//         show = false
//     } else {
//         $navlink.each(function(i){
//             $(this).css('display', 'block')
//         })
//         show = true
//     }
// }

// $menu.on('click', showMenu)