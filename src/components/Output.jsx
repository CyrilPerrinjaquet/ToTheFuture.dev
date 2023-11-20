/* eslint-disable react/prop-types */
import Socials from "./Commands/Socials";
import Help from "./Commands/Help";
import Email from "./Commands/Email";
import Prompt from "./Prompt";
import Whois from "./Commands/Whois";
import Whoami from "./Commands/Whoami";
import Banner from "./Commands/Banner";
import Exit from "./Commands/Exit";

export default function Output({ commandTyped }) {
  return (
    <div className="mb-5">
      <Prompt command={commandTyped} />
      {
        {
          help: <Help />,
          socials: <Socials />,
          email: <Email />,
          whois: <Whois />,
          whoami: <Whoami />,
          banner: <Banner />,
          exit: <Exit />
        }[commandTyped]
      }
    </div>
  );
}
