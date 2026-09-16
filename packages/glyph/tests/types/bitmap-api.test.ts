import type { RasterDecodeArtifact, RasterDecodeFont } from '@pmndrs/glyph';
import { bitmap, type BitmapData, type BitmapOptions } from '@pmndrs/glyph/raster';

const inline = bitmap.descriptor({ strikes: [16, 32] });
const tuple = [16, 32] as const;
const fromTuple = bitmap.descriptor({ strikes: tuple });
void inline;
void fromTuple;

const configured: BitmapOptions<typeof tuple> = { strikes: tuple };
const request = bitmap(configured);
void request;
declare const font: RasterDecodeFont;
declare const raster: RasterDecodeArtifact<'bitmap'>;
const bitmapData: Promise<BitmapData> = bitmap.decode(font, raster);
void bitmapData;

declare const dynamicStrike: number;
declare const dynamicStrikes: number[];

bitmap.descriptor({ strikes: [dynamicStrike] });
// @ts-expect-error Strikes must be non-empty.
bitmap.descriptor({ strikes: [] });
// @ts-expect-error Broad arrays cannot describe bake-time payloads.
bitmap({ strikes: dynamicStrikes });
// @ts-expect-error Broad arrays cannot configure the portable bitmap technique.
bitmap.descriptor({ strikes: dynamicStrikes });
