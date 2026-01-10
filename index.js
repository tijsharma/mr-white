const wordsList = [
  ["Bridge", "Tunnel"],
  ["Hero", "Villain"],
  ["Ship", "Boat"],
  ["School", "Prison"],
  ["Hospital", "Hotel"],
  ["Teacher", "Student"],
  ["Boss", "Employee"],
  ["King", "President"],
  ["Castle", "Palace"],
  ["Church", "Temple"],
  ["Heaven", "Hell"],
  ["Day", "Night"],
  ["Fire", "Ice"],
  ["Sun", "Moon"],
  ["Light", "Shadow"],
  ["Truth", "Lie"],
  ["Dream", "Reality"],
  ["Past", "Future"],
  ["War", "Peace"],
  ["Love", "Hate"],

  ["City", "Village"],
  ["Home", "Office"],
  ["Classroom", "Courtroom"],
  ["Doctor", "Patient"],
  ["Judge", "Criminal"],
  ["Police", "Thief"],
  ["Bank", "Casino"],
  ["Rich", "Poor"],
  ["Winner", "Loser"],
  ["Leader", "Follower"],

  ["Plane", "Train"],
  ["Car", "Bus"],
  ["Road", "Railway"],
  ["Airport", "Harbor"],
  ["Suitcase", "Backpack"],
  ["Map", "Compass"],
  ["Ticket", "Passport"],
  ["Driver", "Passenger"],
  ["Pilot", "Crew"],
  ["Vacation", "Business"],

  ["Movie", "Play"],
  ["Actor", "Director"],
  ["Stage", "Screen"],
  ["Camera", "Microphone"],
  ["Song", "Speech"],
  ["Concert", "Festival"],
  ["Art", "Science"],
  ["Painting", "Photograph"],
  ["Book", "Movie"],
  ["Author", "Reader"],

  ["Game", "Sport"],
  ["Player", "Referee"],
  ["Team", "Solo"],
  ["Score", "Time"],
  ["Win", "Draw"],
  ["Practice", "Match"],
  ["Training", "Competition"],
  ["Crowd", "Audience"],
  ["Cheer", "Boo"],
  ["Trophy", "Medal"],

  ["Restaurant", "Kitchen"],
  ["Chef", "Customer"],
  ["Menu", "Recipe"],
  ["Breakfast", "Dinner"],
  ["Sweet", "Salty"],
  ["Spicy", "Mild"],
  ["Oven", "Stove"],
  ["Plate", "Bowl"],
  ["Fork", "Spoon"],
  ["Meal", "Snack"],

  ["House", "Apartment"],
  ["Room", "Hallway"],
  ["Door", "Window"],
  ["Key", "Lock"],
  ["Bed", "Couch"],
  ["Shower", "Bath"],
  ["Mirror", "Glass"],
  ["Light", "Lamp"],
  ["Stairs", "Elevator"],
  ["Roof", "Basement"],

  ["Office", "Factory"],
  ["Computer", "Notebook"],
  ["Email", "Letter"],
  ["Meeting", "Interview"],
  ["Deadline", "Schedule"],
  ["Salary", "Bonus"],
  ["Promotion", "Demotion"],
  ["Resume", "Contract"],
  ["Manager", "Intern"],
  ["Project", "Task"],

  ["Internet", "Library"],
  ["Website", "App"],
  ["Password", "Username"],
  ["Message", "Call"],
  ["Photo", "Video"],
  ["Cloud", "Server"],
  ["Online", "Offline"],
  ["Search", "Browse"],
  ["Download", "Upload"],
  ["Update", "Upgrade"],

  ["Market", "Mall"],
  ["Shop", "Warehouse"],
  ["Cash", "Card"],
  ["Receipt", "Invoice"],
  ["Price", "Value"],
  ["Cheap", "Expensive"],
  ["Sale", "Auction"],
  ["Brand", "Generic"],
  ["Customer", "Seller"],
  ["Order", "Delivery"],

  ["School", "University"],
  ["Exam", "Homework"],
  ["Lesson", "Lecture"],
  ["Notebook", "Textbook"],
  ["Grade", "Degree"],
  ["Fail", "Pass"],
  ["Question", "Answer"],
  ["Theory", "Practice"],
  ["Study", "Memorize"],
  ["Graduate", "Dropout"],

  ["Court", "Arena"],
  ["Trial", "Debate"],
  ["Law", "Rule"],
  ["Punishment", "Reward"],
  ["Prison", "Rehab"],
  ["Guilt", "Innocence"],
  ["Evidence", "Opinion"],
  ["Verdict", "Appeal"],
  ["Justice", "Revenge"],

  ["Island", "Mainland"],
  ["Mountain", "Valley"],
  ["River", "Canal"],
  ["Desert", "Swamp"],
  ["Forest", "Park"],
  ["Cave", "Mine"],
  ["Beach", "Cliff"],
  ["Volcano", "Glacier"],
  ["Storm", "Breeze"],
  ["Flood", "Drought"],

  ["Holiday", "Weekend"],
  ["Birthday", "Anniversary"],
  ["Wedding", "Funeral"],
  ["Party", "Meeting"],
  ["Surprise", "Plan"],
  ["Gift", "Payment"],
  ["Invitation", "Announcement"],
  ["Tradition", "Trend"],
  ["Memory", "Habit"],
  ["Promise", "Threat"],

  ["Hope", "Fear"],
  ["Confidence", "Doubt"],
  ["Pride", "Shame"],
  ["Anger", "Calm"],
  ["Stress", "Relaxation"],
  ["Trust", "Suspicion"],
  ["Respect", "Contempt"],
  ["Freedom", "Control"],
  ["Risk", "Safety"],
  ["Choice", "Chance"],

  ["Beginning", "Ending"],
  ["Cause", "Effect"],
  ["Problem", "Solution"],
  ["Question", "Mystery"],
  ["Order", "Chaos"],
  ["Rule", "Exception"],
  ["Pattern", "Random"],
  ["Fact", "Opinion"],
  ["Signal", "Noise"],
  ["Limit", "Freedom"],

  ["Clock", "Calendar"],
  ["Morning", "Evening"],
  ["Now", "Later"],
  ["Early", "Late"],
  ["Fast", "Slow"],
  ["Short", "Long"],
  ["Simple", "Complex"],
  ["Local", "Global"],
  ["Private", "Public"],
  ["Rare", "Common"],
];

