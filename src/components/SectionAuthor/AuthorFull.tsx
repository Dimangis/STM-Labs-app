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
          <BaseText
            content="Jonathan Doe"
            fontSize="20px"
            lineHeight="28px"
            color="var( --main-text-color)"
            align="center"
          />
          <BaseText content="Collaborator & Editor" fontSize="14px" lineHeight="20px" align="center" />
        </div>
      </div>
      <BaseText
        content=" Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a
        degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the
        impact technology has on our lives."
        fontSize="18px"
        lineHeight="26px"
        maxWidth="600px"
        color="var(--secondary-text-color)"
        align="center"
      />
      <ul className={styles.socialLinkContainer}>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M14 7.042a7 7 0 1 0-8.094 6.916V9.066H4.128V7.042h1.778V5.5c0-1.754 1.046-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.869 0-1.14.54-1.14 1.094v1.312h1.94l-.31 2.024h-1.63v4.892A7.002 7.002 0 0 0 14 7.042Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={12} fill="none">
              <path
                fill="#fff"
                d="M15.5 1.422a6.306 6.306 0 0 1-1.767.478A3.047 3.047 0 0 0 15.087.225a6.18 6.18 0 0 1-1.955.734A3.098 3.098 0 0 0 10.885 0c-1.7 0-3.077 1.357-3.077 3.029-.001.233.025.464.08.69A8.772 8.772 0 0 1 1.542.554a2.99 2.99 0 0 0-.418 1.522A3.02 3.02 0 0 0 2.5 4.597a3.047 3.047 0 0 1-1.4-.378v.037c0 1.469 1.063 2.69 2.47 2.969-.265.07-.538.106-.811.106a2.95 2.95 0 0 1-.579-.056 3.076 3.076 0 0 0 2.877 2.103A6.238 6.238 0 0 1 .5 10.631 8.71 8.71 0 0 0 5.21 12c5.668 0 8.764-4.616 8.764-8.619a8.11 8.11 0 0 0-.01-.39A6.201 6.201 0 0 0 15.5 1.42Z"
              />
            </svg>
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
              <path
                fill="#fff"
                d="M9.917 1.167a2.926 2.926 0 0 1 2.916 2.916v5.834a2.926 2.926 0 0 1-2.916 2.916H4.083a2.926 2.926 0 0 1-2.916-2.916V4.083a2.926 2.926 0 0 1 2.916-2.916h5.834Zm0-1.167H4.083A4.095 4.095 0 0 0 0 4.083v5.834A4.095 4.095 0 0 0 4.083 14h5.834A4.095 4.095 0 0 0 14 9.917V4.083A4.095 4.095 0 0 0 9.917 0Z"
              />
              <path
                fill="#fff"
                d="M10.792 4.083a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75ZM7 4.667a2.333 2.333 0 1 1 0 4.666 2.333 2.333 0 0 1 0-4.666ZM7 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
              />
            </svg>
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={12} fill="none">
              <path
                fill="#fff"
                d="M15.896 2.65c0-1.407-1.034-2.538-2.312-2.538C11.852.032 10.087 0 8.282 0H7.72c-1.8 0-3.569.031-5.3.113C1.145.113.11 1.25.11 2.655a46.487 46.487 0 0 0-.109 3.337 48.387 48.387 0 0 0 .106 3.341c0 1.406 1.035 2.547 2.31 2.547 1.819.084 3.684.122 5.581.119 1.9.006 3.76-.034 5.581-.12 1.278 0 2.313-1.14 2.313-2.546.075-1.116.11-2.228.106-3.344a45.423 45.423 0 0 0-.102-3.34ZM6.47 9.06V2.917L11 5.988 6.47 9.058Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AuthorFull;
