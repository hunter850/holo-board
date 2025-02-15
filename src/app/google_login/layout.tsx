import { Suspense } from "react";

interface GoogleLoginLayoutProps {
    children: React.ReactNode;
}

export default function GoogleLoginLayout({ children }: GoogleLoginLayoutProps) {
    return <Suspense>{children}</Suspense>;
}
