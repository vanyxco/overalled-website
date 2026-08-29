export const site = {
  name: "Overalled Pressure Washing",
  legalName: "Overalled Pressure Washing LLC",
  tagline: "Restore what the years left behind.",
  phone: "(832) 836-0979",
  email: "overalledpressurewashing@gmail.com",
  domain: "https://overalledpressurewashing.com",
  facebook:
    "https://www.facebook.com/profile.php?id=61576297647626",
  owner: "Rocky",
  formed: "2025",
  followers: "1,000+",
  recommend: "100%",
  reviewCount: 37,
  award: "2026 Cream of the Crop runner-up — Best Power Washing, Crosby–Huffman",
  bio: "Your go-to for top-tier residential and commercial exterior cleaning. We are dedicated to making your home or business look its absolute best with high-quality pressure and soft-washing services.",
} as const;

export const nav = [
  { href: "/#difference", label: "The Difference" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const areas = [
  "Crosby",
  "Huffman",
  "Lake Houston",
  "Kingwood",
  "Humble",
  "Atascocita",
  "Porter",
  "Dayton",
  "Mont Belvieu",
  "The Woodlands",
  "Houston",
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  method: "Soft wash" | "Pressure" | "Both";
  hero: string;
  summary: string;
  body: string;
  surfaces: string[];
};

export const services: Service[] = [
  {
    slug: "house-wash",
    name: "House Wash",
    short: "From the gutters to the ground.",
    method: "Soft wash",
    hero: "/work/house.png",
    summary:
      "Low-pressure soft wash that kills algae, mildew, and Houston humidity film on siding, brick, and trim — without etching the house.",
    body: "Gulf Coast air feeds organic growth. Blasting a house with high PSI is how weekend warriors strip paint and drive water behind the walls. We mix a biodegradable wash, apply it at garden-hose pressure, dwell, then rinse. Reviews keep saying the same thing: the house looks new from the gutters to the ground.",
    surfaces: ["Brick", "Hardie / fiber cement", "Painted wood", "Stucco", "Trim & soffit"],
  },
  {
    slug: "roof-soft-wash",
    name: "Roof Soft-Wash",
    short: "Black streaks gone. Shingles stay put.",
    method: "Soft wash",
    hero: "/work/house.png",
    summary:
      "Roof algae (Gloeocapsa magma) cleaned with chemistry, not a pressure wand that voids warranties.",
    body: "Those black roof streaks are living colonies. Pressure cooking them off blows granules and shortens the roof. Soft-washing treats the growth at the root so it does not bounce back in a season. We rinse landscaping before and after so plants stay with you.",
    surfaces: ["Asphalt shingle", "Metal", "Tile"],
  },
  {
    slug: "vinyl-siding",
    name: "Vinyl Siding",
    short: "Chalky, oxidized vinyl brought back.",
    method: "Soft wash",
    hero: "/work/house.png",
    summary:
      "Oxidation and mildew lift off vinyl without the high pressure that dulls the UV coating.",
    body: "Vinyl looks tired long before it is actually failed. High pressure chalks it permanently. We wash vinyl the way the manufacturers intend — low pressure, the right mix, a thorough rinse. Color comes back. The siding lasts.",
    surfaces: ["Vinyl", "Trim", "Shutters"],
  },
  {
    slug: "driveways",
    name: "Driveways & Walkways",
    short: "The wipe you can see from the street.",
    method: "Pressure",
    hero: "/work/driveway.png",
    summary:
      "Surface cleaner on concrete so you get an even, no-zebra finish — oil, mildew, and tire marks gone.",
    body: "A dirty driveway is the first thing a neighbor (or a buyer) notices. We run a surface cleaner for a uniform cut, then detail edges, expansion joints, and the oil spots that try to stay. Referrals on this one write themselves: “There’s nothing like a clean driveway.”",
    surfaces: ["Concrete", "Pavers", "Sidewalks", "Porch slabs"],
  },
  {
    slug: "decks-patios",
    name: "Decks & Patios",
    short: "Outdoor rooms that look used on purpose.",
    method: "Both",
    hero: "/work/sidewalk.png",
    summary:
      "Pressure where the concrete can take it, soft chemistry on wood and sealed surfaces.",
    body: "Patios collect pollen, grill grease, and green film. We match the method to the material so you do not end up with fuzzy wood or etched stone. After a wash, furniture goes back on a surface you actually want to walk barefoot on.",
    surfaces: ["Concrete patio", "Wood deck", "Composite", "Stone"],
  },
  {
    slug: "fences",
    name: "Fences",
    short: "Wood that looks like wood again.",
    method: "Both",
    hero: "/work/fence.png",
    summary:
      "Algae and gray oxidation lifted off privacy fences and rails without shredding the fibers.",
    body: "A fence is half the curb. We clean wood with controlled pressure and a mix that restores the grain instead of fuzzing it. Ask about staining after if you want the color to hold through another Houston summer.",
    surfaces: ["Wood privacy", "Rails", "Gates"],
  },
  {
    slug: "commercial",
    name: "Commercial Storefronts",
    short: "Open looking like you give a damn.",
    method: "Both",
    hero: "/work/commercial.png",
    summary:
      "Walkways, dumpster pads, brick, and storefront concrete on a schedule that does not interrupt customers.",
    body: "First Liberty Bank and storefronts around Lake Houston already know the difference a clean approach makes. We work early, we work fast, and we leave the property looking like the business behind it is run tight.",
    surfaces: ["Storefront concrete", "Brick", "Dumpster pads", "Parking approaches"],
  },
];

export const reviews = [
  {
    name: "Shelley Bridges",
    place: "Lake Houston area",
    text: "If you need your house pressure washed, you have to check out Overalled. He did a phenomenal job on our home. Not only was the work top-notch, he went above and beyond. Incredible service. Very friendly and easy to work with. Highly, highly recommend.",
  },
  {
    name: "Kailey Ladner",
    place: "Residential",
    text: "We had our house cleaned up by Overalled Pressure Washing and it looks amazing. The house is so clean and looks good as new from the gutters to the ground. Very professional and great customer service.",
  },
  {
    name: "Kori Herring",
    place: "Dayton, TX",
    text: "We couldn’t be happier with the job Rocky did pressure washing our home in Dayton. He was incredibly flexible with our schedule, professional, and easy to work with. The transformation was amazing — everything looked fresh, clean, and completely revived.",
  },
  {
    name: "Gene R. Boykin Jr.",
    place: "Residential",
    text: "Rocky was great. He stuck to his word, moved with urgency, and did an incredibly thorough job. My house looks brand new. I recommend his power washing service 10 out of 10.",
  },
  {
    name: "Randy Runkle",
    place: "Neighbor referral",
    text: "I highly recommend Overalled Pressure Washing. He did our neighbor’s driveway and based on her recommendation I gave him a call to do mine. He did a great job. There’s nothing like a clean driveway.",
  },
  {
    name: "Ron Barnhill",
    place: "Residential",
    text: "Overalled Pressure Washing LLC did a great job cleaning our driveway, porch, and sidewalks. Very professional service at a reasonable price.",
  },
] as const;

export const workItems = [
  {
    src: "/work/sidewalk.png",
    title: "Walkway wipe",
    caption: "The line you can still see — until we finish the rest.",
  },
  {
    src: "/work/driveway.png",
    title: "Full driveway",
    caption: "Even cut. No zebra stripes. Curb appeal from the street.",
  },
  {
    src: "/work/house.png",
    title: "Brick & windows",
    caption: "Soft wash the house. Glass that actually looks washed.",
  },
  {
    src: "/work/fence.png",
    title: "Fence revival",
    caption: "Gray oxidation lifted. Wood looks like wood again.",
  },
  {
    src: "/work/commercial.png",
    title: "Storefront concrete",
    caption: "Open looking sharp. Customers notice the walk.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Send the property",
    text: "Address, a couple phone photos, what you want washed. Rocky prices from that — no bait-and-switch walk-up.",
  },
  {
    n: "02",
    title: "We show up overalled",
    text: "On the day we said. Plants pre-rinsed. The right method on the right surface. You do not have to be home.",
  },
  {
    n: "03",
    title: "It looks years younger",
    text: "Before-and-afters on your phone. If something needs a second pass, we do it. Satisfaction is the cover photo for a reason.",
  },
] as const;
