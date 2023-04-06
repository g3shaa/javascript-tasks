function hardWords(array) {

    let words = array[1];
    let text = array[0];
    words.sort((a, b) => b.length - a.length);
    for (let word of words) {
        text = text.replace("_".repeat(word.length), word)
    }
    console.log(text);
}

hardWords(['a__b_c', ['x','yy']])