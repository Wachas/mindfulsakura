$(document).ready(function () {

    // Event delegation for dynamically loaded navbar
    $(document).on('click', '.nav-toggle-wrapper', function () {
        $(this).toggleClass('ta-open');
        $('.toggle-body').toggleClass('ta-open');
        $('body').toggleClass('ta-clip');
    });

});

fetch("../html/NavBar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("call-nav").innerHTML = data;
    })


fetch("../html/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("call-footer").innerHTML = data;
    })

$(document).ready(function () {

    $(".lnk-parent").on("click", function () {

      // remove active class from all tabs
      $(".lnk-parent").removeClass("re-tab-active");

      // add active class to clicked tab
      $(this).addClass("re-tab-active");

      // get data-id value
      const targetId = $(this).data("id");

      // hide all contents
      $(".mg-cat-body-wrapper").hide();

      // show matching content
      $("#" + targetId).fadeIn(300);

    });

  });

    $(document).ready(function () {

    $(".mg-sb-title").on("click", function () {

      const title = $(this).text();
      const desc = $(this).data("desc");

      const modal = $(this)
        .closest(".mg-category-key")
        .find(".ym-inline-modal");

      modal.find(".ym-modal-title").text(title);
      modal.find(".ym-modal-desc").text(desc);

      modal.fadeIn(200);
    });

    $(".ym-close").on("click", function () {
      $(this).closest(".ym-inline-modal").fadeOut(200);
    });

  });

 document.getElementById("btnSendEnquiry").addEventListener("click", function () {

    var name = document.getElementById("txtName").value.trim();
    var email = document.getElementById("txtEmail").value.trim();
    var message = document.getElementById("txtMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
    }

    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(
        "service_j62h18a",   // 🔴 replace
        "template_7cf6twy",  // 🔴 replace
        templateParams
    ).then(
        function(response) {
            alert("Message sent successfully!");
            document.getElementById("contactform").reset();
        },
        function(error) {
            alert("Failed to send message. Please try again.");
            console.error(error);
        }
    );
});
