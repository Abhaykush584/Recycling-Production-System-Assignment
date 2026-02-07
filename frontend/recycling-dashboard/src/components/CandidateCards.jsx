// import React from "react";

// import { Card, Text, SimpleGrid, Button } from "@mantine/core";

// const candidates = [
//   {
//     name: "Amit Sharma",
//     experience: 8,
//     skills: "Lean Manufacturing, Safety Compliance, Leadership"
//   },
//   {
//     name: "Rahul Verma",
//     experience: 5,
//     skills: "Waste Management, Sustainability, Team Leadership"
//   }
// ];

// export default function CandidateCards() {
//   return (
//     <SimpleGrid cols={3}>
//       {candidates.map((c, i) => (
//         <Card key={i} shadow="sm" padding="md">
//           <Text fw={600}>{c.name}</Text>
//           <Text size="sm">Experience: {c.experience} years</Text>
//           <Text size="sm">Skills: {c.skills}</Text>
//           <Button
//             fullWidth
//             mt="sm"
//             onClick={() => alert("Candidate shared with HR")}
//           >
//             Share Candidate
//           </Button>
//         </Card>
//       ))}
//     </SimpleGrid>
//   );
// }


import React from "react";
import {
  Card,
  Text,
  SimpleGrid,
  Button,
  Group,
  Badge,
  Progress
} from "@mantine/core";
import data from "../data/candidates.json";

export default function CandidateCards() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
      {data.map(c => {
        const total =
          c.scores.crisis +
          c.scores.sustainability +
          c.scores.motivation;

        return (
          <Card key={c.id} withBorder shadow="sm" padding="lg">
            <Group justify="space-between">
              <Text fw={600}>{c.name}</Text>
              <Badge>{c.experience} yrs</Badge>
            </Group>

            <Text size="sm" c="dimmed" mt="xs">
              Skills: {c.skills.join(", ")}
            </Text>

            <Progress value={(total / 30) * 100} mt="md" />

            <Group mt="sm">
              <Badge color="red">Crisis {c.scores.crisis}</Badge>
              <Badge color="green">Sustainability {c.scores.sustainability}</Badge>
              <Badge color="blue">Motivation {c.scores.motivation}</Badge>
            </Group>

            <Button
              fullWidth
              mt="md"
              onClick={() => alert(`Shared ${c.name} with HR`)}
            >
              Share Candidate
            </Button>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
