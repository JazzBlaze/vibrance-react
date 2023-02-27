(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    const countDown = new Date("March 02, 2023 00:00:00").getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
        
          if (distance < 0) {
            return clearInterval(x);
          }
  
          var days = Math.floor(distance / (day));
          var hours = Math.floor((distance % (day)) / (hour));
          var minutes = Math.floor((distance % (hour)) / (minute));
          var seconds = Math.floor((distance % (minute)) / second);
          
          const dayCounter = document.getElementById('days').getElementsByTagName('span');
          const hourCounter = document.getElementById('hours').getElementsByTagName('span');
          const minuteCounter = document.getElementById('minutes').getElementsByTagName('span');
          const secondCounter = document.getElementById('seconds').getElementsByTagName('span');

          dayCounter[0] && (dayCounter[0].innerText = parseInt(days / 10));
          dayCounter[1] && (dayCounter[1].innerText = parseInt(days % 10));
          hourCounter[0] && (hourCounter[0].innerText = parseInt(hours / 10));
          hourCounter[1] && (hourCounter[1].innerText = parseInt(hours % 10));
          minuteCounter[0] && (minuteCounter[0].innerText = parseInt(minutes / 10));
          minuteCounter[1] && (minuteCounter[1].innerText = parseInt(minutes % 10));
          secondCounter[0] && (secondCounter[0].innerText = parseInt(seconds / 10));
          secondCounter[1] && (secondCounter[1].innerText = parseInt(seconds % 10));

  
          //do something later when date is reached
          
          //seconds
        }, 1000)
    }());