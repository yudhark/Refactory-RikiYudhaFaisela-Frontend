function countWords(inputText) {
    var aku = countAku(inputText);
    var ingin = countIngin(inputText);
    var dapat = countDapat(inputText);
    return ["aku: " + aku, "\ningin: " + ingin, "\ndapat: " + dapat];
}

function countAku(textAku) {
    var counter = 0;
    textAku.replace(/(\bAku)/g, () => {
        counter++;
    })
    return counter;
}

function countIngin(textIngin) {
    var counter = 0;
    textIngin.replace(/(\bingin)/g, () => {
        counter++;
    })
    return counter;
}

function countDapat(textDapat) {
    var counter = 0;
    textDapat.replace(/(\bDapat)/g, () => {
        counter++;
    })
    return counter;
}