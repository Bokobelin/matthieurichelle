import Header from "@/components/header";

type Publication = {
    title: string;
    authors: string[];
    date: string;
    link: string;
  };

  async function getPublications(): Promise<Publication[]> {
    const res = await fetch(
      'https://github.com/Bokobelin/mrichelle_pubs/raw/refs/heads/main/reviews.json',
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white merriweather-regular">
        <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-10">
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-gray-50 shadow-md rounded-lg p-6">
                <ul className="space-y-4">
                    {publications.map((pub, index) => (
                        <li key={index} className='p-4 bg-gray-300 rounded-md shadow hover:shadow-lg transition-shadow'>
                            <a href={pub.link} className='text-lg font-semibold text-violet-950 hover:underline'>{pub.title}</a>
                            <p className="text-sm text-gray-600">
                                By <span className="font-medium">{pub.authors.join(', ')}</span>
                            </p>
                            <p className="text-xs text-gray-600">Published in {pub.date}</p>
                        </li>
                    ))}
                </ul>
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
