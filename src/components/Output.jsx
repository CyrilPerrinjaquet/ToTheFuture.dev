/* eslint-disable react/prop-types */
import Socials from "./Socials";
import Help from "./Help";

export default function Output({ commandTyped }) {
  return (
    // TODO Increase the font size
    <div className="mb-5">
      {{ help: <Help />, socials: <Socials /> }[commandTyped]}
    </div>
  );
}
