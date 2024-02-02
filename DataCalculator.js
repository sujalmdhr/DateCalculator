class DateCalculator {
    // Ensure immutability for these date values.
    constructor(startDate, endDate) {
        // Constructor initializes the immutable start and end dates
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Pure function to calculate the difference in days between two dates
    calculateDaysDifference() {
        // Immutability is maintained by using const variables
        return Math.floor((this.endDate - this.startDate) / (24 * 60 * 60 * 1000));
    }

    // Higher-order function to create a function that calculates days difference
    static daysDifference(daysFunction) {
        return (startDate, endDate) => daysFunction(startDate, endDate);
    }

    // Function composition using a higher-order function
    static composedFunction(daysFunction, startDate, endDate) {
        return DateCalculator.daysDifference(daysFunction)(startDate, endDate);
    }
}

// Define the two dates
const startDate = new Date(2080, 0, 30);
const endDate = new Date(2080, 1, 10);

// Create an instance of DateCalculator
const calculator = new DateCalculator(startDate, endDate);

// Use the calculateDaysDifference method (pure function)
const result = calculator.calculateDaysDifference();

console.log(`Number of days between ${startDate.toDateString()} and ${endDate.toDateString()}: ${result} days`);
