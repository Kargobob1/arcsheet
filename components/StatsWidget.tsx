import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ItemData, Category } from '../types';

interface StatsWidgetProps {
  items: ItemData[];
}

export const StatsWidget: React.FC<StatsWidgetProps> = ({ items }) => {
  const data = [
    { name: 'Safe to Sell', value: items.filter(i => i.category === Category.SAFE_TO_SELL).length, color: '#3b82f6' },
    { name: 'Expedition', value: items.filter(i => i.category === Category.EXPEDITION).length, color: '#22c55e' },
    { name: 'Workshop', value: items.filter(i => i.category === Category.WORKSHOP).length, color: '#eab308' },
    { name: 'High Tier', value: items.filter(i => i.category === Category.HIGH_TIER).length, color: '#a855f7' },
  ];

  return (
    <div className="h-64 w-full bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex flex-col">
      <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Inventory Distribution</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip 
                contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#f3f4f6' }}
                itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend iconSize={8} wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};