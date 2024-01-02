import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import pageHierarchy from './pageHierarchy.json';
import siteSettings from './siteSettings.json';

// 2. Describe network behavior with request handlers.
const server = setupServer(
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/_api/pages/getpagehiearchy',
    ({ request, params, cookies }) => {
      return HttpResponse.json(pageHierarchy);
    }
  ),
  http.get(
    import.meta.env.VITE_API_BASE_URL +
      '/_api/pages/getstartpageorsettingspageproperties/*',
    ({ request, params, cookies }) => {
      return HttpResponse.json(siteSettings);
    }
  ),
  http.get(
    import.meta.env.VITE_API_BASE_URL + '/api/episerver/*',
    ({ request, params, cookies }) => {
      return HttpResponse.json(siteSettings);
    }
  )
);

// 3. Start request interception by starting the Service Worker.
server.listen();