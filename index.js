import API from './js/API';
import React from 'react';
import { render } from 'react-dom';

import AddressBook from './js/AddressBook';

import './scss/style.scss';

API.init();

document.addEventListener('DOMContentLoaded', () => {
    const saveDataBeforeCloseTab = (e = window.event) => {
        if (API.shouldBeSaved()) {
            API.saveDataToLocalStorage();
            API.dontSaveDataToLocalStorageAgain();
        }
        if (e) { e.returnValue = 'Sure?'; }// For IE and Firefox prior to version 4
        return 'Sure?';// For Safari
    };

    render(
        <AddressBook />,
        document.getElementsByClassName('body-wrapper')[0]
    );

    window.addEventListener('beforeunload', saveDataBeforeCloseTab, false);
});