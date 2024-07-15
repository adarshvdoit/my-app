import Cards from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
    return (
        <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            {/* <   ext-center">Chai or Code</h1> */}

            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <Cards />

        </main>
    );
}
