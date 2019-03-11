import { ProductEffects } from './product.effect';
import { CatalogEffect } from './catalog.effect';

export const effects: any[] = [
    ProductEffects,
    CatalogEffect
];

export * from './product.effect';
export * from './catalog.effect';