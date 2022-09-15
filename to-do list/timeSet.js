let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  if (a.getHours() >= 12) {
    time =
      (a.getHours() % 12) +
      " : " +
      a.getMinutes() +
      " : " +
      a.getSeconds() +
      " PM";
  } else {
    time =
      a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds() + " AM";
  }
  document.getElementById("time").innerHTML = time + "<br>on " + date;
}, 1000);
