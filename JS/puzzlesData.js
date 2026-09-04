// ============================================================
//  PUZZLES DATA – Suspects, Main Puzzles, Bonus Puzzles
// ============================================================

// ========== SUSPECTS ==========
var suspectsData = [
  { id: "s1", name: "Neil Down", emoji: "👨",
    questions: ["Where were you during the heist?", "Did you hear anything unusual inside the building?", "Did anyone speak directly to you during the incident?", "Did you see anyone carrying items out?", "What were all three people wearing at the time?", "Who seemed the most nervous out of everyone?", "Did you notice anything strange before or after the event?", "Did anyone give instructions or orders to the group?", "Did you see anyone carrying tools or equipment?", "Was there any arguing or disagreement between them?", "Did you observe where each person went afterwards?", "Who looked the most experienced or in control?", "Did anyone drop or leave anything behind?", "Did you hear any names mentioned during the event?", "Was there someone acting as a lookout?", "Did anyone seem scared or hesitant?", "Did you see anyone handling money or valuables?", "Is there anything else you noticed that stood out?"],
    responses: ["I was in the maintenance corridor fixing a door issue.","I heard footsteps and a faint metallic bang.","One security guard briefly asked for help.","I saw no one carrying anything out.","One in a high-vis vest, one in dark clothing, one in uniform.","The person in dark clothing seemed most nervous.","Nothing unusual before or after the repairs.","No one gave me any instructions.","I noticed tools like a crowbar nearby.","No arguing, only quiet movement.","I stayed near the same area, didn't track them leaving.","The uniformed one seemed most experienced.","I didn't see anything dropped.","I heard no names mentioned.","I didn't see any lookout.","One person looked slightly anxious.","I didn't see any money handled.","Loose wiring and broken panel stood out."]
  },
  { id: "s2", name: "Sienna Clarke", emoji: "👨🏻‍🦰",
    questions: ["Where were you during the heist?", "Did you hear anything unusual inside the system?", "Did anyone talk to you directly?", "Did you see anyone carrying items out?", "What were the three people wearing?", "Who seemed the most nervous?", "Did you notice anything unusual before or after?", "Did anyone give instructions?", "Did you notice anyone carrying tools?", "Was there any arguing among them?", "Did you see where each went after leaving?", "Who seemed most experienced?", "Did anyone drop anything?", "Did you hear any names?", "Was there a lookout?", "Did anyone seem scared?", "Did anyone handle money?", "Anything else stand out?"],
    responses: ["I was monitoring systems remotely at the time.","I detected multiple system breaches.","No one spoke to me directly.","Digital logs showed movement only.","Identities appeared masked and inconsistent.","One profile showed instability.","System behaviour changed suddenly.","Automated instructions were triggered.","I detected tool usage in restricted zones.","Logs suggest internal disagreement.","Digital tracking showed split exits.","The admin profile seemed most experienced.","One data packet was corrupted.","I recorded the name 'Vega'.","A system node acted as lookout.","One identity showed panic signals.","Encrypted transfers were recorded.","Security override signature stood out."]
  },
  { id: "s3", name: "Vincent Hale", emoji: "🧓🏼",
    questions: ["Where were you during the heist?", "Did you hear anything unusual inside the building?", "Did anyone talk to you directly?", "Did you see anyone carrying items out?", "What were the three people wearing?", "Who seemed the most nervous?", "Did you notice anything unusual before or after?", "Did anyone give instructions?", "Did you notice anyone carrying tools?", "Was there any arguing among them?", "Did you see where each went after leaving?", "Who seemed most experienced?", "Did anyone drop anything?", "Did you hear any names?", "Was there a lookout?", "Did anyone seem scared?", "Did anyone handle money?", "Anything else stand out?"],
    responses: ["I was in my office reviewing performance reports.","I heard faint movement but nothing clear.","A staff member gave me a brief update.","I didn't see anyone carrying items.","One in uniform, one in dark clothing, one in high-vis.","The one in dark clothing seemed most nervous.","System alerts behaved strangely afterwards.","No one gave direct instructions to me.","I didn't notice tools being used.","No arguments were visible from my position.","I didn't track where anyone went afterwards.","The uniformed person seemed most experienced.","I didn't see anything dropped.","No names were mentioned around me.","I didn't observe a lookout.","One person appeared slightly uneasy.","I didn't see any money handled.","Unexpected system lag stood out."]
  }
];

