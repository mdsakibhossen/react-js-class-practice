import React from 'react'

const SkillsAndInterests = ({ skillsOrInterests,title }) => {

  return (
    <div className="SkillsAndInterests">
      <h3>{title}</h3>
      <ul>
        {skillsOrInterests.map(item=>(
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsAndInterests