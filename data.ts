import { ItemData, Category, Rarity } from './types';

const getImg = (id: string) => `https://picsum.photos/seed/${id}/200`;

export const ITEMS_DB: ItemData[] = [
  // ==========================================
  // SAFE TO SELL OR RECYCLE (Page 1)
  // ==========================================
  { id: 'alarm-clock', name: 'Alarm Clock', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -14, stackSize: 3, imageUrl: getImg('alarm') },
  { id: 'broken-guidance', name: 'Broken Guidance System', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 0, stackSize: 3, imageUrl: getImg('guidance') },
  { id: 'broken-radio', name: 'Broken Handheld Radio', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -5, stackSize: 3, imageUrl: getImg('bradio') },
  { id: 'coolant', name: 'Coolant', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('coolant') },
  { id: 'diving-goggles', name: 'Diving Goggles', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 640, recycleValueChange: -6, stackSize: 3, imageUrl: getImg('goggles') },
  { id: 'expired-respirator', name: 'Expired Respirator', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 640, recycleValueChange: -6, stackSize: 3, imageUrl: getImg('resp') },
  { id: 'headphones', name: 'Headphones', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -15, stackSize: 3, imageUrl: getImg('head') },
  { id: 'ind-charger', name: 'Industrial Charger', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -12, stackSize: 3, imageUrl: getImg('charger') },
  { id: 'polluted-filter', name: 'Polluted Air Filter', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 3, imageUrl: getImg('filter') },
  { id: 'radio', name: 'Radio', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 0, stackSize: 3, imageUrl: getImg('radio') },
  { id: 'radio-relay', name: 'Radio Relay', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: -33, stackSize: 3, imageUrl: getImg('relay') },
  { id: 'remote', name: 'Remote Control', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -8, stackSize: 3, imageUrl: getImg('remote') },
  { id: 'thermostat', name: 'Thermostat', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -15, stackSize: 3, imageUrl: getImg('therm') },
  { id: 'sample-cleaner', name: 'Sample Cleaner', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: -11, stackSize: 3, imageUrl: getImg('sample') },
  { id: 'speaker-comp', name: 'Speaker Component', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -46, stackSize: 5, imageUrl: getImg('speaker') },
  { id: 'unusable-wep', name: 'Unusable Weapon', category: Category.SAFE_TO_SELL, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -2.5, stackSize: 3, imageUrl: getImg('uwep') },
  { id: 'barricade', name: 'Barricade Kit', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('barr') },
  { id: 'burned-circuit', name: 'Burned ARC Circuitry', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('bcirc') },
  { id: 'camera-lens', name: 'Camera Lens', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 5, imageUrl: getImg('lens') },
  { id: 'crumpled-bottle', name: 'Crumpled Plastic Bottle', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 270, recycleValueChange: -11, stackSize: 3, imageUrl: getImg('bottle') },
  { id: 'dmg-powercell', name: 'Damaged Arc Powercell', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 293, recycleValueChange: -32, stackSize: 5, imageUrl: getImg('powerc') },
  { id: 'deflated-ball', name: 'Deflated Football', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 3, imageUrl: getImg('ball') },
  { id: 'degraded-rubber', name: 'Degraded ARC Rubber', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -14, stackSize: 3, imageUrl: getImg('drubber') },
  { id: 'dried-resin', name: 'Dried-Out ARC Resin', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -16, stackSize: 3, imageUrl: getImg('resin') },
  { id: 'flame-spray', name: 'Flame Spray', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 2000, recycleValueChange: -50, stackSize: 1, imageUrl: getImg('flame') },
  { id: 'house-cleaner', name: 'Household Cleaner', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -14, stackSize: 5, imageUrl: getImg('cleaner') },
  { id: 'number-plate', name: 'Number Plate', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 270, recycleValueChange: 181, stackSize: 3, imageUrl: getImg('plate') },
  { id: 'ruined-baton', name: 'Ruined baton', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -6, stackSize: 3, imageUrl: getImg('baton') },
  { id: 'ruined-cuffs', name: 'Ruined Handcuffs', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('cuffs') },
  { id: 'rusty-steel', name: 'Rusty ARC Steel', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('steel') },
  { id: 'spotter-relay', name: 'Spotter Relay', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 2000, recycleValueChange: -26, stackSize: 3, imageUrl: getImg('spotter') },
  { id: 'rusted-bolts', name: 'Rusted Bolts', category: Category.SAFE_TO_SELL, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -6, stackSize: 3, imageUrl: getImg('bolts') },

  // ==========================================
  // EXPEDITION PROJECT 1 (Page 1)
  // ==========================================
  // Phase 1
  { id: 'metal-parts-p1', name: 'Metal Parts', category: Category.EXPEDITION, subCategory: 'Phase 1: Foundation', rarity: Rarity.COMMON, sellValue: 75, recycleValueChange: -25, stackSize: 150, imageUrl: getImg('mparts') },
  { id: 'rubber-parts-p1', name: 'Rubber Parts', category: Category.EXPEDITION, subCategory: 'Phase 1: Foundation', rarity: Rarity.COMMON, sellValue: 50, recycleValueChange: -25, stackSize: 200, imageUrl: getImg('rparts') },
  { id: 'arc-alloy-p1', name: 'Arc Alloy', category: Category.EXPEDITION, subCategory: 'Phase 1: Foundation', rarity: Rarity.COMMON, sellValue: 200, recycleValueChange: -25, stackSize: 80, imageUrl: getImg('alloy') },
  { id: 'steel-spring-p1', name: 'Steel Spring', category: Category.EXPEDITION, subCategory: 'Phase 1: Foundation', rarity: Rarity.COMMON, sellValue: 300, recycleValueChange: -25, stackSize: 15, imageUrl: getImg('spring') },
  // Phase 2
  { id: 'durable-cloth-p2', name: 'Durable Cloth', category: Category.EXPEDITION, subCategory: 'Phase 2: Core Systems', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 35, imageUrl: getImg('cloth') },
  { id: 'wires-p2', name: 'Wires', category: Category.EXPEDITION, subCategory: 'Phase 2: Core Systems', rarity: Rarity.COMMON, sellValue: 200, recycleValueChange: -50, stackSize: 30, imageUrl: getImg('wires') },
  { id: 'elec-comp-p2', name: 'Electrical Components', category: Category.EXPEDITION, subCategory: 'Phase 2: Core Systems', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -48, stackSize: 30, imageUrl: getImg('ecomp') },
  { id: 'cooling-fan-p2', name: 'Cooling Fan', category: Category.EXPEDITION, subCategory: 'Phase 2: Core Systems', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -18, stackSize: 5, imageUrl: getImg('fan') },
  // Phase 3
  { id: 'light-bulb-p3', name: 'Light Bulb', category: Category.EXPEDITION, subCategory: 'Phase 3: Framework', rarity: Rarity.COMMON, sellValue: 2000, recycleValueChange: -25, stackSize: 5, imageUrl: getImg('bulb') },
  { id: 'battery-p3', name: 'Battery', category: Category.EXPEDITION, subCategory: 'Phase 3: Framework', rarity: Rarity.COMMON, sellValue: 250, recycleValueChange: -40, stackSize: 30, imageUrl: getImg('bat') },
  { id: 'sensors-p3', name: 'Sensors', category: Category.EXPEDITION, subCategory: 'Phase 3: Framework', rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -45, stackSize: 20, imageUrl: getImg('sens') },
  { id: 'exodus-p3', name: 'Exodus Modules', category: Category.EXPEDITION, subCategory: 'Phase 3: Framework', rarity: Rarity.RARE, sellValue: 2750, recycleValueChange: -42, stackSize: 1, imageUrl: getImg('exodus') },
  { id: 'shredder-p3', name: 'Shredder Gyro', category: Category.EXPEDITION, subCategory: 'Phase 3: Framework', rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: -16, stackSize: 10, imageUrl: getImg('gyro') },
  // Phase 4
  { id: 'humidifier-p4', name: 'Humidifier', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 0, stackSize: 5, imageUrl: getImg('humid') },
  { id: 'adv-elec-p4', name: 'Advanced Electrical Components', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.RARE, sellValue: 1750, recycleValueChange: -52, stackSize: 5, imageUrl: getImg('advelec') },
  { id: 'mag-acc-p4', name: 'Magnetic Accelerator', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.RARE, sellValue: 6000, recycleValueChange: -50, stackSize: 3, imageUrl: getImg('magacc') },
  { id: 'leaper-p4', name: 'Leaper Pulse Unit', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -18, stackSize: 3, imageUrl: getImg('leaper') },
  { id: 'freq-mod-p4', name: 'Frequency Modulation Box', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: -25, stackSize: 5, imageUrl: getImg('freq') },
  { id: 'ion-sputter-p4', name: 'Ion Sputter', category: Category.EXPEDITION, subCategory: 'Phase 4: Outfitting', rarity: Rarity.RARE, sellValue: 6000, recycleValueChange: -21, stackSize: 3, imageUrl: getImg('ion') },

  // ==========================================
  // WORKSHOP UPGRADES (Page 2)
  // ==========================================
  // Gunsmith
  { id: 'mech-comp-ws', name: 'Mechanical Components', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -49, stackSize: 5, imageUrl: getImg('mechc') },
  { id: 'rusted-tools-ws', name: 'Rusted Tools', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 3, imageUrl: getImg('rtools') },
  { id: 'wasp-driver-ws', name: 'Wasp Driver', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -16, stackSize: 3, imageUrl: getImg('wasp') },
  { id: 'rusted-gear-ws', name: 'Rusted Gear', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -21, stackSize: 3, imageUrl: getImg('rgear') },
  { id: 'adv-mech-ws', name: 'Adv. Mechanical Components', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.RARE, sellValue: 1750, recycleValueChange: -46, stackSize: 5, imageUrl: getImg('advmech') },
  { id: 'sentinel-ws', name: 'Sentinel Firing Core', category: Category.WORKSHOP, subCategory: 'Gunsmith', rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: -23, stackSize: 4, imageUrl: getImg('sentinel') },
  
  // Explosives
  { id: 'pop-trigger-ws', name: 'Pop Trigger', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.UNCOMMON, sellValue: 640, recycleValueChange: -27, stackSize: 5, imageUrl: getImg('pop') },
  { id: 'crude-exp-ws', name: 'Crude Explosives', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.COMMON, sellValue: 270, recycleValueChange: -44, stackSize: 5, imageUrl: getImg('crude') },
  { id: 'synth-fuel-ws', name: 'Synthesized Fuel', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.UNCOMMON, sellValue: 700, recycleValueChange: -50, stackSize: 3, imageUrl: getImg('fuel') },
  { id: 'lab-reag-ws', name: 'Laboratory Reagents', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -20, stackSize: 3, imageUrl: getImg('lab') },
  { id: 'exp-comp-ws', name: 'Explosive Compound', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -46, stackSize: 5, imageUrl: getImg('expc') },
  { id: 'rocket-ws', name: 'Rocketeer Driver', category: Category.WORKSHOP, subCategory: 'Explosives', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -18, stackSize: 3, imageUrl: getImg('rocket') },
  
  // Gear Bench
  { id: 'elec-comp-gb', name: 'Electrical Components', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -48, stackSize: 10, imageUrl: getImg('ecomp2') },
  { id: 'power-cable-gb', name: 'Power Cable', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -20, stackSize: 3, imageUrl: getImg('pcable') },
  { id: 'hornet-gb', name: 'Hornet Driver', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -16, stackSize: 3, imageUrl: getImg('hornet') },
  { id: 'ind-batt-gb', name: 'Industrial Battery', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -15, stackSize: 3, imageUrl: getImg('indbat') },
  { id: 'adv-elec-gb', name: 'Adv. Electrical Components', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.RARE, sellValue: 1750, recycleValueChange: -52, stackSize: 5, imageUrl: getImg('advelec2') },
  { id: 'bastion-gb', name: 'Bastion Cell', category: Category.WORKSHOP, subCategory: 'Gear Bench', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -22, stackSize: 6, imageUrl: getImg('bastion') },
  
  // Refiner
  { id: 'fireball-ref', name: 'Fireball Burner', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -27, stackSize: 8, imageUrl: getImg('fire') },
  { id: 'arc-motion-ref', name: 'ARC Motion Core', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -60, stackSize: 5, imageUrl: getImg('motion') },
  { id: 'toaster-ref', name: 'Toaster', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 3, imageUrl: getImg('toast') },
  { id: 'motor-ref', name: 'Motor', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('motor') },
  { id: 'arc-circ-ref', name: 'ARC Circuitry', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -25, stackSize: 10, imageUrl: getImg('circ') },
  { id: 'bomb-ref', name: 'Bombardier Cell', category: Category.WORKSHOP, subCategory: 'Refiner', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -25, stackSize: 6, imageUrl: getImg('bomb') },
  
  // Medical Lab
  { id: 'tick-pod-ml', name: 'Tick Pod', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -22, stackSize: 8, imageUrl: getImg('tick') },
  { id: 'cloth-ml', name: 'Durable Cloth', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 5, imageUrl: getImg('cloth2') },
  { id: 'cracked-bio-ml', name: 'Cracked Bioscanner', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 2, imageUrl: getImg('bio') },
  { id: 'rusted-med-ml', name: 'Rusted Shut Medical Kit', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 0, stackSize: 3, imageUrl: getImg('medkit') },
  { id: 'antiseptic-ml', name: 'Antiseptic', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -50, stackSize: 8, imageUrl: getImg('anti') },
  { id: 'surveyor-ml', name: 'Surveyor Vault', category: Category.WORKSHOP, subCategory: 'Medical Lab', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -16, stackSize: 5, imageUrl: getImg('vault') },

  // Utility Station (New)
  { id: 'snitch-util', name: 'Snitch Scanner', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -26, stackSize: 6, imageUrl: getImg('snitch') },
  { id: 'elec-util', name: 'Electrical Components', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -48, stackSize: 5, imageUrl: getImg('elecutil') },
  { id: 'heatsink-util', name: 'Damaged Heat Sink', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -15, stackSize: 2, imageUrl: getImg('heatsink') },
  { id: 'fried-mobo-util', name: 'Fried Motherboard', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -21, stackSize: 3, imageUrl: getImg('moboutil') },
  { id: 'adv-elec-util', name: 'Adv. Electrical Components', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.RARE, sellValue: 1750, recycleValueChange: -52, stackSize: 5, imageUrl: getImg('advelecutil') },
  { id: 'leaper-util', name: 'Leaper Pulse Unit', category: Category.WORKSHOP, subCategory: 'Utility Station', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -18, stackSize: 4, imageUrl: getImg('leaperutil') },

  // Scrappy Upgrades (New)
  { id: 'dog-collar-sc', name: 'Dog Collar', category: Category.WORKSHOP, subCategory: 'Scrappy (L2)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -26, stackSize: 1, imageUrl: getImg('dog') },
  { id: 'lemon-sc', name: 'Lemon', category: Category.WORKSHOP, subCategory: 'Scrappy (L3)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('lemon') },
  { id: 'apricot-sc', name: 'Apricot', category: Category.WORKSHOP, subCategory: 'Scrappy (L3)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 3, imageUrl: getImg('apricot') },
  { id: 'prickly-pear-sc', name: 'Prickly Pear', category: Category.WORKSHOP, subCategory: 'Scrappy (L4)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 6, imageUrl: getImg('pear') },
  { id: 'olives-sc', name: 'Olives', category: Category.WORKSHOP, subCategory: 'Scrappy (L4)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -69, stackSize: 6, imageUrl: getImg('olives') },
  { id: 'cat-bed-sc', name: 'Cat Bed', category: Category.WORKSHOP, subCategory: 'Scrappy (L4)', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -25, stackSize: 1, imageUrl: getImg('catbed') },
  { id: 'mushroom-sc', name: 'Mushroom', category: Category.WORKSHOP, subCategory: 'Scrappy (L5)', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -25, stackSize: 12, imageUrl: getImg('mush') },
  { id: 'apricot-l5-sc', name: 'Apricot', category: Category.WORKSHOP, subCategory: 'Scrappy (L5)', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 12, imageUrl: getImg('apricot2') },
  { id: 'pillow-sc', name: 'Very Comfortable Pillow', category: Category.WORKSHOP, subCategory: 'Scrappy (L5)', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('pillow') },

  // ==========================================
  // KEEP FOR QUESTS (Page 2 Bottom)
  // ==========================================
  { id: 'magnetron-q', name: 'Magnetron', category: Category.QUEST_ITEMS, rarity: Rarity.RARE, sellValue: 6000, recycleValueChange: -3, stackSize: 1, imageUrl: getImg('magnetron') },
  { id: 'power-rod-q', name: 'Power Rod', category: Category.QUEST_ITEMS, rarity: Rarity.RARE, sellValue: 5500, recycleValueChange: -50, stackSize: 1, imageUrl: getImg('prod') },
  { id: 'rocket-q', name: 'Rocketeer Driver', category: Category.QUEST_ITEMS, rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -18, stackSize: 1, imageUrl: getImg('rocketq') },
  { id: 'leaper-q', name: 'Leaper Pulse Unit', category: Category.QUEST_ITEMS, rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: -18, stackSize: 1, imageUrl: getImg('leaperq') },
  { id: 'hornet-q', name: 'Hornet Driver', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -16, stackSize: 2, imageUrl: getImg('hornetq') },
  { id: 'surveyor-q', name: 'Surveyor Vault', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -16, stackSize: 1, imageUrl: getImg('surveyorq') },
  { id: 'wasp-q', name: 'Wasp Driver', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -16, stackSize: 2, imageUrl: getImg('waspq') },
  { id: 'antiseptic-q', name: 'Antiseptic', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -25, stackSize: 2, imageUrl: getImg('antiq') },
  { id: 'water-pump-q', name: 'Water Pump', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -10, stackSize: 1, imageUrl: getImg('wpump') },
  { id: 'flow-con-q', name: 'Flow Controller', category: Category.QUEST_ITEMS, rarity: Rarity.RARE, sellValue: 3000, recycleValueChange: -30, stackSize: 1, imageUrl: getImg('flowq') },
  { id: 'syringe-q', name: 'Syringe', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -44, stackSize: 1, imageUrl: getImg('syringe') },
  { id: 'snitch-q', name: 'Snitch Scanner', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: -26, stackSize: 2, imageUrl: getImg('snitchq') },
  { id: 'fertilizer-q', name: 'Fertilizer', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -80, stackSize: 1, imageUrl: getImg('fert') },
  { id: 'cloth-q', name: 'Durable Cloth', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -53, stackSize: 1, imageUrl: getImg('clothq') },
  { id: 'mullein-q', name: 'Great Mullein', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 300, recycleValueChange: 33, stackSize: 1, imageUrl: getImg('mullein') },
  { id: 'battery-q', name: 'Battery', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 250, recycleValueChange: -40, stackSize: 3, imageUrl: getImg('batq') },
  { id: 'alloy-q', name: 'ARC Alloy', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 200, recycleValueChange: -25, stackSize: 3, imageUrl: getImg('alloyq') },
  { id: 'wires-q', name: 'Wires', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 200, recycleValueChange: -50, stackSize: 11, imageUrl: getImg('wiresq') },
  { id: 'fireball-q', name: 'Fireball Burner', category: Category.QUEST_ITEMS, rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: -27, stackSize: 1, imageUrl: getImg('fireq') },
  { id: 'burletta-q', name: 'Burletta', category: Category.QUEST_ITEMS, rarity: Rarity.UNCOMMON, sellValue: 2900, recycleValueChange: -55, stackSize: 1, imageUrl: getImg('burletta') },

  // ==========================================
  // COMPONENT RECYCLING & DONORS (Page 3)
  // ==========================================
  // Uncategorized High Priority
  { id: 'processor', name: 'Processor', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -48, imageUrl: getImg('proc') },
  { id: 'volt-conv', name: 'Voltage Converter', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -50, imageUrl: getImg('volt') },
  { id: 'exp-comp-uc', name: 'Explosive Compound', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: -46, imageUrl: getImg('expuc') },
  { id: 'oil', name: 'Oil', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.COMMON, sellValue: 300, recycleValueChange: -50, imageUrl: getImg('oil') },
  { id: 'duct-tape', name: 'Duct Tape', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.COMMON, sellValue: 300, recycleValueChange: -50, imageUrl: getImg('tape') },
  { id: 'sensors-uc', name: 'Sensors', category: Category.COMPONENTS, subCategory: 'Uncategorized High Priority', rarity: Rarity.UNCOMMON, sellValue: 500, recycleValueChange: -45, imageUrl: getImg('sensuc') },

  // Essentials
  { id: 'arc-flex-rub', name: 'ARC Flex Rubber', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 16, recyclesInto: 'Rubber Parts', imageUrl: getImg('rflex') },
  { id: 'rubber-pad', name: 'Rubber Pad', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 18, recyclesInto: 'Rubber Parts', imageUrl: getImg('rpad') },
  { id: 'ruined-shield', name: 'Ruined Riot Shield', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 10, recyclesInto: 'Plastic Parts', imageUrl: getImg('shield') },
  { id: 'arc-resin', name: 'ARC Synthetic Resin', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 14, recyclesInto: 'Plastic Parts', imageUrl: getImg('synres') },
  { id: 'cooling-coil-ess', name: 'Cooling Coil', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 6, recyclesInto: 'Chemicals', imageUrl: getImg('ccoil') },
  { id: 'arc-coolant-ess', name: 'ARC Coolant', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 16, recyclesInto: 'Chemicals', imageUrl: getImg('acool') },
  { id: 'tattered-lining', name: 'Tattered ARC Lining', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: 12, recyclesInto: 'Fabric', imageUrl: getImg('tlining') },
  { id: 'ruined-para', name: 'Ruined Parachute', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: 10, recyclesInto: 'Fabric', imageUrl: getImg('para') },
  { id: 'torn-blanket', name: 'Torn Blanket', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: 12, recyclesInto: 'Fabric', imageUrl: getImg('blanket') },
  { id: 'spring-cushion', name: 'Spring Cushion', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 28, recyclesInto: 'Fabric', imageUrl: getImg('scush') },
  { id: 'ice-cream', name: 'Ice Cream Scooper', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: 7, recyclesInto: 'Metal Parts', imageUrl: getImg('scoop') },
  { id: 'garlic-press', name: 'Garlic Press', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 1000, recycleValueChange: 12, recyclesInto: 'Metal Parts', imageUrl: getImg('garlic') },
  { id: 'frying-pan', name: 'Frying Pan', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.COMMON, sellValue: 640, recycleValueChange: 8, recyclesInto: 'Metal Parts', imageUrl: getImg('pan') },
  { id: 'bicycle-pump', name: 'Bicycle Pump', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 10, recyclesInto: 'Metal Parts', imageUrl: getImg('pump') },
  { id: 'perf-steel', name: 'ARC Performance Steel', category: Category.COMPONENTS, subCategory: 'Essentials', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 7, recyclesInto: 'Metal Parts', imageUrl: getImg('psteel') },

  // Core Components (Donors)
  { id: 'rusted-tools-core', name: 'Rusted Tools', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 1, recyclesInto: 'Steel Spring', imageUrl: getImg('rtools2') },
  { id: 'ruined-acc', name: 'Ruined Accordion', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 3, recyclesInto: 'Steel Spring', imageUrl: getImg('acc') },
  { id: 'rotary-enc', name: 'Rotary Encoder', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: 2, recyclesInto: 'Fried Motherboard', imageUrl: getImg('rotary') },
  { id: 'fried-mobo-core', name: 'Fried Motherboard', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 2, recyclesInto: 'Signal Amplifier', imageUrl: getImg('mobo') },
  { id: 'broken-flash', name: 'Broken Flashlight', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 2, recyclesInto: 'Battery', imageUrl: getImg('bflash') },
  { id: 'geiger', name: 'Geiger Counter', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.RARE, sellValue: 3500, recycleValueChange: 3, recyclesInto: 'Battery', imageUrl: getImg('geiger') },
  { id: 'portable-tv', name: 'Portable TV', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 2, recyclesInto: 'Battery', imageUrl: getImg('tv') },
  { id: 'exodus-mod', name: 'Exodus Modules', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.RARE, sellValue: 2750, recycleValueChange: 2, recyclesInto: 'Magnet', imageUrl: getImg('exmod') },
  { id: 'microscope', name: 'Microscope', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.RARE, sellValue: 3000, recycleValueChange: 3, recyclesInto: 'Magnet', imageUrl: getImg('micro') },
  { id: 'ind-mag', name: 'Industrial Magnet', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 2, recyclesInto: 'Magnet', imageUrl: getImg('imag') },
  { id: 'rusted-gear-core', name: 'Rusted Gear', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 2, recyclesInto: 'Mech. Components', imageUrl: getImg('rgear2') },
  { id: 'shredder-core', name: 'Shredder Gyro', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 3000, recycleValueChange: 3, recyclesInto: 'Mech. Components', imageUrl: getImg('gyro2') },
  { id: 'turbo-pump', name: 'Turbo Pump', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recycleValueChange: 1, recyclesInto: 'Mech. Components', imageUrl: getImg('pump2') },
  { id: 'anvil-i', name: 'Anvil I', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 2000, recyclesInto: 'Mech. Components', imageUrl: getImg('anvil') },
  { id: 'power-cable-core', name: 'Power Cable', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 4, recyclesInto: 'Wires', imageUrl: getImg('pcable2') },
  { id: 'projector', name: 'Projector', category: Category.COMPONENTS, subCategory: 'Core Components', rarity: Rarity.UNCOMMON, sellValue: 1000, recycleValueChange: 2, recyclesInto: 'Wires', imageUrl: getImg('proj') },

  // High Tier Components
  { id: 'flow-con-ht', name: 'Flow Controller', category: Category.HIGH_TIER, subCategory: 'Adv. Mech Source', rarity: Rarity.RARE, sellValue: 3000, recycleValueChange: 1, recyclesInto: 'Adv. Mech Comp', imageUrl: getImg('flowht') },
  { id: 'leaper-ht', name: 'Leaper Pulse Unit', category: Category.HIGH_TIER, subCategory: 'Adv. Mech Source', rarity: Rarity.RARE, sellValue: 5000, recycleValueChange: 2, recyclesInto: 'Adv. Mech Comp', imageUrl: getImg('leaperht') },
  { id: 'bettina-i', name: 'Bettina I', category: Category.HIGH_TIER, subCategory: 'Adv. Mech Source', rarity: Rarity.LEGENDARY, sellValue: 8000, recyclesInto: 'Adv. Mech Comp', imageUrl: getImg('bettina') },
  { id: 'tempest-i', name: 'Tempest I', category: Category.HIGH_TIER, subCategory: 'Adv. Mech Source', rarity: Rarity.LEGENDARY, sellValue: 13000, recyclesInto: 'Adv. Mech Comp', imageUrl: getImg('tempest') },
  { id: 'spectrometer', name: 'Spectrometer', category: Category.HIGH_TIER, subCategory: 'Adv. Elec Source', rarity: Rarity.RARE, sellValue: 3000, recycleValueChange: 1, recyclesInto: 'Adv. Elec Comp', imageUrl: getImg('spec') },
  { id: 'combat-mk3-agg', name: 'Combat Mk. 3 (Aggressive)', category: Category.HIGH_TIER, subCategory: 'High Tier', rarity: Rarity.RARE, sellValue: 5000, imageUrl: getImg('cmk3a') },
  { id: 'looting-mk3-cau', name: 'Looting Mk. 3 (Cautious)', category: Category.HIGH_TIER, subCategory: 'High Tier', rarity: Rarity.RARE, sellValue: 5000, imageUrl: getImg('lmk3c') },
  { id: 'photo-cloak', name: 'Photoelectric Cloak', category: Category.HIGH_TIER, subCategory: 'High Tier', rarity: Rarity.RARE, sellValue: 5000, imageUrl: getImg('cloak') },
  { id: 'snap-hook', name: 'Snap Hook', category: Category.HIGH_TIER, subCategory: 'High Tier', rarity: Rarity.LEGENDARY, sellValue: 14000, imageUrl: getImg('hook') },

  // ==========================================
  // KEYCARDS (Page 4)
  // ==========================================
  { id: 'town-hall-key', name: 'Buried City Town Hall Key', category: Category.KEY_CARDS, location: 'Buried City', subCategory: 'Buried City', rarity: Rarity.RARE, sellValue: 0, description: 'Access to Town Hall main entrance.', imageUrl: getImg('key1') },
  { id: 'hospital-key', name: 'Buried City Hospital Key', category: Category.KEY_CARDS, location: 'Buried City', subCategory: 'Buried City', rarity: Rarity.RARE, sellValue: 0, description: 'Medical wing access.', imageUrl: getImg('key2') },
  { id: 'res-master-key', name: 'Buried City Residential Master Key', category: Category.KEY_CARDS, location: 'Buried City', subCategory: 'Buried City', rarity: Rarity.RARE, sellValue: 0, description: 'Unlocks multiple residential units.', imageUrl: getImg('key3') },
  { id: 'jkv-key', name: 'Buried City JKV Access Card', category: Category.KEY_CARDS, location: 'Buried City', subCategory: 'Buried City', rarity: Rarity.RARE, sellValue: 0, description: 'JKV building access.', imageUrl: getImg('key4') },
  
  { id: 'bg-village-key', name: 'Blue Gate Village Key', category: Category.KEY_CARDS, location: 'Blue Gate', subCategory: 'Blue Gate', rarity: Rarity.RARE, sellValue: 0, description: 'Village storage access.', imageUrl: getImg('key5') },
  { id: 'bg-conf-key', name: 'Blue Gate Confiscation Room', category: Category.KEY_CARDS, location: 'Blue Gate', subCategory: 'Blue Gate', rarity: Rarity.RARE, sellValue: 0, description: 'Confiscation room loot.', imageUrl: getImg('key6') },
  { id: 'bg-comm-key', name: 'Blue Gate Comm Tower Key', category: Category.KEY_CARDS, location: 'Blue Gate', subCategory: 'Blue Gate', rarity: Rarity.RARE, sellValue: 0, description: 'Tower maintenance access.', imageUrl: getImg('key7') },
  { id: 'bg-cellar-key', name: 'Blue Gate Cellar Key', category: Category.KEY_CARDS, location: 'Blue Gate', subCategory: 'Blue Gate', rarity: Rarity.RARE, sellValue: 0, description: 'Cellar storage access.', imageUrl: getImg('key8') },

  { id: 'sm-med-key', name: 'Stella Montis Medical Storage', category: Category.KEY_CARDS, location: 'Stella Montis', subCategory: 'Stella Montis', rarity: Rarity.RARE, sellValue: 0, description: 'Medical storage access.', imageUrl: getImg('key9') },
  { id: 'sm-arch-key', name: 'Stella Montis Archives Key', category: Category.KEY_CARDS, location: 'Stella Montis', subCategory: 'Stella Montis', rarity: Rarity.RARE, sellValue: 0, description: 'Archives wing access.', imageUrl: getImg('key10') },
  { id: 'sm-admin-key', name: 'Stella Montis Assembly Admin', category: Category.KEY_CARDS, location: 'Stella Montis', subCategory: 'Stella Montis', rarity: Rarity.RARE, sellValue: 0, description: 'Admin office access.', imageUrl: getImg('key11') },
  
  { id: 'sp-ware-key', name: 'Spaceport Warehouse Key', category: Category.KEY_CARDS, location: 'Spaceport', subCategory: 'Spaceport', rarity: Rarity.RARE, sellValue: 0, description: 'Warehouse main storage.', imageUrl: getImg('key12') },
  { id: 'sp-cont-key', name: 'Spaceport Container Storage', category: Category.KEY_CARDS, location: 'Spaceport', subCategory: 'Spaceport', rarity: Rarity.RARE, sellValue: 0, description: 'Container yard access.', imageUrl: getImg('key13') },
  
  { id: 'dam-ctrl-key', name: 'Dam Control Tower Key', category: Category.KEY_CARDS, location: 'Dam Battlegrounds', subCategory: 'Dam Battlegrounds', rarity: Rarity.RARE, sellValue: 0, description: 'Control tower top floor.', imageUrl: getImg('key14') },
  { id: 'dam-test-key', name: 'Dam Testing Annex Key', category: Category.KEY_CARDS, location: 'Dam Battlegrounds', subCategory: 'Dam Battlegrounds', rarity: Rarity.RARE, sellValue: 0, description: 'Testing facility annex.', imageUrl: getImg('key15') },

  // ==========================================
  // ATTACHMENTS (Page 5)
  // ==========================================
  { id: 'muzzle-brake', name: 'Muzzle Brake', category: Category.ATTACHMENTS, subCategory: 'Recoil Control', rarity: Rarity.COMMON, sellValue: 500, description: 'Reduces horizontal & vertical recoil. Best for fast firing.', imageUrl: getImg('att1') },
  { id: 'angled-grip-i', name: 'Angled Grip I', category: Category.ATTACHMENTS, subCategory: 'Recoil Control', rarity: Rarity.COMMON, sellValue: 500, description: '-20% Horizontal Recoil.', imageUrl: getImg('att2') },
  { id: 'angled-grip-ii', name: 'Angled Grip II', category: Category.ATTACHMENTS, subCategory: 'Recoil Control', rarity: Rarity.UNCOMMON, sellValue: 1000, description: '-30% Horizontal Recoil.', imageUrl: getImg('att3') },
  { id: 'vert-grip-i', name: 'Vertical Grip I', category: Category.ATTACHMENTS, subCategory: 'Recoil Control', rarity: Rarity.COMMON, sellValue: 500, description: '-20% Vertical Recoil.', imageUrl: getImg('att4') },
  { id: 'silencer-i', name: 'Silencer I', category: Category.ATTACHMENTS, subCategory: 'Noise Reduction', rarity: Rarity.COMMON, sellValue: 500, description: '+20% Noise Reduction.', imageUrl: getImg('att5') },
  { id: 'silencer-ii', name: 'Silencer II', category: Category.ATTACHMENTS, subCategory: 'Noise Reduction', rarity: Rarity.UNCOMMON, sellValue: 1000, description: '40% Noise Reduction.', imageUrl: getImg('att6') },
  { id: 'ext-light-mag-i', name: 'Extended Light Mag I', category: Category.ATTACHMENTS, subCategory: 'Magazine', rarity: Rarity.COMMON, sellValue: 500, description: 'Increases light ammo capacity.', imageUrl: getImg('att7') },
  { id: 'stable-stock-i', name: 'Stable Stock I', category: Category.ATTACHMENTS, subCategory: 'Stock', rarity: Rarity.COMMON, sellValue: 500, description: '-20% Recoil Recovery Time.', imageUrl: getImg('att8') },
  { id: 'comp-i', name: 'Compensator I', category: Category.ATTACHMENTS, subCategory: 'Dispersion', rarity: Rarity.COMMON, sellValue: 500, description: '-15% Max-shot dispersion.', imageUrl: getImg('att9') },
  { id: 'ext-barrel', name: 'Extended Barrel', category: Category.ATTACHMENTS, subCategory: 'Barrel', rarity: Rarity.UNCOMMON, sellValue: 1000, description: '+25% Bullet Velocity.', imageUrl: getImg('att10') }
];