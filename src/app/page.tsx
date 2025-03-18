import Header from "@/components/header";
import Image from "next/image";

type Publication = {
    title: string;
    authors: string[];
    date: string;
    link: string;
    image: string;
    preview: string;
    pdf: string;
  };

  async function getPublications(): Promise<Publication[]> {
    const res = await fetch(
      'https://github.com/Bokobelin/mrichelle_pubs/raw/refs/heads/main/books.json',
      { next: { revalidate: 1 } } // Revalidate every 1 seconds for fresh data
    );

    if (!res.ok) {
      throw new Error('Failed to fetch publications');
    }
    const json = res.json();
    //console.log(json);

    return json;
  }

  export default async function Home() {
    const publications = await getPublications();

    return(
        <div className="flex flex-col items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white merriweather-regular">
        <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:p-10">
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-gray-50 shadow-md rounded-lg lg:p-6">
                <ul className="space-y-4">
                    {publications.map((pub, index) => (
                        <li key={index} className='flex flex-row gap-4 bg-gray-300 rounded-md shadow hover:shadow-lg transition-shadow'>
                            <Image src={pub.image} alt={pub.title} height={200} width={200} className="rounded-md" />
                            <div className="flex flex-col">
                                <a href={pub.link} className='text-lg font-semibold text-violet-950 hover:underline'>{pub.title}</a>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">{pub.authors.join(', ')}</span>
                                </p>
                                <p className="text-xs text-gray-600">{pub.date}</p>
                                {pub.preview && pub.preview.trim() !== '' && (
                                    <a href={pub.preview} className="text-xs text-blue-600 underline">
                                        Preview
                                    </a>
                                )}
                                {pub.pdf && pub.pdf.trim() !== '' && (
                                    <a href={pub.pdf} className="text-xs text-blue-600 underline">
                                        PDF
                                    </a>
                                )}
                            </div>
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
