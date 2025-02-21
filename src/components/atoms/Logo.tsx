import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex cursor-pointer items-center gap-2">
                <Image src="/images/hd_icon.png" alt="HoloBoard Logo" width={48} height={48} />
                <h1 className="text-2xl font-bold">
                    <span className="text-pink-600">Holo</span>
                    <span className="text-purple-900">Dashboard</span>
                </h1>
            </div>
        </Link>
    );
}
