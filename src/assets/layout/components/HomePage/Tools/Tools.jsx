import React from 'react';
import './Tools.scss';

const Tools = () => {
  return (
    <div className="tools-container">
      <div className="title_header flex items-center">
        <h1><span className="pr-1 text-black"></span>Tools</h1>
      </div>
      <div className="content">
        <ul>
          <li><strong>IDE & Editors:</strong> Visual Studio Code, SQL Server Management Studio</li>
          <li><strong>ERP & Production Systems:</strong> Odoo (custom modules), 1C Framework, Camduct</li>
          <li><strong>API Testing & Monitoring:</strong> Postman, Insomnia, Swagger UI, Seq</li>
          <li><strong>Documentation & Wiki:</strong> Confluence, Notion</li>
          <li><strong>Task & Collaboration:</strong> Jira, Trello, Slack, Microsoft Teams</li>
          <li><strong>Linux Tools:</strong> Bash scripting, systemctl, crontab, htop, Nginx</li>
          <li><strong>Reporting & Automation:</strong> Excel, Power BI, Python scripting (for data/ETL)</li>
          <li><strong>Virtualization & Containers:</strong> Docker Compose, Rancher UI</li>
          <li><strong>Source Control Management:</strong> Git CLI, GitHub Desktop</li>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
