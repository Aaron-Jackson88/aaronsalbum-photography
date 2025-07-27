import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Lightbox from "@/components/Lightbox";

// Import all images explicitly
import editorial1 from "@/assets/Photos/Editorial/IMG_4379.jpg";
import editorial2 from "@/assets/Photos/Editorial/IMG_4383.jpg";
import editorial3 from "@/assets/Photos/Editorial/IMG_4354.jpg";
import editorial4 from "@/assets/Photos/Editorial/IMG_4358.jpg";
import editorial5 from "@/assets/Photos/Editorial/IMG_4338.jpg";
import editorial6 from "@/assets/Photos/Editorial/IMG_4314.jpg";
import editorial7 from "@/assets/Photos/Editorial/IMG_4266.jpg";
import editorial8 from "@/assets/Photos/Editorial/IMG_4289.jpg";
import editorial9 from "@/assets/Photos/Editorial/Green Fein 11.jpg";
import editorial10 from "@/assets/Photos/Editorial/Green Fein 14.jpg";
import editorial11 from "@/assets/Photos/Editorial/Green Fein 13.jpg";
import editorial12 from "@/assets/Photos/Editorial/Green Fein 8.jpg";
import editorial13 from "@/assets/Photos/Editorial/Green Fein 5.jpg";
import editorial14 from "@/assets/Photos/Editorial/Natural light shots 6.jpg";
import editorial15 from "@/assets/Photos/Editorial/Green Fein sideway 1.jpg";
import editorial16 from "@/assets/Photos/Editorial/Stare.jpg";
import editorial17 from "@/assets/Photos/Editorial/Blue light 3.jpg";
import editorial18 from "@/assets/Photos/Editorial/Natural light shots 3.jpg";
import editorial19 from "@/assets/Photos/Editorial/Blue light 4.jpg";
import editorial20 from "@/assets/Photos/Editorial/Blue light 5.jpg";

import portrait1 from "@/assets/Photos/Portraits/IMG_8116.jpg";
import portrait2 from "@/assets/Photos/Portraits/IMG_8106.jpg";
import portrait3 from "@/assets/Photos/Portraits/IMG_8007.jpg";
import portrait4 from "@/assets/Photos/Portraits/IMG_7977.jpg";
import portrait5 from "@/assets/Photos/Portraits/IMG_7968.jpg";
import portrait6 from "@/assets/Photos/Portraits/IMG_7920.jpg";
import portrait7 from "@/assets/Photos/Portraits/IMG_7919.jpg";
import portrait8 from "@/assets/Photos/Portraits/IMG_7884.jpg";
import portrait9 from "@/assets/Photos/Portraits/IMG_7831.jpg";
import portrait10 from "@/assets/Photos/Portraits/IMG_7829.jpg";
import portrait11 from "@/assets/Photos/Portraits/IMG_7818.jpg";
import portrait12 from "@/assets/Photos/Portraits/Vondervic soft 12.jpg";
import portrait13 from "@/assets/Photos/Portraits/Vondervic soft 8.jpg";
import portrait14 from "@/assets/Photos/Portraits/Vondervic soft 10.jpg";
import portrait15 from "@/assets/Photos/Portraits/Vondervic soft book 3.jpg";
import portrait16 from "@/assets/Photos/Portraits/Vondervic soft 7.jpg";
import portrait17 from "@/assets/Photos/Portraits/Vondervic soft 5.jpg";
import portrait18 from "@/assets/Photos/Portraits/Vondervic soft 4.jpg";
import portrait19 from "@/assets/Photos/Portraits/Vondervic soft 1.jpg";
import portrait20 from "@/assets/Photos/Portraits/Vondervic soft 3.jpg";