// ========== MAIN PUZZLES ==========
var mainPuzzlesData = [
  { id: "p1", title: "The Escape Route", desc: "Tracing the thief's possible escape route on a map. They were last seen heading south, heading south on the River Witham. Which town along the river could the thief have stopped at for coffee?", solution: "B", digit: "3", hints: ["Follow the river south — not every option actually sits along its path.", "One of these places is a smaller village rather than a well-known town.", "The correct answer is the only place the River Witham actually flows past."], options: [{letter:"A", text:"A) Claythorpe"}, {letter:"B", text:"B) Colsterworth"}, {letter:"C", text:"C) Stamford"}] },
  { id: "p2", title: "Two Mischievous Watchers", desc: "Inside the great cathedral, two small stone imps hide. They've seen everything – my footsteps, my shadows. On which two sides of the cathedral are the famous imps located?", solution: "C", digit: "2", hints: ["It's an old-style road surface.", "You'd feel it through thin shoes.", "It's made from lots of small stones."], options: [{letter:"A", text:"A) North and North side"}, {letter:"B", text:"B) North and East Side"}, {letter:"C", text:"C) North and South side"}] },
  { id: "p3", title: "Street of Shining Metal", desc: "I walked a street that gleams like polished metal – perhaps tin or silver. There, a saint's name still echoes in memory, carved or named long ago. Find that saint, and you'll know where I passed. Which saint's name remains on that metallic street?", solution: "C", digit: "2", hints: ["Shines like metal, points to the street name itself.", "The street is named after a precious material.", "The clue refers to \"Stonebow\" — think of a saint linked to the Lincoln area."], options: [{letter:"A", text:"A) St Hugh"}, {letter:"B", text:"B) St Benedict"}, {letter:"C", text:"C) St Paul"}] },
  { id: "p4", title: "The Chase Through Lincoln", desc: "I left the cathedral, walked through the gate, and paused before the hill. Hungry, I ate pie, cheese, and fudge – threw a penny down a well, then carried on. I saw a family of five, each on their own bench. My pace quickened. I went straight to the crossroads, turned, and saw my favourite place had a new show. I took a left and was chased by swans. Spun right, caught a bus to the bottom of Grantham. Unlocked a Viking's gate, headed west, went halfway, then climbed the terrace to stake out my next heist.", solution: "B", digit: "0", hints: ["You pass famous Lincoln spots like the cathedral area and Steep Hill.", "The journey ends somewhere historical, not artistic.", "It's not the Usher Gallery — think more general history of Lincoln."], options: [{letter:"A", text:"A) Museum of Lincolnshire Life"}, {letter:"B", text:"B) Lincoln Museum"}, {letter:"C", text:"C) Usher Gallery"}] },
  { id: "p5", title: "The Roar of the Crowd", desc: "Red and white rise together. Every seat has its place, every voice its space. When full, the roar of the imps shakes the stands. How many of them can be heard at once?", solution: "C", digit: "4", hints: ["Think smaller than big Premier League stadiums.", "It's just over ten thousand, not close to twelve.", "The exact number is ten thousand, seven hundred and eighty."], options: [{letter:"A", text:"A) 11500"}, {letter:"B", text:"B) 11920"}, {letter:"C", text:"C) 10780"}] },
  { id: "p6", title: "Defenders of the Castle", desc: "Outside Lincoln Castle, silent sentinels stand. They've never moved, but they could speak with thunder. What are these iron protectors?", solution: "A", digit: "2", hints: ["They stand outside the castle walls.", "They are historical weapons of war.", "They fire cannonballs, not arrows."], options: [{letter:"A", text:"A) Cannons"}, {letter:"B", text:"B) Tower Guards"}, {letter:"C", text:"C) Catapult"}] },
  { id: "p7", title: "A Gift Of Power", desc: "A king left behind a mark of power in stone. A gift, tied to justice and command. His name is carved where law once stood. Who was he?", solution: "B", digit: "3", hints: ["Known as the Lionheart.", "A famous crusader king.", "His name is Richard, not William or Henry."], options: [{letter:"A", text:"A) William the Conqueror"}, {letter:"B", text:"B) Henry I"}, {letter:"C", text:"C) Richard I"}] }
];

