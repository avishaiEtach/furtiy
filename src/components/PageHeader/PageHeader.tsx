import React from "react";
import "./PageHeader.scss";

interface PageHeaderProps {
  title: string;
}
export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="page-header-background">
        <div className="page-header-background-container"></div>
      </div>
      <h1 className="page-header-content">{title}</h1>
    </div>
  );
};
