import { useEffect, useRef, useState } from "react";
import Output from "./Output";
import Prompt from "./Prompt";
import CommandNotFound from "./CommandNotFound";

export default function CommandPrompt() {
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const commandsArray = [
    "help",
    "socials",
    "whois",
    "whoami",
    "banner",
    "sudo"
  ];

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, [containerRef]);


  useEffect(() => {
    window.onload = handleDocumentClick;
  })

  useEffect(() => {
    // Omit the first command because it is usually not necessary and in most cases : 'help'
    if (commandHistory.length > 1) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  const handleDocumentClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommandHistory([...commandHistory, inputValue]);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearTerminal = () => {
    const commandHistoryCopy = [...commandHistory];
    for (let i = 0; i < commandHistoryCopy.length; i++) {
      commandHistoryCopy.shift();
    }
    setCommandHistory([...commandHistoryCopy]);
  };

  return (
    <div>
      {commandHistory.map((commandTyped, index) => {
        commandTyped = commandTyped.toLowerCase().trim();
        const validCommand = commandsArray.find(
          (command) => command === commandTyped
        );

        return commandTyped === "clear" ? (
          clearTerminal(index)
        ) : (
          <div key={`container-${index}`}>
            {!commandTyped ? (
              <Prompt command={""} />
            ) : validCommand ? (
              <Output commandTyped={commandTyped} />
            ) : (
              <CommandNotFound command={commandTyped} />
            )}
          </div>
        );
      })}
      <div className="mb-5" ref={containerRef}>
        {/* I wouldn't put the Terminal Prompt component here because they have different properties*/}
        {/* I don't want to overload the TerminalPrompt Component with lots of props */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="command-prompt-input">
            <span className="dark:text-orange text-pink">visitor</span>
            <span className="dark:text-white text-black">@</span>
            <span className="dark:text-blue-dark-mode text-blue-light-mode">
              tothefuture
            </span>
            <span className="dark:text-white text-black">:~$</span>
          </label>
          <input
            type="text"
            id="command-prompt-input"
            onChange={handleChange}
            ref={inputRef}
            value={inputValue}
            className="bg-transparent outline-none dark:text-green-dark-mode text-green-light-mode border-none desktop:pl-2 laptop:pl-2 smartphones:w-24 smartphones:pl-2 small-smartphones:pl-0"
          />
        </form>
      </div>
    </div>
  );
}
