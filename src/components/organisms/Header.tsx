import { Suspense } from "react";
import Logo from "@/components/atoms/Logo";
import LoginButton from "@/components/molecules/LoginButton";
import LoginButtonSkeleton from "@/components/molecules/LoginButtonSkeleton";

export default function Header() {
    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky left-0 right-0 top-0 z-50 h-16 border-b backdrop-blur">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <Logo />
                <Suspense fallback={<LoginButtonSkeleton />}>
                    <LoginButton />
                </Suspense>
            </div>
        </header>
    );
}
