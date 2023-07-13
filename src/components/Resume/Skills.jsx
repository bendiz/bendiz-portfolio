import Experiences from './Experiences.json';

export default function Skills() {
  let skillList = Object.entries(Experiences.skills).map((skill) => {
    const skillCategory = skill[0][0].toUpperCase().concat(skill[0].slice(1));
    return (
      <ul>
        <h4>{skillCategory}</h4>
        {skill[1].map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    );
  });

  return (
    <section className="Skills">
      <h3>Skills and Strengths</h3>
      {skillList}
    </section>
  );
}
