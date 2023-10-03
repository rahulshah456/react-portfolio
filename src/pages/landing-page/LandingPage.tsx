import React from "react";
import PageDemo from "../../components/page-demo/PageDemo";

const LandingPage = (props: any) => {
  return <PageDemo pageId={props.id} header="Hola!" subHeader="Landing Page" />;
};

export default LandingPage;
