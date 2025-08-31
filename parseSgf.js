/**
 * parseSgf() - Extract metadata from SGF file contents 
 * returns an object with attributes for each bit of game metadata
 */
function sanitize(result) {
  return result?.length ? result[1] : "";
}

module.exports = function(sgfString) {
  const place = /PC\[(.*?)\]/i.exec(sgfString);       // Place played
  const datePlayed = /DT\[(.*?)\]/i.exec(sgfString);  // Date played
  const app = /AP\[(.*?)\]/i.exec(sgfString);         // Applicatio used
  const size = /SZ\[(.*?)\]/i.exec(sgfString);        // Board size
  const game = /GM\[(.*?)\]/i.exec(sgfString);       // Game type (should be 1 for go)
  const annotator = /AN\[(.*?)\]/i.exec(sgfString);   // annotater
  const blackRank = /BR\[(.*?)\]/i.exec(sgfString);   // Black rank
  const whiteRank = /WR\[(.*?)\]/i.exec(sgfString);   // White rank
  const playerBlack = /PB\[(.*?)\]/i.exec(sgfString); // White rank
  const playerWhite = /PW\[(.*?)\]/i.exec(sgfString); // White rank
  const copyright = /CP\[(.*?)\]/i.exec(sgfString);   // Copyright info
  const timeLimit = /TM\[(.*?)\]/i.exec(sgfString);   // (Main) time limit in seconds
  const overtime = /OT\[(.*?)\]/i.exec(sgfString);    // Overtime
  const results = /RE\[(.*?)\]/i.exec(sgfString);     // Results
  const rules = /RU\[(.*?)\]/i.exec(sgfString);       // Game rules (Japanese/Chinese/AGA, etc.)
  const handicap = /HA\[(.*?)\]/i.exec(sgfString);    // Handicap
  const komi = /KM\[(.*?)\]/i.exec(sgfString);        // Komi

  const sgf = {
    place: sanitize(place),
    datePlayed: sanitize(datePlayed),
    app: sanitize(app),
    size: sanitize(size),
    game: sanitize(game),
    annotator: sanitize(annotator),
    blackRank: sanitize(blackRank),
    whiteRank: sanitize(whiteRank),
    playerBlack: sanitize(playerBlack),
    playerWhite: sanitize(playerWhite),
    copyright: sanitize(copyright),
    timeLimit: sanitize(timeLimit),
    overtime: sanitize(overtime),
    results: sanitize(results),
    rules: sanitize(rules),
    handicap: sanitize(handicap),
    komi: sanitize(komi)
  };

  return sgf;
}
