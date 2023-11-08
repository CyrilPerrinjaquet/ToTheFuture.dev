export default function Socials() {
  const socials = [
    { socialName: "github", link: "https://github.com/CyrilPerrinjaquet" },
    {
      socialName: "linkedin",
      link: "https://www.linkedin.com/in/cyril-perrinjaquet-a5517626a/",
    },
  ];

  return (
    <div className="text-white">
      Here is my socials :
      {socials.map(({ socialName, link }, index) => {
        return (
          <div
            key={`${socialName}-${index}`}
            className="grid grid-cols-2 max-w-xs"
          >
            <span className="text-green">{socialName}</span>
            <span>
              <a href={link}>{socialName}/CyrilPerrinjaquet</a>
            </span>
          </div>
        );
      })}
    </div>
  );
}
