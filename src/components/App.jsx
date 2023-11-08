import Banner from "./Banner";
import CommandPrompt from "./CommandPrompt";

function App() {
  return (
    <div className="ml-4 smartphones:mt-5">
      <Banner />
      <p className="text-white mb-2">
        Welcome to my website terminal, serving as a linktree/portfolio.
      </p>
      <p className="text-white mb-5">
        Feel free to contact me, for more informations type{" "}
        <span className="text-green">`help`</span>
      </p>
      <CommandPrompt />
    </div>
  );
}

export default App;
