// app/components/About.tsx
import TechStackItem from "@/components/TechStackItem";
import { CONTACT_INFO, EXPERIENCES, techStack } from "@/lib/static";

export const About = () => {
  return (
    <section className="min-h-screen mt-10 bg-black text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>

        <div className="space-y-6 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 shadow-md">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m Charles Obiora, a passionate software developer who loves
            turning ideas into functional, creative solutions. My journey into
            tech has been anything but linear, and that&apos;s what makes it
            unique.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I started as a graphics designer, drawn to the art of visual
            storytelling. But during my university days, curiosity pulled me
            towards coding. Unlike most who begin with web development, I dove
            straight into app development, fascinated by how software shapes
            user experiences.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            As I grew in the field, my interest expanded beyond just building
            interfaces. I became curious about how things work behind the
            scenes, which sparked my exploration of backend development.
            Eventually, I embraced web development, blending these skills to
            create seamless, user-centric applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Today, I focus on building mobile and web applications, continuously
            learning and pushing my boundaries to deliver efficient, scalable,
            and creative solutions. I’m driven by curiosity, a passion for clean
            code, and the thrill of solving real-world problems through
            technology.
          </p>
        </div>

        <div className="mt-12 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 shadow-md">
          <h1 className="font-semibold text-2xl mb-4 text-white border-b border-gray-700 pb-2">
            Experience
          </h1>
          <ul className="space-y-4">
            {EXPERIENCES.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start justify-between py-4 border-b border-gray-700 last:border-b-0 transition-all duration-300 px-2 rounded-md"
              >
                <section>
                  <p className="text-white font-medium">{item.role}</p>
                  <h3 className="max-w-md text-gray-400 text-sm">
                    {item.description}
                  </h3>
                </section>
                <section>
                  <p className="text-gray-500 text-sm">{item.duration}</p>
                </section>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((stack, idx) => (
              <TechStackItem key={idx} icon={stack.icon} text={stack.text} />
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-12">
          {CONTACT_INFO.map((info, idx) => (
            <a
              key={idx}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
