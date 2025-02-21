import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TalentDetailSkeleton() {
    return (
        <Card className="bg-white/70 p-6 shadow-lg shadow-purple-200 backdrop-blur-sm">
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full md:w-1/3">
                    <Skeleton className="aspect-square w-full rounded-lg bg-purple-100" />
                </div>
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-8 w-3/4 bg-purple-100" />
                    <Skeleton className="h-6 w-1/2 bg-purple-100" />
                    <Skeleton className="h-4 w-24 bg-purple-100" />
                    <Skeleton className="h-10 w-40 bg-purple-100" />
                </div>
            </div>
        </Card>
    );
} 