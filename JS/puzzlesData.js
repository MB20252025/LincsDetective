// ============================================================
//  PUZZLES DATA – Suspects, Main Puzzles, Bonus Puzzles
// ============================================================

// ========== SUSPECTS (unchanged) ==========
var suspectsData = [
  // ... (keep your existing suspects – omitted for brevity but must be included)
];

// ========== MAIN PUZZLES (unchanged) ==========
var mainPuzzlesData = [
  // ... (keep your existing main puzzles)
];

// ========== BONUS PUZZLES (UPDATED unlockAfterMain) ==========
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
    unlockAfterMain: 1,  // after Main 1 (The Escape Route)
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
    unlockAfterMain: 2,  // after Main 2 (Two Mischievous Watchers)
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
    unlockAfterMain: 3,  // after Main 3 (Street of Shining Metal)
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
    unlockAfterMain: 4,  // after Main 4 (The Chase Through Lincoln)
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
    unlockAfterMain: 5,  // after Main 5 (The Roar of the Crowd)
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
    unlockAfterMain: 6,  // after Main 6 (Defenders of the Castle)
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