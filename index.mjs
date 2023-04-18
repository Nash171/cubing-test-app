import words from './words.json' assert { type: "json" };

const letters = [...Array(24).keys()].map(i => String.fromCharCode(i + 65));

const hideImg = function(){ this.style.display='none'; };

const generateTable = function() {
    const headRow = document.getElementById("header-row");

    for (let i = 0; i < letters.length; i++) {
        const th = document.createElement("th");
        th.textContent = letters[i];
        th.colSpan = 2; 
        
        headRow.appendChild(th);
    }

    const tableBody = document.getElementById("tbody");

    for (let i = 0; i < letters.length; i++) {
        const row = document.createElement("tr");
        
        const ltr = document.createElement("td");
        ltr.className = "row-header";
        ltr.textContent = letters[i];
        
        row.appendChild(ltr);

        for (let j = 0; j < letters.length; j++) {
            
            const combi = `${letters[i]}${letters[j]}`;
            
            const word = document.createElement("td");
            word.className = "text-cell";
            word.title = combi;
            word.textContent = words[combi];
            //word.colSpan = 2;
            row.appendChild(word);
            
            if (i == j) {
                word.colSpan = 2;
            } else {
                const imgCell = document.createElement("td");
                imgCell.className = "img-cell";

                const img = document.createElement("img");
                img.src = `images/${combi}.jpg`;
                img.onerror = hideImg;

                imgCell.appendChild(img);

                row.appendChild(imgCell);
            }
        }

        tableBody.appendChild(row);
    }
}


window.onload = function() {
    generateTable();
};