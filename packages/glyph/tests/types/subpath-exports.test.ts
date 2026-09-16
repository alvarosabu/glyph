import { defineGlyphConfig, defineRasterFormat, defineTechniqueSchema } from '@pmndrs/glyph/config';
import { useBitmap } from '@pmndrs/glyph/react';
import { bitmap } from '@pmndrs/glyph/raster';
import { defineTextMaterial } from '@pmndrs/glyph/three';
import { slugRender } from '@pmndrs/glyph/shaders/typegpu';

void defineGlyphConfig;
void defineRasterFormat;
void defineTechniqueSchema;
void useBitmap;
void bitmap;
void defineTextMaterial;
void slugRender;

import {
  ThreeConfig as experimentalThreeConfig,
  defineThreeConfig as defineExperimentalThreeConfig,
  Text as ExperimentalText,
} from '@pmndrs/glyph/three/typegpu';
void experimentalThreeConfig;
void defineExperimentalThreeConfig({ defaultFontFormat: 'slug' });
void ExperimentalText;
