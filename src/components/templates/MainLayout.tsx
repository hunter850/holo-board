import Header from "@/components/organisms/Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="pb-8">{children}</div>
        </div>
    );
}
