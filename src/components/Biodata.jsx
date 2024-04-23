import React from "react";
import SkillsAndInterests from "./SkillsAndInterests";
import SocialInfos from "./SocialInfos";

const Biodata = ({ person }) => {
  const { id, name, age, email, phone, skills, interests, socialLinks } =
    person;

  return (
    <div className="BioData">
      <h2>Biodata of {name}</h2>
      <ul>
        {Object.keys(person).map((key) => {
          if (key === "skills") {
            return (
              <SkillsAndInterests
                key={key}
                skillsOrInterests={person[key]}
                title="Skills"
              />
            );
          } else if (key === "interests") {
            return (
              <SkillsAndInterests
                key={key}
                skillsOrInterests={person[key]}
                title="Interests"
              />
            );
          } else if (key === "socialLinks") {
            return <SocialInfos key={key} socialLinks={person[key]} />;
          } else {
            return (
              <li key={key}>
                <strong>{key.toUpperCase()}: </strong> {person[key]}{" "}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Biodata;
