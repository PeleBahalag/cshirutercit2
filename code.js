const EXPLANATION_HTML = `
    <h1 class="titleText" id="title">מה נלמד פה?</h1>
    <p class="text" id="text">בלומדה זו נבחן את הידע שלכם במפת ארץ ישראל והסביבה ובהמנון הלאומי.</p>
    <button class="button explainButton" id="button">אז יאללה בואו נתחיל?</button>
`;
const EXPLANATION_EX1_HTML = `
    <h1 class="titleText" id="title">משימה 1</h1>
    <p class="text" id="text">לפניכם מפת ארץ ישראל ומחסן מילים. <br> עליכם לגרור ממחסן המילים את המקום אל מיקומו המתאים במפה. <br> אם עניתם נכון המקום ישאר על המפה, אחרת יחזור למקומו. <br> ראשית תזהו את חלוקת האזורים ולאחר מכן תזהו את מיקומי הערים.</p>
    <button class="button" id="button">הבנתי</button>
`;
const EXER1_HTML = `
    <div>
        <img src="media/israelMap.png" alt="מפת ישראל" class="map">
        <p class="text seaText">הים התיכון</p>
        <div class="drop-count">
            <div class="drop drop-country drop-country0" id="drop0"></div>
            <div class="drop drop-country drop-country1" id="drop1"></div>
            <div class="drop drop-country drop-country2" id="drop2"></div>
            <div class="drop drop-country drop-country3" id="drop3"></div>
            <div class="drop drop-country drop-country5" id="drop5"></div>
        </div>
    </div>
    <div class="dropCountries" id="countries">
        <div class="drop countriesNames" id="drag1">סוריה</div>
        <div class="drop countriesNames" id="drag2">לבנון</div>
        <div class="drop countriesNames" id="drag3">רצועת עזה</div>
        <div class="drop countriesNames" id="drag5">ירדן</div>
        <div class="drop countriesNames" id="drag0">מצרים</div>
    </div>
`;

const COUNTRIES_VALUES_EXR1 = [ //טווח ערכים למיקומים של המדינות
    { "topmax" : `67`,
        "topmin" : `50`,
        "leftmax" : `9`,
        "leftmin" : `-5`
    },
    { "topmax" : `17`,
        "topmin" : `1`,
        "leftmax" : `87`,
        "leftmin" : `63`
    },
    { "topmax" : `3`,
        "topmin" : `-6`,
        "leftmax" : `51`,
        "leftmin" : `33`
    },
    { "topmax" : `42`,
        "topmin" : `25`,
        "leftmax" : `7`,
        "leftmin" : `-5`
    },
    { "topmax" : `34`,
        "topmin" : `12`,
        "leftmax" : `78`,
        "leftmin" : `58`
    },
    { "topmax" : `53`,
        "topmin" : `36`,
        "leftmax" : `72`,
        "leftmin" : `45`
    },
];

