import Header from "@/components/header";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white merriweather-regular">
            <Header/>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:p-10 text-gray-900  mx-4">
            Matthieu Richelle is a biblical scholar and epigrapher. He is professor of Old Testament exegesis at UCLouvain (Université catholique de Louvain; Belgium). A former student of the Ecole biblique et archéologique française de Jérusalem, he holds a PhD in History from the Ecole Pratique des Hautes Etudes and a Habilitation from the University of Strasbourg.
            <br/>
            <br/>
            His research interests include Old Testament textual criticism, the exegesis of the Books of Kings, Semitic inscriptions of the ancient Levant, the relationship between the Bible and archaeology, and the history of ancient Israel. He is an associate editor of the Biblia Hebraica Quinta and the principal editor of 1 Kings (in progress) in the series Hebrew Bible: A Critical Edition (HBCE).
            <br/>
            <br/>
            <br/>   
            He is currently co-editing (with Jeremy Hutton) the Oxford Handbook of Northwest Semitic Epigraphy and co-editing (with Régis Burnet) a new edition of the Bible de Jérusalem.
            <Link href="/List of publications 18 March 2025.pdf" className="text-blue-500 underline">List of Publications</Link>
            </main>
        </div>
    )
}