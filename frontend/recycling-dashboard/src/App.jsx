import React from "react";

import { Container, Title, Divider } from "@mantine/core";
import Leaderboard from "./components/Leaderboard";
import CandidateCards from "./components/CandidateCards";
import SkillHeatmap from "./components/SkillHeatmap";
export default function App() {
  return (
    <Container size="lg">
      <Title ta="center" my="md">
   ♻ Recycling Production Line Manager Selection
</Title>


      <Leaderboard />
      <Divider my="lg" />
      <SkillHeatmap/>
      <CandidateCards />
    </Container>
  );
}
