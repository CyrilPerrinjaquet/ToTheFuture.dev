/* eslint-disable react/prop-types */
import Socials from "./Socials";
import Help from "./Help";
import Email from "./Email";
import Prompt from "./Prompt";
import Whois from "./Whois";
import Whoami from "./Whoami";

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
          whoami: <Whoami />
        }[commandTyped]
      }
    </div>
  );
}