const GameState = {
  LOBBY: "lobby",
  IN_ROUND: "in_round",
};

const renderPage = () => {
  const game_state = sessionStorage.getItem("game_state");
  if (game_state === GameState.LOBBY) {
    document.getElementById("lobby").style.display = "";
    document.getElementById("in_game").style.display = "none";
  } else if (game_state === GameState.IN_ROUND) {
    document.getElementById("lobby").style.display = "none";
    document.getElementById("in_game").style.display = "";
  }
};

const resetBackToLobby = () => {
  sessionStorage.clear();
  sessionStorage.setItem("game_state", GameState.LOBBY);
  renderInitialPlayerList();
  renderPage();
};

const onLoad = () => {
  sessionStorage.setItem("game_state", GameState.LOBBY);
  resetBackToLobby(); // in case of reload
  renderPage();
};

const onPlayerListUpdated = () => {
  let playerList = [];
  const txtplayerList = document.getElementsByClassName("text-player-name");
  for (let textBox of txtplayerList) {
    playerList.push(textBox.value.trim());
  }
  localStorage.setItem("player_list", JSON.stringify(playerList));
};

// eslint-disable-next-line
const removeTextPlayerName = (param) => {
  param.parentNode.remove();
  onPlayerListUpdated();
};

const getTextForTextPlayerName = (playerName) => {
  playerName = playerName ? playerName : '""';

  return `
    <div style=
      "
        display: flex;
        margin-top: 5px;
        margin-bottom: 5px;
        align-items: center;
      "
    >
      <input
        type="text"
        class="text-player-name"
        value="${playerName}"
        style="
          background-color: #e8e6e3;
          font-family: 'Comic Sans MS', sans-serif;
          padding: 0px;
          padding-left: 5px;
          padding-right: 5px;
          margin-right: 5px;
          height: 30px;
        "
      />
      <div
        onclick="removeTextPlayerName(this)"
        style="
          display: flex;
          background-color: #e8e6e3;
          font-family: sans-serif;
          font-weight: bold;
          height: 30px;
          width: 30px;
          justify-content: center;
          align-items: center;
        "
      >
        <p>x</p>
      </div>
    </ div>
  `;
};

const addPlayerText = (_, playerName = "") => {
  let newElement = document.createElement("div");
  newElement.innerHTML = getTextForTextPlayerName(playerName);
  document.getElementById("div_text_player_names").appendChild(newElement);
  onPlayerListUpdated();
};

const renderInitialPlayerList = () => {
  document.getElementById("div_text_player_names").innerHTML = ""; // reset div

  const playerList = JSON.parse(localStorage.getItem("player_list"));
  if (playerList === null) {
    return;
  }

  for (let playerName of playerList) {
    addPlayerText(null, playerName);
  }
};

// eslint-disable-next-line
const revealPlayerWord = (playerName) => {
  const playerWords = JSON.parse(sessionStorage.getItem("player_words"));
  alert(playerWords[playerName]);
};

const getTextForBtnPlayerWord = (playerName) => {
  return `
    <button
      class="btn_player_word"
      onclick="revealPlayerWord(this.textContent.trim())"
      style="
        font-family: 'Comic Sans MS', sans-serif;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 7px;
        padding-right: 7px;
        margin: 5px;
      "
    >
      ${playerName}
    </button>
  `;
};

const getRandInt = (n) => {
  /*Returns a random integer x where 0 <= x < n */
  return Math.floor(Math.random() * n);
};

const getUndercoverAndCivillianWords = () => {
  const wordPairIndex = getRandInt(wordsList.length);
  const wordsPair = wordsList[wordPairIndex];

  const undercoverWordIndex = getRandInt(2);
  const civillianWordIndex = 1 - undercoverWordIndex;

  const undercoverWord = wordsPair[undercoverWordIndex];
  const civillianWord = wordsPair[civillianWordIndex];

  const roleWords = {
    undercover: undercoverWord,
    civillian: civillianWord,
  };

  return roleWords;
};

