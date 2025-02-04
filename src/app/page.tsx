import Cards from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
    return (
        <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            {/* <   ext-center">Chai or Code</h1> */}

            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <Cards />
            <UpcomingWebinars />
            <Instructor />
            <Footer />
        </main>
    );
}
