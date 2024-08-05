export default function AboutMeParagraph({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <article className="flex flex-col gap-4 text-justify text-base md:gap-8 md:text-xl">
        <p>
          I'm a student from Czechia with a love for all things tech and active!
          I enjoy creating websites, developing Android apps, and flying FPV
          drones. Photography is another passion of mine, capturing moments that
          tell a story. When I'm not behind a screen, you'll find me staying
          active with sports and hitting the gym. Fitness is a big part of my
          life, keeping me energized and focused.
        </p>

        <p>
          Feel free to reach out via email, and check out some of my projects on
          GitHub. I'm always excited to connect and collaborate with like-minded
          individuals.
        </p>

        <p>Take care, Dominik Bartuška</p>
      </article>
    </div>
  );
}
