function login() {
  let name = document.getElementById("name").value;
  if(name !== "") {
    localStorage.setItem("user", name);
    window.location.href = "vote.html";
  } else {
    alert("Enter name");
  }
}

function vote(c) {
  if(localStorage.getItem("voted")) {
    alert("Already voted!");
  } else {
    let count = localStorage.getItem(c) || 0;
    localStorage.setItem(c, ++count);
    localStorage.setItem("voted", true);
    window.location.href = "result.html";
  }
}

function showResult() {
  let a = localStorage.getItem("A") || 0;
  let b = localStorage.getItem("B") || 0;

  document.getElementById("a").innerText = a;
  document.getElementById("b").innerText = b;

  document.getElementById("barA").style.width = (a*30) + "px";
  document.getElementById("barB").style.width = (b*30) + "px";
}

function resetVote() {
  localStorage.clear();
  alert("Data Reset Ho Gaya!");
  window.location.href = "index.html";
}