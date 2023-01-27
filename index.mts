import { getCollection, parseCollectionToIds } from "./src/FetchCollection.mjs";
import generateModDownloaderScript from "./src/ModDownloader.mjs";
import writeConfigFiles from "./src/WriteConfig.mjs";

const collection = await getCollection(2913881306);
const modsIds = parseCollectionToIds(collection);

const downloaderScript = generateModDownloaderScript(modsIds);
writeConfigFiles(modsIds);
