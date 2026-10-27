// The server address comes from Stashr (see utils/serverBase.js), so it has to be known before any other module reads it.
import { resolveServerBase } from './utils/serverBase';

resolveServerBase().finally(() => import('./bootstrap'));
