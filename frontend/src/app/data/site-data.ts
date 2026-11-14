export interface Experience {
  slug: string; title: string; shortTitle: string; species: string; subtitle: string;
  description: string; location: string; season: string; image: string; accent: string;
  conservation: string; habitat: string; highlights: string[]; fieldNote: string; imagePosition?: string;
  stats: { label: string; value: string }[];
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`;

export const experiences: Experience[] = [
  {
    slug: 'tiger-landscapes', title: 'Tiger Landscapes', shortTitle: 'Tigers', species: 'Bengal tiger',
    subtitle: 'Forests of power and presence', description: 'Follow the quiet rhythms of India’s central forests, where old sal trees, winding tracks and waterholes shape the world of the Bengal tiger.',
    location: 'Central India', season: 'October – June', image: img('photo-1561731216-c3a4d99437d5'), imagePosition: 'center 38%', accent: '#b58b55',
    conservation: 'Endangered', habitat: 'Tropical dry deciduous forest',
    highlights: ['Guided forest drives with naturalists', 'Track signs, calls and changing forest rhythms', 'Learn about habitat corridors and coexistence'],
    fieldNote: 'The forest rarely announces its presence. A fresh pugmark, alarm call or sudden silence can tell a story long before an animal appears.',
    stats: [{ label: 'Landscape', value: 'Central India' }, { label: 'Best season', value: 'Oct – Jun' }, { label: 'Focus species', value: 'Bengal tiger' }]
  },
  {
    slug: 'one-horned-rhinos', title: 'One-horned Rhinos', shortTitle: 'Rhinos', species: 'Greater one-horned rhinoceros',
    subtitle: 'The giants of the grasslands', description: 'Explore vast floodplains and tall elephant grass, where one-horned rhinoceroses share a living landscape with wetlands, birds and people.',
    location: 'Assam, Northeast India', season: 'November – April', image: img('photo-1535338454770-8be927b5a00b'), imagePosition: 'center 34%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Alluvial grassland and wetland',
    highlights: ['Discover grassland ecology and flood cycles', 'Observe wetland birds and large herbivores', 'Understand community-led conservation'],
    fieldNote: 'The grasslands change with every flood. Their seasonal renewal is central to the survival of the animals that call them home.',
    stats: [{ label: 'Landscape', value: 'Brahmaputra floodplain' }, { label: 'Best season', value: 'Nov – Apr' }, { label: 'Focus species', value: 'One-horned rhino' }]
  },
  {
    slug: 'hornbill-forests', title: 'Hornbill Forests', shortTitle: 'Hornbills', species: 'Great hornbill',
    subtitle: 'Where the forest still calls', description: 'Enter the rain-fed forests of the eastern Himalaya, following the canopy pathways of hornbills and the communities protecting them.',
    location: 'Arunachal Pradesh', season: 'March – May', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/The_Great_Indian_Hornbill_at_Jim_Corbett_National_Park.jpg', imagePosition: 'center 38%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Subtropical evergreen forest',
    highlights: ['Learn how hornbills disperse forest seeds', 'Meet local conservation partners', 'Explore forest edges and canopy habitats'],
    fieldNote: 'A hornbill’s flight carries more than a bird across the canopy. It carries seeds, renewal and the future shape of the forest.',
    stats: [{ label: 'Landscape', value: 'Eastern Himalaya' }, { label: 'Best season', value: 'Mar – May' }, { label: 'Focus species', value: 'Great hornbill' }]
  },
  {
    slug: 'red-pandas', title: 'Red Pandas', shortTitle: 'Red pandas', species: 'Red panda',
    subtitle: 'A rare mountain treasure', description: 'Move slowly through cool temperate forests of bamboo and moss, searching for signs of one of the Himalaya’s most elusive mammals.',
    location: 'Sikkim and North Bengal', season: 'March – May; October – November', image: img('photo-1511497584788-876760111969'), imagePosition: 'center 42%', accent: '#b58b55',
    conservation: 'Endangered', habitat: 'Temperate broadleaf and conifer forest',
    highlights: ['Explore high-altitude forest ecology', 'Understand habitat fragmentation', 'Travel with local forest knowledge holders'],
    fieldNote: 'Patience is part of the landscape. The smallest movement in a bamboo thicket can become the day’s most memorable encounter.',
    stats: [{ label: 'Landscape', value: 'Eastern Himalaya' }, { label: 'Best season', value: 'Spring / Autumn' }, { label: 'Focus species', value: 'Red panda' }]
  },
  {
    slug: 'mountain-ghosts', title: 'Mountain Ghosts', shortTitle: 'Mountain ghosts', species: 'Snow leopard',
    subtitle: 'In search of the unseen', description: 'Travel through high-altitude valleys where life is shaped by snow, stone and extraordinary adaptation. Look for the signs of the elusive snow leopard.',
    location: 'Ladakh and Spiti', season: 'January – March', image: img('photo-1464822759023-fed622ff2c3b'), imagePosition: 'center 50%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Alpine and subalpine terrain',
    highlights: ['Understand high-altitude ecology', 'Learn to read tracks and terrain', 'Meet communities living alongside wildlife'],
    fieldNote: 'In the mountains, an encounter may be a footprint in fresh snow or a silhouette on a far ridge. The landscape itself is the reward.',
    stats: [{ label: 'Landscape', value: 'Trans-Himalaya' }, { label: 'Best season', value: 'Jan – Mar' }, { label: 'Focus species', value: 'Snow leopard' }]
  }
];

export const partners: { name: string; place: string; type: string; description: string; image: string }[] = [];

export const stories = [
  { category: 'FIELD NOTES', title: 'The forest remembers', place: 'Central India', excerpt: 'A morning walk, a set of fresh tracks and the people who know how to read the forest.', image: img('photo-1441974231531-c6227db76b6e') },
  { category: 'COMMUNITY', title: 'Guardians of the canopy', place: 'Arunachal Pradesh', excerpt: 'How local knowledge and collective action are helping protect hornbill habitat.', image: img('photo-1511497584788-876760111969') },
  { category: 'LANDSCAPES', title: 'Life above the tree line', place: 'Himalaya', excerpt: 'In the high mountains, every season brings a new lesson in adaptation.', image: img('photo-1464822759023-fed622ff2c3b') }
];

export interface Destination {
  name: string;
  state: string;
  experience: string;
  focus: string;
  bestWindow: string;
  note: string;
}

// Destination discovery catalogue. Park access, safari zones and seasons must be reconfirmed before each departure.
export const destinations: Destination[] = [
  { name: 'Tadoba-Andhari Tiger Reserve', state: 'Maharashtra', experience: 'Tiger Landscapes', focus: 'Bengal tiger, leopard, sloth bear and dry deciduous forest', bestWindow: 'October – June', note: 'A central Indian forest landscape known for teak woodland, lakes and seasonal water sources.' },
  { name: 'Pench Tiger Reserve', state: 'Madhya Pradesh / Maharashtra', experience: 'Tiger Landscapes', focus: 'Tiger, leopard, wild dog and mixed forest', bestWindow: 'October – June', note: 'A connected forest landscape across two states, with teak forests and the Pench river system.' },
  { name: 'Kanha Tiger Reserve', state: 'Madhya Pradesh', experience: 'Tiger Landscapes', focus: 'Tiger, barasingha and sal forest', bestWindow: 'October – June', note: 'Known for sal and bamboo forests, open meadows and barasingha conservation.' },
  { name: 'Bandhavgarh Tiger Reserve', state: 'Madhya Pradesh', experience: 'Tiger Landscapes', focus: 'Tiger, leopard and forest birds', bestWindow: 'October – June', note: 'A varied forest-and-hill landscape with a strong association with tiger conservation.' },
  { name: 'Ranthambore National Park', state: 'Rajasthan', experience: 'Tiger Landscapes', focus: 'Tiger, leopard, crocodile and dry forest', bestWindow: 'October – June', note: 'Dry deciduous forest, lakes and historic ruins shape this distinctive landscape.' },
  { name: 'Corbett Tiger Reserve', state: 'Uttarakhand', experience: 'Tiger Landscapes', focus: 'Tiger, elephant, gharial and riverine birds', bestWindow: 'November – June; zone-dependent', note: 'A Himalayan foothill mosaic of river, sal forest and grassland habitats.' },
  { name: 'Kaziranga National Park', state: 'Assam', experience: 'One-horned Rhinos', focus: 'Greater one-horned rhinoceros, elephant and wetland birds', bestWindow: 'November – April', note: 'Brahmaputra floodplain grasslands, wetlands and woodland; seasonal closures and flooding affect access.' },
  { name: 'Pobitora Wildlife Sanctuary', state: 'Assam', experience: 'One-horned Rhinos', focus: 'Greater one-horned rhinoceros and wetland birds', bestWindow: 'November – April', note: 'A compact floodplain grassland and wetland landscape near Guwahati.' },
  { name: 'Manas National Park', state: 'Assam', experience: 'Hornbill Forests', focus: 'Elephant, tiger, golden langur and forest birds', bestWindow: 'November – April', note: 'A UNESCO-listed landscape spanning riverine grassland and Himalayan foothill forest.' },
  { name: 'Pakke Tiger Reserve', state: 'Arunachal Pradesh', experience: 'Hornbill Forests', focus: 'Hornbills, elephant and rich eastern Himalayan biodiversity', bestWindow: 'November – April', note: 'Evergreen and semi-evergreen forests with important hornbill habitat and community conservation work.' },
  { name: 'Namdapha National Park', state: 'Arunachal Pradesh', experience: 'Hornbill Forests', focus: 'Hornbills, clouded leopard and diverse forest life', bestWindow: 'October – April', note: 'A large eastern Himalayan protected area with exceptional changes in altitude and habitat.' },
  { name: 'Singalila National Park', state: 'West Bengal', experience: 'Red Panda Trails', focus: 'Red panda, Himalayan birds and temperate forest', bestWindow: 'March – May; October – November', note: 'High ridgelines, bamboo and temperate forest in the eastern Himalaya.' },
  { name: 'Khangchendzonga National Park', state: 'Sikkim', experience: 'Red Panda Trails', focus: 'Red panda habitat, Himalayan landscapes and alpine biodiversity', bestWindow: 'March – May; October – November', note: 'A high-altitude protected landscape with forests, glaciers and mountain ecosystems.' },
  { name: 'Hemis National Park', state: 'Ladakh', experience: 'Mountain Ghosts', focus: 'Snow leopard, ibex and blue sheep', bestWindow: 'January – March', note: 'A high-altitude trans-Himalayan landscape where winter tracking is guided by local expertise.' },
  { name: 'Spiti Valley', state: 'Himachal Pradesh', experience: 'Mountain Ghosts', focus: 'Snow leopard, ibex and Himalayan wolf', bestWindow: 'January – March', note: 'Cold-desert valleys and high ridges; winter travel requires careful acclimatisation and local logistics.' }
];

export const collections = {
  expeditions: { title: 'Expeditions', eyebrow: 'GO DEEPER', intro: 'Multi-day journeys into India’s wildlife landscapes, built around field knowledge, responsible travel and time to understand a place.', items: ['Tadoba and the forests of central India', 'Pench and Kanha: connected central Indian landscapes', 'Kaziranga and the Brahmaputra floodplains', 'The eastern Himalayan hornbill forests', 'Red panda landscapes of Sikkim and North Bengal', 'Snow leopard country in Ladakh and Spiti'] },
  excursions: { title: 'Excursions', eyebrow: 'LEARN BY BEING THERE', intro: 'Shorter, focused journeys shaped around a habitat, a species or a conservation question.', items: ['A morning in the central Indian forest', 'Grassland and wetland birding in Assam', 'Forest walks in the eastern Himalaya', 'Nature and wildlife around the Himalayan foothills', 'Community-led interpretation and local food experiences'] },
  explorations: { title: 'Explorations', eyebrow: 'FOLLOW YOUR CURIOSITY', intro: 'Special-interest journeys for curious travellers who want to understand the detail behind India’s wild places.', items: ['Wildlife photography in central India', 'Birding across forests and wetlands', 'Reading tracks, calls and animal signs', 'High-altitude wildlife and mountain ecology', 'Forest, river and grassland habitats'] }
};
