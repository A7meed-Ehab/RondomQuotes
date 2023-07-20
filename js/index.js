function GenerateQuote() {
    var quotes = {
        'Mahatma Gandhi': 'Be the  change that you wish to see in the world.',
        'Mae West': 'You only live once, but if you do it right, once is enough.',
        'Marcus Tullius Cicero': 'A room without books is like a body without a soul.'
    }
    var authors =Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}