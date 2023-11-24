function displayExampleSavings() {
    // Example static results with updated values
    const resultsHTML = `
        <h2>Estimated Savings</h2>
        <p>Transition Cost: €25,000 (after incentives)</p>
        <p>Monthly Savings: €90</p>
        <p>Payback Period: 5 years</p>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
}
function displayExampleSavings() {
    // Assuming the user enters their monthly bill amount in the billInput field
    const monthlyBill = document.getElementById('billInput').value;
    // Remove non-numeric characters and convert to number
    const numericBill = parseFloat(monthlyBill.replace(/[^\d.]/g, ''));

    // Calculate the yearly consumption
    // Here, we assume 0.5 euro = 1 kWh
    const yearlyConsumption = (numericBill / 0.5) * 12;

    // Example static results with updated values
    const resultsHTML = `
        <h2>Estimated Savings</h2>
        <p>Transition Cost: €25,000 (after incentives)</p>
        <p>Monthly Savings: €90</p>
        <p>Payback Period: 5 years</p>
        <div class='info-bubble'>
            You consume on average ${yearlyConsumption.toFixed(2)} kWh per month according to your electricity bill. 
            Keep in mind that  the best way to cut energy costs is to cut down on usage!
        </div>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
}
