$(document).ready(function () {
  const teamData = [
    {
      id: 1,
      fullName: "Chennai Super Kings",
      key: "CSK",
      homeStadium: "M. A. Chidambaram Stadium",
      championshipsWon: 3,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 15,
      topBatsman: "Faf du Plessis",
      topbowler: "Ravindra Jadeja",
    },
    {
      id: 2,
      fullName: "Mumbai Indians",
      key: "MI",
      homeStadium: "Wankhede Stadium",
      championshipsWon: 5,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 13,
      topBatsman: "Quinton de Kock",
      topbowler: "Jasprit Bumrah",
    },
    {
      id: 3,
      fullName: "Royal Challengers Bangalore",
      key: "RCB",
      homeStadium: "M. Chinnaswamy Stadium",
      championshipsWon: 0,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 14,
      topBatsman: "Virat Kohli",
      topbowler: "Yuzvendra Chahal",
    },
    {
      id: 4,
      fullName: "Delhi Capitals",
      key: "DC",
      homeStadium: "Arun Jaitley Stadium",
      championshipsWon: 0,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 13,
      topBatsman: "Shikhar Dhawan",
      topbowler: "Kagiso Rabada",
    },
    {
      id: 5,
      fullName: "Punjab Kings",
      key: "PK",
      homeStadium: "IS Bindra Stadium",
      championshipsWon: 0,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 13,
      topBatsman: "KL Rahul",
      topbowler: "Mohammed Shami",
    },
    {
      id: 6,
      fullName: "Kolkata Knight Riders",
      key: "KKR",
      homeStadium: "Eden Gardens",
      championshipsWon: 2,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 14,
      topBatsman: "Shubman Gill",
      topbowler: "Pat Cummins",
    },
    {
      id: 7,
      fullName: "Rajasthan Royals",
      key: "RR",
      homeStadium: "Sawai Mansingh Stadium",
      championshipsWon: 1,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 12,
      topBatsman: "Sanju Samson",
      topbowler: "Jofra Archer",
    },
    {
      id: 8,
      fullName: "Sunrisers Hyderabad",
      key: "SRH",
      homeStadium: "Rajiv Gandhi Cricket Stadium",
      championshipsWon: 1,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 13,
      topBatsman: "David Warner",
      topbowler: "Bhuvneshwar Kumar",
    },
  ];
  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };
  var addTeam = window.localStorage.getItem("team-list");
  addTeam = addTeam == null || addTeam == "" ? [] : addTeam;
  addTeam = addTeam.length > 0 ? JSON.parse(addTeam) : [];
  if (addTeam.length <= 8) {
    window.localStorage.setItem("team-list", JSON.stringify(teamData));
  }
  $("#add-box").on("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $("#add-button").click();
    }
  });

  $("#add-button").on("click", function () {
    var newTeam = $("#add-box").val();
    var keyVal = newTeam.split("").splice(0, 3).join("");
    var len = addTeam.length;
    var idNo = len + 1;
    var ob = {
      id: idNo,
      fullName: newTeam,
      key: keyVal,
      championshipsWon: 1,
      teamIcon: "https://www.iplt20.com/resources/v4.24.0/i/sprites/tLogo132x-sprite.png",
      playerCount: 13,
      topBatsman: "David Warner",
      topbowler: "Bhuvneshwar Kumar",
    };
    if (newTeam != "") {
      addTeam.push(ob);
    }
    console.log(addTeam);
    buildTeam(addTeam);
    if (addTeam.length > 8) {
      window.localStorage.setItem("team-list", JSON.stringify(addTeam));
    }
    $("#add-box").val("");
  });

  if (addTeam.length == 1) {
    buildTeam(teamData);
  } else if (addTeam.length > 1) {
    buildTeam(addTeam);
  }

  function buildTeam(object) {
    $("#team-grid").html("");
    for (i = 0; i < object.length; i++) {
      var teamCardWrapper = $("<div>").addClass("team-card-wrapper");
      var teamCard = $("<a>")
        .addClass("team-card")
        .attr("href", "./Team Details/teamdetails.html?s=" + object[i].id);
      var team = $("<div>")
        .addClass("team")
        .attr("id", "team" + object[i].id);
      var cardInfo = $("<div>").addClass("card-info");
      var teamLogo = $("<div>").addClass("team-logo").attr("id", object[i].key);
      var cardDetails = $("<div>").addClass("card-details");
      var cardTitle = $("<h3>").addClass("card-title").html(object[i].fullName);
      var homeStadium = $("<p>").addClass("home-stadium").html(object[i].homeStadium);
      var cardLink = $("<button>").addClass("card-link").html("team home");

      cardDetails.append(cardTitle, homeStadium);
      cardInfo.append(teamLogo, cardDetails, cardLink);
      team.append(cardInfo);
      teamCard.append(team);
      teamCardWrapper.append(teamCard);
      $("#team-grid").append(teamCardWrapper);
    }
  }

  $("#search-box").on("keyup", function () {
    var value = $(this).val();
    var data = searchTeam(value, addTeam);
    buildTeam(data);
  });

  function searchTeam(value, data) {
    var filterData = [];
    for (i = 0; i < data.length; i++) {
      value = value.toLowerCase();
      var teamName = data[i].fullName.toLowerCase();

      if (teamName.includes(value)) {
        filterData.push(data[i]);
      }
    }
    return filterData;
  }
});
