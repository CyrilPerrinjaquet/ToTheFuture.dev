/* eslint-disable react/prop-types */
import Prompt from "./Prompt";

export default function CommandNotFound({ command }) {
  return (
    <>
      <Prompt command={command} />
      <div className="dark:text-white text-black mb-5">
        Command not found : <span className="text-red-600">{command}</span>
        <p>
          Type{" "}
          <span className="dark:text-green-dark-mode text-green-light-mode">
            `help`
          </span>{" "}
          for available commands
        </p>
      </div>
    </>
  );
}
