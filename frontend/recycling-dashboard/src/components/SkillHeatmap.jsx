import React from "react";
import { Table, Title, Progress } from "@mantine/core";
import data from "../data/candidates.json";

export default function SkillHeatmap() {
  return (
    <>
      <Title order={3} mt="lg" mb="sm">📊 Skill Heatmap</Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Crisis</th>
            <th>Sustainability</th>
            <th>Motivation</th>
          </tr>
        </thead>
        <tbody>
          {data.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td><Progress value={c.scores.crisis * 10} /></td>
              <td><Progress value={c.scores.sustainability * 10} /></td>
              <td><Progress value={c.scores.motivation * 10} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