const EXER2_HTML = `
    <div>
        <img src="media/israelMap.png" alt="מפת ישראל" class="map">
        <p class="text seaText">הים התיכון</p>
        <div class="drop-count">
            <div class="drop drop-country drop-country0" id="country0">מצרים</div>
            <div class="drop drop-country drop-country1" id="country1">סוריה</div>
            <div class="drop drop-country drop-country2" id="country2">לבנון</div>
            <div class="drop drop-country drop-country3" id="country3">רצועת עזה</div>
            <div class="drop drop-country drop-country5" id="country5">ירדן</div>
            
            <div class="drop drop-country drop-country-ex2-0 dropCities" id="drop0"></div>
            <div class="drop drop-country drop-country-ex2-1 dropCities" id="drop1"></div>
            <div class="drop drop-country drop-country-ex2-2 dropCities" id="drop2"></div>
            <div class="drop drop-country drop-country-ex2-3 dropCities" id="drop3"></div>
            <div class="drop drop-country drop-country-ex2-4 dropCities" id="drop4"></div>
            <div class="drop drop-country drop-country-ex2-5 dropCities" id="drop5"></div>
            <div class="drop drop-country drop-country-ex2-6 dropCities" id="drop6"></div>
            <div class="drop drop-country drop-country-ex2-7 dropCities" id="drop7"></div>
            <div class="drop drop-country drop-country-ex2-8 dropCities" id="drop8"></div>
            <div class="drop drop-country drop-country-ex2-9 dropCities" id="drop9"></div>
            <div class="drop drop-country drop-country-ex2-10 dropCities" id="drop10"></div>
            <div class="drop drop-country drop-country-ex2-11 dropCities" id="drop11"></div>
            <div class="drop drop-country drop-country-ex2-12 dropCities" id="drop12"></div>
            <div class="drop drop-country drop-country-ex2-13 dropCities" id="drop13"></div>
            <div class="drop drop-country drop-country-ex2-14 dropCities" id="drop14"></div>

            <img src="media/pin.png" alt="סיכה" id="pin0" class="pin pin0">
            <img src="media/pin.png" alt="סיכה" id="pin1" class="pin pin1">
            <img src="media/pin.png" alt="סיכה" id="pin2" class="pin pin2">
            <img src="media/pin.png" alt="סיכה" id="pin3" class="pin pin3">
            <img src="media/pin.png" alt="סיכה" id="pin4" class="pin pin4">
            <img src="media/pin.png" alt="סיכה" id="pin5" class="pin pin5">
            <img src="media/pin.png" alt="סיכה" id="pin6" class="pin pin6">
            <img src="media/pin.png" alt="סיכה" id="pin7" class="pin pin7">
            <img src="media/pin.png" alt="סיכה" id="pin8" class="pin pin8">
            <img src="media/pin.png" alt="סיכה" id="pin9" class="pin pin9">
            <img src="media/pin.png" alt="סיכה" id="pin10" class="pin pin10">
            <img src="media/pin.png" alt="סיכה" id="pin11" class="pin pin11">
            <img src="media/pin.png" alt="סיכה" id="pin12" class="pin pin12">
            <img src="media/pin.png" alt="סיכה" id="pin13" class="pin pin13">
            <img src="media/pin.png" alt="סיכה" id="pin14" class="pin pin14">
        </div>

    </div>
    <div class="dropCountries" id="countries">
        <div class="drop countriesNames ex2Countries" id="drag0">באר שבע</div>
        <div class="drop countriesNames ex2Countries" id="drag1">מצפה רמון</div>
        <div class="drop countriesNames ex2Countries" id="drag2">עכו</div>
        <div class="drop countriesNames ex2Countries" id="drag3">קריית שמונה</div>
        <div class="drop countriesNames ex2Countries" id="drag4">טבריה</div>
        <div class="drop countriesNames ex2Countries" id="drag5">ירושלים</div>
        <div class="drop countriesNames ex2Countries" id="drag6">חיפה</div>
        <div class="drop countriesNames ex2Countries" id="drag7">סיירים</div>
        <div class="drop countriesNames ex2Countries" id="drag8">נהריה</div>
        <div class="drop countriesNames ex2Countries" id="drag9">אשדוד</div>
        <div class="drop countriesNames ex2Countries" id="drag10">תל אביב</div>
        <div class="drop countriesNames ex2Countries" id="drag11">אילת</div>
        <div class="drop countriesNames ex2Countries" id="drag12">אשקלון</div>
        <div class="drop countriesNames ex2Countries" id="drag13">חברון</div>
        <div class="drop countriesNames ex2Countries" id="drag14">שדרות</div>
    </div>
`;

