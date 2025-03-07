/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  const obj = {};
  obj.width = width;
  obj.height = height;
  obj.getArea = function ga() {
    return this.width * this.height;
  };
  return obj;
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const prop = JSON.parse(json);
  const obj = Object.create(proto);
  const keys = Object.keys(prop);
  for (let i = 0; i < keys.length; i += 1) {
    obj[keys[i]] = prop[keys[i]];
  }
  return obj;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

/* let counter = {
  els: 0,
  ids: 0,
  psEls: 0,
}; */
/* class CssSelClass {
  constructor() {
    this.str = '';
  }

  element(value) {
    this.str += value;
    return this;
  }

  id(value) {
    this.str += `#${value}`;
    return this;
  }

  class(value) {
    this.str += `.${value}`;
    return this;
  }

  attr(value) {
    this.str += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    this.str += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    this.str += `::${value}`;
    return this;
  }

  stringify() {
    const s = this.str;
    this.str = '';

    counter = { els: 0, ids: 0, psEls: 0 };

    return s;
  }
} */

/* const cssSelectorBuilder = {
  obj: null,
  s: '',

  element(value) {
    if (counter.els > 0) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    } else {
      counter.els += 1;
      this.obj = new CssSelClass().element(value);
    }
    return this.obj;
  },

  id(value) {
    if (counter.ids > 0) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    } else {
      counter.ids += 1;
      this.obj = new CssSelClass().id(value);
    }
    return this.obj;
  },

  class(value) {

    this.obj = new CssSelClass().class(value);
    return this.obj;
  },

  attr(value) {

    return this.obj;
  },

  pseudoClass(value) {

    this.obj = new CssSelClass().pseudoClass(value);
    return this.obj;
  },

  pseudoElement(value) {
    if (counter.psEls > 0) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    } else {
      counter.psEls += 1;
      this.obj = new CssSelClass().pseudoElement(value);
    }
    return this.obj;
  },

  combine(selector1, combinator, selector2) {
    counter = {
      els: 0,
      ids: 0,
      psEls: 0,
    };
       const start = selector1.stringify();

    const end = selector2.stringify();

    this.s = `${start} ${combinator} ${end}`;
    return this;
  },
  stringify() {
      const res = this.s;
    this.s = '';

    return res;
  },
}; */
const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
