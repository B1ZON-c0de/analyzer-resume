import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export const meta = () => [
  { title: "ПрофРазбор | Аутентификация" },
  { name: "description", content: "Вход в аккаунт" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Добро Пожаловать!</h1>
            <h2>Войдите чтобы начать</h2>
          </div>
          {isLoading ? (
            <button className="auth-button animate-pulse">
              <p>Выполняется вход...</p>
            </button>
          ) : (
            <>
              {auth.isAuthenticated ? (
                <button className="auth-button" onClick={auth.signOut}>
                  <p>Выйти</p>
                </button>
              ) : (
                <button className="auth-button" onClick={auth.signIn}>
                  <p>Войти</p>
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};
export default Auth;
