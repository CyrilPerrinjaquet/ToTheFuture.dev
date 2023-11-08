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
      <p className="mb-5">Here is my socials :</p>
      {socials.map(({ socialName, link }, index) => {
        return (
          <div
            key={`${socialName}-${index}`}
            className="grid grid-cols-2 max-w-sm"
          >
            <span className="text-green">{socialName}</span>
            <span>
              <a href={link} target="_blank" rel="noreferrer" className="hover:text-hover-color">
                {socialName}/CyrilPerrinjaquet
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
}
