document.addEventListener('DOMContentLoaded', function() {
    const analyzeButton = document.getElementById('analyzeButton');
    const inputText = document.getElementById('inputText');
    const resultDiv = document.getElementById('result');

    analyzeButton.addEventListener('click', function() {
        const text = inputText.value;
        
        if (text.trim() !== '') {
            const formData = new FormData();
            formData.append('text', text);
            
            fetch('/analyze_sentiment', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                resultDiv.textContent = `Sentiment: ${data.sentiment} (${data.score})`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});
