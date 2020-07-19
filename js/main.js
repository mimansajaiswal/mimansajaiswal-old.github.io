let coll = document.getElementsByClassName("collapsible-btn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.parentNode.nextElementSibling;
    if (content.style.maxHeight) {
      this.innerText = "+";
      content.style.maxHeight = null;
    } else {
      this.innerText = "-";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

feather.replace();
