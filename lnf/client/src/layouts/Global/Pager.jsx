import * as React from "react";
import PropTypes from "prop-types";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import _ from "lodash";

function Pager({ title, content }) {
  const titlePrefix = "USCFoundIt";
  useDocumentTitle(
    _.isEmpty(title) ? titlePrefix : `${title} - ${titlePrefix}`
  );

  return <>{content}</>;
}

Pager.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export { Pager as default };
