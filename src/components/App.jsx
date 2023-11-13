import Header from "./Header";
import Terminal from "./Terminal";

function App() {
  return (
    <div className="ml-4 smartphones:mt-5">
      <Header />
      <p className="text-white mb-2">
        Welcome to my website terminal, serving as a linktree/portfolio.
      </p>
      <p className="text-white mb-5">
        Feel free to contact me, for more informations type{" "}
        <span className="text-green">`help`</span>
      </p>
      <Terminal />
    </div>
  );
}

export default App;
