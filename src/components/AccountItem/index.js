import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://th.bing.com/th/id/R.7ff93aab99af25db6e30dfc4d62a43ad?rik=otPd8BbTjjUdRA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-gVUB-92d7Mo%2fT2caIGjKYLI%2fAAAAAAAABHE%2fUAYx4_oPfX4%2fs1600%2fMeow%2bMeow%2bCat%2bWallpapers%2b3.jpg&ehk=AhACPOBBzgtyZ1radJIHQErzGaSGf%2fXfIy2bZRQaUQ0%3d&risl=&pid=ImgRaw&r=0"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
