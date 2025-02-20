import { Suspense } from "react";
import TalentDetailSkeleton from "@/components/molecules/TalentDetailSkeleton";
import TalentPage from "@/components/pages/TalentPage";

export interface TalentPageProps {
    params: Promise<{ id: string }>;
}

export default async function Talent({ params }: TalentPageProps) {
    return (
        <>
            <Suspense fallback={<TalentDetailSkeleton />}>
                <TalentPage params={params} />
            </Suspense>
        </>
    );
}
