export const site = {
  name: "Overalled Pressure Washing",
  legalName: "Overalled Pressure Washing LLC",
  tagline: "Restore what the years left behind.",
  phone: "(832) 836-0979",
  phoneE164: "+18328360979",
  email: "overalledpressurewashing@gmail.com",
  domain: "https://overalledpressurewashing.com",
  facebook: "https://www.facebook.com/profile.php?id=61576297647626",
  owner: "Rocky",
  formed: "2025",
  followers: "1,000+",
  recommend: "100%",
  reviewCount: 37,
  award: "2026 Cream of the Crop runner-up — Best Power Washing, Crosby–Huffman",
  bio: "Residential and commercial exterior cleaning for the Lake Houston area. Soft washing and pressure washing matched to the surface, so the property looks its best without the damage of the wrong method.",
  locality: "Crosby",
  region: "TX",
  postalCode: "77532",
  country: "US",
  geo: { latitude: 29.9116, longitude: -95.0627 },
} as const;

export const nav = [
  { href: "/#difference", label: "Approach" },
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

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  method: "Soft wash" | "Pressure" | "Both";
  hero: string;
  heroAlt: string;
  heroClass?: string;
  summary: string;
  body: string;
  surfaces: string[];
  seoTitle: string;
  seoDescription: string;
  related: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "house-wash",
    name: "House Wash",
    short: "Siding, brick, and trim — from the gutters down.",
    method: "Soft wash",
    hero: "/services/house-wash.jpg",
    heroAlt:
      "Brick and stone house after a full soft wash, gutters to foundation",
    heroClass: "object-[center_70%]",
    summary:
      "Low-pressure soft wash that removes algae, mildew, and humidity film from siding, brick, and trim without etching the surface.",
    body: "Gulf Coast air feeds organic growth on every elevation. High pressure on a house strips paint and drives water behind the walls. We apply a biodegradable mix at garden-hose pressure, let it dwell, then rinse. Customers describe the same result: the house looks new from the gutters to the ground.",
    surfaces: ["Brick", "Hardie / fiber cement", "Painted wood", "Stucco", "Trim & soffit"],
    seoTitle: "House Wash in Crosby & Lake Houston",
    seoDescription:
      "Soft-wash house washing in Crosby, Huffman, Kingwood, Humble, and Lake Houston. Algae and mildew off siding, brick, and trim without high-pressure damage.",
    related: ["vinyl-siding", "roof-soft-wash", "driveways"],
    faqs: [
      {
        question: "Do you pressure wash houses?",
        answer:
          "No. A house wash at Overalled is a soft wash: biodegradable mix at garden-hose pressure on siding, brick, and trim. High pressure on a house strips paint and can drive water behind the walls.",
      },
      {
        question: "Will a house wash hurt my plants?",
        answer:
          "We pre-rinse landscaping, apply the mix, then rinse plants again when we are done. That is part of a standard house wash, not an add-on.",
      },
    ],
  },
  {
    slug: "roof-soft-wash",
    name: "Roof Soft-Wash",
    short: "Black streaks treated. Shingles left intact.",
    method: "Soft wash",
    hero: "/services/roof-soft-wash.jpg",
    heroAlt:
      "Asphalt shingle roof with black algae streaks washed off on one side",
    summary:
      "Roof algae cleaned with chemistry, not a pressure wand that can void a shingle warranty.",
    body: "Those black roof streaks are living colonies. Pressure cooking them off blows granules and shortens the roof. Soft-washing treats the growth at the root so it does not return in a season. We rinse landscaping before and after so plants stay with you.",
    surfaces: ["Asphalt shingle", "Metal", "Tile"],
    seoTitle: "Roof Soft-Wash in Lake Houston",
    seoDescription:
      "Roof algae and black streaks treated with a soft wash in Crosby, Huffman, and Kingwood. Chemistry, not a pressure wand that can void a shingle warranty.",
    related: ["house-wash", "vinyl-siding"],
    faqs: [
      {
        question: "Can pressure washing ruin a roof?",
        answer:
          "Yes. Pressure on asphalt shingles blows granules and can void the manufacturer warranty. We soft-wash roofs so the algae dies at the root and the shingles stay put.",
      },
      {
        question: "How long do black roof streaks stay gone?",
        answer:
          "Soft-washing treats living colonies instead of blasting the stain off. Growth typically stays down much longer than a pressure rinse, especially if the roof gets sun and air.",
      },
    ],
  },
  {
    slug: "vinyl-siding",
    name: "Vinyl Siding",
    short: "Oxidation and mildew lifted without dulling the finish.",
    method: "Soft wash",
    hero: "/services/vinyl-siding.jpg",
    heroAlt: "Restored beige vinyl siding, white shutters, and clean trim",
    summary:
      "Oxidation and mildew come off vinyl without the high pressure that chalks the UV coating.",
    body: "Vinyl looks tired long before it has actually failed. High pressure chalks it permanently. We wash vinyl the way manufacturers intend — low pressure, the right mix, a thorough rinse. Color comes back. The siding lasts.",
    surfaces: ["Vinyl", "Trim", "Shutters"],
    seoTitle: "Vinyl Siding Wash | Crosby & Humble",
    seoDescription:
      "Low-pressure vinyl siding cleaning around Lake Houston. Oxidation and mildew lifted without the high pressure that chalks the UV coating.",
    related: ["house-wash", "fences"],
    faqs: [
      {
        question: "Why shouldn’t vinyl be pressure washed?",
        answer:
          "High pressure chalks the UV coating and the color never fully comes back. We wash vinyl the way manufacturers intend: low pressure, the right mix, a thorough rinse.",
      },
      {
        question: "How often should vinyl siding be washed around Lake Houston?",
        answer:
          "Gulf Coast humidity and pollen load vinyl every season. Most homes here look tired again in 12 to 18 months. A scheduled soft wash keeps oxidation from setting in.",
      },
    ],
  },
  {
    slug: "driveways",
    name: "Driveways & Walkways",
    short: "Even concrete, from the street to the garage.",
    method: "Pressure",
    hero: "/services/driveways.jpg",
    heroAlt: "Evenly cleaned residential concrete driveway and sidewalk",
    summary:
      "A surface cleaner on concrete for a uniform finish — oil, mildew, and tire marks gone, without leftover wand lines.",
    body: "A dirty driveway is often the first thing a neighbor or a buyer notices. We run a surface cleaner for an even cut, then detail edges, expansion joints, and the oil spots that try to stay. As one referral put it: “There’s nothing like a clean driveway.”",
    surfaces: ["Concrete", "Pavers", "Sidewalks", "Porch slabs"],
    seoTitle: "Driveway Pressure Washing | Lake Houston",
    seoDescription:
      "Even driveway and sidewalk cleaning in Crosby, Huffman, Kingwood, and Humble. A surface cleaner for a uniform cut — oil, mildew, and wand lines gone.",
    related: ["house-wash", "decks-patios", "commercial"],
    faqs: [
      {
        question: "How do you avoid lines in a driveway?",
        answer:
          "We run a surface cleaner for an even cut, then detail edges and expansion joints with a wand. That is how leftover tiger stripes from the last wash usually come out.",
      },
      {
        question: "Do you remove oil stains?",
        answer:
          "Most oil spots lighten a lot; some older stains never go 100 percent white. We treat them as part of the driveway wash and tell you honestly if a shadow will remain.",
      },
    ],
  },
  {
    slug: "decks-patios",
    name: "Decks & Patios",
    short: "Outdoor living that looks maintained.",
    method: "Both",
    hero: "/services/decks-patios.jpg",
    heroAlt: "Covered patio with freshly washed concrete and outdoor furniture",
    summary:
      "Pressure where the concrete can take it. Softer chemistry on wood and sealed surfaces.",
    body: "Patios collect pollen, grill grease, and green film. We match the method to the material so you do not end up with fuzzy wood or etched stone. After a wash, furniture goes back on a surface you actually want to use.",
    surfaces: ["Concrete patio", "Wood deck", "Composite", "Stone"],
    seoTitle: "Deck & Patio Washing | Lake Houston",
    seoDescription:
      "Patio and deck cleaning in the Lake Houston area. Pressure on concrete that can take it. Softer chemistry on wood so you do not get fuzzy boards.",
    related: ["driveways", "fences", "house-wash"],
    faqs: [
      {
        question: "Do you pressure wash wood decks?",
        answer:
          "We match pressure to the wood. Too much fuzzes the grain. Composite and sealed surfaces get a softer pass. Concrete patios get the surface cleaner.",
      },
      {
        question: "Do I need to move patio furniture?",
        answer:
          "If you can, yes — it speeds the wash and keeps water from sitting on cushions. If you cannot, say so in the quote and we work around what stays.",
      },
    ],
  },
  {
    slug: "fences",
    name: "Fences",
    short: "Wood that looks like wood again.",
    method: "Both",
    hero: "/services/fences.jpg",
    heroAlt:
      "Wood privacy fence with gray oxidation on one side and restored cedar on the other",
    summary:
      "Algae and gray oxidation lifted off privacy fences and rails without shredding the fibers.",
    body: "A fence is a large part of the curb. We clean wood with controlled pressure and a mix that restores the grain instead of fuzzing it. Ask about staining afterward if you want the color to hold through another Houston summer.",
    surfaces: ["Wood privacy", "Rails", "Gates"],
    seoTitle: "Fence Washing in Crosby & Kingwood",
    seoDescription:
      "Privacy fence and rail cleaning around Lake Houston. Gray oxidation and algae lifted without shredding the wood fibers. Ask about staining after.",
    related: ["decks-patios", "house-wash"],
    faqs: [
      {
        question: "Should a wood fence be stained after washing?",
        answer:
          "If you want the color to hold through another Houston summer, staining after a wash is the move. We can talk through timing once the wood is dry.",
      },
      {
        question: "Will washing a fence shred the wood?",
        answer:
          "Not if the pressure is controlled. We clean wood so the grain comes back instead of fuzzing. That is the difference between a fence wash and blasting it.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial Properties",
    short: "Storefronts, lots, and walkways on your schedule.",
    method: "Both",
    hero: "/services/commercial.jpg",
    heroAlt: "Clean storefront walk and parking approach at a commercial plaza",
    heroClass: "object-[center_65%]",
    summary:
      "Walkways, dumpster pads, brick, and storefront concrete — scheduled so the work does not interrupt customers.",
    body: "Banks, shops, and offices around Lake Houston already know the difference a clean approach makes. We work early, we work efficiently, and we leave the property looking like the business behind it is well run.",
    surfaces: ["Storefront concrete", "Brick", "Dumpster pads", "Parking approaches"],
    seoTitle: "Commercial Pressure Washing | Lake Houston",
    seoDescription:
      "Storefront, lot, and walkway washing for Lake Houston businesses. Scheduled around your hours — the same standard as a house wash, including local banks.",
    related: ["driveways", "house-wash"],
    faqs: [
      {
        question: "Can you wash a storefront before we open?",
        answer:
          "Yes. Commercial work is scheduled so customers are not walking through the wash. Early starts are normal for banks, shops, and offices around Lake Houston.",
      },
      {
        question: "Do you wash dumpster pads and parking approaches?",
        answer:
          "Yes. Dumpster pads, storefront walks, brick, and parking approaches are regular commercial work. We quote from photos and the address like a house wash.",
      },
    ],
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

export type WorkPhoto = {
  src: string;
  alt: string;
  href: string;
  objectClass?: string;
};

export type WorkPost = {
  id: string;
  dateLabel: string;
  caption: string;
  href: string;
  photos: WorkPhoto[];
  featured?: boolean;
};

const FB_PAGE_ID = "61576297647626";

const fbPhoto = (fbid: string) =>
  `https://www.facebook.com/photo.php?fbid=${fbid}`;

const fbPermalink = (storyFbid: string) =>
  `https://www.facebook.com/permalink.php?story_fbid=${storyFbid}&id=${FB_PAGE_ID}`;

const photo = (
  file: string,
  fbid: string,
  alt: string,
  objectClass?: string,
): WorkPhoto => ({
  src: `/work/facebook/${file}`,
  href: fbPhoto(fbid),
  alt,
  ...(objectClass ? { objectClass } : {}),
});

/** Hosted snapshot of public Facebook posts, newest first. Live Graph API needs a page token. */
export const workPosts: WorkPost[] = [
  {
    id: "122203178",
    dateLabel: "August 2026",
    featured: true,
    href: fbPhoto("122203178180876588"),
    caption:
      "Treated, no lines and looking like a whole new property!! Algae, mildew, dirt and grime on your window seals and windows?! We can softwash that as well! Message or call Overalled Pressure Washing LLC for your same day FREE quote.",
    photos: [
      photo("01.jpg", "122203178180876588", "Freshly washed brick and windows on a residential home"),
      photo("02.jpg", "122203178138876588", "Brick windowsill with algae before a soft wash"),
      photo("03.jpg", "122203178096876588", "Brick wall and three windows during a house wash"),
      photo("04.jpg", "122203178048876588", "Cleaned sidewalk in front of a brick and stone home"),
      photo("05.jpg", "122203178006876588", "Stained residential sidewalk before washing"),
      photo("06.jpg", "122203177964876588", "Residential house, walk, and work trailer after cleaning"),
      photo("07.jpg", "122203177916876588", "Driveway half-cleaned, showing the line between grime and concrete"),
      photo("08.jpg", "122203177874876588", "Residential driveway after a uniform surface cleaning"),
      photo("09.jpg", "122203177832876588", "Surface cleaner on a residential driveway in progress"),
    ],
  },
  {
    id: "bank-first-liberty",
    dateLabel: "July 2026",
    featured: true,
    href: fbPhoto("10215910075820589"),
    caption:
      "Overalled Pressure Washing LLC out here taking care of some local businesses this Sunday Funday! Appreciate the opportunity First Liberty Bank!",
    photos: [
      photo(
        "27.jpg",
        "10215910075820589",
        "Commercial stone building after exterior washing",
        "object-[center_75%]",
      ),
      photo(
        "26.jpg",
        "10215910075380578",
        "Commercial drive-through stone before washing",
      ),
    ],
  },
  {
    id: "122197900",
    dateLabel: "July 2026",
    href: fbPhoto("122197900892876588"),
    caption:
      "If you have lines in your driveway, Overalled Pressure Washing LLC can usually correct it and having it looking with our treatment and technique! Please reach out for your appointment! Existing visible shortcuts from the last guy or the last property owner?! Give us a call! Let's get it looking new again.",
    photos: [
      photo("10.jpg", "122197900892876588", "Long residential driveway after washing"),
      photo("11.jpg", "122197900850876588", "Weathered concrete driveway before a surface clean"),
      photo("12.jpg", "122197900808876588", "Brick ranch and stained driveway from the street"),
      photo("13.jpg", "122197900766876588", "Curved driveway with pretreatment on the concrete"),
    ],
  },
  {
    id: "122194997",
    dateLabel: "June 2026",
    href: fbPhoto("122194998080876588"),
    caption:
      "Overalled Pressure Washing LLC out in Fairway Crossing Huffman, Tx washing years of weathering and wear off Mr Roys property and returning back to it's glory. Reach out to get your property taken care of while you enjoy the A/C and a cold drink.",
    photos: [
      photo("16.jpg", "122194997984876588", "Covered patio concrete after washing"),
      photo("14.jpg", "122194998080876588", "Sage siding after a soft wash"),
      photo("15.jpg", "122194998038876588", "Stained sage siding before a house wash"),
      photo("17.jpg", "122194997942876588", "Covered outdoor kitchen and patio at Fairway Crossing"),
      photo("18.jpg", "122194997900876588", "Sage garage siding and stained concrete pad"),
      photo("19.jpg", "122194997858876588", "Side elevation and yard during the Huffman wash"),
      photo("20.jpg", "122194997804876588", "Covered porch, siding, and gutters after washing"),
      photo("21.jpg", "122194997756876588", "Stained gutters and soffit before washing"),
      photo("22.jpg", "122194997696876588", "Long wet driveway in front of the sage ranch"),
      photo("23.jpg", "122194997654876588", "House, garage, and driveway with wash hoses laid out"),
    ],
  },
  {
    id: "122192510",
    dateLabel: "May 2026",
    href: fbPermalink(
      "pfbid0eyHTwN12jajDeBjA5sdadbyX9QrzHTMyf6fEoEXRpEG6KoL8A1pFyGnTvD1D61RKl",
    ),
    caption:
      "Your home covered in spiders, bugs and webs?! Get with Overalled Pressure Washing LLC for your FREE quote and to get rid of all those unwanted guest! #housewash #roofwash #pooldecks #fences #driveways we do it all! Commercial and Residential!",
    photos: [
      photo("28.jpg", "122192510132876588", "Brick and siding house after a full exterior wash"),
      photo("29.jpg", "122192510090876588", "Clean white soffit, vents, and gutters after washing"),
      photo("30.jpg", "122192510030876588", "Rear brick, siding, and outdoor kitchen after washing"),
      photo("31.jpg", "122192509988876588", "Brick chimney and siding after a house wash"),
      photo("32.jpg", "122192509940876588", "Soffit vents and cobwebs before washing"),
      photo("33.jpg", "122192509898876588", "Clean gable siding and half-moon window after washing"),
      photo("34.jpg", "122192509856876588", "Residential eaves and brick after web and house washing"),
    ],
  },
  {
    id: "122189264",
    dateLabel: "April 2026",
    href: fbPermalink(
      "pfbid0grAebRULKVenvucD1SgVbTnZufHjV1vUJXPRSmfQzB5NJQvBvLyvpCHMHRvD7Qzjl",
    ),
    caption:
      "Beach & Bay Houses are one of our services as well! If you need all of those spider webs, bugs, bird mess washed away and or decks/fencing rejuvenated! Contact Overalled Pressure Washing LLC to get everything prepped for your R&R!!",
    photos: [
      photo("36.jpg", "122189264270876588", "Coastal stilt house with clean blue siding and wet concrete"),
      photo("38.jpg", "122189264156876588", "Technician washing an outdoor kitchen patio"),
      photo("39.jpg", "122189264114876588", "Wood fence mid-wash, restored cedar next to gray boards"),
      photo("41.jpg", "122189264030876588", "Technician washing upper siding from the driveway"),
    ],
  },
  {
    id: "122183310",
    dateLabel: "April 2026",
    href: fbPermalink(
      "pfbid0BvvDUrFcRPdi8EBvmFc5eqaadM9GuRRcqLfjkxJERTzZ8bJ243hTxmh8awXBf4zSl",
    ),
    caption:
      "Out in Kingwood and Atascocita today! Availability tomorrow morning! Please reach out for your FREE quote!",
    photos: [
      photo("47.jpg", "122183310332876588", "Clean curved walkway through a landscaped Kingwood yard"),
      photo("43.jpg", "122183310530876588", "Driveway mid-wash, dirty slab next to bright concrete"),
      photo("44.jpg", "122183310482876588", "Stained driveway beside a brick and siding house"),
      photo("45.jpg", "122183310428876588", "Clean aggregate driveway leading to a two-car garage"),
      photo("46.jpg", "122183310386876588", "Heavily stained driveway before washing"),
      photo("48.jpg", "122183310278876588", "Clean driveway and garage after washing"),
      photo("49.jpg", "122183310236876588", "Residential driveway looking toward the house"),
      photo("50.jpg", "122183310188876588", "Driveway and walk after a Kingwood wash"),
    ],
  },
  {
    id: "122174209",
    dateLabel: "March 2026",
    href: fbPermalink(
      "pfbid0As74p95Axqb6Vh7WZXXHSP6r3w2fmDyX7uRtTmDCgkaahQnUT9J3DxMjbmSk4LFEl",
    ),
    caption:
      "Brought this weathered aluminum shingles roof back to its prime! Softwashed 15+ years away and reinstated the curb appeal back to this beautiful home! If you're roof is looking old and dingey, we might just be able to save your pocket before it's time for a new roof. #curbappeal #maintenance #softwash #treatment #residential #commercial",
    photos: [
      photo("52.jpg", "122174209904876588", "Weathered wood-shingle roof and pool deck before a soft wash"),
      photo("51.jpg", "122174209952876588", "Log and lap-siding home with a covered porch"),
    ],
  },
];

export const featuredWork = workPosts.filter((post) => post.featured);

export const processSteps = [
  {
    n: "01",
    title: "Request a quote",
    text: "Share the address, a few photos, and what you want washed. We price from that — no bait-and-switch at the door.",
  },
  {
    n: "02",
    title: "We wash",
    text: "On the day we scheduled. Plants pre-rinsed. The right method on the right surface. You do not have to be home.",
  },
  {
    n: "03",
    title: "You inspect",
    text: "Before-and-after photos on your phone. If something needs a second pass, we do it. Satisfaction is the standard, not a slogan.",
  },
] as const;
