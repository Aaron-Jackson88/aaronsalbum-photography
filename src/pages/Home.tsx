import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const galleryCategories = [
    {
      title: "Portraits",
      description: "Intimate and expressive portrait photography",
      image: import.meta.env.BASE_URL + "Photos/Portraits/IMG_8106.jpg",
      path: "/gallery/portraits"
    },
    {
      title: "Events",
      description: "Capturing the magic of your special occasions",
      image: import.meta.env.BASE_URL + "Photos/Events/Park Hiyatt Event 192.jpg",
      path: "/gallery/events"
    },
    {
      title: "Editorial",
      description: "Creative storytelling through visual narratives",
      image: import.meta.env.BASE_URL + "Photos/Editorial/IMG_4266.jpg",
      path: "/gallery/editorial"
    },
    {
      title: "Graduations",
      description: "Celebrating your academic achievements",
      image: import.meta.env.BASE_URL + "Photos/Graduations/Cloudy Sky.jpg",
      path: "/gallery/graduations"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={import.meta.env.BASE_URL + "Photos/Events/VERSO x Future School Festival 2024 490.jpg"}
            alt="Aaron Huang Photography Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient" />
        </div>
        
        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Every Moment Tells a Story
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Professional photography that captures the essence of who you are
          </p>
          <Button 
            onClick={() => document.getElementById('explore-work')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            variant="secondary" 
            className="smooth-transition hover-shadow"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
              My Philosophy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I believe that photography is more than just capturing an image—it's about preserving 
              emotions, connections, and the authentic beauty of human experience. Every session is 
              an opportunity to tell your unique story through the interplay of natural light, 
              genuine moments, and artistic vision.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Gallery Categories */}
      <section id="explore-work" className="py-20 px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover different styles and moments captured through my lens
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={category.path}
                  className="block bg-card rounded-lg overflow-hidden elegant-shadow smooth-transition hover:shadow-hover"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={`${category.title} photography`}
                      className="portfolio-image"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;