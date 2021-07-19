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
      bgImage:
        "linear-gradient(45deg, rgba(253, 185, 19, 0.6), rgba(253, 185, 19, 0.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/CSK-huddle.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(0,94,160,.5), rgba(0,94,160,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/MI.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/RCB.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(0,76,147,.5), rgba(0,76,147,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/DC-huddle.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(179,37,36,.5), rgba(179,37,36,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/PBKS-huddle.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(61,34,86,.5), rgba(61,34,86,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/KKR-huddle.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(0,75,140,.5), rgba(0,75,140,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/RR-huddle.jpg)",
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
      bgImage:
        "linear-gradient(45deg, rgba(251,101,63,.5), rgba(251,101,63,.5)),url(https://www.iplt20.com/resources/v4.24.0/i/team-bgs/SRH-huddle.jpg)",
    },
  ];
  const playerData = [
    {
      id: 1,
      playerName: "MS Dhoni",
      from: "CSK",
      price: "15 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/210/1.png",
    },
    {
      id: 2,
      playerName: "Ambati Rayudu",
      from: "CSK",
      price: "2.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/210/100.png",
    },
    {
      id: 3,
      playerName: "Faf du Plessis",
      from: "CSK",
      price: "1.6 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/210/24.png",
    },
    {
      id: 4,
      playerName: "Suresh Raina",
      from: "CSK",
      price: "11 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/210/14.png",
    },
    {
      id: 5,
      playerName: "Ruturaj Gaikwad",
      from: "CSK",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/210/5443.png",
    },
    {
      id: 6,
      playerName: "Dwayne Bravo",
      from: "CSK",
      price: "6.4 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/210/25.png",
    },
    {
      id: 7,
      playerName: "Moeen Ali",
      from: "CSK",
      price: "7 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/210/1735.png",
    },
    {
      id: 8,
      playerName: "Ravindra Jadeja",
      from: "CSK",
      price: "7 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/9.png",
    },
    {
      id: 9,
      playerName: "Sam Curran",
      from: "CSK",
      price: "5.5 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/2939.png",
    },
    {
      id: 10,
      playerName: "Shardul Thakur",
      from: "CSK",
      price: "2.6 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1745.png",
    },
    {
      id: 11,
      playerName: "Deepak Chahar",
      from: "CSK",
      price: "80 lakh",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/140.png",
    },
    {
      id: 12,
      playerName: "Robin Uthappa",
      from: "CSK",
      price: "3 Cr",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/127.png",
    },
    {
      id: 13,
      playerName: "Imran Tahir",
      from: "CSK",
      price: "1 Cr",
      isPlaying: "Not Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/898.png",
    },
    {
      id: 14,
      playerName: "Lungi Ngidi",
      from: "CSK",
      price: "50 lakh",
      isPlaying: "Not Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/3746.png",
    },
    {
      id: 15,
      playerName: "Mitchell Santner",
      from: "CSK",
      price: "50 lakh",
      isPlaying: "Not Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1903.png",
    },
    {
      id: 16,
      playerName: "Rohit Sharma",
      from: "MI",
      price: "15 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/107.png",
    },
    {
      id: 17,
      playerName: "Quinton de Kock",
      from: "MI",
      price: "2.8 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/834.png",
    },
    {
      id: 18,
      playerName: "Suryakumar Yadav",
      from: "MI",
      price: "3.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/108.png",
    },
    {
      id: 19,
      playerName: "Ishan Kishan",
      from: "MI",
      price: "6.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/2975.png",
    },
    {
      id: 20,
      playerName: "Hardik Pandya",
      from: "MI",
      price: "11 cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/2740.png",
    },
    {
      id: 21,
      playerName: "Krunal Pandya",
      from: "MI",
      price: "8.8 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/3183.png",
    },
    {
      id: 22,
      playerName: "Kieron Pollard",
      from: "MI",
      price: "5.4 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/210.png",
    },
    {
      id: 23,
      playerName: "Jasprit Bumrah",
      from: "MI",
      price: "7 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1124.png",
    },
    {
      id: 24,
      playerName: "Trent Boult",
      from: "MI",
      price: "2.2 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/969.png",
    },
    {
      id: 25,
      playerName: "Nathan Coulter-Nile",
      from: "MI",
      price: "5 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/840.png",
    },
    {
      id: 26,
      playerName: "Piyush Chawla",
      from: "MI",
      price: "2.4 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/76.png",
    },
    {
      id: 27,
      playerName: "Anukul Roy",
      from: "MI",
      price: "20 lakh",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/3774.png",
    },
    {
      id: 28,
      playerName: "Chris Lynn",
      from: "MI",
      price: "2 Cr",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/179.png",
    },
    {
      id: 29,
      playerName: "Virat Kohli",
      from: "RCB",
      price: "17 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/164.png",
    },
    {
      id: 30,
      playerName: "Devdutt Padikkal",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/5430.png",
    },
    {
      id: 31,
      playerName: "Rajat Patidar",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/5471.png",
    },
    {
      id: 32,
      playerName: "AB de Villiers",
      from: "RCB",
      price: "11 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/233.png",
    },
    {
      id: 33,
      playerName: "Finn Allen",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3020.png",
    },
    {
      id: 34,
      playerName: "Glenn Maxwell",
      from: "RCB",
      price: "14.25 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/282.png",
    },
    {
      id: 35,
      playerName: "Washington Sundar",
      from: "RCB",
      price: "3.2 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/2973.png",
    },
    {
      id: 36,
      playerName: "Dan Christian",
      from: "RCB",
      price: "4.8 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/181.png",
    },
    {
      id: 37,
      playerName: "Yuzvendra Chahal",
      from: "RCB",
      price: "6 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/111.png",
    },
    {
      id: 38,
      playerName: "Kyle Jamieson",
      from: "RCB",
      price: "15 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1616.png",
    },
    {
      id: 39,
      playerName: "Mohammed Siraj",
      from: "RCB",
      price: "2.6 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/3840.png",
    },
    {
      id: 40,
      playerName: "K. S. Bharat",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/2734.png",
    },
    {
      id: 41,
      playerName: "Harshal Patel",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Not Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/157.png",
    },
    {
      id: 42,
      playerName: "Sachin Baby",
      from: "RCB",
      price: "20 lakh",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/1115.png",
    },
    {
      id: 43,
      playerName: "Rishabh Pant",
      from: "DC",
      price: "15 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/2972.png",
    },
    {
      id: 44,
      playerName: "Shikhar Dhawan",
      from: "DC",
      price: "5.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/41.png",
    },
    {
      id: 45,
      playerName: "Prithvi Shaw",
      from: "DC",
      price: "1.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3764.png",
    },
    {
      id: 46,
      playerName: "Steve Smith",
      from: "DC",
      price: "2.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/271.png",
    },
    {
      id: 47,
      playerName: "Shimron Hetmyer",
      from: "DC",
      price: "7.75 cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/1705.png",
    },
    {
      id: 48,
      playerName: "Marcus Stoinis",
      from: "DC",
      price: "4.8 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/964.png",
    },
    {
      id: 49,
      playerName: "Axar Patel",
      from: "DC",
      price: "5 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1113.png",
    },
    {
      id: 50,
      playerName: "Kagiso Rabada",
      from: "DC",
      price: "4.2 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1664.png",
    },
    {
      id: 51,
      playerName: "Ravichandran Ashwin",
      from: "DC",
      price: "7.6 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/8.png",
    },
    {
      id: 52,
      playerName: "Nathan Coulter-Nile",
      from: "DC",
      price: "5 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/840.png",
    },
    {
      id: 53,
      playerName: "Ishant Sharma",
      from: "DC",
      price: "1.1 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/38.png",
    },
    {
      id: 54,
      playerName: "Sam Billings",
      from: "DC",
      price: "2 Cr",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/2756.png",
    },
    {
      id: 55,
      playerName: "Ajinkya Rahane",
      from: "DC",
      price: "4 Cr",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/135.png",
    },
    {
      id: 56,
      playerName: "K. L. Rahul",
      from: "PK",
      price: "11 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/1125.png",
    },
    {
      id: 57,
      playerName: "Mayank Agarwal",
      from: "PK",
      price: "1 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/158.png",
    },
    {
      id: 58,
      playerName: "Chris Gayle",
      from: "PK",
      price: "1.5 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/236.png",
    },
    {
      id: 59,
      playerName: "Nicholas Pooran",
      from: "PK",
      price: "4.2 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/1703.png",
    },
    {
      id: 60,
      playerName: "Shahrukh Khan",
      from: "PK",
      price: "5.25 cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/7779.png",
    },
    {
      id: 61,
      playerName: "Deepak Hooda",
      from: "PK",
      price: "50 lakh",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1556.png",
    },
    {
      id: 62,
      playerName: "Harpreet Brar",
      from: "PK",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/5441.png",
    },
    {
      id: 63,
      playerName: "Mohammed Shami",
      from: "PK",
      price: "4.8 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/94.png",
    },
    {
      id: 64,
      playerName: "Riley Meredith",
      from: "PK",
      price: "8 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/4055.png",
    },
    {
      id: 65,
      playerName: "Chris Jordan",
      from: "PK",
      price: "3 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1299.png",
    },
    {
      id: 66,
      playerName: "Ravi Bishnoi",
      from: "PK",
      price: "2.4 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/19351.png",
    },
    {
      id: 67,
      playerName: "Prabhsimran Singh",
      from: "PK",
      price: "55 lakh",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/5436.png",
    },
    {
      id: 68,
      playerName: "Dawid Malan",
      from: "PK",
      price: "1.5 Cr",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3318.png",
    },
    {
      id: 69,
      playerName: "Eoin Morgan",
      from: "KKR",
      price: "5.25 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/197.png",
    },
    {
      id: 70,
      playerName: "Dinesh Karthik",
      from: "KKR",
      price: "7.4 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/102.png",
    },
    {
      id: 71,
      playerName: "Shubman Gill",
      from: "KKR",
      price: "1.8 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3761.png",
    },
    {
      id: 72,
      playerName: "Rahul Tripathi",
      from: "KKR",
      price: "60 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3838.png",
    },
    {
      id: 73,
      playerName: "Nitish Rana",
      from: "KKR",
      price: "3.4 cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/2738.png",
    },
    {
      id: 74,
      playerName: "Andre Russell",
      from: "KKR",
      price: "8.8 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/177.png",
    },
    {
      id: 75,
      playerName: "Shakib Al Hasan",
      from: "KKR",
      price: "3.2 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/201.png",
    },
    {
      id: 76,
      playerName: "Pat Cummins",
      from: "KKR",
      price: "15.5 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/488.png",
    },
    {
      id: 77,
      playerName: "Prasidh Krishna",
      from: "KKR",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/5105.png",
    },
    {
      id: 78,
      playerName: "Shivam Mavi",
      from: "KKR",
      price: "3 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/3779.png",
    },
    {
      id: 79,
      playerName: "Kamlesh Nagarkoti",
      from: "KKR",
      price: "3.2 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/3766.png",
    },
    {
      id: 80,
      playerName: "Tim Seifert",
      from: "KKR",
      price: "20 lakh",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/1619.png",
    },
    {
      id: 81,
      playerName: "Kuldeep Yadav",
      from: "KKR",
      price: "5.8 Cr",
      isPlaying: "Not Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/261.png",
    },
    {
      id: 82,
      playerName: "Harbhajan Singh",
      from: "KKR",
      price: "2 Cr",
      isPlaying: "Not Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/103.png",
    },
    {
      id: 83,
      playerName: "Sanju Samson",
      from: "RR",
      price: "8 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/258.png",
    },
    {
      id: 84,
      playerName: "Jos Buttler",
      from: "RR",
      price: "4.4 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/509.png",
    },
    {
      id: 85,
      playerName: "Manan Vohra",
      from: "RR",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/1085.png",
    },
    {
      id: 86,
      playerName: "Liam Livingstone",
      from: "RR",
      price: "75 lakh",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3644.png",
    },
    {
      id: 87,
      playerName: "Chris Morris",
      from: "RR",
      price: "16.25 cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/836.png",
    },
    {
      id: 88,
      playerName: "Rahul Tewatia",
      from: "RR",
      price: "75 lakh",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1749.png",
    },
    {
      id: 89,
      playerName: "Shivam Dube",
      from: "RR",
      price: "4.4 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/5431.png",
    },
    {
      id: 90,
      playerName: "Ben Stokes",
      from: "RR",
      price: "12.5 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1154.png",
    },
    {
      id: 91,
      playerName: "Jaydev Unadkat",
      from: "RR",
      price: "3 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/86.png",
    },
    {
      id: 92,
      playerName: "Kartik Tyagi",
      from: "RR",
      price: "1.3 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/10059.png",
    },
    {
      id: 93,
      playerName: "K. C. Cariappa",
      from: "RR",
      price: "20 lakh",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/2743.png",
    },
    {
      id: 94,
      playerName: "David Miller",
      from: "RR",
      price: "75 lakh",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/187.png",
    },
    {
      id: 95,
      playerName: "David Warner",
      from: "SRH",
      price: "12 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/170.png",
    },
    {
      id: 96,
      playerName: "Jonny Bairstow",
      from: "SRH",
      price: "2.2 Cr",
      isPlaying: "Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/506.png",
    },
    {
      id: 97,
      playerName: "Manish Pandey",
      from: "SRH",
      price: "11 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/123.png",
    },
    {
      id: 98,
      playerName: "Priyam Garg",
      from: "SRH",
      price: "1.9 Cr",
      isPlaying: "Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/3775.png",
    },
    {
      id: 99,
      playerName: "Jason Holder",
      from: "SRH",
      price: "75 lakh",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1075.png",
    },
    {
      id: 100,
      playerName: "Vijay Shankar",
      from: "SRH",
      price: "3.2 Cr",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/1083.png",
    },
    {
      id: 101,
      playerName: "Abhishek Sharma",
      from: "SRH",
      price: "55 lakh",
      isPlaying: "Playing",
      description: "All-rounder",
      playerImage: "https://static.iplt20.com/players/284/3760.png",
    },
    {
      id: 102,
      playerName: "Rashid Khan",
      from: "SRH",
      price: "9 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/2885.png",
    },
    {
      id: 103,
      playerName: "Siddarth Kaul",
      from: "SRH",
      price: "3.8 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/1086.png",
    },
    {
      id: 104,
      playerName: "Khaleel Ahmed",
      from: "SRH",
      price: "3 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/2964.png",
    },
    {
      playerImage: "https://static.iplt20.com/players/284/16.png",
      id: 105,
      playerName: "Bhuvneshwar Kumar",
      from: "SRH",
      price: "8.5 Cr",
      isPlaying: "Playing",
      description: "Bowler",
      playerImage: "https://static.iplt20.com/players/284/116.png",
    },
    {
      id: 106,
      playerName: "Wriddhiman Saha",
      from: "SRH",
      price: "1.2 Cr",
      isPlaying: "Not Playing",
      description: "Wicketkeeper",
      playerImage: "https://static.iplt20.com/players/284/16.png",
    },
    {
      id: 107,
      playerName: "Kedar Jadhav",
      from: "SRH",
      price: "2 Cr",
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/297.png",
    },
  ];

  if (document.URL.indexOf("#") == -1) {
    // Set the URL to whatever it was plus "#".
    url = document.URL + "#";
    location = "#";

    //Reload the page
    location.reload(true);
  }

  $("#add-box").on("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $("#add-button").click();
    }
  });

  var teamId = window.location.search.split("=")[1];
  var keyName = window.localStorage.getItem("team-list");
  keyName = JSON.parse(keyName);
  var addPlayer = window.localStorage.getItem("player-list");
  addPlayer = addPlayer == null || addPlayer == "" ? [] : addPlayer;
  addPlayer = addPlayer.length > 0 ? JSON.parse(addPlayer) : [];
  if (addPlayer.length <= 107) {
    window.localStorage.setItem("player-list", JSON.stringify(playerData));
  }
  console.log(keyName);

  $("#add-button").click(function () {
    var newPlayer = $("#add-box").val();
    var len = addPlayer.length;
    var idNo = len + 1;
    var ob = {
      id: idNo,
      from: keyName[teamId - 1].key,
      playerName: newPlayer,
      isPlaying: "Not Playing",
      description: "Batsman",
      playerImage: "https://static.iplt20.com/players/284/Photo-Missing.png",
    };
    if (newPlayer != "") {
      addPlayer.push(ob);
    }
    buildPlayer(addPlayer);
    if (addPlayer.length > 107) {
      window.localStorage.setItem("player-list", JSON.stringify(addPlayer));
    }
    $("#add-box").val("");
  });
  console.log(typeof addPlayer);
  if (addPlayer.length == 1) {
    buildPlayer(playerData);
  } else if (addPlayer.length > 1) {
    buildPlayer(addPlayer);
  }

  var wrapper = $("<div>")
    .addClass("wrapper")
    .css("background-image", teamData[teamId - 1].bgImage);
  var logo = $("<div>")
    .addClass("logo")
    .attr("id", teamData[teamId - 1].key);
  var teamInfo = $("<div>").addClass("team-info");
  var teamName = $("<h2>")
    .addClass("team-name")
    .html(teamData[teamId - 1].fullName);
  var playerCount = $("<p>").addClass("player-count").html("Player Count");
  var spanPlayerCount = $("<span>").html(teamData[teamId - 1].playerCount);
  playerCount.append(spanPlayerCount);
  var topBat = $("<p>").addClass("top-batsman").html("Top Batsman");
  var spanBat = $("<span>").html(teamData[teamId - 1].topBatsman);
  topBat.append(spanBat);
  var topBowl = $("<p>").addClass("top-bowler").html("Top Bowler");
  var spanBowl = $("<span>").html(teamData[teamId - 1].topbowler);
  topBowl.append(spanBowl);
  var champCount = $("<p>").addClass("championship-count").html("Championship Won");
  var spanChampCount = $("<span>").html(teamData[teamId - 1].championshipsWon);
  champCount.append(spanChampCount);

  teamInfo.append(teamName, playerCount, topBat, topBowl, champCount);
  wrapper.append(logo, teamInfo);
  $(".team-header").append(wrapper);

  function buildPlayer(object) {
    $("#player-grid").html("");
    for (i = 0; i < object.length; i++) {
      if (keyName[teamId - 1].key == object[i].from) {
        var playerCardWrapper = $("<div>").addClass("player-card-wrapper");
        var playerCard = $("<a>")
          .addClass("player-card")
          .attr("href", "/Player Details/playerdetails.html?s=" + object[i].id);
        var player = $("<div>").addClass("player");
        var playerImg = $("<div>")
          .addClass("player-img-wrapper")
          .attr("id", "team" + teamId);
        var img = $("<img>").attr("src", object[i].playerImage);

        playerImg.append(img);

        var playerDetails = $("<div>").addClass("player-details");
        var playerName = $("<h3>").html(object[i].playerName);
        var teamIni = $("<p>").addClass("team-ini").html(object[i].from);
        var playerPrice = $("<p>").html(object[i].price);
        var playerStatus = $("<p>").html(object[i].isPlaying);
        var playerRole = $("<p>").html(object[i].description);

        playerDetails.append(playerName, teamIni, playerPrice, playerStatus, playerRole);
        player.append(playerImg, playerDetails);
        playerCard.append(player);
        playerCardWrapper.append(playerCard);
        $("#player-grid").append(playerCardWrapper);
      }
    }
  }
  $("#search-box").on("keyup", function () {
    var value = $(this).val();
    var data = searchTeam(value, addPlayer);
    buildPlayer(data);
  });

  function searchTeam(value, data) {
    var filterData = [];
    for (i = 0; i < data.length; i++) {
      if (teamData[teamId - 1].key == data[i].from) {
        value = value.toLowerCase();
        var teamName = data[i].playerName.toLowerCase();

        if (teamName.includes(value)) {
          filterData.push(data[i]);
        }
      }
    }
    return filterData;
  }
});
