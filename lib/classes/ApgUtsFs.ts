/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.8.0 [APG 2022/05/01] Refactoring names
 * @version 0.9.0 [APG 2022/09/10] Split in several module + Escape Html
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * -----------------------------------------------------------------------
 */
import { StdPath } from "../../deps.ts";


export class ApgUtsFs {
  static FolderExistsSync(apath: string): boolean {
    let r = false;
    try {
      const fileInfo = Deno.statSync(apath);
      r = fileInfo.isDirectory;
    } catch (error) {
      if (error && error.code === 'ENOENT') {
        // file or directory does not exist
        r = false;
      } else {
        // unexpected error, maybe permissions, pass it along as is
        throw error;
      }
    }
    return r;
  }


  static FolderOfFileExistsSync(afile: string): boolean {
    let r = false;
    const path = StdPath.dirname(afile);
    try {
      const fileInfo = Deno.statSync(path);
      r = fileInfo.isDirectory;
    } catch (error) {
      if (error && error.code === 'ENOENT') {
        // directory does not exist
        r = false;
      } else {
        // unexpected error, maybe permissions, pass it along as is
        throw error;
      }
    }
    return r;
  }


  static IsFolderSync(apath: string): boolean {

    if (apath.indexOf(".") > 0)
      return false; // it was a path for a file maybe

    const r = this.FolderExistsSync(apath);

    return r;

  }


  static GetSubFoldersSortedSync(apath: string): string[] {

    const entries: string[] = [];

    if (!this.IsFolderSync(apath)) {
      return entries;
    }

    for (const entry of Deno.readDirSync(apath)) {
      if (entry.isDirectory) {
        entries.push("/" + entry.name);
      }
    }
    const sortedEntries = entries.sort((a: string, b: string) => a < b ? -1 : a === b ? 0 : 1);

    return sortedEntries;

  }


  static GetFileNamesSortedSync(apath: string, aext = '*'): string[] {
    const entries: string[] = [];

    if (!this.IsFolderSync(apath)) {
      return entries;
    }

    for (const entry of Deno.readDirSync(apath)) {
      if (entry.isFile) {
        entries.push(entry.name);
      }
    }

    const filteredEntries = (aext === "*") ?
      entries :
      entries.filter((a: string) => StdPath.extname(a) === aext);


    const sortedEntries = filteredEntries
      .sort((a: string, b: string) => a.localeCompare(b));

    return sortedEntries;

  }


  /** @remark This cannot run in production */
  static ClearFolderSync(apath: string, aext = '*') {
    const files = this.GetFileNamesSortedSync(apath, aext);
    const deletedFiles: string[] = [];
    let ok = true;
    let message = "Ok";
    files.forEach(fileName => {
      try {
        const file = apath + fileName;
        Deno.removeSync(file);
        deletedFiles.push(file);
      }
      catch (error) {
        ok = false;
        message = error.message;
        console.log(error);
      }
    });
    return { deletedFiles, ok, message };
  }


  static FileExistsSync(afile: string) {

    try {
      const stat = Deno.statSync(afile);
      if (stat.isFile) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      if (error && (
        (error.kind === Deno.errors.NotFound) ||
        (error.code === 'ENOENT')
      )) {
        return false;
      } else {
        // unexpected error, maybe permissions, pass it along
        throw error;
      }
    }
  }


  /**
   * @param afile complete file path with extension
   * @returns Decoded UTF-8 File Content
   * @warnings Can throw exception if file is not found
   */
  static ReadTextFileSync(afile: string): string {
    const decoder = new TextDecoder("utf-8");
    try {
      // This can fail badly throwing 
      const fileContent = Deno.readFileSync(afile);
      const r = decoder.decode(fileContent);
      return r;
    }
    catch (e) {
      // So at least fail better with a meaningful message
      throw new Error(`Reading file [${afile}]: ${e.message}`)
    }
  }


  /**
   * @param afile complete file path with extension
   * @returns File Content
   * @warnings Can throw exception if file is not found
   */
  static ReadBinFileSync(afile: string) {

    try {
      // this can fail badly throwing 
      const r = Deno.readFileSync(afile);
      return r;
    }
    catch (e) {
      // So at least fail better with a meaningful message
      throw new Error(`Reading file [${afile}]: ${e.message}`)
    }
  }

}
