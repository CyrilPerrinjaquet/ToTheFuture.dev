export default function Socials() {
  const socials = [
    { socialName: "Github", link: "https://github.com/CyrilPerrinjaquet" },
    {
      socialName: "Linkedin",
      link: "https://www.linkedin.com/in/cyril-perrinjaquet-a5517626a/",
    },
  ];

  return (
    <div className="dark:text-white text-black">
      <p className="mb-5">Here is my socials :</p>
      {socials.map(({ socialName, link }, index) => {
        return (
          <div
            key={`${socialName}-${index}`}
            className="grid grid-cols-2 max-w-sm smartphones:grid-cols-1 small-smartphones:grid-cols-1 small-smartphones:mb-5 smartphones:mb-5"
          >
            <span className="dark:text-green-dark-mode text-green-light-mode ">{socialName} :</span>
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
