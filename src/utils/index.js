export const getStateProxy = (component) =>
  new Proxy(component, {
    // 'Trap' the object on which we attempted to change a 'prop' - 'comp'
    set(comp, prop, value) {
      // 'this' is scope to 'set' - so we must 'comp' which will be the original 'this'
      // use brackets to interpolate - 'prop'
      comp.setState({ [prop]: value });
      return true;
    },
  });
