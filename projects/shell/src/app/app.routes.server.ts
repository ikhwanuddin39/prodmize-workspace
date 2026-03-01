import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Shell is a thin wrapper that loads MFEs client-side.
    // Server-side rendering of MFE content doesn't work without
    // access to remote MFE bundles on the server.
    path: '**',
    renderMode: RenderMode.Client
  }
];
