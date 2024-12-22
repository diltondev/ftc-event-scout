// Purpose: Provide a list of events for the user to select from
import { OprsAtEventQuery } from "./ftcScoutTypes"

async function getEventTeams(): Promise<OprsAtEventQuery> {
    const teamQuery = `
        query {
            eventByCode(season: 2024, code: "USMOKSSTLSLT") {
                teams {
                    teamNumber
                    team {
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
getEventTeams()