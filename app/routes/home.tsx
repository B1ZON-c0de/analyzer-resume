import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";

import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ПрофРазбор" },
    { name: "description", content: "Умный помощник для работы вашей мечты" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Ослеживайте Ваши Заявки И Рейтинг Резюме</h1>
          <h2>
            Просмотрите свои заявки и оцените их с помощью искуственного
            интеллекта
          </h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
