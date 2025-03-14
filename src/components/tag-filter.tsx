'use client';

import { useState } from 'react';

interface TagFilterProps {
  allTags: string[];
  onTagsChange: (selectedTags: string[]) => void;
}

export default function TagFilter({ allTags, onTagsChange }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    onTagsChange(newSelectedTags);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    onTagsChange([]);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Filter by tags:</span>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-violet-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button 
            onClick={clearFilters}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}