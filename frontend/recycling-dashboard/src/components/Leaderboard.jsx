// import React from "react";

// import { Table, Title } from "@mantine/core";

// const leaderboard = [
//   { rank: 1, name: "Amit Sharma", score: 27 },
//   { rank: 2, name: "Rahul Verma", score: 25 },
//   { rank: 3, name: "Sneha Patel", score: 24 }
// ];

// export default function Leaderboard() {
//   return (
//     <>
//       <Title order={3} mb="sm">Top Candidates</Title>
//       <Table striped highlightOnHover>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Name</th>
//             <th>Total Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboard.map(row => (
//             <tr key={row.rank}>
//               <td>{row.rank}</td>
//               <td>{row.name}</td>
//               <td>{row.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// }







import React from "react";
import { Table, Title, Badge } from "@mantine/core";
import data from "../data/candidates.json";

const rankedCandidates = data
  .map(c => ({
    ...c,
    total:
      c.scores.crisis +
      c.scores.sustainability +
      c.scores.motivation
  }))
  .sort((a, b) => b.total - a.total)
  .slice(0, 10);

export default function Leaderboard() {
  return (
    <>
      <Title order={3} mb="sm">🏆 Top Candidates</Title>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rankedCandidates.map((c, i) => (
            <tr key={c.id}>
              <td>{i + 1}</td>
              <td>{c.name}</td>
              <td>{c.total}</td>
              <td>
                <Badge color={c.total >= 25 ? "green" : "yellow"}>
                  {c.total >= 25 ? "Strong Hire" : "Review"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
