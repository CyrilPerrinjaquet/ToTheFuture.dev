export default function History({ commandHistory }) {
  return (
    <>
      {commandHistory.map((command) => (
        <div>
          <p className="dark:text-white text-black">{command}</p>
        </div>
      ))}
    </>
  );
}
