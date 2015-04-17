
riot.tag('btn', '<button class="_modifier_"><content></content></button>', function(opts) {
    this.classes = {
      active: 'active',
      disabled: 'disabled',
      block: 'btn-block',
      state: {
        default: 'btn-default',
        primary: 'btn-primary',
        success: 'btn-success',
        danger: 'btn-danger',
        warning: 'btn-warning',
        link: 'btn-link'
      },
      size: {
        lg: 'btn-lg',
        sm: 'btn-sm',
        xs: 'btn-xs'
      }
    };
    this.modifier = 'btn';
    opts.active ? this.modifier += ' ' + this.classes.active : false;
    opts.disabled ? this.modifier += ' ' + this.classes.disabled : false;
    opts.state ? this.modifier += ' ' + this.classes.state[opts.state] : this.classes.state.default;
    opts.size ? this.modifier += ' ' + this.classes.size[opts.size] : false;
    opts.block ? this.modifier += ' ' + this.classes.block : false;
  
});