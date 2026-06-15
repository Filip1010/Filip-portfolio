"use client";

import { useState } from "react";
import { FaLocationArrow, FaXmark, FaLock, FaFlask } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

type Project = (typeof projects)[number];

const CONCEPT_IDS = new Set([11, 12, 13, 14, 15]);
const TESTING_IDS = new Set([10]);

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Badge = ({ type }: { type: "concept" | "testing" }) => {
  if (type === "testing") {
    return (
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
        style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5" }}>
        <FaFlask size={9} />
        Testing
      </div>
    );
  }
  return (
    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
      style={{ background: "rgba(203,172,249,0.15)", border: "1px solid rgba(203,172,249,0.3)", color: "#CBACF9" }}>
      <FaLock size={9} />
      Concept
    </div>
  );
};

const RecentProjects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const isConcept = selected ? CONCEPT_IDS.has(selected.id) : false;
  const isTesting = selected ? TESTING_IDS.has(selected.id) : false;
  const hasLink = !!(selected?.link) && !isConcept;

  return (
    <div id="projects" className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="heading relative z-10 text-xl md:text-3xl"
      >
        A small selection of{" "}
        <span className="text-purple inline-block">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <PinContainer title="Powered by Filip">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
                {CONCEPT_IDS.has(item.id) && <Badge type="concept" />}
                {TESTING_IDS.has(item.id) && <Badge type="testing" />}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #0d1024 0%, #0a0d1e 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(203,172,249,0.06)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* image header */}
              <div className="relative w-full h-52 lg:h-64 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0" style={{ backgroundColor: "#0d1124" }}>
                  <img src="/bg.png" alt="bg" className="w-full h-full object-cover opacity-25" />
                </div>
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="absolute inset-0 m-auto max-h-full max-w-full object-contain z-10 p-6"
                />
                {/* gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 z-20"
                  style={{ background: "linear-gradient(to bottom, transparent, #0d1024)" }} />

                {isConcept && (
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                    style={{ background: "rgba(203,172,249,0.15)", border: "1px solid rgba(203,172,249,0.3)", color: "#CBACF9" }}>
                    <FaLock size={10} /> Concept Project
                  </div>
                )}
                {isTesting && (
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                    style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.45)", color: "#fca5a5" }}>
                    <FaFlask size={10} /> Personal Testing
                  </div>
                )}
              </div>

              {/* close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-30 flex items-center justify-center rounded-full p-2 transition"
                style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
                onClick={() => setSelected(null)}
              >
                <FaXmark size={15} />
              </motion.button>

              {/* content */}
              <div className="px-7 pb-8 pt-4">
                <h2 className="font-bold text-2xl lg:text-3xl mb-3 leading-tight">
                  {selected.title}
                </h2>

                <p className="text-sm lg:text-[15px] font-light leading-relaxed mb-6"
                  style={{ color: "#BEC1DD" }}>
                  {selected.des}
                </p>

                {/* tech stack */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Tech Stack
                </p>
                <div className="flex items-center gap-1 mb-8">
                  {selected.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.15] rounded-full bg-black/60 lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center"
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {hasLink ? (
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open(selected!.link, "_blank")}
                    className="flex items-center gap-3 font-semibold py-3 px-7 rounded-full text-sm"
                    style={{
                      background: "linear-gradient(135deg, #CBACF9 0%, #818cf8 100%)",
                      color: "#0a0d1e",
                      boxShadow: "0 4px 20px rgba(203,172,249,0.3)",
                    }}
                  >
                    Check Live Site
                    <FaLocationArrow size={13} />
                  </motion.button>
                ) : (
                  <div className="flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium w-fit"
                    style={{ background: "rgba(203,172,249,0.08)", border: "1px solid rgba(203,172,249,0.2)", color: "#CBACF9" }}>
                    <FaLock size={13} />
                    Private / Concept — Not publicly deployed
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentProjects;
