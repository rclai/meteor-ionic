Template.ionSubheaderBar.rendered = function () {
  Session.set('hasSubheader', true);
};

Template.ionSubheaderBar.destroyed = function () {
  Session.set('hasSubheader', false);
};

Template.ionSubheaderBar.helpers({
  classes: function () {
    var classes = ['bar', 'bar-subheader'];

    if (this.class) {
      classes.push(this.class);
    } else {
      classes.push('bar-stable');
    }

    return classes.join(' ');
  }
});
