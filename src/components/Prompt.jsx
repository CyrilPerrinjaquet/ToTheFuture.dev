/* eslint-disable react/prop-types */
export default function Prompt({ command }) {
  return (
    <div className="mb-5">
      <label htmlFor="command-prompt-input">
        <span className="text-yellow">visitor</span>
        <span className="text-white">@</span>
        <span className="text-blue">tothefuture</span>
        <span className="text-white">:~$</span>
      </label>
      <input
        type="text"
        disabled
        value={command}
        className="bg-transparent text-green outline-none border-none desktop:pl-2 laptop:pl-2 smartphones:w-16 smartphones:pl-2 small-smartphones:pl-0"
      />
    </div>
  );
}
