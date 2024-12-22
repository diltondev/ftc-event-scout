// FILE GENRERATED BY TRANSFORM TOOLS
// Generate at https://transform.tools/graphql-to-typescript
// Purpose: Types for the FTC Scout API

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
    Date: any
}

export type Query = {
    __typename?: "Query"
    teamByNumber?: Maybe<Team>
    teamByName?: Maybe<Team>
    teamsSearch: Array<Team>
    eventByCode?: Maybe<Event>
    eventsSearch: Array<Event>
    tepRecords: TepRecords
    matchRecords: MatchRecords
    activeTeamsCount: Scalars["Int"]
    matchesPlayedCount: Scalars["Int"]
    eventsOnDate: Array<Event>
    tradWorldRecord: Match
    getBestName?: Maybe<BestName>
}

export type QueryTeamByNumberArgs = {
    number: Scalars["Int"]
}

export type QueryTeamByNameArgs = {
    name: Scalars["String"]
}

export type QueryTeamsSearchArgs = {
    region?: Maybe<RegionOption>
    limit?: Maybe<Scalars["Int"]>
    searchText?: Maybe<Scalars["String"]>
}

export type QueryEventByCodeArgs = {
    season: Scalars["Int"]
    code: Scalars["String"]
}

export type QueryEventsSearchArgs = {
    season: Scalars["Int"]
    region?: Maybe<RegionOption>
    type?: Maybe<EventTypeOption>
    hasMatches?: Maybe<Scalars["Boolean"]>
    start?: Maybe<Scalars["Date"]>
    end?: Maybe<Scalars["Date"]>
    limit?: Maybe<Scalars["Int"]>
    searchText?: Maybe<Scalars["String"]>
}

export type QueryTepRecordsArgs = {
    season: Scalars["Int"]
    sortBy?: Maybe<Scalars["String"]>
    sortDir?: Maybe<SortDir>
    filter?: Maybe<Filter>
    region?: Maybe<RegionOption>
    type?: Maybe<EventTypeOption>
    remote?: Maybe<RemoteOption>
    start?: Maybe<Scalars["Date"]>
    end?: Maybe<Scalars["Date"]>
    skip: Scalars["Int"]
    take: Scalars["Int"]
}

export type QueryMatchRecordsArgs = {
    season: Scalars["Int"]
    sortBy?: Maybe<Scalars["String"]>
    sortDir?: Maybe<SortDir>
    filter?: Maybe<Filter>
    region?: Maybe<RegionOption>
    type?: Maybe<EventTypeOption>
    remote?: Maybe<RemoteOption>
    start?: Maybe<Scalars["Date"]>
    end?: Maybe<Scalars["Date"]>
    skip: Scalars["Int"]
    take: Scalars["Int"]
}

export type QueryActiveTeamsCountArgs = {
    season: Scalars["Int"]
}

export type QueryMatchesPlayedCountArgs = {
    season: Scalars["Int"]
}

export type QueryEventsOnDateArgs = {
    date?: Maybe<Scalars["DateTime"]>
    type?: Maybe<EventTypeOption>
}

export type QueryTradWorldRecordArgs = {
    season: Scalars["Int"]
}

export type Team = {
    __typename?: "Team"
    number: Scalars["Int"]
    name: Scalars["String"]
    schoolName: Scalars["String"]
    sponsors: Array<Scalars["String"]>
    location: Location
    rookieYear: Scalars["Int"]
    website?: Maybe<Scalars["String"]>
    createdAt: Scalars["DateTime"]
    updatedAt: Scalars["DateTime"]
    awards: Array<Award>
    matches: Array<TeamMatchParticipation>
    events: Array<TeamEventParticipation>
    quickStats?: Maybe<QuickStats>
}

export type TeamAwardsArgs = {
    season?: Maybe<Scalars["Int"]>
}

export type TeamMatchesArgs = {
    season?: Maybe<Scalars["Int"]>
    eventCode?: Maybe<Scalars["String"]>
}

export type TeamEventsArgs = {
    season: Scalars["Int"]
}

export type TeamQuickStatsArgs = {
    season: Scalars["Int"]
    region?: Maybe<RegionOption>
}

export type Location = {
    __typename?: "Location"
    venue?: Maybe<Scalars["String"]>
    city: Scalars["String"]
    state: Scalars["String"]
    country: Scalars["String"]
}

export type Award = {
    __typename?: "Award"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    teamNumber: Scalars["Int"]
    divisionName?: Maybe<Scalars["String"]>
    personName?: Maybe<Scalars["String"]>
    type: AwardType
    placement: Scalars["Int"]
    createdAt: Scalars["DateTime"]
    updatedAt: Scalars["DateTime"]
    team: Team
    event: Event
}

export enum AwardType {
    DeansListFinalist = "DeansListFinalist",
    DeansListSemiFinalist = "DeansListSemiFinalist",
    DeansListWinner = "DeansListWinner",
    JudgesChoice = "JudgesChoice",
    DivisionFinalist = "DivisionFinalist",
    DivisionWinner = "DivisionWinner",
    ConferenceFinalist = "ConferenceFinalist",
    Compass = "Compass",
    Promote = "Promote",
    Control = "Control",
    Motivate = "Motivate",
    Design = "Design",
    Innovate = "Innovate",
    Connect = "Connect",
    Think = "Think",
    TopRanked = "TopRanked",
    Inspire = "Inspire",
    Winner = "Winner",
    Finalist = "Finalist"
}

