import Home from "../../pages/Home";
import Container from "./Container";

const HomeContainer = () => {
  return (
    <div className="relative pt-6 pb-6 lg:pb-24 lg:max-h-screen bg-slate-300 dark:bg-slate-800 dark:bg-grid-8-s-1-slate-700 bg-grid-8-s-1-slate-400/30">

      <div
        className="absolute h-screen top-0 w-full"
        style={{
          background: `
            radial-gradient(
              circle,
              ${window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "rgba(71, 85, 105, 0.6) 60%, rgba(15, 23, 42, 0) 100%"
            : "rgba(203, 213, 225, 0.6) 60%, rgba(0, 0, 0, 0) 100%"
          }
            )
          `,
        }}
      ></div>

      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default HomeContainer;
