/** -----------------------------------------------------------------------
 * @module [apg-uts]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/03/12] Porting to Deno
 * @version 0.8.1 [APG 2022/05/01] Refactoring names
 * @version 0.9.0 [APG 2022/09/10] Split in several module + Escape Html
 * @version 0.9.1 [APG 2022/09/11] Github Beta
 * @version 0.9.3 [APG 2022/12/17] Lines max length and num lines
 * -----------------------------------------------------------------------
 */

/**
 * Common string utilities
 */
export class ApgUtsStr {


  static Capitalize(astring: string) {
    // https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
    if (typeof astring !== 'string') { return ''; }
    return astring.charAt(0).toUpperCase() + astring.slice(1).toLowerCase();
  }


  static RandomNumbersAndLetters(alength: number): string {

    let r = '';
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    for (let i = 0; i < alength; i++) {
      const n = Math.floor(Math.random() * chars.length);
      r += chars.charAt(n);
    }
    return r;
  }


  static RandomWithSymbols(alength: number): string {

    let r = '';
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_-=*+[]{}()<>?!%$£§|';
    for (let i = 0; i < alength; i++) {
      const n = Math.floor(Math.random() * chars.length);
      r += chars.charAt(n);
    }
    return r;
  }

  /**
   * Prints a formatted string aligning the value in the middle of the available width
   * @param avalue that has to be formatted
   * @param awidth The total legnth of the output
   * @param aborder Character or string used for the beginnig and ending the output
   * @param afiller Character or string used to fill the space necessary to aligng the value
   */
  static FilledCentered(avalue: string, awidth: number, aborder: string, afiller: string) {
    const borderW = aborder.length;
    if (afiller.length > 1)
      afiller = afiller[0];
    const valueW = avalue.length;
    const tobeFilledW = awidth - valueW - (borderW * 2);
    const leftPadN = Math.trunc(tobeFilledW / 2);
    // const righPadN = leftPadN + (tobeFilledW % 2);
    const central = avalue
      .padStart(leftPadN + valueW, afiller)
      .padEnd(awidth - (2 * borderW), afiller);
    const r = aborder + central + aborder;

    return r;
  }

  /**
   * Prints a formatted string aligning the value to the right of the available width
   * @param avalue that has to be formatted
   * @param awidth The total legnth of the output
   * @param aborder Character or string used for the beginnig and ending the output
   * @param afiller Character or string used to fill the space necessary to aligng the value
   */
  static FilledRight(avalue: string, awidth: number, aborder: string, afiller: string) {

    const borderW = aborder.length;
    if (afiller.length > 1)
      afiller = afiller[0];
    const leftPad = avalue.length + 1;
    const rightPaddedString = avalue
      .padStart(leftPad, afiller)
      .padEnd(awidth - (2 * borderW), afiller);
    const r = aborder + rightPaddedString + aborder;

    return r;
  }

  /**
   * Regular Expression for the passed filter
   * @param {string} afilter Glob pattern for the filter es. 'start*', '*something', 'test*test', 'a*@*.com'
   */
  static RegExpFromFilter(afilter: string): RegExp {

    let r: RegExp;

    const starPositions: number[] = [];
    let ok = true;
    let lstarPosition = 0;
    while (ok) {
      lstarPosition = afilter.indexOf('*', lstarPosition);
      if (lstarPosition === -1) {
        ok = false;
      }
      else {
        starPositions.push(lstarPosition);
        lstarPosition++;
      }
    }

    // No *
    if (starPositions.length === 0) {
      r = new RegExp('.*' + afilter + '.*');
    }

    // Two or more *
    else if (starPositions.length > 1) {
      const filterParts: string[] = afilter.split('*');
      const l = filterParts.length;
      let pattern = '';

      for (let i = 0; i < l; i++) {
        if (i === 0) {
          if (filterParts[i] !== '') {
            pattern += '^';
          }
        }
        pattern += filterParts[i];
        if (i === l - 1) {
          if (filterParts[i] !== '') {
            pattern += '$';
          }
          else {
            pattern += '';
          }
        }
        else {
          pattern += '.*';
        }
      }

      r = new RegExp(pattern);
    }

    // Only one *
    else {

      let pattern = '';
      if (starPositions[0] === 0) {
        pattern = '.*' + afilter.replace('*', '') + '$';
      }
      else if (starPositions[0] === afilter.length) {
        pattern = '^' + afilter.replace('*', '') + '.*';
      }
      else {
        const filterParts: string[] = afilter.split('*');
        pattern = '^' + filterParts[0] + '.*' + filterParts[1] + '$';
      }
      r = new RegExp(pattern);
    }
    return r;
  }


  /**
   * Sanitize HTML text converting the characters that could create problems
   */
  static EscapeHTML(ahtml: string) {

    return ahtml
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  /** 
   * Replaces invalid characters in urls with correct escape sequences
   */
  static Urlify(apath: string) {
    let r = apath;
    let i = 0;
    const l = r.length;
    do {
      i = r.indexOf('=');
      if (i !== -1) {
        let b = true;
        let j = i;
        do {
          j++;
          if (r[j] === '&' || j === l) {
            r = r.substring(0, i) + r.substring(j, l);
            b = false;
          }
        } while (b);
      }
    } while (i !== -1);
    r = r
      .replace(/[\/?&]/g, '_')
      .replace(/[:=]/g, '');
    return r;
  }

  /**
   * Get the number of lines in a multiline text.
   * Splits the argument using all possible combinations of \r and \n.
   */
  static LinesNum(amultiLineText: string) {
    let r = 0;

    const chunks = amultiLineText.split(/\r\n|\n\r|\n|\r/);
    r = chunks.length;

    return r;
  }


  /**
   * Get the length of the longest line in a multiline text. 
   * Splits the argument using all possible combinations of \r and \n.
   */
  static LinesMaxLength(amultiLineText: string) {
    let r = 0;

    const chunks = amultiLineText.split(/\r\n|\n\r|\n|\r/);
    for (let i = 0; i < chunks.length; i++) {
      if (chunks[i].length > r) {
        r = chunks[i].length;
      }
    }
    return r;
  }

}
