
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The best way to predict the future is to invent it. – Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
        "The best revenge is massive success. – Frank Sinatra"
    ];

    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote;
});
