/* eslint-disable react/prop-types */
import Prompt from "./Prompt";

export default function CommandNotFound({ command }) {
  return (
    <>
      <Prompt command={command} />
      <div className="text-white mb-5">
        Command not found : <span className="text-red-600">{command}</span>
        <p>
          Type <span className="text-green">`help`</span> for available commands
        </p>
      </div>
    </>
  );
}
