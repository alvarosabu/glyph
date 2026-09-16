import type { RasterDecodeArtifact, RasterDecodeFont } from '@pmndrs/glyph';
import {
  validateMsdfArtifact,
  type MsdfArtifactValidationContext,
  type ValidatedMsdfArtifact,
} from '../../dist/bakers/msdf-validator.js';
import { msdf, type MsdfData, type MsdfOptions } from '@pmndrs/glyph/raster';

const descriptor = msdf.descriptor(undefined);
const configuredDescriptor = msdf.descriptor({ emSize: 32, pixelRange: 6 });
const configuredOptions: MsdfOptions = { emSize: 32, pixelRange: 6 };
const kind: 'msdf' = msdf.kind;
declare const font: RasterDecodeFont;
declare const raster: RasterDecodeArtifact<'msdf'>;
const data: Promise<MsdfData> = msdf.decode(font, raster);
declare const artifactBytes: Uint8Array;
declare const validationContext: MsdfArtifactValidationContext;
const validation: Promise<ValidatedMsdfArtifact> = validateMsdfArtifact(artifactBytes, validationContext);

void descriptor;
void configuredDescriptor;
void configuredOptions;
void kind;
void data;
void validation;
const request = msdf({ emSize: 32, pixelRange: 4 });
void request;

// @ts-expect-error MSDF emSize is numeric.
msdf.descriptor({ emSize: '32' });

// @ts-expect-error MSDF options reject unknown fields.
msdf.descriptor({ emSize: 32, quality: 'high' });
