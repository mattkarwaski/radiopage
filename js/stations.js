let stations = [
  {
    name: "Wild Rock Radio",
    url: "https://onlineradiobox.com/json/us/wildrockradio/play?platform=web",
  },
  {
    name: "American Road Radio",
    url: "https://c5.radioboss.fm:18224/stream",
  },
  {
    name: "011 FM",
    url: "https://listen.011fm.com/stream01",
  },
  {
    name: "Metal Rock Radio",
    url: "https://kathy.torontocast.com:2800/;",
  },
  {
    name: "Rock 94.7",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WOZZFMAAC.aac",
  },
  {
    name: "Reggae 141",
    url: "https://hestia2.cdnstream.com/1301_128",
  },
  {
    name: "181.FM The Eagle",
    url: "https://onlineradiobox.com/json/us/gotradioclassichits/play?platform=web",
  },
  {
    name: "American Pure Rock",
    url: "https://onlineradiobox.com/json/us/purerockus/play?platform=web",
  },
  {
    name: "Radio Paradise",
    url: "https://stream.radioparadise.com/mp3-192",
  },
  {
    name: "Powerhitz - Pure Classic Rock",
    url: "https://onlineradiobox.com/json/us/pureclassicrock/play?platform=web",
  },
  {
    name: "True Oldies Radio",
    url: "https://streaming.live365.com/b92108_128mp3",
  },
  {
    name: "GotRadio - Classic Hits",
    url: "https://onlineradiobox.com/json/us/gotradioclassichits/play?platform=web",
  },
  {
    name: "977 Rock",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/977_CLASSROCK_SC",
  },
  {
    name: "100hitz - Hot Hitz",
    url: "http://gr01.cdnstream.com:8290/",
  },
  {
    name: "Electric 94.9 FM",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/WAEZFMAAC.aac",
  },
  {
    name: "That 70's Channel",
    url: "http://los.cdnstream.com/1101_128?cb=553828.mp3",
  },
  {
    name: "Dash Radio",
    url: "http://ice55.securenetsystems.net/DASH16",
  },
  {
    name: "4U Classic Rock",
    url: "http://str4uice.streamakaci.com/4uclassicrock.mp3",
  },
  {
    name: "Hard Rock Heaven",
    url: "http://hydra.cdnstream.com/1521_128",
  },
  {
    name: "Deeper Shades of House",
    url: "http://andromeda.housejunkie.ca:8000/radio.mp3",
  },
  {
    name: "Dash Radio - Love Songs",
    url: "http://ice55.securenetsystems.net/DASH66",
  },
  {
    name: "790 KABC-AM",
    url: "http://15363.live.streamtheworld.com:3690/KABCAM_SC",
  },
  {
    name: "Hot Talk KSFO 560 AM",
    url: "http://18503.live.streamtheworld.com/KSFOAMAAC.aac",
  },
  {
    name: "Hot 103.5 FM",
    url: "http://18573.live.streamtheworld.com/KHHMFMAAC.aac",
  },
  {
    name: "BestNetRadio - The Mix",
    url: "http://bigrradio.cdnstream1.com/5169_128",
  },
  {
    name: "ESPN Los Angeles",
    url: "http://edge.espn.cdn.abacast.net/espn-kspnmp3-48?source=tunein",
  },
  {
    name: "LA Talk Radio - Channel 1",
    url: "http://fmt01.egihosting.com:21700/;stream/1",
  },
  {
    name: "Dash Radio - Doggystyle",
    url: "http://ice55.securenetsystems.net/DASH78",
  },
  {
    name: "Movie Ticket Radio",
    url: "http://listen.djcmedia.com/movieticketclassichigh",
  },
  {
    name: "Dubstep FM",
    url: "http://stream.dubstep.fm/256mp3",
  },
  {
    name: "Radio Paradise",
    url: "http://stream.radioparadise.com/mp3-192",
  },
  {
    name: "113.FM BPM RADIO",
    url: "http://113fm.cdnstream1.com/1736_128?cb=139271.mp3",
  },
  {
    name: "KPFK 90.7 FM",
    url: "http://ic1.mainstreamnetwork.com/kpfk-fm.mp3",
  },
  {
    name: "KGO 810 AM",
    url: "http://18593.live.streamtheworld.com/KGOAMAAC.aac",
  },
  {
    name: "1045 The Vault",
    url: "http://s7.nexuscast.com:8026/;",
  },
  {
    name: "Proton Radio",
    url: "https://shoutcast.protonradio.com/;",
  },
  {
    name: "KCRW",
    url: "http://kcrw.streamguys1.com/kcrw_192k_mp3_on_air",
  },
  {
    name: "Kola 99.9FM",
    url: "http://18443.live.streamtheworld.com:80/KOLAFMAAC_SC",
  },
  {
    name: "Smooth Jazz Mix New York",
    url: "http://hestia2.cdnstream.com/1078_128?cb=696226.mp3",
  },
  {
    name: "Side Street Radio",
    url: "http://www.ophanim.net:9780/;stream.nsv",
  },
  {
    name: "USA Dance Radio",
    url: "http://s7.streammonster.com:8260/;stream.nsv",
  },
  {
    name: "WNYC Radio",
    url: "https://am820.wnyc.org/wnycam-web",
  },
  {
    name: "Hot 108 JAMZ",
    url: "http://sc.hot108.com:4000/;",
  },
  {
    name: "ESPN New York",
    url: "http://edge.espn.cdn.abacast.net/espn-wepnmp3-32?source=tunein",
  },
  {
    name: "One Love Hip Hop Radio",
    url: "http://listen.one.hiphop/live.mp3",
  },
  {
    name: "SmoothJazz.NYC",
    url: "http://airspectrum.cdnstream1.com:8078/1614_192",
  },
  {
    name: "NYC House Radio",
    url: "http://www.ophanim.net:8400/;",
  },
  {
    name: "Radio Symphony",
    url: "https://streaming.radiostreamlive.com/radiosymphony_devices",
  },
  {
    name: "Black Soul Rhythms",
    url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SAM08AAC039.mp3?dist=onlineradiobox",
  },
  { 
    name: "Classic Rock Florida",
    url: "https://ais-sa2.cdnstream1.com/2383_128.mp3",
  },
  
];
