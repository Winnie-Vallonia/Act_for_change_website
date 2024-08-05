import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <form>
      <fieldset>
        <legend><h2>Choose your interests</h2></legend>
        <label><input type="checkbox" name="category" value="environment" /> Environment</label><br />
        <label><input type="checkbox" name="category" value="education" /> Education</label><br />
        <label><input type="checkbox" name="category" value="health" /> Health</label><br />
        <label><input type="checkbox" name="category" value="community" /> Community</label><br />
        <label><input type="checkbox" name="category" value="animals" /> Animals</label><br />
        <label><input type="checkbox" name="category" value="arts" /> Arts & Culture</label><br />
        <label><input type="checkbox" name="category" value="sports" /> Sports & Recreation</label><br />
        <label><input type="checkbox" name="category" value="seniors" /> Seniors</label><br />
        <label><input type="checkbox" name="category" value="youth" /> Youth</label><br />
        <input type="submit" value="Apply Filters" className="btn btn-outline-primary mt-3" />
      </fieldset>
    </form>
  </div>
);

export default Sidebar;
