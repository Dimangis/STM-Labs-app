import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import { PostData } from 'components/common/SectionPostsList/PostData';
import styles from './AuthorFull.modules.css';
import testImage from '../../../public/img/Avatars/JF.jpg';
import { BaseText } from 'components/common/Text/TextObject';

interface AuthorProps {
  //Благодаря такому синтаксису я передаю точную часть интерфейса PostData, а точнее url
  // означает тип объекта, который содержится в свойстве url объекта PostData.
  // Это делает код более гибким, и если вы измените тип url в PostData, то изменения также будут автоматически отражены в PostItem.tsx.

  userInfo: PostData['userInfo'];
}

// const AuthorFull: React.FC<AuthorProps> = () => {
const AuthorFull = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <div className={styles.imgContainer}>
          <PictureComponent jpgPath1x={testImage} altText="Test" borderRadius="100px" />
        </div>
        <div>
          <p>Jonathan Doe</p>
          <p>Collaborator & Editor</p>
        </div>
      </div>
      <BaseText
        content=" Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a
        degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the
        impact technology has on our lives."
        fontSize="18px"
        lineHeight="26px"
        maxWidth="668px"
      />
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
    </div>
  );
};

export default AuthorFull;
