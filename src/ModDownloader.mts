const generateModDownloaderScript = (idList: string[]): string => {
  const preamble = `
@ShutdownOnFailedCommand 1 //set to 0 if updating multiple servers at once
@NoPromptForPassword 1
//for servers which don't need a login
login anonymous
`;

  const end = `
exit
`;

  return `
// generated by a mod downloader script from SalixArctica github.com/salixarctica
// downloads mod passed to the script
${preamble}
${generateModDownloadCommands(idList)}
${end}
`;
};

const generateModDownloadCommands = (idList: string[]): string => {
  return idList
    .map((id) => {
      return `workshop_download_item 108600 ${id}`;
    })
    .join("\n");
};

export default generateModDownloaderScript;
