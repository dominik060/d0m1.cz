export default function AboutMeTitle({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-4xl text-center">
        Hello, I am{" "}
        <span className="inline-block bg-gradient-apple bg-clip-text font-bold text-transparent underline duration-300 hover:-rotate-6">
          Dominik Bartuška
        </span>
        !
      </h2>
    </div>
  );
}
