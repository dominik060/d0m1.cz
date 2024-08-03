export default function AboutMeParagraph({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-center text-base">
        I'm student from Czechia, I make websites, develop android apps, fly fpv
        drones and do some photography.
        <br />
        You can contact me via email and look at some of my work on GitHub.
      </p>
    </div>
  );
}
