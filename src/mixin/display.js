import { css } from "styled-components";

const onlyMobile = css`
  display: initial;
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const hiddenMobile = css`
  display: none;
  ${({ theme }) => theme.device.tablet} {
    display: initial;
  }
`;

export { onlyMobile, hiddenMobile };
