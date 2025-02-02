import DriveContents from "./drive-contents"
import { QUERIES } from "~/server/db/queries"

export default async function DriveView(props: {
  params: Promise<{folderId: string}>;
}) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>;
  }

  const [folders, files, parents] = await Promise.all([
    QUERIES.getFolders(parsedFolderId),
    QUERIES.getFiles(parsedFolderId),
    QUERIES.getAllParentsForFolders(parsedFolderId),
  ]);

  return (
  <DriveContents 
    files={files}
    folders={folders}
    parents={parents}
    currentFolderId={parsedFolderId}
  />
  );
}