(function () {
  const second = 1000,
    cent = 100,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  concours = "Apr 19, 2023 08:00:00", //Date des concours

    countDown = new Date(concours).getTime(),
    daterentree = new Date("Sep 1, 2022 08:00:00").getTime(),

    x = setInterval(function () {

      now = new Date().getTime(),

        distance = countDown - now,
        tpspasse = now - daterentree,
        percena = (tpspasse / (distance + tpspasse)) * cent

      if (percena < 0) { percena = 0 }
        attenteres = document.getElementById("resteannee"),
          attenterescountdown = document.getElementById("countdown"),

          document.getElementById("days0").innerText = Math.floor(distance / (day)),
          document.getElementById("hours0").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes0").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("percent0").innerText = percena.toFixed(6),
          document.getElementById("seconds0").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
}());