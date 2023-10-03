import React from "react";
import PageDemo from "../../components/page-demo/PageDemo";

const AboutPage = (props: any) => {
  return <PageDemo pageId={props.id} header="About" subHeader="Contact Us" />;
};

export default AboutPage;