import event1 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 513.jpg";
import event2 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 492.jpg";
import event3 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 490.jpg";
import event4 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 441.jpg";
import event5 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 408.jpg";
import event6 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 403.jpg";
import event7 from "@/assets/Photos/Events/VERSO x Future School Festival 2024 426.jpg";
import event8 from "@/assets/Photos/Events/Park Hiyatt 88.jpg";
import event9 from "@/assets/Photos/Events/Park Hiyatt 41.jpg";
import event10 from "@/assets/Photos/Events/Park Hiyatt 45.jpg";
import event11 from "@/assets/Photos/Events/Park Hiyatt 23.jpg";
import event12 from "@/assets/Photos/Events/Park Hiyatt 9.jpg";
import event13 from "@/assets/Photos/Events/Park Hiyatt Event 284.jpg";
import event14 from "@/assets/Photos/Events/Park Hiyatt Event 293.jpg";
import event15 from "@/assets/Photos/Events/Park Hiyatt Event 259.jpg";
import event16 from "@/assets/Photos/Events/Park Hiyatt Event 192.jpg";
import event17 from "@/assets/Photos/Events/Park Hiyatt Event 181.jpg";
import event18 from "@/assets/Photos/Events/Park Hiyatt Event 155.jpg";
import event19 from "@/assets/Photos/Events/Park Hiyatt Event 125.jpg";
import event20 from "@/assets/Photos/Events/Park Hiyatt Event 27.jpg";
import event21 from "@/assets/Photos/Events/TIC First Meet 151.jpg";
import event22 from "@/assets/Photos/Events/TIC First Meet 186.jpg";
import event23 from "@/assets/Photos/Events/TIC First Meet 123.jpg";
import event24 from "@/assets/Photos/Events/TIC First Meet 96.jpg";
import event25 from "@/assets/Photos/Events/TIC First Meet 118.jpg";
import event26 from "@/assets/Photos/Events/TIC First Meet 42.jpg";
import event27 from "@/assets/Photos/Events/TIC First Meet 46.jpg";
import event28 from "@/assets/Photos/Events/TIC First Meet 23.jpg";
import event29 from "@/assets/Photos/Events/TIC First Meet 25.jpg";
import event30 from "@/assets/Photos/Events/TIC First Meet 15.jpg";
import event31 from "@/assets/Photos/Events/TIC First Meet 36.jpg";

import graduation1 from "@/assets/Photos/Graduations/Cloudy Sky.jpg";
import graduation2 from "@/assets/Photos/Graduations/IMG_7632.jpg";
import graduation4 from "@/assets/Photos/Graduations/IMG_7548.jpg";
import graduation6 from "@/assets/Photos/Graduations/IMG_4922 Enhanced NR.jpg";
import graduation7 from "@/assets/Photos/Graduations/IMG_4969 Enhanced NR.jpg";
import graduation8 from "@/assets/Photos/Graduations/IMG_4785.jpg";
import graduation9 from "@/assets/Photos/Graduations/IMG_4820.jpg";
import graduation10 from "@/assets/Photos/Graduations/IMG_4552.jpg";
import graduation11 from "@/assets/Photos/Graduations/IMG_4496.jpg";
import graduation12 from "@/assets/Photos/Graduations/IMG_4718.jpg";
import graduation13 from "@/assets/Photos/Graduations/IMG_3253.jpg";
import graduation14 from "@/assets/Photos/Graduations/IMG_3213.jpg";
import graduation15 from "@/assets/Photos/Graduations/IMG_2918.jpg";
import graduation16 from "@/assets/Photos/Graduations/IMG_3125.jpg";
import graduation17 from "@/assets/Photos/Graduations/IMG_2329.jpg";
import graduation18 from "@/assets/Photos/Graduations/IMG_1734.jpg";
import graduation19 from "@/assets/Photos/Graduations/IMG_1862.jpg";
import graduation20 from "@/assets/Photos/Graduations/IMG_1220.jpg";
import graduation21 from "@/assets/Photos/Graduations/IMG_0694 Enhanced NR.jpg";
import graduation22 from "@/assets/Photos/Graduations/IMG_0655.jpg";
import graduation23 from "@/assets/Photos/Graduations/IMG_0665.jpg";

