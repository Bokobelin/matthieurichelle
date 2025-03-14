'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/header";
import TagFilter from "@/components/tag-filter";

type Publication = {
  title: string;
  authors: string[];
  date: string;
  link: string;
  tags?: string[]; // Add optional tags field
};

export default function Home() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Extract all unique tags from publications
  const allTags = [...new Set(
    publications.flatMap(pub => pub.tags || [])
  )].sort();

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Use local API route instead of direct GitHub fetch
        const res = await fetch('/api/publications');

        if (!res.ok) {
          throw new Error('Failed to fetch publications');
        }

        const data = await res.json();
        setPublications(data);
        setFilteredPublications(data);
      } catch (err) {
        setError('Error fetching publications');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  // Rest of your component remains the same
  const handleTagsChange = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredPublications(publications);
      return;
    }
    
    // Filter publications based on selected tags
    const filtered = publications.filter(pub => 
      pub.tags && selectedTags.some(tag => pub.tags?.includes(tag))
    );
    
    setFilteredPublications(filtered);
  };

  return (
    <div className="flex flex-col items-center text-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white merriweather-regular">
      <Header />
      <main className="flex flex-col gap-8 items-center sm:items-start lg:p-10">
        <div className="min-h-screen p-8 w-full max-w-4xl">
          <div className="bg-gray-50 shadow-md rounded-lg lg:p-6">
            {isLoading ? (
              <p className="text-center p-4">Loading publications...</p>
            ) : error ? (
              <p className="text-center text-red-500 p-4">{error}</p>
            ) : (
              <>
                <TagFilter 
                  allTags={allTags} 
                  onTagsChange={handleTagsChange} 
                />
                
                <ul className="space-y-4">
                  {filteredPublications.length === 0 ? (
                    <p className="text-center p-4">No publications match the selected tags</p>
                  ) : (
                    filteredPublications.map((pub, index) => (
                      <li
                        key={index}
                        className="p-4 bg-gray-300 rounded-md shadow hover:shadow-lg transition-shadow"
                      >
                        <a
                          href={pub.link}
                          className="text-lg font-semibold text-violet-950 hover:underline"
                        >
                          {pub.title}
                        </a>
                        <p className="text-sm text-gray-600">
                          By <span className="font-medium">{pub.authors.join(', ')}</span>
                        </p>
                        <p className="text-xs text-gray-600">Published in {pub.date}</p>
                        
                        {/* Display tags */}
                        {pub.tags && pub.tags.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {pub.tags.map(tag => (
                              <span key={tag} className="px-2 py-0.5 bg-violet-100 text-violet-800 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-6 items-center justify-center bg-white text-black p-8">
        <h3 className="text-xl font-bold text-black">Links</h3>
        <div className="flex flex-row gap-4 text-black">
          <a
            href="https://uclouvain.academia.edu/MatthieuRichelle"
            className="underline text-black hover:text-gray-800"
          >
            Academia
          </a>
          <a
            href="https://uclouvain.be/fr/repertoires/matthieu.richelle"
            className="underline text-black hover:text-gray-800"
          >
            UCLouvain
          </a>
        </div>
      </footer>
    </div>
  );
}