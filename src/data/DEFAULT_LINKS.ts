import { LinkGroup, AllLinkGroups } from "../Links";
import { EMPTY_ITEM } from "./CONSTANTS";

const SOCIAL_LINKS: LinkGroup = {
  title: "Socials",
  links: [
    {
      "display text": "Bsky",
      href: "https://bsky.app/",
    },
    {
      "display text": "Youtube",
      href: "https://www.youtube.com/feed/subscriptions",
    },
    {
      "display text": "Spotify",
      href: "https://open.spotify.com/collection/playlists",
    },
    {
      "display text": "Blimps",
      href: "http://blimps.xyz/",
    },
    {
      "display text": "Reddit",
      href: "https://old.reddit.com/",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

const FFXIV_LINKS: LinkGroup = {
  title: "FFXIV",
  links: [
    {
      "display text": "Garland DB",
      href: "https://www.garlandtools.org/db/",
    },
    {
      "display text": "Faloop",
      href: "https://faloop.app/",
    },
    {
      "display text": "Teamcraft",
      href: "https://ffxivteamcraft.com/search",
    },
    {
      "display text": "Raphael",
      href: "https://www.raphael-xiv.com/",
    },
    {
      "display text": "Eureka",
      href: "https://ffxiv-eureka.com/",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

const TOOLS_LINKS: LinkGroup = {
  title: "Work",
  links: [
    {
      "display text": "Github",
      href: "https://github.com/",
    },
    {
      "display text": "Office 365",
      href: "https://www.office.com/",
    },
    {
      "display text": "Gdrive",
      href: "https://drive.google.com/drive/my-drive",
    },
    {
      "display text": "GitHub",
      href: "https://github.com",
    },
    {
      "display text": "Overleaf",
      href: "https://www.overleaf.com/login",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

const SHOPPING_LINKS: LinkGroup = {
  title: "Shop",
  links: [
    {
      "display text": "Amazon",
      href: "https://www.amazon.com/",
    },
    {
      "display text": "Jetpens",
      href: "https://www.jetpens.com/",
    },
    {
      "display text": "MKB",
      href: "https://mechanicalkeyboards.com/",
    },
    {
      "display text": "Wirecutter",
      href: "https://www.nytimes.com/wirecutter/",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};
const FAVORITES_LINKS: LinkGroup = {
  title: "Favorites",
  links: [
    {
      "display text": "Weather",
      href: "https://weather.com/en-NA/weather/today/l/47.604,-122.33",
    },
    {
      "display text": "Windy",
      href: "https://www.windy.com/47.538/-122.287/hrrrConus?hrrrConus,47.117,-122.289,8,p:cities",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

export const DEFAULT_LINKS: AllLinkGroups = [
  SOCIAL_LINKS,
  FFXIV_LINKS,
  TOOLS_LINKS,
  SHOPPING_LINKS,
  FAVORITES_LINKS,
];
