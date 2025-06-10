import { TJSSessionStorage }  from '#runtime/svelte/store/web-storage';

/**
 * Loads a plugin managing a TJSSessionStorage instance.
 *
 * TODO: This will be moved to @typhonjs-svelte/runtime-plugins
 */
export class TJSPSessionStorage
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

      const opts = { guard: true };

      ev.eventbus.on(`${prepend}storage:session:get`, () => this.#storage, this.#storage, opts);

      ev.eventbus.on(`${prepend}storage:session:entries`, this.#storage.entries, this.#storage, opts);
      ev.eventbus.on(`${prepend}storage:session:keys`, this.#storage.keys, this.#storage, opts);
      ev.eventbus.on(`${prepend}storage:session:stores`, this.#storage.stores, this.#storage, opts);

      ev.eventbus.on(`${prepend}storage:session:item:get`, this.#storage.getItem, this.#storage, opts);
      ev.eventbus.on(`${prepend}storage:session:item:boolean:swap`, this.#storage.swapItemBoolean, this.#storage, opts);
      ev.eventbus.on(`${prepend}storage:session:item:set`, this.#storage.setItem, this.#storage, opts);

      ev.eventbus.on(`${prepend}storage:session:store:get`, this.#storage.getStore, this.#storage, opts);
      ev.eventbus.on(`${prepend}storage:session:store:has`, this.#storage.hasStore, this.#storage, opts);
   }
}
