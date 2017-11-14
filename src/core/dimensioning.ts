/// <reference path="../core/configuration.ts" />

module BP3D.Core {

  /** Dimensioning in Inch. */
  export const dimInch: string = "дюйм";

  /** Dimensioning in Meter. */
  export const dimMeter: string = "м";

  /** Dimensioning in Centi Meter. */
  export const dimCentiMeter: string = "см";

  /** Dimensioning in Milli Meter. */
  export const dimMilliMeter: string = "мм";

  /** Dimensioning functions. */
  export class Dimensioning {
    /** Converts cm to dimensioning string.
     * @param cm Centi meter value to be converted.
     * @returns String representation.
     */
    public static cmToMeasure(cm: number): string {
      switch (Core.Configuration.getStringValue(Core.configDimUnit)) {
        case dimInch:
          var realFeet = ((cm * 0.393700) / 12);
          var feet = Math.floor(realFeet);
          var inches = Math.round((realFeet - feet) * 12);
          return feet + "'" + inches + '"';
        case dimMilliMeter:
          return "" + Math.round(10 * cm) + " мм";
        case dimCentiMeter:
          return "" + Math.round(10 * cm) / 10 + " см";
        case dimMeter:
        default:
          return "" + Math.round(10 * cm) / 1000 + " м";
      }
    }
  }
}