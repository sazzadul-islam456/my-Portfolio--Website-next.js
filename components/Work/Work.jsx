import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimateedText";
import WorkItem from "./WorkItem";

// Sample data for projects with various categories
const data = [
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-1.png",
    title: "Luminex UI Kit",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-2.png",
    title: "Nebula Dashboard",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-3.png",
    title: "Velox App",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-4.png",
    title: "Quantum Portfolio",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-5.png",
    title: "Synergy App UI",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-6.png",
    title: "Apollo Travel Platform",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-7.png",
    title: "Horizon SaaS Dashboard",
  },
];

const Work = () => {
  // Extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // Create tab data with "all" category and unique categories
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // State to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");

  // Number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  // Load more items function
  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />

            {/* Render tab triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.category}
                  className="capitalize w-[120px]"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Render content for each tab */}
          {tabData.map((item) => {
            // Filter work dynamically based on selected tab
            const filteredData =
              item.category === "all"
                ? data
                : data.filter((work) => work.category === item.category);

            return (
              <TabsContent key={item.category} value={item.category}>
                <div className="grid gap-[30px] grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                  <AnimatePresence>
                    {filteredData
                      .slice(0, visibleItems)
                      .map((workItem, index) => (
                        <motion.div
                          key={index}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <WorkItem {...workItem} />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
                {/* load more button */}
                {visibleItems < filteredData.length && (
                  <div className="flex justify-center mt-12">
                    <button onClick={loadMoreItems} className="btn btn-accent">
                      Load More
                    </button>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