const COUNTRIES_VALUES_EXR2 = [ //טווח ערכים למיקומים של המדינות
    { "topmax" : `51`, //0
        "topmin" : `34`,
        "leftmax" : `52`,
        "leftmin" : `35`
    },
    { "topmax" : `62`, //1
        "topmin" : `49`,
        "leftmax" : `55`,
        "leftmin" : `38`
    },
    { "topmax" : `16`, //2
        "topmin" : `-1`,
        "leftmax" : `60`,
        "leftmin" : `43`
    },
    { "topmax" : `10`, //3
        "topmin" : `-7`,
        "leftmax" : `77`,
        "leftmin" : `60`
    },
    { "topmax" : `22`, //4
        "topmin" : `5`,
        "leftmax" : `75`,
        "leftmin" : `58`
    },
    { "topmax" : `37`, //5
        "topmin" : `20`,
        "leftmax" : `62`,
        "leftmin" : `45`
    },
    { "topmax" : `18`, //6
        "topmin" : `1`,
        "leftmax" : `30`,
        "leftmin" : `13`
    },
    { 
        // "topmax" : `56`, //7
        // "topmin" : `42`,
        // "leftmax" : `51`,
        // "leftmin" : `34`
        "topmax" : `65`, //7
        "topmin" : `49`,
        "leftmax" : `31`,
        "leftmin" : `14`
    },
    { "topmax" : `13`, //8
        "topmin" : `-4`,
        "leftmax" : `35`,
        "leftmin" : `18`
    },
    { "topmax" : `32`, //9
        "topmin" : `15`,
        "leftmax" : `22`,
        "leftmin" : `5`
    },
    { "topmax" : `29`, //10
        "topmin" : `12`,
        "leftmax" : `51`,
        "leftmin" : `34`
    },
    { "topmax" : `70`, //11
        "topmin" : `53`,
        "leftmax" : `56`,
        "leftmin" : `39`
    },
    { "topmax" : `37`, //12
        "topmin" : `20`,
        "leftmax" : `15`,
        "leftmin" : `-2`
    },
    { "topmax" : `46`, //13
        "topmin" : `29`,
        "leftmax" : `63`,
        "leftmin" : `46`
    },
    { "topmax" : `41`, //14
        "topmin" : `24`,
        "leftmax" : `47`,
        "leftmin" : `30`
    },
];

const EXPLANATION1_EX3_HTML = `
    <h1 class="titleText" id="title">משימה 2</h1>
    <p class="text" id="text">לפניכם חלוקה לבתים של ההמנון הלאומי.<br>
    השלימו את מילותיו.</p>
    <button class="button" id="button">הבנתי</button>
`;

const EXPLANATION2_EX3_HTML = `
    <h1 class="titleText" id="title">אבל רגע לפני</h1>
    <div class="huedDivContainer">
        <div class="huedDivs">
            <p>שם ההמנון</p>
            <input id="input1" type="text" value="">
            <p class="divsAnswer" id="ans1">התקוה</p>
        </div>
        <div class="huedDivs">
            <p>נכתב על ידי</p>
            <input id="input2" type="text" value="">
            <p class="divsAnswer" id="ans2">נפתלי הרץ אימבר</p>
        </div>
        <div class="huedDivs">
            <p>נכתב בשנת</p>
            <input id="input3" type="text" value="">
            <p class="divsAnswer" id="ans3">1878</p>
        </div>
    </div>
    <button class="button" id="button">בדיקה</button>
`;

const EXER4_HTML = `
    <p class="text" id="text">השלימו את מילות ההמנון</p>
    <button class="button" id="button">בדיקה</button>
    <div id="lyrics_container">
    </div>
`;

const HATIKVA_LYRICS = [`כל`, `עוד`, `בלבב`, `פנימה`, `נפש`, `יהודי`, `הומיה`, `ולפאתי`, `מזרח`, `קדימה`, `עין`, `לציון`, `צופיה`,
 `עוד`, `לא`, `אבדה`, `תקותנו`, `התקוה`, `בת`, `שנות`, `אלפים`, `להיות`, `עם`, `חפשי`, `בארצנו`, `ארץ`, `ציון`, `וירושלים`];

let currentExer = 0;

