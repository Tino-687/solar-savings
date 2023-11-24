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

    // Calculate the yearly consumption based on some average conversion factor
    // For simplicity, we assume 1 euro = 1 kWh, which might not be accurate
    const yearlyConsumption = numericBill * 12;

    // Example static results with updated values
    const resultsHTML = `
        <h2>Estimated Savings</h2>
        <p>Transition Cost: €25,000 (after incentives)</p>
        <p>Monthly Savings: €90</p>
        <p>Payback Period: 5 years</p>
        <div class='info-bubble'>
            You consume on average ${yearlyConsumption} kWh per year according to your electricity bill. 
            The best way to cut energy costs is to cut down on usage!
        </div>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
}
