function getBestRestaurant(restaurants) {
    const restaurantInfo = new Map(); // initialize a Map to store the restaurant information
    for (const restaurant of restaurants) {
        const [name, workersStr] = restaurant.split(" - ");
        const workers = workersStr.split(", ");
        let totalSalary = 0;
        const workersList = [];
        for (const worker of workers) {
            const [workerName, salaryStr] = worker.split(" ");
            const salary = parseFloat(salaryStr);
            totalSalary += salary;
            workersList.push({
                name: workerName,
                salary
            });
        }
        if (restaurantInfo.has(name)) { // if the restaurant already exists, update its information
            const [prevTotalSalary, prevWorkersList] = restaurantInfo.get(name);
            totalSalary += prevTotalSalary;
            workersList.push(...prevWorkersList);
        }
        restaurantInfo.set(name, [totalSalary, workersList]); // add or update the restaurant's information
    }

    let bestRestaurant = null;
    for (const [name, [totalSalary, workers]] of restaurantInfo.entries()) {
        const avgSalary = totalSalary / workers.length;
        const bestSalary = Math.max(...workers.map((w) => w.salary));
        if (bestRestaurant === null || avgSalary > bestRestaurant.avgSalary || (avgSalary === bestRestaurant.avgSalary && name < bestRestaurant.name)) {
            bestRestaurant = {
                name,
                avgSalary,
                bestSalary
            };
        }
    }

    const workersStr = restaurantInfo.get(bestRestaurant.name)[1]
        .sort((w1, w2) => w2.salary - w1.salary)
        .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(" ");

    return [`Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`, workersStr];
}

const restaurants = ["PizzaHut - Peter 1000, Ivan 200, George 800", "TheLake - Bob 850, Jane 650"];
const [bestRestaurantInfo, workersInBestRestaurant] = getBestRestaurant(restaurants);
console.log(bestRestaurantInfo);
console.log(workersInBestRestaurant);