import { useEffect, useRef, useState } from "react";
import Output from "./Output";
import TerminalPrompt from "./TerminalPrompt";
import CommandNotFound from "./CommandNotFound";

export default function CommandPrompt() {
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const commandsArray = ["help", "socials"];

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, [formRef]);

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

  return (
    <div>
      {commandHistory.map((commandTyped, index) => {
        const validCommand = commandsArray.find(
          (command) => command === commandTyped
        );

        // Equivalent of if/else if/else
        return (
          <div key={`container-${index}`}>
            {!commandTyped ? (
              <TerminalPrompt command={""} />
            ) : validCommand ? (
              <>
                <TerminalPrompt command={commandTyped} />
                <Output commandTyped={commandTyped} />{" "}
              </>
            ) : (
              <>
                <TerminalPrompt command={commandTyped} />
                <CommandNotFound command={commandTyped} />
              </>
            )}
          </div>
        );
      })}
      <div className="mb-5">
        {/* I wouldn't put the Terminal Prompt component here because they have different properties*/}
        {/* I don't want to overload the TerminalPrompt Component with lots of props */}
        <form onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="command-prompt-input">
            <span className="text-yellow">visitor</span>
            <span className="text-white">@</span>
            <span className="text-green">tothefuture.dev</span>
            <span className="text-white">:~$</span>
          </label>
          <input
            type="text"
            id="command-prompt-input"
            onChange={handleChange}
            ref={inputRef}
            value={inputValue}
            className="bg-transparent outline-none text-green border-none pl-2"
          />
        </form>
      </div>
    </div>
  );
}
