import Header from "./Header";
import Terminal from "./Terminal";

function App() {
  return (
    <div className="ml-4 smartphones:mt-5">
      <Header />
      <p className="dark:text-white text-black mb-2">
        Welcome to my {`website's`} terminal, serving as a linktree/portfolio.
      </p>
      <p className="dark:text-white text-black mb-5">
        Feel free to contact me, for more information type{" "}
        <span className="dark:text-green-dark-mode text-green-light-mode">`help`</span>
      </p>
      <Terminal />
    </div>
  );
}

export default App;
