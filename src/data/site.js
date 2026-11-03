// ---------------------------------------------------------------------------
// Central content file. Edit copy, results, timeline, and partner info here —
// components pull from this single source instead of hardcoding text.
// ---------------------------------------------------------------------------

import heroSprint from "../assets/photos/hero-sprint.jpg";
import portraitSummit from "../assets/photos/portrait-summit.jpg";
import headshot from "../assets/photos/headshot.jpg";
import worlds2020Silver from "../assets/photos/worlds-2020-silver.jpg";
import worlds2022Lygna from "../assets/photos/worlds-2022-lygna.jpg";
import toblachTds from "../assets/photos/toblach-tds.jpg";
import olympicsRings from "../assets/photos/olympics-rings.jpg";
import olympicsPack from "../assets/photos/olympics-pack.jpg";
import holmenkollenFog from "../assets/photos/holmenkollen-fog.jpg";
import teamCanadaGroup from "../assets/photos/team-canada-group.jpg";
import silverstarMoment from "../assets/photos/silverstar-moment.jpg";
import trialsCloseup from "../assets/photos/trials-closeup.jpg";
import meetSupporters from "../assets/photos/meet-supporters.jpg";

import fischerLogo from "../assets/logos/fischer.png";
import lekiLogo from "../assets/logos/leki.png";
import lillsportLogo from "../assets/logos/lillsport.png";
import jvairLogo from "../assets/logos/jvair.png";
import aimaLogo from "../assets/logos/aima.png";
import forbiddenLogo from "../assets/logos/forbidden.png";
import highwoodLogo from "../assets/logos/highwood.png";

export const photos = {
  heroSprint,
  portraitSummit,
  headshot,
  worlds2020Silver,
  worlds2022Lygna,
  toblachTds,
  olympicsRings,
  olympicsPack,
  holmenkollenFog,
  teamCanadaGroup,
  silverstarMoment,
  trialsCloseup,
  meetSupporters,
};

export const profile = {
  name: "Tom Stephen",
  fullName: "Thomas Stephen",
  role: "Cross-Country Skier — Canadian National Team",
  birthDate: "March 30, 2002",
  birthplace: "Calgary, Alberta",
  residence: "Canmore & Calgary, Alberta",
  club: "Foothills Nordic Ski Club",
  program: "Alberta World Cup Academy",
  coach: "Tormod Vatten",
  education: "Software Engineering student, University of Calgary",
  instagramHandle: "@xctom",
  instagramUrl: "https://www.instagram.com/xctom/",
  email: "tomwstephen@icloud.com",
};

export const heroStats = [
  { value: "2026", label: "Olympian — Milano Cortina" },
  { value: "9th", label: "10km Freestyle, Olympic Games" },
  { value: "5th", label: "Men's Relay, Olympic Games" },
  { value: "2020", label: "Junior Worlds Relay — Silver" },
];

export const bioFirstPerson = [
  `I'm Tom Stephen, a cross-country skier from Calgary, Alberta, racing on Canada's national team. I started young, after following my older sister onto the trails, and it wasn't long before skiing was the thing I wanted to chase as far as it would go.`,
  `The path went through Foothills Nordic and the Alberta World Cup Academy, four Junior World Championships, two U23 World Championships, the World Cup circuit, and — in February 2026 — my first Olympic Games. Some of my proudest moments have come as part of a team: a historic Junior Worlds relay silver in 2020, and Canada's best-ever Olympic cross-country result, 5th in the relay, in 2026, anchoring alongside Xavier McKeever, Antoine Cyr, and Rémi Drolet. Individually, 9th in the Olympic 10km freestyle — the top Canadian result in a while — showed me I can race at the front on the sport's biggest stage.`,
  `Off snow, I'm finishing a software engineering degree at the University of Calgary and coaching at Foothills Nordic, the club that started it all for me. Balancing school, coaching, and full-time training keeps me busy, but the two sides feed each other — both reward patience, iteration, and paying attention to the details that actually move the needle.`,
  `When I'm not training, racing, or in class, I'm usually still outside — fly fishing, surfing, in the backcountry, or on a bike.`,
];

