import React from "react";
import PageDemo from "../../components/page-demo/PageDemo";

const ErrorsPage = (props: any) => {
  return (
    <PageDemo pageId={props.id} header="404!" subHeader="Nothing Here..." />
  );
};

export default ErrorsPage;
