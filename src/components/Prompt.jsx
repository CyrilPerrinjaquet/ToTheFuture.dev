/* eslint-disable react/prop-types */
export default function Prompt({ command }) {
  return (
    <div className="mb-5">
      <label htmlFor="command-prompt-input">
        <span className="dark:text-orange text-pink">visitor</span>
        <span className="dark:text-white text-black">@</span>
        <span className="dark:text-blue-dark-mode text-blue-light-mode">tothefuture</span>
        <span className="dark:text-white text-black">:~$</span>
      </label>
      <input
        type="text"
        disabled
        id="command-prompt-input"
        value={command}
        className="bg-transparent dark:text-green-dark-mode text-green-light-mode outline-none border-none desktop:pl-2 laptop:pl-2 smartphones:w-16 smartphones:pl-2 small-smartphones:pl-0"
      />
    </div>
  );
}
