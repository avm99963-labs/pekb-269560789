var startup = JSON.parse(document.querySelector("html").getAttribute("data-startup"));

for (let i = 0; i < 500000; i++) {
  startup[1][1][8][7].push({
    "1": 20,
    "2": `${1715122244427074 + i}`,
    "3": "0"
  });
}

document.querySelector("html").setAttribute("data-startup", JSON.stringify(startup));
