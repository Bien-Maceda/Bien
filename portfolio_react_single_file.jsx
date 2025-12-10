import React from "react";

// Portfolio.jsx
// Single-file React component built with Tailwind CSS classes.
// Drop this component into a Create React App / Vite + React project with Tailwind configured.
// Edit the `user` object below to personalize content, images, links and projects.

const user = {
  name: "Your Name",
  title: "Frontend Developer • UI Enthusiast",
  location: "Manila, Philippines",
  email: "youremail@example.com",
  resume: "#", // link to resume file
  avatar: "https://via.placeholder.com/240x240.png?text=Your+Photo",
  about:
    "I build fast, accessible, and delightful web experiences. I specialize in React, modern CSS, and building design-driven UIs.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Accessibility", "UI/UX"],
  projects: [
    {
      id: 1,
      title: "Grading System (Sample)",
      description:
        "A full-stack senior high school grading system with role-based access, reporting, and responsive UI.",
      tech: ["React", "Express", "Postgres"],
      link: "#",
      repo: "#",
      image: "https://via.placeholder.com/600x360.png?text=Project+1",
    },
    {
      id: 2,
      title: "Green Glitter Video Background",
      description: "A short animated background video used for event promos and identity pieces.",
      tech: ["After Effects", "HTML5"],
      link: "#",
      repo: "#",
      image: "https://via.placeholder.com/600x360.png?text=Project+2",
    },
  ],
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover shadow" />
          <div>
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="text-sm text-slate-500">{user.title}</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href={user.resume} className="px-3 py-1 border rounded-md text-sm">Resume</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-6">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-extrabold leading-tight">
              Hi — I'm {user.name}.
              <br />
              {user.title}
            </h2>
            <p className="mt-4 text-slate-600 max-w-prose">{user.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border">
                View projects
              </a>
              <a href={`mailto:${user.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white">
                Contact me
              </a>
            </div>
          </div>

          <aside className="bg-white border p-4 rounded-2xl shadow-md">
            <h3 className="text-sm font-semibold text-slate-600">Quick Info</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li><strong>Location:</strong> {user.location}</li>
              <li><strong>Email:</strong> <a href={`mailto:${user.email}`} className="text-slate-600 underline">{user.email}</a></li>
              <li><strong>Skills:</strong> {user.skills.join(', ')}</li>
            </ul>
          </aside>
        </section>

        <section id="projects" className="mt-14">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Selected Projects</h3>
            <p className="text-sm text-slate-500">A few recent works — click to view.</p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {user.projects.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-slate-600 mt-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-slate-500">{p.tech.join(' • ')}</div>
                    <div className="flex gap-2">
                      <a href={p.repo} className="text-xs underline">Repo</a>
                      <a href={p.link} className="text-xs underline">Live</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-14 bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-bold">About</h3>
          <p className="mt-4 text-slate-600">{user.about} I love collaborating with designers and engineers to turn ideas into polished products. When I'm not coding, I enjoy photography and motion graphics.</p>

          <div className="mt-6">
            <h4 className="font-semibold">Skills & Tools</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.skills.map((s) => (
                <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-14">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="mt-2 text-slate-600">Interested in working together? Send me a message.</p>

            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your name" className="col-span-1 md:col-span-1 p-3 border rounded-md" />
              <input placeholder="Your email" className="col-span-1 md:col-span-1 p-3 border rounded-md" />
              <textarea placeholder="Message" className="col-span-1 md:col-span-2 p-3 border rounded-md h-28" />
              <div className="col-span-1 md:col-span-2 flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Send message</button>
                <a href={`mailto:${user.email}`} className="text-sm underline">Or email me directly</a>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {user.name}. Built with React + Tailwind.
        </footer>
      </main>

      <style>{`
        /* Small utility: keep max width for prose */
        .max-w-prose { max-width: 65ch; }
      `}</style>
    </div>
  );
}
