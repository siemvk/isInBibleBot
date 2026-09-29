const bible = Bun.file("full.txt");

const wordlist = (await bible.text()).split(/[\W_]+/).filter(Boolean);
const uniqueWords: string[] = [...new Set(wordlist)];

const string = "export const words = new Set(" + JSON.stringify(uniqueWords).toLowerCase() + "); export const SLOW_WORDS = " + JSON.stringify(uniqueWords).toLowerCase()
await Bun.write("words.ts", string);
