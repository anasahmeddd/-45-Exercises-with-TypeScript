//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



interface Country {
    name: string;
    capital: string;
    language: string;
}

const countries: Country[] = [
    {
        name: "United States",
        capital: "Washington D.C.",
        language: "English"
    },
    {
        name: "China",
        capital: "Beijing",
        language: "Chinese"
    },
    {
        name: "Indonesia",
        capital: "jakarta",
        language: "Indonesian"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        language: "Portuguese"
    },
    {
        name: "Russia",
        capital: "Moscow",
        language: "Russian"
    }
];

console.log(" Countries:");
countries.forEach(country => console.log(country));