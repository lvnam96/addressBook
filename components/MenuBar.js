import React from 'react';
import PropTypes from 'prop-types';

const MenuBar = props => (
    <nav className='sticky-nav'>
        <ul className='filter-sub-nav translatedDown200'>
            <li className='sort-sub-nav__item--presentState' title='Display contacts whose birthday is in current week' onClick={props.onFilterBirthsInWeek}>tuần này</li>
            <li title='Display contacts whose birthday is in current month' onClick={props.onFilterBirthsInMonth}>tháng này</li>
        </ul>
        <input style={{display: 'none'}} type='file' id='inptFileBtn' accept='.txt'
            onChange={props.onUploadFile} />
        <ul className='backup-restore-sub-nav translatedDown100'>
            <li id='bckpDataBtn' onClick={props.onClickBackup} title='Save current data into a text file'>Sao lưu</li>
            <li id='rstrDataBtn' onClick={props.onClickRestore} title='Replace current data by the new one in your backup file'>Khôi phục</li>
        </ul>
        <nav className='main-nav'>
            <div className='main-nav__item' onClick={props.onClickDisplayAll}>
                <i className='fa fa-address-book-o'></i>
                <span>Danh bạ ({props.totalContacts})</span>
            </div>
            <input type='checkbox' id='sort-toggle' style={{display: 'none'}} />
            <label htmlFor='sort-toggle' className='main-nav__item' title='Display contacts whose birthday is in current week/month' onClick={props.onClickOnFilterMenu}>
                <i className='fa fa-birthday-cake'></i>
                <span>Hiển thị sinh nhật trong...</span>
            </label>
            <div className='main-nav__item week-btn' onClick={props.onFilterBirthsInWeek}>
                <i className='fa fa-calendar-minus-o'></i>
                <span>... tuần này</span>
            </div>
            <div className='main-nav__item month-btn' onClick={props.onFilterBirthsInMonth}>
                <i className='fa fa-calendar'></i>
                <span>... tháng này</span>
            </div>
            <div className={'main-nav__item trash-btn' +
                (props.numOfCheckedItems > 0 ? ' lighter' : '')}
                title='Nhấn giữ để xoá tất cả liên lạc trong danh bạ'
                onMouseDown={props.onSetTimer}
                onMouseUp={props.onClearTimer}
                onTouchStart={props.onSetTimer}
                onTouchEnd={props.onClearTimer}
                onClick={props.onClickDelete}>
                <i className='fa fa-trash-o'></i>
                <span>Xoá</span>
            </div>
            <input type='checkbox' id='bckp-rstr-toggle' style={{display: 'none'}} />
            <label htmlFor='bckp-rstr-toggle' className='main-nav__item' onClick={props.onClickOnBackupMenu}>
                <i className='fa fa-floppy-o'></i>
                <span>Sao lưu / Khôi phục</span>
            </label>
            <div className='main-nav__item backup-btn' onClick={props.onClickBackup} title='Save current data into a text file'>
                <i className='fa fa-download'></i>
                <span>Sao lưu</span>
            </div>
            <div className='main-nav__item restore-btn' onClick={props.onClickRestore} title='Replace current data by the new one in your backup file'>
                <i className='fa fa-upload'></i>
                <span>Khôi phục</span>
            </div>
            <div className='main-nav__item' onClick={props.onClickAddMenu}>
                <i className='fa fa-plus'></i>
                <span>Thêm liên lạc mới</span>
            </div>
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
