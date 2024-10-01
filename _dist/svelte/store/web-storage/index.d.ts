import * as _runtime_plugin_manager from '@typhonjs-fvtt/runtime/plugin/manager';

/**
 * Loads a plugin managing a TJSLocalStorage instance.
 *
 * TODO: This will be moved to @typhonjs-svelte/runtime-plugins
 */
declare class TJSPLocalStorage {
  /**
   * Handles eventbus registration.
   *
   * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
   */
  onPluginLoad(ev: _runtime_plugin_manager.PluginInvokeEvent): void;
  #private;
}

/**
 * Loads a plugin managing a TJSSessionStorage instance.
 *
 * TODO: This will be moved to @typhonjs-svelte/runtime-plugins
 */
declare class TJSPSessionStorage {
  /**
   * Handles eventbus registration.
   *
   * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
   */
  onPluginLoad(ev: _runtime_plugin_manager.PluginInvokeEvent): void;
  #private;
}

export { TJSPLocalStorage, TJSPSessionStorage };
