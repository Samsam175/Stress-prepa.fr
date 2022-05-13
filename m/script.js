(function () {
  const second = 1000,
    cent = 100,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  concours = "Apr 19, 2023 08:00:00", //Date des prochains concours
    resccmp = "Jun 08, 2022 18:00:00",  //Dates des résultats
    resccs = "Jun 09, 2022 18:00:00",
    resx = "Jun 03, 2022 08:00:00",

    countDown = new Date(concours).getTime(),
    countDown2 = new Date(resccmp).getTime(),
    countDown3 = new Date(resccs).getTime(),
    countDown4 = new Date(resx).getTime(),
    daterentree = new Date("Sep 1, 2022 08:00:00").getTime(),

    x = setInterval(function () {

      now = new Date().getTime(),

        distance = countDown - now,
        distance2 = countDown2 - now,
        distance3 = countDown3 - now,
        distance4 = countDown4 - now,

        tpspasse = now - daterentree,
        percena = (tpspasse / (distance + tpspasse)) * cent

      if (percena < 0) { percena = 0 }
      if (distance2 < 0) { distance2 = 0 }
      if (distance4 < 0) { distance4 = 0 }

      if (Math.max(distance3, distance2, distance4) > 0) {
        resteannee = document.getElementById("resteannee"),
          resteannee.style.display = "none",

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
          document.getElementById("percent").innerText = percena.toFixed(6),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      }
      //apres la fin des résultats
      else {
        attenteres = document.getElementById("attenteres"),
          attenterescountdown = document.getElementById("attenterescountdown"),
          attenteres.style.display = "none",
          attenterescountdown.style.display = "none",

          document.getElementById("days0").innerText = Math.floor(distance / (day)),
          document.getElementById("hours0").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes0").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("percent0").innerText = percena.toFixed(6),
          document.getElementById("seconds0").innerText = Math.floor((distance % (minute)) / second);

      }
    }, 0)
}());