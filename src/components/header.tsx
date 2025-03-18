import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            {/* Header */}
            <header className="bg-white shadow w-screen top-0 z-50 overflow-x-hidden min-h-full pt-0 mt-0">
                <div className="max-w-7xl mx-auto flex flex-col items-center py-4 overflow-x-hidden pt-0 mt-0">
                    {/* Logo and Title */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/thumb.jpg"
                            alt="Matthieu Richelle"
                            width={600}
                            height={200}
                            className="object-cover"
                        />
                        <h1 className="text-3xl font-bold text-black mt-2">
                            Matthieu Richelle
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-4 flex gap-6 text-black text-lg font-medium">
                        <Link href="/" className="hover:text-blue-600">
                            Books
                        </Link>
                        <Link href="/books" className="hover:text-blue-600">
                            Articles
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