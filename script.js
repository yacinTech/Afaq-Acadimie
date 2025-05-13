









document.addEventListener("DOMContentLoaded", function () {
  const serviceList = document.getElementById("serviceList");
  const serviceItems = serviceList.querySelectorAll("li[data-id]");
  const serviceDescs = serviceList.querySelectorAll(".service-desc");

  serviceItems.forEach(item => {
    item.addEventListener("click", function (e) {
      const id = this.getAttribute("data-id");

      // إغلاق كل الفقرات
      serviceDescs.forEach(desc => {
        if (desc.id === id) {
          desc.classList.toggle("active");
        } else {
          desc.classList.remove("active");
        }
      });

      e.stopPropagation(); // منع الإغلاق العام عند الضغط داخل العنصر
    });
  });

  // إغلاق عند الضغط خارج قسم الخدمات
  document.addEventListener("click", function () {
    serviceDescs.forEach(desc => desc.classList.remove("active"));
  });

  // منع إغلاق الفقرة عند الضغط داخلها
  serviceDescs.forEach(desc => {
    desc.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav").querySelector("ul");

  // فتح/إغلاق القائمة
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.classList.toggle("open");
  });

  // عند اختيار عنصر في القائمة، يتم الإغلاق
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      menuToggle.classList.remove("open");
    });
  });
});




  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }






