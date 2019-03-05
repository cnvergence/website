import React from "react";

export const nest = (...components: any[]) => (props: any) => {
  return components.reduceRight(
    (children, Current) => <Current {...props}>{children}</Current>,
    props.children,
  );
};