export type Event = {
    __typename?: "Event"
    season: Scalars["Int"]
    code: Scalars["String"]
    divisionCode?: Maybe<Scalars["String"]>
    name: Scalars["String"]
    remote: Scalars["Boolean"]
    hybrid: Scalars["Boolean"]
    fieldCount: Scalars["Int"]
    published: Scalars["Boolean"]
    type: EventType
    regionCode?: Maybe<Scalars["String"]>
    leagueCode?: Maybe<Scalars["String"]>
    districtCode?: Maybe<Scalars["String"]>
    address?: Maybe<Scalars["String"]>
    location: Location
    website?: Maybe<Scalars["String"]>
    liveStreamURL?: Maybe<Scalars["String"]>
    webcasts: Array<Scalars["String"]>
    timezone: Scalars["String"]
    start: Scalars["Date"]
    end: Scalars["Date"]
    createdAt: Scalars["DateTime"]
    updatedAt: Scalars["DateTime"]
    started: Scalars["Boolean"]
    ongoing: Scalars["Boolean"]
    finished: Scalars["Boolean"]
    relatedEvents: Array<Event>
    awards: Array<Award>
    teams: Array<TeamEventParticipation>
    teamMatches: Array<TeamMatchParticipation>
    hasMatches: Scalars["Boolean"]
    matches: Array<Match>
}

export type EventTeamMatchesArgs = {
    teamNumber?: Maybe<Scalars["Int"]>
}

export enum EventType {
    Scrimmage = "Scrimmage",
    LeagueMeet = "LeagueMeet",
    Qualifier = "Qualifier",
    LeagueTournament = "LeagueTournament",
    Championship = "Championship",
    Other = "Other",
    FirstChampionship = "FIRSTChampionship",
    SuperQualifier = "SuperQualifier",
    InnovationChallenge = "InnovationChallenge",
    OffSeason = "OffSeason",
    Kickoff = "Kickoff",
    Workshop = "Workshop",
    DemoExhibition = "DemoExhibition",
    VolunteerSignup = "VolunteerSignup",
    PracticeDay = "PracticeDay"
}

export type TeamEventParticipation = {
    __typename?: "TeamEventParticipation"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    teamNumber: Scalars["Int"]
    stats?: Maybe<TeamEventStats>
    event: Event
    team: Team
    awards: Array<Award>
    matches: Array<TeamMatchParticipation>
}

export type TeamEventStats =
    | TeamEventStats2019
    | TeamEventStats2020Trad
    | TeamEventStats2020Remote
    | TeamEventStats2021Trad
    | TeamEventStats2021Remote
    | TeamEventStats2022
    | TeamEventStats2023
    | TeamEventStats2024

export type TeamEventStats2019 = {
    __typename?: "TeamEventStats2019"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2019Group
    avg: TeamEventStats2019Group
    min: TeamEventStats2019Group
    max: TeamEventStats2019Group
    dev: TeamEventStats2019Group
    opr: TeamEventStats2019Group
}

