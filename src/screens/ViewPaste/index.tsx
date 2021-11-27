import prisma from "../../db";
import { GetServerSidePropsContext, NextPageContext } from "next";

interface Props {
  pasteContent: string;
}

const ViewPaste: React.FC<Props> = ({ pasteContent }) => {
  console.info(pasteContent);
  return (
    <main className="flex flex-1 w-full">
      <div className="m-2 p-2 flex-1 bg-gray-200 rounded-md shadow-inner">
        <code className="whitespace-pre-line h-full">
          <textarea
            value={pasteContent}
            className="w-full h-full bg-gray-200 resize-none"
          ></textarea>
        </code>
      </div>
    </main>
  );
};

const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { index: pasteId } = context.params;

  const paste = await prisma.paste.findUnique({
    where: {
      nanoId: pasteId as string,
    },
  });

  return {
    props: {
      pasteContent: paste.content,
    },
  };
};

export default ViewPaste;
export { getServerSideProps };
