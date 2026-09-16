import type { RasterDecodeArtifact, RasterDecodeFont } from '@pmndrs/glyph';
import { slug, type SlugData } from '@pmndrs/glyph/raster';

const descriptor = slug.descriptor(undefined);
const kind: 'slug' = slug.kind;
declare const font: RasterDecodeFont;
declare const raster: RasterDecodeArtifact<'slug'>;
const data: Promise<SlugData> = slug.decode(font, raster);

void descriptor;
void kind;
void data;
const request = slug();
void request;
