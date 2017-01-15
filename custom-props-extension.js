(function( $ ) {

  $.customproperty = function(property) {
    return $('body').customproperty(property);
  };

  $.fn.extend({
    customproperty : function(property) {

      // Perform a few checks to make sure the selector that is being checked is valid
      var selector = this;

      if (selector) {

        if (property) {
          if ($.isArray(property)) {

            var properties = [];

            $.each(property, function( index, value ) {

              value = CustomProps.read($(selector), value);

              if ($.isNumeric(value)) {
                value = parseInt(value, 10);
              }

              properties.push(value);
            });

            return properties;

          } else {

            return CustomProps.read($(selector), property);

          }
        } else {
          // Return all custom properties for this selector
          return CustomProps.data($(selector));
        }
      }
    }
  });
}( jQuery ));
