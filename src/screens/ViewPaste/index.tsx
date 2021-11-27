import prisma from "../../db";
import { GetServerSidePropsContext, NextPageContext } from "next";

interface Props {
  pasteContent: string;
}

const ViewPaste: React.FC<Props> = ({ pasteContent }) => {
  return (
    <main className="flex-1 w-full">
      <div className="m-2 p-2 bg-gray-200 rounded-md">
        <code>{pasteContent}</code>
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
