import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
};

export default Header;
