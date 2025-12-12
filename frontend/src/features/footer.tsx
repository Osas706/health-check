import {
  Facebook,
  FileText,
  Github,
  Instagram,
  Linkedin,
  ScanHeart,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-10 bg-slate-900 text-white/70">
      <h1 className="text-2xl font-bold text-yellow-300 flex items-center ">
           Health
          <span className="flex items-center text-red-600">
            Check <ScanHeart size={20} className="" />
          </span>
      </h1>
            <span className="text-xs mt-2 text-center">The content available on HealthCheck is not a substitute for professional medical advice, diagnosis, or treatment.</span>

      <p className="mt-2 text-center">
        Copyright © 2025 Health Check. All rights reserved.
      </p>



      <div className="flex items-center gap-4 mt-5">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <Facebook />
        </a>

        <a
          href="https://www.instagram.com/iiam.winner?igsh=MTh3ODFwcjBlZWFnZQ%3D%3D&utm_source=qr"
          target="_blank"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <Instagram />
        </a>

        <a
          href="https://www.linkedin.com/in/winner-omoregie-035178299"
          target="_blank"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/Osas706"
          target="_blank"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <Github />
        </a>
      </div>
    </footer>
  );
}

export default Footer;