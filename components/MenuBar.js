import React from 'react';
import PropTypes from 'prop-types';

import NavBtn from './NavBtn';

const MenuBar = props => (
    <nav className='sticky-nav'>
        <ul className='filter-sub-nav translatedDown200'>
            <li className='sort-sub-nav__item--presentState' title='Display contacts whose birthday is in current week' onClick={props.onFilterBirthsInWeek}>tuần này</li>
            <li title='Display contacts whose birthday is in current month' onClick={props.onFilterBirthsInMonth}>tháng này</li>
        </ul>
        <input style={{display: 'none'}} type='file' id='inptFileBtn' accept='.txt'
            onChange={props.onUploadFile} />
        <ul className='backup-restore-sub-nav translatedDown100'>
            <li id='bckpDataBtn' onClick={props.onClickBackup} title='Sao lưu dữ liệu hiện tại vào một file để lưu trên máy'>Sao lưu</li>
            <li id='rstrDataBtn' onClick={props.onClickRestore} title='Thay thế dữ liệu hiện tại bằng dữ liệu bạn đã sao lưu trước đó'>Khôi phục</li>
        </ul>
        <nav className='main-nav'>
            <NavBtn label={`Danh bạ (${props.totalContacts})`} icon="fa-address-book-o" onClick={props.onClickDisplayAll} />
            <input type='checkbox' id='sort-toggle' style={{display: 'none'}} />
            <NavBtn isDropdownBtn={true} inputId="sort-toggle" title='Hiển thị các liên lạc có ngày sinh nhật trong tuần / tháng này' label="Hiển thị sinh nhật trong..." icon="fa-birthday-cake" onClick={props.onClickOnFilterMenu} />
            <NavBtn moreClass="week-btn" label="... tuần này" icon="fa-calendar-minus-o" onClick={props.onFilterBirthsInWeek} />
            <NavBtn moreClass="month-btn" label="... tháng này" icon="fa-calendar" onClick={props.onFilterBirthsInMonth} />
            <NavBtn
                onMouseDown={props.onSetTimer}
                onMouseUp={props.onClearTimer}
                onTouchStart={props.onSetTimer}
                onTouchEnd={props.onClearTimer}
                moreClass={"trash-btn" + (props.numOfCheckedItems > 0 ? ' lighter' : '')} title="Nhấn giữ để xoá tất cả liên lạc trong danh bạ" label="Xoá" icon="fa-trash-o" onClick={props.onClickDelete} />
            <input type='checkbox' id="bckp-rstr-toggle" style={{display: 'none'}} />
            <NavBtn isDropdownBtn={true} inputId="bckp-rstr-toggle" label="Sao lưu / Khôi phục" icon="fa-floppy-o" onClick={props.onClickOnBackupMenu} />
            <NavBtn moreClass="backup-btn" label="Sao lưu" icon="fa-download" onClick={props.onClickBackup} />
            <NavBtn moreClass="restore-btn" label="Khôi phục" icon="fa-upload" onClick={props.onClickRestore} />
            <NavBtn label="Thêm liên lạc mới" icon="fa-plus" onClick={props.onClickAddMenu} />
        </nav>
    </nav>
);

MenuBar.propTypes = {
    onSetTimer: PropTypes.func.isRequired,
    onClearTimer: PropTypes.func.isRequired,
    onClickOnBackupMenu: PropTypes.func.isRequired,
    onClickBackup: PropTypes.func.isRequired,
    onClickRestore: PropTypes.func.isRequired,
    onUploadFile: PropTypes.func.isRequired,
    onClickAddMenu: PropTypes.func.isRequired,
    onFilterBirthsInWeek: PropTypes.func.isRequired,
    onFilterBirthsInMonth: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default MenuBar;
