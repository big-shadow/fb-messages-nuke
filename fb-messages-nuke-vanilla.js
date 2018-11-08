let m = document.querySelectorAll("[aria-label='Conversation actions']");
let bArray = [].slice.call(m);
let i = 0;

let scroller = setInterval(() => {
  var div = document.getElementsByClassName("uiScrollableAreaWrap")[0];
  div.scrollTop = div.scrollHeight - div.clientHeight;

  i++;
  if (i === 10) clearInterval(scroller);
}, 100);

function d() {
  try {
    bArray[i].click();
    i++;

    setTimeout(() => {
      let btns = document.querySelectorAll("span");
      let btn = [].slice.call(btns).find(c => c.textContent.includes("Delete"));
      try {
        btn.click();
      } catch {}
    }, 200);

    setTimeout(() => {
      let btns = document.querySelectorAll("button");
      let btn = [].slice.call(btns).find(c => c.textContent.includes("Delete"));
      try {
        btn.click();
      } catch {}
    }, 800);
  } catch {}
  setTimeout(d, 2000);
}

d();
