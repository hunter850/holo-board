import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TalentDetailSkeleton() {
    return (
        <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                    <Skeleton className="aspect-square w-full rounded-lg" />
                </div>
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-40" />
                </div>
            </div>
        </Card>
    );
} 