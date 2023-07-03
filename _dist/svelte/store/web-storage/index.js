import { TJSLocalStorage, TJSSessionStorage } from '@typhonjs-fvtt/runtime/svelte/store/web-storage';

/**
 * Loads a plugin managing a TJSLocalStorage instance.
 *
 * TODO: This will be moved to @typhonjs-svelte/runtime-plugins
 */
class TJSPLocalStorage
{
   #storage = new TJSLocalStorage();

   /**
    * Handles eventbus registration.
    *
    * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
    */
   onPluginLoad(ev)
   {
      const prepend = typeof ev?.pluginOptions?.eventPrepend === 'string' ? `${ev.pluginOptions.eventPrepend}:` : '';

      ev.eventbus.on(`${prepend}storage:local:item:get`, this.#storage.getItem, this.#storage, { guard: true });
      ev.eventbus.on(`${prepend}storage:local:item:boolean:swap`, this.#storage.swapItemBoolean, this.#storage,
       { guard: true });
      ev.eventbus.on(`${prepend}storage:local:item:set`, this.#storage.setItem, this.#storage, { guard: true });
      ev.eventbus.on(`${prepend}storage:local:store:get`, this.#storage.getStore, this.#storage, { guard: true });
   }
}

/**
 * Loads a plugin managing a TJSSessionStorage instance.
 *
 * TODO: This will be moved to @typhonjs-svelte/runtime-plugins
 */
class TJSPSessionStorage
{
   #storage = new TJSSessionStorage();

   /**
    * Handles eventbus registration.
    *
    * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
    */
   onPluginLoad(ev)
   {
      const prepend = typeof ev?.pluginOptions?.eventPrepend === 'string' ? `${ev.pluginOptions.eventPrepend}:` : '';

      ev.eventbus.on(`${prepend}storage:session:item:get`, this.#storage.getItem, this.#storage, { guard: true });
      ev.eventbus.on(`${prepend}storage:session:item:boolean:swap`, this.#storage.swapItemBoolean, this.#storage,
       { guard: true });
      ev.eventbus.on(`${prepend}storage:session:item:set`, this.#storage.setItem, this.#storage, { guard: true });
      ev.eventbus.on(`${prepend}storage:session:store:get`, this.#storage.getStore, this.#storage, { guard: true });
   }
}

export { TJSPLocalStorage, TJSPSessionStorage };
//# sourceMappingURL=index.js.map
