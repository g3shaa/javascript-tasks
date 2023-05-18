async function calculateFactorial(number) {
    let factorial = 1;
    let output = `Факториел от ${number} е: `;

    await new Promise(resolve => {
        let interval = setInterval(() => {
            output += factorial + ", ";
            factorial *= number--;

            if (number === 1) {
                output += factorial;
                clearInterval(interval);
                resolve(output);
            }
        }, 500);
    });

    return output;
}

async function main() {
    console.log("Стартиране на изчислението на факториела");
    let result = await calculateFactorial(10);
    console.log(result);
}

main();