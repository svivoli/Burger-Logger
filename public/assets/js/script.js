$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");
        const devour = $(this).data("devour");
        const devouredState = {
            devoured: devour
        };
        if ($(this)[0].innerText === "DEVOUR!") {
            // Send the PUT request
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: devouredState
            }).then(function () {
                // Reload the page to get the updated list
                location.reload();
            });
        } else {
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function () {
                location.reload();
            });
            $(this)
                .parent()
                .remove();
        }
    });

    $(".add-burger").on("submit", function(event) {
        // Prevent page from reloading on submit
        event.preventDefault();
    
        const addBurger = {
          name: $("#new-burger").val().trim()
        };
    
        // Send the POST request
        $.ajax("/api/burgers", {
          type: "POST",
          data: addBurger
        }).then(function() {
          // Reload the page to get the updated list
          location.reload();
        });
      });
});