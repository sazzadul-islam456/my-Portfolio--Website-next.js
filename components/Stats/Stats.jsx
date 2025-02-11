import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 2,
    endCountText: "+",
    text: "Yrs of Experience",
  },
  {
    endCountNum: 100,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Clients Satisfied",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-8">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            key={index} // ✅ Added key to prevent React warnings
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
          />
        );
      })}
    </section>
  );
};

export default Stats;
