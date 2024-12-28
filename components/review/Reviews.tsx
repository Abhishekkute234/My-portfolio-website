import DotPattern from "../ui/dot-pattern";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section id="team" className="relative py-24">
      <div className="z-10 flex flex-col px-6 md:items-center md:justify-center">
        <h3 className="h3-bold">Team </h3>
      </div>

      <ReviewCard />

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};
export default Reviews;
