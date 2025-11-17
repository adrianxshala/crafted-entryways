import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import doorModern from "@/assets/door-modern.jpg";
import doorClassic from "@/assets/door-classic.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorRustic from "@/assets/door-rustic.jpg";
import doorFrench from "@/assets/door-french.jpg";

const DoorSlider = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  const doors = [
    {
      id: 1,
      name: "Modern Minimalistisch",
      image: doorModern,
    },
    {
      id: 2,
      name: "Klassische Eiche",
      image: doorClassic,
    },
    {
      id: 3,
      name: "Zeitgenössisches Glas",
      image: doorGlass,
    },
    {
      id: 4,
      name: "Rustikale Scheune",
      image: doorRustic,
    },
    {
      id: 5,
      name: "Französische Türen",
      image: doorFrench,
    },
  ];

  // Calculate if loop should be enabled based on number of slides
  // Loop requires at least slidesPerView * 2 slides to work properly
  const minSlidesForLoop = 4; // Maximum slidesPerView in breakpoints
  const shouldLoop = doors.length >= minSlidesForLoop * 2;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
      className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
            Unsere Meisterwerke
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light">
            Entdecken Sie unsere handgefertigten Türen - jede einzigartig und
            perfekt
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            navigation={true}
            loop={shouldLoop}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            className="door-swiper"
          >
            {doors.map((door, index) => (
              <SwiperSlide key={door.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <motion.div
                    className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-muted/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={door.image}
                      alt={door.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                  <motion.div
                    className="mt-4 text-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-foreground font-medium text-base sm:text-lg transition-colors duration-300 group-hover:text-primary">
                      {door.name}
                    </h3>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Swiper Styles - Apple Design */}
        <style>{`
          .door-swiper {
            padding: 0 0 60px 0 !important;
          }
          
          .door-swiper .swiper-button-next,
          .door-swiper .swiper-button-prev {
            color: hsl(var(--foreground)) !important;
            background: hsl(var(--background)) !important;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04) !important;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
            opacity: 0.7 !important;
          }
          
          .door-swiper:hover .swiper-button-next,
          .door-swiper:hover .swiper-button-prev {
            opacity: 1 !important;
          }
          
          .door-swiper .swiper-button-next:hover,
          .door-swiper .swiper-button-prev:hover {
            background: hsl(var(--foreground)) !important;
            color: hsl(var(--background)) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
            transform: scale(1.05) !important;
          }
          
          .door-swiper .swiper-button-next::after,
          .door-swiper .swiper-button-prev::after {
            font-size: 14px !important;
            font-weight: 600 !important;
          }
          
          .door-swiper .swiper-pagination-bullet {
            background: hsl(var(--foreground)) !important;
            opacity: 0.2 !important;
            width: 6px !important;
            height: 6px !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            margin: 0 4px !important;
          }
          
          .door-swiper .swiper-pagination-bullet-active {
            opacity: 0.6 !important;
            width: 24px !important;
            border-radius: 3px !important;
            background: hsl(var(--foreground)) !important;
          }
          
          .door-swiper .swiper-pagination {
            bottom: 0 !important;
          }
          
          .door-swiper .swiper-slide {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          
          @media (max-width: 768px) {
            .door-swiper .swiper-button-next,
            .door-swiper .swiper-button-prev {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </motion.section>
  );
});

DoorSlider.displayName = "DoorSlider";

export default DoorSlider;
