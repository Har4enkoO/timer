import { Timer } from "./components/Timer";

export const App = () => {
  return <Timer seconds={5} autostart={true} step={1000} />;
};
