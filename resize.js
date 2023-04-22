import sharp from 'sharp';

const letters = [...Array(24).keys()].map(i => String.fromCharCode(i + 65));


for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
        const combi = `${letters[i]}${letters[j]}`;
        resize(`input/${combi}.jpg`, `images/${combi}.jpg`);
    }
}


function resize(input, output) {
    sharp(input)
    .resize({
        width: 60,
        height: 60,
        fit: "contain",
        background: "#FFF"
    })
    .toFile(output)
    .then(info => { 
        console.log(info);
    });
}