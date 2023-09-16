import { NewtClient } from 'newt-client-js';

declare module '#app' {
  interface NuxtApp {
    $newtClient: NewtClient;
  }
}