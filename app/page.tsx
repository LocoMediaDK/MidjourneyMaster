/**
 * Homepage for MJkursus.dk
 * Landing page with course introduction and call-to-action.
 */

import Link from "next/link";
import { curriculum, getTotalLessonCount } from "@/data/curriculum";

export default function Home() {
  const totalLessons = getTotalLessonCount();
  const totalModules = curriculum.modules.length;

  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-base-200 to-base-300">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Lær Midjourney fra bunden
            </h1>
            <p className="text-xl mb-8 text-base-content/80">
              Det komplette kursus i Midjourney. Lær at skabe fantastiske 
              AI-genererede billeder - fra helt nybegynder til avanceret bruger.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/kursus" className="btn btn-primary btn-lg">
                Start kurset
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </div>
              <div className="stat-title">Moduler</div>
              <div className="stat-value text-primary">{totalModules}</div>
              <div className="stat-desc">Fra begynder til ekspert</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
              <div className="stat-title">Lektioner</div>
              <div className="stat-value text-secondary">{totalLessons}</div>
              <div className="stat-desc">Video og tekst</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <div className="stat-title">Adgang</div>
              <div className="stat-value text-accent">∞</div>
              <div className="stat-desc">Livstidsadgang</div>
            </div>
          </div>
        </div>
      </section>

      {/* Module overview section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hvad du lærer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.modules.map((module, index) => (
              <div key={module.slug} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="badge badge-primary badge-outline mb-2">
                    Modul {index + 1}
                  </div>
                  <h3 className="card-title">{module.title}</h3>
                  <p className="text-base-content/70">
                    {module.description || `${module.lessons.length} lektioner`}
                  </p>
                  <div className="text-sm text-base-content/50 mt-2">
                    {module.lessons.length} lektioner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klar til at komme i gang?
          </h2>
          <p className="text-lg text-base-content/70 mb-8">
            Start din rejse ind i AI-kunstens verden i dag.
          </p>
          <Link
            href="/kursus/introduktion-til-midjourney/velkommen"
            className="btn btn-primary btn-lg"
          >
            Start første lektion
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold">MJkursus.dk</p>
          <p>Lær at skabe fantastiske AI-billeder med Midjourney</p>
          <p className="text-sm text-base-content/50">
            © {new Date().getFullYear()} - Alle rettigheder forbeholdes
          </p>
        </div>
      </footer>
    </div>
  );
}
