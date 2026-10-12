// Regenerates gameHtml.js from game/cricket.html.
// Run after editing the game:  npm run sync-game
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'game', 'cricket.html'), 'utf8');
fs.writeFileSync(
  path.join(__dirname, '..', 'gameHtml.js'),
  '// AUTO-GENERATED from game/cricket.html by scripts/build-game.js - do not edit by hand.\n' +
    'export const GAME_HTML = ' + JSON.stringify(html) + ';\n'
);
console.log('gameHtml.js written (' + html.length + ' chars)');
