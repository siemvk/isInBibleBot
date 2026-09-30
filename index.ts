import { SLOW_WORDS, words } from "./words";
type bibleStats = {
    words: {
        word: string,
        isInBible: boolean,
    }[]
    percentageInBible: number,
    totalHoly: number,
    totalNot: number,
    total: number
}
function isInBible(input: string): bibleStats | false {
    const wordlist = input.split(/[\W_]+/).filter(Boolean);
    let stats: bibleStats = {
        words: [],
        percentageInBible: NaN,
        totalHoly: 0,
        totalNot: 0,
        total: wordlist.length,
    }
    if (stats.total == 0) {
        return false
    }
    wordlist.forEach((word) => {
        let isIn = words.has(word.toLowerCase());
        stats.words.push({
            word,
            isInBible: isIn
        });
        if (isIn) {
            stats.totalHoly = stats.totalHoly + 1
        } else {
            stats.totalNot = stats.totalNot + 1
        }
    });
    stats.percentageInBible = Math.round((stats.totalHoly / stats.total) * 100)

    return stats
}

function rmNotBible(wow: string) {
    let wordlist = wow.split(/[\W_]+/).filter(Boolean).filter((v) => { return words.has(v.toLowerCase()) });
    return wordlist.toString().replaceAll(",", " ")
}

function randomBibleWord() {
    return SLOW_WORDS[Math.floor(Math.random() * SLOW_WORDS.length)]
}