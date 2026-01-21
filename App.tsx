import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { ITEMS_DB } from './data';
import { ItemCard } from './components/ItemCard';
import { Assistant } from './components/Assistant';
import { StatsWidget } from './components/StatsWidget';
import { Category, Rarity, ItemData } from './types';
import { APP_VERSION, LAST_UPDATED } from './constants';
import { Search, Filter, Info } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = useMemo(() => {
    return ITEMS_DB.filter(item => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = item.name.toLowerCase().includes(searchLower) || 
                            item.subCategory?.toLowerCase().includes(searchLower) ||
                            item.recyclesInto?.toLowerCase().includes(searchLower); // Added search for recycled targets
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const categories = ['All', ...Object.values(Category)];

  // Group items by SubCategory if active category is selected (visual sugar)
  const groupedItems = useMemo<Record<string, ItemData[]>>(() => {
    if (activeCategory === 'All') return { 'All Items': filteredItems };
    
    return filteredItems.reduce((acc, item) => {
      const key = item.subCategory || 'General';
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {} as Record<string, ItemData[]>);
  }, [filteredItems, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0f0f13] text-gray-200 font-sans selection:bg-orange-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0f0f13]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  ARC RAIDERS
                </h1>
                <span className="bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded">MASTER CHEAT SHEET</span>
              </div>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                <span>{APP_VERSION}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>{LAST_UPDATED}</span>
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg leading-5 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-800 focus:border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:text-sm transition-colors"
                placeholder="Search items or donor yields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content Grid */}
        <div className="lg:col-span-3 space-y-8">
          {(Object.entries(groupedItems) as [string, ItemData[]][]).map(([groupTitle, items]) => (
            items.length > 0 && (
              <div key={groupTitle} className="animate-in fade-in duration-500">
                {(activeCategory !== 'All' || groupTitle !== 'All Items') && (
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-bold text-gray-100">{groupTitle}</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <p className="text-xl font-bold text-gray-500">No signals detected.</p>
              <p className="text-sm">Try adjusting your scanners (filters).</p>
            </div>
          )}
        </div>

        {/* Sidebar Info & Legend */}
        <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Stats */}
            <StatsWidget items={ITEMS_DB} />

            {/* Legend Box */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                    <Info size={16} className="text-blue-500"/>
                    <h3 className="font-bold text-gray-200 text-sm">Decoder Guide</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                    <div>
                        <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Recycling Index</p>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1 text-green-400 bg-green-900/10 px-2 py-1 rounded text-xs border border-green-900/30">
                                ▲ +%
                            </span>
                            <span className="text-gray-400 text-xs leading-tight">Better return than selling.</span>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <span className="flex items-center gap-1 text-red-400 bg-red-900/10 px-2 py-1 rounded text-xs border border-red-900/30">
                                ▼ -%
                            </span>
                            <span className="text-gray-400 text-xs leading-tight">Loss vs selling. Sell it!</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Rarity Signals</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="border-l-2 border-green-500 pl-2 text-gray-400 text-xs">Common</div>
                            <div className="border-l-2 border-blue-500 pl-2 text-gray-400 text-xs">Uncommon</div>
                            <div className="border-l-2 border-purple-500 pl-2 text-gray-400 text-xs">Rare</div>
                            <div className="border-l-2 border-yellow-500 pl-2 text-gray-400 text-xs">Legendary</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </main>

      <Assistant />
    </div>
  );
};

export default App;