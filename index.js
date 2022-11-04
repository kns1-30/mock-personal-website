
$(".readmore-link").click( function(e) {
  // record if our text is expanded
  var isExpanded =  $(e.target).hasClass("expand");

  //close all open paragraphs
  $(".readmore.expand").removeClass("expand");
  $(".readmore-link.expand").removeClass("expand");

  // if target wasn't expand, then expand it
  if (!isExpanded){
    $( e.target ).parent( ".readmore" ).addClass( "expand" );
    $(e.target).addClass("expand");
  }
});


// $("#project1-read-more").on("click", function() {
//   $(this).hide();
//   $("#project1-content").show();

// });

// $("#project2-read-more").on("click", function() {
//   $(this).hide();
//   $("#project2-content").show();

// });

// $("#project3-read-more").on("click", function() {
//   $(this).hide();
//   $("#project3-content").show();

// });

// $("#project4-read-more").on("click", function() {
//   $(this).hide();
//   $("#project4-content").show();

// });

// $("#project1-readless").on("click", function() {
//   $("#project1-content").hide();
//   $("#project1-read-more").show();

// });

// $("#project2-readless").on("click", function() {
//   $("#project2-content").hide();
//   $("#project2-read-more").show();
// });


//   $("#project3-readless").on("click", function() {
//     $("#project3-content").hide();
//     $("#project3-read-more").show();

// });

// $("#project4-readless").on("click", function() {
//   $("#project4-content").hide();
//   $("#project4-read-more").show();

// });


