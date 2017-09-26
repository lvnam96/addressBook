import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

const AddContactForm = props => (
    <Form title="Tạo liên lạc mới" {...props} />
);

AddContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    handlerSubmit: PropTypes.func.isRequired,
    showNoti: PropTypes.func.isRequired,
    getRandomColor: PropTypes.func.isRequired
};

export default AddContactForm;