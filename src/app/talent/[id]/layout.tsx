import MainLayout from "@/components/templates/MainLayout";

interface TalentLayoutProps {
    children: React.ReactNode;
}

export default function TalentLayout({ children }: TalentLayoutProps) {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-6">{children}</main>
        </MainLayout>
    );
}
