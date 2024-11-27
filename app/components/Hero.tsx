import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter()
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 text-center min-h-[95dvh]"
      id="home"
    >
      <div className="mt-[10dvh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Dr. Seema Wazarkar
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8">
          Computer Science Professor & Researcher
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Specializing in Artificial Intelligence and Machine Learning, with a
          focus on developing ethical and efficient AI systems.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="gap-2">
            <GraduationCap className="w-4 h-4" />
            Academic Profile
          </Button>
          <Button onClick={()=>{
            router.push(
              "https://scholar.google.co.in/citations?user=s-9dTVkAAAAJ&hl=en"
            );
          }} variant="outline" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Research Work
          </Button>
        </div>
      </div>
    </section>
  );
}
