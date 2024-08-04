export default function AboutMeParagraph({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-center text-base md:text-xl">
        I'm a student from Czechia with a love for all things tech and active! I
        enjoy creating websites, developing Android apps, and flying FPV drones.
        Photography is another passion of mine, capturing moments that tell a
        story. When I'm not behind a screen, you'll find me staying active with
        sports and hitting the gym. Fitness is a big part of my life, keeping me
        energized and focused.
        <br />
        Feel free to reach out via email, and check out some of my projects on
        GitHub. I'm always excited to connect and collaborate with like-minded
        individuals.
        <br />
        Take care, Dominik Bartuška
      </p>
    </div>
  );
}
