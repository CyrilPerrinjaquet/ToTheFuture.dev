export default function Help() {
  const commandsExecutableAndDescription = [
    { commandName: "help", description: "If you're lost" },
    { commandName: "whois", description: "Who is Cyril ?" },
    { commandName: "whoami", description: "Who are you ?" },
    { commandName: "socials", description: "View socials" },
    { commandName: "banner", description: "Display banner" },
    { commandName: "clear", description: "Clear the terminal" },
    { commandName: "sudo", description: "Become admin" },
  ];

  return (
    <>
      {commandsExecutableAndDescription.map(
        ({ commandName, description }, index) => {
          return (
            <div
              key={`${commandName}-${index}`}
              className="dark:text-white text-black grid grid-cols-2 max-w-sm"
            >
              <span className="dark:text-green-dark-mode text-green-light-mode">
                {commandName}
              </span>
              <span>- {description}</span>
            </div>
          );
        }
      )}
    </>
  );
}
