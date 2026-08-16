// ============================================================
//  MAIN ENTRY - DEBUG VERSION
// ============================================================

console.log('🚀 main.js loaded successfully');

var game;

// ---- Define startNewGame and continueGame ----
function startNewGame() {
  console.log('🟢 startNewGame() called');

  try {
    // Check if GameManager exists
    if (typeof GameManager === 'undefined') {
      console.error('❌ GameManager is not defined! Check gameManager.js');
      alert('GameManager missing! Check console.');
      return;
    }

    // Check if puzzle data exists
    if (typeof window.suspectsData === 'undefined' ||
        typeof window.mainPuzzlesData === 'undefined' ||
        typeof window.bonusPuzzlesData === 'undefined') {
      console.error('❌ Puzzle data is missing! Check puzzlesData.js');
      alert('Puzzle data missing! Check console.');
      return;
    }

    // Check if renderInitialTab exists
    if (typeof renderInitialTab === 'undefined') {
      console.error('❌ renderInitialTab is missing! Check ui.js');
      alert('UI functions missing! Check console.');
      return;
    }

    // Initialize game
    if (!game) {
      console.log('🔄 Creating new GameManager...');
      game = new GameManager();
      game.init(window.suspectsData, window.mainPuzzlesData, window.bonusPuzzlesData);
    } else {
      console.log('🔄 Resetting existing game...');
      game.resetGame();
    }
    window.game = game;
    console.log('✅ Game initialized successfully');

    // Define puzzleSolved globally
    window.puzzleSolved = function() {
      if (game) {
        console.log('📥 puzzleSolved called directly');
        game.onTowerSolved();
      }
    };

    // Hide start menu, show game wrapper
    var startMenu = document.getElementById('startMenu');
    var gameWrapper = document.getElementById('gameWrapper');

    if (!startMenu) {
      console.error('❌ #startMenu not found!');
      return;
    }
    if (!gameWrapper) {
      console.error('❌ #gameWrapper not found!');
      return;
    }

    console.log('🔄 Hiding start menu and showing game wrapper...');
    startMenu.style.display = 'none';
    gameWrapper.style.display = 'block';

    console.log('🔄 Rendering initial tab...');
    renderInitialTab();
    game.updateUI();
    console.log('✅ Game started successfully!');

    // Listen for puzzle solved messages
    window.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'PUZZLE_SOLVED') {
        if (game) {
          console.log('📥 Received puzzle solved message from iframe');
          game.onTowerSolved();
        }
      }
    }, false);

  } catch (err) {
    console.error('🔥 ERROR in startNewGame:', err);
    alert('Error starting game: ' + err.message + '\nCheck console for details.');
  }
}

function continueGame() {
  console.log('🟢 continueGame() called');

  try {
    var saved = localStorage.getItem('whitbyConspiracySave');
    if (!saved) {
      alert('No saved game found.');
      return;
    }

    var data = JSON.parse(saved);

    // Check dependencies
    if (typeof GameManager === 'undefined') {
      console.error('❌ GameManager is not defined!');
      return;
    }
    if (typeof renderInitialTab === 'undefined') {
      console.error('❌ renderInitialTab is missing!');
      return;
    }

    if (!game) {
      console.log('🔄 Creating new GameManager for load...');
      game = new GameManager();
      game.init(window.suspectsData, window.mainPuzzlesData, window.bonusPuzzlesData);
    }
    game.loadFromSave(data);
    window.game = game;

    window.puzzleSolved = function() {
      if (game) game.onTowerSolved();
    };

    var startMenu = document.getElementById('startMenu');
    var gameWrapper = document.getElementById('gameWrapper');
    if (startMenu) startMenu.style.display = 'none';
    if (gameWrapper) gameWrapper.style.display = 'block';

    renderInitialTab();
    game.updateUI();

    window.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'PUZZLE_SOLVED') {
        if (game) game.onTowerSolved();
      }
    }, false);

    console.log('✅ Game loaded successfully');
  } catch (e) {
    console.error('🔥 ERROR in continueGame:', e);
    alert('Error loading saved game: ' + e.message);
  }
}

// ---- Expose to window ----
window.startNewGame = startNewGame;
window.continueGame = continueGame;

// ---- DOM ready ----
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 DOM fully loaded');

  // Get button elements
  var newGameBtn = document.getElementById('newGameBtn');
  var continueBtn = document.getElementById('continueGameBtn');
  var howToPlayBtn = document.getElementById('howToPlayBtn');

  console.log('🔍 Button elements:', {
    newGameBtn: newGameBtn,
    continueBtn: continueBtn,
    howToPlayBtn: howToPlayBtn
  });

  if (!newGameBtn) console.error('❌ #newGameBtn not found!');
  if (!continueBtn) console.error('❌ #continueGameBtn not found!');
  if (!howToPlayBtn) console.error('❌ #howToPlayBtn not found!');

  // Attach listeners with direct function assignment
  if (newGameBtn) {
    newGameBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('👆 New Game button clicked');
      startNewGame();
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('👆 Continue button clicked');
      continueGame();
    });

    // Set Continue button state
    var saved = localStorage.getItem('whitbyConspiracySave');
    if (!saved) {
      continueBtn.style.opacity = '0.4';
      continueBtn.style.pointerEvents = 'none';
    }
  }

  if (howToPlayBtn) {
    howToPlayBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('👆 How to Play button clicked');
      var modal = document.getElementById('howModal');
      if (modal) {
        modal.style.display = 'flex';
        console.log('✅ How to Play modal opened');
      } else {
        console.error('❌ #howModal not found!');
      }
    });
  }

  // Close handlers
  var closeHowBtn = document.getElementById('closeHowModal');
  if (closeHowBtn) {
    closeHowBtn.addEventListener('click', function() {
      document.getElementById('howModal').style.display = 'none';
    });
  }

  var closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      document.getElementById('infoModal').style.display = 'none';
    });
  }

  var closeConfirmBtn = document.getElementById('closeConfirmModal');
  if (closeConfirmBtn) {
    closeConfirmBtn.addEventListener('click', function() {
      document.getElementById('confirmModal').style.display = 'none';
    });
  }

  window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('infoModal')) {
      document.getElementById('infoModal').style.display = 'none';
    }
    if (e.target === document.getElementById('confirmModal')) {
      document.getElementById('confirmModal').style.display = 'none';
    }
  });

  // Accuse button
  var accuseBtn = document.getElementById('accuseBtn');
  if (accuseBtn) {
    accuseBtn.addEventListener('click', function() {
      if (game && game.cryptogramSolved && !game.caseClosed) {
        if (typeof showCryptogramModal === 'function') {
          showCryptogramModal(function(suspectId) {
            if (suspectId === 's3') {
              game.caseClosed = true;
              game.showPopup('🎉 You caught the mastermind! Case closed!');
            } else {
              game.showPopup('❌ Wrong suspect! Keep investigating.');
              game.prisonYears = Math.max(0, game.prisonYears - 5);
              game.updateUI();
            }
          });
        }
      } else {
        alert('You must decode the cryptogram first!');
      }
    });
  }

  console.log('✅ All event listeners attached');
});
