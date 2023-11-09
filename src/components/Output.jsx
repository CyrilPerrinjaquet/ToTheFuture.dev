/* eslint-disable react/prop-types */
import Socials from "./Socials";
import Help from "./Help";
import Email from "./Email";
import Prompt from "./Prompt";

export default function Output({ commandTyped }) {
  return (
    <div className="mb-5">
      <Prompt command={commandTyped} />
      {
        {
          help: <Help />,
          socials: <Socials />,
          email: <Email />,
        }[commandTyped]
      }
    </div>
  );
}
