import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
};

export default Sidebar;
