function displayExampleSavings() {

    const monthlyBill = document.getElementById('billInput').value;

    const numericBill = parseFloat(monthlyBill.replace(/[^\d.]/g, ''));

    const yearlyConsumption = (numericBill / 0.5) * 12;

   
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

    document.getElementById('emailSection').style.display = 'block';
}

function sendQuoteRequest() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        alert("Quote request sent! We will contact you at " + email);
    } else {
        alert("Please enter a valid email address.");
    }
}
