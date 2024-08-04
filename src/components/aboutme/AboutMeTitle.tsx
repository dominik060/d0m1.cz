export default function AboutMeTitle({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl">
        Hello, I am{" "}
        <span className="text-nowrap">
          <span className="inline-block bg-gradient-hero-light bg-clip-text font-bold text-transparent underline duration-300 hover:-rotate-6 dark:bg-gradient-hero-dark">
            Dominik Bartuška
          </span>
          !
        </span>
      </h2>
    </div>
  );
}
