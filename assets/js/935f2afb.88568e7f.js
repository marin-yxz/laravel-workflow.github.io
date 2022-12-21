"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[53],{1109:t=>{t.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"category","label":"Defining Workflows","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Workflows","href":"/docs/defining-workflows/workflows","docId":"defining-workflows/workflows"},{"type":"link","label":"Activities","href":"/docs/defining-workflows/activities","docId":"defining-workflows/activities"},{"type":"link","label":"Starting Workflows","href":"/docs/defining-workflows/starting-workflows","docId":"defining-workflows/starting-workflows"},{"type":"link","label":"Workfow Status","href":"/docs/defining-workflows/workflow-status","docId":"defining-workflows/workflow-status"},{"type":"link","label":"Workflow ID","href":"/docs/defining-workflows/workflow-id","docId":"defining-workflows/workflow-id"}],"href":"/docs/category/defining-workflows"},{"type":"category","label":"Tutorial - Extras","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage Docs Versions","href":"/docs/tutorial-extras/manage-docs-versions","docId":"tutorial-extras/manage-docs-versions"},{"type":"link","label":"Translate your site","href":"/docs/tutorial-extras/translate-your-site","docId":"tutorial-extras/translate-your-site"}],"href":"/docs/category/tutorial---extras"}]},"docs":{"defining-workflows/activities":{"id":"defining-workflows/activities","title":"Activities","description":"An activity is a unit of work that performs a specific task or operation (e.g. making an API request, processing data, sending an email) and can be executed by a workflow. It is defined by extending the Activity class and implementing the execute() method.","sidebar":"tutorialSidebar"},"defining-workflows/starting-workflows":{"id":"defining-workflows/starting-workflows","title":"Starting Workflows","description":"To start a workflow, you must first create a workflow instance and then call the start() method on it. The workflow instance has several methods that can be used to interact with the workflow, such as id() to get the workflow\'s unique identifier, status() or running() to get the current status of the workflow, and output() to get the output data produced by the workflow.","sidebar":"tutorialSidebar"},"defining-workflows/workflow-id":{"id":"defining-workflows/workflow-id","title":"Workflow ID","description":"Inside of an activity, $this->workflowId() returns the id of the current workflow. This can be useful for activities that need to store data about the workflow that is executing them. For example, an activity may use the workflow id to store information in a database or cache so that it can be accessed by other activities in the same workflow.","sidebar":"tutorialSidebar"},"defining-workflows/workflow-status":{"id":"defining-workflows/workflow-status","title":"Workfow Status","description":"You can monitor the status of the workflow by calling the running() method, which returns true if the workflow is still running and false if it has completed or failed.","sidebar":"tutorialSidebar"},"defining-workflows/workflows":{"id":"defining-workflows/workflows","title":"Workflows","description":"In Laravel Workflow, workflows and activities are defined as classes that extend the base Workflow and Activity classes provided by the framework.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Requirements","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"What is Laravel Workflow?","sidebar":"tutorialSidebar"},"tutorial-extras/manage-docs-versions":{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","sidebar":"tutorialSidebar"},"tutorial-extras/translate-your-site":{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","sidebar":"tutorialSidebar"}}}')}}]);