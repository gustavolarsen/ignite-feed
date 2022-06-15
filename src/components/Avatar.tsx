import styles from './Avatar.module.css';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}
const Avatar = ({ hasBorder, src }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};

export { Avatar };
