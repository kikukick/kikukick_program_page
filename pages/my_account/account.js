document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.getElementById("userIcon");
  if (userIcon) {
    userIcon.addEventListener("click", function () {
      if (confirm("移動しますか？")) {
        window.location.href = "https://github.com/kikukick";
        
      }
    });
  }
});

