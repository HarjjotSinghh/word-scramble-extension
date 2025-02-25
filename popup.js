const words = [
    {
        "word": "pocket",
        "hint": "A bag for carrying small things"
    },
    {
        "word": "needle",
        "hint": "A thin & sharp metal pin"
    },
    {
        "word": "expert",
        "hint": "Person with extensive knowledge"
    },
    {
        "word": "statement",
        "hint": "A declaration of something"
    },
    {
        "word": "library",
        "hint": "Place containing collection of books"
    },
    {
        "word": "second",
        "hint": "It comes after first"
    },
    {
        "word": "mobile",
        "hint": "They are also called as movable species"
    },
    {
        "word": "laptop",
        "hint": "A device used to code program"
    },
    {
        "word": "addition",
        "hint": "The process of adding numbers"
    },
    {
        "word": "number",
        "hint": "Math symbols used for counting"
    },
    {
        "word": "apple",
        "hint": "A fruit that is red or green and often used to make pies."
    },
    {
        "word": "banana",
        "hint": "A long, curved fruit that is yellow when ripe."
    },
    {
        "word": "cherry",
        "hint": "A small, round fruit that is typically red or black."
    },
    {
        "word": "orange",
        "hint": "A citrus fruit that is orange in color."
    },
    {
        "word": "grape",
        "hint": "A small, juicy fruit that can be green, red, or purple."
    },
    {
        "word": "elephant",
        "hint": "A large, gray mammal with a trunk and tusks."
    },
    {
        "word": "mountain",
        "hint": "A large natural elevation of the earth's surface."
    },
    {
        "word": "ocean",
        "hint": "A vast body of saltwater covering much of the Earth's surface."
    },
    {
        "word": "telescope",
        "hint": "An optical instrument for viewing distant objects in space."
    },
    {
        "word": "guitar",
        "hint": "A musical instrument with strings that are plucked or strummed."
    },
    {
        "word": "butterfly",
        "hint": "An insect with colorful wings and a fluttering flight pattern."
    },
    {
        "word": "bicycle",
        "hint": "A vehicle with two wheels powered by pedals."
    },
    {
        "word": "rainbow",
        "hint": "A meteorological phenomenon with a spectrum of light."
    },
    {
        "word": "island",
        "hint": "A piece of land surrounded by water."
    },
    {
        "word": "kangaroo",
        "hint": "A marsupial native to Australia known for its hopping movement."
    },
    {
        "word": "volcano",
        "hint": "A mountain that erupts molten rock, ash, and gases."
    },
    {
        "word": "ballet",
        "hint": "A form of dance characterized by graceful movements and precise positions."
    },
    {
        "word": "chocolate",
        "hint": "A sweet food made from roasted and ground cacao seeds."
    },
    {
        "word": "astronaut",
        "hint": "A person trained to travel and work in outer space."
    },
    {
        "word": "camera",
        "hint": "A device used to capture photographs or videos."
    },
    {
        "word": "sunflower",
        "hint": "A tall plant with a large, round flower head."
    },
    {
        "word": "firefighter",
        "hint": "A person who extinguishes fires and rescues people from danger."
    },
    {
        "word": "butterfly",
        "hint": "An insect with colorful wings and a fluttering flight pattern."
    },
    {
        "word": "giraffe",
        "hint": "A tall, long-necked African mammal with spotted coat patterns."
    },
    {
        "word": "piano",
        "hint": "A musical instrument with keys that produce sounds when struck."
    },
    {
        "word": "butterfly",
        "hint": "An insect with colorful wings and a fluttering flight pattern."
    },
    {
        "word": "giraffe",
        "hint": "A tall, long-necked African mammal with spotted coat patterns."
    },
    {
        "word": "hurricane",
        "hint": "A severe tropical storm with strong winds and heavy rain."
    },
    {
        "word": "sunset",
        "hint": "The daily disappearance of the sun below the horizon."
    },
    {
        "word": "magnet",
        "hint": "An object that attracts certain materials like iron or steel."
    },
    {
        "word": "sculpture",
        "hint": "Three-dimensional art created by shaping or carving materials."
    },
    {
        "word": "treasure",
        "hint": "Valuable items or wealth hidden or stored in a secret place."
    },
    {
        "word": "astronaut",
        "hint": "A person trained to travel and work in outer space."
    },
    {
        "word": "lighthouse",
        "hint": "A tower with a bright light to guide ships at sea."
    },
    {
        "word": "parachute",
        "hint": "A device used to slow down a person's fall from an aircraft."
    },
    {
        "word": "sunshine",
        "hint": "Direct light and warmth from the sun."
    },
    {
        "word": "fountain",
        "hint": "A structure that shoots water into the air for decorative or functional purposes."
    },
    {
        "word": "caterpillar",
        "hint": "The larval stage of a butterfly or moth."
    },
    {
        "word": "telescope",
        "hint": "An optical instrument for viewing distant objects in space."
    },
    {
        "word": "carousel",
        "hint": "A rotating platform with seats or animals for amusement rides."
    },
    {
        "word": "volcano",
        "hint": "A mountain that erupts molten rock, ash, and gases."
    },
    {
        "word": "whisper",
        "hint": "Speaking softly or in a hushed tone to convey a message."
    },
    {
        "word": "rainbow",
        "hint": "A meteorological phenomenon with a spectrum of light."
    },
    {
        "word": "crystal",
        "hint": "A solid material with a regular repeating pattern in its atoms."
    },
    {
        "word": "puzzle",
        "hint": "A game, toy, or problem designed to test ingenuity or knowledge."
    }
]


const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
let correctWord;

const initGame = () =>{
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value="";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);
}

const checkword = ()=>{
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) return alert("Please enter a correct word.");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word.`);
    else alert(`Congrats! ${userWord} is a correct word.`);
    initGame();
}


initGame();


refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkword);