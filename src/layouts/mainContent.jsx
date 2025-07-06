import { Layout } from "antd";

import { EmployeeProgress } from "../components/employeeProgress";
import { HeaderSection } from "../components/headerSection";
import Section from "../components/Section";
import StatsSection from "../components/statsSection";

const { Content } = Layout;

const MainContent = () => {
  return (
    <Content style={{ margin: "24px", overflow: "initial" }}>
      <HeaderSection />
      <StatsSection />
      <Section />
      <EmployeeProgress />
    </Content>
  );
};

export default MainContent;
