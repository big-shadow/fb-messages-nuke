let bArray = document.getElementsByClassName("_ci1");
let i = 0;

for (var x = 0; x < 5000; x += 500) {
  setTimeout(function() {
    window.scrollTo(0, document.body.scrollHeight);
  }, x);
}

function d() {
  try {
    bArray[i].click();
    i++;

    setTimeout(() => {
      let btns = document.querySelectorAll("span");
      let btn = [].slice
        .call(btns)
        .find(c => c.textContent.includes("Remove Item"));
      try {
        btn.click();
      } catch {}
    }, 200);

    setTimeout(() => {
      let btn = document.getElementsByClassName("layerCancel")[0];
      try {
        btn.click();
      } catch {}
    }, 800);
  } catch {}
  setTimeout(d, 2000);
}

d();