export const bioShort = `Tom Stephen is a Canadian Olympic cross-country skier from Calgary, Alberta. A member of Foothills Nordic Ski Club and the Alberta World Cup Academy, he made his FIS World Cup debut in 2022. Tom was part of Canada's historic silver-medal relay team at the 2020 FIS Junior World Championships and later placed fifth at the 2025 U23 World Championships. At his Olympic debut at Milano Cortina 2026, he finished ninth in the men's 10km freestyle and fifth with Canada's men's relay team — the best Olympic result in Canadian cross-country relay history. Away from skiing, Tom studies software engineering at the University of Calgary and coaches at Foothills Nordic.`;

export const bioLong = `Tom Stephen is a Canadian cross-country skier and 2026 Olympian from Calgary, Alberta. He began competing at age 10 after following his sister into the sport, quickly setting his sights on racing for Canada — inspired in part by watching Alex Harvey compete internationally.

Tom came through Foothills Nordic Ski Club and trains with the Alberta World Cup Academy. He competed at four consecutive FIS Junior World Championships from 2019 to 2022. In 2020, he joined Xavier McKeever, Olivier Léveillé, and Rémi Drolet to win silver in the men's 4×5km relay in Oberwiesenthal, Germany — Canada's first-ever World Championship relay medal in cross-country skiing at any level. His best individual junior-world result was fifth in the 30km classic mass start in 2021.

After making his World Cup debut in March 2022, Tom continued progressing internationally, finishing fifth in the 20km classic mass start at the 2025 U23 World Championships and earning his first World Cup points with a 22nd-place finish at the Engadin 20km mass start.

Tom's road to the 2026 Olympic Games included a hip surgery that cost him a full season, followed by a back injury that delayed his 2025-26 start. Just 10 days after returning to snow, he won the 10km classic at Canada's Olympic trials in Vernon, BC, to secure his place on the team. At Milano Cortina 2026, he placed ninth in the 10km freestyle — the top Canadian result of the day — fifth with Canada's men's relay team, 17th in the 50km classic, and 47th in the classic sprint.

Tom is completing a software engineering degree at the University of Calgary and coaches at Foothills Nordic, the club he grew up in. Outside of training, racing, and school, he spends his time fly fishing, surfing, in the backcountry, and on a bike.`;

export const timeline = [
  {
    year: "Age 5",
    title: "First races",
    text: "Started skiing very young in Calgary and began racing at around 5, tagging along after my sister in the Foothills Nordic program.",
  },
  {
    year: "2019",
    title: "First Junior Worlds",
    text: "The first of four consecutive FIS Junior World Championships, racing in Lahti, Finland.",
  },
  {
    year: "2020",
    title: "Junior Worlds relay — Silver",
    text: "Silver in the 4×5km relay at Oberwiesenthal, Germany, alongside Xavier McKeever, Olivier Léveillé, and Rémi Drolet — Canada's first-ever World Championship cross-country relay medal at any level.",
    image: photos.worlds2020Silver,
    imageAlt: "Team Canada celebrating with the Canadian flag and a second-place marker at the Oberwiesenthal World Championships",
  },
  {
    year: "2021",
    title: "Breakthrough junior season",
    text: "5th in the 30km classic mass start at Junior Worlds in Vuokatti, Finland — my best individual junior-world result.",
  },
  {
    year: "2022",
    title: "World Cup debut",
    text: "4th in the Junior Worlds relay and 7th in the 30km freestyle mass start at Lygna, Norway. Made my FIS World Cup debut in March.",
    image: photos.worlds2022Lygna,
    imageAlt: "Tom Stephen racing with teammates at Lygna, Norway",
  },
  {
    year: "2023",
    title: "Hip surgery, a year away",
    text: "Missed a full season recovering from hip surgery — a setback that reshaped how I train and race today.",
  },
  {
    year: "2024",
    title: "Back to the World Cup",
    text: "Returned to World Cup racing and competed at my first U23 World Championships.",
  },
  {
    year: "2024–25",
    title: "Breakthrough senior season",
    text: "Won Nor-Am races in Vernon, BC, finished 2nd overall in the Nor-Am Cup standings, and scored my first World Cup points — 22nd at the Engadin 20km mass start.",
    image: photos.toblachTds,
    imageAlt: "Tom Stephen racing at the Tour de Ski stage in Toblach, Italy",
  },
  {
    year: "2025",
    title: "Best U23 result",
    text: "5th in the 20km classic mass start at the U23 World Championships — my best individual U23 finish.",
  },
  {
    year: "Dec 2025",
    title: "Olympic trials, 10 days back on snow",
    text: "Won the 10km classic in 26:35.3 at Canada's Olympic Trials in Vernon, BC, just 10 days after returning to snow from a back injury, to secure my spot on the team.",
    image: photos.trialsCloseup,
    imageAlt: "Tom Stephen racing intensely at the Canadian Olympic Trials",
  },
  {
    year: "Feb 2026",
    title: "Olympic debut — Milano Cortina",
    text: "9th in the 10km freestyle interval start — the top Canadian result of the day — and 5th in the men's relay with Xavier McKeever, Antoine Cyr, and Rémi Drolet, Canada's best-ever Olympic result in the event. Also raced the classic sprint (47th) and 50km classic mass start (17th).",
    image: photos.olympicsPack,
    imageAlt: "Tom Stephen racing in the lead pack at the Milano Cortina 2026 Olympic Winter Games",
  },
  {
    year: "May 2026",
    title: "Named to the Senior Team",
    text: "Named to Nordiq Canada's 2026–27 Senior National Team.",
  },
];

