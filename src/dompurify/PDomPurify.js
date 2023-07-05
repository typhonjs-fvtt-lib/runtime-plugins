import { DOMPurify } from '#runtime/dompurify';

export class PDOMPurify
{
   static sanitize(dirty)
   {
      return DOMPurify.sanitize(dirty);
   }

   static sanitizeWithVideo(dirty)
   {
      return DOMPurify.sanitizeWithVideo(dirty);
   }

   /**
    * Handles eventbus registration.
    *
    * @param {import('#runtime/plugin/manager').PluginInvokeEvent} ev - Plugin event.
    */
   static onPluginLoad(ev)
   {
      const opts = { guard: true };

      const prepend = typeof ev?.pluginOptions?.eventPrepend === 'string' ? `${ev.pluginOptions.eventPrepend}:` : '';

      ev.eventbus.on(`${prepend}dompurify:sanitize`, this.sanitize, this, opts);
      ev.eventbus.on(`${prepend}dompurify:sanitize:video`, this.sanitizeWithVideo, this, opts);
   }
}
