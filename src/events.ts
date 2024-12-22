import { GetAllEventsQuery } from "./ftcScoutTypes";

async function getAllEvents(): Promise<GetAllEventsQuery> {
    console.log("Getting all events")
    const eventQuery = `
        query getAllEvents {
            eventsSearch(season: 2024) {
                code
                regionCode
                name
                start
            }
        }
    `
    let eventData = await fetch("https://api.ftcscout.org/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ query: eventQuery }),
    })
        .then((r) => r.json())
    console.log(eventData);
    return eventData.data
}

async function addToTable() {
    let events = await getAllEvents();
    let eventList = document.getElementById('event-list')!;
    events.eventsSearch.forEach(event => {
        let row = document.createElement('tr');
        let code = document.createElement('td');
        let region = document.createElement('td');
        let name = document.createElement('td');
        let date = document.createElement('td');
        let codeLink = document.createElement('a');
        codeLink.href = `./event.html?code=${event.code}`;
        codeLink.innerText = event.code;
        code.appendChild(codeLink);
        region.innerText = event.regionCode || "N/A";
        name.innerText = event.name;
        date.innerText = event.start;
        row.appendChild(code);
        row.appendChild(region);
        row.appendChild(name);
        row.appendChild(date);
        eventList.appendChild(row);
    });
}
addToTable();