export const results = {
  olympics: {
    title: "Olympic Winter Games — Milano Cortina 2026",
    rows: [
      { event: "Men's 4×7.5km Relay", finish: "5th", note: "Canada's best-ever Olympic result in the event" },
      { event: "Men's 10km Freestyle, Interval Start", finish: "9th", note: "Top Canadian result of the day" },
      { event: "Men's 50km Classic, Mass Start", finish: "17th", note: "" },
      { event: "Men's Classic Sprint", finish: "47th", note: "" },
    ],
  },
  worlds: {
    title: "World Championship Highlights",
    rows: [
      { competition: "FIS U23 World Championships", year: "2025", event: "20km Classic Mass Start", finish: "5th" },
      { competition: "FIS U23 World Championships", year: "2025", event: "Mixed 4×5km Relay", finish: "8th" },
      { competition: "FIS U23 World Championships", year: "2025", event: "10km Freestyle", finish: "13th" },
      { competition: "FIS Junior World Championships", year: "2022", event: "4×5km Relay", finish: "4th" },
      { competition: "FIS Junior World Championships", year: "2022", event: "30km Freestyle Mass Start", finish: "7th" },
      { competition: "FIS Junior World Championships", year: "2021", event: "30km Classic Mass Start", finish: "5th" },
      { competition: "FIS Junior World Championships", year: "2021", event: "4×5km Relay", finish: "6th" },
      { competition: "FIS Junior World Championships", year: "2021", event: "10km Freestyle", finish: "10th" },
      { competition: "FIS Junior World Championships", year: "2020", event: "4×5km Relay", finish: "Silver" },
    ],
  },
  seniorCircuit: [
    "FIS World Cup debut — March 6, 2022.",
    "First World Cup points: 22nd, Engadin World Cup 20km mass start, 2025.",
    "28th, Toblach pursuit, 2025–26 Tour de Ski.",
    "Three Continental Cup / Nor-Am victories through December 2025: Vernon 7.5km freestyle, Vernon freestyle sprint, and the Olympic trials 10km classic (26:35.3, Sovereign Lake Nordic Centre, Vernon BC).",
    "2nd overall, 2024–25 Nor-Am Cup standings.",
  ],
  fisProfileUrl:
    "https://www.fis-ski.com/DB/general/athlete-biography.html?competitorid=226849&sectorcode=CC",
};

export const partners = [
  {
    name: "Fischer",
    logo: fischerLogo,
    blurb: "My race skis, boots, and bindings. Making the fastest skis in the world since 1924.",
    url: "https://www.fischersports.com/",
  },
  {
    name: "Leki",
    logo: lekiLogo,
    blurb: "My race poles. Providing the best poles for cross-country skiing since 1948. As stiff as they get.",
    url: "https://www.leki.com/",
  },
  {
    name: "Lill-Sport",
    logo: lillsportLogo,
    blurb: "My race gloves — a Swedish brand built by and for cross-country skiers since 1984. Fits like a glove.",
    url: "https://lillsport.com/",
  },
  {
    name: "J. Vair Anderson Jewellers",
    logo: jvairLogo,
    blurb: "Calgary jewellers and watchmakers since 1925, supporting my Olympic journey.",
    url: "https://www.jvairanderson.com/",
  },
  {
    name: "AIMA",
    logo: aimaLogo,
    blurb: "My e-bike partner, powering commuting to and from training and the adventure lifestyle.",
    url: "https://www.aimatech.com/",
  },
  {
    name: "Forbidden",
    logo: forbiddenLogo,
    blurb: "My mountain bikes for training — high-pivot bikes built in Cumberland, BC.",
    url: "https://forbiddenbike.com/",
  },
  {
    name: "Highwood Adventures",
    logo: highwoodLogo,
    blurb:
      "The generous support from a lifelong Foothills member, allowing me to compete at the highest level.",
  },
];