// ========== BONUS PUZZLES ==========
var bonusPuzzlesData = [
  {
    id: "letter_puzzle",
    title: "The Braggers Note",
    desc: "A mysterious letter with hidden UV ink.",
    solution: "walker jewellery store",
    hints: [
      "Use the UV torch to reveal the hidden letters.",
      "The letters spell a shop name.",
      "It's a jewellery store."
    ],
    unlockAfterMain: 1,
    render: function(solved) {
      return '<div class="folder-card" id="letter-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">📜</span>' +
        '<div class="folder-title">The Braggers Note</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return answer.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '') === "walker jewellery store";
    }
  },
  {
    id: "coffee_puzzle",
    title: "The measure of a Thief",
    desc: "Pour exactly 8 litres into the 10L jug.",
    solution: "8",
    hints: [
      "You have 6L, 5L and 10L containers.",
      "Start with the 6L and 5L full.",
      "The 10L jug starts empty."
    ],
    unlockAfterMain: 2,
    render: function(solved) {
      return '<div class="folder-card" id="coffee-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">☕</span>' +
        '<div class="folder-title">The measure of a Thief</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return true;
    }
  },
  {
    id: "shelf_puzzle",
    title: "The Shelf of Secrets",
    desc: "Find the correct sequence of books to open the hidden drawer.",
    solution: "shelf",
    hints: [
      "The correct order is from largest to smallest disc.",
      "Look at the book spines for numbers.",
      "The order is 6,5,4,3,2,1."
    ],
    unlockAfterMain: 3,
    render: function(solved) {
      return '<div class="folder-card" id="shelf-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">📚</span>' +
        '<div class="folder-title">The Shelf of Secrets</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return true;
    }
  },
  {
    id: "locker_puzzle",
    title: "The Cold Case Cabinet",
    desc: "Crack the evidence locker combinations using the clues.",
    solution: "locker",
    hints: [
      "Each locker has a unique 3-digit combination.",
      "Clues are given – use logic to deduce the digits.",
      "When you open the sixth locker, you'll find the evidence."
    ],
    unlockAfterMain: 4,
    render: function(solved) {
      return '<div class="folder-card" id="locker-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">🔒</span>' +
        '<div class="folder-title">The Cold Case Cabinet</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return true;
    }
  },
  {
    id: "scale_puzzle",
    title: "The Balance of Justice",
    desc: "Use the balance scale to deduce the hidden values of the star, triangle, and circle.",
    solution: "solve",
    hints: [
      "Place weights on both sides to find the balance.",
      "The secret values are whole numbers.",
      "Try to create equilibrium."
    ],
    unlockAfterMain: 5,
    render: function(solved) {
      return '<div class="folder-card" id="scale-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">⚖️</span>' +
        '<div class="folder-title">The Balance of Justice</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return true;
    }
  },
  {
    id: "vault_puzzle",
    title: "The Vault",
    desc: "Crack the vault security system and unlock the evidence inside.",
    solution: "vault",
    hints: [
      "Solve the security pattern grid.",
      "Remove the screws to access the wires.",
      "Cut the green wire to reveal the solution.",
      "Enter the combination 2-4-6 on the lockbox."
    ],
    unlockAfterMain: 6,
    render: function(solved) {
      return '<div class="folder-card" id="vault-puzzle-folder" style="width:200px; margin:0 auto;">' +
        '<span class="folder-icon">🔐</span>' +
        '<div class="folder-title">The Vault</div>' +
        (solved ? '<div class="solved-badge">✅ SOLVED!</div>' : '') +
        '</div>';
    },
    check: function(answer) {
      return true;
    }
  }
];

// ========== EXPOSE ==========
window.mainPuzzlesData = mainPuzzlesData;
window.bonusPuzzlesData = bonusPuzzlesData;
window.suspectsData = suspectsData;
window.mainPuzzles = mainPuzzlesData;
window.bonusPuzzles = bonusPuzzlesData;
