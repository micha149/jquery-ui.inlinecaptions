/*
 * jQuery UI widget for inline captions
 *
 * Copyright 2010-2012, Michael van Engelshoven
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget( "ui.inlinecaptions", {

    /**
     * Default options
     */
    options: {
        // TODO: No options?!    
    },

    /**
     * Create DOM structure for inline captions
     */
    _create: function() {

        var self     = this,
            options  = self.options,
            element  = self.element,
            name     = element.attr('name'),
            label    = $('label[for = "' + name + '"]'),
            formline = element.closest('.formLine').addClass('ui-inlinecaptions');

        this.label    = label;
        this.formline = formline;

        element.bind('focus.inlinecaptions', function() {
            if (label.is(':visible')) {
                label.animate({'opacity': '0.5'}, 250);
            }
        });

        element.bind('blur.inlinecaptions', function() {
            if ($.trim(element.val()) == '') {
                label.show().animate({'opacity': '1'}, 250);
            }
        });

        element.bind('keyup.inlinecaptions change.inlinecaptions', function() {
            if ($.trim(element.val()) == '') {
                if (label.is(':hidden')) {
                    label.fadeIn('fast');
                }
            } else if (label.is(':visible')) {
                label.hide();
            }
        });

        element.keyup();
    },

    /**
     * Remove all the inlinecaption stuff
     */
    destroy: function() {
        // TODO: Implement this
        $.Widget.prototype.destroy.apply( this, arguments );
    }

});

$.extend( $.ui.inlinecaptions, {
    version: "@VERSION"
});

})( jQuery );