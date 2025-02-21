import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function VTuberCardSkeleton() {
    return (
        <Card className="overflow-hidden bg-white/70 backdrop-blur-sm">
            <div className="relative aspect-square">
                <Skeleton className="h-full w-full bg-purple-100" />
            </div>
            <div className="space-y-2 p-3">
                <Skeleton className="h-5 w-3/4 bg-purple-100" />
                <Skeleton className="h-4 w-1/2 bg-purple-100" />
            </div>
        </Card>
    );
}
