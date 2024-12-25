// Fungsi untuk smooth scroll
$(document).ready(function() {
    $("a").on('click', function(event) {
        // Pastikan link memiliki href yang sesuai
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            // Lakukan scroll ke elemen yang sesuai
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Menambahkan kelas navbar-scrolled ketika scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("navbar-scrolled");
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }
    });
});
