type Publication = {
    title: string;
    authors: string[];
    date: string;
    link: string;
  };

  async function getPublications(): Promise<Publication[]> {
    const res = await fetch(
      'https://github.com/Bokobelin/mrichelle_pubs/raw/refs/heads/main/publications.json',
      { next: { revalidate: 1 } } // Revalidate every 1 seconds for fresh data
    );

    if (!res.ok) {
      throw new Error('Failed to fetch publications');
    }

    return res.json();
  }

  export default async function Home() {
    const publications = await getPublications();

    return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-5xl">Matthieu Richelle</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-gray-900 shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-600 mb-6">
                Publication List
                </h1>
                <ul className="space-y-4">
                    {publications.map((pub, index) => (
                        <li key={index} className='p-4 bg-gray-800 rounded-md shadow hover:shadow-lg transition-shadow'>
                            <a href={pub.link} className='text-lg font-semibold text-blue-600 hover:underline'>{pub.title}</a>
                            <p className="text-sm text-gray-600">
                                By <span className="font-medium">{pub.authors.join(', ')}</span>
                            </p>
                            <p className="text-xs text-gray-500">Published in {pub.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center">
        <h3 className="text-xl">Links</h3>
        <div className="flex flex-row gap-4">
            <a href="https://uclouvain.academia.edu/MatthieuRichelle" className="underline">Academia</a>
            <a href="https://uclouvain.be/fr/repertoires/matthieu.richelle" className="underline">UCLouvain</a>
        </div>
      </footer>
    </div>
  );
}
