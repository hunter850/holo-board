import { Suspense } from "react";
import MainLayout from "@/components/templates/MainLayout";
import TalentDetailSkeleton from "@/components/molecules/TalentDetailSkeleton";

interface TalentLayoutProps {
    children: React.ReactNode;
}

export default function TalentLayout({ children }: TalentLayoutProps) {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-6">
                <Suspense fallback={<TalentDetailSkeleton />}>{children}</Suspense>
            </main>
        </MainLayout>
    );
} 