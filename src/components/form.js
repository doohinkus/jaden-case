import React from 'react';
import Button from './button';
import PropTypes from 'prop-types';

const Form = ({ change, submit }) => {
  return (
    <form className="form-inline justify-content-center mt-3">
      <div className="form-group col-sm-8">
        <input type="text" onChange={change} className="form-control w-100" id="inputText" placeholder="Tweet" />
      </div>
      <div className="form-group col-sm-4">
        <Button action={submit} text="Tweet" />
      </div>
    </form>
  )
}
Form.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default Form;
