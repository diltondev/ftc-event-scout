// Purpose: Provide a list of events for the user to select from
import { OprsAtEventQueryVariables, OprsAtEventQuery } from "./ftcScoutTypes"

async function getEventTeams(vars: OprsAtEventQueryVariables): Promise<OprsAtEventQuery> {
    const teamQuery = `
        query {
            eventByCode(season: 2024, code: "${vars.code}") {
                teams {
                    teamNumber
                    team {
                        name
                        quickStats(season: 2024) {
                            tot {
          	                    value
                            }
                            auto {
                                value
                            }
                        }
                    }
                }
            }
        }
    `
    console.log("req: " + teamQuery);
    let teamData = await fetch("https://api.ftcscout.org/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ query: teamQuery }),
    })
    .then((r) => r.json())
    console.log(teamData);
    return teamData.data
}

async function addToTable() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code === null || code === "") {
        window.location.href = "index.html";
        return;
    }
    let teams = await getEventTeams({ code: code });
    let teamList = document.getElementById('team-list')!;
    teams?.eventByCode?.teams.sort((team1, team2) => 
        {
            if (team1.team.quickStats?.tot.value === undefined && team2.team.quickStats?.tot.value === undefined) {
                return 0;
            }
            if (team1.team.quickStats?.tot.value === undefined) {
                return 1;
            }
            if (team2.team.quickStats?.tot.value === undefined) {
                return -1;
            }
            return team2.team.quickStats?.tot.value - team1.team.quickStats?.tot.value;
        }).forEach(team => {
        let row = document.createElement('tr');
        let number = document.createElement('td');
        let numberLink = document.createElement('a');
        let name = document.createElement('td');
        let tot = document.createElement('td');
        let auto = document.createElement('td');
        numberLink.innerText = team.teamNumber.toString();
        numberLink.href = `https://ftcscout.org/teams/${team.teamNumber}`;
        numberLink.target = "_blank";
        numberLink.rel = "noopener noreferrer";
        number.appendChild(numberLink);
        name.innerText = team.team.name;
        tot.innerText = team.team.quickStats?.tot.value != undefined ? Math.floor(team.team.quickStats?.tot.value).toString() : "Unknown";
        auto.innerText = team.team.quickStats?.auto.value != undefined ? Math.floor(team.team.quickStats?.auto.value).toString() : "Unknown";
        row.appendChild(number);
        row.appendChild(name);
        row.appendChild(tot);
        row.appendChild(auto);
        teamList.appendChild(row);
    });
}
addToTable();