export const press = [
  {
    title: "Canadian skier Tom Stephen scores career-best 9th at Milano Cortina 2026",
    outlet: "Rocky Mountain Outlook",
    date: "Feb 2026",
    url: "https://www.rmoutlook.com/2026-olympics/canadian-skier-tom-stephen-scores-career-best-9th-at-milano-cortina-2026-11876674",
  },
  {
    title: "Tom Stephen: Bow Valley Olympian at Milano Cortina 2026",
    outlet: "Rocky Mountain Outlook",
    date: "Feb 2026",
    url: "https://www.rmoutlook.com/2026-olympics/tom-stephen-bow-valley-olympian-at-milano-cortina-2026-11824790",
  },
  {
    title: "Calgarian Tom Stephen secures spot on Canada's Olympic cross-country team",
    outlet: "CTV News Calgary",
    date: "Dec 2025",
    url: "https://www.ctvnews.ca/calgary/article/calgarian-tom-stephen-secures-spot-on-canadas-olympic-cross-country-team/",
  },
  {
    title: "Olympic hopeful finds way to offset costs to compete in his sport",
    outlet: "CTV News Calgary",
    date: "",
    url: "https://www.ctvnews.ca/calgary/article/olympic-hopeful-finds-way-to-offset-costs-to-compete-in-his-sport/",
  },
];

export const featuredVideo = {
  title: "Tom Stephen — video",
  youtubeId: "nSiI3utP_pU",
  url: "https://www.youtube.com/watch?v=nSiI3utP_pU",
};

export const video = {
  title: "Tom Stephen — video feature",
  youtubeId: "-TFd0lC9A84",
  url: "https://www.youtube.com/watch?v=-TFd0lC9A84",
};

export const gallery = [
  { src: photos.headshot, alt: "Tom Stephen, official headshot" },
  { src: photos.heroSprint, alt: "Racing for Canada at Milano Cortina 2026", credit: "" },
  { src: photos.olympicsPack, alt: "Climbing with the lead pack at the Milano Cortina 2026 Olympic Winter Games" },
  { src: photos.olympicsRings, alt: "At the Olympic Rings, Milano Cortina 2026" },
  { src: photos.worlds2020Silver, alt: "Team Canada, Junior Worlds relay silver, Oberwiesenthal 2020" },
  { src: photos.worlds2022Lygna, alt: "Racing at the 2022 Junior World Championships, Lygna, Norway" },
  { src: photos.toblachTds, alt: "Tour de Ski, Toblach, Italy" },
  { src: photos.holmenkollenFog, alt: "World Cup racing at Holmenkollen, Oslo" },
  { src: photos.trialsCloseup, alt: "Canadian Olympic Trials, December 2025" },
  { src: photos.portraitSummit, alt: "Tom Stephen, Nordiq Canada" },
  { src: photos.teamCanadaGroup, alt: "Team Canada at Milano Cortina 2026" },
  { src: photos.silverstarMoment, alt: "Alberta World Cup Academy, SilverStar" },
  { src: photos.meetSupporters, alt: "Meeting supporters at Milano Cortina 2026" },
];

export const externalLinks = [
  { label: "Instagram — @xctom", url: "https://www.instagram.com/xctom/" },
  { label: "FIS athlete profile", url: "https://www.fis-ski.com/DB/general/athlete-biography.html?competitorid=226849&sectorcode=CC" },
  { label: "Team Canada athlete profile", url: "https://olympic.ca/team-canada/tom-stephen/" },
  { label: "Nordiq Canada athlete profile", url: "https://nordiqcanada.ca/athlete/tom-stephen/" },
  { label: "Olympics.com athlete profile", url: "https://www.olympics.com/en/athletes/thomas-stephen" },
  { label: "Foothills Nordic Ski Club", url: "https://foothillsnordic.ca/" },
  { label: "University of Calgary", url: "https://www.ucalgary.ca/" },
];

export const nav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Results", path: "/results" },
  { label: "Partners", path: "/partners" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];
