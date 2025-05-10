document.getElementById('surveyForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const surveyData = Object.fromEntries(formData.entries());
    
    // Log the data (for testing purposes)
    console.log(surveyData);

    // Simulate saving to a database
    try {
        const response = await fetch('https://your-database-api-endpoint.com/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surveyData)
        });

        if (response.ok) {
            alert('Survey submitted successfully!');
            this.reset();
        } else {
            alert('Failed to submit survey. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting your survey.');
    }
});
