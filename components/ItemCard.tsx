import React from 'react';
import { ItemData, Category } from '../types';
import { RARITY_COLORS, RARITY_TEXT_COLORS } from '../constants';
import { Coins, Recycle, MapPin, Crosshair, ArrowRightCircle, Box } from 'lucide-react';

interface ItemCardProps {
  item: ItemData;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const isPositiveRecycle = (item.recycleValueChange || 0) > 0;
  const isKey = item.category === Category.KEY_CARDS;
  const isAttachment = item.category === Category.ATTACHMENTS;
  const isComponent = item.category === Category.COMPONENTS || item.category === Category.HIGH_TIER;
  
  return (
    <div className={`relative group flex flex-col bg-gray-900 border-l-4 ${RARITY_COLORS[item.rarity]} rounded-r-md p-3 hover:bg-gray-800 transition-all duration-200 shadow-lg overflow-hidden h-full`}>
      {/* Background glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-300 ${RARITY_COLORS[item.rarity].replace('border-', 'bg-')}`} />

      <div className="flex justify-between items-start mb-2">
        <div className="relative">
             {/* Simulating the cropped icon look with a border container */}
            <div className={`w-12 h-12 rounded bg-gray-950 border border-gray-700 overflow-hidden flex items-center justify-center`}>
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            
        </div>
        
        <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-blue-400 font-bold text-sm bg-blue-900/20 px-2 py-0.5 rounded border border-blue-900/50">
                <Coins size={12} />
                {item.sellValue > 0 ? item.sellValue.toLocaleString() : '-'}
            </div>
            {item.recycleValueChange !== undefined && (
                <div className={`flex items-center gap-1 text-xs font-medium px-1.5 rounded border ${isPositiveRecycle ? 'text-green-400 bg-green-900/20 border-green-900/30' : 'text-red-400 bg-red-900/20 border-red-900/30'}`}>
                    <Recycle size={10} />
                    {item.recycleValueChange > 0 ? '+' : ''}{item.recycleValueChange}%
                </div>
            )}
        </div>
      </div>

      <div className="mt-1 flex-1">
        <div className="flex justify-between items-start">
            <h3 className={`font-bold text-sm leading-tight ${RARITY_TEXT_COLORS[item.rarity]}`}>{item.name}</h3>
            {item.stackSize && (
                <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-950 px-1.5 py-0.5 rounded border border-gray-800 ml-2 whitespace-nowrap">
                    <Box size={10} />
                    x{item.stackSize}
                </div>
            )}
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{item.subCategory || item.rarity}</p>
        
        {isKey && item.location && (
            <div className="mt-2 flex items-center gap-1.5 text-orange-400 text-xs bg-orange-950/30 p-1.5 rounded border border-orange-900/50">
                <MapPin size={12} />
                <span>{item.location}</span>
            </div>
        )}

        {isAttachment && item.description && (
             <div className="mt-2 flex items-start gap-1.5 text-gray-400 text-xs bg-gray-800/50 p-1.5 rounded border border-gray-700">
                <Crosshair size={12} className="mt-0.5 shrink-0" />
                <span>{item.description}</span>
            </div>
        )}

        {isComponent && item.recyclesInto && (
             <div className="mt-2 flex items-center gap-2 text-emerald-400 text-xs bg-emerald-950/30 p-2 rounded border border-emerald-900/50 shadow-sm shadow-emerald-900/10">
                <div className="bg-emerald-900/50 rounded-full p-0.5">
                    <ArrowRightCircle size={14} className="shrink-0" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-emerald-500/80 uppercase font-bold tracking-wider">Recycles Into</span>
                    <span className="font-bold text-white leading-tight">{item.recyclesInto}</span>
                </div>
            </div>
        )}
         
         {item.description && !isKey && !isAttachment && (
            <p className="mt-2 text-xs text-gray-400 italic line-clamp-2">{item.description}</p>
         )}
      </div>

    </div>
  );
};