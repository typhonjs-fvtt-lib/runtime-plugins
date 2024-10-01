import * as _runtime_plugin_manager from '@typhonjs-fvtt/runtime/plugin/manager';

declare class PDOMPurify {
  static sanitize(dirty: any): any;
  static sanitizeWithVideo(dirty: any): any;
  /**
   * Handles eventbus registration.
   *
   * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
   */
  static onPluginLoad(ev: _runtime_plugin_manager.PluginInvokeEvent): void;
}

export { PDOMPurify };
