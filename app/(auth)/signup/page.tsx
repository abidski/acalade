import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

import { SignupForm } from "@/app/(auth)/signup/components/signup-form"

export default function SignupPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <Image
                            className="invert dark:invert"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={100}
                            height={20}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <SignupForm />
                    </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <Image
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
            </div>
        </div>
    )
}
