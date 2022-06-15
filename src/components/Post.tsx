import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface IContent {
  text: string;
  link: string;
}

interface IPostProps {
  author: IAuthor;
  publishedAt: Date;
  content: IContent;
}

const Post = ({ author, content, publishedAt }: IPostProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('');

  const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentSubmit = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const listComments = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(listComments);
  };

  const isCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelative}
        </time>
      </header>
      <div className={styles.content}>
        <p>{content.text}</p>
        <p>
          <a href="#">{content.link}</a>
        </p>
      </div>

      <form onSubmit={handleNewCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
        />
        <div className={styles.buttonControl}>
          <button type="submit" disabled={isCommentEmpty}>
            Publicar
          </button>
        </div>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export { Post };
