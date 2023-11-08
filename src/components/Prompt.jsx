/* eslint-disable react/prop-types */
export default function TerminalPrompt({ command }) {
  return (
    <div className="mb-5">
      <label htmlFor="command-prompt-input">
        <span className="text-yellow">visitor</span>
        <span className="text-white">@</span>
        <span className="text-blue">tothefuture.dev</span>
        <span className="text-white">:~$</span>
      </label>
      <input
        type="text"
        disabled
        value={command}
        className="bg-transparent text-green outline-none border-none pl-2"
      />
    </div>
  );
}
