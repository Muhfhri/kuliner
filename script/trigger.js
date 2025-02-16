  $(document).ready(function () {
    function updateActiveNav() {
      var scrollPos = $(document).scrollTop();

      $("section").each(function () {
        var id = $(this).attr("id");
        var offset = $(this).offset().top; // Tidak ada pengurangan top

        if (scrollPos >= offset && scrollPos < offset + $(this).outerHeight()) {
          $(".nav-link, .sidebar a").removeClass("active");
          $('.nav-link[href="#' + id + '"], .sidebar a[href="#' + id + '"]').addClass("active");
        }
      });
    }

    // Update navbar aktif saat scroll
    $(window).on("scroll", function () {
      updateActiveNav();
    });

    // Smooth scrolling tanpa offset
    $(".nav-link, .sidebar a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        // Hentikan animasi sebelumnya untuk menghindari lag
        $("html, body").stop().animate(
          {
            scrollTop: $(hash).offset().top, // Langsung ke bagian tanpa offset
          },
          250 // Animasi lebih cepat (250ms)
        );
      }
    });

    // Panggil saat halaman pertama kali dimuat
    updateActiveNav();
  });
