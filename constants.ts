import { Rarity } from './types';

export const RARITY_COLORS: Record<Rarity, string> = {
  [Rarity.COMMON]: 'border-green-500 shadow-green-900/20',
  [Rarity.UNCOMMON]: 'border-blue-500 shadow-blue-900/20',
  [Rarity.RARE]: 'border-purple-500 shadow-purple-900/20',
  [Rarity.LEGENDARY]: 'border-yellow-500 shadow-yellow-900/20',
};

export const RARITY_TEXT_COLORS: Record<Rarity, string> = {
  [Rarity.COMMON]: 'text-green-400',
  [Rarity.UNCOMMON]: 'text-blue-400',
  [Rarity.RARE]: 'text-purple-400',
  [Rarity.LEGENDARY]: 'text-yellow-400',
};

export const APP_VERSION = "V3.2";
export const LAST_UPDATED = "16. Jan. 2026";
