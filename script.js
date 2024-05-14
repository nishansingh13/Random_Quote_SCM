let mainButton = document.getElementById("main_button");
let output = document.getElementById("quote");
let bookmarkButton = document.getElementById("bookmark-button");
let resetButton = document.getElementById("reset-button");
let bookmarkedQuotes = [];
let quote = [
    '"The only kway to do great work is to love what you are doing" - Albert Schweitzer.',
    '"The best revenge is to be unlike him who performed the injury" - Marcus Aurelius.',
    '"To be yourself is all that you can do" - Chris Cornell.',
    '"The greatest wealth is to live content with little" - Plato.',
    '"Life is really simple, but we insist on making it complicated" - Confucius.',
    '"The harder I work, the luckier I get" - Samuel Goldwyn.',
    '"The only thing that is constant is change" - Heraclitus.',
    '"It is not what happens to you, but how you react to it that matters" - Epictetus.',
    '"In three words I can sum up everything I have learned about life: it goes on" - Robert Frost.',
    '"The only thing you cannot afford to do is nothing" - Robert Kiyosaki.',
    '"Dont count the days, make the days count" - Muhammad Ali.',
    '"The only way to do great work is to love what you do" - Steve Jobs.',
    '"The best revenge is massive success" - Frank Sinatra.',
    '"The only thing that is constant is change" - Heraclitus.',
    '"The only thing you cannot afford to do is nothing" - Robert Kiyosaki.',
    '"I have not failed. I have just found 10,000 ways that will not work" - Thomas A. Edison.',
    '"You miss 100% of the shots you dont take" - Wayne Gretzky.',
    '"It always seems impossible until it is done" - Nelson Mandela.',
    '"The only thing we have to fear is fear itself" - Franklin D. Roosevelt.',
    '"Life is what happens when you are busy making other plans" - John Lennon.',
    '"The future belongs to those who believe in the beauty of their dreams" - Eleanor Roosevelt.',
    '"If you want to lift yourself up, lift up someone else" - Booker T. Washington.',
    '"The secret of getting ahead is getting started" - Mark Twain.',
    '"I know that I am intelligent because I know that I know nothing" - Socrates.',
    '"If you are going through hell, keep going" - Winston Churchill.',
    '"Life is 10% what happens to us and 90% how we react to it" - Charles R. Swindoll.',
    '"The only thing you cannot afford to lose is time" - Robert Kiyosaki.',
    '"If you dont stand for something, you will fall for anything" - Malcolm X.',
    '"The best revenge is to be unlike him who performed the injury" - Marcus Aurelius.',
    '"Dont count the days, make the days count" - Muhammad Ali.',
    '"The only limit to our realization of tomorrow will be our doubts of today" - Franklin D. Roosevelt.',
    '"The only way to do great work is to love what you do" - Steve Jobs.',
    '"The only thing necessary for the triumph of evil is for good men to do nothing" - Edmund Burke.',
];

let naturequotes = [
    '"Nature is not a place to visit, it is home." –Gary Snyder',
    '"In every walk with nature one receives far more than he seeks." –John Muir',
    '"Some old-fashioned things like fresh air and sunshine are hard to beat." –Laura Ingalls Wilder',
    '"My wish is to stay always like this, living quietly in a corner of nature." –Claude Monet,',
    '"For a time, I rest in the grace of the world, and am free." –Wendell Berry,',
    '"Adopt the pace of nature: her secret is patience." - Ralph Waldo Emerson',
'"In every walk with nature, one receives far more than he seeks." - John Muir',
'"The mountains are calling, and I must go." - John Muir',
'"Nature does not hurry, yet everything is accomplished." - Lao Tzu',
'"Look deep into nature, and then you will understand everything better." - Albert Einstein',
'"The earth has music for those who listen." - George Santayana',
'"In the woods, we return to reason and faith." - Ralph Waldo Emerson',
'"Study nature, love nature, stay close to nature. It will never fail you." - Frank Lloyd Wright',
'"Nature always wears the colors of the spirit." - Ralph Waldo Emerson',
'"The poetry of the earth is never dead." - John Keats',
'"Nature is not a place to visit. It is home." - Gary Snyder',
'"Nature is pleased with simplicity." - Isaac Newton',
'"Nature does nothing uselessly." - Aristotle',
'"A morning-glory at my window satisfies me more than the metaphysics of books." - Walt Whitman'
];

let sciencequotes = [
    '"The cosmos invites us to explore; its mysteries fuel our patience and curiosity." - Carl Sagan',
'"In each scientific inquiry, we find answers that exceed our quest." - Rachel Carson',
'"Science beckons us forward, urging us to seek the hidden wonders." - Neil deGrasse Tyson',
'"The patience of science reveals truths; it is a journey, not just a destination." - Stephen Hawking',
'"Look deep into the data; therein lies the beauty and logic of science." - Richard Feynman',
'"The universe whispers its secrets to those who study its laws." - Albert Einstein',
'"In the laboratory, we return to wonder and exploration." - Marie Curie',
'"Embrace the complexity of science; its puzzles unfold with each experiment." - Jane Goodall',
'"Science dances with uncertainty; therein lies its charm and resilience." - Isaac Newton',
'"In every hypothesis, there is a journey toward discovery." - Galileo Galilei'
];
let educationalquotes=[
    '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X',
    '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever." - Mahatma Gandhi',
    '"The mind is not a vessel to be filled, but a fire to be kindled." - Plutarch',
    '"Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats',
    '"An investment in knowledge pays the best interest." - Benjamin Franklin',
    '"The beautiful thing about learning is that no one can take it away from you." - B.B. King',
    '"Education is not preparation for life; education is life itself." - John Dewey',
    '"The only person who is educated is the one who has learned how to learn and change." - Carl Rogers'
]


function bookmarkQuote() {
    var currentQuote = output.textContent;
    if (!bookmarkedQuotes.includes(currentQuote)) {
        bookmarkedQuotes.push(currentQuote);
        updateBookmarkList();
    }
}
function updateBookmarkList() {
    var bookmarkList = document.getElementById("bookmark-list");
    if (bookmarkList) {
        bookmarkList.innerHTML = "";
        bookmarkedQuotes.forEach(function (quote) {
            var li = document.createElement("li");
            li.textContent = quote;
            bookmarkList.appendChild(li);
        });
    }
}
function resetBookmarks() {
    bookmarkedQuotes = [];
    localStorage.removeItem("bookmarkedQuotes");
    updateBookmarkList();
}
    mainButton.addEventListener('click', function () {
    var got = document.getElementById("get").value.toLowerCase();
    if (got === "nature") {
        var randomQuote = naturequotes[Math.floor(Math.random() * naturequotes.length)];
        output.textContent = randomQuote;
    } else if (got === "scientific") {
        var randomQuote = sciencequotes[Math.floor(Math.random() * sciencequotes.length)];
        output.textContent = randomQuote;
    } 
    else if (got==="educational"){
        var randomQuote=educationalquotes[Math.floor(Math.random()* educationalquotes.length)];
        output.textContent=randomQuote;
    }
    else {
        var randomQuote = quote[Math.floor(Math.random() * quote.length)];
        output.textContent = randomQuote;
    }
});
bookmarkButton.addEventListener("click", bookmarkQuote);
resetButton.addEventListener("click", resetBookmarks);