import profilePic1 from "@/assets/Photos/Profile Pic/S__10739717.jpg";
import profilePic2 from "@/assets/Photos/Profile Pic/S__10739715.jpg";

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for each category
  const galleryImages = {
    editorial: [
      { src: editorial1, alt: "IMG_4379.jpg" },
      { src: editorial2, alt: "IMG_4383.jpg" },
      { src: editorial3, alt: "IMG_4354.jpg" },
      { src: editorial4, alt: "IMG_4358.jpg" },
      { src: editorial5, alt: "IMG_4338.jpg" },
      { src: editorial6, alt: "IMG_4314.jpg" },
      { src: editorial7, alt: "IMG_4266.jpg" },
      { src: editorial8, alt: "IMG_4289.jpg" },
      { src: editorial9, alt: "Green Fein 11.jpg" },
      { src: editorial10, alt: "Green Fein 14.jpg" },
      { src: editorial11, alt: "Green Fein 13.jpg" },
      { src: editorial12, alt: "Green Fein 8.jpg" },
      { src: editorial13, alt: "Green Fein 5.jpg" },
      { src: editorial14, alt: "Natural light shots 6.jpg" },
      { src: editorial15, alt: "Green Fein sideway 1.jpg" },
      { src: editorial16, alt: "Stare.jpg" },
      { src: editorial17, alt: "Blue light 3.jpg" },
      { src: editorial18, alt: "Natural light shots 3.jpg" },
      { src: editorial19, alt: "Blue light 4.jpg" },
      { src: editorial20, alt: "Blue light 5.jpg" },
    ],
    portraits: [
      { src: portrait1, alt: "IMG_8116.jpg" },
      { src: portrait2, alt: "IMG_8106.jpg" },
      { src: portrait3, alt: "IMG_8007.jpg" },
      { src: portrait4, alt: "IMG_7977.jpg" },
      { src: portrait5, alt: "IMG_7968.jpg" },
      { src: portrait6, alt: "IMG_7920.jpg" },
      { src: portrait7, alt: "IMG_7919.jpg" },
      { src: portrait8, alt: "IMG_7884.jpg" },
      { src: portrait9, alt: "IMG_7831.jpg" },
      { src: portrait10, alt: "IMG_7829.jpg" },
      { src: portrait11, alt: "IMG_7818.jpg" },
      { src: portrait12, alt: "Vondervic soft 12.jpg" },
      { src: portrait13, alt: "Vondervic soft 8.jpg" },
      { src: portrait14, alt: "Vondervic soft 10.jpg" },
      { src: portrait15, alt: "Vondervic soft book 3.jpg" },
      { src: portrait16, alt: "Vondervic soft 7.jpg" },
      { src: portrait17, alt: "Vondervic soft 5.jpg" },
      { src: portrait18, alt: "Vondervic soft 4.jpg" },
      { src: portrait19, alt: "Vondervic soft 1.jpg" },
      { src: portrait20, alt: "Vondervic soft 3.jpg" },
    ],
    events: [
      { src: event1, alt: "VERSO x Future School Festival 2024 513.jpg" },
      { src: event2, alt: "VERSO x Future School Festival 2024 492.jpg" },
      { src: event3, alt: "VERSO x Future School Festival 2024 490.jpg" },
      { src: event4, alt: "VERSO x Future School Festival 2024 441.jpg" },
      { src: event5, alt: "VERSO x Future School Festival 2024 408.jpg" },
      { src: event6, alt: "VERSO x Future School Festival 2024 403.jpg" },
      { src: event7, alt: "VERSO x Future School Festival 2024 426.jpg" },
      { src: event8, alt: "Park Hiyatt 88.jpg" },
      { src: event9, alt: "Park Hiyatt 41.jpg" },
      { src: event10, alt: "Park Hiyatt 45.jpg" },
      { src: event11, alt: "Park Hiyatt 23.jpg" },
      { src: event12, alt: "Park Hiyatt 9.jpg" },
      { src: event13, alt: "Park Hiyatt Event 284.jpg" },
      { src: event14, alt: "Park Hiyatt Event 293.jpg" },
      { src: event15, alt: "Park Hiyatt Event 259.jpg" },
      { src: event16, alt: "Park Hiyatt Event 192.jpg" },
      { src: event17, alt: "Park Hiyatt Event 181.jpg" },
      { src: event18, alt: "Park Hiyatt Event 155.jpg" },
      { src: event19, alt: "Park Hiyatt Event 125.jpg" },
      { src: event20, alt: "Park Hiyatt Event 27.jpg" },
      { src: event21, alt: "TIC First Meet 151.jpg" },
      { src: event22, alt: "TIC First Meet 186.jpg" },
      { src: event23, alt: "TIC First Meet 123.jpg" },
      { src: event24, alt: "TIC First Meet 96.jpg" },
      { src: event25, alt: "TIC First Meet 118.jpg" },
      { src: event26, alt: "TIC First Meet 42.jpg" },
      { src: event27, alt: "TIC First Meet 46.jpg" },
      { src: event28, alt: "TIC First Meet 23.jpg" },
      { src: event29, alt: "TIC First Meet 25.jpg" },
      { src: event30, alt: "TIC First Meet 15.jpg" },
      { src: event31, alt: "TIC First Meet 36.jpg" },
    ],
    graduations: [
      { src: graduation1, alt: "Cloudy Sky.jpg" },
      { src: graduation2, alt: "IMG_7632.jpg" },
      { src: graduation4, alt: "IMG_7548.jpg" },
      { src: graduation6, alt: "IMG_4922 Enhanced NR.jpg" },
      { src: graduation7, alt: "IMG_4969 Enhanced NR.jpg" },
      { src: graduation8, alt: "IMG_4785.jpg" },
      { src: graduation9, alt: "IMG_4820.jpg" },
      { src: graduation10, alt: "IMG_4552.jpg" },
      { src: graduation11, alt: "IMG_4496.jpg" },
      { src: graduation12, alt: "IMG_4718.jpg" },
      { src: graduation13, alt: "IMG_3253.jpg" },
      { src: graduation14, alt: "IMG_3213.jpg" },
      { src: graduation15, alt: "IMG_2918.jpg" },
      { src: graduation16, alt: "IMG_3125.jpg" },
      { src: graduation17, alt: "IMG_2329.jpg" },
      { src: graduation18, alt: "IMG_1734.jpg" },
      { src: graduation19, alt: "IMG_1862.jpg" },
      { src: graduation20, alt: "IMG_1220.jpg" },
      { src: graduation21, alt: "IMG_0694 Enhanced NR.jpg" },
      { src: graduation22, alt: "IMG_0655.jpg" },
      { src: graduation23, alt: "IMG_0665.jpg" },
    ],
    profilePic: [
      { src: profilePic1, alt: "S__10739717.jpg" },
      { src: profilePic2, alt: "S__10739715.jpg" },
    ],
  };

  const categoryTitles = {
    editorial: "Editorial Photography",
    portraits: "Portrait Photography",
    events: "Event Photography",
    graduations: "Graduation Photography",
    profilePic: "Profile Pictures",
  };

  const categoryDescriptions = {
    editorial: "Creative storytelling through fashion and lifestyle photography",
    portraits: "Intimate portraits that capture the essence and personality of each individual",
    events: "Documenting life's celebrations with candid and heartfelt moments",
    graduations: "Celebrating academic achievements and milestone moments",
    profilePic: "Professional and engaging profile pictures for all your needs",
  };

  const images = galleryImages[category as keyof typeof galleryImages] || [];
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Gallery";
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions] || "";

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-6">
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg elegant-shadow smooth-transition hover-shadow">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover smooth-transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </div>
  );
};

export default Gallery;
