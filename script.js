// Creating constant for initialising talk and content
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


// Function for voice assistnt speak
function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

//
function wishMe(){
    const day = new Date();
    console.log(day);
    var hour = day.getHours();

    if (hour>=0 && hour<12){
        speak("Good Morning Sir...")
    }
    else if (hour>=12 && hour<17){
        speak("Good Afternoon Sir...")
    }
    else{
        speak("Good Evenining Sir...")
    }
}


// On window load
window.addEventListener('load', () =>{
    speak("Initializing SUNDAY...");
    wishMe();
});


// Taking Spech Manually
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// For taking speech from window or device
const recognition = new SpeechRecognition();

// For showing the speecch on screen
recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

// For clicking the button
btn.addEventListener("click", ()=>{
    content.textContent = "I'm Listening...";
    recognition.start();

});

// For taking Command 
function takeCommand(message){
    // for say hello
    if(message.includes('hey sunday') || message.includes('hello sunday')){
        speak("Hello Sir , How may I help you?")
    }
    // for knowing about SUNDAY
    else if(message.includes('who is sudev')){
        speak("Mr. Sudeb Paul created me , and he is an engineer by profession")
    }
    // for knowing about SUNDAY
    else if(message.includes('who are you')){
        speak("I am SUNDAY , a voice assistant of Mr. Sudeb")
    }
    // for knowing what can SUNDAY do
    else if(message.includes('what you can do') || message.includes('what can you do')){
        speak("I am a voice assistant of Mr. Sudeb , I can help you in virtual tasks")
    }
    // For opening google
    else if(message.includes('open google')){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    // for opening youtube
    else if(message.includes('open youtube')){
        window.open("https://youtube.com", "_blank")
        speak("Opening YouTube...")
    }
    // for opening facebook
    else if(message.includes('open facebook')){
        window.open("https://facebook.com", "_blank")
        speak("Opening Facebook...")
    }
    // for opening chatgpt
    else if(message.includes('open chat gpt')){
        window.open("https://chatgpt.com/", "_blank")
        speak("Opening chat gpt...")
    }
    // for searching on google
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "This is what I found on internet regarding " + message;
        speak(finalText);
    }
    // for searching on youtube
    else if(message.includes('youtube')){
        window.open(`https://www.youtube.com/results?search_query=${message.replace(" ", "+")}`, "_blank")
        const finalText = "This is what I found on youtube regarding " + message;
        speak(finalText);
    }
    // for searching on wikipedia
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }
    // for searching on  chatgpt
    else if(message.includes('chat gpt')){
        window.open(`https://chatgpt.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "This is what I found on internet regarding " + message;
        speak(finalText);
    }
    // for slangs
    else if(message.includes('bal') || message.includes('baal')){
        speak("bookkaa chooddaa")
    }
    // for time
    else if(message.includes('time')){
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }
    // for date
    else if(message.includes("date")){
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }
    // for current day and current time
    else if(message.includes('current')){
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = time + "and " + date;
        speak(finalText);
    }
    // for opening weather app
    else if(message.includes('weather')){
        window.open('https://weather.com/')
        const finalText = "Opening Weather App";
        speak(finalText);
    }
    // for opening currency converter
    else if(message.includes('currency converter')){
        window.open('https://www.google.com/search?q=currency+converter')
        const finalText = "Opening Currency Converter";
        speak(finalText);
    }
    // for opening calculator
    else if(message.includes('calculator')){
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    // for opening whatsapp
    else if(message.includes('whatsapp')){
        window.open('Whatsapp:///')
        const finalText = "Opening Whatsapp";
        speak(finalText);
    }
    // for opening vscode
    else if(message.includes('vs code')){
        window.open('Vscode:///')
        const finalText = "Opening VScode";
        speak(finalText);
    }
    // if no command matches
    else{
        speak("I'm not able to understand your command.")
    }
}