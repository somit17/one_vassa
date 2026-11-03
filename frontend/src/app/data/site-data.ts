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
    stats: [{label:'Landscape',value:'Central India'},{label:'Best season',value:'Oct – Jun'},{label:'Focus species',value:'Bengal tiger'}]
  },
  {
    slug: 'one-horned-rhinos', title: 'One-horned Rhinos', shortTitle: 'Rhinos', species: 'Greater one-horned rhinoceros',
    subtitle: 'The giants of the grasslands', description: 'Explore vast floodplains and tall elephant grass, where one-horned rhinoceroses share a living landscape with wetlands, birds and people.',
    location: 'Assam, Northeast India', season: 'November – April', image: img('photo-1535338454770-8be927b5a00b'), imagePosition: 'center 34%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Alluvial grassland and wetland',
    highlights: ['Discover grassland ecology and flood cycles', 'Observe wetland birds and large herbivores', 'Understand community-led conservation'],
    fieldNote: 'The grasslands change with every flood. Their seasonal renewal is central to the survival of the animals that call them home.',
    stats: [{label:'Landscape',value:'Brahmaputra floodplain'},{label:'Best season',value:'Nov – Apr'},{label:'Focus species',value:'One-horned rhino'}]
  },
  {
    slug: 'hornbill-forests', title: 'Hornbill Forests', shortTitle: 'Hornbills', species: 'Great hornbill',
    subtitle: 'Where the forest still calls', description: 'Enter the rain-fed forests of the eastern Himalaya, following the canopy pathways of hornbills and the communities protecting them.',
    location: 'Arunachal Pradesh', season: 'March – May', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/The_Great_Indian_Hornbill_at_Jim_Corbett_National_Park.jpg', imagePosition: 'center 38%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Subtropical evergreen forest',
    highlights: ['Learn how hornbills disperse forest seeds', 'Meet local conservation partners', 'Explore forest edges and canopy habitats'],
    fieldNote: 'A hornbill’s flight carries more than a bird across the canopy. It carries seeds, renewal and the future shape of the forest.',
    stats: [{label:'Landscape',value:'Eastern Himalaya'},{label:'Best season',value:'Mar – May'},{label:'Focus species',value:'Great hornbill'}]
  },
  {
    slug: 'red-pandas', title: 'Red Pandas', shortTitle: 'Red pandas', species: 'Red panda',
    subtitle: 'A rare mountain treasure', description: 'Move slowly through cool temperate forests of bamboo and moss, searching for signs of one of the Himalaya’s most elusive mammals.',
    location: 'Sikkim and North Bengal', season: 'March – May; October – November', image: img('photo-1511497584788-876760111969'), imagePosition: 'center 42%', accent: '#b58b55',
    conservation: 'Endangered', habitat: 'Temperate broadleaf and conifer forest',
    highlights: ['Explore high-altitude forest ecology', 'Understand habitat fragmentation', 'Travel with local forest knowledge holders'],
    fieldNote: 'Patience is part of the landscape. The smallest movement in a bamboo thicket can become the day’s most memorable encounter.',
    stats: [{label:'Landscape',value:'Eastern Himalaya'},{label:'Best season',value:'Spring / Autumn'},{label:'Focus species',value:'Red panda'}]
  },
  {
    slug: 'mountain-ghosts', title: 'Mountain Ghosts', shortTitle: 'Mountain ghosts', species: 'Snow leopard',
    subtitle: 'In search of the unseen', description: 'Travel through high-altitude valleys where life is shaped by snow, stone and extraordinary adaptation. Look for the signs of the elusive snow leopard.',
    location: 'Ladakh and Spiti', season: 'January – March', image: img('photo-1464822759023-fed622ff2c3b'), imagePosition: 'center 50%', accent: '#b58b55',
    conservation: 'Vulnerable', habitat: 'Alpine and subalpine terrain',
    highlights: ['Understand high-altitude ecology', 'Learn to read tracks and terrain', 'Meet communities living alongside wildlife'],
    fieldNote: 'In the mountains, an encounter may be a footprint in fresh snow or a silhouette on a far ridge. The landscape itself is the reward.',
    stats: [{label:'Landscape',value:'Trans-Himalaya'},{label:'Best season',value:'Jan – Mar'},{label:'Focus species',value:'Snow leopard'}]
  }
];

export const partners = [
  { name: 'Nyishi Hornbill Project', place: 'Arunachal Pradesh', type: 'Community conservation', description: 'Working with local communities to protect hornbills, nesting trees and the forests they depend on.', image: img('photo-1511497584788-876760111969') },
  { name: 'Kibber Homestay Collective', place: 'Spiti Valley', type: 'Community-led hospitality', description: 'A network of local hosts sharing mountain knowledge and supporting responsible travel in high-altitude villages.', image: img('photo-1464822759023-fed622ff2c3b') },
  { name: 'Singalila Guide Association', place: 'West Bengal', type: 'Local guiding', description: 'Local guides bringing generations of landscape knowledge to forest walks and wildlife journeys.', image: img('photo-1441974231531-c6227db76b6e') },
  { name: 'Kaziranga Range Naturalists', place: 'Assam', type: 'Field knowledge', description: 'Naturalists interpreting the living grasslands, wetlands and wildlife of the Brahmaputra floodplain.', image: img('photo-1500530855697-b586d89ba3ee') },
  { name: 'Central India Trackers', place: 'Central India', type: 'Landscape stewardship', description: 'Field practitioners documenting wildlife movement and supporting coexistence across forest edges.', image: img('photo-1511497584788-876760111969') },
  { name: 'Community Conservation Fund', place: 'Across India', type: 'Local initiatives', description: 'A platform for practical, locally led projects that strengthen the relationship between people and nature.', image: img('photo-1472396961693-142e6e269027') }
];

export const stories = [
  { category: 'FIELD NOTES', title: 'The forest remembers', place: 'Central India', excerpt: 'A morning walk, a set of fresh tracks and the people who know how to read the forest.', image: img('photo-1441974231531-c6227db76b6e') },
  { category: 'COMMUNITY', title: 'Guardians of the canopy', place: 'Arunachal Pradesh', excerpt: 'How local knowledge and collective action are helping protect hornbill habitat.', image: img('photo-1511497584788-876760111969') },
  { category: 'LANDSCAPES', title: 'Life above the tree line', place: 'Himalaya', excerpt: 'In the high mountains, every season brings a new lesson in adaptation.', image: img('photo-1464822759023-fed622ff2c3b') }
];

export const collections = {
  expeditions: { title: 'Expeditions', eyebrow: 'GO DEEPER', intro: 'Longer journeys into remarkable landscapes, guided by field knowledge and a respect for the natural world.', items: ['Tiger country, central India', 'Rhino country, Assam', 'The high Himalaya', 'Hornbill forests', 'Red panda landscapes'] },
  excursions: { title: 'Excursions', eyebrow: 'LEARN BY BEING THERE', intro: 'Focused journeys designed around a landscape, a species or a conservation question.', items: ['Achanakmar: forest and field learning', 'Grassland ecology', 'Birds of the foothills'] },
  explorations: { title: 'Explorations', eyebrow: 'FOLLOW YOUR CURIOSITY', intro: 'Research-led encounters for curious travellers who want to understand the detail behind a place.', items: ['Tracking in the central forests', 'Life in the eastern Himalaya', 'High-altitude wildlife', 'Wetland worlds'] }
};
