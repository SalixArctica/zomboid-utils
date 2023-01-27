import { readFileSync, writeFileSync } from "fs";

const writeConfigFiles = (modIds: string[]) => {
  const defaultConfig = readFileSync("defaultFiles/servertest.ini").toString();
  const editOne = defaultConfig.replace("Mods=", `Mods=${modIds.join(";")};`);
  const editTwo = editOne.replace(
    "\nWorkshopItems=",
    `\nWorkshopItems=${modIds.join(";")};`
  );

  writeFileSync("generated/server-config.ini", editTwo);
};

export default writeConfigFiles;
