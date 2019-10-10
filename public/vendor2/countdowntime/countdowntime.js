(function ($) {
    "use strict";

    $.fn.extend({ 

      countdown100: function(options) {
        
        return this.each(function() {
          var obj = $(this);

          var deadline = new Date("nov 08, 2019 18:37:25"); 
          var now = new Date();

          var t = deadline - now;

          var t = Date.parse(deadline) - Date.parse(now);


          var clock = $(obj).FlipClock(t/1000, {
            clockFace: 'DailyCounter',
            countdown: true
          });


        });
      }
    });

    

})(jQuery);