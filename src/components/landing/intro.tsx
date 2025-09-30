import { Separator } from "@/components/ui/separator"
import { Sparkle } from "lucide-react"

export function Intro() {
    return (
        <section id="intro" className="w-full py-8 md:py-20 lg:py-28 bg-background">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
                    <p className="text-base md:text-lg text-foreground">
                        At Reliable Shine Cleaning, we specialize in providing top-quality commercial cleaning services...
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Separator className="w-1/4" />
                        <Sparkle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        <Separator className="w-1/4" />
                    </div>
                </div>
            </div>
        </section>
    )
}
