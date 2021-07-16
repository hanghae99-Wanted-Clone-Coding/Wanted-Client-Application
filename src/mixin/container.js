import { css } from "styled-components";

const container = css`
  padding: 20px;

  ${({ theme }) => theme.device.tablet} {
    padding: 40px;
  }

  ${({ theme }) => theme.device.desktop} {
    max-width: 1120px;
    margin: 0 auto;
  }
`;
