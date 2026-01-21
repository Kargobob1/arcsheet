export enum Rarity {
  COMMON = 'Common', // Greenish
  UNCOMMON = 'Uncommon', // Blue
  RARE = 'Rare', // Purple
  LEGENDARY = 'Legendary' // Gold/Orange
}

export enum Category {
  SAFE_TO_SELL = 'Safe to Sell or Recycle',
  EXPEDITION = 'Expedition Project',
  WORKSHOP = 'Workshop Upgrades',
  COMPONENTS = 'Recycling & Donors',
  HIGH_TIER = 'High-Tier Components',
  QUEST_ITEMS = 'Keep for Quests',
  KEY_CARDS = 'Key Locations',
  ATTACHMENTS = 'Attachments'
}

export interface ItemData {
  id: string;
  name: string;
  category: Category;
  rarity: Rarity;
  sellValue: number;
  recycleValueChange?: number; // The percentage change (e.g., -14, +50)
  stackSize?: number;
  subCategory?: string; // e.g., "Gunsmith", "Phase 1"
  imageUrl?: string;
  description?: string;
  craftable?: boolean;
  location?: string; // Specific for Key Cards
  recyclesInto?: string; // Specific for Best Donors (e.g., "Yields: Steel Spring")
}

export interface FilterState {
  search: string;
  category: Category | 'All';
}