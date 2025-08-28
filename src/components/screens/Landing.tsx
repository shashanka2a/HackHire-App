import { AppHeader } from "../AppHeader";
import { Hero } from "../Hero";
import { ProblemSolution } from "../ProblemSolution";
import { Features } from "../Features";
import { Testimonials } from "../Testimonials";
import { Footer } from "../Footer";
import { RouterContext } from "../Router";

interface LandingProps extends RouterContext {}

export function Landing(props: LandingProps) {
  return (
    <>
      <AppHeader {...props} />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}