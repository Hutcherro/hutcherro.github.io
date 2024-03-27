export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index_D42GQeYD.mjs').then(n => n.d);

export { page };
