(function () {
  const second = 1000,
		cent =100,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    concours = "Apr 19, 2023 08:00:00",
    resccmp = "Jun 08, 2022 18:00:00",
    resccs = "Jun 09, 2022 18:00:00",
    resx = "Jun 03, 2022 08:00:00",
    countDown = new Date(concours).getTime(),
    countDown2 = new Date(resccmp).getTime(),
    countDown3 = new Date(resccs).getTime(),
    countDown4 = new Date(resx).getTime(),
	  daterentree = new Date("Sep 1, 2022 08:00:00").getTime(),
	  
      x = setInterval(function() {    

        now = new Date().getTime(),
            distance = countDown - now,
            distance2 = countDown2 - now,
            distance3 = countDown3 - now,
            distance4 = countDown4 - now,
			tpspasse = now - daterentree,
			percena = (tpspasse / (distance+tpspasse) )*cent 
      if (percena < 0) { percena = 0 }
      if (distance2 < 0) { distance2 = 0 }
      if (distance3 < 0) { distance3 = 0 }
      if (distance4 < 0) { distance4 = 0 }
			
      document.getElementById("days2").innerText = Math.floor(distance2 / (day)),
          document.getElementById("hours2").innerText = Math.floor((distance2 % (day)) / (hour)),
          document.getElementById("minutes2").innerText = Math.floor((distance2 % (hour)) / (minute)),
          document.getElementById("seconds2").innerText = Math.floor((distance2 % (minute)) / second),
          document.getElementById("days4").innerText = Math.floor(distance4 / (day)),
          document.getElementById("hours4").innerText = Math.floor((distance4 % (day)) / (hour)),
          document.getElementById("minutes4").innerText = Math.floor((distance4 % (hour)) / (minute)),
          document.getElementById("seconds4").innerText = Math.floor((distance4 % (minute)) / second),
          document.getElementById("days3").innerText = Math.floor(distance3 / (day)),
          document.getElementById("hours3").innerText = Math.floor((distance3 % (day)) / (hour)),
          document.getElementById("minutes3").innerText = Math.floor((distance3 % (hour)) / (minute)),
          document.getElementById("seconds3").innerText = Math.floor((distance3 % (minute)) / second), 
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
		  document.getElementById("percent").innerText = percena.toFixed(6) ,
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance3 < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

		headline.innerText = "C'est trop tard !!! \n Et puisse le sort vous etre favorable";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());