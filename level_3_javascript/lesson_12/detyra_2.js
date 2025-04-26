let emrat = [];

for (let i = 0; i < 5; i++) {
    let emer = prompt("Shkruani emrin e " + (i + 1) + "-te personit:");
    emrat.push(emer);
}

let div = document.getElementById("emrat");
for (let i = 0; i < emrat.length; i++) {
    let p = document.createElement("p");
    p.textContent = emrat[i];
    div.appendChild(p);
}

