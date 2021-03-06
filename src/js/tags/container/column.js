
riot.tag('column', '<div class="_modifier_"><content></content></div>', function(opts) {
    this.classes = {
      md: 'col-md-',
      lg: 'col-lg-',
      sm: 'col-sm-',
      xs: 'col-xs-'
    }
    this.modifier = '';
    opts.md ? this.modifier += ' ' + this.classes.md + opts.md : false;
    opts.lg ? this.modifier += ' ' + this.classes.lg + opts.lg : false;
    opts.sm ? this.modifier += ' ' + this.classes.sm + opts.sm : false;
    opts.xs ? this.modifier += ' ' + this.classes.xs + opts.xs : false;
  
});