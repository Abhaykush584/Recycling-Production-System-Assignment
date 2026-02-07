import { faker } from '@faker-js/faker';
import fs from 'fs';

const skillsPool = [
  "Lean Manufacturing",
  "Waste Management",
  "Safety Compliance",
  "Team Leadership",
  "Process Optimization",
  "Sustainability Practices"
];

let sql = "";

for (let i = 0; i < 40; i++) {
  const name = faker.person.fullName();
  const experience = faker.number.int({ min: 2, max: 15 });
  const skills = faker.helpers.arrayElements(skillsPool, 3).join(", ");

  sql += `INSERT INTO candidates (name, experience_years, skills)
VALUES ('${name}', ${experience}, '${skills}');\n`;
}

fs.writeFileSync("sample_candidates.sql", sql);
console.log("✅ 40 candidates generated");
