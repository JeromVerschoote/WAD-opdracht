import React from "react";
import Project from '../models/Project';

const AddProject = ({store}) => {
  const handleSubmitForm = e => {
    e.preventDefault();
    const $form = e.currentTarget;

    if($form.project.value){
      store.addProject(new Project($form.project.value, $form.client.value, $form.rate.value, $form.deadline.value, $form.download.value));
      $form.reset();
    }
  };

  return (
    <div className='panel-new'>
      <form onSubmit={handleSubmitForm} className='panelNew-form'>
        <input name="project" type="text" id='project' className='panelNew-input panelNew-input--big' placeholder='What will you be working on?'/>
        <input name="client" type="text" className='panelNew-input' placeholder='Client'/>
        <input name="rate" type="number" step="0.5" className='panelNew-input' placeholder='€'/>
        <input name="deadline" type="date" className='panelNew-input'/>
        <input name="download" type="text" className='panelNew-input' placeholder='Host link'/>
        <input type="submit" value="+" className='panelNew-button'/>
      </form>
    </div>
  );
};

export default AddProject;
