import CountUp from "react-countup";   

const StatsItem = ({ countNum, countText, text, className }) => {
  return (
    <div className={`text-center font-primary ${className}`}>
        <div className="text-[30px] sm:text-[32px] md:text-[35px] xl:text-[40px] text-accent mb-2 sm:mb-3 md:mb-4">
            <CountUp end={countNum} delay={2.4} duration={6} />
            <span>{countText}</span>
        </div>
        <p className="text-[14px] sm:text-[14px] md:text-[16px] xl:text-[18px]">{text}</p>
    </div>
  );
};

export default StatsItem;