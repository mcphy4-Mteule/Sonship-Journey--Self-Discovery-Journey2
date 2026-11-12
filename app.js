/* =====================================
   QUESTIONS
===================================== */

const questions = [

/* ======================================
   PICTURE OF GOD
====================================== */

{
 segment: "Picture of God",
 text: "I find it easy to believe that God welcomes me even when I have struggled spiritually.",
 reverse: true
},

{
 segment: "Picture of God",
 text: "I often assume God is more pleased with me when I have performed well.",
 reverse: false
},

{
 segment: "Picture of God",
 text: "My image of God is largely shaped by my personal experiences with authority figures.",
 reverse: false
},

{
 segment: "Picture of God",
 text: "When I disappoint myself, I assume I have disappointed God too.",
 reverse: false
},

{
 segment: "Picture of God",
 text: "I believe God's affection toward me remains constant.",
 reverse: true
},

/* ======================================
   THEOLOGY
====================================== */

{
 segment: "Theology",
 text: "I believe God's grace is available even when I fall short.",
 reverse: true
},

{
 segment: "Theology",
 text: "Sometimes I feel as though I must earn what Christ has already provided.",
 reverse: false
},

{
 segment: "Theology",
 text: "My understanding of God continues to evolve as I grow spiritually.",
 reverse: false
},

{
 segment: "Theology",
 text: "I find myself measuring spiritual worth through performance.",
 reverse: false
},

{
 segment: "Theology",
 text: "Obedience is a response to God's love rather than a condition for receiving it.",
 reverse: true
},

/* ======================================
   MOTIVE FOR SERVICE
====================================== */

{
 segment: "Motive for Service",
 text: "I enjoy serving regardless of whether anyone notices.",
 reverse: true
},

{
 segment: "Motive for Service",
 text: "I feel uncomfortable when I am unable to contribute.",
 reverse: false
},

{
 segment: "Motive for Service",
 text: "Serving others helps me express gratitude to God.",
 reverse: true
},

{
 segment: "Motive for Service",
 text: "My sense of significance can be affected by how useful I feel.",
 reverse: false
},

{
 segment: "Motive for Service",
 text: "I regularly examine my motives for serving.",
 reverse: true
},

/* ======================================
   CHRISTIAN DISCIPLINES
====================================== */

{
 segment: "Christian Disciplines",
 text: "Spending time with God feels like an invitation rather than an obligation.",
 reverse: true
},

{
 segment: "Christian Disciplines",
 text: "I sometimes feel guilty when I miss spiritual disciplines.",
 reverse: false
},

{
 segment: "Christian Disciplines",
 text: "My spiritual practices help me remain connected to God.",
 reverse: true
},

{
 segment: "Christian Disciplines",
 text: "I occasionally believe God is happier with me when I pray more.",
 reverse: false
},

{
 segment: "Christian Disciplines",
 text: "Prayer feels more like conversation than duty.",
 reverse: true
},

/* ======================================
   GOD'S PRESENCE
====================================== */

{
 segment: "God's Presence",
 text: "I believe God remains near even when I do not feel Him.",
 reverse: true
},

{
 segment: "God's Presence",
 text: "I sometimes hesitate to approach God because I feel unworthy.",
 reverse: false
},

{
 segment: "God's Presence",
 text: "My awareness of God's presence varies from season to season.",
 reverse: false
},

{
 segment: "God's Presence",
 text: "I often feel that I have to regain God's approval after failure.",
 reverse: false
},

{
 segment: "God's Presence",
 text: "I am confident I can come to God honestly in any circumstance.",
 reverse: true
},

/* ======================================
   POSITION
====================================== */

{
 segment: "Position",
 text: "I genuinely see myself as a child of God.",
 reverse: true
},

{
 segment: "Position",
 text: "I often compare my spiritual life with other Christians.",
 reverse: false
},

{
 segment: "Position",
 text: "My sense of belonging in God's family feels secure.",
 reverse: true
},

{
 segment: "Position",
 text: "I sometimes feel more like an employee of God than a son or daughter.",
 reverse: false
},

{
 segment: "Position",
 text: "My identity in Christ influences how I approach challenges.",
 reverse: true
},

/* ======================================
   VISION
====================================== */

{
 segment: "Vision",
 text: "My greatest desire is to know God more deeply.",
 reverse: true
},

{
 segment: "Vision",
 text: "Recognition from others strongly affects how successful I feel.",
 reverse: false
},

{
 segment: "Vision",
 text: "I define spiritual success by faithfulness more than achievement.",
 reverse: true
},

{
 segment: "Vision",
 text: "I become discouraged when my efforts go unnoticed.",
 reverse: false
},

{
 segment: "Vision",
 text: "My long-term goals are shaped by my relationship with God.",
 reverse: true
},

/* ======================================
   FUTURE
====================================== */

{
 segment: "Future",
 text: "I trust God with my future even when circumstances are uncertain.",
 reverse: true
},

{
 segment: "Future",
 text: "I frequently worry about losing what God has given me.",
 reverse: false
},

{
 segment: "Future",
 text: "My expectations of the future are influenced by my understanding of God's character.",
 reverse: true
},

{
 segment: "Future",
 text: "Anxiety often shapes my anticipation of what lies ahead.",
reverse: false
},

{
 segment: "Future",
 text: "I believe God desires good things for His children.",
 reverse: true
/* =====================================
   STORAGE
===================================== */   
const STORAGE_KEY =
"sonship_self_discovery_journey";

function saveProgress() {
   ...
}

function loadProgress() {
   ...
}

function clearProgress() {
   ...
 saveProgress()
function saveProgress(){

    const data = {

        answers,
        current

    };

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}
loadProgress()
function loadProgress(){

    const saved =
    localStorage.getItem(
      STORAGE_KEY
    );

    if(!saved) return;

    const data =
    JSON.parse(saved);

    answers =
    data.answers || [];

    current =
    data.current || 0;

}
clearProgress() 
} 
function clearProgress(){

    localStorage.removeItem(
      STORAGE_KEY
    );

}
function clearProgress(){

    localStorage.removeItem(
      STORAGE_KEY
    );

}
loadProgress();

answers[current] =
Number(selected.value);

saveProgress();

Save When Moving Back
if(selected){

   answers[current] =
   Number(selected.value);

   saveProgress();
Clear progres After Results   
clearProgress();
}
/* =====================================
   RESULTS
===================================== */
function calculateResults() {

    const segments = {};

    questions.forEach((question, index) => {

        let score = answers[index];

        if(question.reverse){
            score = 6 - score;
        }

        if(!segments[question.segment]){
            segments[question.segment] = [];
        }

        segments[question.segment].push(score);

    });

    const results = {};

    Object.keys(segments).forEach(segment => {

        const totalScore =
        segments[segment].reduce((a,b)=>a+b,0);

        const sonshipPercent =
        Math.round(
            ((25 - totalScore) / 20) * 100
        );

        results[segment] = sonshipPercent;

    });

    return results;

}

function overallSonshipIndex(results){

    const values =
    Object.values(results);

    const total =
    values.reduce((a,b)=>a+b,0);

    return Math.round(
        total / values.length
    );
function strongestArea(results){

    return Object.keys(results).reduce((a,b)=>
        results[a] > results[b]
        ? a
        : b
    );
function growthArea(results){

    return Object.keys(results).reduce((a,b)=>
        results[a] < results[b]
        ? a
        : b
    );
}function buildRadarData(results){
 
return {
 
labels: Object.keys(results),
 
datasets: [{
label: "Sonship Compass™",
data: Object.values(results),
}
document.getElementById(
"recommendedScriptures"
).innerHTML =
renderScriptures(growth);
           
/* =====================================
   SCORING
===================================== */
function sonshipZone(score){

    if(score >= 85)
        return "🟢 Rooted Sonship";

    if(score >= 70)
        return "🟢 Flourishing Sonship";

    if(score >= 55)
        return "🟡 Emerging Awareness";

    if(score >= 40)
        return "🟠 Identity Tension";

    return "🔴 Identity Renewal Needed";

}


 
fill: true,
 
backgroundColor:
"rgba(212,175,55,0.2)",
 
borderColor:
"#D4AF37",
 
pointBackgroundColor:
"#16375B",
 
pointBorderColor:
"#16375B"
 
}]
};
function renderResults(){

    const results =
    calculateResults();

    const overall =
    overallSonshipIndex(results);

    const strongest =
    strongestArea(results);

    const growth =
    growthArea(results);

    document.getElementById("overallScore")
        .innerText = overall + "%";

    document.getElementById("overallZone")
        .innerText = sonshipZone(overall);

    document.getElementById("strongestArea")
        .innerText = strongest;

    document.getElementById("growthArea")
        .innerText = growth;

    let html = "";

    Object.keys(results).forEach(segment=>{

        html += `
        <div class="result-card">

            <h4>${segment}</h4>

            <p>${results[segment]}%</p>

        </div>
        `;

    });

    document.getElementById(
      "segmentResults"
    ).innerHTML = html;

    createRadarChart(results);

}let radarChart;

function createRadarChart(results){

    const ctx =
    document.getElementById(
    "radarChart"
    );

    if(radarChart){
        radarChart.destroy();
    }

    radarChart =
    new Chart(ctx, {

        type: "radar",

        data:
        buildRadarData(results),

        options: {

            responsive: true,

            scales: {

                r: {

                    min: 0,
                    max: 100,

                    ticks: {
 
                        stepSize: 20
}
}assessment.classList.add("hidden");

resultsScreen.classList.remove("hidden");

renderResults();
}
SCRIPTURES
EVENTS
nextBtn.addEventListener(...)
prevBtn.addEventListener(...)
startBtn.addEventListener(...)    
saveProgress();
INITIALIZATION   
loadProgress();

if(answers.length > 0){

   welcome.classList.add("hidden");

   assessment.classList.remove("hidden");

   renderQuestion();

}
/* =====================================
   SCRIPTURE RECOMMENDATIONS
===================================== */
  const scriptures = {

    "Picture of God": {

        verses: [
            "Romans 8:15",
            "John 17:23",
            "Zephaniah 3:17"
        ],

        reflection:
        "How might your relationship with God change if you fully believed that His affection toward you remains constant?",

        prayer:
        "Father, help me to see You as You truly are and not through the lens of my fears, failures, or past experiences."

    },

    "Theology": {

        verses: [
            "Ephesians 2:8-9",
            "Romans 5:1",
            "Titus 3:5"
        ],

        reflection:
        "Where do you find yourself relying on performance rather than grace?",

        prayer:
        "Father, teach me to live from Your grace rather than striving to earn what You have already given through Christ."

    },

    "Motive for Service": {

        verses: [
            "Galatians 5:13",
            "Colossians 3:23",
            "Mark 10:45"
        ],

        reflection:
        "What would service look like if it flowed entirely from gratitude rather than significance-seeking?",

        prayer:
        "Father, let my service arise from love and gratitude rather than a desire for approval or recognition."

    },

    "Christian Disciplines": {

        verses: [
            "Psalm 27:4",
            "John 15:5",
            "Luke 10:39-42"
        ],

        reflection:
        "Do your spiritual disciplines feel more like duty or delight?",

        prayer:
        "Father, draw me into deeper enjoyment of Your presence and help me relate to You more as a child than as a worker."

    },

    "God's Presence": {

        verses: [
            "Hebrews 4:16",
            "Psalm 139:7-10",
            "Matthew 28:20"
        ],

        reflection:
        "How would your prayer life change if you truly believed God is always near?",

        prayer:
        "Father, help me approach Your throne with confidence, trusting that Your presence remains with me in every season."

    },

    "Position": {

        verses: [
            "Romans 8:16",
            "Galatians 4:6-7",
            "Ephesians 1:5"
        ],

        reflection:
        "What changes when you see yourself as a beloved child rather than someone trying to earn acceptance?",

        prayer:
        "Father, anchor my identity in Your love and remind me that I belong in Your family."

    },

    "Vision": {

        verses: [
            "Philippians 3:10",
            "Matthew 6:33",
            "John 17:3"
        ],

        reflection:
        "Is intimacy with God or visible achievement shaping your understanding of success?",

        prayer:
        "Father, let knowing You become my greatest pursuit and deepest desire."

    },

    "Future": {

        verses: [
            "Jeremiah 29:11",
            "Romans 8:28",
            "Psalm 23:6"
        ],

        reflection:
        "What fears about the future become smaller when viewed through the lens of God's goodness?",

        prayer:
        "Father, teach me to trust Your heart and Your plans, even when I cannot clearly see the path ahead."

    }
function renderScriptures(area){

    const item = scriptures[area];

    return `
        <div class="scripture-block">

            <h4>Recommended Scriptures</h4>

            <ul>
                <li>${item.verses[0]}</li>
                <li>${item.verses[1]}</li>
                <li>${item.verses[2]}</li>
            </ul>

            <h4>Reflection Question</h4>

            <p>${item.reflection}</p>

            <h4>Prayer</h4>

            <p>${item.prayer}</p>

        </div>
    `;

}
}; 
