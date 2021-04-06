function RestrictWords(sentence) {
    // var restrictedWords = new Array("dolor", "elit", "quis", "nisi", "fugiat", "proident", "laborum");
    var censoredword = sentence
        .replace("dolor", "*****")
        .replace("elit", "*****")
        .replace("quis", "****")
        .replace("nisi", "*****")
        .replace("fugiat", "******")
        .replace("proident", "*******")
        .replace("laborum", "******");
    console.log(censoredword);
    return censoredword;
}