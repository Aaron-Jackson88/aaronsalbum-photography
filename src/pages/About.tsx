import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Star } from "lucide-react";
import profilePic from "@/assets/Photos/Profile Pic/S__10739717.jpg";

const About = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Bride",
      content: "Aaron Huang captured our wedding day perfectly! Every photo tells a story and brings back all the emotions we felt. Her eye for detail and natural moments is incredible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Graduate",
      content: "The graduation photos exceeded all my expectations. Aaron Huang made me feel comfortable and confident, and the final images truly capture this milestone in my life.",
      rating: 5,
    },
    {
      name: "Rachel Thompson",
      role: "Family Portrait Client",
      content: "Working with Aaron Huang was an absolute pleasure. She has a gift for capturing authentic moments and genuine smiles. Our family photos are treasures we'll keep forever.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section with Profile */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <img
                    src={profilePic}
                    alt="Aaron Huang Chen - Photographer"
                    className="w-full max-w-md mx-auto rounded-lg elegant-shadow"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-primary">
                    About Aaron Huang
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      A university student who sparked an interest in photography and
                      videography during a summer break at Shanghai in 2023 and
                      have been a freelance photographer/videographer since March
                      2024, having worked on 7 photography gigs and 3 videography
                      gigs.
                    </p>
                    <p>
                      I specialize in capturing authentic moments as an event
                      photographer and videographer, highlighting genuine emotions and
                      natural beauty. Adaptable to any setting or style, I aim to tell
                      compelling visual stories that preserve memories for a lifetime.
                    </p>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 bg-accent/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
                My Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Authentic Moments</h3>
                  <p className="text-muted-foreground">
                    I focus on capturing genuine emotions and natural interactions, creating images 
                    that truly reflect who you are.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Natural Light</h3>
                  <p className="text-muted-foreground">
                    I have a deep appreciation for natural light and use it to create soft, 
                    warm, and timeless photographs.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Personal Connection</h3>
                  <p className="text-muted-foreground">
                    Building a rapport with my clients is essential. When you're comfortable, 
                    it shows in every photograph.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
                What My Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from some of the wonderful people I've had the pleasure to work with
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg elegant-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;