import {
    INSPIRATIONAL_QUOTES,
} from './InspirationalQuotes'

const getRandomQuote = () => {
	return INSPIRATIONAL_QUOTES[Math.floor(Math.random()*INSPIRATIONAL_QUOTES.length)];
}

const printQuote = () => {
    console.log(getRandomQuote());
}
printQuote();