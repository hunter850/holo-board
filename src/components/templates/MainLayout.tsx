import Header from "@/components/organisms/Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
            <Header />
            <div className="pb-8">{children}</div>
        </div>
    );
}
