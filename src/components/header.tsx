import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            {/* Header */}
            <header className="bg-white shadow w-screen top-0 z-50 overflow-hidden">
                <div className="max-w-7xl flex flex-col items-center py-4 overflow-hidden">
                    {/* Logo and Title */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/matthieurichelle.png"
                            alt="Matthieu Richelle"
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                        <h1 className="text-3xl font-bold text-black mt-2">
                            Matthieu Richelle
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-4 flex gap-6 text-black text-lg font-medium">
                        <Link href="/" className="hover:text-blue-600">
                            Articles
                        </Link>
                        <Link href="/books" className="hover:text-blue-600">
                            Books
                        </Link>
                        <Link href="/reviews" className="hover:text-blue-600">
                            Reviews
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
