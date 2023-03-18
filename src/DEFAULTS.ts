import { EMPTY_LINK } from "./CONSTANTS";

const SOCIAL_LINKS = {
  title: "Socials",
  links: [
    {
      displayText: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      displayText: "Twitter",
      href: "https://twitter.com/",
    },
    {
      displayText: "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      displayText: "Reddit",
      href: "https://www.reddit.com/",
    },
  ],
};

const REDDIT_LINKS = {
  title: "Reddit",
  links: [
    {
      displayText: "UnixPorn",
      href: "https://www.reddit.com/r/unixporn/",
    },
    {
      displayText: "Startpages",
      href: "https://www.reddit.com/r/startpages/",
    },
    {
      displayText: "NBA",
      href: "https://www.reddit.com/r/nba/",
    },
    {
      displayText: "Neovim",
      href: "https://www.reddit.com/r/neovim/",
    },
  ],
};

const TOOLS_LINKS = {
  title: "Tools",
  links: [
    {
      displayText: "Github",
      href: "https://github.com/",
    },
    {
      displayText: "Figma",
      href: "https://www.figma.com/",
    },
    {
      displayText: "HackerNews",
      href: "https://news.ycombinator.com/",
    },
    {
      displayText: "Shopify",
      href: "https://www.shopify.com/",
    },
  ],
};

const FAVORITES_LINKS = {
  title: "Favorites",
  links: [
    {
      displayText: EMPTY_LINK,
      href: "",
    },
    {
      displayText: EMPTY_LINK,
      href: "",
    },
    {
      displayText: EMPTY_LINK,
      href: "",
    },
    {
      displayText: EMPTY_LINK,
      href: "",
    },
  ],
};

export const LINKS = [SOCIAL_LINKS, REDDIT_LINKS, TOOLS_LINKS, FAVORITES_LINKS];
