"use client";

import { useRouter } from "next/navigation";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";


export const Footer = () => {
    const router = useRouter();
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm" onClick={() => router.push('/privacy')}>
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm" onClick={() => router.push('/terms-and-conditions')}>
                    Terms & Conditions
                </Button>
            </div>
        </div>
    )
}