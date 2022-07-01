var userSelect = prompt(
  "Salamlama proqramına xoş gəlmisiniz əgər zamanı özünüz daxil edirsinizsə- 1, Kompüyuterin vaxtını istifadə etmək istəyirsinizsə- 2  "
);
if (userSelect === "1") {
  var data = prompt("Zehmet olmasa zamani secin");

  if (data >= 6 && data <= 12) {
    document.getElementById("alert").innerText = "Good Morning";
    document.getElementById("Task-1").style.backgroundColor = "yellow";
    alert("Good Morning");
  } else if (data > 12 && data < 17) {
    document.getElementById("alert").innerText = "Good afternoon";
    document.getElementById("Task-1").style.backgroundColor = "#ff6e00a3";
    alert("Good Afternoon");
  } else if (data >= 17 && data < 24) {
    document.getElementById("alert").innerText = "Good evening";
    document.getElementById("Task-1").style.backgroundColor = "#121d67";
    alert("Good Evening");
  }
} else if (userSelect === "2") {
  var data = new Date().getHours();
  if (data >= 6 && data <= 12) {
    document.getElementById("alert").innerText = "Good Morning";
    document.getElementById("Task-1").style.backgroundColor = "yellow";
  } else if (data > 12 && data < 17) {
    document.getElementById("alert").innerText = "Good afternoon";
    document.getElementById("Task-1").style.backgroundColor = "#ff6e00a3";
  } else if (data >= 17 && data < 24) {
    document.getElementById("alert").innerText = "Good evening";
    document.getElementById("Task-1").style.backgroundColor = "#121d67";
  }
}