const FINISH_SCREEN = `
    <h1 class="titleText">כל הכבוד סיימתם את הלומדה!</h1>
    <p class="text finishText" id="text">אם אתם מרגישים לא מוכנים עדיין אתם מוזמנים לחזור על הלומדה כמה שתרצו.</p>
    <button class="button" id="button">הבא</button>
`
const SYMBOLS_HTML = `
    <div id="symbols">
        // <img id="gapaLogo" src="media/פלא.png" alt="סמל פלא" class="gapaLogo">
        <img src="media/סמל סיירים ללא רקע.png" alt="סמל בהלג" class="shivtaLogo">
    </div>
`;

const LAST_PAGE = `
    <div class="lastPage1">פה עבורכם לכל דבר- משרד חינוך בהל״ג</div>
    <div class="lastPage2">קצינת חינוך בהל״ג- <br>
    שחר מקוב <br>
    054-3982638</div>
    <img src="media/sroh3.svg" alt="שרוך אפור" class="sroh">
    <button class="button" id="button">עוד פעם!</button>
`;

let restart = false;

window.addEventListener("load", () => {
    document.getElementById("start_button").style.bottom = `40%`;
    document.getElementById("start_button").addEventListener("click", start);
    // document.getElementById("start_button").addEventListener("click", endPage);
});

const start = () => {
    if (!restart) {
        document.getElementById("start_button").removeEventListener("click", start);
    }
    // document.getElementById("body").removeChild(document.getElementById("symbols"));
    document.getElementById("gapaLogo").style.display = "none";
    
    document.getElementById("content").innerHTML = EXPLANATION_HTML;
    document.getElementById("title").style.top = `7%`;
    document.getElementById("button").addEventListener("click", startExOneExplanation);
}

const startExOneExplanation = () => {
    document.getElementById("button").removeEventListener("click", startExOneExplanation);
    document.getElementById("content").innerHTML = EXPLANATION_EX1_HTML;
    document.getElementById("title").style.top = `5%`;
    document.getElementById("text").style.top = `15%`;
    document.getElementById("button").addEventListener("click", startExr1);
}

const startExr1 = () => {
    document.getElementById("button").removeEventListener("click", startExr1);
    document.getElementById("content").innerHTML = EXER1_HTML;
    currentExer = 1;
    document.getElementById("countries").style.bottom = `10vh`;
    document.getElementById("countries").addEventListener("touchmove", dragTouchMove);
    document.getElementById("countries").addEventListener("touchend", dragTouchEnd);
}

const startExr2 = () => {
    currentExer = 2;
    document.getElementById("button").removeEventListener("click", startExr2);
    document.getElementById("content").innerHTML = EXER2_HTML;
    document.getElementById("countries").addEventListener("touchmove", dragTouchMove);
    document.getElementById("countries").addEventListener("touchend", dragTouchEnd);
    
}

const dragTouchMove = (event) => {
    if(event.target.id.slice(0,4) === "drag") {
        var touchlocations = event.targetTouches[0];
        event.target.style.position = `absolute`;
        event.target.style.left = (parseInt(touchlocations.clientX) / window.innerWidth) * 100 - 20 + `vw`;
        event.target.style.top = (parseInt(touchlocations.clientY) / window.innerHeight) * 100 - 70 + `vh`;
    }
}


