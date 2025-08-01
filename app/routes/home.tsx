import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ПрофРазбор" },
    { name: "description", content: "Умный помощник для работы вашей мечты" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Ослеживайте Ваши Заявки И Рейтинг  Резюме</h1>
        <h2>Просмотрите свои заявки и оцените их с помощью искуственного интеллекта</h2>
      </div>
    </section>
  </main>;
}
