import React from "react";
import PageDemo from "../../components/page-demo/PageDemo";
import PageContainer from "../../components/containers/PageContainer";
import { Card } from "antd";

const SkillsPage = (props: any) => {
  return (
    <PageContainer pageId="skills">
      <h1>Skills</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Card title="Languages">Languages</Card>
        <Card title="Tools">Tools</Card>
        <Card title="Frameworks">Frameworks</Card>
      </div>
    </PageContainer>
  );
};

export default SkillsPage;
