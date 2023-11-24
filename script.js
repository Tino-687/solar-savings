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
        <p>Transition Cost: €25,000 (without gouvernement incentives)</p>
        <p>Monthly Savings: €40</p>
        <p>Payback Period: 5 years</p>
        <div class='info-bubble'>
            You consume on average ${yearlyConsumption.toFixed(2)} kWh per year according to your electricity bill. 
            Remember that the best way to cut energy costs is to cut down on usage!
        </div>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
    // Show the email section
    document.getElementById('emailSection').style.display = 'block';
}

function sendQuoteRequest() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        // Here you would add logic to send the email to your server
        // For demonstration, we'll just show an alert
        alert("Quote request sent! We will contact you at " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}
