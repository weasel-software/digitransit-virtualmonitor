import * as React from "react";
import * as Logo from 'src/ui/logo/linkki-logo.svg'

export default ({ style }: {style?: React.CSSProperties} = { style: {} }) => (
  <svg
    id={"logo"}
    viewBox={"0 0 240 60"}
    version={"1.1"}
    preserveAspectRatio={"xMidYMid meet"}
    style={{ color: 'gray', ...style }}
  >
    <image href={Logo} width={"100%"} height={"100%"} />
  </svg>
);