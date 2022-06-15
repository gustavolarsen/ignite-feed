import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const postMock = [
  {
    id: '1',
    author: {
      avatarUrl: 'https://github.com/gustavolarsen.png',
      name: 'Gustavo Larsen',
      role: 'Web Developer',
    },
    content: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam magni at omnis, ad fugiat minus praesentium nulla error ipsum quam. Enim repellat itaque nulla dolore! Labore rerum nemo voluptatem nostrum?',
      link: 'https://github.com/gustavolarsen',
    },
    publishedAt: new Date('2022-06-12 20:00:00'),
  },
  {
    id: '2',
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at Rocketseat',
    },
    content: {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente nesciunt quos soluta adipisci? Aut ex necessitatibus magnam cupiditate quibusdam velit dolorum ipsam. Et voluptate, iusto possimus aspernatur nihil animi.',
      link: 'https://github.com/diego3g',
    },
    publishedAt: new Date('2022-06-11 13:30:00'),
  },
];

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postMock.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};

export { App };
