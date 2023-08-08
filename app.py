from flask import Flask, render_template, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.form
    text = data['text']
    
    blob = TextBlob(text)
    sentiment_score = blob.sentiment.polarity
    
    if sentiment_score > 0:
        sentiment = 'Positive'
    elif sentiment_score < 0:
        sentiment = 'Negative'
    else:
        sentiment = 'Neutral'
    
    return jsonify({'sentiment': sentiment, 'score': sentiment_score})

if __name__ == '__main__':
    app.run(debug=True)
