      // *********************************************
      // Header Profile drop down
      // *********************************************
      $(document).ready(function() {
          // Toggle profile options visibility on pp-link click
          $('.pp-link').click(function() {
            $('.settings').hide();
              $('.profile-options').toggle();
              $(this).attr('aria-expanded', function(i, val) {
              return val === 'true' ? 'false' : 'true';
              });
          });

          // Hide profile options when clicking outside of it
          $(document).click(function(event) {
              if (!$(event.target).closest('.profile').length) {
              $('.profile-options').hide();
              $('.pp-link').attr('aria-expanded', 'false');
              }
          });

          // *********************************************
          // Header Profile drop down
          // *********************************************
            $('.settings').hide();
          
            $('.settings-option > .icon-setting').on('click', function() {
              if ($('.settings').is(':visible')) {
                $('.settings').hide();
              } else {
                $('.profile-options').hide();
                $('.settings').show();
              }
            });

            // Hide the popup-options display initially
            $('.popup-options-display').hide();
          
            // Show/hide the popup-options display when the icon-popup-options is clicked
            $('.popup-options>i').on('click', function() {
              $('.popup-options-display').hide();
              var $popupOptions = $(this).closest('.popup-options').find('.popup-options-display');
          
              if ($popupOptions.is(':visible')) {
                $popupOptions.hide();
              } else {
                $popupOptions.show();
              }
            });
          
            // Hide the popup-options display when clicked outside
            $(document).on('click', function(event) {
              if (!$(event.target).closest('.popup-options').length) {
                $('.popup-options-display').hide();
              }
            });
          
            // Hide the popup-options display when cross button is clicked in mobile
            $('.close-pop').on('click', function() {
              $(this).closest('.popup-options-display').hide();
            });
      
            // NOTICE modal show and hide 
            // show 
            $('.notice-link').on('click', function() {
              $('.notice-modal').addClass('show');
            });
            // hide 
            $('.close-notice').on('click', function() {
              $('.notice-modal').removeClass('show');
            });

            $('.logout').on('click', function() {
              $('.logout-modal').addClass('show');
            });
            $('.close-forget').on('click', function() {
              $('.forgot-password').removeClass('show');
            });
      });

      
      

// Full Screen Mode,multiple browsers including iOS (Safari),
// Mozilla Firefox, Google Chrome, Microsoft Edge, Opera, and Internet Explorer:
const logoDiv = document.querySelector('.logo');
const fsDiv = document.querySelector('.fs');

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.webkitEnterFullscreen) {
        document.documentElement.webkitEnterFullscreen();
      }
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.oRequestFullscreen) {
      document.documentElement.oRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.oExitFullscreen) {
      document.oExitFullscreen();
    }
  }
}

logoDiv.addEventListener('click', toggleFullScreen);
fsDiv.addEventListener('click', toggleFullScreen);


document.addEventListener('DOMContentLoaded', function() {
  // Code to execute once the page is fully loaded
  document.querySelector('.loader').style.display = 'none';
});