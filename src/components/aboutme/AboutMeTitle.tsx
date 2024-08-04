export default function AboutMeTitle({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl">
        Hello, I am{" "}
        <span className="text-nowrap">
          <span className="bg-gradient-blue-light dark:bg-gradient-blue-dark inline-block bg-clip-text font-bold text-transparent underline duration-300 hover:-rotate-6">
            Dominik Bartuška
          </span>
          !
        </span>
      </h2>
    </div>
  );
}
