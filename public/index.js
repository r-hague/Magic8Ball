// Librairies
import Framework7 from 'framework7/framework7.esm'

// Theme
var theme = 'auto';

// Init F7
var app = new Framework7({
  root: '#app',
  theme: theme,
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
})

document.getElementById("magic").addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const aAnswers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
      ];
    const nAnswer = Math.floor(Math.random() * aAnswers.length);
    document.getElementById("answer").innerHTML = aAnswers[nAnswer];
});
