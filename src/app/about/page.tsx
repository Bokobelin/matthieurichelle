import Header from "@/components/header";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white merriweather-regular">
            <Header />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:p-10 text-gray-900 mx-4 mt-6 mb-6">
                <div className="inline">
                    Matthieu Richelle is a biblical scholar and epigrapher. He is professor of Old Testament exegesis at <Link href="https://www.uclouvain.be/en" className="text-blue-500 underline">UCLouvain (Université catholique de Louvain; Belgium)</Link>. A former student of the <Link href="https://www.ebaf.edu/en/" className="underline text-blue-500">Ecole biblique et archéologique française de Jérusalem</Link>, he holds a PhD in History from the <Link href="https://www.ephe.psl.eu/" className="underline text-blue-500">Ecole Pratique des Hautes Etudes</Link> and a Habilitation from the University of Strasbourg.
                </div>
                <br />
                <br />
                <div className="inline">
                    His research interests include Old Testament textual criticism, the exegesis of the Books of Kings, Semitic inscriptions of the ancient Levant, the relationship between the Bible and archaeology, and the history of ancient Israel. He is an associate editor of the <Link href="https://www.die-bibel.de/en/biblia-hebraica-quinta-bhq" className="text-blue-500 underline"><i>Biblia Hebraica Quinta</i></Link> and the principal editor of 1 Kings (in progress) in the series <Link href="https://www.sbl-site.org/HBCE/HBCE_About.html" className="text-blue-500 underline">Hebrew Bible: A Critical Edition (HBCE)</Link>.
                </div>
                <br />
                <br />
                <div className="inline">
                    He is currently co-editing (with Jeremy Hutton) the <i>Oxford Handbook of Northwest Semitic Epigraphy</i> and co-editing (with Régis Burnet) a new edition of the <i>Bible de Jérusalem</i>.
                    <br />  
                    <br /> 
                    <Link href="/List of publications 18 March 2025.pdf" className="text-blue-500 underline inline">List of Publications</Link>
                </div>
            </main>
        </div>
    )
}