import type { StaticImageData } from "next/image";

import heroAccraDusk from "../../public/images/hero-accra-dusk.jpg";
import aboutBoardroom from "../../public/images/about-boardroom.jpg";
import leadershipBoardroom from "../../public/images/leadership-boardroom.jpg";
import trainingSeminar from "../../public/images/training-seminar.jpg";
import smeShopOwner from "../../public/images/sme-shop-owner.jpg";
import ctaAudience from "../../public/images/cta-audience.jpg";
import membershipNetworking from "../../public/images/membership-networking.jpg";
import campaignMarket from "../../public/images/campaign-market.jpg";
import eventsPanel from "../../public/images/events-panel.jpg";
import contactAccra from "../../public/images/contact-accra.jpg";
import articleBeyondAudit from "../../public/images/article-beyond-audit.jpg";
import articleSmeControls from "../../public/images/article-sme-controls.jpg";
import articleBoardOversight from "../../public/images/article-board-oversight.jpg";

export interface SiteImage {
  src: StaticImageData;
  alt: string;
  /** Photographer, via Unsplash (free licence). Stock placeholders — replace
      with ICIG's own photography by overwriting the file in public/images. */
  credit: string;
}

export const IMAGES = {
  hero: {
    src: heroAccraDusk,
    alt: "City lights at dusk seen from a hillside",
    credit: "Seyiram Kweku",
  },
  about: {
    src: aboutBoardroom,
    alt: "Professionals around a boardroom table listening to a colleague present",
    credit: "Christina @ wocintechchat.com",
  },
  leadership: {
    src: leadershipBoardroom,
    alt: "A leadership team meeting at a long boardroom table",
    credit: "Christina @ wocintechchat.com",
  },
  training: {
    src: trainingSeminar,
    alt: "Participants in a seminar room following a presentation on screen",
    credit: "Quilia",
  },
  sme: {
    src: smeShopOwner,
    alt: "A shop owner at the counter of her provisions store",
    credit: "Ali Mkumbwa",
  },
  cta: {
    src: ctaAudience,
    alt: "Delegates seated in a conference hall",
    credit: "Claudio Schwarz",
  },
  membership: {
    src: membershipNetworking,
    alt: "Professionals in conversation at a networking event",
    credit: "Olena Kholina",
  },
  campaign: {
    src: campaignMarket,
    alt: "Aerial view of a busy open-air market covered in colourful umbrellas",
    credit: "pius quainoo",
  },
  events: {
    src: eventsPanel,
    alt: "A panel discussion in front of a seated audience",
    credit: "The Executive Group",
  },
  contact: {
    src: contactAccra,
    alt: "Aerial view over a city neighbourhood",
    credit: "Virgyl Sowah",
  },
} satisfies Record<string, SiteImage>;

/** Cover images for knowledge articles, keyed by article slug. */
export const ARTICLE_COVERS: Record<string, SiteImage> = {
  "moving-internal-control-beyond-audit": {
    src: articleBeyondAudit,
    alt: "Hands reviewing and signing printed documents at a desk",
    credit: "Dimitri Karastelev",
  },
  "practical-controls-for-growing-smes-in-ghana": {
    src: articleSmeControls,
    alt: "A shopkeeper in an apron checking his phone behind the counter",
    credit: "Ali Mkumbwa",
  },
  "board-oversight-and-the-control-environment": {
    src: articleBoardOversight,
    alt: "Three colleagues in discussion around a meeting table",
    credit: "UK Black Tech",
  },
};
