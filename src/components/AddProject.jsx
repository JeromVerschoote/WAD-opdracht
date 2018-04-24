import React from "react";
import Project from '../models/Project';

const addProject = ({store}) => {
  const handleSubmitForm = e => {
    e.preventDefault();
    const $form = e.currentTarget;

    if($form.project.value){
      store.addProject(new Project($form.project.value, $form.client.value, $form.rate.value, $form.deadline.value, $form.download.value));
      $form.reset();
    }
  };

  return (
      <form onSubmit={handleSubmitForm} className='new-form'>
        <input name="project" type="text" id='project' className='new-input--big input new-input ' placeholder='What will you be working on?'/>
        <input name="client" type="text" className='input new-input' placeholder='Client'/>
        <input name="rate" type="number" step="0.5" className='input new-input' placeholder='€'/>
        <input name="deadline" type="date" className='input new-input'/>
        <input name="download" type="text" className='input new-input' placeholder='Host link'/>
        <input type="submit" value="+" className='button button--action'/>
      </form>
  );
};

export default addProject;
