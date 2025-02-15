"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginButtonSkeleton from "./LoginButtonSkeleton";
import { API_URLS } from "@/config/api_config";
import { LogOut, User } from "lucide-react";

export interface UserInfo {
    name: string;
    email: string;
    picture: string;
}

export default function LoginButton() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // checkAuthStatus()
        (async () => {
            try {
                const response = await fetch(API_URLS.USER, {
                    credentials: "include",
                });

                if (response.ok) {
                    const data = (await response.json()) as { success: boolean; message: string; data: UserInfo };
                    setUser(data.data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Failed to check auth status:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleLogin = () => {
        window.location.href = API_URLS.GOOGLE_LOGIN;
    };

    const handleLogout = async () => {
        try {
            await fetch(API_URLS.LOGOUT, {
                method: "POST",
                credentials: "include",
            });
            window.location.reload();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    if (loading) {
        return <LoginButtonSkeleton />;
    }

    if (!user) {
        return <Button onClick={handleLogin}>Login</Button>;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={user.picture ?? ""} />
                    <AvatarFallback>{user.name ?? "U"}</AvatarFallback>
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
