"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { API_URLS } from "@/config/api_config";
import { LogOut, User } from "lucide-react";

interface LoginButtonClientProps {
    user: {
        name: string | null;
        email: string | null;
        picture: string | null;
    } | null;
}

export default function LoginButtonClient({ user }: LoginButtonClientProps) {
    const handleLogin = () => {
        window.location.href = API_URLS.GOOGLE_LOGIN;
    };

    const handleLogout = async () => {
        try {
            await fetch(API_URLS.LOGOUT, {
                method: "POST",
                credentials: "include",
            });
            window.location.reload(); // 重新載入頁面以更新狀態
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    if (!user) {
        return <Button onClick={handleLogin}>Login</Button>;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={user.picture || ""} />
                    <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-muted-foreground text-xs">{user.email}</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="flex items-center gap-2 text-red-600 focus:text-red-600"
                    onClick={handleLogout}
                >
                    <LogOut className="h-4 w-4" />
                    <span>登出</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
