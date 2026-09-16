import { registerRasterCodec } from '@pmndrs/glyph/core';

import { glyphExampleCodecDefinition } from './portable.js';

/** Renderer-neutral registration performed by the portable package root. */
export const glyphExampleCodec: typeof glyphExampleCodecDefinition = registerRasterCodec(glyphExampleCodecDefinition);
