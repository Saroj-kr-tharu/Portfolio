import ExperienceSection from "Components/ExperienceSection";
import Footer from "Components/Footer";
import HeroSection from "Components/HeroSection";
import ProjectSection from "Components/ProjectSection";
import SkillAndConnect from "Components/SkillAndConnect";
import Layout from "Layout/Layout";


function Homepage() {

    
    

    return(
        <Layout> 
            <HeroSection /> 
            <SkillAndConnect /> 
            <ExperienceSection /> 
            <ProjectSection />
            <Footer />

       
        </Layout>
    )
}

export default Homepage