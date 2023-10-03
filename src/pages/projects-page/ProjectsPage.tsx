import React from "react";
import PageDemo from "../../components/page-demo/PageDemo";

const ProjectsPage = (props: any) => {
  return <PageDemo pageId={props.id} header="Projects" subHeader="Portfolio" />;
};

export default ProjectsPage;