export type TeamEventStats2019Group = {
    __typename?: "TeamEventStats2019Group"
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    majorsByOppPoints: Scalars["Float"]
    minorsByOppPoints: Scalars["Float"]
    penaltyPointsByOpp: Scalars["Float"]
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoRepositioningPoints: Scalars["Float"]
    autoDeliveryPoints: Scalars["Float"]
    autoPlacementPoints: Scalars["Float"]
    dcDeliveryPoints: Scalars["Float"]
    dcPlacementPoints: Scalars["Float"]
    skyscraperBonusPoints: Scalars["Float"]
    cappingPoints: Scalars["Float"]
    cappingPointsIndividual: Scalars["Float"]
    egParkPoints: Scalars["Float"]
    egParkPointsIndividual: Scalars["Float"]
    egFoundationMovedPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2020Trad = {
    __typename?: "TeamEventStats2020Trad"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2020TradGroup
    avg: TeamEventStats2020TradGroup
    min: TeamEventStats2020TradGroup
    max: TeamEventStats2020TradGroup
    dev: TeamEventStats2020TradGroup
    opr: TeamEventStats2020TradGroup
}

export type TeamEventStats2020TradGroup = {
    __typename?: "TeamEventStats2020TradGroup"
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoTowerPoints: Scalars["Float"]
    autoTowerLowPoints: Scalars["Float"]
    autoTowerMidPoints: Scalars["Float"]
    autoTowerHighPoints: Scalars["Float"]
    autoWobblePoints: Scalars["Float"]
    autoPowershotPoints: Scalars["Float"]
    egWobblePoints: Scalars["Float"]
    egPowershotPoints: Scalars["Float"]
    egWobbleRingPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    dcTowerLowPoints: Scalars["Float"]
    dcTowerMidPoints: Scalars["Float"]
    dcTowerHighPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2020Remote = {
    __typename?: "TeamEventStats2020Remote"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2020RemoteGroup
    avg: TeamEventStats2020RemoteGroup
    min: TeamEventStats2020RemoteGroup
    max: TeamEventStats2020RemoteGroup
    dev: TeamEventStats2020RemoteGroup
    opr: TeamEventStats2020RemoteGroup
}

export type TeamEventStats2020RemoteGroup = {
    __typename?: "TeamEventStats2020RemoteGroup"
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoTowerPoints: Scalars["Float"]
    autoTowerLowPoints: Scalars["Float"]
    autoTowerMidPoints: Scalars["Float"]
    autoTowerHighPoints: Scalars["Float"]
    autoWobblePoints: Scalars["Float"]
    autoPowershotPoints: Scalars["Float"]
    egWobblePoints: Scalars["Float"]
    egPowershotPoints: Scalars["Float"]
    egWobbleRingPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    dcTowerLowPoints: Scalars["Float"]
    dcTowerMidPoints: Scalars["Float"]
    dcTowerHighPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2021Trad = {
    __typename?: "TeamEventStats2021Trad"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2021TradGroup
    avg: TeamEventStats2021TradGroup
    min: TeamEventStats2021TradGroup
    max: TeamEventStats2021TradGroup
    dev: TeamEventStats2021TradGroup
    opr: TeamEventStats2021TradGroup
}

export type TeamEventStats2021TradGroup = {
    __typename?: "TeamEventStats2021TradGroup"
    autoCarouselPoints: Scalars["Float"]
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoFreightPoints: Scalars["Float"]
    autoFreight1Points: Scalars["Float"]
    autoFreight2Points: Scalars["Float"]
    autoFreight3Points: Scalars["Float"]
    autoFreightStoragePoints: Scalars["Float"]
    autoBonusPoints: Scalars["Float"]
    autoBonusPointsIndividual: Scalars["Float"]
    dcAllianceHubPoints: Scalars["Float"]
    dcFreight1Points: Scalars["Float"]
    dcFreight2Points: Scalars["Float"]
    dcFreight3Points: Scalars["Float"]
    dcSharedHubPoints: Scalars["Float"]
    dcStoragePoints: Scalars["Float"]
    egDuckPoints: Scalars["Float"]
    allianceBalancedPoints: Scalars["Float"]
    sharedUnbalancedPoints: Scalars["Float"]
    egParkPoints: Scalars["Float"]
    egParkPointsIndividual: Scalars["Float"]
    cappingPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2021Remote = {
    __typename?: "TeamEventStats2021Remote"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2021RemoteGroup
    avg: TeamEventStats2021RemoteGroup
    min: TeamEventStats2021RemoteGroup
    max: TeamEventStats2021RemoteGroup
    dev: TeamEventStats2021RemoteGroup
    opr: TeamEventStats2021RemoteGroup
}

export type TeamEventStats2021RemoteGroup = {
    __typename?: "TeamEventStats2021RemoteGroup"
    autoCarouselPoints: Scalars["Float"]
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoFreightPoints: Scalars["Float"]
    autoFreight1Points: Scalars["Float"]
    autoFreight2Points: Scalars["Float"]
    autoFreight3Points: Scalars["Float"]
    autoFreightStoragePoints: Scalars["Float"]
    autoBonusPoints: Scalars["Float"]
    autoBonusPointsIndividual: Scalars["Float"]
    dcAllianceHubPoints: Scalars["Float"]
    dcFreight1Points: Scalars["Float"]
    dcFreight2Points: Scalars["Float"]
    dcFreight3Points: Scalars["Float"]
    dcStoragePoints: Scalars["Float"]
    egDuckPoints: Scalars["Float"]
    allianceBalancedPoints: Scalars["Float"]
    egParkPoints: Scalars["Float"]
    egParkPointsIndividual: Scalars["Float"]
    cappingPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2022 = {
    __typename?: "TeamEventStats2022"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2022Group
    avg: TeamEventStats2022Group
    min: TeamEventStats2022Group
    max: TeamEventStats2022Group
    dev: TeamEventStats2022Group
    opr: TeamEventStats2022Group
}

export type TeamEventStats2022Group = {
    __typename?: "TeamEventStats2022Group"
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    autoConePoints: Scalars["Float"]
    autoTerminalPoints: Scalars["Float"]
    autoGroundPoints: Scalars["Float"]
    autoLowPoints: Scalars["Float"]
    autoMediumPoints: Scalars["Float"]
    autoHighPoints: Scalars["Float"]
    egNavPoints: Scalars["Float"]
    egNavPointsIndividual: Scalars["Float"]
    ownershipPoints: Scalars["Float"]
    coneOwnershipPoints: Scalars["Float"]
    beaconOwnershipPoints: Scalars["Float"]
    circuitPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    majorsByOppPoints: Scalars["Float"]
    minorsByOppPoints: Scalars["Float"]
    penaltyPointsByOpp: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    dcTerminalPoints: Scalars["Float"]
    dcGroundPoints: Scalars["Float"]
    dcLowPoints: Scalars["Float"]
    dcMediumPoints: Scalars["Float"]
    dcHighPoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2023 = {
    __typename?: "TeamEventStats2023"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2023Group
    avg: TeamEventStats2023Group
    min: TeamEventStats2023Group
    max: TeamEventStats2023Group
    dev: TeamEventStats2023Group
    opr: TeamEventStats2023Group
}

export type TeamEventStats2023Group = {
    __typename?: "TeamEventStats2023Group"
    egNavPoints: Scalars["Float"]
    egNavPointsIndividual: Scalars["Float"]
    purplePoints: Scalars["Float"]
    purplePointsIndividual: Scalars["Float"]
    yellowPoints: Scalars["Float"]
    yellowPointsIndividual: Scalars["Float"]
    autoPixelPoints: Scalars["Float"]
    autoBackstagePoints: Scalars["Float"]
    autoBackdropPoints: Scalars["Float"]
    autoNavPoints: Scalars["Float"]
    autoNavPointsIndividual: Scalars["Float"]
    dronePoints: Scalars["Float"]
    dronePointsIndividual: Scalars["Float"]
    setLinePoints: Scalars["Float"]
    mosaicPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    majorsByOppPoints: Scalars["Float"]
    minorsByOppPoints: Scalars["Float"]
    penaltyPointsByOpp: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    dcBackdropPoints: Scalars["Float"]
    dcBackstagePoints: Scalars["Float"]
    egPoints: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamEventStats2024 = {
    __typename?: "TeamEventStats2024"
    rank: Scalars["Int"]
    rp: Scalars["Float"]
    tb1: Scalars["Float"]
    tb2: Scalars["Float"]
    wins: Scalars["Int"]
    losses: Scalars["Int"]
    ties: Scalars["Int"]
    dqs: Scalars["Int"]
    qualMatchesPlayed: Scalars["Int"]
    tot: TeamEventStats2024Group
    avg: TeamEventStats2024Group
    min: TeamEventStats2024Group
    max: TeamEventStats2024Group
    dev: TeamEventStats2024Group
    opr: TeamEventStats2024Group
}

export type TeamEventStats2024Group = {
    __typename?: "TeamEventStats2024Group"
    autoParkPoints: Scalars["Float"]
    autoParkPointsIndividual: Scalars["Float"]
    autoSamplePoints: Scalars["Float"]
    autoSpecimenPoints: Scalars["Float"]
    autoSampleNetPoints: Scalars["Float"]
    autoSampleLowPoints: Scalars["Float"]
    autoSampleHighPoints: Scalars["Float"]
    autoSpecimenLowPoints: Scalars["Float"]
    autoSpecimenHighPoints: Scalars["Float"]
    dcParkPoints: Scalars["Float"]
    dcParkPointsIndividual: Scalars["Float"]
    dcSamplePoints: Scalars["Float"]
    dcSpecimenPoints: Scalars["Float"]
    dcSampleNetPoints: Scalars["Float"]
    dcSampleLowPoints: Scalars["Float"]
    dcSampleHighPoints: Scalars["Float"]
    dcSpecimenLowPoints: Scalars["Float"]
    dcSpecimenHighPoints: Scalars["Float"]
    autoPoints: Scalars["Float"]
    dcPoints: Scalars["Float"]
    majorsCommittedPoints: Scalars["Float"]
    minorsCommittedPoints: Scalars["Float"]
    penaltyPointsCommitted: Scalars["Float"]
    majorsByOppPoints: Scalars["Float"]
    minorsByOppPoints: Scalars["Float"]
    penaltyPointsByOpp: Scalars["Float"]
    totalPointsNp: Scalars["Float"]
    totalPoints: Scalars["Float"]
}

export type TeamMatchParticipation = {
    __typename?: "TeamMatchParticipation"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    station: Station
    teamNumber: Scalars["Int"]
    allianceRole: AllianceRole
    surrogate: Scalars["Boolean"]
    noShow: Scalars["Boolean"]
    dq: Scalars["Boolean"]
    onField: Scalars["Boolean"]
    createdAt: Scalars["DateTime"]
    updatedAt: Scalars["DateTime"]
    team: Team
    match: Match
    event: Event
}

export enum Alliance {
    Red = "Red",
    Blue = "Blue",
    Solo = "Solo"
}

export enum Station {
    One = "One",
    Two = "Two",
    NotOnField = "NotOnField",
    Solo = "Solo"
}

export enum AllianceRole {
    Captain = "Captain",
    FirstPick = "FirstPick",
    SecondPick = "SecondPick",
    Solo = "Solo"
}

export type Match = {
    __typename?: "Match"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    id: Scalars["Int"]
    hasBeenPlayed: Scalars["Boolean"]
    scheduledStartTime?: Maybe<Scalars["DateTime"]>
    actualStartTime?: Maybe<Scalars["DateTime"]>
    postResultTime?: Maybe<Scalars["DateTime"]>
    tournamentLevel: TournamentLevel
    series: Scalars["Int"]
    matchNum: Scalars["Int"]
    description: Scalars["String"]
    createdAt: Scalars["DateTime"]
    updatedAt: Scalars["DateTime"]
    scores?: Maybe<MatchScores>
    teams: Array<TeamMatchParticipation>
    event: Event
}

export enum TournamentLevel {
    Quals = "Quals",
    Semis = "Semis",
    Finals = "Finals",
    DoubleElim = "DoubleElim"
}

export type MatchScores =
    | MatchScores2019
    | MatchScores2020Trad
    | MatchScores2020Remote
    | MatchScores2021Trad
    | MatchScores2021Remote
    | MatchScores2022
    | MatchScores2023
    | MatchScores2024

export type MatchScores2019 = {
    __typename?: "MatchScores2019"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    red: MatchScores2019Alliance
    blue: MatchScores2019Alliance
}

export type MatchScores2019Alliance = {
    __typename?: "MatchScores2019Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    autoNav2019_1: Scalars["Boolean"]
    autoNav2019_2: Scalars["Boolean"]
    repositioned: Scalars["Boolean"]
    autoDelivered: Scalars["Int"]
    autoSkystonesDeliveredFirst: Scalars["Int"]
    autoReturned: Scalars["Int"]
    autoFirstReturnedSkystone: Scalars["Boolean"]
    autoPlaced: Scalars["Int"]
    dcDelivered: Scalars["Int"]
    dcReturned: Scalars["Int"]
    dcPlaced: Scalars["Int"]
    skyscraperHeight: Scalars["Int"]
    capLevel1: Scalars["Int"]
    capLevel2: Scalars["Int"]
    egFoundationMoved: Scalars["Boolean"]
    egParked1: Scalars["Boolean"]
    egParked2: Scalars["Boolean"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    minorsByOpp: Scalars["Int"]
    majorsByOpp: Scalars["Int"]
    penaltyPointsByOpp: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoRepositioningPoints: Scalars["Int"]
    autoDeliveryPoints: Scalars["Int"]
    autoPlacementPoints: Scalars["Int"]
    dcDeliveryPoints: Scalars["Int"]
    dcPlacementPoints: Scalars["Int"]
    skyscraperBonusPoints: Scalars["Int"]
    cappingPoints: Scalars["Int"]
    egParkPoints: Scalars["Int"]
    egFoundationMovedPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export type MatchScores2020Trad = {
    __typename?: "MatchScores2020Trad"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    red: MatchScores2020Alliance
    blue: MatchScores2020Alliance
}

export type MatchScores2020Alliance = {
    __typename?: "MatchScores2020Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    autoWobble1: Scalars["Boolean"]
    autoWobble2: Scalars["Boolean"]
    autoNav2020_1: Scalars["Boolean"]
    autoNav2020_2: Scalars["Boolean"]
    autoPowershots: Scalars["Int"]
    autoTowerLow: Scalars["Int"]
    autoTowerMid: Scalars["Int"]
    autoTowerHigh: Scalars["Int"]
    dcTowerLow: Scalars["Int"]
    dcTowerMid: Scalars["Int"]
    dcTowerHigh: Scalars["Int"]
    wobbleEndPos1: WobbleEndPosition2020
    wobbleEndPos2: WobbleEndPosition2020
    egWobbleRings: Scalars["Int"]
    egPowershots: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoTowerPoints: Scalars["Int"]
    autoWobblePoints: Scalars["Int"]
    autoPowershotPoints: Scalars["Int"]
    egWobblePoints: Scalars["Int"]
    egPowershotPoints: Scalars["Int"]
    egWobbleRingPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export enum WobbleEndPosition2020 {
    None = "None",
    StartLine = "StartLine",
    DropZone = "DropZone"
}

export type MatchScores2020Remote = {
    __typename?: "MatchScores2020Remote"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    autoWobble1: Scalars["Boolean"]
    autoWobble2: Scalars["Boolean"]
    autoNav2020: Scalars["Boolean"]
    autoPowershots: Scalars["Int"]
    autoTowerLow: Scalars["Int"]
    autoTowerMid: Scalars["Int"]
    autoTowerHigh: Scalars["Int"]
    dcTowerLow: Scalars["Int"]
    dcTowerMid: Scalars["Int"]
    dcTowerHigh: Scalars["Int"]
    wobbleEndPos1: WobbleEndPosition2020
    wobbleEndPos2: WobbleEndPosition2020
    egWobbleRings: Scalars["Int"]
    egPowershots: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoTowerPoints: Scalars["Int"]
    autoWobblePoints: Scalars["Int"]
    autoPowershotPoints: Scalars["Int"]
    egWobblePoints: Scalars["Int"]
    egPowershotPoints: Scalars["Int"]
    egWobbleRingPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export type MatchScores2021Trad = {
    __typename?: "MatchScores2021Trad"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    red: MatchScores2021Alliance
    blue: MatchScores2021Alliance
}

export type MatchScores2021Alliance = {
    __typename?: "MatchScores2021Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    barcodeElement1: BarcodeElement2021
    barcodeElement2: BarcodeElement2021
    autoCarousel: Scalars["Boolean"]
    autoNav2021_1: AutoNav2021
    autoNav2021_2: AutoNav2021
    autoBonus1: Scalars["Boolean"]
    autoBonus2: Scalars["Boolean"]
    autoStorageFreight: Scalars["Int"]
    autoFreight1: Scalars["Int"]
    autoFreight2: Scalars["Int"]
    autoFreight3: Scalars["Int"]
    dcStorageFreight: Scalars["Int"]
    dcFreight1: Scalars["Int"]
    dcFreight2: Scalars["Int"]
    dcFreight3: Scalars["Int"]
    sharedFreight: Scalars["Int"]
    egDucks: Scalars["Int"]
    allianceBalanced: Scalars["Boolean"]
    sharedUnbalanced: Scalars["Boolean"]
    egPark1: EgPark2021
    egPark2: EgPark2021
    capped: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    autoCarouselPoints: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoFreightPoints: Scalars["Int"]
    autoBonusPoints: Scalars["Int"]
    dcAllianceHubPoints: Scalars["Int"]
    dcSharedHubPoints: Scalars["Int"]
    dcStoragePoints: Scalars["Int"]
    egDuckPoints: Scalars["Int"]
    allianceBalancedPoints: Scalars["Int"]
    sharedUnbalancedPoints: Scalars["Int"]
    egParkPoints: Scalars["Int"]
    cappingPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export enum BarcodeElement2021 {
    Duck = "Duck",
    Tse = "TSE"
}

export enum AutoNav2021 {
    None = "None",
    InStorage = "InStorage",
    CompletelyInStorage = "CompletelyInStorage",
    InWarehouse = "InWarehouse",
    CompletelyInWarehouse = "CompletelyInWarehouse"
}

export enum EgPark2021 {
    None = "None",
    InWarehouse = "InWarehouse",
    CompletelyInWarehouse = "CompletelyInWarehouse"
}

export type MatchScores2021Remote = {
    __typename?: "MatchScores2021Remote"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    barcodeElement: BarcodeElement2021
    autoCarousel: Scalars["Boolean"]
    autoNav2021: AutoNav2021
    autoBonus: Scalars["Boolean"]
    autoStorageFreight: Scalars["Int"]
    autoFreight1: Scalars["Int"]
    autoFreight2: Scalars["Int"]
    autoFreight3: Scalars["Int"]
    dcStorageFreight: Scalars["Int"]
    dcFreight1: Scalars["Int"]
    dcFreight2: Scalars["Int"]
    dcFreight3: Scalars["Int"]
    egDucks: Scalars["Int"]
    allianceBalanced: Scalars["Boolean"]
    egPark: EgPark2021
    capped: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    autoCarouselPoints: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoFreightPoints: Scalars["Int"]
    autoBonusPoints: Scalars["Int"]
    dcAllianceHubPoints: Scalars["Int"]
    dcStoragePoints: Scalars["Int"]
    egDuckPoints: Scalars["Int"]
    allianceBalancedPoints: Scalars["Int"]
    egParkPoints: Scalars["Int"]
    cappingPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export type MatchScores2022 = {
    __typename?: "MatchScores2022"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    autoConeLayout: ConeLayout
    dcConeLayout: ConeLayout
    red: MatchScores2022Alliance
    blue: MatchScores2022Alliance
}

export type ConeLayout = {
    __typename?: "ConeLayout"
    redNearTerminal: Scalars["Int"]
    redFarTerminal: Scalars["Int"]
    blueNearTerminal: Scalars["Int"]
    blueFarTerminal: Scalars["Int"]
    junctions: Array<Array<Array<ConeType>>>
}

export enum ConeType {
    RedCone = "RedCone",
    BlueCone = "BlueCone",
    RedBeacon1 = "RedBeacon1",
    BlueBeacon1 = "BlueBeacon1",
    RedBeacon2 = "RedBeacon2",
    BlueBeacon2 = "BlueBeacon2"
}

export type MatchScores2022Alliance = {
    __typename?: "MatchScores2022Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    autoNav2022_1: AutoNav2022
    autoNav2022_2: AutoNav2022
    autoTerminalCones: Scalars["Int"]
    autoGroundCones: Scalars["Int"]
    autoLowCones: Scalars["Int"]
    autoMediumCones: Scalars["Int"]
    autoHighCones: Scalars["Int"]
    dcNearTerminalCones: Scalars["Int"]
    dcFarTerminalCones: Scalars["Int"]
    dcTerminalCones: Scalars["Int"]
    dcGroundCones: Scalars["Int"]
    dcLowCones: Scalars["Int"]
    dcMediumCones: Scalars["Int"]
    dcHighCones: Scalars["Int"]
    egNav1: Scalars["Boolean"]
    egNav2: Scalars["Boolean"]
    coneOwnedJunctions: Scalars["Int"]
    beaconOwnedJunctions: Scalars["Int"]
    circuit: Scalars["Boolean"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    minorsByOpp: Scalars["Int"]
    majorsByOpp: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    autoConePoints: Scalars["Int"]
    egNavPoints: Scalars["Int"]
    ownershipPoints: Scalars["Int"]
    circuitPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    penaltyPointsByOpp: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export enum AutoNav2022 {
    None = "None",
    Terminal = "Terminal",
    Signal = "Signal",
    TeamSignal = "TeamSignal"
}

export type MatchScores2023 = {
    __typename?: "MatchScores2023"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    red: MatchScores2023Alliance
    blue: MatchScores2023Alliance
}

export type MatchScores2023Alliance = {
    __typename?: "MatchScores2023Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    egNav2023_1: EgNav2023
    egNav2023_2: EgNav2023
    purple1: AutoSpecialScoring
    purple2: AutoSpecialScoring
    yellow1: AutoSpecialScoring
    yellow2: AutoSpecialScoring
    autoBackdrop: Scalars["Int"]
    autoBackstage: Scalars["Int"]
    dcBackstage: Scalars["Int"]
    dcBackdrop: Scalars["Int"]
    autoNav1: Scalars["Boolean"]
    autoNav2: Scalars["Boolean"]
    drone1: Scalars["Int"]
    drone2: Scalars["Int"]
    maxSetLine: Scalars["Int"]
    mosaics: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    minorsByOpp: Scalars["Int"]
    majorsByOpp: Scalars["Int"]
    egNavPoints: Scalars["Int"]
    purplePoints: Scalars["Int"]
    yellowPoints: Scalars["Int"]
    autoPixelPoints: Scalars["Int"]
    autoNavPoints: Scalars["Int"]
    dronePoints: Scalars["Int"]
    setLinePoints: Scalars["Int"]
    mosaicPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    penaltyPointsByOpp: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    egPoints: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export enum EgNav2023 {
    None = "None",
    Backstage = "Backstage",
    Rigging = "Rigging"
}

export enum AutoSpecialScoring {
    None = "None",
    NoProp = "NoProp",
    TeamProp = "TeamProp"
}

export type MatchScores2024 = {
    __typename?: "MatchScores2024"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    red: MatchScores2024Alliance
    blue: MatchScores2024Alliance
}

export type MatchScores2024Alliance = {
    __typename?: "MatchScores2024Alliance"
    season: Scalars["Int"]
    eventCode: Scalars["String"]
    matchId: Scalars["Int"]
    alliance: Alliance
    autoPark1: ItdPark
    autoPark2: ItdPark
    autoSampleNet: Scalars["Int"]
    autoSampleLow: Scalars["Int"]
    autoSampleHigh: Scalars["Int"]
    autoSpecimenLow: Scalars["Int"]
    autoSpecimenHigh: Scalars["Int"]
    dcPark1: ItdPark
    dcPark2: ItdPark
    dcSampleNet: Scalars["Int"]
    dcSampleLow: Scalars["Int"]
    dcSampleHigh: Scalars["Int"]
    dcSpecimenLow: Scalars["Int"]
    dcSpecimenHigh: Scalars["Int"]
    minorsCommitted: Scalars["Int"]
    majorsCommitted: Scalars["Int"]
    minorsByOpp: Scalars["Int"]
    majorsByOpp: Scalars["Int"]
    autoParkPoints: Scalars["Int"]
    autoSamplePoints: Scalars["Int"]
    autoSpecimenPoints: Scalars["Int"]
    dcParkPoints: Scalars["Int"]
    dcSamplePoints: Scalars["Int"]
    dcSpecimenPoints: Scalars["Int"]
    autoPoints: Scalars["Int"]
    dcPoints: Scalars["Int"]
    penaltyPointsCommitted: Scalars["Int"]
    penaltyPointsByOpp: Scalars["Int"]
    totalPointsNp: Scalars["Int"]
    totalPoints: Scalars["Int"]
}

export enum ItdPark {
    ObservationZone = "ObservationZone",
    Ascent1 = "Ascent1",
    Ascent2 = "Ascent2",
    Ascent3 = "Ascent3",
    None = "None"
}

export type QuickStats = {
    __typename?: "QuickStats"
    season: Scalars["Int"]
    number: Scalars["Int"]
    tot: QuickStat
    auto: QuickStat
    dc: QuickStat
    eg: QuickStat
    count: Scalars["Int"]
}

export type QuickStat = {
    __typename?: "QuickStat"
    value: Scalars["Float"]
    rank: Scalars["Int"]
}

export enum RegionOption {
    All = "All",
    UnitedStates = "UnitedStates",
    International = "International",
    Usca = "USCA",
    Usny = "USNY",
    Ustx = "USTX",
    Au = "AU",
    Br = "BR",
    Caab = "CAAB",
    Cabc = "CABC",
    Caon = "CAON",
    Caqc = "CAQC",
    Cmpic = "CMPIC",
    Cmpz2 = "CMPZ2",
    Cn = "CN",
    Cy = "CY",
    De = "DE",
    Eg = "EG",
    Es = "ES",
    Fr = "FR",
    Gb = "GB",
    Il = "IL",
    In = "IN",
    Jm = "JM",
    Kr = "KR",
    Kz = "KZ",
    Ly = "LY",
    Mx = "MX",
    Ng = "NG",
    Nl = "NL",
    Nz = "NZ",
    Onadod = "ONADOD",
    Qa = "QA",
    Ro = "RO",
    Ru = "RU",
    Sa = "SA",
    Th = "TH",
    Tw = "TW",
    Usak = "USAK",
    Usal = "USAL",
    Usar = "USAR",
    Usarl = "USARL",
    Usaz = "USAZ",
    Uscala = "USCALA",
    Uscals = "USCALS",
    Uscano = "USCANO",
    Uscasd = "USCASD",
    Uschs = "USCHS",
    Usco = "USCO",
    Usct = "USCT",
    Usde = "USDE",
    Usfl = "USFL",
    Usga = "USGA",
    Ushi = "USHI",
    Usia = "USIA",
    Usid = "USID",
    Usil = "USIL",
    Usin = "USIN",
    Usky = "USKY",
    Usla = "USLA",
    Usma = "USMA",
    Usmd = "USMD",
    Usmi = "USMI",
    Usmn = "USMN",
    Usmoks = "USMOKS",
    Usms = "USMS",
    Usmt = "USMT",
    Usnc = "USNC",
    Usnd = "USND",
    Usne = "USNE",
    Usnh = "USNH",
    Usnj = "USNJ",
    Usnm = "USNM",
    Usnv = "USNV",
    Usnyex = "USNYEX",
    Usnyli = "USNYLI",
    Usnyny = "USNYNY",
    Usoh = "USOH",
    Usok = "USOK",
    Usor = "USOR",
    Uspa = "USPA",
    Usri = "USRI",
    Ussc = "USSC",
    Ustn = "USTN",
    Ustxce = "USTXCE",
    Ustxho = "USTXHO",
    Ustxno = "USTXNO",
    Ustxso = "USTXSO",
    Ustxwp = "USTXWP",
    Usut = "USUT",
    Usva = "USVA",
    Usvt = "USVT",
    Uswa = "USWA",
    Uswi = "USWI",
    Uswv = "USWV",
    Uswy = "USWY",
    Za = "ZA"
}

export enum EventTypeOption {
    All = "All",
    Competition = "Competition",
    Official = "Official",
    NonCompetition = "NonCompetition",
    Scrimmage = "Scrimmage",
    LeagueMeet = "LeagueMeet",
    Qualifier = "Qualifier",
    LeagueTournament = "LeagueTournament",
    Championship = "Championship",
    Other = "Other",
    FirstChampionship = "FIRSTChampionship",
    SuperQualifier = "SuperQualifier",
    InnovationChallenge = "InnovationChallenge",
    OffSeason = "OffSeason",
    Kickoff = "Kickoff",
    Workshop = "Workshop",
    DemoExhibition = "DemoExhibition",
    VolunteerSignup = "VolunteerSignup",
    PracticeDay = "PracticeDay"
}

export type TepRecords = {
    __typename?: "TepRecords"
    data: Array<TepRecordRow>
    offset: Scalars["Int"]
    count: Scalars["Int"]
}

export type TepRecordRow = {
    __typename?: "TepRecordRow"
    data: TeamEventParticipation
    noFilterRank: Scalars["Int"]
    filterRank: Scalars["Int"]
    noFilterSkipRank: Scalars["Int"]
    filterSkipRank: Scalars["Int"]
}

export enum SortDir {
    Asc = "Asc",
    Desc = "Desc"
}

export type Filter = {
    group?: Maybe<FilterGroup>
    cond?: Maybe<FilterCond>
}

export type FilterGroup = {
    ty: FilterGroupTy
    children: Array<Filter>
}

export enum FilterGroupTy {
    And = "And",
    Or = "Or"
}

export type FilterCond = {
    lhs: FilterValue
    op: FilterOp
    rhs: FilterValue
}

export type FilterValue = {
    lit?: Maybe<Scalars["Int"]>
    var?: Maybe<Scalars["String"]>
}

export enum FilterOp {
    Eq = "Eq",
    Neq = "Neq",
    Gt = "Gt",
    Gte = "Gte",
    Lt = "Lt",
    Lte = "Lte"
}

export enum RemoteOption {
    All = "All",
    Trad = "Trad",
    Remote = "Remote"
}

export type MatchRecords = {
    __typename?: "MatchRecords"
    data: Array<MatchRecordRow>
    offset: Scalars["Int"]
    count: Scalars["Int"]
}

export type MatchRecordRow = {
    __typename?: "MatchRecordRow"
    data: SpecificAlliance
    noFilterRank: Scalars["Int"]
    filterRank: Scalars["Int"]
    noFilterSkipRank: Scalars["Int"]
    filterSkipRank: Scalars["Int"]
}

export type SpecificAlliance = {
    __typename?: "SpecificAlliance"
    match: Match
    alliance: Alliance
}

export type BestName = {
    __typename?: "BestName"
    id: Scalars["Int"]
    team1: Team
    team2: Team
}

export type Mutation = {
    __typename?: "Mutation"
    voteBestName?: Maybe<BestName>
}

export type MutationVoteBestNameArgs = {
    id: Scalars["Int"]
    vote: Scalars["Int"]
}

export type Subscription = {
    __typename?: "Subscription"
    newMatches?: Maybe<Array<Match>>
}

export type SubscriptionNewMatchesArgs = {
    season: Scalars["Int"]
    code: Scalars["String"]
}

export type OprsAtEventQueryVariables = Exact<{
    code: Scalars["String"]
}>

export type OprsAtEventQuery = { __typename?: "Query" } & {
    eventByCode?: Maybe<
        { __typename?: "Event" } & {
            teams: Array<
                { __typename?: "TeamEventParticipation" } & Pick<
                    TeamEventParticipation,
                    "teamNumber"
                > & {
                    team: { __typename?: "Team" } & Pick<Team, "name"> & {
                        quickStats?: Maybe<
                            { __typename?: "QuickStats" } & {
                                tot: { __typename?: "QuickStat" } & Pick<QuickStat, "value">
                                auto: { __typename?: "QuickStat" } & Pick<
                                    QuickStat,
                                    "value"
                                >
                            }
                        >
                    }
                }
            >
        }
    >
}

export type GetAllEventsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllEventsQuery = { __typename?: "Query" } & {
    eventsSearch: Array<
        { __typename?: "Event" } & Pick<
            Event,
            "code" | "regionCode" | "name" | "start"
        >
    >
}