const pickRandomItemFromList = (list) => {
  const randIndex = getRandInt(list.length);
  return list[randIndex];
};

const startListAtNewIndex = (list, newStartIndex) => {
  // Creates a new list that maintains existing ordering but starts list at new index
  let i = newStartIndex;
  let newList = [];

  while (true) {
    newList.push(list[i]);
    i += 1;
    if (i >= list.length) {
      i = 0;
    }
    if (i === newStartIndex) {
      return newList;
    }
  }
};

const createPlayerTurnList = (civillians) => {
  // Create a turn order to start with a random civillian
  let randomCivillian = pickRandomItemFromList(civillians);
  const playerList = JSON.parse(localStorage.getItem("player_list"));

  const playerTurnList = startListAtNewIndex(
    playerList,
    playerList.indexOf(randomCivillian)
  );

  sessionStorage.setItem("player_turn_list", JSON.stringify(playerTurnList));
};

const assignWordsBasedOnRoleCounts = (roleCounts, roleWords) => {
  const playerList = JSON.parse(localStorage.getItem("player_list"));

  let playerWords = {};

  let unassignedPlayerList = playerList.slice();

  while (roleCounts.mr_white > 0) {
    let randInt = getRandInt(unassignedPlayerList.length);
    let randPlayer = unassignedPlayerList.splice(randInt, 1)[0]; // gets player at randInt and assigns it to randPlayer
    playerWords[randPlayer] = "Mr. White!";
    roleCounts.mr_white -= 1;
  }
  while (roleCounts.undercover > 0) {
    let randInt = getRandInt(unassignedPlayerList.length);
    let randPlayer = unassignedPlayerList.splice(randInt, 1)[0]; // gets player at randInt and assigns it to randPlayer
    playerWords[randPlayer] = roleWords.undercover;
    roleCounts.undercover -= 1;
  }

  for (let playerName of playerList) {
    if (playerWords[playerName] === undefined) {
      playerWords[playerName] = roleWords.civillian;
    }
  }

  sessionStorage.setItem("player_words", JSON.stringify(playerWords));

  const civillians = unassignedPlayerList;
  createPlayerTurnList(civillians);
};

const assignWordsBasedOnPlayerCount = (roleWords) => {
  const playerList = JSON.parse(localStorage.getItem("player_list"));
  const playerCount = playerList.length;

  if (playerCount === 3) {
    const roleCounts = { mr_white: 0, undercover: 1 };
    assignWordsBasedOnRoleCounts(roleCounts, roleWords);
  } else if (playerCount >= 4 && playerCount <= 5) {
    const roleCounts = { mr_white: getRandInt(2), undercover: 1 };
    assignWordsBasedOnRoleCounts(roleCounts, roleWords);
  } else if (playerCount >= 6 && playerCount <= 8) {
    const mrWhiteCount = Math.random() <= 0.8 ? 1 : 0; // 80% chance of getting a Mr White role in the round
    const roleCounts = { mr_white: mrWhiteCount, undercover: 1 };
    assignWordsBasedOnRoleCounts(roleCounts, roleWords);
  } else if (playerCount >= 9) {
    const roleCounts = { mr_white: 1, undercover: getRandInt(2) + 1 }; // either 1 or 2 undercovers
    assignWordsBasedOnRoleCounts(roleCounts, roleWords);
  }
};

const setPlayerWordsAndTurns = () => {
  const roleWords = getUndercoverAndCivillianWords();
  assignWordsBasedOnPlayerCount(roleWords);
};

const renderPlayerWords = () => {
  let playerTurnList = JSON.parse(
    sessionStorage.getItem("player_turn_list") || "[]"
  );

  document.getElementById("div_player_buttons_with_words").innerHTML = ""; // empty the div
  for (let name of playerTurnList) {
    let newElement = document.createElement("div");
    newElement.innerHTML = getTextForBtnPlayerWord(name);
    document
      .getElementById("div_player_buttons_with_words")
      .appendChild(newElement);
  }
};

const startRound = () => {
  let playerList = JSON.parse(localStorage.getItem("player_list") || "[]");
  if (playerList.length < 3) {
    alert("At least 3 players needed to play", "hi");
    return;
  }

  for (let name of playerList) {
    if (name === "") {
      alert("All players must have names");
      return;
    }

    if (playerList.filter((x) => x === name).length === 2) {
      // if there are two of any one name
      alert("Please ensure there are no duplicate player names");
      return;
    }
  }

  sessionStorage.setItem("game_state", GameState.IN_ROUND);
  setPlayerWordsAndTurns();
  renderPlayerWords();
  renderPage();
};

window.onload = onLoad;

document
  .getElementById("btn_add_player")
  .addEventListener("click", addPlayerText);
document.getElementById("btn_start_game").addEventListener("click", startRound);
document
  .getElementById("div_text_player_names")
  .addEventListener("change", onPlayerListUpdated);

document
  .getElementById("btn_reset_back_to_lobby")
  .addEventListener("click", resetBackToLobby);
