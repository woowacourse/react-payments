import React from "react";
import styled from "styled-components";

interface PaymentLayoutProps {
  children: React.ReactNode;
}

const PaymentLayout = ({ children }: PaymentLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default PaymentLayout;

const Layout = styled.main`
  padding: 18px 32px;
  width: 315px;
  height: 43.75rem;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  border-radius: 8px;
`;
