import Link from "next/link";
import { Mail, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl mb-3 text-primary">
            Dominik Bartuška
          </h1>
          <p className="opacity-70">
            Developer & Tech Enthusiast building amazing stuff
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:your.info@d0m1.cz"
            className="hover:text-accent  flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>email</span>
          </Link>

          <Link
            href="https://github.com/dominik060"
            className="hover:text-accent  flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>github</span>
          </Link>

          <Link href="/blog" className="hover:text-accent hover:underline">
            blog →
          </Link>
        </div>
      </div>
    </div>
  );
}