const dragTouchEnd = (event) => {
    if(event.target.id.slice(0,4) === "drag") {
        var x = parseInt(event.target.style.left);
        var y = parseInt(event.target.style.top) + 70;
        var num = parseInt(event.target.id.slice(4));
        var name = event.target.innerText;
        var values = [];

        if (currentExer === 1) {
            values = COUNTRIES_VALUES_EXR1;
        } else if (currentExer === 2) {
            values = COUNTRIES_VALUES_EXR2;
        }

        if (y <= values[num].topmax &&
            y >= values[num].topmin &&
            x <= values[num].leftmax &&
            x >= values[num].leftmin ) {
                document.getElementById(`drop${num}`).innerText = name;
                document.getElementById(`drop${num}`).classList.add(`rightAnswerDrag`);
                document.getElementById("countries").removeChild(event.target);
        } else {
            document.getElementById("countries").removeChild(event.target);
            document.getElementById("countries").innerHTML += `<div class="drop countriesNames ex2Countries" id="drag${num}">${name}</div>`;
        }

        if (document.getElementById("countries").innerText === "") {
            document.getElementById("countries").removeEventListener("touchmove", dragTouchMove);
            document.getElementById("countries").removeEventListener("touchend", dragTouchEnd);
            document.getElementById("countries").innerHTML = `<button class="button" id="button">המשך</button>`;

            if (currentExer === 1) {
                document.getElementById("button").addEventListener("click", startExr2);
            } else if (currentExer === 2) {
                document.getElementById("button").addEventListener("click", startExr3);
            }
        }
    }
}

const startExr3 = () => {
    document.getElementById("button").removeEventListener("click", startExr3);
    document.getElementById("content").innerHTML = EXPLANATION1_EX3_HTML;
    document.getElementById("button").style.bottom = `15vh`;
    document.getElementById("button").addEventListener("click", () => {
        document.getElementById("content").innerHTML = EXPLANATION2_EX3_HTML;
        document.getElementById("title").style.top = `0.5vh`;
        document.getElementById("title").style.fontSize = `7vmax`;
        document.getElementById("button").style.bottom = `15vh`;
        document.getElementById("button").addEventListener("click", checkExr3);

    });
}

const checkExr3 = () => {
    for ( i = 1; i <= 3; i++) {
        if (document.getElementById(`input${i}`).value === document.getElementById(`ans${i}`).innerText) {
            document.getElementById(`ans${i}`).style.color = `green`;
        }
        document.getElementById(`ans${i}`).style.display = `block`;
        document.getElementById(`input${i}`).disabled = true;
    }
    document.getElementById("button").removeEventListener("click", checkExr3);
    document.getElementById("button").innerText = "הבא";
    setTimeout(() => {
        document.getElementById("button").addEventListener("click", startExr4);
    }, "1000");
}

const startExr4 = () => {
    document.getElementById("content").innerHTML = EXER4_HTML;
    document.getElementById("text").style.top = `2%`;
    document.getElementById("text").style.textAlign = `center`;

    for ( i = 0; i < HATIKVA_LYRICS.length; i++) {
        var input = document.createElement("input");
        input.id = `input${i}`;
        input.classList.add("lyricInput");
        input.type = "text";
        document.getElementById("lyrics_container").appendChild(input);
    }
    document.getElementById("button").addEventListener("click", checkExr4);
}

const checkExr4 = () => {
    for ( i = 0; i < HATIKVA_LYRICS.length; i++) {
        if (document.getElementById(`input${i}`).value === HATIKVA_LYRICS[i]){
            document.getElementById(`input${i}`).classList.add("rightAnswerDrag");
            document.getElementById(`input${i}`).disabled = true;
        } else {
            document.getElementById(`input${i}`).classList.add("wrongAnswer");
            document.getElementById(`input${i}`).value = HATIKVA_LYRICS[i];
            document.getElementById(`input${i}`).disabled = true;
        }
    }
    document.getElementById("button").removeEventListener("click", checkExr4);
    document.getElementById("button").innerText = "הבא";
    setTimeout(() => {
        document.getElementById("button").addEventListener("click", finish);
    }, "1000");
}

const finish = () => {
    document.getElementById("body").innerHTML += SYMBOLS_HTML;
    document.getElementById("content").innerHTML = FINISH_SCREEN;
    restart = true;
    document.getElementById("button").addEventListener("click",endPage);
    document.getElementById("gapaLogo").style.display = "none";
}

const endPage = () => {
    document.getElementById("content").innerHTML = LAST_PAGE;
    document.getElementById("button").addEventListener("click", start);
}
