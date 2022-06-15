import { ThumbsUp, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

const commentPublished = {
  user: {
    name: 'Mayk Brito',
    avatarUrl: 'https://github.com/maykbrito.png',
  },
  publishedAt: new Date(),
};

interface ICommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

const Comment = ({ content, onDeleteComment }: ICommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const publishedDate = format(
    commentPublished.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelative = formatDistanceToNow(
    commentPublished.publishedAt,
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar src={commentPublished.user.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{commentPublished.user.name}</strong>
              <time
                title={publishedDate}
                dateTime={commentPublished.publishedAt.toISOString()}
              >
                {publishedDateRelative}
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <div className={styles.commentLike}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Comment };
