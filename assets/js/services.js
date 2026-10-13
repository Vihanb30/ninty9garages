/* Ninty9 Garages services. Text is based on the studio's own service descriptions.
   Each entry powers one service card's detail pop-up on the home page. */
window.SERVICES = [
  {
    slug: "4x4-modification", num: "08", title: "4×4 Modification",
    tagline: "Exterior styling, functional upgrades and off-road builds for your SUV.",
    img: "assets/gallery/thar-bumper.jpg", pos: "center 58%",
    imgs: ["assets/gallery/thar-bumper.jpg", "assets/gallery/thar-snorkel.jpg"],
    intro: [
      "Professional 4×4 modification for SUVs, covering exterior styling, functional upgrades, accessories and off-road-inspired modifications, so your vehicle matches your style and the way you drive.",
      "We're a Bimbra 4×4 Studio, so the hardware is genuine and fitted to the vehicle's mounting points by our own team."
    ],
    included: [
      ["Front bumpers", "Bimbra Model X, O, R, W and MR, and Proman Mark-1 for the Thar", "shop.html?cat=Bumpers%20%26%20Grills&q=bumper"],
      ["Front grills", "S1, S2, S3, AB, Wrangler-style and GR Sport grills", "shop.html?cat=Bumpers%20%26%20Grills&q=grill"],
      ["Side steps & rock sliders", "For Thar, Scorpio N, Fortuner and Hilux", "shop.html?cat=Side%20Steps%20%26%20Sills"],
      ["Snorkels, light mounts & brackets", "Bumper, windshield and fog-lamp mounts", "shop.html?cat=4%C3%974%20Mods%20%26%20Fitments"],
      ["Utility upgrades", "Hilux roller shutter tonneau covers, seat recliner kits and more", "shop.html?q=hilux"]
    ],
    options: [{ h: "Popular vehicles", tags: ["Mahindra Thar", "Thar Roxx", "Scorpio N", "Toyota Hilux", "Fortuner"] }],
    notes: ["Every build starts with a consultation. Tell us your vehicle and how you use it, and we'll suggest the right parts."],
    shop: { href: "shop.html?cat=Bumpers%20%26%20Grills", label: "See 4×4 parts & prices", sub: "Bumpers, grills, side steps and fitments" },
    form: "4×4 Modification"
  },
  {
    slug: "paint-protection-film", num: "02", title: "Paint Protection Film",
    tagline: "Premium PPF that protects your original paint.",
    img: "assets/gallery/ppf.jpg",
    intro: [
      "Paint protection film is a clear, durable layer applied over your car's paint. It takes the stone chips, scratches and day-to-day wear so the original finish underneath stays protected.",
      "We're an Nshield Studio and Turtle Wax Car Care Studio, and we also fit Headlight Protection Film for headlamps and tail lamps."
    ],
    included: [
      ["Turtle Wax Smart Shield™ PPF", "Transparent gloss finish"],
      ["Nippon Paint N-Shield PPF", "Available in gloss, matte and coloured finishes"],
      ["Headlight Protection Film", "Premium photochromic TPU film for headlights and tail lights: self-healing, with a clear-to-smoked look depending on light"]
    ],
    options: [{ h: "Finishes", tags: ["Gloss", "Matte", "Coloured"] }],
    notes: ["Price depends on your vehicle's size, the panels covered and the film you choose. We'll quote after seeing the car."],
    form: "PPF"
  },
  {
    slug: "graphene-ceramic-coating", num: "03", title: "Graphene & Ceramic Coating",
    tagline: "Deep gloss, water-beading protection and easier washing.",
    img: "assets/gallery/graphene-coating.jpg",
    imgs: ["assets/gallery/graphene-coating.jpg", "assets/about.jpg"],
    intro: [
      "A coating bonds to your paint to add gloss and a protective, water-repellent layer. Dirt and water slide off more easily, so the car stays cleaner for longer and is quicker to wash.",
      "Not sure which to choose? Ask us whether graphene or ceramic suits your car and how you use it."
    ],
    included: [
      ["Graphene coating", "Advanced paint protection, enhanced gloss and hydrophobic protection for easier maintenance"],
      ["Ceramic coating", "Turtle Wax Ceramic Hydro+: enhanced gloss with hydrophobic and environmental protection", "shop.html?q=ceramic"]
    ],
    options: [{ h: "Benefits", tags: ["High gloss", "Hydrophobic", "Easier washing", "Environmental protection"] }],
    notes: ["Coatings work best on well-prepared paint, so we may recommend paint correction first."],
    shop: { href: "shop.html?cat=Car%20Care%20%26%20Essentials", label: "Shop Turtle Wax car care", sub: "Spray coatings, waxes and cleaners" },
    form: "Graphene/Ceramic Coating"
  },
  {
    slug: "detailing", num: "01", title: "Detailing & Paint Correction",
    tagline: "A complete refresh, inside and out, at our Turtle Wax Car Care Studio.",
    img: "assets/gallery/paint-correction.jpg",
    imgs: ["assets/gallery/paint-correction.jpg", "assets/services/dry-cleaning.jpg", "assets/gallery/interior-detailing.jpg"],
    intro: [
      "Car detailing is a complete refresh with exterior cleaning, interior care, paint enhancement and finishing. The work is planned around your vehicle's condition."
    ],
    included: [
      ["Car detailing", "Exterior cleaning, interior care, paint enhancement and finishing"],
      ["Paint correction", "Restores dull, scratched and swirl-marked paint for better clarity, gloss and finish"],
      ["Car dry cleaning", "Waterless interior cleaning for seats, carpets, mats, dashboard and interior panels"]
    ],
    notes: ["We'll look at the car first and recommend only what it needs."],
    shop: { href: "shop.html?cat=Car%20Care%20%26%20Essentials", label: "Shop car care products", sub: "Turtle Wax waxes, cleaners and accessories" },
    form: "Detailing"
  },
  {
    slug: "lighting", num: "06", title: "Lighting Upgrades",
    tagline: "Authorised Aozoom retailer and installation studio.",
    img: "", beam: true,
    intro: [
      "Brighter, safer night driving with genuine Aozoom lighting, fitted properly at our studio. As an authorised retailer and installation studio, we supply and install the full range."
    ],
    included: [
      ["LED headlight bulbs", "Including the app-controlled AZ1666 and the 150W AZ-1505", "shop.html?cat=Lighting&q=headlight"],
      ["Bi-LED fog projectors", "FLP 2040, FLP 2090 and FLP 4090 laser modules", "shop.html?cat=Lighting&q=fog"],
      ["Auxiliary lights", "W5, W7 and W8 multi-lens dual-beam lights", "shop.html?cat=Lighting&q=auxiliary"],
      ["Ambient & accent lighting", "Cardi ambient lighting and illuminated AC vents, Proman LED side markers, Thar full-LED tail lights", "shop.html?cat=Lighting"]
    ],
    notes: ["Tell us your vehicle and bulb type. We'll confirm compatibility before fitting."],
    shop: { href: "shop.html?cat=Lighting", label: "See lighting & prices", sub: "13 lighting products in the shop" },
    form: "Lighting"
  },
  {
    slug: "interiors-accessories", num: "07", title: "Interiors & Accessories",
    tagline: "Professional installation of car accessories, inside and out.",
    img: "assets/gallery/interior-detailing.jpg", pos: "center 40%",
    intro: [
      "Professional installation of interior accessories, exterior styling products, lighting upgrades, floor mats, seat covers and other vehicle-specific accessories."
    ],
    included: [
      ["GFX floor & trunk mats", "Custom-fit TPV mats for Thar, Scorpio N, Creta, Nexon, Harrier, Swift and many more", "shop.html?cat=Floor%20%26%20Trunk%20Mats"],
      ["Seat covers", "Custom-fit leatherette seat covers for Thar and Scorpio N", "shop.html?q=seat%20cover"],
      ["Exterior accessories", "Door edge guards, bumper corner protectors, side vents, mud flaps, number plate frames and car covers", "shop.html?cat=Exterior%20Accessories"],
      ["Comfort extras", "Window curtains and car fragrances", "shop.html?cat=Seat%20Covers%20%26%20Interior"]
    ],
    notes: ["Bought something elsewhere? We can fit vehicle-specific accessories too. Just ask."],
    shop: { href: "shop.html?cat=Floor%20%26%20Trunk%20Mats", label: "Browse accessories & prices", sub: "Mats, seat covers and exterior add-ons" },
    form: "Accessories"
  },
  {
    slug: "sun-control-film", num: "04", title: "Sun Control Window Film",
    tagline: "A cooler, more comfortable cabin with less heat and glare.",
    img: "assets/services/sun-film.jpg",
    intro: [
      "Sun control film is installed on your windows to improve cabin comfort by reducing heat and glare, which is welcome in Gwalior's summers."
    ],
    included: [
      ["Heat reduction", "Helps keep the cabin cooler"],
      ["Glare reduction", "More comfortable driving in bright sunlight"],
      ["Professional installation", "Clean, bubble-free application"]
    ],
    notes: ["Installation is subject to applicable regulations and vehicle requirements. We'll advise what's permitted for your vehicle."],
    form: "Sun Control Film"
  },
  {
    slug: "underbody-coating", num: "05", title: "Underbody Coating",
    tagline: "Protection for the part of your car you never see.",
    img: "assets/services/underbody.jpg", pos: "center 40%",
    intro: [
      "Underbody coating protects the underside of your vehicle from moisture, corrosion, road grime and other environmental conditions."
    ],
    included: [
      ["Corrosion protection", "Shields the underbody against moisture and rust"],
      ["Road grime protection", "A protective layer against mud, water and debris"],
      ["Underbody & silencer coating", "Ask us about coating the silencer too"]
    ],
    notes: ["Especially useful for vehicles regularly driven through water, mud or rough roads."],
    form: "Underbody Coating"
  }
];
