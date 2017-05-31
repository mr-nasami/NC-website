$(document).foundation();


// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

// $(document).ready(function() {
//   $.fn.animateRotate = function(angle, duration, easing, complete) {
//     var args = $.speed(duration, easing, complete);
//     var step = args.step;
//
//     return this.each(function(i, e) {
//       args.complete = $.proxy(args.complete, e);
//       args.step = function(now) {
//
//         $.style(e, 'transform', 'rotate(' + now + 'deg)');
//         if (step) return step.apply(e, arguments);
//       }
//       $({deg: 0}).animate({deg: angle}, args);
//     });
//   };
//
//   $(".resumelink").on("click", function() {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
//         window.scrollTo($(hash).offset().top);
//       } else {
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//       }
//     } // End if
//
//     $(".maincontent").fadeOut();
//     $("#main-page").animate({
//       width: "25px",
//       height: "375px"
//     },
//     function() {
//       $(this).animateRotate(90);
//     });
//
//     setTimeout(function() {
//       $("#main-page").fadeOut();
//     }, 1500);
//
//     setTimeout(function() {
//       $("#aboutMe").animateRotate(0, 0);
//       $("#aboutMe").css("height", "25px");
//       $("#aboutMe").css("width", "375px");
//       $("#aboutMe").fadeIn();
//
//       $("#aboutMe").animate({
//         backgroundColor: "#000"
//       },
//       function() {
//         $(this).animate({
//           height: "100vh"
//         },
//         function() {
//           $(this).animate({
//             width: "100%"
//           },
//           function() {
//             $(".contents").fadeIn(300);
//           });
//         });
//       });
//     }, 800);
//   });
//
//   // $("#main-page").css("background-color", "#e74c3c");
//   $("#main-page").css("height", "100vh");
//   $("#main-page").css("width", "100%");
//   $("#main-page").fadeIn();
//   $(".maincontent").fadeIn();
//
//   $(".firstlink").on("click", function() {
//
//     $(".maincontent").fadeOut();
//     $("#main-page").animate({
//       width: "25px",
//       height: "375px"
//     },
//     function() {
//       $(this).animateRotate(90);
//     });
//
//     setTimeout(function() {
//       $("#main-page").fadeOut();
//     }, 1500);
//
//     setTimeout(function() {
//       $("#next-page").animateRotate(0, 0);
//       $("#next-page").css("height", "25px");
//       $("#next-page").css("width", "375px");
//       $("#next-page").fadeIn();
//
//       $("#next-page").animate({
//         backgroundColor: "#000"
//       },
//       function() {
//         $(this).animate({
//           height: "100vh"
//         },
//         function() {
//           $(this).animate({
//             width: "100%"
//           },
//           function() {
//             $(".nextcontent").fadeIn(300);
//           });
//         });
//       });
//     }, 800);
//   });
//
//   $(".thirdpage").on("click", function() {
//
//     $(".maincontent").fadeOut();
//     $("#main-page").animate({
//       width: "25px",
//       height: "375px"
//     },
//     function() {
//       $(this).animateRotate(90);
//     });
//
//     setTimeout(function() {
//       $("#main-page").fadeOut();
//     }, 1500);
//
//     setTimeout(function() {
//       $("#third-page").animateRotate(0, 0);
//       $("#third-page").css("height", "25px");
//       $("#third-page").css("width", "375px");
//       $("#third-page").fadeIn();
//
//       $("#third-page").animate({
//         backgroundColor: "#000"
//       },
//       function() {
//         $(this).animate({
//           height: "100vh"
//         },
//         function() {
//           $(this).animate({
//             width: "100%"
//           },
//           function() {
//             $(".nextcontent").fadeIn(300);
//           });
//         });
//       });
//     }, 800);
//   });
//
//   $(".nextlink").on("click", function() {
//     $(".nextcontent").fadeOut();
//     $("a.nextlink").parent().parent().animate({
//       width: "25px",
//       height: "375px"
//     },
//     function() {
//       $(this).animateRotate(-90);
//     });
//
//     setTimeout(function() {
//       $("a.nextlink").parent().parent().fadeOut();
//     }, 1500);
//
//     setTimeout(function() {
//       $("#main-page").animateRotate(0, 0);
//       $("#main-page").css("height", "25px");
//       $("#main-page").css("width", "375px");
//       $("#main-page").fadeIn();
//
//       $("#main-page").animate({
//         height: "100vh"
//       },
//       function() {
//         $(this).animate({
//           width: "100%"
//         },
//         function() {
//           $(".maincontent").fadeIn(300);
//         });
//       });
//     }, 1400);
//   });
// });
