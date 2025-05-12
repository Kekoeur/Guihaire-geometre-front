import { Paragraph, TextChild } from '@/types/api';

interface Props {
  paragraphs: Paragraph[] | null | undefined;
}

const RenderParagraphText: React.FC<Props> = ({ paragraphs }) => {
  if (!paragraphs || paragraphs.length === 0) {
    return null;
  }

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          {paragraph.children?.map((child: TextChild, childIndex) => (
            <p key={childIndex}>{child.text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RenderParagraphText;
