// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/object-assign/index.js":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"node_modules/prop-types/lib/ReactPropTypesSecret.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"node_modules/prop-types/checkPropTypes.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var printWarning = function () {};

if ("development" !== 'production') {
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if ("development" !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
},{"./lib/ReactPropTypesSecret":"node_modules/prop-types/lib/ReactPropTypesSecret.js"}],"node_modules/react/cjs/react.development.js":[function(require,module,exports) {
/** @license React v16.9.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict';

    var _assign = require('object-assign');

    var checkPropTypes = require('prop-types/checkPropTypes'); // TODO: this is special because it gets imported during build.


    var ReactVersion = '16.9.0'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    } // Do not require this module directly! Use normal `invariant` calls with
    // template literal strings. The messages will be converted to ReactError during
    // build, and in production they will be minified.
    // Do not require this module directly! Use normal `invariant` calls with
    // template literal strings. The messages will be converted to ReactError during
    // build, and in production they will be minified.


    function ReactError(error) {
      error.name = 'Invariant Violation';
      return error;
    }
    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warningWithoutStack = function () {};

    {
      warningWithoutStack = function (condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }

        if (condition) {
          return;
        }

        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610

          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }
    var warningWithoutStack$1 = warningWithoutStack;
    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      (function () {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw ReactError(Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'));
          }
        }
      })();

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      suspense: null
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function (name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    };

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
        }
      }

      return null;
    }

    var ReactDebugCurrentFrame = {};
    var currentlyValidatingElement = null;

    function setCurrentlyValidatingElement(element) {
      {
        currentlyValidatingElement = element;
      }
    }

    {
      // Stack implementation injected by the current renderer.
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentlyValidatingElement) {
          var name = getComponentName(currentlyValidatingElement.type);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      _assign(ReactSharedInternals, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    }
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = warningWithoutStack$1;
    {
      warning = function (condition, format) {
        if (condition) {
          return;
        }

        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }
    var warning$1 = warning;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown = void 0;
    var specialPropRefWarningShown = void 0;

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, no instanceof check
     * will work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */

    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */


    function jsxDEV(type, config, maybeKey, source, self) {
      var propName = void 0; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;

      if (hasValidRef(config)) {
        ref = config.ref;
      }

      if (hasValidKey(config)) {
        key = '' + config.key;
      } // Remaining properties are added to a new props object


      for (propName in config) {
        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      } // intentionally not checking if key was set above
      // this key is higher priority as it's static


      if (maybeKey !== undefined) {
        key = '' + maybeKey;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      if (key || ref) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }

        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }

      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName = void 0; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    /**
     * Return a function that produces ReactElements of a given type.
     * See https://reactjs.org/docs/react-api.html#createfactory
     */


    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      (function () {
        if (!!(element === null || element === undefined)) {
          {
            throw ReactError(Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'));
          }
        }
      })();

      var propName = void 0; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps = void 0;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];

    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;

      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }
    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child = void 0;
      var nextName = void 0;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(children);
          var step = void 0;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;

          (function () {
            {
              {
                throw ReactError(Error('Objects are not valid as a React child (found: ' + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ').' + addendum));
              }
            }
          })();
        }
      }

      return subtreeCount;
    }
    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof component === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;
      func.call(context, child, bookKeeping.count++);
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }

      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
      var mappedChild = func.call(context, child, bookKeeping.count++);

      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
          return c;
        });
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }

        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';

      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }

      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      return traverseAllChildren(children, function () {
        return null;
      }, null);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
        return child;
      });
      return result;
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      (function () {
        if (!isValidElement(children)) {
          {
            throw ReactError(Error('React.Children.only expected to receive a single React element child.'));
          }
        }
      })();

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    function lazy(ctor) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _ctor: ctor,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };
      {
        // In production, this would just set it on the object.
        var defaultProps = void 0;
        var propTypes = void 0;
        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        } else {
          !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
          render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
        }

        if (render != null) {
          !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
        }
      }
      return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
    }

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
      }
      return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      (function () {
        if (!(dispatcher !== null)) {
          {
            throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
          }
        }
      })();

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, inputs);
    }

    function useLayoutEffect(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, inputs);
    }

    function useCallback(callback, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, inputs);
    }

    function useMemo(create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, inputs);
    }

    function useImperativeHandle(ref, create, inputs) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, inputs);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    var emptyObject$1 = {};

    function useResponder(responder, listenerProps) {
      var dispatcher = resolveDispatcher();
      {
        if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
          warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
          return;
        }
      }
      return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
    } // Within the scope of the callback, mark all updates as being allowed to suspend.


    function withSuspenseConfig(scope, config) {
      var previousConfig = ReactCurrentBatchConfig.suspense;
      ReactCurrentBatchConfig.suspense = config === undefined ? null : config;

      try {
        scope();
      } finally {
        ReactCurrentBatchConfig.suspense = previousConfig;
      }
    }
    /**
     * ReactElementValidator provides a wrapper around a element factory
     * which validates the props passed to the element. This is intended to be
     * used only in DEV and could be replaced by a static type checker for languages
     * that support it.
     */


    var propTypesMisspellWarningShown = void 0;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = '\n\nCheck the top-level render call using <' + parentName + '>.';
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
      }

      setCurrentlyValidatingElement(element);
      {
        warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
      }
      setCurrentlyValidatingElement(null);
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step = void 0;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      var type = element.type;

      if (type === null || type === undefined || typeof type === 'string') {
        return;
      }

      var name = getComponentName(type);
      var propTypes = void 0;

      if (typeof type === 'function') {
        propTypes = type.propTypes;
      } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      type.$$typeof === REACT_MEMO_TYPE)) {
        propTypes = type.propTypes;
      } else {
        return;
      }

      if (propTypes) {
        setCurrentlyValidatingElement(element);
        checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
        setCurrentlyValidatingElement(null);
      } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
        propTypesMisspellWarningShown = true;
        warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
      }

      if (typeof type.getDefaultProps === 'function') {
        !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      setCurrentlyValidatingElement(fragment);
      var keys = Object.keys(fragment.props);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (key !== 'children' && key !== 'key') {
          warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
          break;
        }
      }

      if (fragment.ref !== null) {
        warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
      }

      setCurrentlyValidatingElement(null);
    }

    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(source);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString = void 0;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }

        warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
      }

      var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        var children = props.children;

        if (children !== undefined) {
          if (isStaticChildren) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }
          } else {
            validateChildKeys(children, type);
          }
        }
      }

      if (props.key !== undefined) {
        warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.


    function jsxWithValidationStatic(type, props, key) {
      return jsxWithValidation(type, props, key, true);
    }

    function jsxWithValidationDynamic(type, props, key) {
      return jsxWithValidation(type, props, key, false);
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString = void 0;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }

        warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type; // Legacy hook: remove it

      {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    var hasBadMapPolyfill = void 0;
    {
      hasBadMapPolyfill = false;

      try {
        var frozenObject = Object.freeze({});
        var testMap = new Map([[frozenObject, null]]);
        var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
        // https://github.com/rollup/rollup/issues/1771
        // TODO: we can remove these if Rollup fixes the bug.

        testMap.set(0, 0);
        testSet.add(0);
      } catch (e) {
        // TODO: Consider warning about bad polyfills
        hasBadMapPolyfill = true;
      }
    }

    function createFundamentalComponent(impl) {
      // We use responder as a Map key later on. When we have a bad
      // polyfill, then we can't use it as a key as the polyfill tries
      // to add a property to the object.
      if (true && !hasBadMapPolyfill) {
        Object.freeze(impl);
      }

      var fundamantalComponent = {
        $$typeof: REACT_FUNDAMENTAL_TYPE,
        impl: impl
      };
      {
        Object.freeze(fundamantalComponent);
      }
      return fundamantalComponent;
    }

    function createEventResponder(displayName, responderConfig) {
      var getInitialState = responderConfig.getInitialState,
          onEvent = responderConfig.onEvent,
          onMount = responderConfig.onMount,
          onUnmount = responderConfig.onUnmount,
          onOwnershipChange = responderConfig.onOwnershipChange,
          onRootEvent = responderConfig.onRootEvent,
          rootEventTypes = responderConfig.rootEventTypes,
          targetEventTypes = responderConfig.targetEventTypes;
      var eventResponder = {
        $$typeof: REACT_RESPONDER_TYPE,
        displayName: displayName,
        getInitialState: getInitialState || null,
        onEvent: onEvent || null,
        onMount: onMount || null,
        onOwnershipChange: onOwnershipChange || null,
        onRootEvent: onRootEvent || null,
        onUnmount: onUnmount || null,
        rootEventTypes: rootEventTypes || null,
        targetEventTypes: targetEventTypes || null
      }; // We use responder as a Map key later on. When we have a bad
      // polyfill, then we can't use it as a key as the polyfill tries
      // to add a property to the object.

      if (true && !hasBadMapPolyfill) {
        Object.freeze(eventResponder);
      }

      return eventResponder;
    } // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.
    // Only used in www builds.
    // TODO: true? Here it might just be false.
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
    // This is a flag so we can fix warnings in RN core before turning it on
    // Experimental React Flare event system and event components support.


    var enableFlareAPI = false; // Experimental Host Component support.

    var enableFundamentalAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

    var enableJSXTransformAPI = false; // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
    // Temporary flag to revert the fix in #15650
    // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.
    // Changes priority of some events like mousemove to user-blocking priority,
    // but without making them discrete. The flag exists in case it causes
    // starvation problems.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.
    // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

    var React = {
      Children: {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      },
      createRef: createRef,
      Component: Component,
      PureComponent: PureComponent,
      createContext: createContext,
      forwardRef: forwardRef,
      lazy: lazy,
      memo: memo,
      useCallback: useCallback,
      useContext: useContext,
      useEffect: useEffect,
      useImperativeHandle: useImperativeHandle,
      useDebugValue: useDebugValue,
      useLayoutEffect: useLayoutEffect,
      useMemo: useMemo,
      useReducer: useReducer,
      useRef: useRef,
      useState: useState,
      Fragment: REACT_FRAGMENT_TYPE,
      Profiler: REACT_PROFILER_TYPE,
      StrictMode: REACT_STRICT_MODE_TYPE,
      Suspense: REACT_SUSPENSE_TYPE,
      unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,
      createElement: createElementWithValidation,
      cloneElement: cloneElementWithValidation,
      createFactory: createFactoryWithValidation,
      isValidElement: isValidElement,
      version: ReactVersion,
      unstable_withSuspenseConfig: withSuspenseConfig,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
    };

    if (enableFlareAPI) {
      React.unstable_useResponder = useResponder;
      React.unstable_createResponder = createEventResponder;
    }

    if (enableFundamentalAPI) {
      React.unstable_createFundamental = createFundamentalComponent;
    } // Note: some APIs are added with feature flags.
    // Make sure that stable builds for open source
    // don't modify the React object to avoid deopts.
    // Also let's not expose their names in stable builds.


    if (enableJSXTransformAPI) {
      {
        React.jsxDEV = jsxWithValidation;
        React.jsx = jsxWithValidationDynamic;
        React.jsxs = jsxWithValidationStatic;
      }
    }

    var React$2 = Object.freeze({
      default: React
    });
    var React$3 = React$2 && React || React$2; // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest.

    var react = React$3.default || React$3;
    module.exports = react;
  })();
}
},{"object-assign":"node_modules/object-assign/index.js","prop-types/checkPropTypes":"node_modules/prop-types/checkPropTypes.js"}],"node_modules/react/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.development.js":"node_modules/react/cjs/react.development.js"}],"node_modules/scheduler/cjs/scheduler.development.js":[function(require,module,exports) {
/** @license React v0.15.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var enableSchedulerDebugging = false;
    var enableIsInputPending = false;
    var requestIdleCallbackBeforeFirstFrame = false;
    var requestTimerEventBeforeFirstFrame = false;
    var enableMessageLoopImplementation = false; // The DOM Scheduler implementation is similar to requestIdleCallback. It
    // works by scheduling a requestAnimationFrame, storing the time for the start
    // of the frame, then scheduling a postMessage which gets scheduled after paint.
    // Within the postMessage handler do as much work as possible until time + frame
    // rate. By separating the idle call into a separate event tick we ensure that
    // layout, paint and other browser work is counted against the available time.
    // The frame rate is dynamically adjusted.

    var requestHostCallback = void 0;
    var requestHostTimeout = void 0;
    var cancelHostTimeout = void 0;
    var shouldYieldToHost = void 0;
    var requestPaint = void 0;
    exports.unstable_now = void 0;
    exports.unstable_forceFrameRate = void 0;

    if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
    // implementation using setTimeout.
    typeof window === 'undefined' || // Check if MessageChannel is supported, too.
    typeof MessageChannel !== 'function') {
      // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
      // fallback to a naive implementation.
      var _callback = null;
      var _timeoutID = null;

      var _flushCallback = function () {
        if (_callback !== null) {
          try {
            var currentTime = exports.unstable_now();
            var hasRemainingTime = true;

            _callback(hasRemainingTime, currentTime);

            _callback = null;
          } catch (e) {
            setTimeout(_flushCallback, 0);
            throw e;
          }
        }
      };

      exports.unstable_now = function () {
        return Date.now();
      };

      requestHostCallback = function (cb) {
        if (_callback !== null) {
          // Protect against re-entrancy.
          setTimeout(requestHostCallback, 0, cb);
        } else {
          _callback = cb;
          setTimeout(_flushCallback, 0);
        }
      };

      requestHostTimeout = function (cb, ms) {
        _timeoutID = setTimeout(cb, ms);
      };

      cancelHostTimeout = function () {
        clearTimeout(_timeoutID);
      };

      shouldYieldToHost = function () {
        return false;
      };

      requestPaint = exports.unstable_forceFrameRate = function () {};
    } else {
      // Capture local references to native APIs, in case a polyfill overrides them.
      var performance = window.performance;
      var _Date = window.Date;
      var _setTimeout = window.setTimeout;
      var _clearTimeout = window.clearTimeout;
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;
      var requestIdleCallback = window.requestIdleCallback;

      if (typeof console !== 'undefined') {
        // TODO: Remove fb.me link
        if (typeof requestAnimationFrame !== 'function') {
          console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }

        if (typeof cancelAnimationFrame !== 'function') {
          console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }
      }

      var requestIdleCallbackBeforeFirstFrame$1 = requestIdleCallbackBeforeFirstFrame && typeof requestIdleCallback === 'function' && typeof cancelIdleCallback === 'function';
      exports.unstable_now = typeof performance === 'object' && typeof performance.now === 'function' ? function () {
        return performance.now();
      } : function () {
        return _Date.now();
      };
      var isRAFLoopRunning = false;
      var isMessageLoopRunning = false;
      var scheduledHostCallback = null;
      var rAFTimeoutID = -1;
      var taskTimeoutID = -1;
      var frameLength = enableMessageLoopImplementation ? // We won't attempt to align with the vsync. Instead we'll yield multiple
      // times per frame, often enough to keep it responsive even at really
      // high frame rates > 120.
      5 : // Use a heuristic to measure the frame rate and yield at the end of the
      // frame. We start out assuming that we run at 30fps but then the
      // heuristic tracking will adjust this value to a faster fps if we get
      // more frequent animation frames.
      33.33;
      var prevRAFTime = -1;
      var prevRAFInterval = -1;
      var frameDeadline = 0;
      var fpsLocked = false; // TODO: Make this configurable
      // TODO: Adjust this based on priority?

      var maxFrameLength = 300;
      var needsPaint = false;

      if (enableIsInputPending && navigator !== undefined && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        var scheduling = navigator.scheduling;

        shouldYieldToHost = function () {
          var currentTime = exports.unstable_now();

          if (currentTime >= frameDeadline) {
            // There's no time left in the frame. We may want to yield control of
            // the main thread, so the browser can perform high priority tasks. The
            // main ones are painting and user input. If there's a pending paint or
            // a pending input, then we should yield. But if there's neither, then
            // we can yield less often while remaining responsive. We'll eventually
            // yield regardless, since there could be a pending paint that wasn't
            // accompanied by a call to `requestPaint`, or other main thread tasks
            // like network events.
            if (needsPaint || scheduling.isInputPending()) {
              // There is either a pending paint or a pending input.
              return true;
            } // There's no pending input. Only yield if we've reached the max
            // frame length.


            return currentTime >= frameDeadline + maxFrameLength;
          } else {
            // There's still time left in the frame.
            return false;
          }
        };

        requestPaint = function () {
          needsPaint = true;
        };
      } else {
        // `isInputPending` is not available. Since we have no way of knowing if
        // there's pending input, always yield at the end of the frame.
        shouldYieldToHost = function () {
          return exports.unstable_now() >= frameDeadline;
        }; // Since we yield every frame regardless, `requestPaint` has no effect.


        requestPaint = function () {};
      }

      exports.unstable_forceFrameRate = function (fps) {
        if (fps < 0 || fps > 125) {
          console.error('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
          return;
        }

        if (fps > 0) {
          frameLength = Math.floor(1000 / fps);
          fpsLocked = true;
        } else {
          // reset the framerate
          frameLength = 33.33;
          fpsLocked = false;
        }
      };

      var performWorkUntilDeadline = function () {
        if (enableMessageLoopImplementation) {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now(); // Yield after `frameLength` ms, regardless of where we are in the vsync
            // cycle. This means there's always time remaining at the beginning of
            // the message event.

            frameDeadline = currentTime + frameLength;
            var hasTimeRemaining = true;

            try {
              var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

              if (!hasMoreWork) {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              } else {
                // If there's more work, schedule the next message event at the end
                // of the preceding one.
                port.postMessage(null);
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed.
              port.postMessage(null);
              throw error;
            }
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        } else {
          if (scheduledHostCallback !== null) {
            var _currentTime = exports.unstable_now();

            var _hasTimeRemaining = frameDeadline - _currentTime > 0;

            try {
              var _hasMoreWork = scheduledHostCallback(_hasTimeRemaining, _currentTime);

              if (!_hasMoreWork) {
                scheduledHostCallback = null;
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed, and post a new task as soon as possible
              // so we can continue where we left off.
              port.postMessage(null);
              throw error;
            }
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        }
      };

      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;

      var onAnimationFrame = function (rAFTime) {
        if (scheduledHostCallback === null) {
          // No scheduled work. Exit.
          prevRAFTime = -1;
          prevRAFInterval = -1;
          isRAFLoopRunning = false;
          return;
        } // Eagerly schedule the next animation callback at the beginning of the
        // frame. If the scheduler queue is not empty at the end of the frame, it
        // will continue flushing inside that callback. If the queue *is* empty,
        // then it will exit immediately. Posting the callback at the start of the
        // frame ensures it's fired within the earliest possible frame. If we
        // waited until the end of the frame to post the callback, we risk the
        // browser skipping a frame and not firing the callback until the frame
        // after that.


        isRAFLoopRunning = true;
        requestAnimationFrame(function (nextRAFTime) {
          _clearTimeout(rAFTimeoutID);

          onAnimationFrame(nextRAFTime);
        }); // requestAnimationFrame is throttled when the tab is backgrounded. We
        // don't want to stop working entirely. So we'll fallback to a timeout loop.
        // TODO: Need a better heuristic for backgrounded work.

        var onTimeout = function () {
          frameDeadline = exports.unstable_now() + frameLength / 2;
          performWorkUntilDeadline();
          rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);
        };

        rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);

        if (prevRAFTime !== -1 && // Make sure this rAF time is different from the previous one. This check
        // could fail if two rAFs fire in the same frame.
        rAFTime - prevRAFTime > 0.1) {
          var rAFInterval = rAFTime - prevRAFTime;

          if (!fpsLocked && prevRAFInterval !== -1) {
            // We've observed two consecutive frame intervals. We'll use this to
            // dynamically adjust the frame rate.
            //
            // If one frame goes long, then the next one can be short to catch up.
            // If two frames are short in a row, then that's an indication that we
            // actually have a higher frame rate than what we're currently
            // optimizing. For example, if we're running on 120hz display or 90hz VR
            // display. Take the max of the two in case one of them was an anomaly
            // due to missed frame deadlines.
            if (rAFInterval < frameLength && prevRAFInterval < frameLength) {
              frameLength = rAFInterval < prevRAFInterval ? prevRAFInterval : rAFInterval;

              if (frameLength < 8.33) {
                // Defensive coding. We don't support higher frame rates than 120hz.
                // If the calculated frame length gets lower than 8, it is probably
                // a bug.
                frameLength = 8.33;
              }
            }
          }

          prevRAFInterval = rAFInterval;
        }

        prevRAFTime = rAFTime;
        frameDeadline = rAFTime + frameLength; // We use the postMessage trick to defer idle work until after the repaint.

        port.postMessage(null);
      };

      requestHostCallback = function (callback) {
        scheduledHostCallback = callback;

        if (enableMessageLoopImplementation) {
          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            port.postMessage(null);
          }
        } else {
          if (!isRAFLoopRunning) {
            // Start a rAF loop.
            isRAFLoopRunning = true;
            requestAnimationFrame(function (rAFTime) {
              if (requestIdleCallbackBeforeFirstFrame$1) {
                cancelIdleCallback(idleCallbackID);
              }

              if (requestTimerEventBeforeFirstFrame) {
                _clearTimeout(idleTimeoutID);
              }

              onAnimationFrame(rAFTime);
            }); // If we just missed the last vsync, the next rAF might not happen for
            // another frame. To claim as much idle time as possible, post a
            // callback with `requestIdleCallback`, which should fire if there's
            // idle time left in the frame.
            //
            // This should only be an issue for the first rAF in the loop;
            // subsequent rAFs are scheduled at the beginning of the
            // preceding frame.

            var idleCallbackID = void 0;

            if (requestIdleCallbackBeforeFirstFrame$1) {
              idleCallbackID = requestIdleCallback(function onIdleCallbackBeforeFirstFrame() {
                if (requestTimerEventBeforeFirstFrame) {
                  _clearTimeout(idleTimeoutID);
                }

                frameDeadline = exports.unstable_now() + frameLength;
                performWorkUntilDeadline();
              });
            } // Alternate strategy to address the same problem. Scheduler a timer
            // with no delay. If this fires before the rAF, that likely indicates
            // that there's idle time before the next vsync. This isn't always the
            // case, but we'll be aggressive and assume it is, as a trade off to
            // prevent idle periods.


            var idleTimeoutID = void 0;

            if (requestTimerEventBeforeFirstFrame) {
              idleTimeoutID = _setTimeout(function onTimerEventBeforeFirstFrame() {
                if (requestIdleCallbackBeforeFirstFrame$1) {
                  cancelIdleCallback(idleCallbackID);
                }

                frameDeadline = exports.unstable_now() + frameLength;
                performWorkUntilDeadline();
              }, 0);
            }
          }
        }
      };

      requestHostTimeout = function (callback, ms) {
        taskTimeoutID = _setTimeout(function () {
          callback(exports.unstable_now());
        }, ms);
      };

      cancelHostTimeout = function () {
        _clearTimeout(taskTimeoutID);

        taskTimeoutID = -1;
      };
    }
    /* eslint-disable no-var */
    // TODO: Use symbols?


    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5; // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111

    var maxSigned31BitInt = 1073741823; // Times out immediately

    var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

    var USER_BLOCKING_PRIORITY = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

    var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored as a circular, doubly linked list.

    var firstTask = null;
    var firstDelayedTask = null; // Pausing the scheduler is useful for debugging.

    var isSchedulerPaused = false;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;

    function scheduler_flushTaskAtPriority_Immediate(callback, didTimeout) {
      return callback(didTimeout);
    }

    function scheduler_flushTaskAtPriority_UserBlocking(callback, didTimeout) {
      return callback(didTimeout);
    }

    function scheduler_flushTaskAtPriority_Normal(callback, didTimeout) {
      return callback(didTimeout);
    }

    function scheduler_flushTaskAtPriority_Low(callback, didTimeout) {
      return callback(didTimeout);
    }

    function scheduler_flushTaskAtPriority_Idle(callback, didTimeout) {
      return callback(didTimeout);
    }

    function flushTask(task, currentTime) {
      // Remove the task from the list before calling the callback. That way the
      // list is in a consistent state even if the callback throws.
      var next = task.next;

      if (next === task) {
        // This is the only scheduled task. Clear the list.
        firstTask = null;
      } else {
        // Remove the task from its position in the list.
        if (task === firstTask) {
          firstTask = next;
        }

        var previous = task.previous;
        previous.next = next;
        next.previous = previous;
      }

      task.next = task.previous = null; // Now it's safe to execute the task.

      var callback = task.callback;
      var previousPriorityLevel = currentPriorityLevel;
      var previousTask = currentTask;
      currentPriorityLevel = task.priorityLevel;
      currentTask = task;
      var continuationCallback;

      try {
        var didUserCallbackTimeout = task.expirationTime <= currentTime; // Add an extra function to the callstack. Profiling tools can use this
        // to infer the priority of work that appears higher in the stack.

        switch (currentPriorityLevel) {
          case ImmediatePriority:
            continuationCallback = scheduler_flushTaskAtPriority_Immediate(callback, didUserCallbackTimeout);
            break;

          case UserBlockingPriority:
            continuationCallback = scheduler_flushTaskAtPriority_UserBlocking(callback, didUserCallbackTimeout);
            break;

          case NormalPriority:
            continuationCallback = scheduler_flushTaskAtPriority_Normal(callback, didUserCallbackTimeout);
            break;

          case LowPriority:
            continuationCallback = scheduler_flushTaskAtPriority_Low(callback, didUserCallbackTimeout);
            break;

          case IdlePriority:
            continuationCallback = scheduler_flushTaskAtPriority_Idle(callback, didUserCallbackTimeout);
            break;
        }
      } catch (error) {
        throw error;
      } finally {
        currentPriorityLevel = previousPriorityLevel;
        currentTask = previousTask;
      } // A callback may return a continuation. The continuation should be scheduled
      // with the same priority and expiration as the just-finished callback.


      if (typeof continuationCallback === 'function') {
        var expirationTime = task.expirationTime;
        var continuationTask = task;
        continuationTask.callback = continuationCallback; // Insert the new callback into the list, sorted by its timeout. This is
        // almost the same as the code in `scheduleCallback`, except the callback
        // is inserted into the list *before* callbacks of equal timeout instead
        // of after.

        if (firstTask === null) {
          // This is the first callback in the list.
          firstTask = continuationTask.next = continuationTask.previous = continuationTask;
        } else {
          var nextAfterContinuation = null;
          var t = firstTask;

          do {
            if (expirationTime <= t.expirationTime) {
              // This task times out at or after the continuation. We will insert
              // the continuation *before* this task.
              nextAfterContinuation = t;
              break;
            }

            t = t.next;
          } while (t !== firstTask);

          if (nextAfterContinuation === null) {
            // No equal or lower priority task was found, which means the new task
            // is the lowest priority task in the list.
            nextAfterContinuation = firstTask;
          } else if (nextAfterContinuation === firstTask) {
            // The new task is the highest priority task in the list.
            firstTask = continuationTask;
          }

          var _previous = nextAfterContinuation.previous;
          _previous.next = nextAfterContinuation.previous = continuationTask;
          continuationTask.next = nextAfterContinuation;
          continuationTask.previous = _previous;
        }
      }
    }

    function advanceTimers(currentTime) {
      // Check for tasks that are no longer delayed and add them to the queue.
      if (firstDelayedTask !== null && firstDelayedTask.startTime <= currentTime) {
        do {
          var task = firstDelayedTask;
          var next = task.next;

          if (task === next) {
            firstDelayedTask = null;
          } else {
            firstDelayedTask = next;
            var previous = task.previous;
            previous.next = next;
            next.previous = previous;
          }

          task.next = task.previous = null;
          insertScheduledTask(task, task.expirationTime);
        } while (firstDelayedTask !== null && firstDelayedTask.startTime <= currentTime);
      }
    }

    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);

      if (!isHostCallbackScheduled) {
        if (firstTask !== null) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        } else if (firstDelayedTask !== null) {
          requestHostTimeout(handleTimeout, firstDelayedTask.startTime - currentTime);
        }
      }
    }

    function flushWork(hasTimeRemaining, initialTime) {
      // Exit right away if we're currently paused
      if (enableSchedulerDebugging && isSchedulerPaused) {
        return;
      } // We'll need a host callback the next time work is scheduled.


      isHostCallbackScheduled = false;

      if (isHostTimeoutScheduled) {
        // We scheduled a timeout but it's no longer needed. Cancel it.
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }

      var currentTime = initialTime;
      advanceTimers(currentTime);
      isPerformingWork = true;

      try {
        if (!hasTimeRemaining) {
          // Flush all the expired callbacks without yielding.
          // TODO: Split flushWork into two separate functions instead of using
          // a boolean argument?
          while (firstTask !== null && firstTask.expirationTime <= currentTime && !(enableSchedulerDebugging && isSchedulerPaused)) {
            flushTask(firstTask, currentTime);
            currentTime = exports.unstable_now();
            advanceTimers(currentTime);
          }
        } else {
          // Keep flushing callbacks until we run out of time in the frame.
          if (firstTask !== null) {
            do {
              flushTask(firstTask, currentTime);
              currentTime = exports.unstable_now();
              advanceTimers(currentTime);
            } while (firstTask !== null && !shouldYieldToHost() && !(enableSchedulerDebugging && isSchedulerPaused));
          }
        } // Return whether there's additional work


        if (firstTask !== null) {
          return true;
        } else {
          if (firstDelayedTask !== null) {
            requestHostTimeout(handleTimeout, firstDelayedTask.startTime - currentTime);
          }

          return false;
        }
      } finally {
        isPerformingWork = false;
      }
    }

    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;

        default:
          priorityLevel = NormalPriority;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_next(eventHandler) {
      var priorityLevel;

      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          // Shift down to normal priority
          priorityLevel = NormalPriority;
          break;

        default:
          // Anything lower than normal priority should remain at the current level.
          priorityLevel = currentPriorityLevel;
          break;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function () {
        // This is a fork of runWithPriority, inlined for performance.
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;

        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }

    function timeoutForPriorityLevel(priorityLevel) {
      switch (priorityLevel) {
        case ImmediatePriority:
          return IMMEDIATE_PRIORITY_TIMEOUT;

        case UserBlockingPriority:
          return USER_BLOCKING_PRIORITY;

        case IdlePriority:
          return IDLE_PRIORITY;

        case LowPriority:
          return LOW_PRIORITY_TIMEOUT;

        case NormalPriority:
        default:
          return NORMAL_PRIORITY_TIMEOUT;
      }
    }

    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      var startTime;
      var timeout;

      if (typeof options === 'object' && options !== null) {
        var delay = options.delay;

        if (typeof delay === 'number' && delay > 0) {
          startTime = currentTime + delay;
        } else {
          startTime = currentTime;
        }

        timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
      } else {
        timeout = timeoutForPriorityLevel(priorityLevel);
        startTime = currentTime;
      }

      var expirationTime = startTime + timeout;
      var newTask = {
        callback: callback,
        priorityLevel: priorityLevel,
        startTime: startTime,
        expirationTime: expirationTime,
        next: null,
        previous: null
      };

      if (startTime > currentTime) {
        // This is a delayed task.
        insertDelayedTask(newTask, startTime);

        if (firstTask === null && firstDelayedTask === newTask) {
          // All tasks are delayed, and this is the task with the earliest delay.
          if (isHostTimeoutScheduled) {
            // Cancel an existing timeout.
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          } // Schedule a timeout.


          requestHostTimeout(handleTimeout, startTime - currentTime);
        }
      } else {
        insertScheduledTask(newTask, expirationTime); // Schedule a host callback, if needed. If we're already performing work,
        // wait until the next time we yield.

        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }

      return newTask;
    }

    function insertScheduledTask(newTask, expirationTime) {
      // Insert the new task into the list, ordered first by its timeout, then by
      // insertion. So the new task is inserted after any other task the
      // same timeout
      if (firstTask === null) {
        // This is the first task in the list.
        firstTask = newTask.next = newTask.previous = newTask;
      } else {
        var next = null;
        var task = firstTask;

        do {
          if (expirationTime < task.expirationTime) {
            // The new task times out before this one.
            next = task;
            break;
          }

          task = task.next;
        } while (task !== firstTask);

        if (next === null) {
          // No task with a later timeout was found, which means the new task has
          // the latest timeout in the list.
          next = firstTask;
        } else if (next === firstTask) {
          // The new task has the earliest expiration in the entire list.
          firstTask = newTask;
        }

        var previous = next.previous;
        previous.next = next.previous = newTask;
        newTask.next = next;
        newTask.previous = previous;
      }
    }

    function insertDelayedTask(newTask, startTime) {
      // Insert the new task into the list, ordered by its start time.
      if (firstDelayedTask === null) {
        // This is the first task in the list.
        firstDelayedTask = newTask.next = newTask.previous = newTask;
      } else {
        var next = null;
        var task = firstDelayedTask;

        do {
          if (startTime < task.startTime) {
            // The new task times out before this one.
            next = task;
            break;
          }

          task = task.next;
        } while (task !== firstDelayedTask);

        if (next === null) {
          // No task with a later timeout was found, which means the new task has
          // the latest timeout in the list.
          next = firstDelayedTask;
        } else if (next === firstDelayedTask) {
          // The new task has the earliest expiration in the entire list.
          firstDelayedTask = newTask;
        }

        var previous = next.previous;
        previous.next = next.previous = newTask;
        newTask.next = next;
        newTask.previous = previous;
      }
    }

    function unstable_pauseExecution() {
      isSchedulerPaused = true;
    }

    function unstable_continueExecution() {
      isSchedulerPaused = false;

      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }

    function unstable_getFirstCallbackNode() {
      return firstTask;
    }

    function unstable_cancelCallback(task) {
      var next = task.next;

      if (next === null) {
        // Already cancelled.
        return;
      }

      if (task === next) {
        if (task === firstTask) {
          firstTask = null;
        } else if (task === firstDelayedTask) {
          firstDelayedTask = null;
        }
      } else {
        if (task === firstTask) {
          firstTask = next;
        } else if (task === firstDelayedTask) {
          firstDelayedTask = next;
        }

        var previous = task.previous;
        previous.next = next;
        next.previous = previous;
      }

      task.next = task.previous = null;
    }

    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }

    function unstable_shouldYield() {
      var currentTime = exports.unstable_now();
      advanceTimers(currentTime);
      return currentTask !== null && firstTask !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
    }

    var unstable_requestPaint = requestPaint;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_next = unstable_next;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_wrapCallback = unstable_wrapCallback;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_shouldYield = unstable_shouldYield;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
  })();
}
},{}],"node_modules/scheduler/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.development.js":"node_modules/scheduler/cjs/scheduler.development.js"}],"node_modules/scheduler/cjs/scheduler-tracing.development.js":[function(require,module,exports) {
/** @license React v0.15.0
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.

    var enableSchedulerTracing = true; // Only used in www builds.
    // TODO: true? Here it might just be false.
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
    // This is a flag so we can fix warnings in RN core before turning it on
    // Experimental React Flare event system and event components support.
    // Experimental Host Component support.
    // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
    // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
    // Temporary flag to revert the fix in #15650
    // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.
    // Changes priority of some events like mousemove to user-blocking priority,
    // but without making them discrete. The flag exists in case it causes
    // starvation problems.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.
    // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

    var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

    var interactionIDCounter = 0;
    var threadIDCounter = 0; // Set of currently traced interactions.
    // Interactions "stack"–
    // Meaning that newly traced interactions are appended to the previously active set.
    // When an interaction goes out of scope, the previous set (if any) is restored.

    exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

    exports.__subscriberRef = null;

    if (enableSchedulerTracing) {
      exports.__interactionsRef = {
        current: new Set()
      };
      exports.__subscriberRef = {
        current: null
      };
    }

    function unstable_clear(callback) {
      if (!enableSchedulerTracing) {
        return callback();
      }

      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = new Set();

      try {
        return callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;
      }
    }

    function unstable_getCurrent() {
      if (!enableSchedulerTracing) {
        return null;
      } else {
        return exports.__interactionsRef.current;
      }
    }

    function unstable_getThreadID() {
      return ++threadIDCounter;
    }

    function unstable_trace(name, timestamp, callback) {
      var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback();
      }

      var interaction = {
        __count: 1,
        id: interactionIDCounter++,
        name: name,
        timestamp: timestamp
      };
      var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
      // To do that, clone the current interactions.
      // The previous set will be restored upon completion.

      var interactions = new Set(prevInteractions);
      interactions.add(interaction);
      exports.__interactionsRef.current = interactions;
      var subscriber = exports.__subscriberRef.current;
      var returnValue = void 0;

      try {
        if (subscriber !== null) {
          subscriber.onInteractionTraced(interaction);
        }
      } finally {
        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(interactions, threadID);
          }
        } finally {
          try {
            returnValue = callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStopped(interactions, threadID);
              }
            } finally {
              interaction.__count--; // If no async work was scheduled for this interaction,
              // Notify subscribers that it's completed.

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
      }

      return returnValue;
    }

    function unstable_wrap(callback) {
      var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback;
      }

      var wrappedInteractions = exports.__interactionsRef.current;
      var subscriber = exports.__subscriberRef.current;

      if (subscriber !== null) {
        subscriber.onWorkScheduled(wrappedInteractions, threadID);
      } // Update the pending async work count for the current interactions.
      // Update after calling subscribers in case of error.


      wrappedInteractions.forEach(function (interaction) {
        interaction.__count++;
      });
      var hasRun = false;

      function wrapped() {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = wrappedInteractions;
        subscriber = exports.__subscriberRef.current;

        try {
          var returnValue = void 0;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(wrappedInteractions, threadID);
            }
          } finally {
            try {
              returnValue = callback.apply(undefined, arguments);
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              if (subscriber !== null) {
                subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
          }

          return returnValue;
        } finally {
          if (!hasRun) {
            // We only expect a wrapped function to be executed once,
            // But in the event that it's executed more than once–
            // Only decrement the outstanding interaction counts once.
            hasRun = true; // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.

            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        }
      }

      wrapped.cancel = function cancel() {
        subscriber = exports.__subscriberRef.current;

        try {
          if (subscriber !== null) {
            subscriber.onWorkCanceled(wrappedInteractions, threadID);
          }
        } finally {
          // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      };

      return wrapped;
    }

    var subscribers = null;

    if (enableSchedulerTracing) {
      subscribers = new Set();
    }

    function unstable_subscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          exports.__subscriberRef.current = {
            onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
            onInteractionTraced: onInteractionTraced,
            onWorkCanceled: onWorkCanceled,
            onWorkScheduled: onWorkScheduled,
            onWorkStarted: onWorkStarted,
            onWorkStopped: onWorkStopped
          };
        }
      }
    }

    function unstable_unsubscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          exports.__subscriberRef.current = null;
        }
      }
    }

    function onInteractionTraced(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionTraced(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onInteractionScheduledWorkCompleted(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkScheduled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkScheduled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStarted(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStopped(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStopped(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkCanceled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkCanceled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    exports.unstable_clear = unstable_clear;
    exports.unstable_getCurrent = unstable_getCurrent;
    exports.unstable_getThreadID = unstable_getThreadID;
    exports.unstable_trace = unstable_trace;
    exports.unstable_wrap = unstable_wrap;
    exports.unstable_subscribe = unstable_subscribe;
    exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}
},{}],"node_modules/scheduler/tracing.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/scheduler-tracing.production.min.js');
} else {
  module.exports = require('./cjs/scheduler-tracing.development.js');
}
},{"./cjs/scheduler-tracing.development.js":"node_modules/scheduler/cjs/scheduler-tracing.development.js"}],"node_modules/react-reconciler/cjs/react-reconciler.development.js":[function(require,module,exports) {
/** @license React v0.21.0
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

if ("development" !== "production") {
  module.exports = function $$$reconciler($$$hostConfig) {
    'use strict';

    var _assign = require('object-assign');

    var React = require('react');

    var checkPropTypes = require('prop-types/checkPropTypes');

    var Scheduler = require('scheduler');

    var tracing = require('scheduler/tracing'); // Do not require this module directly! Use normal `invariant` calls with
    // template literal strings. The messages will be converted to ReactError during
    // build, and in production they will be minified.
    // Do not require this module directly! Use normal `invariant` calls with
    // template literal strings. The messages will be converted to ReactError during
    // build, and in production they will be minified.


    function ReactError(error) {
      error.name = 'Invariant Violation';
      return error;
    }

    var FunctionComponent = 0;
    var ClassComponent = 1;
    var IndeterminateComponent = 2; // Before we know whether it is function or class

    var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

    var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

    var HostComponent = 5;
    var HostText = 6;
    var Fragment = 7;
    var Mode = 8;
    var ContextConsumer = 9;
    var ContextProvider = 10;
    var ForwardRef = 11;
    var Profiler = 12;
    var SuspenseComponent = 13;
    var MemoComponent = 14;
    var SimpleMemoComponent = 15;
    var LazyComponent = 16;
    var IncompleteClassComponent = 17;
    var DehydratedSuspenseComponent = 18;
    var SuspenseListComponent = 19;
    var FundamentalComponent = 20;
    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warningWithoutStack = function () {};

    {
      warningWithoutStack = function (condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }

        if (condition) {
          return;
        }

        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610

          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }
    var warningWithoutStack$1 = warningWithoutStack;
    /**
     * `ReactInstanceMap` maintains a mapping from a public facing stateful
     * instance (key) and the internal representation (value). This allows public
     * methods to accept the user facing instance as an argument and map them back
     * to internal methods.
     *
     * Note that this module is currently shared and assumed to be stateless.
     * If this becomes an actual Map, that will break.
     */

    /**
     * This API should be called `delete` but we'd have to make sure to always
     * transform these to strings for IE support. When this transform is fully
     * supported we can rename it.
     */

    function get(key) {
      return key._reactInternalFiber;
    }

    function set(key, value) {
      key._reactInternalFiber = value;
    }

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
    // Current owner and dispatcher used to share the same ref,
    // but PR #14548 split them out to better support the react-debug-tools package.

    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
      ReactSharedInternals.ReactCurrentDispatcher = {
        current: null
      };
    }

    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
      ReactSharedInternals.ReactCurrentBatchConfig = {
        suspense: null
      };
    } // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.


    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }

    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
        }
      }

      return null;
    } // Don't change these two values. They're used by React Dev Tools.


    var NoEffect =
    /*              */
    0;
    var PerformedWork =
    /*         */
    1; // You can change the rest (and add more).

    var Placement =
    /*             */
    2;
    var Update =
    /*                */
    4;
    var PlacementAndUpdate =
    /*    */
    6;
    var Deletion =
    /*              */
    8;
    var ContentReset =
    /*          */
    16;
    var Callback =
    /*              */
    32;
    var DidCapture =
    /*            */
    64;
    var Ref =
    /*                   */
    128;
    var Snapshot =
    /*              */
    256;
    var Passive =
    /*               */
    512; // Passive & Update & Callback & Ref & Snapshot

    var LifecycleEffectMask =
    /*   */
    932; // Union of all host effects

    var HostEffectMask =
    /*        */
    1023;
    var Incomplete =
    /*            */
    1024;
    var ShouldCapture =
    /*         */
    2048;
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var MOUNTING = 1;
    var MOUNTED = 2;
    var UNMOUNTED = 3;

    function isFiberMountedImpl(fiber) {
      var node = fiber;

      if (!fiber.alternate) {
        // If there is no alternate, this might be a new tree that isn't inserted
        // yet. If it is, then it will have a pending insertion effect on it.
        if ((node.effectTag & Placement) !== NoEffect) {
          return MOUNTING;
        }

        while (node.return) {
          node = node.return;

          if ((node.effectTag & Placement) !== NoEffect) {
            return MOUNTING;
          }
        }
      } else {
        while (node.return) {
          node = node.return;
        }
      }

      if (node.tag === HostRoot) {
        // TODO: Check if this was a nested HostRoot when used with
        // renderContainerIntoSubtree.
        return MOUNTED;
      } // If we didn't hit the root, that means that we're in an disconnected tree
      // that has been unmounted.


      return UNMOUNTED;
    }

    function isFiberMounted(fiber) {
      return isFiberMountedImpl(fiber) === MOUNTED;
    }

    function isMounted(component) {
      {
        var owner = ReactCurrentOwner.current;

        if (owner !== null && owner.tag === ClassComponent) {
          var ownerFiber = owner;
          var instance = ownerFiber.stateNode;
          !instance._warnedAboutRefsInRender ? warningWithoutStack$1(false, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber.type) || 'A component') : void 0;
          instance._warnedAboutRefsInRender = true;
        }
      }
      var fiber = get(component);

      if (!fiber) {
        return false;
      }

      return isFiberMountedImpl(fiber) === MOUNTED;
    }

    function assertIsMounted(fiber) {
      (function () {
        if (!(isFiberMountedImpl(fiber) === MOUNTED)) {
          {
            throw ReactError(Error('Unable to find node on an unmounted component.'));
          }
        }
      })();
    }

    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;

      if (!alternate) {
        // If there is no alternate, then we only need to check if it is mounted.
        var state = isFiberMountedImpl(fiber);

        (function () {
          if (!(state !== UNMOUNTED)) {
            {
              throw ReactError(Error('Unable to find node on an unmounted component.'));
            }
          }
        })();

        if (state === MOUNTING) {
          return null;
        }

        return fiber;
      } // If we have two possible branches, we'll walk backwards up to the root
      // to see what path the root points to. On the way we may hit one of the
      // special cases and we'll deal with them.


      var a = fiber;
      var b = alternate;

      while (true) {
        var parentA = a.return;

        if (parentA === null) {
          // We're at the root.
          break;
        }

        var parentB = parentA.alternate;

        if (parentB === null) {
          // There is no alternate. This is an unusual case. Currently, it only
          // happens when a Suspense component is hidden. An extra fragment fiber
          // is inserted in between the Suspense fiber and its children. Skip
          // over this extra fragment fiber and proceed to the next parent.
          var nextParent = parentA.return;

          if (nextParent !== null) {
            a = b = nextParent;
            continue;
          } // If there's no parent, we're at the root.


          break;
        } // If both copies of the parent fiber point to the same child, we can
        // assume that the child is current. This happens when we bailout on low
        // priority: the bailed out fiber's child reuses the current child.


        if (parentA.child === parentB.child) {
          var child = parentA.child;

          while (child) {
            if (child === a) {
              // We've determined that A is the current branch.
              assertIsMounted(parentA);
              return fiber;
            }

            if (child === b) {
              // We've determined that B is the current branch.
              assertIsMounted(parentA);
              return alternate;
            }

            child = child.sibling;
          } // We should never have an alternate for any mounting node. So the only
          // way this could possibly happen is if this was unmounted, if at all.


          (function () {
            {
              {
                throw ReactError(Error('Unable to find node on an unmounted component.'));
              }
            }
          })();
        }

        if (a.return !== b.return) {
          // The return pointer of A and the return pointer of B point to different
          // fibers. We assume that return pointers never criss-cross, so A must
          // belong to the child set of A.return, and B must belong to the child
          // set of B.return.
          a = parentA;
          b = parentB;
        } else {
          // The return pointers point to the same fiber. We'll have to use the
          // default, slow path: scan the child sets of each parent alternate to see
          // which child belongs to which set.
          //
          // Search parent A's child set
          var didFindChild = false;
          var _child = parentA.child;

          while (_child) {
            if (_child === a) {
              didFindChild = true;
              a = parentA;
              b = parentB;
              break;
            }

            if (_child === b) {
              didFindChild = true;
              b = parentA;
              a = parentB;
              break;
            }

            _child = _child.sibling;
          }

          if (!didFindChild) {
            // Search parent B's child set
            _child = parentB.child;

            while (_child) {
              if (_child === a) {
                didFindChild = true;
                a = parentB;
                b = parentA;
                break;
              }

              if (_child === b) {
                didFindChild = true;
                b = parentB;
                a = parentA;
                break;
              }

              _child = _child.sibling;
            }

            (function () {
              if (!didFindChild) {
                {
                  throw ReactError(Error('Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'));
                }
              }
            })();
          }
        }

        (function () {
          if (!(a.alternate === b)) {
            {
              throw ReactError(Error('Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      } // If the root is not a host container, we're in a disconnected tree. I.e.
      // unmounted.


      (function () {
        if (!(a.tag === HostRoot)) {
          {
            throw ReactError(Error('Unable to find node on an unmounted component.'));
          }
        }
      })();

      if (a.stateNode.current === a) {
        // We've determined that A is the current branch.
        return fiber;
      } // Otherwise B has to be current branch.


      return alternate;
    }

    function findCurrentHostFiber(parent) {
      var currentParent = findCurrentFiberUsingSlowPath(parent);

      if (!currentParent) {
        return null;
      } // Next we'll drill down this component to find the first HostComponent/Text.


      var node = currentParent;

      while (true) {
        if (node.tag === HostComponent || node.tag === HostText) {
          return node;
        } else if (node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === currentParent) {
          return null;
        }

        while (!node.sibling) {
          if (!node.return || node.return === currentParent) {
            return null;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      } // Flow needs the return null here, but ESLint complains about it.
      // eslint-disable-next-line no-unreachable


      return null;
    }

    function findCurrentHostFiberWithNoPortals(parent) {
      var currentParent = findCurrentFiberUsingSlowPath(parent);

      if (!currentParent) {
        return null;
      } // Next we'll drill down this component to find the first HostComponent/Text.


      var node = currentParent;

      while (true) {
        if (node.tag === HostComponent || node.tag === HostText || node.tag === FundamentalComponent) {
          return node;
        } else if (node.child && node.tag !== HostPortal) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === currentParent) {
          return null;
        }

        while (!node.sibling) {
          if (!node.return || node.return === currentParent) {
            return null;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      } // Flow needs the return null here, but ESLint complains about it.
      // eslint-disable-next-line no-unreachable


      return null;
    } // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef


    var getPublicInstance = $$$hostConfig.getPublicInstance; // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // eslint-disable-line no-undef
    // This is a host config that's used for the `react-reconciler` package on npm.
    // It is only used by third-party renderers.
    //
    // Its API lets you pass the host config as an argument.
    // However, inside the `react-reconciler` we treat host config as a module.
    // This file is a shim between two worlds.
    //
    // It works because the `react-reconciler` bundle is wrapped in something like:
    //
    // module.exports = function ($$$config) {
    //   /* reconciler code */
    // }
    //
    // So `$$$config` looks like a global variable, but it's
    // really an argument to a top-level wrapping function.

    var getRootHostContext = $$$hostConfig.getRootHostContext;
    var getChildHostContext = $$$hostConfig.getChildHostContext;
    var prepareForCommit = $$$hostConfig.prepareForCommit;
    var resetAfterCommit = $$$hostConfig.resetAfterCommit;
    var createInstance = $$$hostConfig.createInstance;
    var appendInitialChild = $$$hostConfig.appendInitialChild;
    var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
    var prepareUpdate = $$$hostConfig.prepareUpdate;
    var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
    var shouldDeprioritizeSubtree = $$$hostConfig.shouldDeprioritizeSubtree;
    var createTextInstance = $$$hostConfig.createTextInstance;
    var scheduleTimeout = $$$hostConfig.setTimeout;
    var cancelTimeout = $$$hostConfig.clearTimeout;
    var noTimeout = $$$hostConfig.noTimeout;
    var now = $$$hostConfig.now;
    var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
    var warnsIfNotActing = $$$hostConfig.warnsIfNotActing;
    var supportsMutation = $$$hostConfig.supportsMutation;
    var supportsPersistence = $$$hostConfig.supportsPersistence;
    var supportsHydration = $$$hostConfig.supportsHydration;
    var mountResponderInstance = $$$hostConfig.mountResponderInstance;
    var unmountResponderInstance = $$$hostConfig.unmountResponderInstance;
    var getFundamentalComponentInstance = $$$hostConfig.getFundamentalComponentInstance;
    var mountFundamentalComponent = $$$hostConfig.mountFundamentalComponent;
    var shouldUpdateFundamentalComponent = $$$hostConfig.shouldUpdateFundamentalComponent; // -------------------
    //      Mutation
    //     (optional)
    // -------------------

    var appendChild = $$$hostConfig.appendChild;
    var appendChildToContainer = $$$hostConfig.appendChildToContainer;
    var commitTextUpdate = $$$hostConfig.commitTextUpdate;
    var commitMount = $$$hostConfig.commitMount;
    var commitUpdate = $$$hostConfig.commitUpdate;
    var insertBefore = $$$hostConfig.insertBefore;
    var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
    var removeChild = $$$hostConfig.removeChild;
    var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
    var resetTextContent = $$$hostConfig.resetTextContent;
    var hideInstance = $$$hostConfig.hideInstance;
    var hideTextInstance = $$$hostConfig.hideTextInstance;
    var unhideInstance = $$$hostConfig.unhideInstance;
    var unhideTextInstance = $$$hostConfig.unhideTextInstance;
    var updateFundamentalComponent = $$$hostConfig.updateFundamentalComponent;
    var unmountFundamentalComponent = $$$hostConfig.unmountFundamentalComponent; // -------------------
    //     Persistence
    //     (optional)
    // -------------------

    var cloneInstance = $$$hostConfig.cloneInstance;
    var createContainerChildSet = $$$hostConfig.createContainerChildSet;
    var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
    var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
    var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;
    var cloneHiddenInstance = $$$hostConfig.cloneHiddenInstance;
    var cloneHiddenTextInstance = $$$hostConfig.cloneHiddenTextInstance;
    var cloneFundamentalInstance = $$$hostConfig.cloneInstance; // -------------------
    //     Hydration
    //     (optional)
    // -------------------

    var canHydrateInstance = $$$hostConfig.canHydrateInstance;
    var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
    var canHydrateSuspenseInstance = $$$hostConfig.canHydrateSuspenseInstance;
    var isSuspenseInstancePending = $$$hostConfig.isSuspenseInstancePending;
    var isSuspenseInstanceFallback = $$$hostConfig.isSuspenseInstanceFallback;
    var registerSuspenseInstanceRetry = $$$hostConfig.registerSuspenseInstanceRetry;
    var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
    var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
    var hydrateInstance = $$$hostConfig.hydrateInstance;
    var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
    var getNextHydratableInstanceAfterSuspenseInstance = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;
    var clearSuspenseBoundary = $$$hostConfig.clearSuspenseBoundary;
    var clearSuspenseBoundaryFromContainer = $$$hostConfig.clearSuspenseBoundaryFromContainer;
    var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
    var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
    var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
    var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
    var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
    var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
    var didNotFindHydratableContainerSuspenseInstance = $$$hostConfig.didNotFindHydratableContainerSuspenseInstance;
    var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
    var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;
    var didNotFindHydratableSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstance;
    var enableUserTimingAPI = true; // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:

    var debugRenderPhaseSideEffects = false; // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:

    var debugRenderPhaseSideEffectsForStrictMode = true; // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.

    var replayFailedUnitOfWorkWithInvokeGuardedCallback = true; // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

    var warnAboutDeprecatedLifecycles = true; // Gather advanced timing metrics for Profiler subtrees.

    var enableProfilerTimer = true; // Trace which interactions trigger each commit.

    var enableSchedulerTracing = true; // Only used in www builds.

    var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
    // This is a flag so we can fix warnings in RN core before turning it on
    // Experimental React Flare event system and event components support.

    var enableFlareAPI = false; // Experimental Host Component support.

    var enableFundamentalAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
    // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

    var warnAboutUnmockedScheduler = false; // Temporary flag to revert the fix in #15650

    var revertPassiveEffectsChange = false; // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.

    var flushSuspenseFallbacksInTests = true; // Changes priority of some events like mousemove to user-blocking priority,
    // but without making them discrete. The flag exists in case it causes
    // starvation problems.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.

    var enableSuspenseCallback = false; // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

    var warnAboutDefaultPropsOnFunctionComponents = false;
    var disableLegacyContext = false;
    var disableSchedulerTimeoutBasedOnReactExpirationTime = false;
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function (name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    };

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

    function describeFiber(fiber) {
      switch (fiber.tag) {
        case HostRoot:
        case HostPortal:
        case HostText:
        case Fragment:
        case ContextProvider:
        case ContextConsumer:
          return '';

        default:
          var owner = fiber._debugOwner;
          var source = fiber._debugSource;
          var name = getComponentName(fiber.type);
          var ownerName = null;

          if (owner) {
            ownerName = getComponentName(owner.type);
          }

          return describeComponentFrame(name, source, ownerName);
      }
    }

    function getStackByFiberInDevAndProd(workInProgress) {
      var info = '';
      var node = workInProgress;

      do {
        info += describeFiber(node);
        node = node.return;
      } while (node);

      return info;
    }

    var current = null;
    var phase = null;

    function getCurrentFiberOwnerNameInDevOrNull() {
      {
        if (current === null) {
          return null;
        }

        var owner = current._debugOwner;

        if (owner !== null && typeof owner !== 'undefined') {
          return getComponentName(owner.type);
        }
      }
      return null;
    }

    function getCurrentFiberStackInDev() {
      {
        if (current === null) {
          return '';
        } // Safe because if current fiber exists, we are reconciling,
        // and it is guaranteed to be the work-in-progress version.


        return getStackByFiberInDevAndProd(current);
      }
      return '';
    }

    function resetCurrentFiber() {
      {
        ReactDebugCurrentFrame.getCurrentStack = null;
        current = null;
        phase = null;
      }
    }

    function setCurrentFiber(fiber) {
      {
        ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
        current = fiber;
        phase = null;
      }
    }

    function setCurrentPhase(lifeCyclePhase) {
      {
        phase = lifeCyclePhase;
      }
    } // Prefix measurements so that it's possible to filter them.
    // Longer prefixes are hard to read in DevTools.


    var reactEmoji = '\u269B';
    var warningEmoji = '\u26D4';
    var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function'; // Keep track of current fiber so that we know the path to unwind on pause.
    // TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?

    var currentFiber = null; // If we're in the middle of user code, which fiber and method is it?
    // Reusing `currentFiber` would be confusing for this because user code fiber
    // can change during commit phase too, but we don't need to unwind it (since
    // lifecycles in the commit phase don't resemble a tree).

    var currentPhase = null;
    var currentPhaseFiber = null; // Did lifecycle hook schedule an update? This is often a performance problem,
    // so we will keep track of it, and include it in the report.
    // Track commits caused by cascading updates.

    var isCommitting = false;
    var hasScheduledUpdateInCurrentCommit = false;
    var hasScheduledUpdateInCurrentPhase = false;
    var commitCountInCurrentWorkLoop = 0;
    var effectCountInCurrentCommit = 0;
    var isWaitingForCallback = false; // During commits, we only show a measurement once per method name
    // to avoid stretch the commit phase with measurement overhead.

    var labelsInCurrentCommit = new Set();

    var formatMarkName = function (markName) {
      return reactEmoji + ' ' + markName;
    };

    var formatLabel = function (label, warning) {
      var prefix = warning ? warningEmoji + ' ' : reactEmoji + ' ';
      var suffix = warning ? ' Warning: ' + warning : '';
      return '' + prefix + label + suffix;
    };

    var beginMark = function (markName) {
      performance.mark(formatMarkName(markName));
    };

    var clearMark = function (markName) {
      performance.clearMarks(formatMarkName(markName));
    };

    var endMark = function (label, markName, warning) {
      var formattedMarkName = formatMarkName(markName);
      var formattedLabel = formatLabel(label, warning);

      try {
        performance.measure(formattedLabel, formattedMarkName);
      } catch (err) {} // If previous mark was missing for some reason, this will throw.
      // This could only happen if React crashed in an unexpected place earlier.
      // Don't pile on with more errors.
      // Clear marks immediately to avoid growing buffer.


      performance.clearMarks(formattedMarkName);
      performance.clearMeasures(formattedLabel);
    };

    var getFiberMarkName = function (label, debugID) {
      return label + ' (#' + debugID + ')';
    };

    var getFiberLabel = function (componentName, isMounted, phase) {
      if (phase === null) {
        // These are composite component total time measurements.
        return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
      } else {
        // Composite component methods.
        return componentName + '.' + phase;
      }
    };

    var beginFiberMark = function (fiber, phase) {
      var componentName = getComponentName(fiber.type) || 'Unknown';
      var debugID = fiber._debugID;
      var isMounted = fiber.alternate !== null;
      var label = getFiberLabel(componentName, isMounted, phase);

      if (isCommitting && labelsInCurrentCommit.has(label)) {
        // During the commit phase, we don't show duplicate labels because
        // there is a fixed overhead for every measurement, and we don't
        // want to stretch the commit phase beyond necessary.
        return false;
      }

      labelsInCurrentCommit.add(label);
      var markName = getFiberMarkName(label, debugID);
      beginMark(markName);
      return true;
    };

    var clearFiberMark = function (fiber, phase) {
      var componentName = getComponentName(fiber.type) || 'Unknown';
      var debugID = fiber._debugID;
      var isMounted = fiber.alternate !== null;
      var label = getFiberLabel(componentName, isMounted, phase);
      var markName = getFiberMarkName(label, debugID);
      clearMark(markName);
    };

    var endFiberMark = function (fiber, phase, warning) {
      var componentName = getComponentName(fiber.type) || 'Unknown';
      var debugID = fiber._debugID;
      var isMounted = fiber.alternate !== null;
      var label = getFiberLabel(componentName, isMounted, phase);
      var markName = getFiberMarkName(label, debugID);
      endMark(label, markName, warning);
    };

    var shouldIgnoreFiber = function (fiber) {
      // Host components should be skipped in the timeline.
      // We could check typeof fiber.type, but does this work with RN?
      switch (fiber.tag) {
        case HostRoot:
        case HostComponent:
        case HostText:
        case HostPortal:
        case Fragment:
        case ContextProvider:
        case ContextConsumer:
        case Mode:
          return true;

        default:
          return false;
      }
    };

    var clearPendingPhaseMeasurement = function () {
      if (currentPhase !== null && currentPhaseFiber !== null) {
        clearFiberMark(currentPhaseFiber, currentPhase);
      }

      currentPhaseFiber = null;
      currentPhase = null;
      hasScheduledUpdateInCurrentPhase = false;
    };

    var pauseTimers = function () {
      // Stops all currently active measurements so that they can be resumed
      // if we continue in a later deferred loop from the same unit of work.
      var fiber = currentFiber;

      while (fiber) {
        if (fiber._debugIsCurrentlyTiming) {
          endFiberMark(fiber, null, null);
        }

        fiber = fiber.return;
      }
    };

    var resumeTimersRecursively = function (fiber) {
      if (fiber.return !== null) {
        resumeTimersRecursively(fiber.return);
      }

      if (fiber._debugIsCurrentlyTiming) {
        beginFiberMark(fiber, null);
      }
    };

    var resumeTimers = function () {
      // Resumes all measurements that were active during the last deferred loop.
      if (currentFiber !== null) {
        resumeTimersRecursively(currentFiber);
      }
    };

    function recordEffect() {
      if (enableUserTimingAPI) {
        effectCountInCurrentCommit++;
      }
    }

    function recordScheduleUpdate() {
      if (enableUserTimingAPI) {
        if (isCommitting) {
          hasScheduledUpdateInCurrentCommit = true;
        }

        if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
          hasScheduledUpdateInCurrentPhase = true;
        }
      }
    }

    function startRequestCallbackTimer() {
      if (enableUserTimingAPI) {
        if (supportsUserTiming && !isWaitingForCallback) {
          isWaitingForCallback = true;
          beginMark('(Waiting for async callback...)');
        }
      }
    }

    function stopRequestCallbackTimer(didExpire) {
      if (enableUserTimingAPI) {
        if (supportsUserTiming) {
          isWaitingForCallback = false;
          var warning = didExpire ? 'Update expired; will flush synchronously' : null;
          endMark('(Waiting for async callback...)', '(Waiting for async callback...)', warning);
        }
      }
    }

    function startWorkTimer(fiber) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
          return;
        } // If we pause, this is the fiber to unwind from.


        currentFiber = fiber;

        if (!beginFiberMark(fiber, null)) {
          return;
        }

        fiber._debugIsCurrentlyTiming = true;
      }
    }

    function cancelWorkTimer(fiber) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
          return;
        } // Remember we shouldn't complete measurement for this fiber.
        // Otherwise flamechart will be deep even for small updates.


        fiber._debugIsCurrentlyTiming = false;
        clearFiberMark(fiber, null);
      }
    }

    function stopWorkTimer(fiber) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
          return;
        } // If we pause, its parent is the fiber to unwind from.


        currentFiber = fiber.return;

        if (!fiber._debugIsCurrentlyTiming) {
          return;
        }

        fiber._debugIsCurrentlyTiming = false;
        endFiberMark(fiber, null, null);
      }
    }

    function stopFailedWorkTimer(fiber) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
          return;
        } // If we pause, its parent is the fiber to unwind from.


        currentFiber = fiber.return;

        if (!fiber._debugIsCurrentlyTiming) {
          return;
        }

        fiber._debugIsCurrentlyTiming = false;
        var warning = fiber.tag === SuspenseComponent || fiber.tag === DehydratedSuspenseComponent ? 'Rendering was suspended' : 'An error was thrown inside this error boundary';
        endFiberMark(fiber, null, warning);
      }
    }

    function startPhaseTimer(fiber, phase) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        clearPendingPhaseMeasurement();

        if (!beginFiberMark(fiber, phase)) {
          return;
        }

        currentPhaseFiber = fiber;
        currentPhase = phase;
      }
    }

    function stopPhaseTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        if (currentPhase !== null && currentPhaseFiber !== null) {
          var warning = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
          endFiberMark(currentPhaseFiber, currentPhase, warning);
        }

        currentPhase = null;
        currentPhaseFiber = null;
      }
    }

    function startWorkLoopTimer(nextUnitOfWork) {
      if (enableUserTimingAPI) {
        currentFiber = nextUnitOfWork;

        if (!supportsUserTiming) {
          return;
        }

        commitCountInCurrentWorkLoop = 0; // This is top level call.
        // Any other measurements are performed within.

        beginMark('(React Tree Reconciliation)'); // Resume any measurements that were in progress during the last loop.

        resumeTimers();
      }
    }

    function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        var warning = null;

        if (interruptedBy !== null) {
          if (interruptedBy.tag === HostRoot) {
            warning = 'A top-level update interrupted the previous render';
          } else {
            var componentName = getComponentName(interruptedBy.type) || 'Unknown';
            warning = 'An update to ' + componentName + ' interrupted the previous render';
          }
        } else if (commitCountInCurrentWorkLoop > 1) {
          warning = 'There were cascading updates';
        }

        commitCountInCurrentWorkLoop = 0;
        var label = didCompleteRoot ? '(React Tree Reconciliation: Completed Root)' : '(React Tree Reconciliation: Yielded)'; // Pause any measurements until the next loop.

        pauseTimers();
        endMark(label, '(React Tree Reconciliation)', warning);
      }
    }

    function startCommitTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        isCommitting = true;
        hasScheduledUpdateInCurrentCommit = false;
        labelsInCurrentCommit.clear();
        beginMark('(Committing Changes)');
      }
    }

    function stopCommitTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        var warning = null;

        if (hasScheduledUpdateInCurrentCommit) {
          warning = 'Lifecycle hook scheduled a cascading update';
        } else if (commitCountInCurrentWorkLoop > 0) {
          warning = 'Caused by a cascading update in earlier commit';
        }

        hasScheduledUpdateInCurrentCommit = false;
        commitCountInCurrentWorkLoop++;
        isCommitting = false;
        labelsInCurrentCommit.clear();
        endMark('(Committing Changes)', '(Committing Changes)', warning);
      }
    }

    function startCommitSnapshotEffectsTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        effectCountInCurrentCommit = 0;
        beginMark('(Committing Snapshot Effects)');
      }
    }

    function stopCommitSnapshotEffectsTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        var count = effectCountInCurrentCommit;
        effectCountInCurrentCommit = 0;
        endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
      }
    }

    function startCommitHostEffectsTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        effectCountInCurrentCommit = 0;
        beginMark('(Committing Host Effects)');
      }
    }

    function stopCommitHostEffectsTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        var count = effectCountInCurrentCommit;
        effectCountInCurrentCommit = 0;
        endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
      }
    }

    function startCommitLifeCyclesTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        effectCountInCurrentCommit = 0;
        beginMark('(Calling Lifecycle Methods)');
      }
    }

    function stopCommitLifeCyclesTimer() {
      if (enableUserTimingAPI) {
        if (!supportsUserTiming) {
          return;
        }

        var count = effectCountInCurrentCommit;
        effectCountInCurrentCommit = 0;
        endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
      }
    }

    var valueStack = [];
    var fiberStack = void 0;
    {
      fiberStack = [];
    }
    var index = -1;

    function createCursor(defaultValue) {
      return {
        current: defaultValue
      };
    }

    function pop(cursor, fiber) {
      if (index < 0) {
        {
          warningWithoutStack$1(false, 'Unexpected pop.');
        }
        return;
      }

      {
        if (fiber !== fiberStack[index]) {
          warningWithoutStack$1(false, 'Unexpected Fiber popped.');
        }
      }
      cursor.current = valueStack[index];
      valueStack[index] = null;
      {
        fiberStack[index] = null;
      }
      index--;
    }

    function push(cursor, value, fiber) {
      index++;
      valueStack[index] = cursor.current;
      {
        fiberStack[index] = fiber;
      }
      cursor.current = value;
    }

    var warnedAboutMissingGetChildContext = void 0;
    {
      warnedAboutMissingGetChildContext = {};
    }
    var emptyContextObject = {};
    {
      Object.freeze(emptyContextObject);
    } // A cursor to the current merged context object on the stack.

    var contextStackCursor = createCursor(emptyContextObject); // A cursor to a boolean indicating whether the context has changed.

    var didPerformWorkStackCursor = createCursor(false); // Keep track of the previous context object that was on the stack.
    // We use this to get access to the parent context after we have already
    // pushed the next context provider, and now need to merge their contexts.

    var previousContext = emptyContextObject;

    function getUnmaskedContext(workInProgress, Component, didPushOwnContextIfProvider) {
      if (disableLegacyContext) {
        return emptyContextObject;
      } else {
        if (didPushOwnContextIfProvider && isContextProvider(Component)) {
          // If the fiber is a context provider itself, when we read its context
          // we may have already pushed its own child context on the stack. A context
          // provider should not "see" its own child context. Therefore we read the
          // previous (parent) context instead for a context provider.
          return previousContext;
        }

        return contextStackCursor.current;
      }
    }

    function cacheContext(workInProgress, unmaskedContext, maskedContext) {
      if (disableLegacyContext) {
        return;
      } else {
        var instance = workInProgress.stateNode;
        instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
        instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
      }
    }

    function getMaskedContext(workInProgress, unmaskedContext) {
      if (disableLegacyContext) {
        return emptyContextObject;
      } else {
        var type = workInProgress.type;
        var contextTypes = type.contextTypes;

        if (!contextTypes) {
          return emptyContextObject;
        } // Avoid recreating masked context unless unmasked context has changed.
        // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
        // This may trigger infinite loops if componentWillReceiveProps calls setState.


        var instance = workInProgress.stateNode;

        if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
          return instance.__reactInternalMemoizedMaskedChildContext;
        }

        var context = {};

        for (var key in contextTypes) {
          context[key] = unmaskedContext[key];
        }

        {
          var name = getComponentName(type) || 'Unknown';
          checkPropTypes(contextTypes, context, 'context', name, getCurrentFiberStackInDev);
        } // Cache unmasked context so we can avoid recreating masked context unless necessary.
        // Context is created before the class component is instantiated so check for instance.

        if (instance) {
          cacheContext(workInProgress, unmaskedContext, context);
        }

        return context;
      }
    }

    function hasContextChanged() {
      if (disableLegacyContext) {
        return false;
      } else {
        return didPerformWorkStackCursor.current;
      }
    }

    function isContextProvider(type) {
      if (disableLegacyContext) {
        return false;
      } else {
        var childContextTypes = type.childContextTypes;
        return childContextTypes !== null && childContextTypes !== undefined;
      }
    }

    function popContext(fiber) {
      if (disableLegacyContext) {
        return;
      } else {
        pop(didPerformWorkStackCursor, fiber);
        pop(contextStackCursor, fiber);
      }
    }

    function popTopLevelContextObject(fiber) {
      if (disableLegacyContext) {
        return;
      } else {
        pop(didPerformWorkStackCursor, fiber);
        pop(contextStackCursor, fiber);
      }
    }

    function pushTopLevelContextObject(fiber, context, didChange) {
      if (disableLegacyContext) {
        return;
      } else {
        (function () {
          if (!(contextStackCursor.current === emptyContextObject)) {
            {
              throw ReactError(Error('Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();

        push(contextStackCursor, context, fiber);
        push(didPerformWorkStackCursor, didChange, fiber);
      }
    }

    function processChildContext(fiber, type, parentContext) {
      if (disableLegacyContext) {
        return parentContext;
      } else {
        var instance = fiber.stateNode;
        var childContextTypes = type.childContextTypes; // TODO (bvaughn) Replace this behavior with an invariant() in the future.
        // It has only been added in Fiber to match the (unintentional) behavior in Stack.

        if (typeof instance.getChildContext !== 'function') {
          {
            var componentName = getComponentName(type) || 'Unknown';

            if (!warnedAboutMissingGetChildContext[componentName]) {
              warnedAboutMissingGetChildContext[componentName] = true;
              warningWithoutStack$1(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
            }
          }
          return parentContext;
        }

        var childContext = void 0;
        {
          setCurrentPhase('getChildContext');
        }
        startPhaseTimer(fiber, 'getChildContext');
        childContext = instance.getChildContext();
        stopPhaseTimer();
        {
          setCurrentPhase(null);
        }

        for (var contextKey in childContext) {
          (function () {
            if (!(contextKey in childContextTypes)) {
              {
                throw ReactError(Error((getComponentName(type) || 'Unknown') + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.'));
              }
            }
          })();
        }

        {
          var name = getComponentName(type) || 'Unknown';
          checkPropTypes(childContextTypes, childContext, 'child context', name, // In practice, there is one case in which we won't get a stack. It's when
          // somebody calls unstable_renderSubtreeIntoContainer() and we process
          // context from the parent component instance. The stack will be missing
          // because it's outside of the reconciliation, and so the pointer has not
          // been set. This is rare and doesn't matter. We'll also remove that API.
          getCurrentFiberStackInDev);
        }
        return _assign({}, parentContext, childContext);
      }
    }

    function pushContextProvider(workInProgress) {
      if (disableLegacyContext) {
        return false;
      } else {
        var instance = workInProgress.stateNode; // We push the context as early as possible to ensure stack integrity.
        // If the instance does not exist yet, we will push null at first,
        // and replace it on the stack later when invalidating the context.

        var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject; // Remember the parent context so we can merge with it later.
        // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.

        previousContext = contextStackCursor.current;
        push(contextStackCursor, memoizedMergedChildContext, workInProgress);
        push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
        return true;
      }
    }

    function invalidateContextProvider(workInProgress, type, didChange) {
      if (disableLegacyContext) {
        return;
      } else {
        var instance = workInProgress.stateNode;

        (function () {
          if (!instance) {
            {
              throw ReactError(Error('Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();

        if (didChange) {
          // Merge parent and own context.
          // Skip this if we're not updating due to sCU.
          // This avoids unnecessarily recomputing memoized values.
          var mergedContext = processChildContext(workInProgress, type, previousContext);
          instance.__reactInternalMemoizedMergedChildContext = mergedContext; // Replace the old (or empty) context with the new one.
          // It is important to unwind the context in the reverse order.

          pop(didPerformWorkStackCursor, workInProgress);
          pop(contextStackCursor, workInProgress); // Now push the new context and mark that it has changed.

          push(contextStackCursor, mergedContext, workInProgress);
          push(didPerformWorkStackCursor, didChange, workInProgress);
        } else {
          pop(didPerformWorkStackCursor, workInProgress);
          push(didPerformWorkStackCursor, didChange, workInProgress);
        }
      }
    }

    function findCurrentUnmaskedContext(fiber) {
      if (disableLegacyContext) {
        return emptyContextObject;
      } else {
        // Currently this is only used with renderSubtreeIntoContainer; not sure if it
        // makes sense elsewhere
        (function () {
          if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
            {
              throw ReactError(Error('Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();

        var node = fiber;

        do {
          switch (node.tag) {
            case HostRoot:
              return node.stateNode.context;

            case ClassComponent:
              {
                var Component = node.type;

                if (isContextProvider(Component)) {
                  return node.stateNode.__reactInternalMemoizedMergedChildContext;
                }

                break;
              }
          }

          node = node.return;
        } while (node !== null);

        (function () {
          {
            {
              throw ReactError(Error('Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      }
    }

    var BatchedRoot = 1;
    var ConcurrentRoot = 2;
    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = warningWithoutStack$1;
    {
      warning = function (condition, format) {
        if (condition) {
          return;
        }

        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }
    var warning$1 = warning; // Intentionally not named imports because Rollup would use dynamic dispatch for
    // CommonJS interop named imports.

    var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority;
    var Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback;
    var Scheduler_cancelCallback = Scheduler.unstable_cancelCallback;
    var Scheduler_shouldYield = Scheduler.unstable_shouldYield;
    var Scheduler_requestPaint = Scheduler.unstable_requestPaint;
    var Scheduler_now = Scheduler.unstable_now;
    var Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
    var Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority;
    var Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
    var Scheduler_NormalPriority = Scheduler.unstable_NormalPriority;
    var Scheduler_LowPriority = Scheduler.unstable_LowPriority;
    var Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;

    if (enableSchedulerTracing) {
      // Provide explicit error message when production+profiling bundle of e.g.
      // react-dom is used with production (non-profiling) bundle of
      // scheduler/tracing
      (function () {
        if (!(tracing.__interactionsRef != null && tracing.__interactionsRef.current != null)) {
          {
            throw ReactError(Error('It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling'));
          }
        }
      })();
    }

    var fakeCallbackNode = {}; // Except for NoPriority, these correspond to Scheduler priorities. We use
    // ascending numbers so we can compare them like numbers. They start at 90 to
    // avoid clashing with Scheduler's priorities.

    var ImmediatePriority = 99;
    var UserBlockingPriority = 98;
    var NormalPriority = 97;
    var LowPriority = 96;
    var IdlePriority = 95; // NoPriority is the absence of priority. Also React-only.

    var NoPriority = 90;
    var shouldYield = Scheduler_shouldYield;
    var requestPaint = // Fall back gracefully if we're running an older version of Scheduler.
    Scheduler_requestPaint !== undefined ? Scheduler_requestPaint : function () {};
    var syncQueue = null;
    var immediateQueueCallbackNode = null;
    var isFlushingSyncQueue = false;
    var initialTimeMs = Scheduler_now(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.
    // This will be the case for modern browsers that support `performance.now`. In
    // older browsers, Scheduler falls back to `Date.now`, which returns a Unix
    // timestamp. In that case, subtract the module initialization time to simulate
    // the behavior of performance.now and keep our times small enough to fit
    // within 32 bits.
    // TODO: Consider lifting this into Scheduler.

    var now$1 = initialTimeMs < 10000 ? Scheduler_now : function () {
      return Scheduler_now() - initialTimeMs;
    };

    function getCurrentPriorityLevel() {
      switch (Scheduler_getCurrentPriorityLevel()) {
        case Scheduler_ImmediatePriority:
          return ImmediatePriority;

        case Scheduler_UserBlockingPriority:
          return UserBlockingPriority;

        case Scheduler_NormalPriority:
          return NormalPriority;

        case Scheduler_LowPriority:
          return LowPriority;

        case Scheduler_IdlePriority:
          return IdlePriority;

        default:
          (function () {
            {
              {
                throw ReactError(Error('Unknown priority level.'));
              }
            }
          })();

      }
    }

    function reactPriorityToSchedulerPriority(reactPriorityLevel) {
      switch (reactPriorityLevel) {
        case ImmediatePriority:
          return Scheduler_ImmediatePriority;

        case UserBlockingPriority:
          return Scheduler_UserBlockingPriority;

        case NormalPriority:
          return Scheduler_NormalPriority;

        case LowPriority:
          return Scheduler_LowPriority;

        case IdlePriority:
          return Scheduler_IdlePriority;

        default:
          (function () {
            {
              {
                throw ReactError(Error('Unknown priority level.'));
              }
            }
          })();

      }
    }

    function runWithPriority(reactPriorityLevel, fn) {
      var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
      return Scheduler_runWithPriority(priorityLevel, fn);
    }

    function scheduleCallback(reactPriorityLevel, callback, options) {
      var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
      return Scheduler_scheduleCallback(priorityLevel, callback, options);
    }

    function scheduleSyncCallback(callback) {
      // Push this callback into an internal queue. We'll flush these either in
      // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
      if (syncQueue === null) {
        syncQueue = [callback]; // Flush the queue in the next tick, at the earliest.

        immediateQueueCallbackNode = Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueueImpl);
      } else {
        // Push onto existing queue. Don't need to schedule a callback because
        // we already scheduled one when we created the queue.
        syncQueue.push(callback);
      }

      return fakeCallbackNode;
    }

    function cancelCallback(callbackNode) {
      if (callbackNode !== fakeCallbackNode) {
        Scheduler_cancelCallback(callbackNode);
      }
    }

    function flushSyncCallbackQueue() {
      if (immediateQueueCallbackNode !== null) {
        Scheduler_cancelCallback(immediateQueueCallbackNode);
      }

      flushSyncCallbackQueueImpl();
    }

    function flushSyncCallbackQueueImpl() {
      if (!isFlushingSyncQueue && syncQueue !== null) {
        // Prevent re-entrancy.
        isFlushingSyncQueue = true;
        var i = 0;

        try {
          var _isSync = true;
          var queue = syncQueue;
          runWithPriority(ImmediatePriority, function () {
            for (; i < queue.length; i++) {
              var callback = queue[i];

              do {
                callback = callback(_isSync);
              } while (callback !== null);
            }
          });
          syncQueue = null;
        } catch (error) {
          // If something throws, leave the remaining callbacks on the queue.
          if (syncQueue !== null) {
            syncQueue = syncQueue.slice(i + 1);
          } // Resume flushing in the next tick


          Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
          throw error;
        } finally {
          isFlushingSyncQueue = false;
        }
      }
    }

    var NoMode = 0;
    var StrictMode = 1; // TODO: Remove BatchedMode and ConcurrentMode by reading from the root
    // tag instead

    var BatchedMode = 2;
    var ConcurrentMode = 4;
    var ProfileMode = 8; // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111

    var MAX_SIGNED_31_BIT_INT = 1073741823;
    var NoWork = 0;
    var Never = 1;
    var Sync = MAX_SIGNED_31_BIT_INT;
    var Batched = Sync - 1;
    var UNIT_SIZE = 10;
    var MAGIC_NUMBER_OFFSET = Batched - 1; // 1 unit of expiration time represents 10ms.

    function msToExpirationTime(ms) {
      // Always add an offset so that we don't clash with the magic number for NoWork.
      return MAGIC_NUMBER_OFFSET - (ms / UNIT_SIZE | 0);
    }

    function expirationTimeToMs(expirationTime) {
      return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
    }

    function ceiling(num, precision) {
      return ((num / precision | 0) + 1) * precision;
    }

    function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
      return MAGIC_NUMBER_OFFSET - ceiling(MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
    } // TODO: This corresponds to Scheduler's NormalPriority, not LowPriority. Update
    // the names to reflect.


    var LOW_PRIORITY_EXPIRATION = 5000;
    var LOW_PRIORITY_BATCH_SIZE = 250;

    function computeAsyncExpiration(currentTime) {
      return computeExpirationBucket(currentTime, LOW_PRIORITY_EXPIRATION, LOW_PRIORITY_BATCH_SIZE);
    }

    function computeSuspenseExpiration(currentTime, timeoutMs) {
      // TODO: Should we warn if timeoutMs is lower than the normal pri expiration time?
      return computeExpirationBucket(currentTime, timeoutMs, LOW_PRIORITY_BATCH_SIZE);
    } // We intentionally set a higher expiration time for interactive updates in
    // dev than in production.
    //
    // If the main thread is being blocked so long that you hit the expiration,
    // it's a problem that could be solved with better scheduling.
    //
    // People will be more likely to notice this and fix it with the long
    // expiration time in development.
    //
    // In production we opt for better UX at the risk of masking scheduling
    // problems, by expiring fast.


    var HIGH_PRIORITY_EXPIRATION = 500;
    var HIGH_PRIORITY_BATCH_SIZE = 100;

    function computeInteractiveExpiration(currentTime) {
      return computeExpirationBucket(currentTime, HIGH_PRIORITY_EXPIRATION, HIGH_PRIORITY_BATCH_SIZE);
    }

    function inferPriorityFromExpirationTime(currentTime, expirationTime) {
      if (expirationTime === Sync) {
        return ImmediatePriority;
      }

      if (expirationTime === Never) {
        return IdlePriority;
      }

      var msUntil = expirationTimeToMs(expirationTime) - expirationTimeToMs(currentTime);

      if (msUntil <= 0) {
        return ImmediatePriority;
      }

      if (msUntil <= HIGH_PRIORITY_EXPIRATION + HIGH_PRIORITY_BATCH_SIZE) {
        return UserBlockingPriority;
      }

      if (msUntil <= LOW_PRIORITY_EXPIRATION + LOW_PRIORITY_BATCH_SIZE) {
        return NormalPriority;
      } // TODO: Handle LowPriority
      // Assume anything lower has idle priority


      return IdlePriority;
    }
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */


    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * Performs equality by iterating through keys on an object and returning false
     * when any key has values which are not strictly equal between the arguments.
     * Returns true when the values of all keys are strictly equal.
     */

    function shallowEqual(objA, objB) {
      if (is(objA, objB)) {
        return true;
      }

      if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      } // Test for A's keys different from B.


      for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
          return false;
        }
      }

      return true;
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;
    var ReactStrictModeWarnings = {
      recordUnsafeLifecycleWarnings: function (fiber, instance) {},
      flushPendingUnsafeLifecycleWarnings: function () {},
      recordLegacyContextWarning: function (fiber, instance) {},
      flushLegacyContextWarning: function () {},
      discardPendingWarnings: function () {}
    };
    {
      var findStrictRoot = function (fiber) {
        var maybeStrictRoot = null;
        var node = fiber;

        while (node !== null) {
          if (node.mode & StrictMode) {
            maybeStrictRoot = node;
          }

          node = node.return;
        }

        return maybeStrictRoot;
      };

      var setToSortedString = function (set) {
        var array = [];
        set.forEach(function (value) {
          array.push(value);
        });
        return array.sort().join(', ');
      };

      var pendingComponentWillMountWarnings = [];
      var pendingUNSAFE_ComponentWillMountWarnings = [];
      var pendingComponentWillReceivePropsWarnings = [];
      var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
      var pendingComponentWillUpdateWarnings = [];
      var pendingUNSAFE_ComponentWillUpdateWarnings = []; // Tracks components we have already warned about.

      var didWarnAboutUnsafeLifecycles = new Set();

      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
        // Dedup strategy: Warn once per component.
        if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
          return;
        }

        if (typeof instance.componentWillMount === 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
        instance.componentWillMount.__suppressDeprecationWarning !== true) {
          pendingComponentWillMountWarnings.push(fiber);
        }

        if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === 'function') {
          pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
        }

        if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
          pendingComponentWillReceivePropsWarnings.push(fiber);
        }

        if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
          pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
        }

        if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
          pendingComponentWillUpdateWarnings.push(fiber);
        }

        if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === 'function') {
          pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
        }
      };

      ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
        // We do an initial pass to gather component names
        var componentWillMountUniqueNames = new Set();

        if (pendingComponentWillMountWarnings.length > 0) {
          pendingComponentWillMountWarnings.forEach(function (fiber) {
            componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillMountWarnings = [];
        }

        var UNSAFE_componentWillMountUniqueNames = new Set();

        if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
          pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
            UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillMountWarnings = [];
        }

        var componentWillReceivePropsUniqueNames = new Set();

        if (pendingComponentWillReceivePropsWarnings.length > 0) {
          pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
            componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillReceivePropsWarnings = [];
        }

        var UNSAFE_componentWillReceivePropsUniqueNames = new Set();

        if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
          pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
            UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        }

        var componentWillUpdateUniqueNames = new Set();

        if (pendingComponentWillUpdateWarnings.length > 0) {
          pendingComponentWillUpdateWarnings.forEach(function (fiber) {
            componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillUpdateWarnings = [];
        }

        var UNSAFE_componentWillUpdateUniqueNames = new Set();

        if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
          pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
            UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillUpdateWarnings = [];
        } // Finally, we flush all the warnings
        // UNSAFE_ ones before the deprecated ones, since they'll be 'louder'


        if (UNSAFE_componentWillMountUniqueNames.size > 0) {
          var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
          warningWithoutStack$1(false, 'Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '\nPlease update the following components: %s', sortedNames);
        }

        if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
          var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);

          warningWithoutStack$1(false, 'Using UNSAFE_componentWillReceiveProps in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, " + 'refactor your code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n' + '\nPlease update the following components: %s', _sortedNames);
        }

        if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
          var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);

          warningWithoutStack$1(false, 'Using UNSAFE_componentWillUpdate in strict mode is not recommended ' + 'and may indicate bugs in your code. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '\nPlease update the following components: %s', _sortedNames2);
        }

        if (componentWillMountUniqueNames.size > 0) {
          var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);

          lowPriorityWarning$1(false, 'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' + '* Rename componentWillMount to UNSAFE_componentWillMount to suppress ' + 'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames3);
        }

        if (componentWillReceivePropsUniqueNames.size > 0) {
          var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);

          lowPriorityWarning$1(false, 'componentWillReceiveProps has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + "* If you're updating state whenever props change, refactor your " + 'code to use memoization techniques or move it to ' + 'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n' + '* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress ' + 'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames4);
        }

        if (componentWillUpdateUniqueNames.size > 0) {
          var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);

          lowPriorityWarning$1(false, 'componentWillUpdate has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-async-component-lifecycle-hooks for details.\n\n' + '* Move data fetching code or side effects to componentDidUpdate.\n' + '* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress ' + 'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' + 'To rename all deprecated lifecycles to their new names, you can run ' + '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' + '\nPlease update the following components: %s', _sortedNames5);
        }
      };

      var pendingLegacyContextWarning = new Map(); // Tracks components we have already warned about.

      var didWarnAboutLegacyContext = new Set();

      ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
        var strictRoot = findStrictRoot(fiber);

        if (strictRoot === null) {
          warningWithoutStack$1(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
          return;
        } // Dedup strategy: Warn once per component.


        if (didWarnAboutLegacyContext.has(fiber.type)) {
          return;
        }

        var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

        if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
          if (warningsForRoot === undefined) {
            warningsForRoot = [];
            pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
          }

          warningsForRoot.push(fiber);
        }
      };

      ReactStrictModeWarnings.flushLegacyContextWarning = function () {
        pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
          var uniqueNames = new Set();
          fiberArray.forEach(function (fiber) {
            uniqueNames.add(getComponentName(fiber.type) || 'Component');
            didWarnAboutLegacyContext.add(fiber.type);
          });
          var sortedNames = setToSortedString(uniqueNames);
          var strictRootComponentStack = getStackByFiberInDevAndProd(strictRoot);
          warningWithoutStack$1(false, 'Legacy context API has been detected within a strict-mode tree: %s' + '\n\nThe old API will be supported in all 16.x releases, but applications ' + 'using it should migrate to the new version.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-legacy-context', strictRootComponentStack, sortedNames);
        });
      };

      ReactStrictModeWarnings.discardPendingWarnings = function () {
        pendingComponentWillMountWarnings = [];
        pendingUNSAFE_ComponentWillMountWarnings = [];
        pendingComponentWillReceivePropsWarnings = [];
        pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        pendingComponentWillUpdateWarnings = [];
        pendingUNSAFE_ComponentWillUpdateWarnings = [];
        pendingLegacyContextWarning = new Map();
      };
    } // Resolves type to a family.
    // Used by React Refresh runtime through DevTools Global Hook.

    var resolveFamily = null; // $FlowFixMe Flow gets confused by a WeakSet feature check below.

    var failedBoundaries = null;

    var setRefreshHandler = function (handler) {
      {
        resolveFamily = handler;
      }
    };

    function resolveFunctionForHotReloading(type) {
      {
        if (resolveFamily === null) {
          // Hot reloading is disabled.
          return type;
        }

        var family = resolveFamily(type);

        if (family === undefined) {
          return type;
        } // Use the latest known implementation.


        return family.current;
      }
    }

    function resolveClassForHotReloading(type) {
      // No implementation differences.
      return resolveFunctionForHotReloading(type);
    }

    function resolveForwardRefForHotReloading(type) {
      {
        if (resolveFamily === null) {
          // Hot reloading is disabled.
          return type;
        }

        var family = resolveFamily(type);

        if (family === undefined) {
          // Check if we're dealing with a real forwardRef. Don't want to crash early.
          if (type !== null && type !== undefined && typeof type.render === 'function') {
            // ForwardRef is special because its resolved .type is an object,
            // but it's possible that we only have its inner render function in the map.
            // If that inner render function is different, we'll build a new forwardRef type.
            var currentRender = resolveFunctionForHotReloading(type.render);

            if (type.render !== currentRender) {
              var syntheticType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: currentRender
              };

              if (type.displayName !== undefined) {
                syntheticType.displayName = type.displayName;
              }

              return syntheticType;
            }
          }

          return type;
        } // Use the latest known implementation.


        return family.current;
      }
    }

    function isCompatibleFamilyForHotReloading(fiber, element) {
      {
        if (resolveFamily === null) {
          // Hot reloading is disabled.
          return false;
        }

        var prevType = fiber.elementType;
        var nextType = element.type; // If we got here, we know types aren't === equal.

        var needsCompareFamilies = false;
        var $$typeofNextType = typeof nextType === 'object' && nextType !== null ? nextType.$$typeof : null;

        switch (fiber.tag) {
          case ClassComponent:
            {
              if (typeof nextType === 'function') {
                needsCompareFamilies = true;
              }

              break;
            }

          case FunctionComponent:
            {
              if (typeof nextType === 'function') {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                // We don't know the inner type yet.
                // We're going to assume that the lazy inner type is stable,
                // and so it is sufficient to avoid reconciling it away.
                // We're not going to unwrap or actually use the new lazy type.
                needsCompareFamilies = true;
              }

              break;
            }

          case ForwardRef:
            {
              if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }

              break;
            }

          case MemoComponent:
          case SimpleMemoComponent:
            {
              if ($$typeofNextType === REACT_MEMO_TYPE) {
                // TODO: if it was but can no longer be simple,
                // we shouldn't set this.
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }

              break;
            }

          default:
            return false;
        } // Check if both types have a family and it's the same one.


        if (needsCompareFamilies) {
          // Note: memo() and forwardRef() we'll compare outer rather than inner type.
          // This means both of them need to be registered to preserve state.
          // If we unwrapped and compared the inner types for wrappers instead,
          // then we would risk falsely saying two separate memo(Foo)
          // calls are equivalent because they wrap the same Foo function.
          var prevFamily = resolveFamily(prevType);

          if (prevFamily !== undefined && prevFamily === resolveFamily(nextType)) {
            return true;
          }
        }

        return false;
      }
    }

    function markFailedErrorBoundaryForHotReloading(fiber) {
      {
        if (resolveFamily === null) {
          // Hot reloading is disabled.
          return;
        }

        if (typeof WeakSet !== 'function') {
          return;
        }

        if (failedBoundaries === null) {
          failedBoundaries = new WeakSet();
        }

        failedBoundaries.add(fiber);
      }
    }

    var scheduleRefresh = function (root, update) {
      {
        if (resolveFamily === null) {
          // Hot reloading is disabled.
          return;
        }

        var _staleFamilies = update.staleFamilies,
            _updatedFamilies = update.updatedFamilies;
        flushPassiveEffects();
        flushSync(function () {
          scheduleFibersWithFamiliesRecursively(root.current, _updatedFamilies, _staleFamilies);
        });
      }
    };

    var scheduleRoot = function (root, element) {
      {
        if (root.context !== emptyContextObject) {
          // Super edge case: root has a legacy _renderSubtree context
          // but we don't know the parentComponent so we can't pass it.
          // Just ignore. We'll delete this with _renderSubtree code path later.
          return;
        }

        flushPassiveEffects();
        updateContainerAtExpirationTime(element, root, null, Sync, null);
      }
    };

    function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
      {
        var alternate = fiber.alternate,
            child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type;
        var candidateType = null;

        switch (tag) {
          case FunctionComponent:
          case SimpleMemoComponent:
          case ClassComponent:
            candidateType = type;
            break;

          case ForwardRef:
            candidateType = type.render;
            break;

          default:
            break;
        }

        if (resolveFamily === null) {
          throw new Error('Expected resolveFamily to be set during hot reload.');
        }

        var needsRender = false;
        var needsRemount = false;

        if (candidateType !== null) {
          var family = resolveFamily(candidateType);

          if (family !== undefined) {
            if (staleFamilies.has(family)) {
              needsRemount = true;
            } else if (updatedFamilies.has(family)) {
              needsRender = true;
            }
          }
        }

        if (failedBoundaries !== null) {
          if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
            needsRemount = true;
          }
        }

        if (needsRemount) {
          fiber._debugNeedsRemount = true;
        }

        if (needsRemount || needsRender) {
          scheduleWork(fiber, Sync);
        }

        if (child !== null && !needsRemount) {
          scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
        }

        if (sibling !== null) {
          scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
        }
      }
    }

    var findHostInstancesForRefresh = function (root, families) {
      {
        var hostInstances = new Set();
        var types = new Set(families.map(function (family) {
          return family.current;
        }));
        findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
        return hostInstances;
      }
    };

    function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
      {
        var child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type;
        var candidateType = null;

        switch (tag) {
          case FunctionComponent:
          case SimpleMemoComponent:
          case ClassComponent:
            candidateType = type;
            break;

          case ForwardRef:
            candidateType = type.render;
            break;

          default:
            break;
        }

        var didMatch = false;

        if (candidateType !== null) {
          if (types.has(candidateType)) {
            didMatch = true;
          }
        }

        if (didMatch) {
          // We have a match. This only drills down to the closest host components.
          // There's no need to search deeper because for the purpose of giving
          // visual feedback, "flashing" outermost parent rectangles is sufficient.
          findHostInstancesForFiberShallowly(fiber, hostInstances);
        } else {
          // If there's no match, maybe there will be one further down in the child tree.
          if (child !== null) {
            findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
          }
        }

        if (sibling !== null) {
          findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
        }
      }
    }

    function findHostInstancesForFiberShallowly(fiber, hostInstances) {
      {
        var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);

        if (foundHostInstances) {
          return;
        } // If we didn't find any host children, fallback to closest host parent.


        var node = fiber;

        while (true) {
          switch (node.tag) {
            case HostComponent:
              hostInstances.add(node.stateNode);
              return;

            case HostPortal:
              hostInstances.add(node.stateNode.containerInfo);
              return;

            case HostRoot:
              hostInstances.add(node.stateNode.containerInfo);
              return;
          }

          if (node.return === null) {
            throw new Error('Expected to reach root first.');
          }

          node = node.return;
        }
      }
    }

    function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
      {
        var node = fiber;
        var foundHostInstances = false;

        while (true) {
          if (node.tag === HostComponent) {
            // We got a match.
            foundHostInstances = true;
            hostInstances.add(node.stateNode); // There may still be more, so keep searching.
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === fiber) {
            return foundHostInstances;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === fiber) {
              return foundHostInstances;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return false;
    }

    function resolveDefaultProps(Component, baseProps) {
      if (Component && Component.defaultProps) {
        // Resolve default props. Taken from ReactElement
        var props = _assign({}, baseProps);

        var defaultProps = Component.defaultProps;

        for (var propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }

        return props;
      }

      return baseProps;
    }

    function readLazyComponentType(lazyComponent) {
      var status = lazyComponent._status;
      var result = lazyComponent._result;

      switch (status) {
        case Resolved:
          {
            var Component = result;
            return Component;
          }

        case Rejected:
          {
            var error = result;
            throw error;
          }

        case Pending:
          {
            var thenable = result;
            throw thenable;
          }

        default:
          {
            lazyComponent._status = Pending;
            var ctor = lazyComponent._ctor;

            var _thenable = ctor();

            _thenable.then(function (moduleObject) {
              if (lazyComponent._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === undefined) {
                    warning$1(false, 'lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                lazyComponent._status = Resolved;
                lazyComponent._result = defaultExport;
              }
            }, function (error) {
              if (lazyComponent._status === Pending) {
                lazyComponent._status = Rejected;
                lazyComponent._result = error;
              }
            }); // Handle synchronous thenables.


            switch (lazyComponent._status) {
              case Resolved:
                return lazyComponent._result;

              case Rejected:
                throw lazyComponent._result;
            }

            lazyComponent._result = _thenable;
            throw _thenable;
          }
      }
    }

    var valueCursor = createCursor(null);
    var rendererSigil = void 0;
    {
      // Use this to detect multiple renderers using the same context
      rendererSigil = {};
    }
    var currentlyRenderingFiber = null;
    var lastContextDependency = null;
    var lastContextWithAllBitsObserved = null;
    var isDisallowedContextReadInDEV = false;

    function resetContextDependencies() {
      // This is called right before React yields execution, to ensure `readContext`
      // cannot be called outside the render phase.
      currentlyRenderingFiber = null;
      lastContextDependency = null;
      lastContextWithAllBitsObserved = null;
      {
        isDisallowedContextReadInDEV = false;
      }
    }

    function enterDisallowedContextReadInDEV() {
      {
        isDisallowedContextReadInDEV = true;
      }
    }

    function exitDisallowedContextReadInDEV() {
      {
        isDisallowedContextReadInDEV = false;
      }
    }

    function pushProvider(providerFiber, nextValue) {
      var context = providerFiber.type._context;

      if (isPrimaryRenderer) {
        push(valueCursor, context._currentValue, providerFiber);
        context._currentValue = nextValue;
        {
          !(context._currentRenderer === undefined || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warningWithoutStack$1(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
          context._currentRenderer = rendererSigil;
        }
      } else {
        push(valueCursor, context._currentValue2, providerFiber);
        context._currentValue2 = nextValue;
        {
          !(context._currentRenderer2 === undefined || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warningWithoutStack$1(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
          context._currentRenderer2 = rendererSigil;
        }
      }
    }

    function popProvider(providerFiber) {
      var currentValue = valueCursor.current;
      pop(valueCursor, providerFiber);
      var context = providerFiber.type._context;

      if (isPrimaryRenderer) {
        context._currentValue = currentValue;
      } else {
        context._currentValue2 = currentValue;
      }
    }

    function calculateChangedBits(context, newValue, oldValue) {
      if (is(oldValue, newValue)) {
        // No change
        return 0;
      } else {
        var changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
        {
          !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning$1(false, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits) : void 0;
        }
        return changedBits | 0;
      }
    }

    function scheduleWorkOnParentPath(parent, renderExpirationTime) {
      // Update the child expiration time of all the ancestors, including
      // the alternates.
      var node = parent;

      while (node !== null) {
        var alternate = node.alternate;

        if (node.childExpirationTime < renderExpirationTime) {
          node.childExpirationTime = renderExpirationTime;

          if (alternate !== null && alternate.childExpirationTime < renderExpirationTime) {
            alternate.childExpirationTime = renderExpirationTime;
          }
        } else if (alternate !== null && alternate.childExpirationTime < renderExpirationTime) {
          alternate.childExpirationTime = renderExpirationTime;
        } else {
          // Neither alternate was updated, which means the rest of the
          // ancestor path already has sufficient priority.
          break;
        }

        node = node.return;
      }
    }

    function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
      var fiber = workInProgress.child;

      if (fiber !== null) {
        // Set the return pointer of the child to the work-in-progress fiber.
        fiber.return = workInProgress;
      }

      while (fiber !== null) {
        var nextFiber = void 0; // Visit this fiber.

        var list = fiber.dependencies;

        if (list !== null) {
          nextFiber = fiber.child;
          var dependency = list.firstContext;

          while (dependency !== null) {
            // Check if the context matches.
            if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
              // Match! Schedule an update on this fiber.
              if (fiber.tag === ClassComponent) {
                // Schedule a force update on the work-in-progress.
                var update = createUpdate(renderExpirationTime, null);
                update.tag = ForceUpdate; // TODO: Because we don't have a work-in-progress, this will add the
                // update to the current fiber, too, which means it will persist even if
                // this render is thrown away. Since it's a race condition, not sure it's
                // worth fixing.

                enqueueUpdate(fiber, update);
              }

              if (fiber.expirationTime < renderExpirationTime) {
                fiber.expirationTime = renderExpirationTime;
              }

              var alternate = fiber.alternate;

              if (alternate !== null && alternate.expirationTime < renderExpirationTime) {
                alternate.expirationTime = renderExpirationTime;
              }

              scheduleWorkOnParentPath(fiber.return, renderExpirationTime); // Mark the expiration time on the list, too.

              if (list.expirationTime < renderExpirationTime) {
                list.expirationTime = renderExpirationTime;
              } // Since we already found a match, we can stop traversing the
              // dependency list.


              break;
            }

            dependency = dependency.next;
          }
        } else if (fiber.tag === ContextProvider) {
          // Don't scan deeper if this is a matching provider
          nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
        } else if (enableSuspenseServerRenderer && fiber.tag === DehydratedSuspenseComponent) {
          // If a dehydrated suspense component is in this subtree, we don't know
          // if it will have any context consumers in it. The best we can do is
          // mark it as having updates on its children.
          if (fiber.expirationTime < renderExpirationTime) {
            fiber.expirationTime = renderExpirationTime;
          }

          var _alternate = fiber.alternate;

          if (_alternate !== null && _alternate.expirationTime < renderExpirationTime) {
            _alternate.expirationTime = renderExpirationTime;
          } // This is intentionally passing this fiber as the parent
          // because we want to schedule this fiber as having work
          // on its children. We'll use the childExpirationTime on
          // this fiber to indicate that a context has changed.


          scheduleWorkOnParentPath(fiber, renderExpirationTime);
          nextFiber = fiber.sibling;
        } else {
          // Traverse down.
          nextFiber = fiber.child;
        }

        if (nextFiber !== null) {
          // Set the return pointer of the child to the work-in-progress fiber.
          nextFiber.return = fiber;
        } else {
          // No child. Traverse to next sibling.
          nextFiber = fiber;

          while (nextFiber !== null) {
            if (nextFiber === workInProgress) {
              // We're back to the root of this subtree. Exit.
              nextFiber = null;
              break;
            }

            var sibling = nextFiber.sibling;

            if (sibling !== null) {
              // Set the return pointer of the sibling to the work-in-progress fiber.
              sibling.return = nextFiber.return;
              nextFiber = sibling;
              break;
            } // No more siblings. Traverse up.


            nextFiber = nextFiber.return;
          }
        }

        fiber = nextFiber;
      }
    }

    function prepareToReadContext(workInProgress, renderExpirationTime) {
      currentlyRenderingFiber = workInProgress;
      lastContextDependency = null;
      lastContextWithAllBitsObserved = null;
      var dependencies = workInProgress.dependencies;

      if (dependencies !== null) {
        var firstContext = dependencies.firstContext;

        if (firstContext !== null) {
          if (dependencies.expirationTime >= renderExpirationTime) {
            // Context list has a pending update. Mark that this fiber performed work.
            markWorkInProgressReceivedUpdate();
          } // Reset the work-in-progress list


          dependencies.firstContext = null;
        }
      }
    }

    function readContext(context, observedBits) {
      {
        // This warning would fire if you read context inside a Hook like useMemo.
        // Unlike the class check below, it's not enforced in production for perf.
        !!isDisallowedContextReadInDEV ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
      }

      if (lastContextWithAllBitsObserved === context) {// Nothing to do. We already observe everything in this context.
      } else if (observedBits === false || observedBits === 0) {// Do not observe any updates.
      } else {
        var resolvedObservedBits = void 0; // Avoid deopting on observable arguments or heterogeneous types.

        if (typeof observedBits !== 'number' || observedBits === MAX_SIGNED_31_BIT_INT) {
          // Observe all updates.
          lastContextWithAllBitsObserved = context;
          resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
        } else {
          resolvedObservedBits = observedBits;
        }

        var contextItem = {
          context: context,
          observedBits: resolvedObservedBits,
          next: null
        };

        if (lastContextDependency === null) {
          (function () {
            if (!(currentlyRenderingFiber !== null)) {
              {
                throw ReactError(Error('Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'));
              }
            }
          })(); // This is the first dependency for this component. Create a new list.


          lastContextDependency = contextItem;
          currentlyRenderingFiber.dependencies = {
            expirationTime: NoWork,
            firstContext: contextItem,
            responders: null
          };
        } else {
          // Append a new context item.
          lastContextDependency = lastContextDependency.next = contextItem;
        }
      }

      return isPrimaryRenderer ? context._currentValue : context._currentValue2;
    } // UpdateQueue is a linked list of prioritized updates.
    //
    // Like fibers, update queues come in pairs: a current queue, which represents
    // the visible state of the screen, and a work-in-progress queue, which can be
    // mutated and processed asynchronously before it is committed — a form of
    // double buffering. If a work-in-progress render is discarded before finishing,
    // we create a new work-in-progress by cloning the current queue.
    //
    // Both queues share a persistent, singly-linked list structure. To schedule an
    // update, we append it to the end of both queues. Each queue maintains a
    // pointer to first update in the persistent list that hasn't been processed.
    // The work-in-progress pointer always has a position equal to or greater than
    // the current queue, since we always work on that one. The current queue's
    // pointer is only updated during the commit phase, when we swap in the
    // work-in-progress.
    //
    // For example:
    //
    //   Current pointer:           A - B - C - D - E - F
    //   Work-in-progress pointer:              D - E - F
    //                                          ^
    //                                          The work-in-progress queue has
    //                                          processed more updates than current.
    //
    // The reason we append to both queues is because otherwise we might drop
    // updates without ever processing them. For example, if we only add updates to
    // the work-in-progress queue, some updates could be lost whenever a work-in
    // -progress render restarts by cloning from current. Similarly, if we only add
    // updates to the current queue, the updates will be lost whenever an already
    // in-progress queue commits and swaps with the current queue. However, by
    // adding to both queues, we guarantee that the update will be part of the next
    // work-in-progress. (And because the work-in-progress queue becomes the
    // current queue once it commits, there's no danger of applying the same
    // update twice.)
    //
    // Prioritization
    // --------------
    //
    // Updates are not sorted by priority, but by insertion; new updates are always
    // appended to the end of the list.
    //
    // The priority is still important, though. When processing the update queue
    // during the render phase, only the updates with sufficient priority are
    // included in the result. If we skip an update because it has insufficient
    // priority, it remains in the queue to be processed later, during a lower
    // priority render. Crucially, all updates subsequent to a skipped update also
    // remain in the queue *regardless of their priority*. That means high priority
    // updates are sometimes processed twice, at two separate priorities. We also
    // keep track of a base state, that represents the state before the first
    // update in the queue is applied.
    //
    // For example:
    //
    //   Given a base state of '', and the following queue of updates
    //
    //     A1 - B2 - C1 - D2
    //
    //   where the number indicates the priority, and the update is applied to the
    //   previous state by appending a letter, React will process these updates as
    //   two separate renders, one per distinct priority level:
    //
    //   First render, at priority 1:
    //     Base state: ''
    //     Updates: [A1, C1]
    //     Result state: 'AC'
    //
    //   Second render, at priority 2:
    //     Base state: 'A'            <-  The base state does not include C1,
    //                                    because B2 was skipped.
    //     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
    //     Result state: 'ABCD'
    //
    // Because we process updates in insertion order, and rebase high priority
    // updates when preceding updates are skipped, the final result is deterministic
    // regardless of priority. Intermediate state may vary according to system
    // resources, but the final state is always the same.


    var UpdateState = 0;
    var ReplaceState = 1;
    var ForceUpdate = 2;
    var CaptureUpdate = 3; // Global state that is reset at the beginning of calling `processUpdateQueue`.
    // It should only be read right after calling `processUpdateQueue`, via
    // `checkHasForceUpdateAfterProcessing`.

    var hasForceUpdate = false;
    var didWarnUpdateInsideUpdate = void 0;
    var currentlyProcessingQueue = void 0;
    {
      didWarnUpdateInsideUpdate = false;
      currentlyProcessingQueue = null;
    }

    function createUpdateQueue(baseState) {
      var queue = {
        baseState: baseState,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
      return queue;
    }

    function cloneUpdateQueue(currentQueue) {
      var queue = {
        baseState: currentQueue.baseState,
        firstUpdate: currentQueue.firstUpdate,
        lastUpdate: currentQueue.lastUpdate,
        // TODO: With resuming, if we bail out and resuse the child tree, we should
        // keep these effects.
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
      return queue;
    }

    function createUpdate(expirationTime, suspenseConfig) {
      var update = {
        expirationTime: expirationTime,
        suspenseConfig: suspenseConfig,
        tag: UpdateState,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      };
      {
        update.priority = getCurrentPriorityLevel();
      }
      return update;
    }

    function appendUpdateToQueue(queue, update) {
      // Append the update to the end of the list.
      if (queue.lastUpdate === null) {
        // Queue is empty
        queue.firstUpdate = queue.lastUpdate = update;
      } else {
        queue.lastUpdate.next = update;
        queue.lastUpdate = update;
      }
    }

    function enqueueUpdate(fiber, update) {
      // Update queues are created lazily.
      var alternate = fiber.alternate;
      var queue1 = void 0;
      var queue2 = void 0;

      if (alternate === null) {
        // There's only one fiber.
        queue1 = fiber.updateQueue;
        queue2 = null;

        if (queue1 === null) {
          queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
        }
      } else {
        // There are two owners.
        queue1 = fiber.updateQueue;
        queue2 = alternate.updateQueue;

        if (queue1 === null) {
          if (queue2 === null) {
            // Neither fiber has an update queue. Create new ones.
            queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
            queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
          } else {
            // Only one fiber has an update queue. Clone to create a new one.
            queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
          }
        } else {
          if (queue2 === null) {
            // Only one fiber has an update queue. Clone to create a new one.
            queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
          } else {// Both owners have an update queue.
          }
        }
      }

      if (queue2 === null || queue1 === queue2) {
        // There's only a single queue.
        appendUpdateToQueue(queue1, update);
      } else {
        // There are two queues. We need to append the update to both queues,
        // while accounting for the persistent structure of the list — we don't
        // want the same update to be added multiple times.
        if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
          // One of the queues is not empty. We must add the update to both queues.
          appendUpdateToQueue(queue1, update);
          appendUpdateToQueue(queue2, update);
        } else {
          // Both queues are non-empty. The last update is the same in both lists,
          // because of structural sharing. So, only append to one of the lists.
          appendUpdateToQueue(queue1, update); // But we still need to update the `lastUpdate` pointer of queue2.

          queue2.lastUpdate = update;
        }
      }

      {
        if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
          warningWithoutStack$1(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
          didWarnUpdateInsideUpdate = true;
        }
      }
    }

    function enqueueCapturedUpdate(workInProgress, update) {
      // Captured updates go into a separate list, and only on the work-in-
      // progress queue.
      var workInProgressQueue = workInProgress.updateQueue;

      if (workInProgressQueue === null) {
        workInProgressQueue = workInProgress.updateQueue = createUpdateQueue(workInProgress.memoizedState);
      } else {
        // TODO: I put this here rather than createWorkInProgress so that we don't
        // clone the queue unnecessarily. There's probably a better way to
        // structure this.
        workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress, workInProgressQueue);
      } // Append the update to the end of the list.


      if (workInProgressQueue.lastCapturedUpdate === null) {
        // This is the first render phase update
        workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
      } else {
        workInProgressQueue.lastCapturedUpdate.next = update;
        workInProgressQueue.lastCapturedUpdate = update;
      }
    }

    function ensureWorkInProgressQueueIsAClone(workInProgress, queue) {
      var current = workInProgress.alternate;

      if (current !== null) {
        // If the work-in-progress queue is equal to the current queue,
        // we need to clone it first.
        if (queue === current.updateQueue) {
          queue = workInProgress.updateQueue = cloneUpdateQueue(queue);
        }
      }

      return queue;
    }

    function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
      switch (update.tag) {
        case ReplaceState:
          {
            var _payload = update.payload;

            if (typeof _payload === 'function') {
              // Updater function
              {
                enterDisallowedContextReadInDEV();

                if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
                  _payload.call(instance, prevState, nextProps);
                }
              }

              var nextState = _payload.call(instance, prevState, nextProps);

              {
                exitDisallowedContextReadInDEV();
              }
              return nextState;
            } // State object


            return _payload;
          }

        case CaptureUpdate:
          {
            workInProgress.effectTag = workInProgress.effectTag & ~ShouldCapture | DidCapture;
          }
        // Intentional fallthrough

        case UpdateState:
          {
            var _payload2 = update.payload;
            var partialState = void 0;

            if (typeof _payload2 === 'function') {
              // Updater function
              {
                enterDisallowedContextReadInDEV();

                if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
                  _payload2.call(instance, prevState, nextProps);
                }
              }
              partialState = _payload2.call(instance, prevState, nextProps);
              {
                exitDisallowedContextReadInDEV();
              }
            } else {
              // Partial state object
              partialState = _payload2;
            }

            if (partialState === null || partialState === undefined) {
              // Null and undefined are treated as no-ops.
              return prevState;
            } // Merge the partial state and the previous state.


            return _assign({}, prevState, partialState);
          }

        case ForceUpdate:
          {
            hasForceUpdate = true;
            return prevState;
          }
      }

      return prevState;
    }

    function processUpdateQueue(workInProgress, queue, props, instance, renderExpirationTime) {
      hasForceUpdate = false;
      queue = ensureWorkInProgressQueueIsAClone(workInProgress, queue);
      {
        currentlyProcessingQueue = queue;
      } // These values may change as we process the queue.

      var newBaseState = queue.baseState;
      var newFirstUpdate = null;
      var newExpirationTime = NoWork; // Iterate through the list of updates to compute the result.

      var update = queue.firstUpdate;
      var resultState = newBaseState;

      while (update !== null) {
        var updateExpirationTime = update.expirationTime;

        if (updateExpirationTime < renderExpirationTime) {
          // This update does not have sufficient priority. Skip it.
          if (newFirstUpdate === null) {
            // This is the first skipped update. It will be the first update in
            // the new list.
            newFirstUpdate = update; // Since this is the first update that was skipped, the current result
            // is the new base state.

            newBaseState = resultState;
          } // Since this update will remain in the list, update the remaining
          // expiration time.


          if (newExpirationTime < updateExpirationTime) {
            newExpirationTime = updateExpirationTime;
          }
        } else {
          // This update does have sufficient priority.
          // Mark the event time of this update as relevant to this render pass.
          // TODO: This should ideally use the true event time of this update rather than
          // its priority which is a derived and not reverseable value.
          // TODO: We should skip this update if it was already committed but currently
          // we have no way of detecting the difference between a committed and suspended
          // update here.
          markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig); // Process it and compute a new result.

          resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
          var _callback = update.callback;

          if (_callback !== null) {
            workInProgress.effectTag |= Callback; // Set this to null, in case it was mutated during an aborted render.

            update.nextEffect = null;

            if (queue.lastEffect === null) {
              queue.firstEffect = queue.lastEffect = update;
            } else {
              queue.lastEffect.nextEffect = update;
              queue.lastEffect = update;
            }
          }
        } // Continue to the next update.


        update = update.next;
      } // Separately, iterate though the list of captured updates.


      var newFirstCapturedUpdate = null;
      update = queue.firstCapturedUpdate;

      while (update !== null) {
        var _updateExpirationTime = update.expirationTime;

        if (_updateExpirationTime < renderExpirationTime) {
          // This update does not have sufficient priority. Skip it.
          if (newFirstCapturedUpdate === null) {
            // This is the first skipped captured update. It will be the first
            // update in the new list.
            newFirstCapturedUpdate = update; // If this is the first update that was skipped, the current result is
            // the new base state.

            if (newFirstUpdate === null) {
              newBaseState = resultState;
            }
          } // Since this update will remain in the list, update the remaining
          // expiration time.


          if (newExpirationTime < _updateExpirationTime) {
            newExpirationTime = _updateExpirationTime;
          }
        } else {
          // This update does have sufficient priority. Process it and compute
          // a new result.
          resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
          var _callback2 = update.callback;

          if (_callback2 !== null) {
            workInProgress.effectTag |= Callback; // Set this to null, in case it was mutated during an aborted render.

            update.nextEffect = null;

            if (queue.lastCapturedEffect === null) {
              queue.firstCapturedEffect = queue.lastCapturedEffect = update;
            } else {
              queue.lastCapturedEffect.nextEffect = update;
              queue.lastCapturedEffect = update;
            }
          }
        }

        update = update.next;
      }

      if (newFirstUpdate === null) {
        queue.lastUpdate = null;
      }

      if (newFirstCapturedUpdate === null) {
        queue.lastCapturedUpdate = null;
      } else {
        workInProgress.effectTag |= Callback;
      }

      if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
        // We processed every update, without skipping. That means the new base
        // state is the same as the result state.
        newBaseState = resultState;
      }

      queue.baseState = newBaseState;
      queue.firstUpdate = newFirstUpdate;
      queue.firstCapturedUpdate = newFirstCapturedUpdate; // Set the remaining expiration time to be whatever is remaining in the queue.
      // This should be fine because the only two other things that contribute to
      // expiration time are props and context. We're already in the middle of the
      // begin phase by the time we start processing the queue, so we've already
      // dealt with the props. Context in components that specify
      // shouldComponentUpdate is tricky; but we'll have to account for
      // that regardless.

      workInProgress.expirationTime = newExpirationTime;
      workInProgress.memoizedState = resultState;
      {
        currentlyProcessingQueue = null;
      }
    }

    function callCallback(callback, context) {
      (function () {
        if (!(typeof callback === 'function')) {
          {
            throw ReactError(Error('Invalid argument passed as callback. Expected a function. Instead received: ' + callback));
          }
        }
      })();

      callback.call(context);
    }

    function resetHasForceUpdateBeforeProcessing() {
      hasForceUpdate = false;
    }

    function checkHasForceUpdateAfterProcessing() {
      return hasForceUpdate;
    }

    function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime) {
      // If the finished render included captured updates, and there are still
      // lower priority updates left over, we need to keep the captured updates
      // in the queue so that they are rebased and not dropped once we process the
      // queue again at the lower priority.
      if (finishedQueue.firstCapturedUpdate !== null) {
        // Join the captured update list to the end of the normal list.
        if (finishedQueue.lastUpdate !== null) {
          finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
          finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
        } // Clear the list of captured updates.


        finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
      } // Commit the effects


      commitUpdateEffects(finishedQueue.firstEffect, instance);
      finishedQueue.firstEffect = finishedQueue.lastEffect = null;
      commitUpdateEffects(finishedQueue.firstCapturedEffect, instance);
      finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
    }

    function commitUpdateEffects(effect, instance) {
      while (effect !== null) {
        var _callback3 = effect.callback;

        if (_callback3 !== null) {
          effect.callback = null;
          callCallback(_callback3, instance);
        }

        effect = effect.nextEffect;
      }
    }

    var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;

    function requestCurrentSuspenseConfig() {
      return ReactCurrentBatchConfig.suspense;
    }

    var fakeInternalInstance = {};
    var isArray$1 = Array.isArray; // React.Component uses a shared frozen object by default.
    // We'll use it to determine whether we need to initialize legacy refs.

    var emptyRefsObject = new React.Component().refs;
    var didWarnAboutStateAssignmentForComponent = void 0;
    var didWarnAboutUninitializedState = void 0;
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = void 0;
    var didWarnAboutLegacyLifecyclesAndDerivedState = void 0;
    var didWarnAboutUndefinedDerivedState = void 0;
    var warnOnUndefinedDerivedState = void 0;
    var warnOnInvalidCallback = void 0;
    var didWarnAboutDirectlyAssigningPropsToState = void 0;
    var didWarnAboutContextTypeAndContextTypes = void 0;
    var didWarnAboutInvalidateContextType = void 0;
    {
      didWarnAboutStateAssignmentForComponent = new Set();
      didWarnAboutUninitializedState = new Set();
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
      didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
      didWarnAboutDirectlyAssigningPropsToState = new Set();
      didWarnAboutUndefinedDerivedState = new Set();
      didWarnAboutContextTypeAndContextTypes = new Set();
      didWarnAboutInvalidateContextType = new Set();
      var didWarnOnInvalidCallback = new Set();

      warnOnInvalidCallback = function (callback, callerName) {
        if (callback === null || typeof callback === 'function') {
          return;
        }

        var key = callerName + '_' + callback;

        if (!didWarnOnInvalidCallback.has(key)) {
          didWarnOnInvalidCallback.add(key);
          warningWithoutStack$1(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
        }
      };

      warnOnUndefinedDerivedState = function (type, partialState) {
        if (partialState === undefined) {
          var componentName = getComponentName(type) || 'Component';

          if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
            didWarnAboutUndefinedDerivedState.add(componentName);
            warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
          }
        }
      }; // This is so gross but it's at least non-critical and can be removed if
      // it causes problems. This is meant to give a nicer error message for
      // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
      // ...)) which otherwise throws a "_processChildContext is not a function"
      // exception.


      Object.defineProperty(fakeInternalInstance, '_processChildContext', {
        enumerable: false,
        value: function () {
          (function () {
            {
              {
                throw ReactError(Error('_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).'));
              }
            }
          })();
        }
      });
      Object.freeze(fakeInternalInstance);
    }

    function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
      var prevState = workInProgress.memoizedState;
      {
        if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
          // Invoke the function an extra time to help detect side-effects.
          getDerivedStateFromProps(nextProps, prevState);
        }
      }
      var partialState = getDerivedStateFromProps(nextProps, prevState);
      {
        warnOnUndefinedDerivedState(ctor, partialState);
      } // Merge the partial state and the previous state.

      var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
      workInProgress.memoizedState = memoizedState; // Once the update queue is empty, persist the derived state onto the
      // base state.

      var updateQueue = workInProgress.updateQueue;

      if (updateQueue !== null && workInProgress.expirationTime === NoWork) {
        updateQueue.baseState = memoizedState;
      }
    }

    var classComponentUpdater = {
      isMounted: isMounted,
      enqueueSetState: function (inst, payload, callback) {
        var fiber = get(inst);
        var currentTime = requestCurrentTime();
        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
        var update = createUpdate(expirationTime, suspenseConfig);
        update.payload = payload;

        if (callback !== undefined && callback !== null) {
          {
            warnOnInvalidCallback(callback, 'setState');
          }
          update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
      },
      enqueueReplaceState: function (inst, payload, callback) {
        var fiber = get(inst);
        var currentTime = requestCurrentTime();
        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
        var update = createUpdate(expirationTime, suspenseConfig);
        update.tag = ReplaceState;
        update.payload = payload;

        if (callback !== undefined && callback !== null) {
          {
            warnOnInvalidCallback(callback, 'replaceState');
          }
          update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
      },
      enqueueForceUpdate: function (inst, callback) {
        var fiber = get(inst);
        var currentTime = requestCurrentTime();
        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
        var update = createUpdate(expirationTime, suspenseConfig);
        update.tag = ForceUpdate;

        if (callback !== undefined && callback !== null) {
          {
            warnOnInvalidCallback(callback, 'forceUpdate');
          }
          update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
      }
    };

    function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
      var instance = workInProgress.stateNode;

      if (typeof instance.shouldComponentUpdate === 'function') {
        startPhaseTimer(workInProgress, 'shouldComponentUpdate');
        var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
        stopPhaseTimer();
        {
          !(shouldUpdate !== undefined) ? warningWithoutStack$1(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(ctor) || 'Component') : void 0;
        }
        return shouldUpdate;
      }

      if (ctor.prototype && ctor.prototype.isPureReactComponent) {
        return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
      }

      return true;
    }

    function checkClassInstance(workInProgress, ctor, newProps) {
      var instance = workInProgress.stateNode;
      {
        var name = getComponentName(ctor) || 'Component';
        var renderPresent = instance.render;

        if (!renderPresent) {
          if (ctor.prototype && typeof ctor.prototype.render === 'function') {
            warningWithoutStack$1(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
          } else {
            warningWithoutStack$1(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
          }
        }

        var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
        !noGetInitialStateOnES6 ? warningWithoutStack$1(false, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name) : void 0;
        var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
        !noGetDefaultPropsOnES6 ? warningWithoutStack$1(false, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name) : void 0;
        var noInstancePropTypes = !instance.propTypes;
        !noInstancePropTypes ? warningWithoutStack$1(false, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name) : void 0;
        var noInstanceContextType = !instance.contextType;
        !noInstanceContextType ? warningWithoutStack$1(false, 'contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name) : void 0;

        if (disableLegacyContext) {
          if (ctor.childContextTypes) {
            warningWithoutStack$1(false, '%s uses the legacy childContextTypes API which is no longer supported. ' + 'Use React.createContext() instead.', name);
          }

          if (ctor.contextTypes) {
            warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with static contextType instead.', name);
          }
        } else {
          var noInstanceContextTypes = !instance.contextTypes;
          !noInstanceContextTypes ? warningWithoutStack$1(false, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name) : void 0;

          if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
            didWarnAboutContextTypeAndContextTypes.add(ctor);
            warningWithoutStack$1(false, '%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
          }
        }

        var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
        !noComponentShouldUpdate ? warningWithoutStack$1(false, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name) : void 0;

        if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
          warningWithoutStack$1(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(ctor) || 'A pure component');
        }

        var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
        !noComponentDidUnmount ? warningWithoutStack$1(false, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name) : void 0;
        var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
        !noComponentDidReceiveProps ? warningWithoutStack$1(false, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name) : void 0;
        var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
        !noComponentWillRecieveProps ? warningWithoutStack$1(false, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name) : void 0;
        var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== 'function';
        !noUnsafeComponentWillRecieveProps ? warningWithoutStack$1(false, '%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name) : void 0;
        var hasMutatedProps = instance.props !== newProps;
        !(instance.props === undefined || !hasMutatedProps) ? warningWithoutStack$1(false, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name) : void 0;
        var noInstanceDefaultProps = !instance.defaultProps;
        !noInstanceDefaultProps ? warningWithoutStack$1(false, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name) : void 0;

        if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
          warningWithoutStack$1(false, '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(ctor));
        }

        var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== 'function';
        !noInstanceGetDerivedStateFromProps ? warningWithoutStack$1(false, '%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
        var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromError !== 'function';
        !noInstanceGetDerivedStateFromCatch ? warningWithoutStack$1(false, '%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
        var noStaticGetSnapshotBeforeUpdate = typeof ctor.getSnapshotBeforeUpdate !== 'function';
        !noStaticGetSnapshotBeforeUpdate ? warningWithoutStack$1(false, '%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name) : void 0;
        var _state = instance.state;

        if (_state && (typeof _state !== 'object' || isArray$1(_state))) {
          warningWithoutStack$1(false, '%s.state: must be set to an object or null', name);
        }

        if (typeof instance.getChildContext === 'function') {
          !(typeof ctor.childContextTypes === 'object') ? warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name) : void 0;
        }
      }
    }

    function adoptClassInstance(workInProgress, instance) {
      instance.updater = classComponentUpdater;
      workInProgress.stateNode = instance; // The instance needs access to the fiber so that it can schedule updates

      set(instance, workInProgress);
      {
        instance._reactInternalInstance = fakeInternalInstance;
      }
    }

    function constructClassInstance(workInProgress, ctor, props, renderExpirationTime) {
      var isLegacyContextConsumer = false;
      var unmaskedContext = emptyContextObject;
      var context = emptyContextObject;
      var contextType = ctor.contextType;
      {
        if ('contextType' in ctor) {
          var isValid = // Allow null for conditional declaration
          contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            var addendum = '';

            if (contextType === undefined) {
              addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
            } else if (typeof contextType !== 'object') {
              addendum = ' However, it is set to a ' + typeof contextType + '.';
            } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
              addendum = ' Did you accidentally pass the Context.Provider instead?';
            } else if (contextType._context !== undefined) {
              // <Context.Consumer>
              addendum = ' Did you accidentally pass the Context.Consumer instead?';
            } else {
              addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
            }

            warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(ctor) || 'Component', addendum);
          }
        }
      }

      if (typeof contextType === 'object' && contextType !== null) {
        context = readContext(contextType);
      } else if (!disableLegacyContext) {
        unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
        var contextTypes = ctor.contextTypes;
        isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
        context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
      } // Instantiate twice to help detect side-effects.


      {
        if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
          new ctor(props, context); // eslint-disable-line no-new
        }
      }
      var instance = new ctor(props, context);
      var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
      adoptClassInstance(workInProgress, instance);
      {
        if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
          var componentName = getComponentName(ctor) || 'Component';

          if (!didWarnAboutUninitializedState.has(componentName)) {
            didWarnAboutUninitializedState.add(componentName);
            warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
          }
        } // If new component APIs are defined, "unsafe" lifecycles won't be called.
        // Warn about these lifecycles if they are present.
        // Don't warn about react-lifecycles-compat polyfilled methods though.


        if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
          var foundWillMountName = null;
          var foundWillReceivePropsName = null;
          var foundWillUpdateName = null;

          if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
            foundWillMountName = 'componentWillMount';
          } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
            foundWillMountName = 'UNSAFE_componentWillMount';
          }

          if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
            foundWillReceivePropsName = 'componentWillReceiveProps';
          } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
            foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
          }

          if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
            foundWillUpdateName = 'componentWillUpdate';
          } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
            foundWillUpdateName = 'UNSAFE_componentWillUpdate';
          }

          if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
            var _componentName = getComponentName(ctor) || 'Component';

            var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

            if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
              didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
              warningWithoutStack$1(false, 'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks', _componentName, newApiName, foundWillMountName !== null ? '\n  ' + foundWillMountName : '', foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '', foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '');
            }
          }
        }
      } // Cache unmasked context so we can avoid recreating masked context unless necessary.
      // ReactFiberContext usually updates this cache but can't for newly-created instances.

      if (isLegacyContextConsumer) {
        cacheContext(workInProgress, unmaskedContext, context);
      }

      return instance;
    }

    function callComponentWillMount(workInProgress, instance) {
      startPhaseTimer(workInProgress, 'componentWillMount');
      var oldState = instance.state;

      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }

      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }

      stopPhaseTimer();

      if (oldState !== instance.state) {
        {
          warningWithoutStack$1(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress.type) || 'Component');
        }
        classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
      }
    }

    function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
      var oldState = instance.state;
      startPhaseTimer(workInProgress, 'componentWillReceiveProps');

      if (typeof instance.componentWillReceiveProps === 'function') {
        instance.componentWillReceiveProps(newProps, nextContext);
      }

      if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      }

      stopPhaseTimer();

      if (instance.state !== oldState) {
        {
          var componentName = getComponentName(workInProgress.type) || 'Component';

          if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
            didWarnAboutStateAssignmentForComponent.add(componentName);
            warningWithoutStack$1(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
          }
        }
        classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
      }
    } // Invokes the mount life-cycles on a previously never rendered instance.


    function mountClassInstance(workInProgress, ctor, newProps, renderExpirationTime) {
      {
        checkClassInstance(workInProgress, ctor, newProps);
      }
      var instance = workInProgress.stateNode;
      instance.props = newProps;
      instance.state = workInProgress.memoizedState;
      instance.refs = emptyRefsObject;
      var contextType = ctor.contextType;

      if (typeof contextType === 'object' && contextType !== null) {
        instance.context = readContext(contextType);
      } else if (disableLegacyContext) {
        instance.context = emptyContextObject;
      } else {
        var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
        instance.context = getMaskedContext(workInProgress, unmaskedContext);
      }

      {
        if (instance.state === newProps) {
          var componentName = getComponentName(ctor) || 'Component';

          if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
            didWarnAboutDirectlyAssigningPropsToState.add(componentName);
            warningWithoutStack$1(false, '%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
          }
        }

        if (workInProgress.mode & StrictMode) {
          ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
        }

        if (warnAboutDeprecatedLifecycles) {
          ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
        }
      }
      var updateQueue = workInProgress.updateQueue;

      if (updateQueue !== null) {
        processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
        instance.state = workInProgress.memoizedState;
      }

      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

      if (typeof getDerivedStateFromProps === 'function') {
        applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
        instance.state = workInProgress.memoizedState;
      } // In order to support react-lifecycles-compat polyfilled components,
      // Unsafe lifecycles should not be invoked for components using the new APIs.


      if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
        callComponentWillMount(workInProgress, instance); // If we had additional state updates during this life-cycle, let's
        // process them now.

        updateQueue = workInProgress.updateQueue;

        if (updateQueue !== null) {
          processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
          instance.state = workInProgress.memoizedState;
        }
      }

      if (typeof instance.componentDidMount === 'function') {
        workInProgress.effectTag |= Update;
      }
    }

    function resumeMountClassInstance(workInProgress, ctor, newProps, renderExpirationTime) {
      var instance = workInProgress.stateNode;
      var oldProps = workInProgress.memoizedProps;
      instance.props = oldProps;
      var oldContext = instance.context;
      var contextType = ctor.contextType;
      var nextContext = emptyContextObject;

      if (typeof contextType === 'object' && contextType !== null) {
        nextContext = readContext(contextType);
      } else if (!disableLegacyContext) {
        var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
        nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
      }

      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
      var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
      // ever the previously attempted to render - not the "current". However,
      // during componentDidUpdate we pass the "current" props.
      // In order to support react-lifecycles-compat polyfilled components,
      // Unsafe lifecycles should not be invoked for components using the new APIs.

      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
        if (oldProps !== newProps || oldContext !== nextContext) {
          callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
        }
      }

      resetHasForceUpdateBeforeProcessing();
      var oldState = workInProgress.memoizedState;
      var newState = instance.state = oldState;
      var updateQueue = workInProgress.updateQueue;

      if (updateQueue !== null) {
        processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
        newState = workInProgress.memoizedState;
      }

      if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
        // If an update was already in progress, we should schedule an Update
        // effect even though we're bailing out, so that cWU/cDU are called.
        if (typeof instance.componentDidMount === 'function') {
          workInProgress.effectTag |= Update;
        }

        return false;
      }

      if (typeof getDerivedStateFromProps === 'function') {
        applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
        newState = workInProgress.memoizedState;
      }

      var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

      if (shouldUpdate) {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for components using the new APIs.
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
          startPhaseTimer(workInProgress, 'componentWillMount');

          if (typeof instance.componentWillMount === 'function') {
            instance.componentWillMount();
          }

          if (typeof instance.UNSAFE_componentWillMount === 'function') {
            instance.UNSAFE_componentWillMount();
          }

          stopPhaseTimer();
        }

        if (typeof instance.componentDidMount === 'function') {
          workInProgress.effectTag |= Update;
        }
      } else {
        // If an update was already in progress, we should schedule an Update
        // effect even though we're bailing out, so that cWU/cDU are called.
        if (typeof instance.componentDidMount === 'function') {
          workInProgress.effectTag |= Update;
        } // If shouldComponentUpdate returned false, we should still update the
        // memoized state to indicate that this work can be reused.


        workInProgress.memoizedProps = newProps;
        workInProgress.memoizedState = newState;
      } // Update the existing instance's state, props, and context pointers even
      // if shouldComponentUpdate returns false.


      instance.props = newProps;
      instance.state = newState;
      instance.context = nextContext;
      return shouldUpdate;
    } // Invokes the update life-cycles and returns false if it shouldn't rerender.


    function updateClassInstance(current, workInProgress, ctor, newProps, renderExpirationTime) {
      var instance = workInProgress.stateNode;
      var oldProps = workInProgress.memoizedProps;
      instance.props = workInProgress.type === workInProgress.elementType ? oldProps : resolveDefaultProps(workInProgress.type, oldProps);
      var oldContext = instance.context;
      var contextType = ctor.contextType;
      var nextContext = emptyContextObject;

      if (typeof contextType === 'object' && contextType !== null) {
        nextContext = readContext(contextType);
      } else if (!disableLegacyContext) {
        var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
        nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
      }

      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
      var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
      // ever the previously attempted to render - not the "current". However,
      // during componentDidUpdate we pass the "current" props.
      // In order to support react-lifecycles-compat polyfilled components,
      // Unsafe lifecycles should not be invoked for components using the new APIs.

      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
        if (oldProps !== newProps || oldContext !== nextContext) {
          callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
        }
      }

      resetHasForceUpdateBeforeProcessing();
      var oldState = workInProgress.memoizedState;
      var newState = instance.state = oldState;
      var updateQueue = workInProgress.updateQueue;

      if (updateQueue !== null) {
        processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
        newState = workInProgress.memoizedState;
      }

      if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
        // If an update was already in progress, we should schedule an Update
        // effect even though we're bailing out, so that cWU/cDU are called.
        if (typeof instance.componentDidUpdate === 'function') {
          if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
            workInProgress.effectTag |= Update;
          }
        }

        if (typeof instance.getSnapshotBeforeUpdate === 'function') {
          if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
            workInProgress.effectTag |= Snapshot;
          }
        }

        return false;
      }

      if (typeof getDerivedStateFromProps === 'function') {
        applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
        newState = workInProgress.memoizedState;
      }

      var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

      if (shouldUpdate) {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for components using the new APIs.
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
          startPhaseTimer(workInProgress, 'componentWillUpdate');

          if (typeof instance.componentWillUpdate === 'function') {
            instance.componentWillUpdate(newProps, newState, nextContext);
          }

          if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
            instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
          }

          stopPhaseTimer();
        }

        if (typeof instance.componentDidUpdate === 'function') {
          workInProgress.effectTag |= Update;
        }

        if (typeof instance.getSnapshotBeforeUpdate === 'function') {
          workInProgress.effectTag |= Snapshot;
        }
      } else {
        // If an update was already in progress, we should schedule an Update
        // effect even though we're bailing out, so that cWU/cDU are called.
        if (typeof instance.componentDidUpdate === 'function') {
          if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
            workInProgress.effectTag |= Update;
          }
        }

        if (typeof instance.getSnapshotBeforeUpdate === 'function') {
          if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
            workInProgress.effectTag |= Snapshot;
          }
        } // If shouldComponentUpdate returned false, we should still update the
        // memoized props/state to indicate that this work can be reused.


        workInProgress.memoizedProps = newProps;
        workInProgress.memoizedState = newState;
      } // Update the existing instance's state, props, and context pointers even
      // if shouldComponentUpdate returns false.


      instance.props = newProps;
      instance.state = newState;
      instance.context = nextContext;
      return shouldUpdate;
    }

    var didWarnAboutMaps = void 0;
    var didWarnAboutGenerators = void 0;
    var didWarnAboutStringRefInStrictMode = void 0;
    var ownerHasKeyUseWarning = void 0;
    var ownerHasFunctionTypeWarning = void 0;

    var warnForMissingKey = function (child) {};

    {
      didWarnAboutMaps = false;
      didWarnAboutGenerators = false;
      didWarnAboutStringRefInStrictMode = {};
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      ownerHasKeyUseWarning = {};
      ownerHasFunctionTypeWarning = {};

      warnForMissingKey = function (child) {
        if (child === null || typeof child !== 'object') {
          return;
        }

        if (!child._store || child._store.validated || child.key != null) {
          return;
        }

        (function () {
          if (!(typeof child._store === 'object')) {
            {
              throw ReactError(Error('React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();

        child._store.validated = true;
        var currentComponentErrorInfo = 'Each child in a list should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + getCurrentFiberStackInDev();

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
        warning$1(false, 'Each child in a list should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.');
      };
    }
    var isArray = Array.isArray;

    function coerceRef(returnFiber, current$$1, element) {
      var mixedRef = element.ref;

      if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
        {
          if (returnFiber.mode & StrictMode) {
            var componentName = getComponentName(returnFiber.type) || 'Component';

            if (!didWarnAboutStringRefInStrictMode[componentName]) {
              warningWithoutStack$1(false, 'A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using createRef() instead.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-string-ref', mixedRef, getStackByFiberInDevAndProd(returnFiber));
              didWarnAboutStringRefInStrictMode[componentName] = true;
            }
          }
        }

        if (element._owner) {
          var owner = element._owner;
          var inst = void 0;

          if (owner) {
            var ownerFiber = owner;

            (function () {
              if (!(ownerFiber.tag === ClassComponent)) {
                {
                  throw ReactError(Error('Function components cannot have refs. Did you mean to use React.forwardRef()?'));
                }
              }
            })();

            inst = ownerFiber.stateNode;
          }

          (function () {
            if (!inst) {
              {
                throw ReactError(Error('Missing owner for string ref ' + mixedRef + '. This error is likely caused by a bug in React. Please file an issue.'));
              }
            }
          })();

          var stringRef = '' + mixedRef; // Check if previous string ref matches new string ref

          if (current$$1 !== null && current$$1.ref !== null && typeof current$$1.ref === 'function' && current$$1.ref._stringRef === stringRef) {
            return current$$1.ref;
          }

          var ref = function (value) {
            var refs = inst.refs;

            if (refs === emptyRefsObject) {
              // This is a lazy pooled frozen object, so we need to initialize.
              refs = inst.refs = {};
            }

            if (value === null) {
              delete refs[stringRef];
            } else {
              refs[stringRef] = value;
            }
          };

          ref._stringRef = stringRef;
          return ref;
        } else {
          (function () {
            if (!(typeof mixedRef === 'string')) {
              {
                throw ReactError(Error('Expected ref to be a function, a string, an object returned by React.createRef(), or null.'));
              }
            }
          })();

          (function () {
            if (!element._owner) {
              {
                throw ReactError(Error('Element ref was specified as a string (' + mixedRef + ') but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component\'s render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.'));
              }
            }
          })();
        }
      }

      return mixedRef;
    }

    function throwOnInvalidObjectType(returnFiber, newChild) {
      if (returnFiber.type !== 'textarea') {
        var addendum = '';
        {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + getCurrentFiberStackInDev();
        }

        (function () {
          {
            {
              throw ReactError(Error('Objects are not valid as a React child (found: ' + (Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild) + ').' + addendum));
            }
          }
        })();
      }
    }

    function warnOnFunctionType() {
      var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + getCurrentFiberStackInDev();

      if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;
      warning$1(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
    } // This wrapper function exists because I expect to clone the code in each path
    // to be able to optimize each path individually by branching early. This needs
    // a compiler or we can do it manually. Helpers that don't need this branching
    // live outside of this function.


    function ChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (!shouldTrackSideEffects) {
          // Noop.
          return;
        } // Deletions are added in reversed order so we add it to the front.
        // At this point, the return fiber's effect list is empty except for
        // deletions, so we can just append the deletion to the list. The remaining
        // effects aren't added until the complete phase. Once we implement
        // resuming, this may not be true.


        var last = returnFiber.lastEffect;

        if (last !== null) {
          last.nextEffect = childToDelete;
          returnFiber.lastEffect = childToDelete;
        } else {
          returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
        }

        childToDelete.nextEffect = null;
        childToDelete.effectTag = Deletion;
      }

      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) {
          // Noop.
          return null;
        } // TODO: For the shouldClone case, this could be micro-optimized a bit by
        // assuming that after the first child we've already added everything.


        var childToDelete = currentFirstChild;

        while (childToDelete !== null) {
          deleteChild(returnFiber, childToDelete);
          childToDelete = childToDelete.sibling;
        }

        return null;
      }

      function mapRemainingChildren(returnFiber, currentFirstChild) {
        // Add the remaining children to a temporary map so that we can find them by
        // keys quickly. Implicit (null) keys get added to this set with their index
        var existingChildren = new Map();
        var existingChild = currentFirstChild;

        while (existingChild !== null) {
          if (existingChild.key !== null) {
            existingChildren.set(existingChild.key, existingChild);
          } else {
            existingChildren.set(existingChild.index, existingChild);
          }

          existingChild = existingChild.sibling;
        }

        return existingChildren;
      }

      function useFiber(fiber, pendingProps, expirationTime) {
        // We currently set sibling to null and index to 0 here because it is easy
        // to forget to do before returning it. E.g. for the single child case.
        var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
        clone.index = 0;
        clone.sibling = null;
        return clone;
      }

      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;

        if (!shouldTrackSideEffects) {
          // Noop.
          return lastPlacedIndex;
        }

        var current$$1 = newFiber.alternate;

        if (current$$1 !== null) {
          var oldIndex = current$$1.index;

          if (oldIndex < lastPlacedIndex) {
            // This is a move.
            newFiber.effectTag = Placement;
            return lastPlacedIndex;
          } else {
            // This item can stay in place.
            return oldIndex;
          }
        } else {
          // This is an insertion.
          newFiber.effectTag = Placement;
          return lastPlacedIndex;
        }
      }

      function placeSingleChild(newFiber) {
        // This is simpler for the single child case. We only need to do a
        // placement for inserting new children.
        if (shouldTrackSideEffects && newFiber.alternate === null) {
          newFiber.effectTag = Placement;
        }

        return newFiber;
      }

      function updateTextNode(returnFiber, current$$1, textContent, expirationTime) {
        if (current$$1 === null || current$$1.tag !== HostText) {
          // Insert
          var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        } else {
          // Update
          var existing = useFiber(current$$1, textContent, expirationTime);
          existing.return = returnFiber;
          return existing;
        }
      }

      function updateElement(returnFiber, current$$1, element, expirationTime) {
        if (current$$1 !== null && (current$$1.elementType === element.type || // Keep this check inline so it only runs on the false path:
        isCompatibleFamilyForHotReloading(current$$1, element))) {
          // Move based on index
          var existing = useFiber(current$$1, element.props, expirationTime);
          existing.ref = coerceRef(returnFiber, current$$1, element);
          existing.return = returnFiber;
          {
            existing._debugSource = element._source;
            existing._debugOwner = element._owner;
          }
          return existing;
        } else {
          // Insert
          var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
          created.ref = coerceRef(returnFiber, current$$1, element);
          created.return = returnFiber;
          return created;
        }
      }

      function updatePortal(returnFiber, current$$1, portal, expirationTime) {
        if (current$$1 === null || current$$1.tag !== HostPortal || current$$1.stateNode.containerInfo !== portal.containerInfo || current$$1.stateNode.implementation !== portal.implementation) {
          // Insert
          var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        } else {
          // Update
          var existing = useFiber(current$$1, portal.children || [], expirationTime);
          existing.return = returnFiber;
          return existing;
        }
      }

      function updateFragment(returnFiber, current$$1, fragment, expirationTime, key) {
        if (current$$1 === null || current$$1.tag !== Fragment) {
          // Insert
          var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
          created.return = returnFiber;
          return created;
        } else {
          // Update
          var existing = useFiber(current$$1, fragment, expirationTime);
          existing.return = returnFiber;
          return existing;
        }
      }

      function createChild(returnFiber, newChild, expirationTime) {
        if (typeof newChild === 'string' || typeof newChild === 'number') {
          // Text nodes don't have keys. If the previous node is implicitly keyed
          // we can continue to replace it without aborting even if it is not a text
          // node.
          var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        }

        if (typeof newChild === 'object' && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              {
                var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);

                _created.ref = coerceRef(returnFiber, null, newChild);
                _created.return = returnFiber;
                return _created;
              }

            case REACT_PORTAL_TYPE:
              {
                var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);

                _created2.return = returnFiber;
                return _created2;
              }
          }

          if (isArray(newChild) || getIteratorFn(newChild)) {
            var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);

            _created3.return = returnFiber;
            return _created3;
          }

          throwOnInvalidObjectType(returnFiber, newChild);
        }

        {
          if (typeof newChild === 'function') {
            warnOnFunctionType();
          }
        }
        return null;
      }

      function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
        // Update the fiber if the keys match, otherwise return null.
        var key = oldFiber !== null ? oldFiber.key : null;

        if (typeof newChild === 'string' || typeof newChild === 'number') {
          // Text nodes don't have keys. If the previous node is implicitly keyed
          // we can continue to replace it without aborting even if it is not a text
          // node.
          if (key !== null) {
            return null;
          }

          return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
        }

        if (typeof newChild === 'object' && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              {
                if (newChild.key === key) {
                  if (newChild.type === REACT_FRAGMENT_TYPE) {
                    return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
                  }

                  return updateElement(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }

            case REACT_PORTAL_TYPE:
              {
                if (newChild.key === key) {
                  return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }
          }

          if (isArray(newChild) || getIteratorFn(newChild)) {
            if (key !== null) {
              return null;
            }

            return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
          }

          throwOnInvalidObjectType(returnFiber, newChild);
        }

        {
          if (typeof newChild === 'function') {
            warnOnFunctionType();
          }
        }
        return null;
      }

      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
        if (typeof newChild === 'string' || typeof newChild === 'number') {
          // Text nodes don't have keys, so we neither have to check the old nor
          // new node for the key. If both are text nodes, they match.
          var matchedFiber = existingChildren.get(newIdx) || null;
          return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
        }

        if (typeof newChild === 'object' && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              {
                var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

                if (newChild.type === REACT_FRAGMENT_TYPE) {
                  return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
                }

                return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
              }

            case REACT_PORTAL_TYPE:
              {
                var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

                return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
              }
          }

          if (isArray(newChild) || getIteratorFn(newChild)) {
            var _matchedFiber3 = existingChildren.get(newIdx) || null;

            return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
          }

          throwOnInvalidObjectType(returnFiber, newChild);
        }

        {
          if (typeof newChild === 'function') {
            warnOnFunctionType();
          }
        }
        return null;
      }
      /**
       * Warns if there is a duplicate or missing key
       */


      function warnOnInvalidKey(child, knownKeys) {
        {
          if (typeof child !== 'object' || child === null) {
            return knownKeys;
          }

          switch (child.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              warnForMissingKey(child);
              var key = child.key;

              if (typeof key !== 'string') {
                break;
              }

              if (knownKeys === null) {
                knownKeys = new Set();
                knownKeys.add(key);
                break;
              }

              if (!knownKeys.has(key)) {
                knownKeys.add(key);
                break;
              }

              warning$1(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.', key);
              break;

            default:
              break;
          }
        }
        return knownKeys;
      }

      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
        // This algorithm can't optimize by searching from both ends since we
        // don't have backpointers on fibers. I'm trying to see how far we can get
        // with that model. If it ends up not being worth the tradeoffs, we can
        // add it later.
        // Even with a two ended optimization, we'd want to optimize for the case
        // where there are few changes and brute force the comparison instead of
        // going for the Map. It'd like to explore hitting that path first in
        // forward-only mode and only go for the Map once we notice that we need
        // lots of look ahead. This doesn't handle reversal as well as two ended
        // search but that's unusual. Besides, for the two ended optimization to
        // work on Iterables, we'd need to copy the whole set.
        // In this first iteration, we'll just live with hitting the bad case
        // (adding everything to a Map) in for every insert/move.
        // If you change this code, also update reconcileChildrenIterator() which
        // uses the same algorithm.
        {
          // First, validate keys.
          var knownKeys = null;

          for (var i = 0; i < newChildren.length; i++) {
            var child = newChildren[i];
            knownKeys = warnOnInvalidKey(child, knownKeys);
          }
        }
        var resultingFirstChild = null;
        var previousNewFiber = null;
        var oldFiber = currentFirstChild;
        var lastPlacedIndex = 0;
        var newIdx = 0;
        var nextOldFiber = null;

        for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
          if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
          } else {
            nextOldFiber = oldFiber.sibling;
          }

          var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);

          if (newFiber === null) {
            // TODO: This breaks on empty slots like null children. That's
            // unfortunate because it triggers the slow path all the time. We need
            // a better way to communicate whether this was a miss or null,
            // boolean, undefined, etc.
            if (oldFiber === null) {
              oldFiber = nextOldFiber;
            }

            break;
          }

          if (shouldTrackSideEffects) {
            if (oldFiber && newFiber.alternate === null) {
              // We matched the slot, but we didn't reuse the existing fiber, so we
              // need to delete the existing child.
              deleteChild(returnFiber, oldFiber);
            }
          }

          lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            // TODO: Move out of the loop. This only happens for the first run.
            resultingFirstChild = newFiber;
          } else {
            // TODO: Defer siblings if we're not at the right index for this slot.
            // I.e. if we had null values before, then we want to defer this
            // for each null value. However, we also don't want to call updateSlot
            // with the previous one.
            previousNewFiber.sibling = newFiber;
          }

          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }

        if (newIdx === newChildren.length) {
          // We've reached the end of the new children. We can delete the rest.
          deleteRemainingChildren(returnFiber, oldFiber);
          return resultingFirstChild;
        }

        if (oldFiber === null) {
          // If we don't have any more existing children we can choose a fast path
          // since the rest will all be insertions.
          for (; newIdx < newChildren.length; newIdx++) {
            var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);

            if (_newFiber === null) {
              continue;
            }

            lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              // TODO: Move out of the loop. This only happens for the first run.
              resultingFirstChild = _newFiber;
            } else {
              previousNewFiber.sibling = _newFiber;
            }

            previousNewFiber = _newFiber;
          }

          return resultingFirstChild;
        } // Add all children to a key map for quick lookups.


        var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

        for (; newIdx < newChildren.length; newIdx++) {
          var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);

          if (_newFiber2 !== null) {
            if (shouldTrackSideEffects) {
              if (_newFiber2.alternate !== null) {
                // The new fiber is a work in progress, but if there exists a
                // current, that means that we reused the fiber. We need to delete
                // it from the child list so that we don't add it to the deletion
                // list.
                existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
              }
            }

            lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber2;
            } else {
              previousNewFiber.sibling = _newFiber2;
            }

            previousNewFiber = _newFiber2;
          }
        }

        if (shouldTrackSideEffects) {
          // Any existing children that weren't consumed above were deleted. We need
          // to add them to the deletion list.
          existingChildren.forEach(function (child) {
            return deleteChild(returnFiber, child);
          });
        }

        return resultingFirstChild;
      }

      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
        // This is the same implementation as reconcileChildrenArray(),
        // but using the iterator instead.
        var iteratorFn = getIteratorFn(newChildrenIterable);

        (function () {
          if (!(typeof iteratorFn === 'function')) {
            {
              throw ReactError(Error('An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();

        {
          // We don't support rendering Generators because it's a mutation.
          // See https://github.com/facebook/react/issues/12995
          if (typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
          newChildrenIterable[Symbol.toStringTag] === 'Generator') {
            !didWarnAboutGenerators ? warning$1(false, 'Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.') : void 0;
            didWarnAboutGenerators = true;
          } // Warn about using Maps as children


          if (newChildrenIterable.entries === iteratorFn) {
            !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
            didWarnAboutMaps = true;
          } // First, validate keys.
          // We'll get a different iterator later for the main pass.


          var _newChildren = iteratorFn.call(newChildrenIterable);

          if (_newChildren) {
            var knownKeys = null;

            var _step = _newChildren.next();

            for (; !_step.done; _step = _newChildren.next()) {
              var child = _step.value;
              knownKeys = warnOnInvalidKey(child, knownKeys);
            }
          }
        }
        var newChildren = iteratorFn.call(newChildrenIterable);

        (function () {
          if (!(newChildren != null)) {
            {
              throw ReactError(Error('An iterable object provided no iterator.'));
            }
          }
        })();

        var resultingFirstChild = null;
        var previousNewFiber = null;
        var oldFiber = currentFirstChild;
        var lastPlacedIndex = 0;
        var newIdx = 0;
        var nextOldFiber = null;
        var step = newChildren.next();

        for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
          if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
          } else {
            nextOldFiber = oldFiber.sibling;
          }

          var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);

          if (newFiber === null) {
            // TODO: This breaks on empty slots like null children. That's
            // unfortunate because it triggers the slow path all the time. We need
            // a better way to communicate whether this was a miss or null,
            // boolean, undefined, etc.
            if (oldFiber === null) {
              oldFiber = nextOldFiber;
            }

            break;
          }

          if (shouldTrackSideEffects) {
            if (oldFiber && newFiber.alternate === null) {
              // We matched the slot, but we didn't reuse the existing fiber, so we
              // need to delete the existing child.
              deleteChild(returnFiber, oldFiber);
            }
          }

          lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

          if (previousNewFiber === null) {
            // TODO: Move out of the loop. This only happens for the first run.
            resultingFirstChild = newFiber;
          } else {
            // TODO: Defer siblings if we're not at the right index for this slot.
            // I.e. if we had null values before, then we want to defer this
            // for each null value. However, we also don't want to call updateSlot
            // with the previous one.
            previousNewFiber.sibling = newFiber;
          }

          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }

        if (step.done) {
          // We've reached the end of the new children. We can delete the rest.
          deleteRemainingChildren(returnFiber, oldFiber);
          return resultingFirstChild;
        }

        if (oldFiber === null) {
          // If we don't have any more existing children we can choose a fast path
          // since the rest will all be insertions.
          for (; !step.done; newIdx++, step = newChildren.next()) {
            var _newFiber3 = createChild(returnFiber, step.value, expirationTime);

            if (_newFiber3 === null) {
              continue;
            }

            lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              // TODO: Move out of the loop. This only happens for the first run.
              resultingFirstChild = _newFiber3;
            } else {
              previousNewFiber.sibling = _newFiber3;
            }

            previousNewFiber = _newFiber3;
          }

          return resultingFirstChild;
        } // Add all children to a key map for quick lookups.


        var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

        for (; !step.done; newIdx++, step = newChildren.next()) {
          var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);

          if (_newFiber4 !== null) {
            if (shouldTrackSideEffects) {
              if (_newFiber4.alternate !== null) {
                // The new fiber is a work in progress, but if there exists a
                // current, that means that we reused the fiber. We need to delete
                // it from the child list so that we don't add it to the deletion
                // list.
                existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
              }
            }

            lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber4;
            } else {
              previousNewFiber.sibling = _newFiber4;
            }

            previousNewFiber = _newFiber4;
          }
        }

        if (shouldTrackSideEffects) {
          // Any existing children that weren't consumed above were deleted. We need
          // to add them to the deletion list.
          existingChildren.forEach(function (child) {
            return deleteChild(returnFiber, child);
          });
        }

        return resultingFirstChild;
      }

      function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
        // There's no need to check for keys on text nodes since we don't have a
        // way to define them.
        if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
          // We already have an existing node so let's just update it and delete
          // the rest.
          deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
          var existing = useFiber(currentFirstChild, textContent, expirationTime);
          existing.return = returnFiber;
          return existing;
        } // The existing first child is not a text node so we need to create one
        // and delete the existing ones.


        deleteRemainingChildren(returnFiber, currentFirstChild);
        var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
        created.return = returnFiber;
        return created;
      }

      function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
        var key = element.key;
        var child = currentFirstChild;

        while (child !== null) {
          // TODO: If key === null and child.key === null, then this only applies to
          // the first item in the list.
          if (child.key === key) {
            if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.elementType === element.type || // Keep this check inline so it only runs on the false path:
            isCompatibleFamilyForHotReloading(child, element)) {
              deleteRemainingChildren(returnFiber, child.sibling);
              var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
              existing.ref = coerceRef(returnFiber, child, element);
              existing.return = returnFiber;
              {
                existing._debugSource = element._source;
                existing._debugOwner = element._owner;
              }
              return existing;
            } else {
              deleteRemainingChildren(returnFiber, child);
              break;
            }
          } else {
            deleteChild(returnFiber, child);
          }

          child = child.sibling;
        }

        if (element.type === REACT_FRAGMENT_TYPE) {
          var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
          created.return = returnFiber;
          return created;
        } else {
          var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);

          _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
          _created4.return = returnFiber;
          return _created4;
        }
      }

      function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
        var key = portal.key;
        var child = currentFirstChild;

        while (child !== null) {
          // TODO: If key === null and child.key === null, then this only applies to
          // the first item in the list.
          if (child.key === key) {
            if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
              deleteRemainingChildren(returnFiber, child.sibling);
              var existing = useFiber(child, portal.children || [], expirationTime);
              existing.return = returnFiber;
              return existing;
            } else {
              deleteRemainingChildren(returnFiber, child);
              break;
            }
          } else {
            deleteChild(returnFiber, child);
          }

          child = child.sibling;
        }

        var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
        created.return = returnFiber;
        return created;
      } // This API will tag the children with the side-effect of the reconciliation
      // itself. They will be added to the side-effect list as we pass through the
      // children and the parent.


      function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
        // This function is not recursive.
        // If the top level item is an array, we treat it as a set of children,
        // not as a fragment. Nested arrays on the other hand will be treated as
        // fragment nodes. Recursion happens at the normal flow.
        // Handle top level unkeyed fragments as if they were arrays.
        // This leads to an ambiguity between <>{[...]}</> and <>...</>.
        // We treat the ambiguous cases above the same.
        var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;

        if (isUnkeyedTopLevelFragment) {
          newChild = newChild.props.children;
        } // Handle object types


        var isObject = typeof newChild === 'object' && newChild !== null;

        if (isObject) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));

            case REACT_PORTAL_TYPE:
              return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
          }
        }

        if (typeof newChild === 'string' || typeof newChild === 'number') {
          return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
        }

        if (isArray(newChild)) {
          return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
        }

        if (getIteratorFn(newChild)) {
          return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
        }

        if (isObject) {
          throwOnInvalidObjectType(returnFiber, newChild);
        }

        {
          if (typeof newChild === 'function') {
            warnOnFunctionType();
          }
        }

        if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
          // If the new child is undefined, and the return fiber is a composite
          // component, throw an error. If Fiber return types are disabled,
          // we already threw above.
          switch (returnFiber.tag) {
            case ClassComponent:
              {
                {
                  var instance = returnFiber.stateNode;

                  if (instance.render._isMockFunction) {
                    // We allow auto-mocks to proceed as if they're returning null.
                    break;
                  }
                }
              }
            // Intentionally fall through to the next case, which handles both
            // functions and classes
            // eslint-disable-next-lined no-fallthrough

            case FunctionComponent:
              {
                var Component = returnFiber.type;

                (function () {
                  {
                    {
                      throw ReactError(Error((Component.displayName || Component.name || 'Component') + '(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'));
                    }
                  }
                })();
              }
          }
        } // Remaining cases are all treated as empty.


        return deleteRemainingChildren(returnFiber, currentFirstChild);
      }

      return reconcileChildFibers;
    }

    var reconcileChildFibers = ChildReconciler(true);
    var mountChildFibers = ChildReconciler(false);

    function cloneChildFibers(current$$1, workInProgress) {
      (function () {
        if (!(current$$1 === null || workInProgress.child === current$$1.child)) {
          {
            throw ReactError(Error('Resuming work not yet implemented.'));
          }
        }
      })();

      if (workInProgress.child === null) {
        return;
      }

      var currentChild = workInProgress.child;
      var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
      workInProgress.child = newChild;
      newChild.return = workInProgress;

      while (currentChild.sibling !== null) {
        currentChild = currentChild.sibling;
        newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
        newChild.return = workInProgress;
      }

      newChild.sibling = null;
    } // Reset a workInProgress child set to prepare it for a second pass.


    function resetChildFibers(workInProgress, renderExpirationTime) {
      var child = workInProgress.child;

      while (child !== null) {
        resetWorkInProgress(child, renderExpirationTime);
        child = child.sibling;
      }
    }

    var NO_CONTEXT = {};
    var contextStackCursor$1 = createCursor(NO_CONTEXT);
    var contextFiberStackCursor = createCursor(NO_CONTEXT);
    var rootInstanceStackCursor = createCursor(NO_CONTEXT);

    function requiredContext(c) {
      (function () {
        if (!(c !== NO_CONTEXT)) {
          {
            throw ReactError(Error('Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })();

      return c;
    }

    function getRootHostContainer() {
      var rootInstance = requiredContext(rootInstanceStackCursor.current);
      return rootInstance;
    }

    function pushHostContainer(fiber, nextRootInstance) {
      // Push current root instance onto the stack;
      // This allows us to reset root when portals are popped.
      push(rootInstanceStackCursor, nextRootInstance, fiber); // Track the context and the Fiber that provided it.
      // This enables us to pop only Fibers that provide unique contexts.

      push(contextFiberStackCursor, fiber, fiber); // Finally, we need to push the host context to the stack.
      // However, we can't just call getRootHostContext() and push it because
      // we'd have a different number of entries on the stack depending on
      // whether getRootHostContext() throws somewhere in renderer code or not.
      // So we push an empty value first. This lets us safely unwind on errors.

      push(contextStackCursor$1, NO_CONTEXT, fiber);
      var nextRootContext = getRootHostContext(nextRootInstance); // Now that we know this function doesn't throw, replace it.

      pop(contextStackCursor$1, fiber);
      push(contextStackCursor$1, nextRootContext, fiber);
    }

    function popHostContainer(fiber) {
      pop(contextStackCursor$1, fiber);
      pop(contextFiberStackCursor, fiber);
      pop(rootInstanceStackCursor, fiber);
    }

    function getHostContext() {
      var context = requiredContext(contextStackCursor$1.current);
      return context;
    }

    function pushHostContext(fiber) {
      var rootInstance = requiredContext(rootInstanceStackCursor.current);
      var context = requiredContext(contextStackCursor$1.current);
      var nextContext = getChildHostContext(context, fiber.type, rootInstance); // Don't push this Fiber's context unless it's unique.

      if (context === nextContext) {
        return;
      } // Track the context and the Fiber that provided it.
      // This enables us to pop only Fibers that provide unique contexts.


      push(contextFiberStackCursor, fiber, fiber);
      push(contextStackCursor$1, nextContext, fiber);
    }

    function popHostContext(fiber) {
      // Do not pop unless this Fiber provided the current context.
      // pushHostContext() only pushes Fibers that provide unique contexts.
      if (contextFiberStackCursor.current !== fiber) {
        return;
      }

      pop(contextStackCursor$1, fiber);
      pop(contextFiberStackCursor, fiber);
    }

    var DefaultSuspenseContext = 0; // The Suspense Context is split into two parts. The lower bits is
    // inherited deeply down the subtree. The upper bits only affect
    // this immediate suspense boundary and gets reset each new
    // boundary or suspense list.

    var SubtreeSuspenseContextMask = 1; // Subtree Flags:
    // InvisibleParentSuspenseContext indicates that one of our parent Suspense
    // boundaries is not currently showing visible main content.
    // Either because it is already showing a fallback or is not mounted at all.
    // We can use this to determine if it is desirable to trigger a fallback at
    // the parent. If not, then we might need to trigger undesirable boundaries
    // and/or suspend the commit to avoid hiding the parent content.

    var InvisibleParentSuspenseContext = 1; // Shallow Flags:
    // ForceSuspenseFallback can be used by SuspenseList to force newly added
    // items into their fallback state during one of the render passes.

    var ForceSuspenseFallback = 2;
    var suspenseStackCursor = createCursor(DefaultSuspenseContext);

    function hasSuspenseContext(parentContext, flag) {
      return (parentContext & flag) !== 0;
    }

    function setDefaultShallowSuspenseContext(parentContext) {
      return parentContext & SubtreeSuspenseContextMask;
    }

    function setShallowSuspenseContext(parentContext, shallowContext) {
      return parentContext & SubtreeSuspenseContextMask | shallowContext;
    }

    function addSubtreeSuspenseContext(parentContext, subtreeContext) {
      return parentContext | subtreeContext;
    }

    function pushSuspenseContext(fiber, newContext) {
      push(suspenseStackCursor, newContext, fiber);
    }

    function popSuspenseContext(fiber) {
      pop(suspenseStackCursor, fiber);
    } // TODO: This is now an empty object. Should we switch this to a boolean?
    // Alternatively we can make this use an effect tag similar to SuspenseList.


    function shouldCaptureSuspense(workInProgress, hasInvisibleParent) {
      // If it was the primary children that just suspended, capture and render the
      var nextState = workInProgress.memoizedState;

      if (nextState !== null) {
        return false;
      }

      var props = workInProgress.memoizedProps; // In order to capture, the Suspense component must have a fallback prop.

      if (props.fallback === undefined) {
        return false;
      } // Regular boundaries always capture.


      if (props.unstable_avoidThisFallback !== true) {
        return true;
      } // If it's a boundary we should avoid, then we prefer to bubble up to the
      // parent boundary if it is currently invisible.


      if (hasInvisibleParent) {
        return false;
      } // If the parent is not able to handle it, we must handle it.


      return true;
    }

    function findFirstSuspended(row) {
      var node = row;

      while (node !== null) {
        if (node.tag === SuspenseComponent) {
          var state = node.memoizedState;

          if (state !== null) {
            return node;
          }
        } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        node.memoizedProps.revealOrder !== undefined) {
          var didSuspend = (node.effectTag & DidCapture) !== NoEffect;

          if (didSuspend) {
            return node;
          }
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === row) {
          return null;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === row) {
            return null;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }

      return null;
    }

    function createResponderListener(responder, props) {
      var eventResponderListener = {
        responder: responder,
        props: props
      };
      {
        Object.freeze(eventResponderListener);
      }
      return eventResponderListener;
    }

    function createResponderInstance(responder, responderProps, responderState, target, fiber) {
      return {
        fiber: fiber,
        props: responderProps,
        responder: responder,
        rootEventTypes: null,
        state: responderState,
        target: target
      };
    }

    var NoEffect$1 =
    /*             */
    0;
    var UnmountSnapshot =
    /*      */
    2;
    var UnmountMutation =
    /*      */
    4;
    var MountMutation =
    /*        */
    8;
    var UnmountLayout =
    /*        */
    16;
    var MountLayout =
    /*          */
    32;
    var MountPassive =
    /*         */
    64;
    var UnmountPassive =
    /*       */
    128;
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var didWarnAboutMismatchedHooksForComponent = void 0;
    {
      didWarnAboutMismatchedHooksForComponent = new Set();
    } // These are set right before calling the component.

    var renderExpirationTime$1 = NoWork; // The work-in-progress fiber. I've named it differently to distinguish it from
    // the work-in-progress hook.

    var currentlyRenderingFiber$1 = null; // Hooks are stored as a linked list on the fiber's memoizedState field. The
    // current hook list is the list that belongs to the current fiber. The
    // work-in-progress hook list is a new list that will be added to the
    // work-in-progress fiber.

    var currentHook = null;
    var nextCurrentHook = null;
    var firstWorkInProgressHook = null;
    var workInProgressHook = null;
    var nextWorkInProgressHook = null;
    var remainingExpirationTime = NoWork;
    var componentUpdateQueue = null;
    var sideEffectTag = 0; // Updates scheduled during render will trigger an immediate re-render at the
    // end of the current pass. We can't store these updates on the normal queue,
    // because if the work is aborted, they should be discarded. Because this is
    // a relatively rare case, we also don't want to add an additional field to
    // either the hook or queue object types. So we store them in a lazily create
    // map of queue -> render-phase updates, which are discarded once the component
    // completes without re-rendering.
    // Whether an update was scheduled during the currently executing render pass.

    var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

    var renderPhaseUpdates = null; // Counter to prevent infinite loops.

    var numberOfReRenders = 0;
    var RE_RENDER_LIMIT = 25; // In DEV, this is the name of the currently executing primitive hook

    var currentHookNameInDev = null; // In DEV, this list ensures that hooks are called in the same order between renders.
    // The list stores the order of hooks used during the initial render (mount).
    // Subsequent renders (updates) reference this list.

    var hookTypesDev = null;
    var hookTypesUpdateIndexDev = -1; // In DEV, this tracks whether currently rendering component needs to ignore
    // the dependencies for Hooks that need them (e.g. useEffect or useMemo).
    // When true, such Hooks will always be "remounted". Only used during hot reload.

    var ignorePreviousDependencies = false;

    function mountHookTypesDev() {
      {
        var hookName = currentHookNameInDev;

        if (hookTypesDev === null) {
          hookTypesDev = [hookName];
        } else {
          hookTypesDev.push(hookName);
        }
      }
    }

    function updateHookTypesDev() {
      {
        var hookName = currentHookNameInDev;

        if (hookTypesDev !== null) {
          hookTypesUpdateIndexDev++;

          if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
            warnOnHookMismatchInDev(hookName);
          }
        }
      }
    }

    function checkDepsAreArrayDev(deps) {
      {
        if (deps !== undefined && deps !== null && !Array.isArray(deps)) {
          // Verify deps, but only on mount to avoid extra checks.
          // It's unlikely their type would change as usually you define them inline.
          warning$1(false, '%s received a final argument that is not an array (instead, received `%s`). When ' + 'specified, the final argument must be an array.', currentHookNameInDev, typeof deps);
        }
      }
    }

    function warnOnHookMismatchInDev(currentHookName) {
      {
        var componentName = getComponentName(currentlyRenderingFiber$1.type);

        if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
          didWarnAboutMismatchedHooksForComponent.add(componentName);

          if (hookTypesDev !== null) {
            var table = '';
            var secondColumnStart = 30;

            for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
              var oldHookName = hookTypesDev[i];
              var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
              var row = i + 1 + '. ' + oldHookName; // Extra space so second column lines up
              // lol @ IE not supporting String#repeat

              while (row.length < secondColumnStart) {
                row += ' ';
              }

              row += newHookName + '\n';
              table += row;
            }

            warning$1(false, 'React has detected a change in the order of Hooks called by %s. ' + 'This will lead to bugs and errors if not fixed. ' + 'For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n' + '   Previous render            Next render\n' + '   ------------------------------------------------------\n' + '%s' + '   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n', componentName, table);
          }
        }
      }
    }

    function throwInvalidHookError() {
      (function () {
        {
          {
            throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
          }
        }
      })();
    }

    function areHookInputsEqual(nextDeps, prevDeps) {
      {
        if (ignorePreviousDependencies) {
          // Only true when this component is being hot reloaded.
          return false;
        }
      }

      if (prevDeps === null) {
        {
          warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
        }
        return false;
      }

      {
        // Don't bother comparing lengths in prod because these arrays should be
        // passed inline.
        if (nextDeps.length !== prevDeps.length) {
          warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, '[' + prevDeps.join(', ') + ']', '[' + nextDeps.join(', ') + ']');
        }
      }

      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
        if (is(nextDeps[i], prevDeps[i])) {
          continue;
        }

        return false;
      }

      return true;
    }

    function renderWithHooks(current, workInProgress, Component, props, refOrContext, nextRenderExpirationTime) {
      renderExpirationTime$1 = nextRenderExpirationTime;
      currentlyRenderingFiber$1 = workInProgress;
      nextCurrentHook = current !== null ? current.memoizedState : null;
      {
        hookTypesDev = current !== null ? current._debugHookTypes : null;
        hookTypesUpdateIndexDev = -1; // Used for hot reloading:

        ignorePreviousDependencies = current !== null && current.type !== workInProgress.type;
      } // The following should have already been reset
      // currentHook = null;
      // workInProgressHook = null;
      // remainingExpirationTime = NoWork;
      // componentUpdateQueue = null;
      // didScheduleRenderPhaseUpdate = false;
      // renderPhaseUpdates = null;
      // numberOfReRenders = 0;
      // sideEffectTag = 0;
      // TODO Warn if no hooks are used at all during mount, then some are used during update.
      // Currently we will identify the update render as a mount because nextCurrentHook === null.
      // This is tricky because it's valid for certain types of components (e.g. React.lazy)
      // Using nextCurrentHook to differentiate between mount/update only works if at least one stateful hook is used.
      // Non-stateful hooks (e.g. context) don't get added to memoizedState,
      // so nextCurrentHook would be null during updates and mounts.

      {
        if (nextCurrentHook !== null) {
          ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
        } else if (hookTypesDev !== null) {
          // This dispatcher handles an edge case where a component is updating,
          // but no stateful hooks have been used.
          // We want to match the production code behavior (which will use HooksDispatcherOnMount),
          // but with the extra DEV validation to ensure hooks ordering hasn't changed.
          // This dispatcher does that.
          ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
        } else {
          ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
        }
      }
      var children = Component(props, refOrContext);

      if (didScheduleRenderPhaseUpdate) {
        do {
          didScheduleRenderPhaseUpdate = false;
          numberOfReRenders += 1; // Start over from the beginning of the list

          nextCurrentHook = current !== null ? current.memoizedState : null;
          nextWorkInProgressHook = firstWorkInProgressHook;
          currentHook = null;
          workInProgressHook = null;
          componentUpdateQueue = null;
          {
            // Also validate hook order for cascading updates.
            hookTypesUpdateIndexDev = -1;
          }
          ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
          children = Component(props, refOrContext);
        } while (didScheduleRenderPhaseUpdate);

        renderPhaseUpdates = null;
        numberOfReRenders = 0;
      } // We can assume the previous dispatcher is always this one, since we set it
      // at the beginning of the render phase and there's no re-entrancy.


      ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
      var renderedWork = currentlyRenderingFiber$1;
      renderedWork.memoizedState = firstWorkInProgressHook;
      renderedWork.expirationTime = remainingExpirationTime;
      renderedWork.updateQueue = componentUpdateQueue;
      renderedWork.effectTag |= sideEffectTag;
      {
        renderedWork._debugHookTypes = hookTypesDev;
      } // This check uses currentHook so that it works the same in DEV and prod bundles.
      // hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.

      var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
      renderExpirationTime$1 = NoWork;
      currentlyRenderingFiber$1 = null;
      currentHook = null;
      nextCurrentHook = null;
      firstWorkInProgressHook = null;
      workInProgressHook = null;
      nextWorkInProgressHook = null;
      {
        currentHookNameInDev = null;
        hookTypesDev = null;
        hookTypesUpdateIndexDev = -1;
      }
      remainingExpirationTime = NoWork;
      componentUpdateQueue = null;
      sideEffectTag = 0; // These were reset above
      // didScheduleRenderPhaseUpdate = false;
      // renderPhaseUpdates = null;
      // numberOfReRenders = 0;

      (function () {
        if (!!didRenderTooFewHooks) {
          {
            throw ReactError(Error('Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'));
          }
        }
      })();

      return children;
    }

    function bailoutHooks(current, workInProgress, expirationTime) {
      workInProgress.updateQueue = current.updateQueue;
      workInProgress.effectTag &= ~(Passive | Update);

      if (current.expirationTime <= expirationTime) {
        current.expirationTime = NoWork;
      }
    }

    function resetHooks() {
      // We can assume the previous dispatcher is always this one, since we set it
      // at the beginning of the render phase and there's no re-entrancy.
      ReactCurrentDispatcher$1.current = ContextOnlyDispatcher; // This is used to reset the state of this module when a component throws.
      // It's also called inside mountIndeterminateComponent if we determine the
      // component is a module-style component.

      renderExpirationTime$1 = NoWork;
      currentlyRenderingFiber$1 = null;
      currentHook = null;
      nextCurrentHook = null;
      firstWorkInProgressHook = null;
      workInProgressHook = null;
      nextWorkInProgressHook = null;
      {
        hookTypesDev = null;
        hookTypesUpdateIndexDev = -1;
        currentHookNameInDev = null;
      }
      remainingExpirationTime = NoWork;
      componentUpdateQueue = null;
      sideEffectTag = 0;
      didScheduleRenderPhaseUpdate = false;
      renderPhaseUpdates = null;
      numberOfReRenders = 0;
    }

    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      };

      if (workInProgressHook === null) {
        // This is the first hook in the list
        firstWorkInProgressHook = workInProgressHook = hook;
      } else {
        // Append to the end of the list
        workInProgressHook = workInProgressHook.next = hook;
      }

      return workInProgressHook;
    }

    function updateWorkInProgressHook() {
      // This function is used both for updates and for re-renders triggered by a
      // render phase update. It assumes there is either a current hook we can
      // clone, or a work-in-progress hook from a previous render pass that we can
      // use as a base. When we reach the end of the base list, we must switch to
      // the dispatcher used for mounts.
      if (nextWorkInProgressHook !== null) {
        // There's already a work-in-progress. Reuse it.
        workInProgressHook = nextWorkInProgressHook;
        nextWorkInProgressHook = workInProgressHook.next;
        currentHook = nextCurrentHook;
        nextCurrentHook = currentHook !== null ? currentHook.next : null;
      } else {
        // Clone from the current hook.
        (function () {
          if (!(nextCurrentHook !== null)) {
            {
              throw ReactError(Error('Rendered more hooks than during the previous render.'));
            }
          }
        })();

        currentHook = nextCurrentHook;
        var newHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          queue: currentHook.queue,
          baseUpdate: currentHook.baseUpdate,
          next: null
        };

        if (workInProgressHook === null) {
          // This is the first hook in the list.
          workInProgressHook = firstWorkInProgressHook = newHook;
        } else {
          // Append to the end of the list.
          workInProgressHook = workInProgressHook.next = newHook;
        }

        nextCurrentHook = currentHook.next;
      }

      return workInProgressHook;
    }

    function createFunctionComponentUpdateQueue() {
      return {
        lastEffect: null
      };
    }

    function basicStateReducer(state, action) {
      return typeof action === 'function' ? action(state) : action;
    }

    function mountReducer(reducer, initialArg, init) {
      var hook = mountWorkInProgressHook();
      var initialState = void 0;

      if (init !== undefined) {
        initialState = init(initialArg);
      } else {
        initialState = initialArg;
      }

      hook.memoizedState = hook.baseState = initialState;
      var queue = hook.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: reducer,
        lastRenderedState: initialState
      };
      var dispatch = queue.dispatch = dispatchAction.bind(null, // Flow doesn't know this is non-null, but we do.
      currentlyRenderingFiber$1, queue);
      return [hook.memoizedState, dispatch];
    }

    function updateReducer(reducer, initialArg, init) {
      var hook = updateWorkInProgressHook();
      var queue = hook.queue;

      (function () {
        if (!(queue !== null)) {
          {
            throw ReactError(Error('Should have a queue. This is likely a bug in React. Please file an issue.'));
          }
        }
      })();

      queue.lastRenderedReducer = reducer;

      if (numberOfReRenders > 0) {
        // This is a re-render. Apply the new render phase updates to the previous
        var _dispatch = queue.dispatch;

        if (renderPhaseUpdates !== null) {
          // Render phase updates are stored in a map of queue -> linked list
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

          if (firstRenderPhaseUpdate !== undefined) {
            renderPhaseUpdates.delete(queue);
            var newState = hook.memoizedState;
            var update = firstRenderPhaseUpdate;

            do {
              // Process this render phase update. We don't have to check the
              // priority because it will always be the same as the current
              // render's.
              var _action = update.action;
              newState = reducer(newState, _action);
              update = update.next;
            } while (update !== null); // Mark that the fiber performed work, but only if the new state is
            // different from the current state.


            if (!is(newState, hook.memoizedState)) {
              markWorkInProgressReceivedUpdate();
            }

            hook.memoizedState = newState; // Don't persist the state accumulated from the render phase updates to
            // the base state unless the queue is empty.
            // TODO: Not sure if this is the desired semantics, but it's what we
            // do for gDSFP. I can't remember why.

            if (hook.baseUpdate === queue.last) {
              hook.baseState = newState;
            }

            queue.lastRenderedState = newState;
            return [newState, _dispatch];
          }
        }

        return [hook.memoizedState, _dispatch];
      } // The last update in the entire queue


      var last = queue.last; // The last update that is part of the base state.

      var baseUpdate = hook.baseUpdate;
      var baseState = hook.baseState; // Find the first unprocessed update.

      var first = void 0;

      if (baseUpdate !== null) {
        if (last !== null) {
          // For the first update, the queue is a circular linked list where
          // `queue.last.next = queue.first`. Once the first update commits, and
          // the `baseUpdate` is no longer empty, we can unravel the list.
          last.next = null;
        }

        first = baseUpdate.next;
      } else {
        first = last !== null ? last.next : null;
      }

      if (first !== null) {
        var _newState = baseState;
        var newBaseState = null;
        var newBaseUpdate = null;
        var prevUpdate = baseUpdate;
        var _update = first;
        var didSkip = false;

        do {
          var updateExpirationTime = _update.expirationTime;

          if (updateExpirationTime < renderExpirationTime$1) {
            // Priority is insufficient. Skip this update. If this is the first
            // skipped update, the previous update/state is the new base
            // update/state.
            if (!didSkip) {
              didSkip = true;
              newBaseUpdate = prevUpdate;
              newBaseState = _newState;
            } // Update the remaining priority in the queue.


            if (updateExpirationTime > remainingExpirationTime) {
              remainingExpirationTime = updateExpirationTime;
            }
          } else {
            // This update does have sufficient priority.
            // Mark the event time of this update as relevant to this render pass.
            // TODO: This should ideally use the true event time of this update rather than
            // its priority which is a derived and not reverseable value.
            // TODO: We should skip this update if it was already committed but currently
            // we have no way of detecting the difference between a committed and suspended
            // update here.
            markRenderEventTimeAndConfig(updateExpirationTime, _update.suspenseConfig); // Process this update.

            if (_update.eagerReducer === reducer) {
              // If this update was processed eagerly, and its reducer matches the
              // current reducer, we can use the eagerly computed state.
              _newState = _update.eagerState;
            } else {
              var _action2 = _update.action;
              _newState = reducer(_newState, _action2);
            }
          }

          prevUpdate = _update;
          _update = _update.next;
        } while (_update !== null && _update !== first);

        if (!didSkip) {
          newBaseUpdate = prevUpdate;
          newBaseState = _newState;
        } // Mark that the fiber performed work, but only if the new state is
        // different from the current state.


        if (!is(_newState, hook.memoizedState)) {
          markWorkInProgressReceivedUpdate();
        }

        hook.memoizedState = _newState;
        hook.baseUpdate = newBaseUpdate;
        hook.baseState = newBaseState;
        queue.lastRenderedState = _newState;
      }

      var dispatch = queue.dispatch;
      return [hook.memoizedState, dispatch];
    }

    function mountState(initialState) {
      var hook = mountWorkInProgressHook();

      if (typeof initialState === 'function') {
        initialState = initialState();
      }

      hook.memoizedState = hook.baseState = initialState;
      var queue = hook.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      var dispatch = queue.dispatch = dispatchAction.bind(null, // Flow doesn't know this is non-null, but we do.
      currentlyRenderingFiber$1, queue);
      return [hook.memoizedState, dispatch];
    }

    function updateState(initialState) {
      return updateReducer(basicStateReducer, initialState);
    }

    function pushEffect(tag, create, destroy, deps) {
      var effect = {
        tag: tag,
        create: create,
        destroy: destroy,
        deps: deps,
        // Circular
        next: null
      };

      if (componentUpdateQueue === null) {
        componentUpdateQueue = createFunctionComponentUpdateQueue();
        componentUpdateQueue.lastEffect = effect.next = effect;
      } else {
        var _lastEffect = componentUpdateQueue.lastEffect;

        if (_lastEffect === null) {
          componentUpdateQueue.lastEffect = effect.next = effect;
        } else {
          var firstEffect = _lastEffect.next;
          _lastEffect.next = effect;
          effect.next = firstEffect;
          componentUpdateQueue.lastEffect = effect;
        }
      }

      return effect;
    }

    function mountRef(initialValue) {
      var hook = mountWorkInProgressHook();
      var ref = {
        current: initialValue
      };
      {
        Object.seal(ref);
      }
      hook.memoizedState = ref;
      return ref;
    }

    function updateRef(initialValue) {
      var hook = updateWorkInProgressHook();
      return hook.memoizedState;
    }

    function mountEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      sideEffectTag |= fiberEffectTag;
      hook.memoizedState = pushEffect(hookEffectTag, create, undefined, nextDeps);
    }

    function updateEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      var destroy = undefined;

      if (currentHook !== null) {
        var prevEffect = currentHook.memoizedState;
        destroy = prevEffect.destroy;

        if (nextDeps !== null) {
          var prevDeps = prevEffect.deps;

          if (areHookInputsEqual(nextDeps, prevDeps)) {
            pushEffect(NoEffect$1, create, destroy, nextDeps);
            return;
          }
        }
      }

      sideEffectTag |= fiberEffectTag;
      hook.memoizedState = pushEffect(hookEffectTag, create, destroy, nextDeps);
    }

    function mountEffect(create, deps) {
      {
        // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
        if ('undefined' !== typeof jest) {
          warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
        }
      }
      return mountEffectImpl(Update | Passive, UnmountPassive | MountPassive, create, deps);
    }

    function updateEffect(create, deps) {
      {
        // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
        if ('undefined' !== typeof jest) {
          warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
        }
      }
      return updateEffectImpl(Update | Passive, UnmountPassive | MountPassive, create, deps);
    }

    function mountLayoutEffect(create, deps) {
      return mountEffectImpl(Update, UnmountMutation | MountLayout, create, deps);
    }

    function updateLayoutEffect(create, deps) {
      return updateEffectImpl(Update, UnmountMutation | MountLayout, create, deps);
    }

    function imperativeHandleEffect(create, ref) {
      if (typeof ref === 'function') {
        var refCallback = ref;

        var _inst = create();

        refCallback(_inst);
        return function () {
          refCallback(null);
        };
      } else if (ref !== null && ref !== undefined) {
        var refObject = ref;
        {
          !refObject.hasOwnProperty('current') ? warning$1(false, 'Expected useImperativeHandle() first argument to either be a ' + 'ref callback or React.createRef() object. Instead received: %s.', 'an object with keys {' + Object.keys(refObject).join(', ') + '}') : void 0;
        }

        var _inst2 = create();

        refObject.current = _inst2;
        return function () {
          refObject.current = null;
        };
      }
    }

    function mountImperativeHandle(ref, create, deps) {
      {
        !(typeof create === 'function') ? warning$1(false, 'Expected useImperativeHandle() second argument to be a function ' + 'that creates a handle. Instead received: %s.', create !== null ? typeof create : 'null') : void 0;
      } // TODO: If deps are provided, should we skip comparing the ref itself?

      var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
      return mountEffectImpl(Update, UnmountMutation | MountLayout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
    }

    function updateImperativeHandle(ref, create, deps) {
      {
        !(typeof create === 'function') ? warning$1(false, 'Expected useImperativeHandle() second argument to be a function ' + 'that creates a handle. Instead received: %s.', create !== null ? typeof create : 'null') : void 0;
      } // TODO: If deps are provided, should we skip comparing the ref itself?

      var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
      return updateEffectImpl(Update, UnmountMutation | MountLayout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
    }

    function mountDebugValue(value, formatterFn) {// This hook is normally a no-op.
      // The react-debug-hooks package injects its own implementation
      // so that e.g. DevTools can display custom hook values.
    }

    var updateDebugValue = mountDebugValue;

    function mountCallback(callback, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      hook.memoizedState = [callback, nextDeps];
      return callback;
    }

    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      var prevState = hook.memoizedState;

      if (prevState !== null) {
        if (nextDeps !== null) {
          var prevDeps = prevState[1];

          if (areHookInputsEqual(nextDeps, prevDeps)) {
            return prevState[0];
          }
        }
      }

      hook.memoizedState = [callback, nextDeps];
      return callback;
    }

    function mountMemo(nextCreate, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      var nextValue = nextCreate();
      hook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }

    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === undefined ? null : deps;
      var prevState = hook.memoizedState;

      if (prevState !== null) {
        // Assume these are defined. If they're not, areHookInputsEqual will warn.
        if (nextDeps !== null) {
          var prevDeps = prevState[1];

          if (areHookInputsEqual(nextDeps, prevDeps)) {
            return prevState[0];
          }
        }
      }

      var nextValue = nextCreate();
      hook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }

    function dispatchAction(fiber, queue, action) {
      (function () {
        if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
          {
            throw ReactError(Error('Too many re-renders. React limits the number of renders to prevent an infinite loop.'));
          }
        }
      })();

      {
        !(arguments.length <= 3) ? warning$1(false, "State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().') : void 0;
      }
      var alternate = fiber.alternate;

      if (fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1) {
        // This is a render phase update. Stash it in a lazily-created map of
        // queue -> linked list of updates. After this render pass, we'll restart
        // and apply the stashed updates on top of the work-in-progress hook.
        didScheduleRenderPhaseUpdate = true;
        var update = {
          expirationTime: renderExpirationTime$1,
          suspenseConfig: null,
          action: action,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        {
          update.priority = getCurrentPriorityLevel();
        }

        if (renderPhaseUpdates === null) {
          renderPhaseUpdates = new Map();
        }

        var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

        if (firstRenderPhaseUpdate === undefined) {
          renderPhaseUpdates.set(queue, update);
        } else {
          // Append the update to the end of the list.
          var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

          while (lastRenderPhaseUpdate.next !== null) {
            lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          }

          lastRenderPhaseUpdate.next = update;
        }
      } else {
        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        var currentTime = requestCurrentTime();

        var _suspenseConfig = requestCurrentSuspenseConfig();

        var _expirationTime = computeExpirationForFiber(currentTime, fiber, _suspenseConfig);

        var _update2 = {
          expirationTime: _expirationTime,
          suspenseConfig: _suspenseConfig,
          action: action,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        {
          _update2.priority = getCurrentPriorityLevel();
        } // Append the update to the end of the list.

        var _last = queue.last;

        if (_last === null) {
          // This is the first update. Create a circular list.
          _update2.next = _update2;
        } else {
          var first = _last.next;

          if (first !== null) {
            // Still circular.
            _update2.next = first;
          }

          _last.next = _update2;
        }

        queue.last = _update2;

        if (fiber.expirationTime === NoWork && (alternate === null || alternate.expirationTime === NoWork)) {
          // The queue is currently empty, which means we can eagerly compute the
          // next state before entering the render phase. If the new state is the
          // same as the current state, we may be able to bail out entirely.
          var _lastRenderedReducer = queue.lastRenderedReducer;

          if (_lastRenderedReducer !== null) {
            var prevDispatcher = void 0;
            {
              prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            }

            try {
              var currentState = queue.lastRenderedState;

              var _eagerState = _lastRenderedReducer(currentState, action); // Stash the eagerly computed state, and the reducer used to compute
              // it, on the update object. If the reducer hasn't changed by the
              // time we enter the render phase, then the eager state can be used
              // without calling the reducer again.


              _update2.eagerReducer = _lastRenderedReducer;
              _update2.eagerState = _eagerState;

              if (is(_eagerState, currentState)) {
                // Fast path. We can bail out without scheduling React to re-render.
                // It's still possible that we'll need to rebase this update later,
                // if the component re-renders for a different reason and by that
                // time the reducer has changed.
                return;
              }
            } catch (error) {// Suppress the error. It will throw again in the render phase.
            } finally {
              {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            }
          }
        }

        {
          // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
          if ('undefined' !== typeof jest) {
            warnIfNotScopedWithMatchingAct(fiber);
            warnIfNotCurrentlyActingUpdatesInDev(fiber);
          }
        }
        scheduleWork(fiber, _expirationTime);
      }
    }

    var ContextOnlyDispatcher = {
      readContext: readContext,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useResponder: throwInvalidHookError
    };
    var HooksDispatcherOnMountInDEV = null;
    var HooksDispatcherOnMountWithHookTypesInDEV = null;
    var HooksDispatcherOnUpdateInDEV = null;
    var InvalidNestedHooksDispatcherOnMountInDEV = null;
    var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
    {
      var warnInvalidContextAccess = function () {
        warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
      };

      var warnInvalidHookAccess = function () {
        warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
      };

      HooksDispatcherOnMountInDEV = {
        readContext: function (context, observedBits) {
          return readContext(context, observedBits);
        },
        useCallback: function (callback, deps) {
          currentHookNameInDev = 'useCallback';
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountCallback(callback, deps);
        },
        useContext: function (context, observedBits) {
          currentHookNameInDev = 'useContext';
          mountHookTypesDev();
          return readContext(context, observedBits);
        },
        useEffect: function (create, deps) {
          currentHookNameInDev = 'useEffect';
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountEffect(create, deps);
        },
        useImperativeHandle: function (ref, create, deps) {
          currentHookNameInDev = 'useImperativeHandle';
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountImperativeHandle(ref, create, deps);
        },
        useLayoutEffect: function (create, deps) {
          currentHookNameInDev = 'useLayoutEffect';
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountLayoutEffect(create, deps);
        },
        useMemo: function (create, deps) {
          currentHookNameInDev = 'useMemo';
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountMemo(create, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function (reducer, initialArg, init) {
          currentHookNameInDev = 'useReducer';
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function (initialValue) {
          currentHookNameInDev = 'useRef';
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function (initialState) {
          currentHookNameInDev = 'useState';
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function (value, formatterFn) {
          currentHookNameInDev = 'useDebugValue';
          mountHookTypesDev();
          return mountDebugValue(value, formatterFn);
        },
        useResponder: function (responder, props) {
          currentHookNameInDev = 'useResponder';
          mountHookTypesDev();
          return createResponderListener(responder, props);
        }
      };
      HooksDispatcherOnMountWithHookTypesInDEV = {
        readContext: function (context, observedBits) {
          return readContext(context, observedBits);
        },
        useCallback: function (callback, deps) {
          currentHookNameInDev = 'useCallback';
          updateHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function (context, observedBits) {
          currentHookNameInDev = 'useContext';
          updateHookTypesDev();
          return readContext(context, observedBits);
        },
        useEffect: function (create, deps) {
          currentHookNameInDev = 'useEffect';
          updateHookTypesDev();
          return mountEffect(create, deps);
        },
        useImperativeHandle: function (ref, create, deps) {
          currentHookNameInDev = 'useImperativeHandle';
          updateHookTypesDev();
          return mountImperativeHandle(ref, create, deps);
        },
        useLayoutEffect: function (create, deps) {
          currentHookNameInDev = 'useLayoutEffect';
          updateHookTypesDev();
          return mountLayoutEffect(create, deps);
        },
        useMemo: function (create, deps) {
          currentHookNameInDev = 'useMemo';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountMemo(create, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function (reducer, initialArg, init) {
          currentHookNameInDev = 'useReducer';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function (initialValue) {
          currentHookNameInDev = 'useRef';
          updateHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function (initialState) {
          currentHookNameInDev = 'useState';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function (value, formatterFn) {
          currentHookNameInDev = 'useDebugValue';
          updateHookTypesDev();
          return mountDebugValue(value, formatterFn);
        },
        useResponder: function (responder, props) {
          currentHookNameInDev = 'useResponder';
          updateHookTypesDev();
          return createResponderListener(responder, props);
        }
      };
      HooksDispatcherOnUpdateInDEV = {
        readContext: function (context, observedBits) {
          return readContext(context, observedBits);
        },
        useCallback: function (callback, deps) {
          currentHookNameInDev = 'useCallback';
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function (context, observedBits) {
          currentHookNameInDev = 'useContext';
          updateHookTypesDev();
          return readContext(context, observedBits);
        },
        useEffect: function (create, deps) {
          currentHookNameInDev = 'useEffect';
          updateHookTypesDev();
          return updateEffect(create, deps);
        },
        useImperativeHandle: function (ref, create, deps) {
          currentHookNameInDev = 'useImperativeHandle';
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useLayoutEffect: function (create, deps) {
          currentHookNameInDev = 'useLayoutEffect';
          updateHookTypesDev();
          return updateLayoutEffect(create, deps);
        },
        useMemo: function (create, deps) {
          currentHookNameInDev = 'useMemo';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateMemo(create, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function (reducer, initialArg, init) {
          currentHookNameInDev = 'useReducer';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function (initialValue) {
          currentHookNameInDev = 'useRef';
          updateHookTypesDev();
          return updateRef(initialValue);
        },
        useState: function (initialState) {
          currentHookNameInDev = 'useState';
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function (value, formatterFn) {
          currentHookNameInDev = 'useDebugValue';
          updateHookTypesDev();
          return updateDebugValue(value, formatterFn);
        },
        useResponder: function (responder, props) {
          currentHookNameInDev = 'useResponder';
          updateHookTypesDev();
          return createResponderListener(responder, props);
        }
      };
      InvalidNestedHooksDispatcherOnMountInDEV = {
        readContext: function (context, observedBits) {
          warnInvalidContextAccess();
          return readContext(context, observedBits);
        },
        useCallback: function (callback, deps) {
          currentHookNameInDev = 'useCallback';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function (context, observedBits) {
          currentHookNameInDev = 'useContext';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return readContext(context, observedBits);
        },
        useEffect: function (create, deps) {
          currentHookNameInDev = 'useEffect';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountEffect(create, deps);
        },
        useImperativeHandle: function (ref, create, deps) {
          currentHookNameInDev = 'useImperativeHandle';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountImperativeHandle(ref, create, deps);
        },
        useLayoutEffect: function (create, deps) {
          currentHookNameInDev = 'useLayoutEffect';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountLayoutEffect(create, deps);
        },
        useMemo: function (create, deps) {
          currentHookNameInDev = 'useMemo';
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountMemo(create, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function (reducer, initialArg, init) {
          currentHookNameInDev = 'useReducer';
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function (initialValue) {
          currentHookNameInDev = 'useRef';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function (initialState) {
          currentHookNameInDev = 'useState';
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function (value, formatterFn) {
          currentHookNameInDev = 'useDebugValue';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountDebugValue(value, formatterFn);
        },
        useResponder: function (responder, props) {
          currentHookNameInDev = 'useResponder';
          warnInvalidHookAccess();
          mountHookTypesDev();
          return createResponderListener(responder, props);
        }
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV = {
        readContext: function (context, observedBits) {
          warnInvalidContextAccess();
          return readContext(context, observedBits);
        },
        useCallback: function (callback, deps) {
          currentHookNameInDev = 'useCallback';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function (context, observedBits) {
          currentHookNameInDev = 'useContext';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return readContext(context, observedBits);
        },
        useEffect: function (create, deps) {
          currentHookNameInDev = 'useEffect';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffect(create, deps);
        },
        useImperativeHandle: function (ref, create, deps) {
          currentHookNameInDev = 'useImperativeHandle';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateImperativeHandle(ref, create, deps);
        },
        useLayoutEffect: function (create, deps) {
          currentHookNameInDev = 'useLayoutEffect';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateLayoutEffect(create, deps);
        },
        useMemo: function (create, deps) {
          currentHookNameInDev = 'useMemo';
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateMemo(create, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function (reducer, initialArg, init) {
          currentHookNameInDev = 'useReducer';
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function (initialValue) {
          currentHookNameInDev = 'useRef';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateRef(initialValue);
        },
        useState: function (initialState) {
          currentHookNameInDev = 'useState';
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

          try {
            return updateState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function (value, formatterFn) {
          currentHookNameInDev = 'useDebugValue';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateDebugValue(value, formatterFn);
        },
        useResponder: function (responder, props) {
          currentHookNameInDev = 'useResponder';
          warnInvalidHookAccess();
          updateHookTypesDev();
          return createResponderListener(responder, props);
        }
      };
    } // Intentionally not named imports because Rollup would use dynamic dispatch for
    // CommonJS interop named imports.

    var now$2 = Scheduler.unstable_now;
    var commitTime = 0;
    var profilerStartTime = -1;

    function getCommitTime() {
      return commitTime;
    }

    function recordCommitTime() {
      if (!enableProfilerTimer) {
        return;
      }

      commitTime = now$2();
    }

    function startProfilerTimer(fiber) {
      if (!enableProfilerTimer) {
        return;
      }

      profilerStartTime = now$2();

      if (fiber.actualStartTime < 0) {
        fiber.actualStartTime = now$2();
      }
    }

    function stopProfilerTimerIfRunning(fiber) {
      if (!enableProfilerTimer) {
        return;
      }

      profilerStartTime = -1;
    }

    function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
      if (!enableProfilerTimer) {
        return;
      }

      if (profilerStartTime >= 0) {
        var elapsedTime = now$2() - profilerStartTime;
        fiber.actualDuration += elapsedTime;

        if (overrideBaseTime) {
          fiber.selfBaseDuration = elapsedTime;
        }

        profilerStartTime = -1;
      }
    } // The deepest Fiber on the stack involved in a hydration context.
    // This may have been an insertion or a hydration.


    var hydrationParentFiber = null;
    var nextHydratableInstance = null;
    var isHydrating = false;

    function enterHydrationState(fiber) {
      if (!supportsHydration) {
        return false;
      }

      var parentInstance = fiber.stateNode.containerInfo;
      nextHydratableInstance = getFirstHydratableChild(parentInstance);
      hydrationParentFiber = fiber;
      isHydrating = true;
      return true;
    }

    function reenterHydrationStateFromDehydratedSuspenseInstance(fiber) {
      if (!supportsHydration) {
        return false;
      }

      var suspenseInstance = fiber.stateNode;
      nextHydratableInstance = getNextHydratableSibling(suspenseInstance);
      popToNextHostParent(fiber);
      isHydrating = true;
      return true;
    }

    function deleteHydratableInstance(returnFiber, instance) {
      {
        switch (returnFiber.tag) {
          case HostRoot:
            didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
            break;

          case HostComponent:
            didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
            break;
        }
      }
      var childToDelete = createFiberFromHostInstanceForDeletion();
      childToDelete.stateNode = instance;
      childToDelete.return = returnFiber;
      childToDelete.effectTag = Deletion; // This might seem like it belongs on progressedFirstDeletion. However,
      // these children are not part of the reconciliation list of children.
      // Even if we abort and rereconcile the children, that will try to hydrate
      // again and the nodes are still in the host tree so these will be
      // recreated.

      if (returnFiber.lastEffect !== null) {
        returnFiber.lastEffect.nextEffect = childToDelete;
        returnFiber.lastEffect = childToDelete;
      } else {
        returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
      }
    }

    function insertNonHydratedInstance(returnFiber, fiber) {
      fiber.effectTag |= Placement;
      {
        switch (returnFiber.tag) {
          case HostRoot:
            {
              var parentContainer = returnFiber.stateNode.containerInfo;

              switch (fiber.tag) {
                case HostComponent:
                  var type = fiber.type;
                  var props = fiber.pendingProps;
                  didNotFindHydratableContainerInstance(parentContainer, type, props);
                  break;

                case HostText:
                  var text = fiber.pendingProps;
                  didNotFindHydratableContainerTextInstance(parentContainer, text);
                  break;

                case SuspenseComponent:
                  didNotFindHydratableContainerSuspenseInstance(parentContainer);
                  break;
              }

              break;
            }

          case HostComponent:
            {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;

              switch (fiber.tag) {
                case HostComponent:
                  var _type = fiber.type;
                  var _props = fiber.pendingProps;
                  didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                  break;

                case HostText:
                  var _text = fiber.pendingProps;
                  didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                  break;

                case SuspenseComponent:
                  didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                  break;
              }

              break;
            }

          default:
            return;
        }
      }
    }

    function tryHydrate(fiber, nextInstance) {
      switch (fiber.tag) {
        case HostComponent:
          {
            var type = fiber.type;
            var props = fiber.pendingProps;
            var instance = canHydrateInstance(nextInstance, type, props);

            if (instance !== null) {
              fiber.stateNode = instance;
              return true;
            }

            return false;
          }

        case HostText:
          {
            var text = fiber.pendingProps;
            var textInstance = canHydrateTextInstance(nextInstance, text);

            if (textInstance !== null) {
              fiber.stateNode = textInstance;
              return true;
            }

            return false;
          }

        case SuspenseComponent:
          {
            if (enableSuspenseServerRenderer) {
              var suspenseInstance = canHydrateSuspenseInstance(nextInstance);

              if (suspenseInstance !== null) {
                // Downgrade the tag to a dehydrated component until we've hydrated it.
                fiber.tag = DehydratedSuspenseComponent;
                fiber.stateNode = suspenseInstance;
                return true;
              }
            }

            return false;
          }

        default:
          return false;
      }
    }

    function tryToClaimNextHydratableInstance(fiber) {
      if (!isHydrating) {
        return;
      }

      var nextInstance = nextHydratableInstance;

      if (!nextInstance) {
        // Nothing to hydrate. Make it an insertion.
        insertNonHydratedInstance(hydrationParentFiber, fiber);
        isHydrating = false;
        hydrationParentFiber = fiber;
        return;
      }

      var firstAttemptedInstance = nextInstance;

      if (!tryHydrate(fiber, nextInstance)) {
        // If we can't hydrate this instance let's try the next one.
        // We use this as a heuristic. It's based on intuition and not data so it
        // might be flawed or unnecessary.
        nextInstance = getNextHydratableSibling(firstAttemptedInstance);

        if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
          // Nothing to hydrate. Make it an insertion.
          insertNonHydratedInstance(hydrationParentFiber, fiber);
          isHydrating = false;
          hydrationParentFiber = fiber;
          return;
        } // We matched the next one, we'll now assume that the first one was
        // superfluous and we'll delete it. Since we can't eagerly delete it
        // we'll have to schedule a deletion. To do that, this node needs a dummy
        // fiber associated with it.


        deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
      }

      hydrationParentFiber = fiber;
      nextHydratableInstance = getFirstHydratableChild(nextInstance);
    }

    function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
      if (!supportsHydration) {
        (function () {
          {
            {
              throw ReactError(Error('Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      }

      var instance = fiber.stateNode;
      var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber); // TODO: Type this specific to this type of component.

      fiber.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
      // is a new ref we mark this as an update.

      if (updatePayload !== null) {
        return true;
      }

      return false;
    }

    function prepareToHydrateHostTextInstance(fiber) {
      if (!supportsHydration) {
        (function () {
          {
            {
              throw ReactError(Error('Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      }

      var textInstance = fiber.stateNode;
      var textContent = fiber.memoizedProps;
      var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
      {
        if (shouldUpdate) {
          // We assume that prepareToHydrateHostTextInstance is called in a context where the
          // hydration parent is the parent host component of this host text.
          var returnFiber = hydrationParentFiber;

          if (returnFiber !== null) {
            switch (returnFiber.tag) {
              case HostRoot:
                {
                  var parentContainer = returnFiber.stateNode.containerInfo;
                  didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                  break;
                }

              case HostComponent:
                {
                  var parentType = returnFiber.type;
                  var parentProps = returnFiber.memoizedProps;
                  var parentInstance = returnFiber.stateNode;
                  didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                  break;
                }
            }
          }
        }
      }
      return shouldUpdate;
    }

    function skipPastDehydratedSuspenseInstance(fiber) {
      if (!supportsHydration) {
        (function () {
          {
            {
              throw ReactError(Error('Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      }

      var suspenseInstance = fiber.stateNode;

      (function () {
        if (!suspenseInstance) {
          {
            throw ReactError(Error('Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })();

      nextHydratableInstance = getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
    }

    function popToNextHostParent(fiber) {
      var parent = fiber.return;

      while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== DehydratedSuspenseComponent) {
        parent = parent.return;
      }

      hydrationParentFiber = parent;
    }

    function popHydrationState(fiber) {
      if (!supportsHydration) {
        return false;
      }

      if (fiber !== hydrationParentFiber) {
        // We're deeper than the current hydration context, inside an inserted
        // tree.
        return false;
      }

      if (!isHydrating) {
        // If we're not currently hydrating but we're in a hydration context, then
        // we were an insertion and now need to pop up reenter hydration of our
        // siblings.
        popToNextHostParent(fiber);
        isHydrating = true;
        return false;
      }

      var type = fiber.type; // If we have any remaining hydratable nodes, we need to delete them now.
      // We only do this deeper than head and body since they tend to have random
      // other nodes in them. We also ignore components with pure text content in
      // side of them.
      // TODO: Better heuristic.

      if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
        var nextInstance = nextHydratableInstance;

        while (nextInstance) {
          deleteHydratableInstance(fiber, nextInstance);
          nextInstance = getNextHydratableSibling(nextInstance);
        }
      }

      popToNextHostParent(fiber);
      nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
      return true;
    }

    function resetHydrationState() {
      if (!supportsHydration) {
        return;
      }

      hydrationParentFiber = null;
      nextHydratableInstance = null;
      isHydrating = false;
    }

    var ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner;
    var didReceiveUpdate = false;
    var didWarnAboutBadClass = void 0;
    var didWarnAboutModulePatternComponent = void 0;
    var didWarnAboutContextTypeOnFunctionComponent = void 0;
    var didWarnAboutGetDerivedStateOnFunctionComponent = void 0;
    var didWarnAboutFunctionRefs = void 0;
    var didWarnAboutReassigningProps = void 0;
    var didWarnAboutMaxDuration = void 0;
    var didWarnAboutRevealOrder = void 0;
    var didWarnAboutTailOptions = void 0;
    var didWarnAboutDefaultPropsOnFunctionComponent = void 0;
    {
      didWarnAboutBadClass = {};
      didWarnAboutModulePatternComponent = {};
      didWarnAboutContextTypeOnFunctionComponent = {};
      didWarnAboutGetDerivedStateOnFunctionComponent = {};
      didWarnAboutFunctionRefs = {};
      didWarnAboutReassigningProps = false;
      didWarnAboutMaxDuration = false;
      didWarnAboutRevealOrder = {};
      didWarnAboutTailOptions = {};
      didWarnAboutDefaultPropsOnFunctionComponent = {};
    }

    function reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime) {
      if (current$$1 === null) {
        // If this is a fresh new component that hasn't been rendered yet, we
        // won't update its child set by applying minimal side-effects. Instead,
        // we will add them all to the child before it gets rendered. That means
        // we can optimize this reconciliation pass by not tracking side-effects.
        workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
      } else {
        // If the current child is the same as the work in progress, it means that
        // we haven't yet started any work on these children. Therefore, we use
        // the clone algorithm to create a copy of all the current children.
        // If we had any progressed work already, that is invalid at this point so
        // let's throw it out.
        workInProgress.child = reconcileChildFibers(workInProgress, current$$1.child, nextChildren, renderExpirationTime);
      }
    }

    function forceUnmountCurrentAndReconcile(current$$1, workInProgress, nextChildren, renderExpirationTime) {
      // This function is fork of reconcileChildren. It's used in cases where we
      // want to reconcile without matching against the existing set. This has the
      // effect of all current children being unmounted; even if the type and key
      // are the same, the old child is unmounted and a new child is created.
      //
      // To do this, we're going to go through the reconcile algorithm twice. In
      // the first pass, we schedule a deletion for all the current children by
      // passing null.
      workInProgress.child = reconcileChildFibers(workInProgress, current$$1.child, null, renderExpirationTime); // In the second pass, we mount the new children. The trick here is that we
      // pass null in place of where we usually pass the current child set. This has
      // the effect of remounting all children regardless of whether their their
      // identity matches.

      workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    }

    function updateForwardRef(current$$1, workInProgress, Component, nextProps, renderExpirationTime) {
      // TODO: current can be non-null here even if the component
      // hasn't yet mounted. This happens after the first render suspends.
      // We'll need to figure out if this is fine or can cause issues.
      {
        if (workInProgress.type !== workInProgress.elementType) {
          // Lazy component props can't be validated in createElement
          // because they're only guaranteed to be resolved here.
          var innerPropTypes = Component.propTypes;

          if (innerPropTypes) {
            checkPropTypes(innerPropTypes, nextProps, // Resolved props
            'prop', getComponentName(Component), getCurrentFiberStackInDev);
          }
        }
      }
      var render = Component.render;
      var ref = workInProgress.ref; // The rest is a fork of updateFunctionComponent

      var nextChildren = void 0;
      prepareToReadContext(workInProgress, renderExpirationTime);
      {
        ReactCurrentOwner$2.current = workInProgress;
        setCurrentPhase('render');
        nextChildren = renderWithHooks(current$$1, workInProgress, render, nextProps, ref, renderExpirationTime);

        if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
          // Only double-render components with Hooks
          if (workInProgress.memoizedState !== null) {
            nextChildren = renderWithHooks(current$$1, workInProgress, render, nextProps, ref, renderExpirationTime);
          }
        }

        setCurrentPhase(null);
      }

      if (current$$1 !== null && !didReceiveUpdate) {
        bailoutHooks(current$$1, workInProgress, renderExpirationTime);
        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
      } // React DevTools reads this flag.


      workInProgress.effectTag |= PerformedWork;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateMemoComponent(current$$1, workInProgress, Component, nextProps, updateExpirationTime, renderExpirationTime) {
      if (current$$1 === null) {
        var type = Component.type;

        if (isSimpleFunctionComponent(type) && Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        Component.defaultProps === undefined) {
          var resolvedType = type;
          {
            resolvedType = resolveFunctionForHotReloading(type);
          } // If this is a plain function component without default props,
          // and with only the default shallow comparison, we upgrade it
          // to a SimpleMemoComponent to allow fast path updates.

          workInProgress.tag = SimpleMemoComponent;
          workInProgress.type = resolvedType;
          {
            validateFunctionComponentInDev(workInProgress, type);
          }
          return updateSimpleMemoComponent(current$$1, workInProgress, resolvedType, nextProps, updateExpirationTime, renderExpirationTime);
        }

        {
          var innerPropTypes = type.propTypes;

          if (innerPropTypes) {
            // Inner memo component props aren't currently validated in createElement.
            // We could move it there, but we'd still need this for lazy code path.
            checkPropTypes(innerPropTypes, nextProps, // Resolved props
            'prop', getComponentName(type), getCurrentFiberStackInDev);
          }
        }
        var child = createFiberFromTypeAndProps(Component.type, null, nextProps, null, workInProgress.mode, renderExpirationTime);
        child.ref = workInProgress.ref;
        child.return = workInProgress;
        workInProgress.child = child;
        return child;
      }

      {
        var _type = Component.type;
        var _innerPropTypes = _type.propTypes;

        if (_innerPropTypes) {
          // Inner memo component props aren't currently validated in createElement.
          // We could move it there, but we'd still need this for lazy code path.
          checkPropTypes(_innerPropTypes, nextProps, // Resolved props
          'prop', getComponentName(_type), getCurrentFiberStackInDev);
        }
      }
      var currentChild = current$$1.child; // This is always exactly one child

      if (updateExpirationTime < renderExpirationTime) {
        // This will be the props with resolved defaultProps,
        // unlike current.memoizedProps which will be the unresolved ones.
        var prevProps = currentChild.memoizedProps; // Default to shallow comparison

        var compare = Component.compare;
        compare = compare !== null ? compare : shallowEqual;

        if (compare(prevProps, nextProps) && current$$1.ref === workInProgress.ref) {
          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
        }
      } // React DevTools reads this flag.


      workInProgress.effectTag |= PerformedWork;
      var newChild = createWorkInProgress(currentChild, nextProps, renderExpirationTime);
      newChild.ref = workInProgress.ref;
      newChild.return = workInProgress;
      workInProgress.child = newChild;
      return newChild;
    }

    function updateSimpleMemoComponent(current$$1, workInProgress, Component, nextProps, updateExpirationTime, renderExpirationTime) {
      // TODO: current can be non-null here even if the component
      // hasn't yet mounted. This happens when the inner render suspends.
      // We'll need to figure out if this is fine or can cause issues.
      {
        if (workInProgress.type !== workInProgress.elementType) {
          // Lazy component props can't be validated in createElement
          // because they're only guaranteed to be resolved here.
          var outerMemoType = workInProgress.elementType;

          if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
            // We warn when you define propTypes on lazy()
            // so let's just skip over it to find memo() outer wrapper.
            // Inner props for memo are validated later.
            outerMemoType = refineResolvedLazyComponent(outerMemoType);
          }

          var outerPropTypes = outerMemoType && outerMemoType.propTypes;

          if (outerPropTypes) {
            checkPropTypes(outerPropTypes, nextProps, // Resolved (SimpleMemoComponent has no defaultProps)
            'prop', getComponentName(outerMemoType), getCurrentFiberStackInDev);
          } // Inner propTypes will be validated in the function component path.

        }
      }

      if (current$$1 !== null) {
        var prevProps = current$$1.memoizedProps;

        if (shallowEqual(prevProps, nextProps) && current$$1.ref === workInProgress.ref && // Prevent bailout if the implementation changed due to hot reload:
        workInProgress.type === current$$1.type) {
          didReceiveUpdate = false;

          if (updateExpirationTime < renderExpirationTime) {
            return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
          }
        }
      }

      return updateFunctionComponent(current$$1, workInProgress, Component, nextProps, renderExpirationTime);
    }

    function updateFragment(current$$1, workInProgress, renderExpirationTime) {
      var nextChildren = workInProgress.pendingProps;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateMode(current$$1, workInProgress, renderExpirationTime) {
      var nextChildren = workInProgress.pendingProps.children;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateProfiler(current$$1, workInProgress, renderExpirationTime) {
      if (enableProfilerTimer) {
        workInProgress.effectTag |= Update;
      }

      var nextProps = workInProgress.pendingProps;
      var nextChildren = nextProps.children;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function markRef(current$$1, workInProgress) {
      var ref = workInProgress.ref;

      if (current$$1 === null && ref !== null || current$$1 !== null && current$$1.ref !== ref) {
        // Schedule a Ref effect
        workInProgress.effectTag |= Ref;
      }
    }

    function updateFunctionComponent(current$$1, workInProgress, Component, nextProps, renderExpirationTime) {
      {
        if (workInProgress.type !== workInProgress.elementType) {
          // Lazy component props can't be validated in createElement
          // because they're only guaranteed to be resolved here.
          var innerPropTypes = Component.propTypes;

          if (innerPropTypes) {
            checkPropTypes(innerPropTypes, nextProps, // Resolved props
            'prop', getComponentName(Component), getCurrentFiberStackInDev);
          }
        }
      }
      var context = void 0;

      if (!disableLegacyContext) {
        var unmaskedContext = getUnmaskedContext(workInProgress, Component, true);
        context = getMaskedContext(workInProgress, unmaskedContext);
      }

      var nextChildren = void 0;
      prepareToReadContext(workInProgress, renderExpirationTime);
      {
        ReactCurrentOwner$2.current = workInProgress;
        setCurrentPhase('render');
        nextChildren = renderWithHooks(current$$1, workInProgress, Component, nextProps, context, renderExpirationTime);

        if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
          // Only double-render components with Hooks
          if (workInProgress.memoizedState !== null) {
            nextChildren = renderWithHooks(current$$1, workInProgress, Component, nextProps, context, renderExpirationTime);
          }
        }

        setCurrentPhase(null);
      }

      if (current$$1 !== null && !didReceiveUpdate) {
        bailoutHooks(current$$1, workInProgress, renderExpirationTime);
        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
      } // React DevTools reads this flag.


      workInProgress.effectTag |= PerformedWork;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateClassComponent(current$$1, workInProgress, Component, nextProps, renderExpirationTime) {
      {
        if (workInProgress.type !== workInProgress.elementType) {
          // Lazy component props can't be validated in createElement
          // because they're only guaranteed to be resolved here.
          var innerPropTypes = Component.propTypes;

          if (innerPropTypes) {
            checkPropTypes(innerPropTypes, nextProps, // Resolved props
            'prop', getComponentName(Component), getCurrentFiberStackInDev);
          }
        }
      } // Push context providers early to prevent context stack mismatches.
      // During mounting we don't know the child context yet as the instance doesn't exist.
      // We will invalidate the child context in finishClassComponent() right after rendering.

      var hasContext = void 0;

      if (isContextProvider(Component)) {
        hasContext = true;
        pushContextProvider(workInProgress);
      } else {
        hasContext = false;
      }

      prepareToReadContext(workInProgress, renderExpirationTime);
      var instance = workInProgress.stateNode;
      var shouldUpdate = void 0;

      if (instance === null) {
        if (current$$1 !== null) {
          // An class component without an instance only mounts if it suspended
          // inside a non- concurrent tree, in an inconsistent state. We want to
          // tree it like a new mount, even though an empty version of it already
          // committed. Disconnect the alternate pointers.
          current$$1.alternate = null;
          workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

          workInProgress.effectTag |= Placement;
        } // In the initial pass we might need to construct the instance.


        constructClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
        mountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
        shouldUpdate = true;
      } else if (current$$1 === null) {
        // In a resume, we'll already have an instance we can reuse.
        shouldUpdate = resumeMountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
      } else {
        shouldUpdate = updateClassInstance(current$$1, workInProgress, Component, nextProps, renderExpirationTime);
      }

      var nextUnitOfWork = finishClassComponent(current$$1, workInProgress, Component, shouldUpdate, hasContext, renderExpirationTime);
      {
        var inst = workInProgress.stateNode;

        if (inst.props !== nextProps) {
          !didWarnAboutReassigningProps ? warning$1(false, 'It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentName(workInProgress.type) || 'a component') : void 0;
          didWarnAboutReassigningProps = true;
        }
      }
      return nextUnitOfWork;
    }

    function finishClassComponent(current$$1, workInProgress, Component, shouldUpdate, hasContext, renderExpirationTime) {
      // Refs should update even if shouldComponentUpdate returns false
      markRef(current$$1, workInProgress);
      var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;

      if (!shouldUpdate && !didCaptureError) {
        // Context providers should defer to sCU for rendering
        if (hasContext) {
          invalidateContextProvider(workInProgress, Component, false);
        }

        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
      }

      var instance = workInProgress.stateNode; // Rerender

      ReactCurrentOwner$2.current = workInProgress;
      var nextChildren = void 0;

      if (didCaptureError && typeof Component.getDerivedStateFromError !== 'function') {
        // If we captured an error, but getDerivedStateFrom catch is not defined,
        // unmount all the children. componentDidCatch will schedule an update to
        // re-render a fallback. This is temporary until we migrate everyone to
        // the new API.
        // TODO: Warn in a future release.
        nextChildren = null;

        if (enableProfilerTimer) {
          stopProfilerTimerIfRunning(workInProgress);
        }
      } else {
        {
          setCurrentPhase('render');
          nextChildren = instance.render();

          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
            instance.render();
          }

          setCurrentPhase(null);
        }
      } // React DevTools reads this flag.


      workInProgress.effectTag |= PerformedWork;

      if (current$$1 !== null && didCaptureError) {
        // If we're recovering from an error, reconcile without reusing any of
        // the existing children. Conceptually, the normal children and the children
        // that are shown on error are two different sets, so we shouldn't reuse
        // normal children even if their identities match.
        forceUnmountCurrentAndReconcile(current$$1, workInProgress, nextChildren, renderExpirationTime);
      } else {
        reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      } // Memoize state using the values we just used to render.
      // TODO: Restructure so we never read values from the instance.


      workInProgress.memoizedState = instance.state; // The context might have changed so we need to recalculate it.

      if (hasContext) {
        invalidateContextProvider(workInProgress, Component, true);
      }

      return workInProgress.child;
    }

    function pushHostRootContext(workInProgress) {
      var root = workInProgress.stateNode;

      if (root.pendingContext) {
        pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
      } else if (root.context) {
        // Should always be set
        pushTopLevelContextObject(workInProgress, root.context, false);
      }

      pushHostContainer(workInProgress, root.containerInfo);
    }

    function updateHostRoot(current$$1, workInProgress, renderExpirationTime) {
      pushHostRootContext(workInProgress);
      var updateQueue = workInProgress.updateQueue;

      (function () {
        if (!(updateQueue !== null)) {
          {
            throw ReactError(Error('If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })();

      var nextProps = workInProgress.pendingProps;
      var prevState = workInProgress.memoizedState;
      var prevChildren = prevState !== null ? prevState.element : null;
      processUpdateQueue(workInProgress, updateQueue, nextProps, null, renderExpirationTime);
      var nextState = workInProgress.memoizedState; // Caution: React DevTools currently depends on this property
      // being called "element".

      var nextChildren = nextState.element;

      if (nextChildren === prevChildren) {
        // If the state is the same as before, that's a bailout because we had
        // no work that expires at this time.
        resetHydrationState();
        return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
      }

      var root = workInProgress.stateNode;

      if ((current$$1 === null || current$$1.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
        // If we don't have any current children this might be the first pass.
        // We always try to hydrate. If this isn't a hydration pass there won't
        // be any children to hydrate which is effectively the same thing as
        // not hydrating.
        // This is a bit of a hack. We track the host root as a placement to
        // know that we're currently in a mounting state. That way isMounted
        // works as expected. We must reset this before committing.
        // TODO: Delete this when we delete isMounted and findDOMNode.
        workInProgress.effectTag |= Placement; // Ensure that children mount into this root without tracking
        // side-effects. This ensures that we don't store Placement effects on
        // nodes that will be hydrated.

        workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
      } else {
        // Otherwise reset hydration state in case we aborted and resumed another
        // root.
        reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
        resetHydrationState();
      }

      return workInProgress.child;
    }

    function updateHostComponent(current$$1, workInProgress, renderExpirationTime) {
      pushHostContext(workInProgress);

      if (current$$1 === null) {
        tryToClaimNextHydratableInstance(workInProgress);
      }

      var type = workInProgress.type;
      var nextProps = workInProgress.pendingProps;
      var prevProps = current$$1 !== null ? current$$1.memoizedProps : null;
      var nextChildren = nextProps.children;
      var isDirectTextChild = shouldSetTextContent(type, nextProps);

      if (isDirectTextChild) {
        // We special case a direct text child of a host node. This is a common
        // case. We won't handle it as a reified child. We will instead handle
        // this in the host environment that also have access to this prop. That
        // avoids allocating another HostText fiber and traversing it.
        nextChildren = null;
      } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
        // If we're switching from a direct text child to a normal child, or to
        // empty, we need to schedule the text content to be reset.
        workInProgress.effectTag |= ContentReset;
      }

      markRef(current$$1, workInProgress); // Check the host config to see if the children are offscreen/hidden.

      if (workInProgress.mode & ConcurrentMode && renderExpirationTime !== Never && shouldDeprioritizeSubtree(type, nextProps)) {
        if (enableSchedulerTracing) {
          markSpawnedWork(Never);
        } // Schedule this fiber to re-render at offscreen priority. Then bailout.


        workInProgress.expirationTime = workInProgress.childExpirationTime = Never;
        return null;
      }

      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateHostText(current$$1, workInProgress) {
      if (current$$1 === null) {
        tryToClaimNextHydratableInstance(workInProgress);
      } // Nothing to do here. This is terminal. We'll do the completion step
      // immediately after.


      return null;
    }

    function mountLazyComponent(_current, workInProgress, elementType, updateExpirationTime, renderExpirationTime) {
      if (_current !== null) {
        // An lazy component only mounts if it suspended inside a non-
        // concurrent tree, in an inconsistent state. We want to treat it like
        // a new mount, even though an empty version of it already committed.
        // Disconnect the alternate pointers.
        _current.alternate = null;
        workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

        workInProgress.effectTag |= Placement;
      }

      var props = workInProgress.pendingProps; // We can't start a User Timing measurement with correct label yet.
      // Cancel and resume right after we know the tag.

      cancelWorkTimer(workInProgress);
      var Component = readLazyComponentType(elementType); // Store the unwrapped component in the type.

      workInProgress.type = Component;
      var resolvedTag = workInProgress.tag = resolveLazyComponentTag(Component);
      startWorkTimer(workInProgress);
      var resolvedProps = resolveDefaultProps(Component, props);
      var child = void 0;

      switch (resolvedTag) {
        case FunctionComponent:
          {
            {
              validateFunctionComponentInDev(workInProgress, Component);
              workInProgress.type = Component = resolveFunctionForHotReloading(Component);
            }
            child = updateFunctionComponent(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            break;
          }

        case ClassComponent:
          {
            {
              workInProgress.type = Component = resolveClassForHotReloading(Component);
            }
            child = updateClassComponent(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            break;
          }

        case ForwardRef:
          {
            {
              workInProgress.type = Component = resolveForwardRefForHotReloading(Component);
            }
            child = updateForwardRef(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            break;
          }

        case MemoComponent:
          {
            {
              if (workInProgress.type !== workInProgress.elementType) {
                var outerPropTypes = Component.propTypes;

                if (outerPropTypes) {
                  checkPropTypes(outerPropTypes, resolvedProps, // Resolved for outer only
                  'prop', getComponentName(Component), getCurrentFiberStackInDev);
                }
              }
            }
            child = updateMemoComponent(null, workInProgress, Component, resolveDefaultProps(Component.type, resolvedProps), // The inner type can have defaults too
            updateExpirationTime, renderExpirationTime);
            break;
          }

        default:
          {
            var hint = '';
            {
              if (Component !== null && typeof Component === 'object' && Component.$$typeof === REACT_LAZY_TYPE) {
                hint = ' Did you wrap a component in React.lazy() more than once?';
              }
            } // This message intentionally doesn't mention ForwardRef or MemoComponent
            // because the fact that it's a separate type of work is an
            // implementation detail.

            (function () {
              {
                {
                  throw ReactError(Error('Element type is invalid. Received a promise that resolves to: ' + Component + '. Lazy element type must resolve to a class or function.' + hint));
                }
              }
            })();
          }
      }

      return child;
    }

    function mountIncompleteClassComponent(_current, workInProgress, Component, nextProps, renderExpirationTime) {
      if (_current !== null) {
        // An incomplete component only mounts if it suspended inside a non-
        // concurrent tree, in an inconsistent state. We want to treat it like
        // a new mount, even though an empty version of it already committed.
        // Disconnect the alternate pointers.
        _current.alternate = null;
        workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

        workInProgress.effectTag |= Placement;
      } // Promote the fiber to a class and try rendering again.


      workInProgress.tag = ClassComponent; // The rest of this function is a fork of `updateClassComponent`
      // Push context providers early to prevent context stack mismatches.
      // During mounting we don't know the child context yet as the instance doesn't exist.
      // We will invalidate the child context in finishClassComponent() right after rendering.

      var hasContext = void 0;

      if (isContextProvider(Component)) {
        hasContext = true;
        pushContextProvider(workInProgress);
      } else {
        hasContext = false;
      }

      prepareToReadContext(workInProgress, renderExpirationTime);
      constructClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
      mountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
      return finishClassComponent(null, workInProgress, Component, true, hasContext, renderExpirationTime);
    }

    function mountIndeterminateComponent(_current, workInProgress, Component, renderExpirationTime) {
      if (_current !== null) {
        // An indeterminate component only mounts if it suspended inside a non-
        // concurrent tree, in an inconsistent state. We want to treat it like
        // a new mount, even though an empty version of it already committed.
        // Disconnect the alternate pointers.
        _current.alternate = null;
        workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

        workInProgress.effectTag |= Placement;
      }

      var props = workInProgress.pendingProps;
      var context = void 0;

      if (!disableLegacyContext) {
        var unmaskedContext = getUnmaskedContext(workInProgress, Component, false);
        context = getMaskedContext(workInProgress, unmaskedContext);
      }

      prepareToReadContext(workInProgress, renderExpirationTime);
      var value = void 0;
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var componentName = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[componentName]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
            didWarnAboutBadClass[componentName] = true;
          }
        }

        if (workInProgress.mode & StrictMode) {
          ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
        }

        ReactCurrentOwner$2.current = workInProgress;
        value = renderWithHooks(null, workInProgress, Component, props, context, renderExpirationTime);
      } // React DevTools reads this flag.

      workInProgress.effectTag |= PerformedWork;

      if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
        {
          var _componentName = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName]) {
            warningWithoutStack$1(false, 'The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);
            didWarnAboutModulePatternComponent[_componentName] = true;
          }
        } // Proceed under the assumption that this is a class instance

        workInProgress.tag = ClassComponent; // Throw out any hooks that were used.

        resetHooks(); // Push context providers early to prevent context stack mismatches.
        // During mounting we don't know the child context yet as the instance doesn't exist.
        // We will invalidate the child context in finishClassComponent() right after rendering.

        var hasContext = false;

        if (isContextProvider(Component)) {
          hasContext = true;
          pushContextProvider(workInProgress);
        } else {
          hasContext = false;
        }

        workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
        var getDerivedStateFromProps = Component.getDerivedStateFromProps;

        if (typeof getDerivedStateFromProps === 'function') {
          applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, props);
        }

        adoptClassInstance(workInProgress, value);
        mountClassInstance(workInProgress, Component, props, renderExpirationTime);
        return finishClassComponent(null, workInProgress, Component, true, hasContext, renderExpirationTime);
      } else {
        // Proceed under the assumption that this is a function component
        workInProgress.tag = FunctionComponent;
        {
          if (disableLegacyContext && Component.contextTypes) {
            warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with React.useContext() instead.', getComponentName(Component) || 'Unknown');
          }

          if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
            // Only double-render components with Hooks
            if (workInProgress.memoizedState !== null) {
              value = renderWithHooks(null, workInProgress, Component, props, context, renderExpirationTime);
            }
          }
        }
        reconcileChildren(null, workInProgress, value, renderExpirationTime);
        {
          validateFunctionComponentInDev(workInProgress, Component);
        }
        return workInProgress.child;
      }
    }

    function validateFunctionComponentInDev(workInProgress, Component) {
      if (Component) {
        !!Component.childContextTypes ? warningWithoutStack$1(false, '%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component') : void 0;
      }

      if (workInProgress.ref !== null) {
        var info = '';
        var ownerName = getCurrentFiberOwnerNameInDevOrNull();

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }

        var warningKey = ownerName || workInProgress._debugID || '';
        var debugSource = workInProgress._debugSource;

        if (debugSource) {
          warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
        }

        if (!didWarnAboutFunctionRefs[warningKey]) {
          didWarnAboutFunctionRefs[warningKey] = true;
          warning$1(false, 'Function components cannot be given refs. ' + 'Attempts to access this ref will fail. ' + 'Did you mean to use React.forwardRef()?%s', info);
        }
      }

      if (warnAboutDefaultPropsOnFunctionComponents && Component.defaultProps !== undefined) {
        var componentName = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
          warningWithoutStack$1(false, '%s: Support for defaultProps will be removed from function components ' + 'in a future major release. Use JavaScript default parameters instead.', componentName);
          didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
        }
      }

      if (typeof Component.getDerivedStateFromProps === 'function') {
        var _componentName2 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2]) {
          warningWithoutStack$1(false, '%s: Function components do not support getDerivedStateFromProps.', _componentName2);
          didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = true;
        }
      }

      if (typeof Component.contextType === 'object' && Component.contextType !== null) {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutContextTypeOnFunctionComponent[_componentName3]) {
          warningWithoutStack$1(false, '%s: Function components do not support contextType.', _componentName3);
          didWarnAboutContextTypeOnFunctionComponent[_componentName3] = true;
        }
      }
    } // TODO: This is now an empty object. Should we just make it a boolean?


    var SUSPENDED_MARKER = {};

    function shouldRemainOnFallback(suspenseContext, current$$1, workInProgress) {
      // If the context is telling us that we should show a fallback, and we're not
      // already showing content, then we should show the fallback instead.
      return hasSuspenseContext(suspenseContext, ForceSuspenseFallback) && (current$$1 === null || current$$1.memoizedState !== null);
    }

    function updateSuspenseComponent(current$$1, workInProgress, renderExpirationTime) {
      var mode = workInProgress.mode;
      var nextProps = workInProgress.pendingProps; // This is used by DevTools to force a boundary to suspend.

      {
        if (shouldSuspend(workInProgress)) {
          workInProgress.effectTag |= DidCapture;
        }
      }
      var suspenseContext = suspenseStackCursor.current;
      var nextState = null;
      var nextDidTimeout = false;

      if ((workInProgress.effectTag & DidCapture) !== NoEffect || shouldRemainOnFallback(suspenseContext, current$$1, workInProgress)) {
        // Something in this boundary's subtree already suspended. Switch to
        // rendering the fallback children.
        nextState = SUSPENDED_MARKER;
        nextDidTimeout = true;
        workInProgress.effectTag &= ~DidCapture;
      } else {
        // Attempting the main content
        if (current$$1 === null || current$$1.memoizedState !== null) {
          // This is a new mount or this boundary is already showing a fallback state.
          // Mark this subtree context as having at least one invisible parent that could
          // handle the fallback state.
          // Boundaries without fallbacks or should be avoided are not considered since
          // they cannot handle preferred fallback states.
          if (nextProps.fallback !== undefined && nextProps.unstable_avoidThisFallback !== true) {
            suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
          }
        }
      }

      suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
      pushSuspenseContext(workInProgress, suspenseContext);
      {
        if ('maxDuration' in nextProps) {
          if (!didWarnAboutMaxDuration) {
            didWarnAboutMaxDuration = true;
            warning$1(false, 'maxDuration has been removed from React. ' + 'Remove the maxDuration prop.');
          }
        }
      } // This next part is a bit confusing. If the children timeout, we switch to
      // showing the fallback children in place of the "primary" children.
      // However, we don't want to delete the primary children because then their
      // state will be lost (both the React state and the host state, e.g.
      // uncontrolled form inputs). Instead we keep them mounted and hide them.
      // Both the fallback children AND the primary children are rendered at the
      // same time. Once the primary children are un-suspended, we can delete
      // the fallback children — don't need to preserve their state.
      //
      // The two sets of children are siblings in the host environment, but
      // semantically, for purposes of reconciliation, they are two separate sets.
      // So we store them using two fragment fibers.
      //
      // However, we want to avoid allocating extra fibers for every placeholder.
      // They're only necessary when the children time out, because that's the
      // only time when both sets are mounted.
      //
      // So, the extra fragment fibers are only used if the children time out.
      // Otherwise, we render the primary children directly. This requires some
      // custom reconciliation logic to preserve the state of the primary
      // children. It's essentially a very basic form of re-parenting.
      // `child` points to the child fiber. In the normal case, this is the first
      // fiber of the primary children set. In the timed-out case, it's a
      // a fragment fiber containing the primary children.

      var child = void 0; // `next` points to the next fiber React should render. In the normal case,
      // it's the same as `child`: the first fiber of the primary children set.
      // In the timed-out case, it's a fragment fiber containing the *fallback*
      // children -- we skip over the primary children entirely.

      var next = void 0;

      if (current$$1 === null) {
        if (enableSuspenseServerRenderer) {
          // If we're currently hydrating, try to hydrate this boundary.
          // But only if this has a fallback.
          if (nextProps.fallback !== undefined) {
            tryToClaimNextHydratableInstance(workInProgress); // This could've changed the tag if this was a dehydrated suspense component.

            if (workInProgress.tag === DehydratedSuspenseComponent) {
              popSuspenseContext(workInProgress);
              return updateDehydratedSuspenseComponent(null, workInProgress, renderExpirationTime);
            }
          }
        } // This is the initial mount. This branch is pretty simple because there's
        // no previous state that needs to be preserved.


        if (nextDidTimeout) {
          // Mount separate fragments for primary and fallback children.
          var nextFallbackChildren = nextProps.fallback;
          var primaryChildFragment = createFiberFromFragment(null, mode, NoWork, null);
          primaryChildFragment.return = workInProgress;

          if ((workInProgress.mode & BatchedMode) === NoMode) {
            // Outside of batched mode, we commit the effects from the
            var progressedState = workInProgress.memoizedState;
            var progressedPrimaryChild = progressedState !== null ? workInProgress.child.child : workInProgress.child;
            primaryChildFragment.child = progressedPrimaryChild;
            var progressedChild = progressedPrimaryChild;

            while (progressedChild !== null) {
              progressedChild.return = primaryChildFragment;
              progressedChild = progressedChild.sibling;
            }
          }

          var fallbackChildFragment = createFiberFromFragment(nextFallbackChildren, mode, renderExpirationTime, null);
          fallbackChildFragment.return = workInProgress;
          primaryChildFragment.sibling = fallbackChildFragment;
          child = primaryChildFragment; // Skip the primary children, and continue working on the
          // fallback children.

          next = fallbackChildFragment;
        } else {
          // Mount the primary children without an intermediate fragment fiber.
          var nextPrimaryChildren = nextProps.children;
          child = next = mountChildFibers(workInProgress, null, nextPrimaryChildren, renderExpirationTime);
        }
      } else {
        // This is an update. This branch is more complicated because we need to
        // ensure the state of the primary children is preserved.
        var prevState = current$$1.memoizedState;
        var prevDidTimeout = prevState !== null;

        if (prevDidTimeout) {
          // The current tree already timed out. That means each child set is
          var currentPrimaryChildFragment = current$$1.child;
          var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;

          if (nextDidTimeout) {
            // Still timed out. Reuse the current primary children by cloning
            // its fragment. We're going to skip over these entirely.
            var _nextFallbackChildren = nextProps.fallback;

            var _primaryChildFragment = createWorkInProgress(currentPrimaryChildFragment, currentPrimaryChildFragment.pendingProps, NoWork);

            _primaryChildFragment.return = workInProgress;

            if ((workInProgress.mode & BatchedMode) === NoMode) {
              // Outside of batched mode, we commit the effects from the
              var _progressedState = workInProgress.memoizedState;

              var _progressedPrimaryChild = _progressedState !== null ? workInProgress.child.child : workInProgress.child;

              if (_progressedPrimaryChild !== currentPrimaryChildFragment.child) {
                _primaryChildFragment.child = _progressedPrimaryChild;
                var _progressedChild = _progressedPrimaryChild;

                while (_progressedChild !== null) {
                  _progressedChild.return = _primaryChildFragment;
                  _progressedChild = _progressedChild.sibling;
                }
              }
            } // Because primaryChildFragment is a new fiber that we're inserting as the
            // parent of a new tree, we need to set its treeBaseDuration.


            if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
              // treeBaseDuration is the sum of all the child tree base durations.
              var treeBaseDuration = 0;
              var hiddenChild = _primaryChildFragment.child;

              while (hiddenChild !== null) {
                treeBaseDuration += hiddenChild.treeBaseDuration;
                hiddenChild = hiddenChild.sibling;
              }

              _primaryChildFragment.treeBaseDuration = treeBaseDuration;
            } // Clone the fallback child fragment, too. These we'll continue
            // working on.


            var _fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, _nextFallbackChildren, currentFallbackChildFragment.expirationTime);

            _fallbackChildFragment.return = workInProgress;
            _primaryChildFragment.sibling = _fallbackChildFragment;
            child = _primaryChildFragment;
            _primaryChildFragment.childExpirationTime = NoWork; // Skip the primary children, and continue working on the
            // fallback children.

            next = _fallbackChildFragment;
          } else {
            // No longer suspended. Switch back to showing the primary children,
            // and remove the intermediate fragment fiber.
            var _nextPrimaryChildren = nextProps.children;
            var currentPrimaryChild = currentPrimaryChildFragment.child;
            var primaryChild = reconcileChildFibers(workInProgress, currentPrimaryChild, _nextPrimaryChildren, renderExpirationTime); // If this render doesn't suspend, we need to delete the fallback
            // children. Wait until the complete phase, after we've confirmed the
            // fallback is no longer needed.
            // TODO: Would it be better to store the fallback fragment on
            // the stateNode?
            // Continue rendering the children, like we normally do.

            child = next = primaryChild;
          }
        } else {
          // The current tree has not already timed out. That means the primary
          // children are not wrapped in a fragment fiber.
          var _currentPrimaryChild = current$$1.child;

          if (nextDidTimeout) {
            // Timed out. Wrap the children in a fragment fiber to keep them
            // separate from the fallback children.
            var _nextFallbackChildren2 = nextProps.fallback;

            var _primaryChildFragment2 = createFiberFromFragment( // It shouldn't matter what the pending props are because we aren't
            // going to render this fragment.
            null, mode, NoWork, null);

            _primaryChildFragment2.return = workInProgress;
            _primaryChildFragment2.child = _currentPrimaryChild;

            if (_currentPrimaryChild !== null) {
              _currentPrimaryChild.return = _primaryChildFragment2;
            } // Even though we're creating a new fiber, there are no new children,
            // because we're reusing an already mounted tree. So we don't need to
            // schedule a placement.
            // primaryChildFragment.effectTag |= Placement;


            if ((workInProgress.mode & BatchedMode) === NoMode) {
              // Outside of batched mode, we commit the effects from the
              var _progressedState2 = workInProgress.memoizedState;

              var _progressedPrimaryChild2 = _progressedState2 !== null ? workInProgress.child.child : workInProgress.child;

              _primaryChildFragment2.child = _progressedPrimaryChild2;
              var _progressedChild2 = _progressedPrimaryChild2;

              while (_progressedChild2 !== null) {
                _progressedChild2.return = _primaryChildFragment2;
                _progressedChild2 = _progressedChild2.sibling;
              }
            } // Because primaryChildFragment is a new fiber that we're inserting as the
            // parent of a new tree, we need to set its treeBaseDuration.


            if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
              // treeBaseDuration is the sum of all the child tree base durations.
              var _treeBaseDuration = 0;
              var _hiddenChild = _primaryChildFragment2.child;

              while (_hiddenChild !== null) {
                _treeBaseDuration += _hiddenChild.treeBaseDuration;
                _hiddenChild = _hiddenChild.sibling;
              }

              _primaryChildFragment2.treeBaseDuration = _treeBaseDuration;
            } // Create a fragment from the fallback children, too.


            var _fallbackChildFragment2 = createFiberFromFragment(_nextFallbackChildren2, mode, renderExpirationTime, null);

            _fallbackChildFragment2.return = workInProgress;
            _primaryChildFragment2.sibling = _fallbackChildFragment2;
            _fallbackChildFragment2.effectTag |= Placement;
            child = _primaryChildFragment2;
            _primaryChildFragment2.childExpirationTime = NoWork; // Skip the primary children, and continue working on the
            // fallback children.

            next = _fallbackChildFragment2;
          } else {
            // Still haven't timed out.  Continue rendering the children, like we
            // normally do.
            var _nextPrimaryChildren2 = nextProps.children;
            next = child = reconcileChildFibers(workInProgress, _currentPrimaryChild, _nextPrimaryChildren2, renderExpirationTime);
          }
        }

        workInProgress.stateNode = current$$1.stateNode;
      }

      workInProgress.memoizedState = nextState;
      workInProgress.child = child;
      return next;
    }

    function retrySuspenseComponentWithoutHydrating(current$$1, workInProgress, renderExpirationTime) {
      // Detach from the current dehydrated boundary.
      current$$1.alternate = null;
      workInProgress.alternate = null; // Insert a deletion in the effect list.

      var returnFiber = workInProgress.return;

      (function () {
        if (!(returnFiber !== null)) {
          {
            throw ReactError(Error('Suspense boundaries are never on the root. This is probably a bug in React.'));
          }
        }
      })();

      var last = returnFiber.lastEffect;

      if (last !== null) {
        last.nextEffect = current$$1;
        returnFiber.lastEffect = current$$1;
      } else {
        returnFiber.firstEffect = returnFiber.lastEffect = current$$1;
      }

      current$$1.nextEffect = null;
      current$$1.effectTag = Deletion;
      popSuspenseContext(workInProgress); // Upgrade this work in progress to a real Suspense component.

      workInProgress.tag = SuspenseComponent;
      workInProgress.stateNode = null;
      workInProgress.memoizedState = null; // This is now an insertion.

      workInProgress.effectTag |= Placement; // Retry as a real Suspense component.

      return updateSuspenseComponent(null, workInProgress, renderExpirationTime);
    }

    function updateDehydratedSuspenseComponent(current$$1, workInProgress, renderExpirationTime) {
      pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
      var suspenseInstance = workInProgress.stateNode;

      if (current$$1 === null) {
        // During the first pass, we'll bail out and not drill into the children.
        // Instead, we'll leave the content in place and try to hydrate it later.
        if (isSuspenseInstanceFallback(suspenseInstance)) {
          // This is a client-only boundary. Since we won't get any content from the server
          // for this, we need to schedule that at a higher priority based on when it would
          // have timed out. In theory we could render it in this pass but it would have the
          // wrong priority associated with it and will prevent hydration of parent path.
          // Instead, we'll leave work left on it to render it in a separate commit.
          // TODO This time should be the time at which the server rendered response that is
          // a parent to this boundary was displayed. However, since we currently don't have
          // a protocol to transfer that time, we'll just estimate it by using the current
          // time. This will mean that Suspense timeouts are slightly shifted to later than
          // they should be.
          var serverDisplayTime = requestCurrentTime(); // Schedule a normal pri update to render this content.

          workInProgress.expirationTime = computeAsyncExpiration(serverDisplayTime);
        } else {
          // We'll continue hydrating the rest at offscreen priority since we'll already
          // be showing the right content coming from the server, it is no rush.
          workInProgress.expirationTime = Never;
        }

        return null;
      }

      if ((workInProgress.effectTag & DidCapture) !== NoEffect) {
        // Something suspended. Leave the existing children in place.
        // TODO: In non-concurrent mode, should we commit the nodes we have hydrated so far?
        workInProgress.child = null;
        return null;
      }

      if (isSuspenseInstanceFallback(suspenseInstance)) {
        // This boundary is in a permanent fallback state. In this case, we'll never
        // get an update and we'll never be able to hydrate the final content. Let's just try the
        // client side render instead.
        return retrySuspenseComponentWithoutHydrating(current$$1, workInProgress, renderExpirationTime);
      } // We use childExpirationTime to indicate that a child might depend on context, so if
      // any context has changed, we need to treat is as if the input might have changed.


      var hasContextChanged$$1 = current$$1.childExpirationTime >= renderExpirationTime;

      if (didReceiveUpdate || hasContextChanged$$1) {
        // This boundary has changed since the first render. This means that we are now unable to
        // hydrate it. We might still be able to hydrate it using an earlier expiration time but
        // during this render we can't. Instead, we're going to delete the whole subtree and
        // instead inject a new real Suspense boundary to take its place, which may render content
        // or fallback. The real Suspense boundary will suspend for a while so we have some time
        // to ensure it can produce real content, but all state and pending events will be lost.
        return retrySuspenseComponentWithoutHydrating(current$$1, workInProgress, renderExpirationTime);
      } else if (isSuspenseInstancePending(suspenseInstance)) {
        // This component is still pending more data from the server, so we can't hydrate its
        // content. We treat it as if this component suspended itself. It might seem as if
        // we could just try to render it client-side instead. However, this will perform a
        // lot of unnecessary work and is unlikely to complete since it often will suspend
        // on missing data anyway. Additionally, the server might be able to render more
        // than we can on the client yet. In that case we'd end up with more fallback states
        // on the client than if we just leave it alone. If the server times out or errors
        // these should update this boundary to the permanent Fallback state instead.
        // Mark it as having captured (i.e. suspended).
        workInProgress.effectTag |= DidCapture; // Leave the children in place. I.e. empty.

        workInProgress.child = null; // Register a callback to retry this boundary once the server has sent the result.

        registerSuspenseInstanceRetry(suspenseInstance, retryTimedOutBoundary.bind(null, current$$1));
        return null;
      } else {
        // This is the first attempt.
        reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress);
        var nextProps = workInProgress.pendingProps;
        var nextChildren = nextProps.children;
        workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }
    }

    function propagateSuspenseContextChange(workInProgress, firstChild, renderExpirationTime) {
      // Mark any Suspense boundaries with fallbacks as having work to do.
      // If they were previously forced into fallbacks, they may now be able
      // to unblock.
      var node = firstChild;

      while (node !== null) {
        if (node.tag === SuspenseComponent) {
          var state = node.memoizedState;

          if (state !== null) {
            if (node.expirationTime < renderExpirationTime) {
              node.expirationTime = renderExpirationTime;
            }

            var alternate = node.alternate;

            if (alternate !== null && alternate.expirationTime < renderExpirationTime) {
              alternate.expirationTime = renderExpirationTime;
            }

            scheduleWorkOnParentPath(node.return, renderExpirationTime);
          }
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === workInProgress) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === workInProgress) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }

    function findLastContentRow(firstChild) {
      // This is going to find the last row among these children that is already
      // showing content on the screen, as opposed to being in fallback state or
      // new. If a row has multiple Suspense boundaries, any of them being in the
      // fallback state, counts as the whole row being in a fallback state.
      // Note that the "rows" will be workInProgress, but any nested children
      // will still be current since we haven't rendered them yet. The mounted
      // order may not be the same as the new order. We use the new order.
      var row = firstChild;
      var lastContentRow = null;

      while (row !== null) {
        var currentRow = row.alternate; // New rows can't be content rows.

        if (currentRow !== null && findFirstSuspended(currentRow) === null) {
          lastContentRow = row;
        }

        row = row.sibling;
      }

      return lastContentRow;
    }

    function validateRevealOrder(revealOrder) {
      {
        if (revealOrder !== undefined && revealOrder !== 'forwards' && revealOrder !== 'backwards' && revealOrder !== 'together' && !didWarnAboutRevealOrder[revealOrder]) {
          didWarnAboutRevealOrder[revealOrder] = true;

          if (typeof revealOrder === 'string') {
            switch (revealOrder.toLowerCase()) {
              case 'together':
              case 'forwards':
              case 'backwards':
                {
                  warning$1(false, '"%s" is not a valid value for revealOrder on <SuspenseList />. ' + 'Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                  break;
                }

              case 'forward':
              case 'backward':
                {
                  warning$1(false, '"%s" is not a valid value for revealOrder on <SuspenseList />. ' + 'React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                  break;
                }

              default:
                warning$1(false, '"%s" is not a supported revealOrder on <SuspenseList />. ' + 'Did you mean "together", "forwards" or "backwards"?', revealOrder);
                break;
            }
          } else {
            warning$1(false, '%s is not a supported value for revealOrder on <SuspenseList />. ' + 'Did you mean "together", "forwards" or "backwards"?', revealOrder);
          }
        }
      }
    }

    function validateTailOptions(tailMode, revealOrder) {
      {
        if (tailMode !== undefined && !didWarnAboutTailOptions[tailMode]) {
          if (tailMode !== 'collapsed' && tailMode !== 'hidden') {
            didWarnAboutTailOptions[tailMode] = true;
            warning$1(false, '"%s" is not a supported value for tail on <SuspenseList />. ' + 'Did you mean "collapsed" or "hidden"?', tailMode);
          } else if (revealOrder !== 'forwards' && revealOrder !== 'backwards') {
            didWarnAboutTailOptions[tailMode] = true;
            warning$1(false, '<SuspenseList tail="%s" /> is only valid if revealOrder is ' + '"forwards" or "backwards". ' + 'Did you mean to specify revealOrder="forwards"?', tailMode);
          }
        }
      }
    }

    function validateSuspenseListNestedChild(childSlot, index) {
      {
        var isArray = Array.isArray(childSlot);
        var isIterable = !isArray && typeof getIteratorFn(childSlot) === 'function';

        if (isArray || isIterable) {
          var type = isArray ? 'array' : 'iterable';
          warning$1(false, 'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in ' + 'an additional SuspenseList to configure its revealOrder: ' + '<SuspenseList revealOrder=...> ... ' + '<SuspenseList revealOrder=...>{%s}</SuspenseList> ... ' + '</SuspenseList>', type, index, type);
          return false;
        }
      }
      return true;
    }

    function validateSuspenseListChildren(children, revealOrder) {
      {
        if ((revealOrder === 'forwards' || revealOrder === 'backwards') && children !== undefined && children !== null && children !== false) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              if (!validateSuspenseListNestedChild(children[i], i)) {
                return;
              }
            }
          } else {
            var iteratorFn = getIteratorFn(children);

            if (typeof iteratorFn === 'function') {
              var childrenIterator = iteratorFn.call(children);

              if (childrenIterator) {
                var step = childrenIterator.next();
                var _i = 0;

                for (; !step.done; step = childrenIterator.next()) {
                  if (!validateSuspenseListNestedChild(step.value, _i)) {
                    return;
                  }

                  _i++;
                }
              }
            } else {
              warning$1(false, 'A single row was passed to a <SuspenseList revealOrder="%s" />. ' + 'This is not useful since it needs multiple rows. ' + 'Did you mean to pass multiple children or an array?', revealOrder);
            }
          }
        }
      }
    }

    function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode) {
      var renderState = workInProgress.memoizedState;

      if (renderState === null) {
        workInProgress.memoizedState = {
          isBackwards: isBackwards,
          rendering: null,
          last: lastContentRow,
          tail: tail,
          tailExpiration: 0,
          tailMode: tailMode
        };
      } else {
        // We can reuse the existing object from previous renders.
        renderState.isBackwards = isBackwards;
        renderState.rendering = null;
        renderState.last = lastContentRow;
        renderState.tail = tail;
        renderState.tailExpiration = 0;
        renderState.tailMode = tailMode;
      }
    } // This can end up rendering this component multiple passes.
    // The first pass splits the children fibers into two sets. A head and tail.
    // We first render the head. If anything is in fallback state, we do another
    // pass through beginWork to rerender all children (including the tail) with
    // the force suspend context. If the first render didn't have anything in
    // in fallback state. Then we render each row in the tail one-by-one.
    // That happens in the completeWork phase without going back to beginWork.


    function updateSuspenseListComponent(current$$1, workInProgress, renderExpirationTime) {
      var nextProps = workInProgress.pendingProps;
      var revealOrder = nextProps.revealOrder;
      var tailMode = nextProps.tail;
      var newChildren = nextProps.children;
      validateRevealOrder(revealOrder);
      validateTailOptions(tailMode, revealOrder);
      validateSuspenseListChildren(newChildren, revealOrder);
      reconcileChildren(current$$1, workInProgress, newChildren, renderExpirationTime);
      var suspenseContext = suspenseStackCursor.current;
      var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);

      if (shouldForceFallback) {
        suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
        workInProgress.effectTag |= DidCapture;
      } else {
        var didSuspendBefore = current$$1 !== null && (current$$1.effectTag & DidCapture) !== NoEffect;

        if (didSuspendBefore) {
          // If we previously forced a fallback, we need to schedule work
          // on any nested boundaries to let them know to try to render
          // again. This is the same as context updating.
          propagateSuspenseContextChange(workInProgress, workInProgress.child, renderExpirationTime);
        }

        suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
      }

      pushSuspenseContext(workInProgress, suspenseContext);

      if ((workInProgress.mode & BatchedMode) === NoMode) {
        // Outside of batched mode, SuspenseList doesn't work so we just
        // use make it a noop by treating it as the default revealOrder.
        workInProgress.memoizedState = null;
      } else {
        switch (revealOrder) {
          case 'forwards':
            {
              var lastContentRow = findLastContentRow(workInProgress.child);
              var tail = void 0;

              if (lastContentRow === null) {
                // The whole list is part of the tail.
                // TODO: We could fast path by just rendering the tail now.
                tail = workInProgress.child;
                workInProgress.child = null;
              } else {
                // Disconnect the tail rows after the content row.
                // We're going to render them separately later.
                tail = lastContentRow.sibling;
                lastContentRow.sibling = null;
              }

              initSuspenseListRenderState(workInProgress, false, // isBackwards
              tail, lastContentRow, tailMode);
              break;
            }

          case 'backwards':
            {
              // We're going to find the first row that has existing content.
              // At the same time we're going to reverse the list of everything
              // we pass in the meantime. That's going to be our tail in reverse
              // order.
              var _tail = null;
              var row = workInProgress.child;
              workInProgress.child = null;

              while (row !== null) {
                var currentRow = row.alternate; // New rows can't be content rows.

                if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                  // This is the beginning of the main content.
                  workInProgress.child = row;
                  break;
                }

                var nextRow = row.sibling;
                row.sibling = _tail;
                _tail = row;
                row = nextRow;
              } // TODO: If workInProgress.child is null, we can continue on the tail immediately.


              initSuspenseListRenderState(workInProgress, true, // isBackwards
              _tail, null, // last
              tailMode);
              break;
            }

          case 'together':
            {
              initSuspenseListRenderState(workInProgress, false, // isBackwards
              null, // tail
              null, // last
              undefined);
              break;
            }

          default:
            {
              // The default reveal order is the same as not having
              // a boundary.
              workInProgress.memoizedState = null;
            }
        }
      }

      return workInProgress.child;
    }

    function updatePortalComponent(current$$1, workInProgress, renderExpirationTime) {
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      var nextChildren = workInProgress.pendingProps;

      if (current$$1 === null) {
        // Portals are special because we don't append the children during mount
        // but at commit. Therefore we need to track insertions which the normal
        // flow doesn't do during mount. This doesn't happen at the root because
        // the root always starts with a "current" with a null child.
        // TODO: Consider unifying this with how the root works.
        workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
      } else {
        reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      }

      return workInProgress.child;
    }

    function updateContextProvider(current$$1, workInProgress, renderExpirationTime) {
      var providerType = workInProgress.type;
      var context = providerType._context;
      var newProps = workInProgress.pendingProps;
      var oldProps = workInProgress.memoizedProps;
      var newValue = newProps.value;
      {
        var providerPropTypes = workInProgress.type.propTypes;

        if (providerPropTypes) {
          checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackInDev);
        }
      }
      pushProvider(workInProgress, newValue);

      if (oldProps !== null) {
        var oldValue = oldProps.value;
        var changedBits = calculateChangedBits(context, newValue, oldValue);

        if (changedBits === 0) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && !hasContextChanged()) {
            return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
          }
        } else {
          // The context value changed. Search for matching consumers and schedule
          // them to update.
          propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
        }
      }

      var newChildren = newProps.children;
      reconcileChildren(current$$1, workInProgress, newChildren, renderExpirationTime);
      return workInProgress.child;
    }

    var hasWarnedAboutUsingContextAsConsumer = false;

    function updateContextConsumer(current$$1, workInProgress, renderExpirationTime) {
      var context = workInProgress.type; // The logic below for Context differs depending on PROD or DEV mode. In
      // DEV mode, we create a separate object for Context.Consumer that acts
      // like a proxy to Context. This proxy object adds unnecessary code in PROD
      // so we use the old behaviour (Context.Consumer references Context) to
      // reduce size and overhead. The separate object references context via
      // a property called "_context", which also gives us the ability to check
      // in DEV mode if this property exists or not and warn if it does not.

      {
        if (context._context === undefined) {
          // This may be because it's a Context (rather than a Consumer).
          // Or it may be because it's older React where they're the same thing.
          // We only want to warn if we're sure it's a new React.
          if (context !== context.Consumer) {
            if (!hasWarnedAboutUsingContextAsConsumer) {
              hasWarnedAboutUsingContextAsConsumer = true;
              warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
            }
          }
        } else {
          context = context._context;
        }
      }
      var newProps = workInProgress.pendingProps;
      var render = newProps.children;
      {
        !(typeof render === 'function') ? warningWithoutStack$1(false, 'A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.') : void 0;
      }
      prepareToReadContext(workInProgress, renderExpirationTime);
      var newValue = readContext(context, newProps.unstable_observedBits);
      var newChildren = void 0;
      {
        ReactCurrentOwner$2.current = workInProgress;
        setCurrentPhase('render');
        newChildren = render(newValue);
        setCurrentPhase(null);
      } // React DevTools reads this flag.

      workInProgress.effectTag |= PerformedWork;
      reconcileChildren(current$$1, workInProgress, newChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function updateFundamentalComponent$1(current$$1, workInProgress, renderExpirationTime) {
      var fundamentalImpl = workInProgress.type.impl;

      if (fundamentalImpl.reconcileChildren === false) {
        return null;
      }

      var nextProps = workInProgress.pendingProps;
      var nextChildren = nextProps.children;
      reconcileChildren(current$$1, workInProgress, nextChildren, renderExpirationTime);
      return workInProgress.child;
    }

    function markWorkInProgressReceivedUpdate() {
      didReceiveUpdate = true;
    }

    function bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime) {
      cancelWorkTimer(workInProgress);

      if (current$$1 !== null) {
        // Reuse previous dependencies
        workInProgress.dependencies = current$$1.dependencies;
      }

      if (enableProfilerTimer) {
        // Don't update "base" render times for bailouts.
        stopProfilerTimerIfRunning(workInProgress);
      } // Check if the children have any pending work.


      var childExpirationTime = workInProgress.childExpirationTime;

      if (childExpirationTime < renderExpirationTime) {
        // The children don't have any work either. We can skip them.
        // TODO: Once we add back resuming, we should check if the children are
        // a work-in-progress set. If so, we need to transfer their effects.
        return null;
      } else {
        // This fiber doesn't have work, but its subtree does. Clone the child
        // fibers and continue.
        cloneChildFibers(current$$1, workInProgress);
        return workInProgress.child;
      }
    }

    function remountFiber(current$$1, oldWorkInProgress, newWorkInProgress) {
      {
        var returnFiber = oldWorkInProgress.return;

        if (returnFiber === null) {
          throw new Error('Cannot swap the root fiber.');
        } // Disconnect from the old current.
        // It will get deleted.


        current$$1.alternate = null;
        oldWorkInProgress.alternate = null; // Connect to the new tree.

        newWorkInProgress.index = oldWorkInProgress.index;
        newWorkInProgress.sibling = oldWorkInProgress.sibling;
        newWorkInProgress.return = oldWorkInProgress.return;
        newWorkInProgress.ref = oldWorkInProgress.ref; // Replace the child/sibling pointers above it.

        if (oldWorkInProgress === returnFiber.child) {
          returnFiber.child = newWorkInProgress;
        } else {
          var prevSibling = returnFiber.child;

          if (prevSibling === null) {
            throw new Error('Expected parent to have a child.');
          }

          while (prevSibling.sibling !== oldWorkInProgress) {
            prevSibling = prevSibling.sibling;

            if (prevSibling === null) {
              throw new Error('Expected to find the previous sibling.');
            }
          }

          prevSibling.sibling = newWorkInProgress;
        } // Delete the old fiber and place the new one.
        // Since the old fiber is disconnected, we have to schedule it manually.


        var last = returnFiber.lastEffect;

        if (last !== null) {
          last.nextEffect = current$$1;
          returnFiber.lastEffect = current$$1;
        } else {
          returnFiber.firstEffect = returnFiber.lastEffect = current$$1;
        }

        current$$1.nextEffect = null;
        current$$1.effectTag = Deletion;
        newWorkInProgress.effectTag |= Placement; // Restart work from the new fiber.

        return newWorkInProgress;
      }
    }

    function beginWork$1(current$$1, workInProgress, renderExpirationTime) {
      var updateExpirationTime = workInProgress.expirationTime;
      {
        if (workInProgress._debugNeedsRemount && current$$1 !== null) {
          // This will restart the begin phase with a new fiber.
          return remountFiber(current$$1, workInProgress, createFiberFromTypeAndProps(workInProgress.type, workInProgress.key, workInProgress.pendingProps, workInProgress._debugOwner || null, workInProgress.mode, workInProgress.expirationTime));
        }
      }

      if (current$$1 !== null) {
        var oldProps = current$$1.memoizedProps;
        var newProps = workInProgress.pendingProps;

        if (oldProps !== newProps || hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
        workInProgress.type !== current$$1.type) {
          // If props or context changed, mark the fiber as having performed work.
          // This may be unset if the props are determined to be equal later (memo).
          didReceiveUpdate = true;
        } else if (updateExpirationTime < renderExpirationTime) {
          didReceiveUpdate = false; // This fiber does not have any pending work. Bailout without entering
          // the begin phase. There's still some bookkeeping we that needs to be done
          // in this optimized path, mostly pushing stuff onto the stack.

          switch (workInProgress.tag) {
            case HostRoot:
              pushHostRootContext(workInProgress);
              resetHydrationState();
              break;

            case HostComponent:
              pushHostContext(workInProgress);

              if (workInProgress.mode & ConcurrentMode && renderExpirationTime !== Never && shouldDeprioritizeSubtree(workInProgress.type, newProps)) {
                if (enableSchedulerTracing) {
                  markSpawnedWork(Never);
                } // Schedule this fiber to re-render at offscreen priority. Then bailout.


                workInProgress.expirationTime = workInProgress.childExpirationTime = Never;
                return null;
              }

              break;

            case ClassComponent:
              {
                var Component = workInProgress.type;

                if (isContextProvider(Component)) {
                  pushContextProvider(workInProgress);
                }

                break;
              }

            case HostPortal:
              pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
              break;

            case ContextProvider:
              {
                var newValue = workInProgress.memoizedProps.value;
                pushProvider(workInProgress, newValue);
                break;
              }

            case Profiler:
              if (enableProfilerTimer) {
                workInProgress.effectTag |= Update;
              }

              break;

            case SuspenseComponent:
              {
                var state = workInProgress.memoizedState;
                var didTimeout = state !== null;

                if (didTimeout) {
                  // If this boundary is currently timed out, we need to decide
                  // whether to retry the primary children, or to skip over it and
                  // go straight to the fallback. Check the priority of the primary
                  var primaryChildFragment = workInProgress.child;
                  var primaryChildExpirationTime = primaryChildFragment.childExpirationTime;

                  if (primaryChildExpirationTime !== NoWork && primaryChildExpirationTime >= renderExpirationTime) {
                    // The primary children have pending work. Use the normal path
                    // to attempt to render the primary children again.
                    return updateSuspenseComponent(current$$1, workInProgress, renderExpirationTime);
                  } else {
                    pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // The primary children do not have pending work with sufficient
                    // priority. Bailout.

                    var child = bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);

                    if (child !== null) {
                      // The fallback children have pending work. Skip over the
                      // primary children and work on the fallback.
                      return child.sibling;
                    } else {
                      return null;
                    }
                  }
                } else {
                  pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                }

                break;
              }

            case DehydratedSuspenseComponent:
              {
                if (enableSuspenseServerRenderer) {
                  pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // We know that this component will suspend again because if it has
                  // been unsuspended it has committed as a regular Suspense component.
                  // If it needs to be retried, it should have work scheduled on it.

                  workInProgress.effectTag |= DidCapture;
                }

                break;
              }

            case SuspenseListComponent:
              {
                var didSuspendBefore = (current$$1.effectTag & DidCapture) !== NoEffect;
                var hasChildWork = workInProgress.childExpirationTime >= renderExpirationTime;

                if (didSuspendBefore) {
                  if (hasChildWork) {
                    // If something was in fallback state last time, and we have all the
                    // same children then we're still in progressive loading state.
                    // Something might get unblocked by state updates or retries in the
                    // tree which will affect the tail. So we need to use the normal
                    // path to compute the correct tail.
                    return updateSuspenseListComponent(current$$1, workInProgress, renderExpirationTime);
                  } // If none of the children had any work, that means that none of
                  // them got retried so they'll still be blocked in the same way
                  // as before. We can fast bail out.


                  workInProgress.effectTag |= DidCapture;
                } // If nothing suspended before and we're rendering the same children,
                // then the tail doesn't matter. Anything new that suspends will work
                // in the "together" mode, so we can continue from the state we had.


                var renderState = workInProgress.memoizedState;

                if (renderState !== null) {
                  // Reset to the "together" mode in case we've started a different
                  // update in the past but didn't complete it.
                  renderState.rendering = null;
                  renderState.tail = null;
                }

                pushSuspenseContext(workInProgress, suspenseStackCursor.current);

                if (hasChildWork) {
                  break;
                } else {
                  // If none of the children had any work, that means that none of
                  // them got retried so they'll still be blocked in the same way
                  // as before. We can fast bail out.
                  return null;
                }
              }
          }

          return bailoutOnAlreadyFinishedWork(current$$1, workInProgress, renderExpirationTime);
        }
      } else {
        didReceiveUpdate = false;
      } // Before entering the begin phase, clear the expiration time.


      workInProgress.expirationTime = NoWork;

      switch (workInProgress.tag) {
        case IndeterminateComponent:
          {
            return mountIndeterminateComponent(current$$1, workInProgress, workInProgress.type, renderExpirationTime);
          }

        case LazyComponent:
          {
            var elementType = workInProgress.elementType;
            return mountLazyComponent(current$$1, workInProgress, elementType, updateExpirationTime, renderExpirationTime);
          }

        case FunctionComponent:
          {
            var _Component = workInProgress.type;
            var unresolvedProps = workInProgress.pendingProps;
            var resolvedProps = workInProgress.elementType === _Component ? unresolvedProps : resolveDefaultProps(_Component, unresolvedProps);
            return updateFunctionComponent(current$$1, workInProgress, _Component, resolvedProps, renderExpirationTime);
          }

        case ClassComponent:
          {
            var _Component2 = workInProgress.type;
            var _unresolvedProps = workInProgress.pendingProps;

            var _resolvedProps = workInProgress.elementType === _Component2 ? _unresolvedProps : resolveDefaultProps(_Component2, _unresolvedProps);

            return updateClassComponent(current$$1, workInProgress, _Component2, _resolvedProps, renderExpirationTime);
          }

        case HostRoot:
          return updateHostRoot(current$$1, workInProgress, renderExpirationTime);

        case HostComponent:
          return updateHostComponent(current$$1, workInProgress, renderExpirationTime);

        case HostText:
          return updateHostText(current$$1, workInProgress);

        case SuspenseComponent:
          return updateSuspenseComponent(current$$1, workInProgress, renderExpirationTime);

        case HostPortal:
          return updatePortalComponent(current$$1, workInProgress, renderExpirationTime);

        case ForwardRef:
          {
            var type = workInProgress.type;
            var _unresolvedProps2 = workInProgress.pendingProps;

            var _resolvedProps2 = workInProgress.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);

            return updateForwardRef(current$$1, workInProgress, type, _resolvedProps2, renderExpirationTime);
          }

        case Fragment:
          return updateFragment(current$$1, workInProgress, renderExpirationTime);

        case Mode:
          return updateMode(current$$1, workInProgress, renderExpirationTime);

        case Profiler:
          return updateProfiler(current$$1, workInProgress, renderExpirationTime);

        case ContextProvider:
          return updateContextProvider(current$$1, workInProgress, renderExpirationTime);

        case ContextConsumer:
          return updateContextConsumer(current$$1, workInProgress, renderExpirationTime);

        case MemoComponent:
          {
            var _type2 = workInProgress.type;
            var _unresolvedProps3 = workInProgress.pendingProps; // Resolve outer props first, then resolve inner props.

            var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);

            {
              if (workInProgress.type !== workInProgress.elementType) {
                var outerPropTypes = _type2.propTypes;

                if (outerPropTypes) {
                  checkPropTypes(outerPropTypes, _resolvedProps3, // Resolved for outer only
                  'prop', getComponentName(_type2), getCurrentFiberStackInDev);
                }
              }
            }
            _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
            return updateMemoComponent(current$$1, workInProgress, _type2, _resolvedProps3, updateExpirationTime, renderExpirationTime);
          }

        case SimpleMemoComponent:
          {
            return updateSimpleMemoComponent(current$$1, workInProgress, workInProgress.type, workInProgress.pendingProps, updateExpirationTime, renderExpirationTime);
          }

        case IncompleteClassComponent:
          {
            var _Component3 = workInProgress.type;
            var _unresolvedProps4 = workInProgress.pendingProps;

            var _resolvedProps4 = workInProgress.elementType === _Component3 ? _unresolvedProps4 : resolveDefaultProps(_Component3, _unresolvedProps4);

            return mountIncompleteClassComponent(current$$1, workInProgress, _Component3, _resolvedProps4, renderExpirationTime);
          }

        case DehydratedSuspenseComponent:
          {
            if (enableSuspenseServerRenderer) {
              return updateDehydratedSuspenseComponent(current$$1, workInProgress, renderExpirationTime);
            }

            break;
          }

        case SuspenseListComponent:
          {
            return updateSuspenseListComponent(current$$1, workInProgress, renderExpirationTime);
          }

        case FundamentalComponent:
          {
            if (enableFundamentalAPI) {
              return updateFundamentalComponent$1(current$$1, workInProgress, renderExpirationTime);
            }

            break;
          }
      }

      (function () {
        {
          {
            throw ReactError(Error('Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })();
    }

    function createFundamentalStateInstance(currentFiber, props, impl, state) {
      return {
        currentFiber: currentFiber,
        impl: impl,
        instance: null,
        prevProps: null,
        props: props,
        state: state
      };
    }

    var emptyObject = {};
    var isArray$2 = Array.isArray;

    function markUpdate(workInProgress) {
      // Tag the fiber with an update effect. This turns a Placement into
      // a PlacementAndUpdate.
      workInProgress.effectTag |= Update;
    }

    function markRef$1(workInProgress) {
      workInProgress.effectTag |= Ref;
    }

    var appendAllChildren = void 0;
    var updateHostContainer = void 0;
    var updateHostComponent$1 = void 0;
    var updateHostText$1 = void 0;

    if (supportsMutation) {
      // Mutation mode
      appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
        // We only have the top Fiber that was created but we need recurse down its
        // children to find all the terminal nodes.
        var node = workInProgress.child;

        while (node !== null) {
          if (node.tag === HostComponent || node.tag === HostText) {
            appendInitialChild(parent, node.stateNode);
          } else if (node.tag === FundamentalComponent) {
            appendInitialChild(parent, node.stateNode.instance);
          } else if (node.tag === HostPortal) {// If we have a portal child, then we don't want to traverse
            // down its children. Instead, we'll get insertions from each child in
            // the portal directly.
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === workInProgress) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      };

      updateHostContainer = function (workInProgress) {// Noop
      };

      updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
        // If we have an alternate, that means this is an update and we need to
        // schedule a side-effect to do the updates.
        var oldProps = current.memoizedProps;

        if (oldProps === newProps) {
          // In mutation mode, this is sufficient for a bailout because
          // we won't touch this node even if children changed.
          return;
        } // If we get updated because one of our children updated, we don't
        // have newProps so we'll have to reuse them.
        // TODO: Split the update API as separate for the props vs. children.
        // Even better would be if children weren't special cased at all tho.


        var instance = workInProgress.stateNode;
        var currentHostContext = getHostContext(); // TODO: Experiencing an error where oldProps is null. Suggests a host
        // component is hitting the resume path. Figure out why. Possibly
        // related to `hidden`.

        var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext); // TODO: Type this specific to this type of component.

        workInProgress.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
        // is a new ref we mark this as an update. All the work is done in commitWork.

        if (updatePayload) {
          markUpdate(workInProgress);
        }
      };

      updateHostText$1 = function (current, workInProgress, oldText, newText) {
        // If the text differs, mark it as an update. All the work in done in commitWork.
        if (oldText !== newText) {
          markUpdate(workInProgress);
        }
      };
    } else if (supportsPersistence) {
      // Persistent host tree mode
      appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
        // We only have the top Fiber that was created but we need recurse down its
        // children to find all the terminal nodes.
        var node = workInProgress.child;

        while (node !== null) {
          // eslint-disable-next-line no-labels
          branches: if (node.tag === HostComponent) {
            var instance = node.stateNode;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var props = node.memoizedProps;
              var type = node.type;
              instance = cloneHiddenInstance(instance, type, props, node);
            }

            appendInitialChild(parent, instance);
          } else if (node.tag === HostText) {
            var _instance = node.stateNode;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var text = node.memoizedProps;
              _instance = cloneHiddenTextInstance(_instance, text, node);
            }

            appendInitialChild(parent, _instance);
          } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
            var _instance2 = node.stateNode.instance;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var _props = node.memoizedProps;
              var _type = node.type;
              _instance2 = cloneHiddenInstance(_instance2, _type, _props, node);
            }

            appendInitialChild(parent, _instance2);
          } else if (node.tag === HostPortal) {// If we have a portal child, then we don't want to traverse
            // down its children. Instead, we'll get insertions from each child in
            // the portal directly.
          } else if (node.tag === SuspenseComponent) {
            if ((node.effectTag & Update) !== NoEffect) {
              // Need to toggle the visibility of the primary children.
              var newIsHidden = node.memoizedState !== null;

              if (newIsHidden) {
                var primaryChildParent = node.child;

                if (primaryChildParent !== null) {
                  if (primaryChildParent.child !== null) {
                    primaryChildParent.child.return = primaryChildParent;
                    appendAllChildren(parent, primaryChildParent, true, newIsHidden);
                  }

                  var fallbackChildParent = primaryChildParent.sibling;

                  if (fallbackChildParent !== null) {
                    fallbackChildParent.return = node;
                    node = fallbackChildParent;
                    continue;
                  }
                }
              }
            }

            if (node.child !== null) {
              // Continue traversing like normal
              node.child.return = node;
              node = node.child;
              continue;
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          } // $FlowFixMe This is correct but Flow is confused by the labeled break.


          node = node;

          if (node === workInProgress) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }; // An unfortunate fork of appendAllChildren because we have two different parent types.


      var appendAllChildrenToContainer = function (containerChildSet, workInProgress, needsVisibilityToggle, isHidden) {
        // We only have the top Fiber that was created but we need recurse down its
        // children to find all the terminal nodes.
        var node = workInProgress.child;

        while (node !== null) {
          // eslint-disable-next-line no-labels
          branches: if (node.tag === HostComponent) {
            var instance = node.stateNode;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var props = node.memoizedProps;
              var type = node.type;
              instance = cloneHiddenInstance(instance, type, props, node);
            }

            appendChildToContainerChildSet(containerChildSet, instance);
          } else if (node.tag === HostText) {
            var _instance3 = node.stateNode;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var text = node.memoizedProps;
              _instance3 = cloneHiddenTextInstance(_instance3, text, node);
            }

            appendChildToContainerChildSet(containerChildSet, _instance3);
          } else if (enableFundamentalAPI && node.tag === FundamentalComponent) {
            var _instance4 = node.stateNode.instance;

            if (needsVisibilityToggle && isHidden) {
              // This child is inside a timed out tree. Hide it.
              var _props2 = node.memoizedProps;
              var _type2 = node.type;
              _instance4 = cloneHiddenInstance(_instance4, _type2, _props2, node);
            }

            appendChildToContainerChildSet(containerChildSet, _instance4);
          } else if (node.tag === HostPortal) {// If we have a portal child, then we don't want to traverse
            // down its children. Instead, we'll get insertions from each child in
            // the portal directly.
          } else if (node.tag === SuspenseComponent) {
            if ((node.effectTag & Update) !== NoEffect) {
              // Need to toggle the visibility of the primary children.
              var newIsHidden = node.memoizedState !== null;

              if (newIsHidden) {
                var primaryChildParent = node.child;

                if (primaryChildParent !== null) {
                  if (primaryChildParent.child !== null) {
                    primaryChildParent.child.return = primaryChildParent;
                    appendAllChildrenToContainer(containerChildSet, primaryChildParent, true, newIsHidden);
                  }

                  var fallbackChildParent = primaryChildParent.sibling;

                  if (fallbackChildParent !== null) {
                    fallbackChildParent.return = node;
                    node = fallbackChildParent;
                    continue;
                  }
                }
              }
            }

            if (node.child !== null) {
              // Continue traversing like normal
              node.child.return = node;
              node = node.child;
              continue;
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          } // $FlowFixMe This is correct but Flow is confused by the labeled break.


          node = node;

          if (node === workInProgress) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      };

      updateHostContainer = function (workInProgress) {
        var portalOrRoot = workInProgress.stateNode;
        var childrenUnchanged = workInProgress.firstEffect === null;

        if (childrenUnchanged) {// No changes, just reuse the existing instance.
        } else {
          var container = portalOrRoot.containerInfo;
          var newChildSet = createContainerChildSet(container); // If children might have changed, we have to add them all to the set.

          appendAllChildrenToContainer(newChildSet, workInProgress, false, false);
          portalOrRoot.pendingChildren = newChildSet; // Schedule an update on the container to swap out the container.

          markUpdate(workInProgress);
          finalizeContainerChildren(container, newChildSet);
        }
      };

      updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
        var currentInstance = current.stateNode;
        var oldProps = current.memoizedProps; // If there are no effects associated with this node, then none of our children had any updates.
        // This guarantees that we can reuse all of them.

        var childrenUnchanged = workInProgress.firstEffect === null;

        if (childrenUnchanged && oldProps === newProps) {
          // No changes, just reuse the existing instance.
          // Note that this might release a previous clone.
          workInProgress.stateNode = currentInstance;
          return;
        }

        var recyclableInstance = workInProgress.stateNode;
        var currentHostContext = getHostContext();
        var updatePayload = null;

        if (oldProps !== newProps) {
          updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
        }

        if (childrenUnchanged && updatePayload === null) {
          // No changes, just reuse the existing instance.
          // Note that this might release a previous clone.
          workInProgress.stateNode = currentInstance;
          return;
        }

        var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);

        if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
          markUpdate(workInProgress);
        }

        workInProgress.stateNode = newInstance;

        if (childrenUnchanged) {
          // If there are no other effects in this tree, we need to flag this node as having one.
          // Even though we're not going to use it for anything.
          // Otherwise parents won't know that there are new children to propagate upwards.
          markUpdate(workInProgress);
        } else {
          // If children might have changed, we have to add them all to the set.
          appendAllChildren(newInstance, workInProgress, false, false);
        }
      };

      updateHostText$1 = function (current, workInProgress, oldText, newText) {
        if (oldText !== newText) {
          // If the text content differs, we'll create a new text instance for it.
          var rootContainerInstance = getRootHostContainer();
          var currentHostContext = getHostContext();
          workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress); // We'll have to mark it as having an effect, even though we won't use the effect for anything.
          // This lets the parents know that at least one of their children has changed.

          markUpdate(workInProgress);
        }
      };
    } else {
      // No host operations
      updateHostContainer = function (workInProgress) {// Noop
      };

      updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {// Noop
      };

      updateHostText$1 = function (current, workInProgress, oldText, newText) {// Noop
      };
    }

    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      switch (renderState.tailMode) {
        case 'hidden':
          {
            // Any insertions at the end of the tail list after this point
            // should be invisible. If there are already mounted boundaries
            // anything before them are not considered for collapsing.
            // Therefore we need to go through the whole tail to find if
            // there are any.
            var tailNode = renderState.tail;
            var lastTailNode = null;

            while (tailNode !== null) {
              if (tailNode.alternate !== null) {
                lastTailNode = tailNode;
              }

              tailNode = tailNode.sibling;
            } // Next we're simply going to delete all insertions after the
            // last rendered item.


            if (lastTailNode === null) {
              // All remaining items in the tail are insertions.
              renderState.tail = null;
            } else {
              // Detach the insertion after the last node that was already
              // inserted.
              lastTailNode.sibling = null;
            }

            break;
          }

        case 'collapsed':
          {
            // Any insertions at the end of the tail list after this point
            // should be invisible. If there are already mounted boundaries
            // anything before them are not considered for collapsing.
            // Therefore we need to go through the whole tail to find if
            // there are any.
            var _tailNode = renderState.tail;
            var _lastTailNode = null;

            while (_tailNode !== null) {
              if (_tailNode.alternate !== null) {
                _lastTailNode = _tailNode;
              }

              _tailNode = _tailNode.sibling;
            } // Next we're simply going to delete all insertions after the
            // last rendered item.


            if (_lastTailNode === null) {
              // All remaining items in the tail are insertions.
              if (!hasRenderedATailFallback && renderState.tail !== null) {
                // We suspended during the head. We want to show at least one
                // row at the tail. So we'll keep on and cut off the rest.
                renderState.tail.sibling = null;
              } else {
                renderState.tail = null;
              }
            } else {
              // Detach the insertion after the last node that was already
              // inserted.
              _lastTailNode.sibling = null;
            }

            break;
          }
      }
    }

    function completeWork(current, workInProgress, renderExpirationTime) {
      var newProps = workInProgress.pendingProps;

      switch (workInProgress.tag) {
        case IndeterminateComponent:
          break;

        case LazyComponent:
          break;

        case SimpleMemoComponent:
        case FunctionComponent:
          break;

        case ClassComponent:
          {
            var Component = workInProgress.type;

            if (isContextProvider(Component)) {
              popContext(workInProgress);
            }

            break;
          }

        case HostRoot:
          {
            popHostContainer(workInProgress);
            popTopLevelContextObject(workInProgress);
            var fiberRoot = workInProgress.stateNode;

            if (fiberRoot.pendingContext) {
              fiberRoot.context = fiberRoot.pendingContext;
              fiberRoot.pendingContext = null;
            }

            if (current === null || current.child === null) {
              // If we hydrated, pop so that we can delete any remaining children
              // that weren't hydrated.
              popHydrationState(workInProgress); // This resets the hacky state to fix isMounted before committing.
              // TODO: Delete this when we delete isMounted and findDOMNode.

              workInProgress.effectTag &= ~Placement;
            }

            updateHostContainer(workInProgress);
            break;
          }

        case HostComponent:
          {
            popHostContext(workInProgress);
            var rootContainerInstance = getRootHostContainer();
            var type = workInProgress.type;

            if (current !== null && workInProgress.stateNode != null) {
              updateHostComponent$1(current, workInProgress, type, newProps, rootContainerInstance);

              if (enableFlareAPI) {
                var prevListeners = current.memoizedProps.listeners;
                var nextListeners = newProps.listeners;
                var instance = workInProgress.stateNode;

                if (prevListeners !== nextListeners) {
                  updateEventListeners(nextListeners, instance, rootContainerInstance, workInProgress);
                }
              }

              if (current.ref !== workInProgress.ref) {
                markRef$1(workInProgress);
              }
            } else {
              if (!newProps) {
                (function () {
                  if (!(workInProgress.stateNode !== null)) {
                    {
                      throw ReactError(Error('We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'));
                    }
                  }
                })(); // This can happen when we abort work.


                break;
              }

              var currentHostContext = getHostContext(); // TODO: Move createInstance to beginWork and keep it on a context
              // "stack" as the parent. Then append children as we go in beginWork
              // or completeWork depending on we want to add then top->down or
              // bottom->up. Top->down is faster in IE11.

              var wasHydrated = popHydrationState(workInProgress);

              if (wasHydrated) {
                // TODO: Move this and createInstance step into the beginPhase
                // to consolidate.
                if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, currentHostContext)) {
                  // If changes to the hydrated node needs to be applied at the
                  // commit-phase we mark this as such.
                  markUpdate(workInProgress);
                }
              } else {
                var _instance5 = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress);

                appendAllChildren(_instance5, workInProgress, false, false);

                if (enableFlareAPI) {
                  var listeners = newProps.listeners;

                  if (listeners != null) {
                    updateEventListeners(listeners, _instance5, rootContainerInstance, workInProgress);
                  }
                } // Certain renderers require commit-time effects for initial mount.
                // (eg DOM renderer supports auto-focus for certain elements).
                // Make sure such renderers get scheduled for later work.


                if (finalizeInitialChildren(_instance5, type, newProps, rootContainerInstance, currentHostContext)) {
                  markUpdate(workInProgress);
                }

                workInProgress.stateNode = _instance5;
              }

              if (workInProgress.ref !== null) {
                // If there is a ref on a host node we need to schedule a callback
                markRef$1(workInProgress);
              }
            }

            break;
          }

        case HostText:
          {
            var newText = newProps;

            if (current && workInProgress.stateNode != null) {
              var oldText = current.memoizedProps; // If we have an alternate, that means this is an update and we need
              // to schedule a side-effect to do the updates.

              updateHostText$1(current, workInProgress, oldText, newText);
            } else {
              if (typeof newText !== 'string') {
                (function () {
                  if (!(workInProgress.stateNode !== null)) {
                    {
                      throw ReactError(Error('We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'));
                    }
                  }
                })(); // This can happen when we abort work.

              }

              var _rootContainerInstance = getRootHostContainer();

              var _currentHostContext = getHostContext();

              var _wasHydrated = popHydrationState(workInProgress);

              if (_wasHydrated) {
                if (prepareToHydrateHostTextInstance(workInProgress)) {
                  markUpdate(workInProgress);
                }
              } else {
                workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress);
              }
            }

            break;
          }

        case ForwardRef:
          break;

        case SuspenseComponent:
          {
            popSuspenseContext(workInProgress);
            var nextState = workInProgress.memoizedState;

            if ((workInProgress.effectTag & DidCapture) !== NoEffect) {
              // Something suspended. Re-render with the fallback children.
              workInProgress.expirationTime = renderExpirationTime; // Do not reset the effect list.

              return workInProgress;
            }

            var nextDidTimeout = nextState !== null;
            var prevDidTimeout = false;

            if (current === null) {
              // In cases where we didn't find a suitable hydration boundary we never
              // downgraded this to a DehydratedSuspenseComponent, but we still need to
              // pop the hydration state since we might be inside the insertion tree.
              popHydrationState(workInProgress);
            } else {
              var prevState = current.memoizedState;
              prevDidTimeout = prevState !== null;

              if (!nextDidTimeout && prevState !== null) {
                // We just switched from the fallback to the normal children.
                // Delete the fallback.
                // TODO: Would it be better to store the fallback fragment on
                var currentFallbackChild = current.child.sibling;

                if (currentFallbackChild !== null) {
                  // Deletions go at the beginning of the return fiber's effect list
                  var first = workInProgress.firstEffect;

                  if (first !== null) {
                    workInProgress.firstEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = first;
                  } else {
                    workInProgress.firstEffect = workInProgress.lastEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = null;
                  }

                  currentFallbackChild.effectTag = Deletion;
                }
              }
            }

            if (nextDidTimeout && !prevDidTimeout) {
              // If this subtreee is running in batched mode we can suspend,
              // otherwise we won't suspend.
              // TODO: This will still suspend a synchronous tree if anything
              // in the concurrent tree already suspended during this render.
              // This is a known bug.
              if ((workInProgress.mode & BatchedMode) !== NoMode) {
                // TODO: Move this back to throwException because this is too late
                // if this is a large tree which is common for initial loads. We
                // don't know if we should restart a render or not until we get
                // this marker, and this is too late.
                // If this render already had a ping or lower pri updates,
                // and this is the first time we know we're going to suspend we
                // should be able to immediately restart from within throwException.
                var hasInvisibleChildContext = current === null && workInProgress.memoizedProps.unstable_avoidThisFallback !== true;

                if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                  // If this was in an invisible tree or a new render, then showing
                  // this boundary is ok.
                  renderDidSuspend();
                } else {
                  // Otherwise, we're going to have to hide content so we should
                  // suspend for longer if possible.
                  renderDidSuspendDelayIfPossible();
                }
              }
            }

            if (supportsPersistence) {
              // TODO: Only schedule updates if not prevDidTimeout.
              if (nextDidTimeout) {
                // If this boundary just timed out, schedule an effect to attach a
                // retry listener to the proimse. This flag is also used to hide the
                // primary children.
                workInProgress.effectTag |= Update;
              }
            }

            if (supportsMutation) {
              // TODO: Only schedule updates if these values are non equal, i.e. it changed.
              if (nextDidTimeout || prevDidTimeout) {
                // If this boundary just timed out, schedule an effect to attach a
                // retry listener to the proimse. This flag is also used to hide the
                // primary children. In mutation mode, we also need the flag to
                // *unhide* children that were previously hidden, so check if the
                // is currently timed out, too.
                workInProgress.effectTag |= Update;
              }
            }

            if (enableSuspenseCallback && workInProgress.updateQueue !== null && workInProgress.memoizedProps.suspenseCallback != null) {
              // Always notify the callback
              workInProgress.effectTag |= Update;
            }

            break;
          }

        case Fragment:
          break;

        case Mode:
          break;

        case Profiler:
          break;

        case HostPortal:
          popHostContainer(workInProgress);
          updateHostContainer(workInProgress);
          break;

        case ContextProvider:
          // Pop provider fiber
          popProvider(workInProgress);
          break;

        case ContextConsumer:
          break;

        case MemoComponent:
          break;

        case IncompleteClassComponent:
          {
            // Same as class component case. I put it down here so that the tags are
            // sequential to ensure this switch is compiled to a jump table.
            var _Component = workInProgress.type;

            if (isContextProvider(_Component)) {
              popContext(workInProgress);
            }

            break;
          }

        case DehydratedSuspenseComponent:
          {
            if (enableSuspenseServerRenderer) {
              popSuspenseContext(workInProgress);

              if (current === null) {
                var _wasHydrated2 = popHydrationState(workInProgress);

                (function () {
                  if (!_wasHydrated2) {
                    {
                      throw ReactError(Error('A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'));
                    }
                  }
                })();

                if (enableSchedulerTracing) {
                  markSpawnedWork(Never);
                }

                skipPastDehydratedSuspenseInstance(workInProgress);
              } else if ((workInProgress.effectTag & DidCapture) === NoEffect) {
                // This boundary did not suspend so it's now hydrated.
                // To handle any future suspense cases, we're going to now upgrade it
                // to a Suspense component. We detach it from the existing current fiber.
                current.alternate = null;
                workInProgress.alternate = null;
                workInProgress.tag = SuspenseComponent;
                workInProgress.memoizedState = null;
                workInProgress.stateNode = null;
              }
            }

            break;
          }

        case SuspenseListComponent:
          {
            popSuspenseContext(workInProgress);
            var renderState = workInProgress.memoizedState;

            if (renderState === null) {
              // We're running in the default, "independent" mode. We don't do anything
              // in this mode.
              break;
            }

            var didSuspendAlready = (workInProgress.effectTag & DidCapture) !== NoEffect;
            var renderedTail = renderState.rendering;

            if (renderedTail === null) {
              // We just rendered the head.
              if (!didSuspendAlready) {
                // This is the first pass. We need to figure out if anything is still
                // suspended in the rendered set.
                // If new content unsuspended, but there's still some content that
                // didn't. Then we need to do a second pass that forces everything
                // to keep showing their fallbacks.
                // We might be suspended if something in this render pass suspended, or
                // something in the previous committed pass suspended. Otherwise,
                // there's no chance so we can skip the expensive call to
                // findFirstSuspended.
                var cannotBeSuspended = renderHasNotSuspendedYet() && (current === null || (current.effectTag & DidCapture) === NoEffect);

                if (!cannotBeSuspended) {
                  var row = workInProgress.child;

                  while (row !== null) {
                    var suspended = findFirstSuspended(row);

                    if (suspended !== null) {
                      didSuspendAlready = true;
                      workInProgress.effectTag |= DidCapture;
                      cutOffTailIfNeeded(renderState, false); // If this is a newly suspended tree, it might not get committed as
                      // part of the second pass. In that case nothing will subscribe to
                      // its thennables. Instead, we'll transfer its thennables to the
                      // SuspenseList so that it can retry if they resolve.
                      // There might be multiple of these in the list but since we're
                      // going to wait for all of them anyway, it doesn't really matter
                      // which ones gets to ping. In theory we could get clever and keep
                      // track of how many dependencies remain but it gets tricky because
                      // in the meantime, we can add/remove/change items and dependencies.
                      // We might bail out of the loop before finding any but that
                      // doesn't matter since that means that the other boundaries that
                      // we did find already has their listeners attached.

                      var newThennables = suspended.updateQueue;

                      if (newThennables !== null) {
                        workInProgress.updateQueue = newThennables;
                        workInProgress.effectTag |= Update;
                      } // Rerender the whole list, but this time, we'll force fallbacks
                      // to stay in place.
                      // Reset the effect list before doing the second pass since that's now invalid.


                      workInProgress.firstEffect = workInProgress.lastEffect = null; // Reset the child fibers to their original state.

                      resetChildFibers(workInProgress, renderExpirationTime); // Set up the Suspense Context to force suspense and immediately
                      // rerender the children.

                      pushSuspenseContext(workInProgress, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                      return workInProgress.child;
                    }

                    row = row.sibling;
                  }
                }
              } else {
                cutOffTailIfNeeded(renderState, false);
              } // Next we're going to render the tail.

            } else {
              // Append the rendered row to the child list.
              if (!didSuspendAlready) {
                var _suspended = findFirstSuspended(renderedTail);

                if (_suspended !== null) {
                  workInProgress.effectTag |= DidCapture;
                  didSuspendAlready = true;
                  cutOffTailIfNeeded(renderState, true); // This might have been modified.

                  if (renderState.tail === null && renderState.tailMode === 'hidden') {
                    // We need to delete the row we just rendered.
                    // Ensure we transfer the update queue to the parent.
                    var _newThennables = _suspended.updateQueue;

                    if (_newThennables !== null) {
                      workInProgress.updateQueue = _newThennables;
                      workInProgress.effectTag |= Update;
                    } // Reset the effect list to what it w as before we rendered this
                    // child. The nested children have already appended themselves.


                    var lastEffect = workInProgress.lastEffect = renderState.lastEffect; // Remove any effects that were appended after this point.

                    if (lastEffect !== null) {
                      lastEffect.nextEffect = null;
                    } // We're done.


                    return null;
                  }
                } else if (now$1() > renderState.tailExpiration && renderExpirationTime > Never) {
                  // We have now passed our CPU deadline and we'll just give up further
                  // attempts to render the main content and only render fallbacks.
                  // The assumption is that this is usually faster.
                  workInProgress.effectTag |= DidCapture;
                  didSuspendAlready = true;
                  cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
                  // to get it started back up to attempt the next item. If we can show
                  // them, then they really have the same priority as this render.
                  // So we'll pick it back up the very next render pass once we've had
                  // an opportunity to yield for paint.

                  var nextPriority = renderExpirationTime - 1;
                  workInProgress.expirationTime = workInProgress.childExpirationTime = nextPriority;

                  if (enableSchedulerTracing) {
                    markSpawnedWork(nextPriority);
                  }
                }
              }

              if (renderState.isBackwards) {
                // The effect list of the backwards tail will have been added
                // to the end. This breaks the guarantee that life-cycles fire in
                // sibling order but that isn't a strong guarantee promised by React.
                // Especially since these might also just pop in during future commits.
                // Append to the beginning of the list.
                renderedTail.sibling = workInProgress.child;
                workInProgress.child = renderedTail;
              } else {
                var previousSibling = renderState.last;

                if (previousSibling !== null) {
                  previousSibling.sibling = renderedTail;
                } else {
                  workInProgress.child = renderedTail;
                }

                renderState.last = renderedTail;
              }
            }

            if (renderState.tail !== null) {
              // We still have tail rows to render.
              if (renderState.tailExpiration === 0) {
                // Heuristic for how long we're willing to spend rendering rows
                // until we just give up and show what we have so far.
                var TAIL_EXPIRATION_TIMEOUT_MS = 500;
                renderState.tailExpiration = now$1() + TAIL_EXPIRATION_TIMEOUT_MS;
              } // Pop a row.


              var next = renderState.tail;
              renderState.rendering = next;
              renderState.tail = next.sibling;
              renderState.lastEffect = workInProgress.lastEffect;
              next.sibling = null; // Restore the context.
              // TODO: We can probably just avoid popping it instead and only
              // setting it the first time we go from not suspended to suspended.

              var suspenseContext = suspenseStackCursor.current;

              if (didSuspendAlready) {
                suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
              } else {
                suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
              }

              pushSuspenseContext(workInProgress, suspenseContext); // Do a pass over the next row.

              return next;
            }

            break;
          }

        case FundamentalComponent:
          {
            if (enableFundamentalAPI) {
              var fundamentalImpl = workInProgress.type.impl;
              var fundamentalInstance = workInProgress.stateNode;

              if (fundamentalInstance === null) {
                var getInitialState = fundamentalImpl.getInitialState;
                var fundamentalState = void 0;

                if (getInitialState !== undefined) {
                  fundamentalState = getInitialState(newProps);
                }

                fundamentalInstance = workInProgress.stateNode = createFundamentalStateInstance(workInProgress, newProps, fundamentalImpl, fundamentalState || {});

                var _instance6 = getFundamentalComponentInstance(fundamentalInstance);

                fundamentalInstance.instance = _instance6;

                if (fundamentalImpl.reconcileChildren === false) {
                  return null;
                }

                appendAllChildren(_instance6, workInProgress, false, false);
                mountFundamentalComponent(fundamentalInstance);
              } else {
                // We fire update in commit phase
                var prevProps = fundamentalInstance.props;
                fundamentalInstance.prevProps = prevProps;
                fundamentalInstance.props = newProps;
                fundamentalInstance.currentFiber = workInProgress;

                if (supportsPersistence) {
                  var _instance7 = cloneFundamentalInstance(fundamentalInstance);

                  fundamentalInstance.instance = _instance7;
                  appendAllChildren(_instance7, workInProgress, false, false);
                }

                var shouldUpdate = shouldUpdateFundamentalComponent(fundamentalInstance);

                if (shouldUpdate) {
                  markUpdate(workInProgress);
                }
              }
            }

            break;
          }

        default:
          (function () {
            {
              {
                throw ReactError(Error('Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.'));
              }
            }
          })();

      }

      return null;
    }

    function mountEventResponder(responder, responderProps, instance, rootContainerInstance, fiber, respondersMap) {
      var responderState = emptyObject;
      var getInitialState = responder.getInitialState;

      if (getInitialState !== null) {
        responderState = getInitialState(responderProps);
      }

      var responderInstance = createResponderInstance(responder, responderProps, responderState, instance, fiber);
      mountResponderInstance(responder, responderInstance, responderProps, responderState, instance, rootContainerInstance);
      respondersMap.set(responder, responderInstance);
    }

    function updateEventListener(listener, fiber, visistedResponders, respondersMap, instance, rootContainerInstance) {
      var responder = void 0;
      var props = void 0;

      if (listener) {
        responder = listener.responder;
        props = listener.props;
      }

      (function () {
        if (!(responder && responder.$$typeof === REACT_RESPONDER_TYPE)) {
          {
            throw ReactError(Error('An invalid value was used as an event listener. Expect one or many event listeners created via React.unstable_useResponer().'));
          }
        }
      })();

      var listenerProps = props;

      if (visistedResponders.has(responder)) {
        // show warning
        {
          warning$1(false, 'Duplicate event responder "%s" found in event listeners. ' + 'Event listeners passed to elements cannot use the same event responder more than once.', responder.displayName);
        }
        return;
      }

      visistedResponders.add(responder);
      var responderInstance = respondersMap.get(responder);

      if (responderInstance === undefined) {
        // Mount
        mountEventResponder(responder, listenerProps, instance, rootContainerInstance, fiber, respondersMap);
      } else {
        // Update
        responderInstance.props = listenerProps;
        responderInstance.fiber = fiber;
      }
    }

    function updateEventListeners(listeners, instance, rootContainerInstance, fiber) {
      var visistedResponders = new Set();
      var dependencies = fiber.dependencies;

      if (listeners != null) {
        if (dependencies === null) {
          dependencies = fiber.dependencies = {
            expirationTime: NoWork,
            firstContext: null,
            responders: new Map()
          };
        }

        var respondersMap = dependencies.responders;

        if (respondersMap === null) {
          respondersMap = new Map();
        }

        if (isArray$2(listeners)) {
          for (var i = 0, length = listeners.length; i < length; i++) {
            var listener = listeners[i];
            updateEventListener(listener, fiber, visistedResponders, respondersMap, instance, rootContainerInstance);
          }
        } else {
          updateEventListener(listeners, fiber, visistedResponders, respondersMap, instance, rootContainerInstance);
        }
      }

      if (dependencies !== null) {
        var _respondersMap = dependencies.responders;

        if (_respondersMap !== null) {
          // Unmount
          var mountedResponders = Array.from(_respondersMap.keys());

          for (var _i = 0, _length = mountedResponders.length; _i < _length; _i++) {
            var mountedResponder = mountedResponders[_i];

            if (!visistedResponders.has(mountedResponder)) {
              var responderInstance = _respondersMap.get(mountedResponder);

              unmountResponderInstance(responderInstance);

              _respondersMap.delete(mountedResponder);
            }
          }
        }
      }
    }

    function unwindWork(workInProgress, renderExpirationTime) {
      switch (workInProgress.tag) {
        case ClassComponent:
          {
            var Component = workInProgress.type;

            if (isContextProvider(Component)) {
              popContext(workInProgress);
            }

            var effectTag = workInProgress.effectTag;

            if (effectTag & ShouldCapture) {
              workInProgress.effectTag = effectTag & ~ShouldCapture | DidCapture;
              return workInProgress;
            }

            return null;
          }

        case HostRoot:
          {
            popHostContainer(workInProgress);
            popTopLevelContextObject(workInProgress);
            var _effectTag = workInProgress.effectTag;

            (function () {
              if (!((_effectTag & DidCapture) === NoEffect)) {
                {
                  throw ReactError(Error('The root failed to unmount after an error. This is likely a bug in React. Please file an issue.'));
                }
              }
            })();

            workInProgress.effectTag = _effectTag & ~ShouldCapture | DidCapture;
            return workInProgress;
          }

        case HostComponent:
          {
            // TODO: popHydrationState
            popHostContext(workInProgress);
            return null;
          }

        case SuspenseComponent:
          {
            popSuspenseContext(workInProgress);
            var _effectTag2 = workInProgress.effectTag;

            if (_effectTag2 & ShouldCapture) {
              workInProgress.effectTag = _effectTag2 & ~ShouldCapture | DidCapture; // Captured a suspense effect. Re-render the boundary.

              return workInProgress;
            }

            return null;
          }

        case DehydratedSuspenseComponent:
          {
            if (enableSuspenseServerRenderer) {
              // TODO: popHydrationState
              popSuspenseContext(workInProgress);
              var _effectTag3 = workInProgress.effectTag;

              if (_effectTag3 & ShouldCapture) {
                workInProgress.effectTag = _effectTag3 & ~ShouldCapture | DidCapture; // Captured a suspense effect. Re-render the boundary.

                return workInProgress;
              }
            }

            return null;
          }

        case SuspenseListComponent:
          {
            popSuspenseContext(workInProgress); // SuspenseList doesn't actually catch anything. It should've been
            // caught by a nested boundary. If not, it should bubble through.

            return null;
          }

        case HostPortal:
          popHostContainer(workInProgress);
          return null;

        case ContextProvider:
          popProvider(workInProgress);
          return null;

        default:
          return null;
      }
    }

    function unwindInterruptedWork(interruptedWork) {
      switch (interruptedWork.tag) {
        case ClassComponent:
          {
            var childContextTypes = interruptedWork.type.childContextTypes;

            if (childContextTypes !== null && childContextTypes !== undefined) {
              popContext(interruptedWork);
            }

            break;
          }

        case HostRoot:
          {
            popHostContainer(interruptedWork);
            popTopLevelContextObject(interruptedWork);
            break;
          }

        case HostComponent:
          {
            popHostContext(interruptedWork);
            break;
          }

        case HostPortal:
          popHostContainer(interruptedWork);
          break;

        case SuspenseComponent:
          popSuspenseContext(interruptedWork);
          break;

        case DehydratedSuspenseComponent:
          if (enableSuspenseServerRenderer) {
            // TODO: popHydrationState
            popSuspenseContext(interruptedWork);
          }

          break;

        case SuspenseListComponent:
          popSuspenseContext(interruptedWork);
          break;

        case ContextProvider:
          popProvider(interruptedWork);
          break;

        default:
          break;
      }
    }

    function createCapturedValue(value, source) {
      // If the value is an error, call this function immediately after it is thrown
      // so the stack is accurate.
      return {
        value: value,
        source: source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }

    var invokeGuardedCallbackImpl = function (name, func, context, a, b, c, d, e, f) {
      var funcArgs = Array.prototype.slice.call(arguments, 3);

      try {
        func.apply(context, funcArgs);
      } catch (error) {
        this.onError(error);
      }
    };

    {
      // In DEV mode, we swap out invokeGuardedCallback for a special version
      // that plays more nicely with the browser's DevTools. The idea is to preserve
      // "Pause on exceptions" behavior. Because React wraps all user-provided
      // functions in invokeGuardedCallback, and the production version of
      // invokeGuardedCallback uses a try-catch, all user exceptions are treated
      // like caught exceptions, and the DevTools won't pause unless the developer
      // takes the extra step of enabling pause on caught exceptions. This is
      // unintuitive, though, because even though React has caught the error, from
      // the developer's perspective, the error is uncaught.
      //
      // To preserve the expected "Pause on exceptions" behavior, we don't use a
      // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
      // DOM node, and call the user-provided callback from inside an event handler
      // for that fake event. If the callback throws, the error is "captured" using
      // a global event handler. But because the error happens in a different
      // event loop context, it does not interrupt the normal program flow.
      // Effectively, this gives us try-catch behavior without actually using
      // try-catch. Neat!
      // Check that the browser supports the APIs we need to implement our special
      // DEV version of invokeGuardedCallback
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
        var fakeNode = document.createElement('react');

        var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
          // If document doesn't exist we know for sure we will crash in this method
          // when we call document.createEvent(). However this can cause confusing
          // errors: https://github.com/facebookincubator/create-react-app/issues/3482
          // So we preemptively throw with a better message instead.
          (function () {
            if (!(typeof document !== 'undefined')) {
              {
                throw ReactError(Error('The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'));
              }
            }
          })();

          var evt = document.createEvent('Event'); // Keeps track of whether the user-provided callback threw an error. We
          // set this to true at the beginning, then set it to false right after
          // calling the function. If the function errors, `didError` will never be
          // set to false. This strategy works even if the browser is flaky and
          // fails to call our global error handler, because it doesn't rely on
          // the error event at all.

          var didError = true; // Keeps track of the value of window.event so that we can reset it
          // during the callback to let user code access window.event in the
          // browsers that support it.

          var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
          // dispatching: https://github.com/facebook/react/issues/13688

          var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, 'event'); // Create an event handler for our fake event. We will synchronously
          // dispatch our fake event using `dispatchEvent`. Inside the handler, we
          // call the user-provided callback.

          var funcArgs = Array.prototype.slice.call(arguments, 3);

          function callCallback() {
            // We immediately remove the callback from event listeners so that
            // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
            // nested call would trigger the fake event handlers of any call higher
            // in the stack.
            fakeNode.removeEventListener(evtType, callCallback, false); // We check for window.hasOwnProperty('event') to prevent the
            // window.event assignment in both IE <= 10 as they throw an error
            // "Member not found" in strict mode, and in Firefox which does not
            // support window.event.

            if (typeof window.event !== 'undefined' && window.hasOwnProperty('event')) {
              window.event = windowEvent;
            }

            func.apply(context, funcArgs);
            didError = false;
          } // Create a global error event handler. We use this to capture the value
          // that was thrown. It's possible that this error handler will fire more
          // than once; for example, if non-React code also calls `dispatchEvent`
          // and a handler for that event throws. We should be resilient to most of
          // those cases. Even if our error event handler fires more than once, the
          // last error event is always used. If the callback actually does error,
          // we know that the last error event is the correct one, because it's not
          // possible for anything else to have happened in between our callback
          // erroring and the code that follows the `dispatchEvent` call below. If
          // the callback doesn't error, but the error event was fired, we know to
          // ignore it because `didError` will be false, as described above.


          var error = void 0; // Use this to track whether the error event is ever called.

          var didSetError = false;
          var isCrossOriginError = false;

          function handleWindowError(event) {
            error = event.error;
            didSetError = true;

            if (error === null && event.colno === 0 && event.lineno === 0) {
              isCrossOriginError = true;
            }

            if (event.defaultPrevented) {
              // Some other error handler has prevented default.
              // Browsers silence the error report if this happens.
              // We'll remember this to later decide whether to log it or not.
              if (error != null && typeof error === 'object') {
                try {
                  error._suppressLogging = true;
                } catch (inner) {// Ignore.
                }
              }
            }
          } // Create a fake event type.


          var evtType = 'react-' + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

          window.addEventListener('error', handleWindowError);
          fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
          // errors, it will trigger our global error handler.

          evt.initEvent(evtType, false, false);
          fakeNode.dispatchEvent(evt);

          if (windowEventDescriptor) {
            Object.defineProperty(window, 'event', windowEventDescriptor);
          }

          if (didError) {
            if (!didSetError) {
              // The callback errored, but the error event never fired.
              error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
            } else if (isCrossOriginError) {
              error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
            }

            this.onError(error);
          } // Remove our event listeners


          window.removeEventListener('error', handleWindowError);
        };

        invokeGuardedCallbackImpl = invokeGuardedCallbackDev;
      }
    }
    var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl; // Used by Fiber to simulate a try-catch.

    var hasError = false;
    var caughtError = null;
    var reporter = {
      onError: function (error) {
        hasError = true;
        caughtError = error;
      }
    };
    /**
     * Call a function while guarding against errors that happens within it.
     * Returns an error if it throws, otherwise null.
     *
     * In production, this is implemented using a try-catch. The reason we don't
     * use a try-catch directly is so that we can swap out a different
     * implementation in DEV mode.
     *
     * @param {String} name of the guard to use for logging or debugging
     * @param {Function} func The function to invoke
     * @param {*} context The context to use when calling the function
     * @param {...*} args Arguments for function
     */

    function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
      hasError = false;
      caughtError = null;
      invokeGuardedCallbackImpl$1.apply(reporter, arguments);
    }
    /**
     * Same as invokeGuardedCallback, but instead of returning an error, it stores
     * it in a global so it can be rethrown by `rethrowCaughtError` later.
     * TODO: See if caughtError and rethrowError can be unified.
     *
     * @param {String} name of the guard to use for logging or debugging
     * @param {Function} func The function to invoke
     * @param {*} context The context to use when calling the function
     * @param {...*} args Arguments for function
     */

    /**
     * During execution of guarded functions we will capture the first error which
     * we will rethrow to be handled by the top level error handler.
     */


    function hasCaughtError() {
      return hasError;
    }

    function clearCaughtError() {
      if (hasError) {
        var error = caughtError;
        hasError = false;
        caughtError = null;
        return error;
      } else {
        (function () {
          {
            {
              throw ReactError(Error('clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'));
            }
          }
        })();
      }
    } // This module is forked in different environments.
    // By default, return `true` to log errors to the console.
    // Forks can return `false` if this isn't desirable.


    function showErrorDialog(capturedError) {
      return true;
    }

    function logCapturedError(capturedError) {
      var logError = showErrorDialog(capturedError); // Allow injected showErrorDialog() to prevent default console.error logging.
      // This enables renderers like ReactNative to better manage redbox behavior.

      if (logError === false) {
        return;
      }

      var error = capturedError.error;
      {
        var componentName = capturedError.componentName,
            componentStack = capturedError.componentStack,
            errorBoundaryName = capturedError.errorBoundaryName,
            errorBoundaryFound = capturedError.errorBoundaryFound,
            willRetry = capturedError.willRetry; // Browsers support silencing uncaught errors by calling
        // `preventDefault()` in window `error` handler.
        // We record this information as an expando on the error.

        if (error != null && error._suppressLogging) {
          if (errorBoundaryFound && willRetry) {
            // The error is recoverable and was silenced.
            // Ignore it and don't print the stack addendum.
            // This is handy for testing error boundaries without noise.
            return;
          } // The error is fatal. Since the silencing might have
          // been accidental, we'll surface it anyway.
          // However, the browser would have silenced the original error
          // so we'll print it first, and then print the stack addendum.


          console.error(error); // For a more detailed description of this block, see:
          // https://github.com/facebook/react/pull/13384
        }

        var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';
        var errorBoundaryMessage = void 0; // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.

        if (errorBoundaryFound && errorBoundaryName) {
          if (willRetry) {
            errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
          } else {
            errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
          }
        } else {
          errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
        }

        var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage); // In development, we provide our own message with just the component stack.
        // We don't include the original error message and JS stack because the browser
        // has already printed it. Even if the application swallows the error, it is still
        // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.

        console.error(combinedMessage);
      }
    }

    var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
    {
      didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
    }
    var PossiblyWeakSet$1 = typeof WeakSet === 'function' ? WeakSet : Set;

    function logError(boundary, errorInfo) {
      var source = errorInfo.source;
      var stack = errorInfo.stack;

      if (stack === null && source !== null) {
        stack = getStackByFiberInDevAndProd(source);
      }

      var capturedError = {
        componentName: source !== null ? getComponentName(source.type) : null,
        componentStack: stack !== null ? stack : '',
        error: errorInfo.value,
        errorBoundary: null,
        errorBoundaryName: null,
        errorBoundaryFound: false,
        willRetry: false
      };

      if (boundary !== null && boundary.tag === ClassComponent) {
        capturedError.errorBoundary = boundary.stateNode;
        capturedError.errorBoundaryName = getComponentName(boundary.type);
        capturedError.errorBoundaryFound = true;
        capturedError.willRetry = true;
      }

      try {
        logCapturedError(capturedError);
      } catch (e) {
        // This method must not throw, or React internal state will get messed up.
        // If console.error is overridden, or logCapturedError() shows a dialog that throws,
        // we want to report this error outside of the normal stack as a last resort.
        // https://github.com/facebook/react/issues/13188
        setTimeout(function () {
          throw e;
        });
      }
    }

    var callComponentWillUnmountWithTimer = function (current$$1, instance) {
      startPhaseTimer(current$$1, 'componentWillUnmount');
      instance.props = current$$1.memoizedProps;
      instance.state = current$$1.memoizedState;
      instance.componentWillUnmount();
      stopPhaseTimer();
    }; // Capture errors so they don't interrupt unmounting.


    function safelyCallComponentWillUnmount(current$$1, instance) {
      {
        invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current$$1, instance);

        if (hasCaughtError()) {
          var unmountError = clearCaughtError();
          captureCommitPhaseError(current$$1, unmountError);
        }
      }
    }

    function safelyDetachRef(current$$1) {
      var ref = current$$1.ref;

      if (ref !== null) {
        if (typeof ref === 'function') {
          {
            invokeGuardedCallback(null, ref, null, null);

            if (hasCaughtError()) {
              var refError = clearCaughtError();
              captureCommitPhaseError(current$$1, refError);
            }
          }
        } else {
          ref.current = null;
        }
      }
    }

    function safelyCallDestroy(current$$1, destroy) {
      {
        invokeGuardedCallback(null, destroy, null);

        if (hasCaughtError()) {
          var error = clearCaughtError();
          captureCommitPhaseError(current$$1, error);
        }
      }
    }

    function commitBeforeMutationLifeCycles(current$$1, finishedWork) {
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent:
          {
            commitHookEffectList(UnmountSnapshot, NoEffect$1, finishedWork);
            return;
          }

        case ClassComponent:
          {
            if (finishedWork.effectTag & Snapshot) {
              if (current$$1 !== null) {
                var prevProps = current$$1.memoizedProps;
                var prevState = current$$1.memoizedState;
                startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
                var instance = finishedWork.stateNode; // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, 'Expected %s props to match memoized props before ' + 'getSnapshotBeforeUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, 'Expected %s state to match memoized state before ' + 'getSnapshotBeforeUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                  }
                }
                var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
                {
                  var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;

                  if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                    didWarnSet.add(finishedWork.type);
                    warningWithoutStack$1(false, '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork.type));
                  }
                }
                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                stopPhaseTimer();
              }
            }

            return;
          }

        case HostRoot:
        case HostComponent:
        case HostText:
        case HostPortal:
        case IncompleteClassComponent:
          // Nothing to do for these component types
          return;

        default:
          {
            (function () {
              {
                {
                  throw ReactError(Error('This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();
          }
      }
    }

    function commitHookEffectList(unmountTag, mountTag, finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

      if (lastEffect !== null) {
        var firstEffect = lastEffect.next;
        var effect = firstEffect;

        do {
          if ((effect.tag & unmountTag) !== NoEffect$1) {
            // Unmount
            var destroy = effect.destroy;
            effect.destroy = undefined;

            if (destroy !== undefined) {
              destroy();
            }
          }

          if ((effect.tag & mountTag) !== NoEffect$1) {
            // Mount
            var create = effect.create;
            effect.destroy = create();
            {
              var _destroy = effect.destroy;

              if (_destroy !== undefined && typeof _destroy !== 'function') {
                var addendum = void 0;

                if (_destroy === null) {
                  addendum = ' You returned null. If your effect does not require clean ' + 'up, return undefined (or nothing).';
                } else if (typeof _destroy.then === 'function') {
                  addendum = '\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. ' + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + 'useEffect(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + '}, [someId]); // Or [] if effect doesn\'t need props or state\n\n' + 'Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching';
                } else {
                  addendum = ' You returned: ' + _destroy;
                }

                warningWithoutStack$1(false, 'An effect function must not return anything besides a function, ' + 'which is used for clean-up.%s%s', addendum, getStackByFiberInDevAndProd(finishedWork));
              }
            }
          }

          effect = effect.next;
        } while (effect !== firstEffect);
      }
    }

    function commitPassiveHookEffects(finishedWork) {
      if ((finishedWork.effectTag & Passive) !== NoEffect) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
            {
              commitHookEffectList(UnmountPassive, NoEffect$1, finishedWork);
              commitHookEffectList(NoEffect$1, MountPassive, finishedWork);
              break;
            }

          default:
            break;
        }
      }
    }

    function commitLifeCycles(finishedRoot, current$$1, finishedWork, committedExpirationTime) {
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent:
          {
            commitHookEffectList(UnmountLayout, MountLayout, finishedWork);
            break;
          }

        case ClassComponent:
          {
            var instance = finishedWork.stateNode;

            if (finishedWork.effectTag & Update) {
              if (current$$1 === null) {
                startPhaseTimer(finishedWork, 'componentDidMount'); // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, 'Expected %s props to match memoized props before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, 'Expected %s state to match memoized state before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                  }
                }
                instance.componentDidMount();
                stopPhaseTimer();
              } else {
                var prevProps = finishedWork.elementType === finishedWork.type ? current$$1.memoizedProps : resolveDefaultProps(finishedWork.type, current$$1.memoizedProps);
                var prevState = current$$1.memoizedState;
                startPhaseTimer(finishedWork, 'componentDidUpdate'); // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    !(instance.props === finishedWork.memoizedProps) ? warning$1(false, 'Expected %s props to match memoized props before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                    !(instance.state === finishedWork.memoizedState) ? warning$1(false, 'Expected %s state to match memoized state before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                  }
                }
                instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                stopPhaseTimer();
              }
            }

            var updateQueue = finishedWork.updateQueue;

            if (updateQueue !== null) {
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  !(instance.props === finishedWork.memoizedProps) ? warning$1(false, 'Expected %s props to match memoized props before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                  !(instance.state === finishedWork.memoizedState) ? warning$1(false, 'Expected %s state to match memoized state before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentName(finishedWork.type) || 'instance') : void 0;
                }
              } // We could update instance props and state here,
              // but instead we rely on them being set during last render.
              // TODO: revisit this when we implement resuming.

              commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
            }

            return;
          }

        case HostRoot:
          {
            var _updateQueue = finishedWork.updateQueue;

            if (_updateQueue !== null) {
              var _instance = null;

              if (finishedWork.child !== null) {
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = getPublicInstance(finishedWork.child.stateNode);
                    break;

                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              }

              commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
            }

            return;
          }

        case HostComponent:
          {
            var _instance2 = finishedWork.stateNode; // Renderers may schedule work to be done after host components are mounted
            // (eg DOM renderer may schedule auto-focus for inputs and form controls).
            // These effects should only be committed when components are first mounted,
            // aka when there is no current/alternate.

            if (current$$1 === null && finishedWork.effectTag & Update) {
              var type = finishedWork.type;
              var props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props, finishedWork);
            }

            return;
          }

        case HostText:
          {
            // We have no life-cycles associated with text.
            return;
          }

        case HostPortal:
          {
            // We have no life-cycles associated with portals.
            return;
          }

        case Profiler:
          {
            if (enableProfilerTimer) {
              var onRender = finishedWork.memoizedProps.onRender;

              if (typeof onRender === 'function') {
                if (enableSchedulerTracing) {
                  onRender(finishedWork.memoizedProps.id, current$$1 === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, getCommitTime(), finishedRoot.memoizedInteractions);
                } else {
                  onRender(finishedWork.memoizedProps.id, current$$1 === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, getCommitTime());
                }
              }
            }

            return;
          }

        case SuspenseComponent:
        case SuspenseListComponent:
        case IncompleteClassComponent:
        case FundamentalComponent:
          return;

        default:
          {
            (function () {
              {
                {
                  throw ReactError(Error('This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();
          }
      }
    }

    function hideOrUnhideAllChildren(finishedWork, isHidden) {
      if (supportsMutation) {
        // We only have the top Fiber that was inserted but we need to recurse down its
        var node = finishedWork;

        while (true) {
          if (node.tag === HostComponent) {
            var instance = node.stateNode;

            if (isHidden) {
              hideInstance(instance);
            } else {
              unhideInstance(node.stateNode, node.memoizedProps);
            }
          } else if (node.tag === HostText) {
            var _instance3 = node.stateNode;

            if (isHidden) {
              hideTextInstance(_instance3);
            } else {
              unhideTextInstance(_instance3, node.memoizedProps);
            }
          } else if (node.tag === SuspenseComponent && node.memoizedState !== null) {
            // Found a nested Suspense component that timed out. Skip over the
            var fallbackChildFragment = node.child.sibling;
            fallbackChildFragment.return = node;
            node = fallbackChildFragment;
            continue;
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === finishedWork) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === finishedWork) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
    }

    function commitAttachRef(finishedWork) {
      var ref = finishedWork.ref;

      if (ref !== null) {
        var instance = finishedWork.stateNode;
        var instanceToUse = void 0;

        switch (finishedWork.tag) {
          case HostComponent:
            instanceToUse = getPublicInstance(instance);
            break;

          default:
            instanceToUse = instance;
        }

        if (typeof ref === 'function') {
          ref(instanceToUse);
        } else {
          {
            if (!ref.hasOwnProperty('current')) {
              warningWithoutStack$1(false, 'Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().%s', getComponentName(finishedWork.type), getStackByFiberInDevAndProd(finishedWork));
            }
          }
          ref.current = instanceToUse;
        }
      }
    }

    function commitDetachRef(current$$1) {
      var currentRef = current$$1.ref;

      if (currentRef !== null) {
        if (typeof currentRef === 'function') {
          currentRef(null);
        } else {
          currentRef.current = null;
        }
      }
    } // User-originating errors (lifecycles and refs) should not interrupt
    // deletion, so don't let them throw. Host-originating errors should
    // interrupt deletion, so it's okay


    function commitUnmount(current$$1, renderPriorityLevel) {
      onCommitUnmount(current$$1);

      switch (current$$1.tag) {
        case FunctionComponent:
        case ForwardRef:
        case MemoComponent:
        case SimpleMemoComponent:
          {
            var updateQueue = current$$1.updateQueue;

            if (updateQueue !== null) {
              var lastEffect = updateQueue.lastEffect;

              if (lastEffect !== null) {
                var firstEffect = lastEffect.next; // When the owner fiber is deleted, the destroy function of a passive
                // effect hook is called during the synchronous commit phase. This is
                // a concession to implementation complexity. Calling it in the
                // passive effect phase (like they usually are, when dependencies
                // change during an update) would require either traversing the
                // children of the deleted fiber again, or including unmount effects
                // as part of the fiber effect list.
                //
                // Because this is during the sync commit phase, we need to change
                // the priority.
                //
                // TODO: Reconsider this implementation trade off.

                var priorityLevel = renderPriorityLevel > NormalPriority ? NormalPriority : renderPriorityLevel;
                runWithPriority(priorityLevel, function () {
                  var effect = firstEffect;

                  do {
                    var destroy = effect.destroy;

                    if (destroy !== undefined) {
                      safelyCallDestroy(current$$1, destroy);
                    }

                    effect = effect.next;
                  } while (effect !== firstEffect);
                });
              }
            }

            break;
          }

        case ClassComponent:
          {
            safelyDetachRef(current$$1);
            var instance = current$$1.stateNode;

            if (typeof instance.componentWillUnmount === 'function') {
              safelyCallComponentWillUnmount(current$$1, instance);
            }

            return;
          }

        case HostComponent:
          {
            if (enableFlareAPI) {
              var dependencies = current$$1.dependencies;

              if (dependencies !== null) {
                var respondersMap = dependencies.responders;

                if (respondersMap !== null) {
                  var responderInstances = Array.from(respondersMap.values());

                  for (var i = 0, length = responderInstances.length; i < length; i++) {
                    var responderInstance = responderInstances[i];
                    unmountResponderInstance(responderInstance);
                  }

                  dependencies.responders = null;
                }
              }
            }

            safelyDetachRef(current$$1);
            return;
          }

        case HostPortal:
          {
            // TODO: this is recursive.
            // We are also not using this parent because
            // the portal will get pushed immediately.
            if (supportsMutation) {
              unmountHostComponents(current$$1, renderPriorityLevel);
            } else if (supportsPersistence) {
              emptyPortalContainer(current$$1);
            }

            return;
          }

        case FundamentalComponent:
          {
            if (enableFundamentalAPI) {
              var fundamentalInstance = current$$1.stateNode;

              if (fundamentalInstance !== null) {
                unmountFundamentalComponent(fundamentalInstance);
                current$$1.stateNode = null;
              }
            }
          }
      }
    }

    function commitNestedUnmounts(root, renderPriorityLevel) {
      // While we're inside a removed host node we don't want to call
      // removeChild on the inner nodes because they're removed by the top
      // call anyway. We also want to call componentWillUnmount on all
      // composites before this host node is removed from the tree. Therefore
      var node = root;

      while (true) {
        commitUnmount(node, renderPriorityLevel); // Visit children because they may contain more composite or host nodes.
        // Skip portals because commitUnmount() currently visits them recursively.

        if (node.child !== null && ( // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        !supportsMutation || node.tag !== HostPortal)) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === root) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === root) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }

    function detachFiber(current$$1) {
      // Cut off the return pointers to disconnect it from the tree. Ideally, we
      // should clear the child pointer of the parent alternate to let this
      // get GC:ed but we don't know which for sure which parent is the current
      // one so we'll settle for GC:ing the subtree of this child. This child
      // itself will be GC:ed when the parent updates the next time.
      current$$1.return = null;
      current$$1.child = null;
      current$$1.memoizedState = null;
      current$$1.updateQueue = null;
      current$$1.dependencies = null;
      var alternate = current$$1.alternate;

      if (alternate !== null) {
        alternate.return = null;
        alternate.child = null;
        alternate.memoizedState = null;
        alternate.updateQueue = null;
        alternate.dependencies = null;
      }
    }

    function emptyPortalContainer(current$$1) {
      if (!supportsPersistence) {
        return;
      }

      var portal = current$$1.stateNode;
      var containerInfo = portal.containerInfo;
      var emptyChildSet = createContainerChildSet(containerInfo);
      replaceContainerChildren(containerInfo, emptyChildSet);
    }

    function commitContainer(finishedWork) {
      if (!supportsPersistence) {
        return;
      }

      switch (finishedWork.tag) {
        case ClassComponent:
        case HostComponent:
        case HostText:
        case FundamentalComponent:
          {
            return;
          }

        case HostRoot:
        case HostPortal:
          {
            var portalOrRoot = finishedWork.stateNode;
            var containerInfo = portalOrRoot.containerInfo,
                _pendingChildren = portalOrRoot.pendingChildren;
            replaceContainerChildren(containerInfo, _pendingChildren);
            return;
          }

        default:
          {
            (function () {
              {
                {
                  throw ReactError(Error('This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();
          }
      }
    }

    function getHostParentFiber(fiber) {
      var parent = fiber.return;

      while (parent !== null) {
        if (isHostParent(parent)) {
          return parent;
        }

        parent = parent.return;
      }

      (function () {
        {
          {
            throw ReactError(Error('Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })();
    }

    function isHostParent(fiber) {
      return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
    }

    function getHostSibling(fiber) {
      // We're going to search forward into the tree until we find a sibling host
      // node. Unfortunately, if multiple insertions are done in a row we have to
      // search past them. This leads to exponential search for the next sibling.
      var node = fiber;

      siblings: while (true) {
        // If we didn't find anything, let's try the next sibling.
        while (node.sibling === null) {
          if (node.return === null || isHostParent(node.return)) {
            // If we pop out of the root or hit the parent the fiber we are the
            // last sibling.
            return null;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;

        while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedSuspenseComponent) {
          // If it is not host node and, we might have a host node inside it.
          // Try to search down until we find one.
          if (node.effectTag & Placement) {
            // If we don't have a child, try the siblings instead.
            continue siblings;
          } // If we don't have a child, try the siblings instead.
          // We also skip portals because they are not part of this host tree.


          if (node.child === null || node.tag === HostPortal) {
            continue siblings;
          } else {
            node.child.return = node;
            node = node.child;
          }
        } // Check if this host node is stable or about to be placed.


        if (!(node.effectTag & Placement)) {
          // Found it!
          return node.stateNode;
        }
      }
    }

    function commitPlacement(finishedWork) {
      if (!supportsMutation) {
        return;
      } // Recursively insert all host nodes into the parent.


      var parentFiber = getHostParentFiber(finishedWork); // Note: these two variables *must* always be updated together.

      var parent = void 0;
      var isContainer = void 0;
      var parentStateNode = parentFiber.stateNode;

      switch (parentFiber.tag) {
        case HostComponent:
          parent = parentStateNode;
          isContainer = false;
          break;

        case HostRoot:
          parent = parentStateNode.containerInfo;
          isContainer = true;
          break;

        case HostPortal:
          parent = parentStateNode.containerInfo;
          isContainer = true;
          break;

        case FundamentalComponent:
          if (enableFundamentalAPI) {
            parent = parentStateNode.instance;
            isContainer = false;
          }

        // eslint-disable-next-line-no-fallthrough

        default:
          (function () {
            {
              {
                throw ReactError(Error('Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'));
              }
            }
          })();

      }

      if (parentFiber.effectTag & ContentReset) {
        // Reset the text content of the parent before doing any insertions
        resetTextContent(parent); // Clear ContentReset from the effect tag

        parentFiber.effectTag &= ~ContentReset;
      }

      var before = getHostSibling(finishedWork); // We only have the top Fiber that was inserted but we need to recurse down its
      // children to find all the terminal nodes.

      var node = finishedWork;

      while (true) {
        var isHost = node.tag === HostComponent || node.tag === HostText;

        if (isHost || node.tag === FundamentalComponent) {
          var stateNode = isHost ? node.stateNode : node.stateNode.instance;

          if (before) {
            if (isContainer) {
              insertInContainerBefore(parent, stateNode, before);
            } else {
              insertBefore(parent, stateNode, before);
            }
          } else {
            if (isContainer) {
              appendChildToContainer(parent, stateNode);
            } else {
              appendChild(parent, stateNode);
            }
          }
        } else if (node.tag === HostPortal) {// If the insertion itself is a portal, then we don't want to traverse
          // down its children. Instead, we'll get insertions from each child in
          // the portal directly.
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }

        if (node === finishedWork) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === finishedWork) {
            return;
          }

          node = node.return;
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }

    function unmountHostComponents(current$$1, renderPriorityLevel) {
      // We only have the top Fiber that was deleted but we need to recurse down its
      var node = current$$1; // Each iteration, currentParent is populated with node's host parent if not
      // currentParentIsValid.

      var currentParentIsValid = false; // Note: these two variables *must* always be updated together.

      var currentParent = void 0;
      var currentParentIsContainer = void 0;

      while (true) {
        if (!currentParentIsValid) {
          var parent = node.return;

          findParent: while (true) {
            (function () {
              if (!(parent !== null)) {
                {
                  throw ReactError(Error('Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();

            var parentStateNode = parent.stateNode;

            switch (parent.tag) {
              case HostComponent:
                currentParent = parentStateNode;
                currentParentIsContainer = false;
                break findParent;

              case HostRoot:
                currentParent = parentStateNode.containerInfo;
                currentParentIsContainer = true;
                break findParent;

              case HostPortal:
                currentParent = parentStateNode.containerInfo;
                currentParentIsContainer = true;
                break findParent;

              case FundamentalComponent:
                if (enableFundamentalAPI) {
                  currentParent = parentStateNode.instance;
                  currentParentIsContainer = false;
                }

            }

            parent = parent.return;
          }

          currentParentIsValid = true;
        }

        if (node.tag === HostComponent || node.tag === HostText) {
          commitNestedUnmounts(node, renderPriorityLevel); // After all the children have unmounted, it is now safe to remove the
          // node from the tree.

          if (currentParentIsContainer) {
            removeChildFromContainer(currentParent, node.stateNode);
          } else {
            removeChild(currentParent, node.stateNode);
          } // Don't visit children because we already visited them.

        } else if (node.tag === FundamentalComponent) {
          var fundamentalNode = node.stateNode.instance;
          commitNestedUnmounts(node, renderPriorityLevel); // After all the children have unmounted, it is now safe to remove the
          // node from the tree.

          if (currentParentIsContainer) {
            removeChildFromContainer(currentParent, fundamentalNode);
          } else {
            removeChild(currentParent, fundamentalNode);
          }
        } else if (enableSuspenseServerRenderer && node.tag === DehydratedSuspenseComponent) {
          // Delete the dehydrated suspense boundary and all of its content.
          if (currentParentIsContainer) {
            clearSuspenseBoundaryFromContainer(currentParent, node.stateNode);
          } else {
            clearSuspenseBoundary(currentParent, node.stateNode);
          }
        } else if (node.tag === HostPortal) {
          if (node.child !== null) {
            // When we go into a portal, it becomes the parent to remove from.
            // We will reassign it back when we pop the portal on the way up.
            currentParent = node.stateNode.containerInfo;
            currentParentIsContainer = true; // Visit children because portals might contain host components.

            node.child.return = node;
            node = node.child;
            continue;
          }
        } else {
          commitUnmount(node, renderPriorityLevel); // Visit children because we may find more host components below.

          if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
        }

        if (node === current$$1) {
          return;
        }

        while (node.sibling === null) {
          if (node.return === null || node.return === current$$1) {
            return;
          }

          node = node.return;

          if (node.tag === HostPortal) {
            // When we go out of the portal, we need to restore the parent.
            // Since we don't keep a stack of them, we will search for it.
            currentParentIsValid = false;
          }
        }

        node.sibling.return = node.return;
        node = node.sibling;
      }
    }

    function commitDeletion(current$$1, renderPriorityLevel) {
      if (supportsMutation) {
        // Recursively delete all host nodes from the parent.
        // Detach refs and call componentWillUnmount() on the whole subtree.
        unmountHostComponents(current$$1, renderPriorityLevel);
      } else {
        // Detach refs and call componentWillUnmount() on the whole subtree.
        commitNestedUnmounts(current$$1, renderPriorityLevel);
      }

      detachFiber(current$$1);
    }

    function commitWork(current$$1, finishedWork) {
      if (!supportsMutation) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
            {
              // Note: We currently never use MountMutation, but useLayout uses
              // UnmountMutation.
              commitHookEffectList(UnmountMutation, MountMutation, finishedWork);
              return;
            }

          case Profiler:
            {
              return;
            }

          case SuspenseComponent:
            {
              commitSuspenseComponent(finishedWork);
              attachSuspenseRetryListeners(finishedWork);
              return;
            }

          case SuspenseListComponent:
            {
              attachSuspenseRetryListeners(finishedWork);
              return;
            }
        }

        commitContainer(finishedWork);
        return;
      }

      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case MemoComponent:
        case SimpleMemoComponent:
          {
            // Note: We currently never use MountMutation, but useLayout uses
            // UnmountMutation.
            commitHookEffectList(UnmountMutation, MountMutation, finishedWork);
            return;
          }

        case ClassComponent:
          {
            return;
          }

        case HostComponent:
          {
            var instance = finishedWork.stateNode;

            if (instance != null) {
              // Commit the work prepared earlier.
              var newProps = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
              // as the newProps. The updatePayload will contain the real change in
              // this case.

              var oldProps = current$$1 !== null ? current$$1.memoizedProps : newProps;
              var type = finishedWork.type; // TODO: Type the updateQueue to be specific to host components.

              var updatePayload = finishedWork.updateQueue;
              finishedWork.updateQueue = null;

              if (updatePayload !== null) {
                commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
              }
            }

            return;
          }

        case HostText:
          {
            (function () {
              if (!(finishedWork.stateNode !== null)) {
                {
                  throw ReactError(Error('This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();

            var textInstance = finishedWork.stateNode;
            var newText = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
            // as the newProps. The updatePayload will contain the real change in
            // this case.

            var oldText = current$$1 !== null ? current$$1.memoizedProps : newText;
            commitTextUpdate(textInstance, oldText, newText);
            return;
          }

        case HostRoot:
          {
            return;
          }

        case Profiler:
          {
            return;
          }

        case SuspenseComponent:
          {
            commitSuspenseComponent(finishedWork);
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

        case SuspenseListComponent:
          {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

        case IncompleteClassComponent:
          {
            return;
          }

        case FundamentalComponent:
          {
            if (enableFundamentalAPI) {
              var fundamentalInstance = finishedWork.stateNode;
              updateFundamentalComponent(fundamentalInstance);
            }

            return;
          }

        default:
          {
            (function () {
              {
                {
                  throw ReactError(Error('This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'));
                }
              }
            })();
          }
      }
    }

    function commitSuspenseComponent(finishedWork) {
      var newState = finishedWork.memoizedState;
      var newDidTimeout = void 0;
      var primaryChildParent = finishedWork;

      if (newState === null) {
        newDidTimeout = false;
      } else {
        newDidTimeout = true;
        primaryChildParent = finishedWork.child;
        markCommitTimeOfFallback();
      }

      if (supportsMutation && primaryChildParent !== null) {
        hideOrUnhideAllChildren(primaryChildParent, newDidTimeout);
      }

      if (enableSuspenseCallback && newState !== null) {
        var suspenseCallback = finishedWork.memoizedProps.suspenseCallback;

        if (typeof suspenseCallback === 'function') {
          var thenables = finishedWork.updateQueue;

          if (thenables !== null) {
            suspenseCallback(new Set(thenables));
          }
        } else {
          if (suspenseCallback !== undefined) {
            warning$1(false, 'Unexpected type for suspenseCallback.');
          }
        }
      }
    }

    function attachSuspenseRetryListeners(finishedWork) {
      // If this boundary just timed out, then it will have a set of thenables.
      // For each thenable, attach a listener so that when it resolves, React
      var thenables = finishedWork.updateQueue;

      if (thenables !== null) {
        finishedWork.updateQueue = null;
        var retryCache = finishedWork.stateNode;

        if (retryCache === null) {
          retryCache = finishedWork.stateNode = new PossiblyWeakSet$1();
        }

        thenables.forEach(function (thenable) {
          // Memoize using the boundary fiber to prevent redundant listeners.
          var retry = resolveRetryThenable.bind(null, finishedWork, thenable);

          if (!retryCache.has(thenable)) {
            if (enableSchedulerTracing) {
              retry = tracing.unstable_wrap(retry);
            }

            retryCache.add(thenable);
            thenable.then(retry, retry);
          }
        });
      }
    }

    function commitResetTextContent(current$$1) {
      if (!supportsMutation) {
        return;
      }

      resetTextContent(current$$1.stateNode);
    }

    var PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;

    function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
      var update = createUpdate(expirationTime, null); // Unmount the root by rendering null.

      update.tag = CaptureUpdate; // Caution: React DevTools currently depends on this property
      // being called "element".

      update.payload = {
        element: null
      };
      var error = errorInfo.value;

      update.callback = function () {
        onUncaughtError(error);
        logError(fiber, errorInfo);
      };

      return update;
    }

    function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
      var update = createUpdate(expirationTime, null);
      update.tag = CaptureUpdate;
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;

      if (typeof getDerivedStateFromError === 'function') {
        var error = errorInfo.value;

        update.payload = function () {
          logError(fiber, errorInfo);
          return getDerivedStateFromError(error);
        };
      }

      var inst = fiber.stateNode;

      if (inst !== null && typeof inst.componentDidCatch === 'function') {
        update.callback = function callback() {
          {
            markFailedErrorBoundaryForHotReloading(fiber);
          }

          if (typeof getDerivedStateFromError !== 'function') {
            // To preserve the preexisting retry behavior of error boundaries,
            // we keep track of which ones already failed during this batch.
            // This gets reset before we yield back to the browser.
            // TODO: Warn in strict mode if getDerivedStateFromError is
            // not defined.
            markLegacyErrorBoundaryAsFailed(this); // Only log here if componentDidCatch is the only error boundary method defined

            logError(fiber, errorInfo);
          }

          var error = errorInfo.value;
          var stack = errorInfo.stack;
          this.componentDidCatch(error, {
            componentStack: stack !== null ? stack : ''
          });
          {
            if (typeof getDerivedStateFromError !== 'function') {
              // If componentDidCatch is the only error boundary method defined,
              // then it needs to call setState to recover from errors.
              // If no state update is scheduled then the boundary will swallow the error.
              !(fiber.expirationTime === Sync) ? warningWithoutStack$1(false, '%s: Error boundaries should implement getDerivedStateFromError(). ' + 'In that method, return a state update to display an error message or fallback UI.', getComponentName(fiber.type) || 'Unknown') : void 0;
            }
          }
        };
      } else {
        update.callback = function () {
          markFailedErrorBoundaryForHotReloading(fiber);
        };
      }

      return update;
    }

    function attachPingListener(root, renderExpirationTime, thenable) {
      // Attach a listener to the promise to "ping" the root and retry. But
      // only if one does not already exist for the current render expiration
      // time (which acts like a "thread ID" here).
      var pingCache = root.pingCache;
      var threadIDs = void 0;

      if (pingCache === null) {
        pingCache = root.pingCache = new PossiblyWeakMap();
        threadIDs = new Set();
        pingCache.set(thenable, threadIDs);
      } else {
        threadIDs = pingCache.get(thenable);

        if (threadIDs === undefined) {
          threadIDs = new Set();
          pingCache.set(thenable, threadIDs);
        }
      }

      if (!threadIDs.has(renderExpirationTime)) {
        // Memoize using the thread ID to prevent redundant listeners.
        threadIDs.add(renderExpirationTime);
        var ping = pingSuspendedRoot.bind(null, root, thenable, renderExpirationTime);

        if (enableSchedulerTracing) {
          ping = tracing.unstable_wrap(ping);
        }

        thenable.then(ping, ping);
      }
    }

    function throwException(root, returnFiber, sourceFiber, value, renderExpirationTime) {
      // The source fiber did not complete.
      sourceFiber.effectTag |= Incomplete; // Its effect list is no longer valid.

      sourceFiber.firstEffect = sourceFiber.lastEffect = null;

      if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
        // This is a thenable.
        var thenable = value;
        checkForWrongSuspensePriorityInDEV(sourceFiber);
        var hasInvisibleParentBoundary = hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext); // Schedule the nearest Suspense to re-render the timed out view.

        var _workInProgress = returnFiber;

        do {
          if (_workInProgress.tag === SuspenseComponent && shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)) {
            // Found the nearest boundary.
            // Stash the promise on the boundary fiber. If the boundary times out, we'll
            var thenables = _workInProgress.updateQueue;

            if (thenables === null) {
              var updateQueue = new Set();
              updateQueue.add(thenable);
              _workInProgress.updateQueue = updateQueue;
            } else {
              thenables.add(thenable);
            } // If the boundary is outside of batched mode, we should *not*
            // suspend the commit. Pretend as if the suspended component rendered
            // null and keep rendering. In the commit phase, we'll schedule a
            // subsequent synchronous update to re-render the Suspense.
            //
            // Note: It doesn't matter whether the component that suspended was
            // inside a batched mode tree. If the Suspense is outside of it, we
            // should *not* suspend the commit.


            if ((_workInProgress.mode & BatchedMode) === NoMode) {
              _workInProgress.effectTag |= DidCapture; // We're going to commit this fiber even though it didn't complete.
              // But we shouldn't call any lifecycle methods or callbacks. Remove
              // all lifecycle effect tags.

              sourceFiber.effectTag &= ~(LifecycleEffectMask | Incomplete);

              if (sourceFiber.tag === ClassComponent) {
                var currentSourceFiber = sourceFiber.alternate;

                if (currentSourceFiber === null) {
                  // This is a new mount. Change the tag so it's not mistaken for a
                  // completed class component. For example, we should not call
                  // componentWillUnmount if it is deleted.
                  sourceFiber.tag = IncompleteClassComponent;
                } else {
                  // When we try rendering again, we should not reuse the current fiber,
                  // since it's known to be in an inconsistent state. Use a force update to
                  // prevent a bail out.
                  var update = createUpdate(Sync, null);
                  update.tag = ForceUpdate;
                  enqueueUpdate(sourceFiber, update);
                }
              } // The source fiber did not complete. Mark it with Sync priority to
              // indicate that it still has pending work.


              sourceFiber.expirationTime = Sync; // Exit without suspending.

              return;
            } // Confirmed that the boundary is in a concurrent mode tree. Continue
            // with the normal suspend path.
            //
            // After this we'll use a set of heuristics to determine whether this
            // render pass will run to completion or restart or "suspend" the commit.
            // The actual logic for this is spread out in different places.
            //
            // This first principle is that if we're going to suspend when we complete
            // a root, then we should also restart if we get an update or ping that
            // might unsuspend it, and vice versa. The only reason to suspend is
            // because you think you might want to restart before committing. However,
            // it doesn't make sense to restart only while in the period we're suspended.
            //
            // Restarting too aggressively is also not good because it starves out any
            // intermediate loading state. So we use heuristics to determine when.
            // Suspense Heuristics
            //
            // If nothing threw a Promise or all the same fallbacks are already showing,
            // then don't suspend/restart.
            //
            // If this is an initial render of a new tree of Suspense boundaries and
            // those trigger a fallback, then don't suspend/restart. We want to ensure
            // that we can show the initial loading state as quickly as possible.
            //
            // If we hit a "Delayed" case, such as when we'd switch from content back into
            // a fallback, then we should always suspend/restart. SuspenseConfig applies to
            // this case. If none is defined, JND is used instead.
            //
            // If we're already showing a fallback and it gets "retried", allowing us to show
            // another level, but there's still an inner boundary that would show a fallback,
            // then we suspend/restart for 500ms since the last time we showed a fallback
            // anywhere in the tree. This effectively throttles progressive loading into a
            // consistent train of commits. This also gives us an opportunity to restart to
            // get to the completed state slightly earlier.
            //
            // If there's ambiguity due to batching it's resolved in preference of:
            // 1) "delayed", 2) "initial render", 3) "retry".
            //
            // We want to ensure that a "busy" state doesn't get force committed. We want to
            // ensure that new initial loading states can commit as soon as possible.


            attachPingListener(root, renderExpirationTime, thenable);
            _workInProgress.effectTag |= ShouldCapture;
            _workInProgress.expirationTime = renderExpirationTime;
            return;
          } else if (enableSuspenseServerRenderer && _workInProgress.tag === DehydratedSuspenseComponent) {
            attachPingListener(root, renderExpirationTime, thenable); // Since we already have a current fiber, we can eagerly add a retry listener.

            var retryCache = _workInProgress.memoizedState;

            if (retryCache === null) {
              retryCache = _workInProgress.memoizedState = new PossiblyWeakSet();
              var current$$1 = _workInProgress.alternate;

              (function () {
                if (!current$$1) {
                  {
                    throw ReactError(Error('A dehydrated suspense boundary must commit before trying to render. This is probably a bug in React.'));
                  }
                }
              })();

              current$$1.memoizedState = retryCache;
            } // Memoize using the boundary fiber to prevent redundant listeners.


            if (!retryCache.has(thenable)) {
              retryCache.add(thenable);
              var retry = resolveRetryThenable.bind(null, _workInProgress, thenable);

              if (enableSchedulerTracing) {
                retry = tracing.unstable_wrap(retry);
              }

              thenable.then(retry, retry);
            }

            _workInProgress.effectTag |= ShouldCapture;
            _workInProgress.expirationTime = renderExpirationTime;
            return;
          } // This boundary already captured during this render. Continue to the next
          // boundary.


          _workInProgress = _workInProgress.return;
        } while (_workInProgress !== null); // No boundary was found. Fallthrough to error mode.
        // TODO: Use invariant so the message is stripped in prod?


        value = new Error((getComponentName(sourceFiber.type) || 'A React component') + ' suspended while rendering, but no fallback UI was specified.\n' + '\n' + 'Add a <Suspense fallback=...> component higher in the tree to ' + 'provide a loading indicator or placeholder to display.' + getStackByFiberInDevAndProd(sourceFiber));
      } // We didn't find a boundary that could handle this type of exception. Start
      // over and traverse parent path again, this time treating the exception
      // as an error.


      renderDidError();
      value = createCapturedValue(value, sourceFiber);
      var workInProgress = returnFiber;

      do {
        switch (workInProgress.tag) {
          case HostRoot:
            {
              var _errorInfo = value;
              workInProgress.effectTag |= ShouldCapture;
              workInProgress.expirationTime = renderExpirationTime;

              var _update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);

              enqueueCapturedUpdate(workInProgress, _update);
              return;
            }

          case ClassComponent:
            // Capture and retry
            var errorInfo = value;
            var ctor = workInProgress.type;
            var instance = workInProgress.stateNode;

            if ((workInProgress.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromError === 'function' || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
              workInProgress.effectTag |= ShouldCapture;
              workInProgress.expirationTime = renderExpirationTime; // Schedule the error boundary to re-render using updated state

              var _update2 = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);

              enqueueCapturedUpdate(workInProgress, _update2);
              return;
            }

            break;

          default:
            break;
        }

        workInProgress = workInProgress.return;
      } while (workInProgress !== null);
    } // The scheduler is imported here *only* to detect whether it's been mocked
    // DEV stuff


    var ceil = Math.ceil;
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
    var NoContext =
    /*                    */
    0;
    var BatchedContext =
    /*               */
    1;
    var EventContext =
    /*                 */
    2;
    var DiscreteEventContext =
    /*         */
    4;
    var LegacyUnbatchedContext =
    /*       */
    8;
    var RenderContext =
    /*                */
    16;
    var CommitContext =
    /*                */
    32;
    var RootIncomplete = 0;
    var RootErrored = 1;
    var RootSuspended = 2;
    var RootSuspendedWithDelay = 3;
    var RootCompleted = 4; // Describes where we are in the React execution stack

    var executionContext = NoContext; // The root we're working on

    var workInProgressRoot = null; // The fiber we're working on

    var workInProgress = null; // The expiration time we're rendering

    var renderExpirationTime = NoWork; // Whether to root completed, errored, suspended, etc.

    var workInProgressRootExitStatus = RootIncomplete; // Most recent event time among processed updates during this render.
    // This is conceptually a time stamp but expressed in terms of an ExpirationTime
    // because we deal mostly with expiration times in the hot path, so this avoids
    // the conversion happening in the hot path.

    var workInProgressRootLatestProcessedExpirationTime = Sync;
    var workInProgressRootLatestSuspenseTimeout = Sync;
    var workInProgressRootCanSuspendUsingConfig = null; // If we're pinged while rendering we don't always restart immediately.
    // This flag determines if it might be worthwhile to restart if an opportunity
    // happens latere.

    var workInProgressRootHasPendingPing = false; // The most recent time we committed a fallback. This lets us ensure a train
    // model where we don't commit new loading states in too quick succession.

    var globalMostRecentFallbackTime = 0;
    var FALLBACK_THROTTLE_MS = 500;
    var nextEffect = null;
    var hasUncaughtError = false;
    var firstUncaughtError = null;
    var legacyErrorBoundariesThatAlreadyFailed = null;
    var rootDoesHavePassiveEffects = false;
    var rootWithPendingPassiveEffects = null;
    var pendingPassiveEffectsRenderPriority = NoPriority;
    var pendingPassiveEffectsExpirationTime = NoWork;
    var rootsWithPendingDiscreteUpdates = null; // Use these to prevent an infinite loop of nested updates

    var NESTED_UPDATE_LIMIT = 50;
    var nestedUpdateCount = 0;
    var rootWithNestedUpdates = null;
    var NESTED_PASSIVE_UPDATE_LIMIT = 50;
    var nestedPassiveUpdateCount = 0;
    var interruptedBy = null; // Marks the need to reschedule pending interactions at these expiration times
    // during the commit phase. This enables them to be traced across components
    // that spawn new work during render. E.g. hidden boundaries, suspended SSR
    // hydration or SuspenseList.

    var spawnedWorkDuringRender = null; // Expiration times are computed by adding to the current time (the start
    // time). However, if two updates are scheduled within the same event, we
    // should treat their start times as simultaneous, even if the actual clock
    // time has advanced between the first and second call.
    // In other words, because expiration times determine how updates are batched,
    // we want all updates of like priority that occur within the same event to
    // receive the same expiration time. Otherwise we get tearing.

    var currentEventTime = NoWork;

    function requestCurrentTime() {
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        // We're inside React, so it's fine to read the actual time.
        return msToExpirationTime(now$1());
      } // We're not inside React, so we may be in the middle of a browser event.


      if (currentEventTime !== NoWork) {
        // Use the same start time for all updates until we enter React again.
        return currentEventTime;
      } // This is the first update since React yielded. Compute a new start time.


      currentEventTime = msToExpirationTime(now$1());
      return currentEventTime;
    }

    function computeExpirationForFiber(currentTime, fiber, suspenseConfig) {
      var mode = fiber.mode;

      if ((mode & BatchedMode) === NoMode) {
        return Sync;
      }

      var priorityLevel = getCurrentPriorityLevel();

      if ((mode & ConcurrentMode) === NoMode) {
        return priorityLevel === ImmediatePriority ? Sync : Batched;
      }

      if ((executionContext & RenderContext) !== NoContext) {
        // Use whatever time we're already rendering
        return renderExpirationTime;
      }

      var expirationTime = void 0;

      if (suspenseConfig !== null) {
        // Compute an expiration time based on the Suspense timeout.
        expirationTime = computeSuspenseExpiration(currentTime, suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
      } else {
        // Compute an expiration time based on the Scheduler priority.
        switch (priorityLevel) {
          case ImmediatePriority:
            expirationTime = Sync;
            break;

          case UserBlockingPriority:
            // TODO: Rename this to computeUserBlockingExpiration
            expirationTime = computeInteractiveExpiration(currentTime);
            break;

          case NormalPriority:
          case LowPriority:
            // TODO: Handle LowPriority
            // TODO: Rename this to... something better.
            expirationTime = computeAsyncExpiration(currentTime);
            break;

          case IdlePriority:
            expirationTime = Never;
            break;

          default:
            (function () {
              {
                {
                  throw ReactError(Error('Expected a valid priority level'));
                }
              }
            })();

        }
      } // If we're in the middle of rendering a tree, do not update at the same
      // expiration time that is already rendering.
      // TODO: We shouldn't have to do this if the update is on a different root.
      // Refactor computeExpirationForFiber + scheduleUpdate so we have access to
      // the root when we check for this condition.


      if (workInProgressRoot !== null && expirationTime === renderExpirationTime) {
        // This is a trick to move this update into a separate batch
        expirationTime -= 1;
      }

      return expirationTime;
    }

    var lastUniqueAsyncExpiration = NoWork;

    function computeUniqueAsyncExpiration() {
      var currentTime = requestCurrentTime();
      var result = computeAsyncExpiration(currentTime);

      if (result <= lastUniqueAsyncExpiration) {
        // Since we assume the current time monotonically increases, we only hit
        // this branch when computeUniqueAsyncExpiration is fired multiple times
        // within a 200ms window (or whatever the async bucket size is).
        result -= 1;
      }

      lastUniqueAsyncExpiration = result;
      return result;
    }

    function scheduleUpdateOnFiber(fiber, expirationTime) {
      checkForNestedUpdates();
      warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber);
      var root = markUpdateTimeFromFiberToRoot(fiber, expirationTime);

      if (root === null) {
        warnAboutUpdateOnUnmountedFiberInDEV(fiber);
        return;
      }

      root.pingTime = NoWork;
      checkForInterruption(fiber, expirationTime);
      recordScheduleUpdate(); // TODO: computeExpirationForFiber also reads the priority. Pass the
      // priority as an argument to that function and this one.

      var priorityLevel = getCurrentPriorityLevel();

      if (expirationTime === Sync) {
        if ( // Check if we're inside unbatchedUpdates
        (executionContext & LegacyUnbatchedContext) !== NoContext && // Check if we're not already rendering
        (executionContext & (RenderContext | CommitContext)) === NoContext) {
          // Register pending interactions on the root to avoid losing traced interaction data.
          schedulePendingInteractions(root, expirationTime); // This is a legacy edge case. The initial mount of a ReactDOM.render-ed
          // root inside of batchedUpdates should be synchronous, but layout updates
          // should be deferred until the end of the batch.

          var callback = renderRoot(root, Sync, true);

          while (callback !== null) {
            callback = callback(true);
          }
        } else {
          scheduleCallbackForRoot(root, ImmediatePriority, Sync);

          if (executionContext === NoContext) {
            // Flush the synchronous work now, wnless we're already working or inside
            // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
            // scheduleCallbackForFiber to preserve the ability to schedule a callback
            // without immediately flushing it. We only do this for user-initiated
            // updates, to preserve historical behavior of sync mode.
            flushSyncCallbackQueue();
          }
        }
      } else {
        scheduleCallbackForRoot(root, priorityLevel, expirationTime);
      }

      if ((executionContext & DiscreteEventContext) !== NoContext && ( // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      priorityLevel === UserBlockingPriority || priorityLevel === ImmediatePriority)) {
        // This is the result of a discrete event. Track the lowest priority
        // discrete update per root so we can flush them early, if needed.
        if (rootsWithPendingDiscreteUpdates === null) {
          rootsWithPendingDiscreteUpdates = new Map([[root, expirationTime]]);
        } else {
          var lastDiscreteTime = rootsWithPendingDiscreteUpdates.get(root);

          if (lastDiscreteTime === undefined || lastDiscreteTime > expirationTime) {
            rootsWithPendingDiscreteUpdates.set(root, expirationTime);
          }
        }
      }
    }

    var scheduleWork = scheduleUpdateOnFiber; // This is split into a separate function so we can mark a fiber with pending
    // work without treating it as a typical update that originates from an event;
    // e.g. retrying a Suspense boundary isn't an update, but it does schedule work
    // on a fiber.

    function markUpdateTimeFromFiberToRoot(fiber, expirationTime) {
      // Update the source fiber's expiration time
      if (fiber.expirationTime < expirationTime) {
        fiber.expirationTime = expirationTime;
      }

      var alternate = fiber.alternate;

      if (alternate !== null && alternate.expirationTime < expirationTime) {
        alternate.expirationTime = expirationTime;
      } // Walk the parent path to the root and update the child expiration time.


      var node = fiber.return;
      var root = null;

      if (node === null && fiber.tag === HostRoot) {
        root = fiber.stateNode;
      } else {
        while (node !== null) {
          alternate = node.alternate;

          if (node.childExpirationTime < expirationTime) {
            node.childExpirationTime = expirationTime;

            if (alternate !== null && alternate.childExpirationTime < expirationTime) {
              alternate.childExpirationTime = expirationTime;
            }
          } else if (alternate !== null && alternate.childExpirationTime < expirationTime) {
            alternate.childExpirationTime = expirationTime;
          }

          if (node.return === null && node.tag === HostRoot) {
            root = node.stateNode;
            break;
          }

          node = node.return;
        }
      }

      if (root !== null) {
        // Update the first and last pending expiration times in this root
        var firstPendingTime = root.firstPendingTime;

        if (expirationTime > firstPendingTime) {
          root.firstPendingTime = expirationTime;
        }

        var lastPendingTime = root.lastPendingTime;

        if (lastPendingTime === NoWork || expirationTime < lastPendingTime) {
          root.lastPendingTime = expirationTime;
        }
      }

      return root;
    } // Use this function, along with runRootCallback, to ensure that only a single
    // callback per root is scheduled. It's still possible to call renderRoot
    // directly, but scheduling via this function helps avoid excessive callbacks.
    // It works by storing the callback node and expiration time on the root. When a
    // new callback comes in, it compares the expiration time to determine if it
    // should cancel the previous one. It also relies on commitRoot scheduling a
    // callback to render the next level, because that means we don't need a
    // separate callback per expiration time.


    function scheduleCallbackForRoot(root, priorityLevel, expirationTime) {
      var existingCallbackExpirationTime = root.callbackExpirationTime;

      if (existingCallbackExpirationTime < expirationTime) {
        // New callback has higher priority than the existing one.
        var existingCallbackNode = root.callbackNode;

        if (existingCallbackNode !== null) {
          cancelCallback(existingCallbackNode);
        }

        root.callbackExpirationTime = expirationTime;

        if (expirationTime === Sync) {
          // Sync React callbacks are scheduled on a special internal queue
          root.callbackNode = scheduleSyncCallback(runRootCallback.bind(null, root, renderRoot.bind(null, root, expirationTime)));
        } else {
          var options = null;

          if (!disableSchedulerTimeoutBasedOnReactExpirationTime && expirationTime !== Never) {
            var timeout = expirationTimeToMs(expirationTime) - now$1();
            options = {
              timeout: timeout
            };
          }

          root.callbackNode = scheduleCallback(priorityLevel, runRootCallback.bind(null, root, renderRoot.bind(null, root, expirationTime)), options);

          if (enableUserTimingAPI && expirationTime !== Sync && (executionContext & (RenderContext | CommitContext)) === NoContext) {
            // Scheduled an async callback, and we're not already working. Add an
            // entry to the flamegraph that shows we're waiting for a callback
            // to fire.
            startRequestCallbackTimer();
          }
        }
      } // Associate the current interactions with this new root+priority.


      schedulePendingInteractions(root, expirationTime);
    }

    function runRootCallback(root, callback, isSync) {
      var prevCallbackNode = root.callbackNode;
      var continuation = null;

      try {
        continuation = callback(isSync);

        if (continuation !== null) {
          return runRootCallback.bind(null, root, continuation);
        } else {
          return null;
        }
      } finally {
        // If the callback exits without returning a continuation, remove the
        // corresponding callback node from the root. Unless the callback node
        // has changed, which implies that it was already cancelled by a high
        // priority update.
        if (continuation === null && prevCallbackNode === root.callbackNode) {
          root.callbackNode = null;
          root.callbackExpirationTime = NoWork;
        }
      }
    }

    function flushRoot(root, expirationTime) {
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        (function () {
          {
            {
              throw ReactError(Error('work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.'));
            }
          }
        })();
      }

      scheduleSyncCallback(renderRoot.bind(null, root, expirationTime));
      flushSyncCallbackQueue();
    }

    function flushDiscreteUpdates() {
      // TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
      // However, `act` uses `batchedUpdates`, so there's no way to distinguish
      // those two cases. Need to fix this before exposing flushDiscreteUpdates
      // as a public API.
      if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
        if (true && (executionContext & RenderContext) !== NoContext) {
          warning$1(false, 'unstable_flushDiscreteUpdates: Cannot flush updates when React is ' + 'already rendering.');
        } // We're already rendering, so we can't synchronously flush pending work.
        // This is probably a nested event dispatch triggered by a lifecycle/effect,
        // like `el.focus()`. Exit.


        return;
      }

      flushPendingDiscreteUpdates();

      if (!revertPassiveEffectsChange) {
        // If the discrete updates scheduled passive effects, flush them now so that
        // they fire before the next serial event.
        flushPassiveEffects();
      }
    }

    function resolveLocksOnRoot(root, expirationTime) {
      var firstBatch = root.firstBatch;

      if (firstBatch !== null && firstBatch._defer && firstBatch._expirationTime >= expirationTime) {
        scheduleCallback(NormalPriority, function () {
          firstBatch._onComplete();

          return null;
        });
        return true;
      } else {
        return false;
      }
    }

    function deferredUpdates(fn) {
      // TODO: Remove in favor of Scheduler.next
      return runWithPriority(NormalPriority, fn);
    }

    function syncUpdates(fn, a, b, c) {
      return runWithPriority(ImmediatePriority, fn.bind(null, a, b, c));
    }

    function flushPendingDiscreteUpdates() {
      if (rootsWithPendingDiscreteUpdates !== null) {
        // For each root with pending discrete updates, schedule a callback to
        // immediately flush them.
        var roots = rootsWithPendingDiscreteUpdates;
        rootsWithPendingDiscreteUpdates = null;
        roots.forEach(function (expirationTime, root) {
          scheduleSyncCallback(renderRoot.bind(null, root, expirationTime));
        }); // Now flush the immediate queue.

        flushSyncCallbackQueue();
      }
    }

    function batchedUpdates(fn, a) {
      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;

      try {
        return fn(a);
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          flushSyncCallbackQueue();
        }
      }
    }

    function batchedEventUpdates(fn, a) {
      var prevExecutionContext = executionContext;
      executionContext |= EventContext;

      try {
        return fn(a);
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          flushSyncCallbackQueue();
        }
      }
    }

    function discreteUpdates(fn, a, b, c) {
      var prevExecutionContext = executionContext;
      executionContext |= DiscreteEventContext;

      try {
        // Should this
        return runWithPriority(UserBlockingPriority, fn.bind(null, a, b, c));
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          flushSyncCallbackQueue();
        }
      }
    }

    function unbatchedUpdates(fn, a) {
      var prevExecutionContext = executionContext;
      executionContext &= ~BatchedContext;
      executionContext |= LegacyUnbatchedContext;

      try {
        return fn(a);
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          flushSyncCallbackQueue();
        }
      }
    }

    function flushSync(fn, a) {
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        (function () {
          {
            {
              throw ReactError(Error('flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.'));
            }
          }
        })();
      }

      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;

      try {
        return runWithPriority(ImmediatePriority, fn.bind(null, a));
      } finally {
        executionContext = prevExecutionContext; // Flush the immediate callbacks that were scheduled during this batch.
        // Note that this will happen even if batchedUpdates is higher up
        // the stack.

        flushSyncCallbackQueue();
      }
    }

    function flushControlled(fn) {
      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;

      try {
        runWithPriority(ImmediatePriority, fn);
      } finally {
        executionContext = prevExecutionContext;

        if (executionContext === NoContext) {
          // Flush the immediate callbacks that were scheduled during this batch
          flushSyncCallbackQueue();
        }
      }
    }

    function prepareFreshStack(root, expirationTime) {
      root.finishedWork = null;
      root.finishedExpirationTime = NoWork;
      var timeoutHandle = root.timeoutHandle;

      if (timeoutHandle !== noTimeout) {
        // The root previous suspended and scheduled a timeout to commit a fallback
        // state. Now that we have additional work, cancel the timeout.
        root.timeoutHandle = noTimeout; // $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above

        cancelTimeout(timeoutHandle);
      }

      if (workInProgress !== null) {
        var interruptedWork = workInProgress.return;

        while (interruptedWork !== null) {
          unwindInterruptedWork(interruptedWork);
          interruptedWork = interruptedWork.return;
        }
      }

      workInProgressRoot = root;
      workInProgress = createWorkInProgress(root.current, null, expirationTime);
      renderExpirationTime = expirationTime;
      workInProgressRootExitStatus = RootIncomplete;
      workInProgressRootLatestProcessedExpirationTime = Sync;
      workInProgressRootLatestSuspenseTimeout = Sync;
      workInProgressRootCanSuspendUsingConfig = null;
      workInProgressRootHasPendingPing = false;

      if (enableSchedulerTracing) {
        spawnedWorkDuringRender = null;
      }

      {
        ReactStrictModeWarnings.discardPendingWarnings();
        componentsThatTriggeredHighPriSuspend = null;
      }
    }

    function renderRoot(root, expirationTime, isSync) {
      (function () {
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw ReactError(Error('Should not already be working.'));
          }
        }
      })();

      if (enableUserTimingAPI && expirationTime !== Sync) {
        var didExpire = isSync;
        stopRequestCallbackTimer(didExpire);
      }

      if (root.firstPendingTime < expirationTime) {
        // If there's no work left at this expiration time, exit immediately. This
        // happens when multiple callbacks are scheduled for a single root, but an
        // earlier callback flushes the work of a later one.
        return null;
      }

      if (isSync && root.finishedExpirationTime === expirationTime) {
        // There's already a pending commit at this expiration time.
        // TODO: This is poorly factored. This case only exists for the
        // batch.commit() API.
        return commitRoot.bind(null, root);
      }

      flushPassiveEffects(); // If the root or expiration time have changed, throw out the existing stack
      // and prepare a fresh one. Otherwise we'll continue where we left off.

      if (root !== workInProgressRoot || expirationTime !== renderExpirationTime) {
        prepareFreshStack(root, expirationTime);
        startWorkOnPendingInteractions(root, expirationTime);
      } else if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
        // We could've received an update at a lower priority while we yielded.
        // We're suspended in a delayed state. Once we complete this render we're
        // just going to try to recover at the last pending time anyway so we might
        // as well start doing that eagerly.
        // Ideally we should be able to do this even for retries but we don't yet
        // know if we're going to process an update which wants to commit earlier,
        // and this path happens very early so it would happen too often. Instead,
        // for that case, we'll wait until we complete.
        if (workInProgressRootHasPendingPing) {
          // We have a ping at this expiration. Let's restart to see if we get unblocked.
          prepareFreshStack(root, expirationTime);
        } else {
          var lastPendingTime = root.lastPendingTime;

          if (lastPendingTime < expirationTime) {
            // There's lower priority work. It might be unsuspended. Try rendering
            // at that level immediately, while preserving the position in the queue.
            return renderRoot.bind(null, root, lastPendingTime);
          }
        }
      } // If we have a work-in-progress fiber, it means there's still work to do
      // in this root.


      if (workInProgress !== null) {
        var prevExecutionContext = executionContext;
        executionContext |= RenderContext;
        var prevDispatcher = ReactCurrentDispatcher.current;

        if (prevDispatcher === null) {
          // The React isomorphic package does not include a default dispatcher.
          // Instead the first renderer will lazily attach one, in order to give
          // nicer error messages.
          prevDispatcher = ContextOnlyDispatcher;
        }

        ReactCurrentDispatcher.current = ContextOnlyDispatcher;
        var prevInteractions = null;

        if (enableSchedulerTracing) {
          prevInteractions = tracing.__interactionsRef.current;
          tracing.__interactionsRef.current = root.memoizedInteractions;
        }

        startWorkLoopTimer(workInProgress); // TODO: Fork renderRoot into renderRootSync and renderRootAsync

        if (isSync) {
          if (expirationTime !== Sync) {
            // An async update expired. There may be other expired updates on
            // this root. We should render all the expired work in a
            // single batch.
            var currentTime = requestCurrentTime();

            if (currentTime < expirationTime) {
              // Restart at the current time.
              executionContext = prevExecutionContext;
              resetContextDependencies();
              ReactCurrentDispatcher.current = prevDispatcher;

              if (enableSchedulerTracing) {
                tracing.__interactionsRef.current = prevInteractions;
              }

              return renderRoot.bind(null, root, currentTime);
            }
          }
        } else {
          // Since we know we're in a React event, we can clear the current
          // event time. The next update will compute a new event time.
          currentEventTime = NoWork;
        }

        do {
          try {
            if (isSync) {
              workLoopSync();
            } else {
              workLoop();
            }

            break;
          } catch (thrownValue) {
            // Reset module-level state that was set during the render phase.
            resetContextDependencies();
            resetHooks();
            var sourceFiber = workInProgress;

            if (sourceFiber === null || sourceFiber.return === null) {
              // Expected to be working on a non-root fiber. This is a fatal error
              // because there's no ancestor that can handle it; the root is
              // supposed to capture all errors that weren't caught by an error
              // boundary.
              prepareFreshStack(root, expirationTime);
              executionContext = prevExecutionContext;
              throw thrownValue;
            }

            if (enableProfilerTimer && sourceFiber.mode & ProfileMode) {
              // Record the time spent rendering before an error was thrown. This
              // avoids inaccurate Profiler durations in the case of a
              // suspended render.
              stopProfilerTimerIfRunningAndRecordDelta(sourceFiber, true);
            }

            var returnFiber = sourceFiber.return;
            throwException(root, returnFiber, sourceFiber, thrownValue, renderExpirationTime);
            workInProgress = completeUnitOfWork(sourceFiber);
          }
        } while (true);

        executionContext = prevExecutionContext;
        resetContextDependencies();
        ReactCurrentDispatcher.current = prevDispatcher;

        if (enableSchedulerTracing) {
          tracing.__interactionsRef.current = prevInteractions;
        }

        if (workInProgress !== null) {
          // There's still work left over. Return a continuation.
          stopInterruptedWorkLoopTimer();

          if (expirationTime !== Sync) {
            startRequestCallbackTimer();
          }

          return renderRoot.bind(null, root, expirationTime);
        }
      } // We now have a consistent tree. The next step is either to commit it, or, if
      // something suspended, wait to commit it after a timeout.


      stopFinishedWorkLoopTimer();
      root.finishedWork = root.current.alternate;
      root.finishedExpirationTime = expirationTime;
      var isLocked = resolveLocksOnRoot(root, expirationTime);

      if (isLocked) {
        // This root has a lock that prevents it from committing. Exit. If we begin
        // work on the root again, without any intervening updates, it will finish
        // without doing additional work.
        return null;
      } // Set this to null to indicate there's no in-progress render.


      workInProgressRoot = null;

      switch (workInProgressRootExitStatus) {
        case RootIncomplete:
          {
            (function () {
              {
                {
                  throw ReactError(Error('Should have a work-in-progress.'));
                }
              }
            })();
          }
        // Flow knows about invariant, so it complains if I add a break statement,
        // but eslint doesn't know about invariant, so it complains if I do.
        // eslint-disable-next-line no-fallthrough

        case RootErrored:
          {
            // An error was thrown. First check if there is lower priority work
            // scheduled on this root.
            var _lastPendingTime = root.lastPendingTime;

            if (_lastPendingTime < expirationTime) {
              // There's lower priority work. Before raising the error, try rendering
              // at the lower priority to see if it fixes it. Use a continuation to
              // maintain the existing priority and position in the queue.
              return renderRoot.bind(null, root, _lastPendingTime);
            }

            if (!isSync) {
              // If we're rendering asynchronously, it's possible the error was
              // caused by tearing due to a mutation during an event. Try rendering
              // one more time without yiedling to events.
              prepareFreshStack(root, expirationTime);
              scheduleSyncCallback(renderRoot.bind(null, root, expirationTime));
              return null;
            } // If we're already rendering synchronously, commit the root in its
            // errored state.


            return commitRoot.bind(null, root);
          }

        case RootSuspended:
          {
            flushSuspensePriorityWarningInDEV(); // We have an acceptable loading state. We need to figure out if we should
            // immediately commit it or wait a bit.
            // If we have processed new updates during this render, we may now have a
            // new loading state ready. We want to ensure that we commit that as soon as
            // possible.

            var hasNotProcessedNewUpdates = workInProgressRootLatestProcessedExpirationTime === Sync;

            if (hasNotProcessedNewUpdates && !isSync && // do not delay if we're inside an act() scope
            !(true && flushSuspenseFallbacksInTests && IsThisRendererActing.current)) {
              // If we have not processed any new updates during this pass, then this is
              // either a retry of an existing fallback state or a hidden tree.
              // Hidden trees shouldn't be batched with other work and after that's
              // fixed it can only be a retry.
              // We're going to throttle committing retries so that we don't show too
              // many loading states too quickly.
              var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1(); // Don't bother with a very short suspense time.

              if (msUntilTimeout > 10) {
                if (workInProgressRootHasPendingPing) {
                  // This render was pinged but we didn't get to restart earlier so try
                  // restarting now instead.
                  prepareFreshStack(root, expirationTime);
                  return renderRoot.bind(null, root, expirationTime);
                }

                var _lastPendingTime2 = root.lastPendingTime;

                if (_lastPendingTime2 < expirationTime) {
                  // There's lower priority work. It might be unsuspended. Try rendering
                  // at that level.
                  return renderRoot.bind(null, root, _lastPendingTime2);
                } // The render is suspended, it hasn't timed out, and there's no lower
                // priority work to do. Instead of committing the fallback
                // immediately, wait for more data to arrive.


                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), msUntilTimeout);
                return null;
              }
            } // The work expired. Commit immediately.


            return commitRoot.bind(null, root);
          }

        case RootSuspendedWithDelay:
          {
            flushSuspensePriorityWarningInDEV();

            if (!isSync && // do not delay if we're inside an act() scope
            !(true && flushSuspenseFallbacksInTests && IsThisRendererActing.current)) {
              // We're suspended in a state that should be avoided. We'll try to avoid committing
              // it for as long as the timeouts let us.
              if (workInProgressRootHasPendingPing) {
                // This render was pinged but we didn't get to restart earlier so try
                // restarting now instead.
                prepareFreshStack(root, expirationTime);
                return renderRoot.bind(null, root, expirationTime);
              }

              var _lastPendingTime3 = root.lastPendingTime;

              if (_lastPendingTime3 < expirationTime) {
                // There's lower priority work. It might be unsuspended. Try rendering
                // at that level immediately.
                return renderRoot.bind(null, root, _lastPendingTime3);
              }

              var _msUntilTimeout = void 0;

              if (workInProgressRootLatestSuspenseTimeout !== Sync) {
                // We have processed a suspense config whose expiration time we can use as
                // the timeout.
                _msUntilTimeout = expirationTimeToMs(workInProgressRootLatestSuspenseTimeout) - now$1();
              } else if (workInProgressRootLatestProcessedExpirationTime === Sync) {
                // This should never normally happen because only new updates cause
                // delayed states, so we should have processed something. However,
                // this could also happen in an offscreen tree.
                _msUntilTimeout = 0;
              } else {
                // If we don't have a suspense config, we're going to use a heuristic to
                var eventTimeMs = inferTimeFromExpirationTime(workInProgressRootLatestProcessedExpirationTime);
                var currentTimeMs = now$1();
                var timeUntilExpirationMs = expirationTimeToMs(expirationTime) - currentTimeMs;
                var timeElapsed = currentTimeMs - eventTimeMs;

                if (timeElapsed < 0) {
                  // We get this wrong some time since we estimate the time.
                  timeElapsed = 0;
                }

                _msUntilTimeout = jnd(timeElapsed) - timeElapsed; // Clamp the timeout to the expiration time.
                // TODO: Once the event time is exact instead of inferred from expiration time
                // we don't need this.

                if (timeUntilExpirationMs < _msUntilTimeout) {
                  _msUntilTimeout = timeUntilExpirationMs;
                }
              } // Don't bother with a very short suspense time.


              if (_msUntilTimeout > 10) {
                // The render is suspended, it hasn't timed out, and there's no lower
                // priority work to do. Instead of committing the fallback
                // immediately, wait for more data to arrive.
                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout);
                return null;
              }
            } // The work expired. Commit immediately.


            return commitRoot.bind(null, root);
          }

        case RootCompleted:
          {
            // The work completed. Ready to commit.
            if (!isSync && // do not delay if we're inside an act() scope
            !(true && flushSuspenseFallbacksInTests && IsThisRendererActing.current) && workInProgressRootLatestProcessedExpirationTime !== Sync && workInProgressRootCanSuspendUsingConfig !== null) {
              // If we have exceeded the minimum loading delay, which probably
              // means we have shown a spinner already, we might have to suspend
              // a bit longer to ensure that the spinner is shown for enough time.
              var _msUntilTimeout2 = computeMsUntilSuspenseLoadingDelay(workInProgressRootLatestProcessedExpirationTime, expirationTime, workInProgressRootCanSuspendUsingConfig);

              if (_msUntilTimeout2 > 10) {
                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout2);
                return null;
              }
            }

            return commitRoot.bind(null, root);
          }

        default:
          {
            (function () {
              {
                {
                  throw ReactError(Error('Unknown root exit status.'));
                }
              }
            })();
          }
      }
    }

    function markCommitTimeOfFallback() {
      globalMostRecentFallbackTime = now$1();
    }

    function markRenderEventTimeAndConfig(expirationTime, suspenseConfig) {
      if (expirationTime < workInProgressRootLatestProcessedExpirationTime && expirationTime > Never) {
        workInProgressRootLatestProcessedExpirationTime = expirationTime;
      }

      if (suspenseConfig !== null) {
        if (expirationTime < workInProgressRootLatestSuspenseTimeout && expirationTime > Never) {
          workInProgressRootLatestSuspenseTimeout = expirationTime; // Most of the time we only have one config and getting wrong is not bad.

          workInProgressRootCanSuspendUsingConfig = suspenseConfig;
        }
      }
    }

    function renderDidSuspend() {
      if (workInProgressRootExitStatus === RootIncomplete) {
        workInProgressRootExitStatus = RootSuspended;
      }
    }

    function renderDidSuspendDelayIfPossible() {
      if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
        workInProgressRootExitStatus = RootSuspendedWithDelay;
      }
    }

    function renderDidError() {
      if (workInProgressRootExitStatus !== RootCompleted) {
        workInProgressRootExitStatus = RootErrored;
      }
    } // Called during render to determine if anything has suspended.
    // Returns false if we're not sure.


    function renderHasNotSuspendedYet() {
      // If something errored or completed, we can't really be sure,
      // so those are false.
      return workInProgressRootExitStatus === RootIncomplete;
    }

    function inferTimeFromExpirationTime(expirationTime) {
      // We don't know exactly when the update was scheduled, but we can infer an
      // approximate start time from the expiration time.
      var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
      return earliestExpirationTimeMs - LOW_PRIORITY_EXPIRATION;
    }

    function inferTimeFromExpirationTimeWithSuspenseConfig(expirationTime, suspenseConfig) {
      // We don't know exactly when the update was scheduled, but we can infer an
      // approximate start time from the expiration time by subtracting the timeout
      // that was added to the event time.
      var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
      return earliestExpirationTimeMs - (suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
    }

    function workLoopSync() {
      // Already timed out, so perform work without checking if we need to yield.
      while (workInProgress !== null) {
        workInProgress = performUnitOfWork(workInProgress);
      }
    }

    function workLoop() {
      // Perform work until Scheduler asks us to yield
      while (workInProgress !== null && !shouldYield()) {
        workInProgress = performUnitOfWork(workInProgress);
      }
    }

    function performUnitOfWork(unitOfWork) {
      // The current, flushed, state of this fiber is the alternate. Ideally
      // nothing should rely on this, but relying on it here means that we don't
      // need an additional field on the work in progress.
      var current$$1 = unitOfWork.alternate;
      startWorkTimer(unitOfWork);
      setCurrentFiber(unitOfWork);
      var next = void 0;

      if (enableProfilerTimer && (unitOfWork.mode & ProfileMode) !== NoMode) {
        startProfilerTimer(unitOfWork);
        next = beginWork$$1(current$$1, unitOfWork, renderExpirationTime);
        stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
      } else {
        next = beginWork$$1(current$$1, unitOfWork, renderExpirationTime);
      }

      resetCurrentFiber();
      unitOfWork.memoizedProps = unitOfWork.pendingProps;

      if (next === null) {
        // If this doesn't spawn new work, complete the current work.
        next = completeUnitOfWork(unitOfWork);
      }

      ReactCurrentOwner$1.current = null;
      return next;
    }

    function completeUnitOfWork(unitOfWork) {
      // Attempt to complete the current unit of work, then move to the next
      // sibling. If there are no more siblings, return to the parent fiber.
      workInProgress = unitOfWork;

      do {
        // The current, flushed, state of this fiber is the alternate. Ideally
        // nothing should rely on this, but relying on it here means that we don't
        // need an additional field on the work in progress.
        var current$$1 = workInProgress.alternate;
        var returnFiber = workInProgress.return; // Check if the work completed or if something threw.

        if ((workInProgress.effectTag & Incomplete) === NoEffect) {
          setCurrentFiber(workInProgress);
          var next = void 0;

          if (!enableProfilerTimer || (workInProgress.mode & ProfileMode) === NoMode) {
            next = completeWork(current$$1, workInProgress, renderExpirationTime);
          } else {
            startProfilerTimer(workInProgress);
            next = completeWork(current$$1, workInProgress, renderExpirationTime); // Update render duration assuming we didn't error.

            stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false);
          }

          stopWorkTimer(workInProgress);
          resetCurrentFiber();
          resetChildExpirationTime(workInProgress);

          if (next !== null) {
            // Completing this fiber spawned new work. Work on that next.
            return next;
          }

          if (returnFiber !== null && // Do not append effects to parents if a sibling failed to complete
          (returnFiber.effectTag & Incomplete) === NoEffect) {
            // Append all the effects of the subtree and this fiber onto the effect
            // list of the parent. The completion order of the children affects the
            // side-effect order.
            if (returnFiber.firstEffect === null) {
              returnFiber.firstEffect = workInProgress.firstEffect;
            }

            if (workInProgress.lastEffect !== null) {
              if (returnFiber.lastEffect !== null) {
                returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
              }

              returnFiber.lastEffect = workInProgress.lastEffect;
            } // If this fiber had side-effects, we append it AFTER the children's
            // side-effects. We can perform certain side-effects earlier if needed,
            // by doing multiple passes over the effect list. We don't want to
            // schedule our own side-effect on our own list because if end up
            // reusing children we'll schedule this effect onto itself since we're
            // at the end.


            var effectTag = workInProgress.effectTag; // Skip both NoWork and PerformedWork tags when creating the effect
            // list. PerformedWork effect is read by React DevTools but shouldn't be
            // committed.

            if (effectTag > PerformedWork) {
              if (returnFiber.lastEffect !== null) {
                returnFiber.lastEffect.nextEffect = workInProgress;
              } else {
                returnFiber.firstEffect = workInProgress;
              }

              returnFiber.lastEffect = workInProgress;
            }
          }
        } else {
          // This fiber did not complete because something threw. Pop values off
          // the stack without entering the complete phase. If this is a boundary,
          // capture values if possible.
          var _next = unwindWork(workInProgress, renderExpirationTime); // Because this fiber did not complete, don't reset its expiration time.


          if (enableProfilerTimer && (workInProgress.mode & ProfileMode) !== NoMode) {
            // Record the render duration for the fiber that errored.
            stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false); // Include the time spent working on failed children before continuing.

            var actualDuration = workInProgress.actualDuration;
            var child = workInProgress.child;

            while (child !== null) {
              actualDuration += child.actualDuration;
              child = child.sibling;
            }

            workInProgress.actualDuration = actualDuration;
          }

          if (_next !== null) {
            // If completing this work spawned new work, do that next. We'll come
            // back here again.
            // Since we're restarting, remove anything that is not a host effect
            // from the effect tag.
            // TODO: The name stopFailedWorkTimer is misleading because Suspense
            // also captures and restarts.
            stopFailedWorkTimer(workInProgress);
            _next.effectTag &= HostEffectMask;
            return _next;
          }

          stopWorkTimer(workInProgress);

          if (returnFiber !== null) {
            // Mark the parent fiber as incomplete and clear its effect list.
            returnFiber.firstEffect = returnFiber.lastEffect = null;
            returnFiber.effectTag |= Incomplete;
          }
        }

        var siblingFiber = workInProgress.sibling;

        if (siblingFiber !== null) {
          // If there is more work to do in this returnFiber, do that next.
          return siblingFiber;
        } // Otherwise, return to the parent


        workInProgress = returnFiber;
      } while (workInProgress !== null); // We've reached the root.


      if (workInProgressRootExitStatus === RootIncomplete) {
        workInProgressRootExitStatus = RootCompleted;
      }

      return null;
    }

    function resetChildExpirationTime(completedWork) {
      if (renderExpirationTime !== Never && completedWork.childExpirationTime === Never) {
        // The children of this component are hidden. Don't bubble their
        // expiration times.
        return;
      }

      var newChildExpirationTime = NoWork; // Bubble up the earliest expiration time.

      if (enableProfilerTimer && (completedWork.mode & ProfileMode) !== NoMode) {
        // In profiling mode, resetChildExpirationTime is also used to reset
        // profiler durations.
        var actualDuration = completedWork.actualDuration;
        var treeBaseDuration = completedWork.selfBaseDuration; // When a fiber is cloned, its actualDuration is reset to 0. This value will
        // only be updated if work is done on the fiber (i.e. it doesn't bailout).
        // When work is done, it should bubble to the parent's actualDuration. If
        // the fiber has not been cloned though, (meaning no work was done), then
        // this value will reflect the amount of time spent working on a previous
        // render. In that case it should not bubble. We determine whether it was
        // cloned by comparing the child pointer.

        var shouldBubbleActualDurations = completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
        var child = completedWork.child;

        while (child !== null) {
          var childUpdateExpirationTime = child.expirationTime;
          var childChildExpirationTime = child.childExpirationTime;

          if (childUpdateExpirationTime > newChildExpirationTime) {
            newChildExpirationTime = childUpdateExpirationTime;
          }

          if (childChildExpirationTime > newChildExpirationTime) {
            newChildExpirationTime = childChildExpirationTime;
          }

          if (shouldBubbleActualDurations) {
            actualDuration += child.actualDuration;
          }

          treeBaseDuration += child.treeBaseDuration;
          child = child.sibling;
        }

        completedWork.actualDuration = actualDuration;
        completedWork.treeBaseDuration = treeBaseDuration;
      } else {
        var _child = completedWork.child;

        while (_child !== null) {
          var _childUpdateExpirationTime = _child.expirationTime;
          var _childChildExpirationTime = _child.childExpirationTime;

          if (_childUpdateExpirationTime > newChildExpirationTime) {
            newChildExpirationTime = _childUpdateExpirationTime;
          }

          if (_childChildExpirationTime > newChildExpirationTime) {
            newChildExpirationTime = _childChildExpirationTime;
          }

          _child = _child.sibling;
        }
      }

      completedWork.childExpirationTime = newChildExpirationTime;
    }

    function commitRoot(root) {
      var renderPriorityLevel = getCurrentPriorityLevel();
      runWithPriority(ImmediatePriority, commitRootImpl.bind(null, root, renderPriorityLevel)); // If there are passive effects, schedule a callback to flush them. This goes
      // outside commitRootImpl so that it inherits the priority of the render.

      if (rootWithPendingPassiveEffects !== null) {
        scheduleCallback(NormalPriority, function () {
          flushPassiveEffects();
          return null;
        });
      }

      return null;
    }

    function commitRootImpl(root, renderPriorityLevel) {
      flushPassiveEffects();
      flushRenderPhaseStrictModeWarningsInDEV();

      (function () {
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw ReactError(Error('Should not already be working.'));
          }
        }
      })();

      var finishedWork = root.finishedWork;
      var expirationTime = root.finishedExpirationTime;

      if (finishedWork === null) {
        return null;
      }

      root.finishedWork = null;
      root.finishedExpirationTime = NoWork;

      (function () {
        if (!(finishedWork !== root.current)) {
          {
            throw ReactError(Error('Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'));
          }
        }
      })(); // commitRoot never returns a continuation; it always finishes synchronously.
      // So we can clear these now to allow a new callback to be scheduled.


      root.callbackNode = null;
      root.callbackExpirationTime = NoWork;
      startCommitTimer(); // Update the first and last pending times on this root. The new first
      // pending time is whatever is left on the root fiber.

      var updateExpirationTimeBeforeCommit = finishedWork.expirationTime;
      var childExpirationTimeBeforeCommit = finishedWork.childExpirationTime;
      var firstPendingTimeBeforeCommit = childExpirationTimeBeforeCommit > updateExpirationTimeBeforeCommit ? childExpirationTimeBeforeCommit : updateExpirationTimeBeforeCommit;
      root.firstPendingTime = firstPendingTimeBeforeCommit;

      if (firstPendingTimeBeforeCommit < root.lastPendingTime) {
        // This usually means we've finished all the work, but it can also happen
        // when something gets downprioritized during render, like a hidden tree.
        root.lastPendingTime = firstPendingTimeBeforeCommit;
      }

      if (root === workInProgressRoot) {
        // We can reset these now that they are finished.
        workInProgressRoot = null;
        workInProgress = null;
        renderExpirationTime = NoWork;
      } else {} // This indicates that the last root we worked on is not the same one that
      // we're committing now. This most commonly happens when a suspended root
      // times out.
      // Get the list of effects.


      var firstEffect = void 0;

      if (finishedWork.effectTag > PerformedWork) {
        // A fiber's effect list consists only of its children, not itself. So if
        // the root has an effect, we need to add it to the end of the list. The
        // resulting list is the set that would belong to the root's parent, if it
        // had one; that is, all the effects in the tree including the root.
        if (finishedWork.lastEffect !== null) {
          finishedWork.lastEffect.nextEffect = finishedWork;
          firstEffect = finishedWork.firstEffect;
        } else {
          firstEffect = finishedWork;
        }
      } else {
        // There is no effect on the root.
        firstEffect = finishedWork.firstEffect;
      }

      if (firstEffect !== null) {
        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        var prevInteractions = null;

        if (enableSchedulerTracing) {
          prevInteractions = tracing.__interactionsRef.current;
          tracing.__interactionsRef.current = root.memoizedInteractions;
        } // Reset this to null before calling lifecycles


        ReactCurrentOwner$1.current = null; // The commit phase is broken into several sub-phases. We do a separate pass
        // of the effect list for each phase: all mutation effects come before all
        // layout effects, and so on.
        // The first phase a "before mutation" phase. We use this phase to read the
        // state of the host tree right before we mutate it. This is where
        // getSnapshotBeforeUpdate is called.

        startCommitSnapshotEffectsTimer();
        prepareForCommit(root.containerInfo);
        nextEffect = firstEffect;

        do {
          {
            invokeGuardedCallback(null, commitBeforeMutationEffects, null);

            if (hasCaughtError()) {
              (function () {
                if (!(nextEffect !== null)) {
                  {
                    throw ReactError(Error('Should be working on an effect.'));
                  }
                }
              })();

              var error = clearCaughtError();
              captureCommitPhaseError(nextEffect, error);
              nextEffect = nextEffect.nextEffect;
            }
          }
        } while (nextEffect !== null);

        stopCommitSnapshotEffectsTimer();

        if (enableProfilerTimer) {
          // Mark the current commit time to be shared by all Profilers in this
          // batch. This enables them to be grouped later.
          recordCommitTime();
        } // The next phase is the mutation phase, where we mutate the host tree.


        startCommitHostEffectsTimer();
        nextEffect = firstEffect;

        do {
          {
            invokeGuardedCallback(null, commitMutationEffects, null, renderPriorityLevel);

            if (hasCaughtError()) {
              (function () {
                if (!(nextEffect !== null)) {
                  {
                    throw ReactError(Error('Should be working on an effect.'));
                  }
                }
              })();

              var _error = clearCaughtError();

              captureCommitPhaseError(nextEffect, _error);
              nextEffect = nextEffect.nextEffect;
            }
          }
        } while (nextEffect !== null);

        stopCommitHostEffectsTimer();
        resetAfterCommit(root.containerInfo); // The work-in-progress tree is now the current tree. This must come after
        // the mutation phase, so that the previous tree is still current during
        // componentWillUnmount, but before the layout phase, so that the finished
        // work is current during componentDidMount/Update.

        root.current = finishedWork; // The next phase is the layout phase, where we call effects that read
        // the host tree after it's been mutated. The idiomatic use case for this is
        // layout, but class component lifecycles also fire here for legacy reasons.

        startCommitLifeCyclesTimer();
        nextEffect = firstEffect;

        do {
          {
            invokeGuardedCallback(null, commitLayoutEffects, null, root, expirationTime);

            if (hasCaughtError()) {
              (function () {
                if (!(nextEffect !== null)) {
                  {
                    throw ReactError(Error('Should be working on an effect.'));
                  }
                }
              })();

              var _error2 = clearCaughtError();

              captureCommitPhaseError(nextEffect, _error2);
              nextEffect = nextEffect.nextEffect;
            }
          }
        } while (nextEffect !== null);

        stopCommitLifeCyclesTimer();
        nextEffect = null; // Tell Scheduler to yield at the end of the frame, so the browser has an
        // opportunity to paint.

        requestPaint();

        if (enableSchedulerTracing) {
          tracing.__interactionsRef.current = prevInteractions;
        }

        executionContext = prevExecutionContext;
      } else {
        // No effects.
        root.current = finishedWork; // Measure these anyway so the flamegraph explicitly shows that there were
        // no effects.
        // TODO: Maybe there's a better way to report this.

        startCommitSnapshotEffectsTimer();
        stopCommitSnapshotEffectsTimer();

        if (enableProfilerTimer) {
          recordCommitTime();
        }

        startCommitHostEffectsTimer();
        stopCommitHostEffectsTimer();
        startCommitLifeCyclesTimer();
        stopCommitLifeCyclesTimer();
      }

      stopCommitTimer();
      var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;

      if (rootDoesHavePassiveEffects) {
        // This commit has passive effects. Stash a reference to them. But don't
        // schedule a callback until after flushing layout work.
        rootDoesHavePassiveEffects = false;
        rootWithPendingPassiveEffects = root;
        pendingPassiveEffectsExpirationTime = expirationTime;
        pendingPassiveEffectsRenderPriority = renderPriorityLevel;
      } else {
        // We are done with the effect chain at this point so let's clear the
        // nextEffect pointers to assist with GC. If we have passive effects, we'll
        // clear this in flushPassiveEffects.
        nextEffect = firstEffect;

        while (nextEffect !== null) {
          var nextNextEffect = nextEffect.nextEffect;
          nextEffect.nextEffect = null;
          nextEffect = nextNextEffect;
        }
      } // Check if there's remaining work on this root


      var remainingExpirationTime = root.firstPendingTime;

      if (remainingExpirationTime !== NoWork) {
        var currentTime = requestCurrentTime();
        var priorityLevel = inferPriorityFromExpirationTime(currentTime, remainingExpirationTime);

        if (enableSchedulerTracing) {
          if (spawnedWorkDuringRender !== null) {
            var expirationTimes = spawnedWorkDuringRender;
            spawnedWorkDuringRender = null;

            for (var i = 0; i < expirationTimes.length; i++) {
              scheduleInteractions(root, expirationTimes[i], root.memoizedInteractions);
            }
          }
        }

        scheduleCallbackForRoot(root, priorityLevel, remainingExpirationTime);
      } else {
        // If there's no remaining work, we can clear the set of already failed
        // error boundaries.
        legacyErrorBoundariesThatAlreadyFailed = null;
      }

      if (enableSchedulerTracing) {
        if (!rootDidHavePassiveEffects) {
          // If there are no passive effects, then we can complete the pending interactions.
          // Otherwise, we'll wait until after the passive effects are flushed.
          // Wait to do this until after remaining work has been scheduled,
          // so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
          finishPendingInteractions(root, expirationTime);
        }
      }

      onCommitRoot(finishedWork.stateNode, expirationTime);

      if (remainingExpirationTime === Sync) {
        // Count the number of times the root synchronously re-renders without
        // finishing. If there are too many, it indicates an infinite update loop.
        if (root === rootWithNestedUpdates) {
          nestedUpdateCount++;
        } else {
          nestedUpdateCount = 0;
          rootWithNestedUpdates = root;
        }
      } else {
        nestedUpdateCount = 0;
      }

      if (hasUncaughtError) {
        hasUncaughtError = false;
        var _error3 = firstUncaughtError;
        firstUncaughtError = null;
        throw _error3;
      }

      if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
        // This is a legacy edge case. We just committed the initial mount of
        // a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
        // synchronously, but layout updates should be deferred until the end
        // of the batch.
        return null;
      } // If layout work was scheduled, flush it now.


      flushSyncCallbackQueue();
      return null;
    }

    function commitBeforeMutationEffects() {
      while (nextEffect !== null) {
        if ((nextEffect.effectTag & Snapshot) !== NoEffect) {
          setCurrentFiber(nextEffect);
          recordEffect();
          var current$$1 = nextEffect.alternate;
          commitBeforeMutationLifeCycles(current$$1, nextEffect);
          resetCurrentFiber();
        }

        nextEffect = nextEffect.nextEffect;
      }
    }

    function commitMutationEffects(renderPriorityLevel) {
      // TODO: Should probably move the bulk of this function to commitWork.
      while (nextEffect !== null) {
        setCurrentFiber(nextEffect);
        var effectTag = nextEffect.effectTag;

        if (effectTag & ContentReset) {
          commitResetTextContent(nextEffect);
        }

        if (effectTag & Ref) {
          var current$$1 = nextEffect.alternate;

          if (current$$1 !== null) {
            commitDetachRef(current$$1);
          }
        } // The following switch statement is only concerned about placement,
        // updates, and deletions. To avoid needing to add a case for every possible
        // bitmap value, we remove the secondary effects from the effect tag and
        // switch on that value.


        var primaryEffectTag = effectTag & (Placement | Update | Deletion);

        switch (primaryEffectTag) {
          case Placement:
            {
              commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
              // inserted, before any life-cycles like componentDidMount gets called.
              // TODO: findDOMNode doesn't rely on this any more but isMounted does
              // and isMounted is deprecated anyway so we should be able to kill this.

              nextEffect.effectTag &= ~Placement;
              break;
            }

          case PlacementAndUpdate:
            {
              // Placement
              commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
              // inserted, before any life-cycles like componentDidMount gets called.

              nextEffect.effectTag &= ~Placement; // Update

              var _current = nextEffect.alternate;
              commitWork(_current, nextEffect);
              break;
            }

          case Update:
            {
              var _current2 = nextEffect.alternate;
              commitWork(_current2, nextEffect);
              break;
            }

          case Deletion:
            {
              commitDeletion(nextEffect, renderPriorityLevel);
              break;
            }
        } // TODO: Only record a mutation effect if primaryEffectTag is non-zero.


        recordEffect();
        resetCurrentFiber();
        nextEffect = nextEffect.nextEffect;
      }
    }

    function commitLayoutEffects(root, committedExpirationTime) {
      // TODO: Should probably move the bulk of this function to commitWork.
      while (nextEffect !== null) {
        setCurrentFiber(nextEffect);
        var effectTag = nextEffect.effectTag;

        if (effectTag & (Update | Callback)) {
          recordEffect();
          var current$$1 = nextEffect.alternate;
          commitLifeCycles(root, current$$1, nextEffect, committedExpirationTime);
        }

        if (effectTag & Ref) {
          recordEffect();
          commitAttachRef(nextEffect);
        }

        if (effectTag & Passive) {
          rootDoesHavePassiveEffects = true;
        }

        resetCurrentFiber();
        nextEffect = nextEffect.nextEffect;
      }
    }

    function flushPassiveEffects() {
      if (rootWithPendingPassiveEffects === null) {
        return false;
      }

      var root = rootWithPendingPassiveEffects;
      var expirationTime = pendingPassiveEffectsExpirationTime;
      var renderPriorityLevel = pendingPassiveEffectsRenderPriority;
      rootWithPendingPassiveEffects = null;
      pendingPassiveEffectsExpirationTime = NoWork;
      pendingPassiveEffectsRenderPriority = NoPriority;
      var priorityLevel = renderPriorityLevel > NormalPriority ? NormalPriority : renderPriorityLevel;
      return runWithPriority(priorityLevel, flushPassiveEffectsImpl.bind(null, root, expirationTime));
    }

    function flushPassiveEffectsImpl(root, expirationTime) {
      var prevInteractions = null;

      if (enableSchedulerTracing) {
        prevInteractions = tracing.__interactionsRef.current;
        tracing.__interactionsRef.current = root.memoizedInteractions;
      }

      (function () {
        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw ReactError(Error('Cannot flush passive effects while already rendering.'));
          }
        }
      })();

      var prevExecutionContext = executionContext;
      executionContext |= CommitContext; // Note: This currently assumes there are no passive effects on the root
      // fiber, because the root is not part of its own effect list. This could
      // change in the future.

      var effect = root.current.firstEffect;

      while (effect !== null) {
        {
          setCurrentFiber(effect);
          invokeGuardedCallback(null, commitPassiveHookEffects, null, effect);

          if (hasCaughtError()) {
            (function () {
              if (!(effect !== null)) {
                {
                  throw ReactError(Error('Should be working on an effect.'));
                }
              }
            })();

            var error = clearCaughtError();
            captureCommitPhaseError(effect, error);
          }

          resetCurrentFiber();
        }
        var nextNextEffect = effect.nextEffect; // Remove nextEffect pointer to assist GC

        effect.nextEffect = null;
        effect = nextNextEffect;
      }

      if (enableSchedulerTracing) {
        tracing.__interactionsRef.current = prevInteractions;
        finishPendingInteractions(root, expirationTime);
      }

      executionContext = prevExecutionContext;
      flushSyncCallbackQueue(); // If additional passive effects were scheduled, increment a counter. If this
      // exceeds the limit, we'll fire a warning.

      nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
      return true;
    }

    function isAlreadyFailedLegacyErrorBoundary(instance) {
      return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
    }

    function markLegacyErrorBoundaryAsFailed(instance) {
      if (legacyErrorBoundariesThatAlreadyFailed === null) {
        legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
      } else {
        legacyErrorBoundariesThatAlreadyFailed.add(instance);
      }
    }

    function prepareToThrowUncaughtError(error) {
      if (!hasUncaughtError) {
        hasUncaughtError = true;
        firstUncaughtError = error;
      }
    }

    var onUncaughtError = prepareToThrowUncaughtError;

    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
      var errorInfo = createCapturedValue(error, sourceFiber);
      var update = createRootErrorUpdate(rootFiber, errorInfo, Sync);
      enqueueUpdate(rootFiber, update);
      var root = markUpdateTimeFromFiberToRoot(rootFiber, Sync);

      if (root !== null) {
        scheduleCallbackForRoot(root, ImmediatePriority, Sync);
      }
    }

    function captureCommitPhaseError(sourceFiber, error) {
      if (sourceFiber.tag === HostRoot) {
        // Error was thrown at the root. There is no parent, so the root
        // itself should capture it.
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
        return;
      }

      var fiber = sourceFiber.return;

      while (fiber !== null) {
        if (fiber.tag === HostRoot) {
          captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error);
          return;
        } else if (fiber.tag === ClassComponent) {
          var ctor = fiber.type;
          var instance = fiber.stateNode;

          if (typeof ctor.getDerivedStateFromError === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
            var errorInfo = createCapturedValue(error, sourceFiber);
            var update = createClassErrorUpdate(fiber, errorInfo, // TODO: This is always sync
            Sync);
            enqueueUpdate(fiber, update);
            var root = markUpdateTimeFromFiberToRoot(fiber, Sync);

            if (root !== null) {
              scheduleCallbackForRoot(root, ImmediatePriority, Sync);
            }

            return;
          }
        }

        fiber = fiber.return;
      }
    }

    function pingSuspendedRoot(root, thenable, suspendedTime) {
      var pingCache = root.pingCache;

      if (pingCache !== null) {
        // The thenable resolved, so we no longer need to memoize, because it will
        // never be thrown again.
        pingCache.delete(thenable);
      }

      if (workInProgressRoot === root && renderExpirationTime === suspendedTime) {
        // Received a ping at the same priority level at which we're currently
        // rendering. We might want to restart this render. This should mirror
        // the logic of whether or not a root suspends once it completes.
        // TODO: If we're rendering sync either due to Sync, Batched or expired,
        // we should probably never restart.
        // If we're suspended with delay, we'll always suspend so we can always
        // restart. If we're suspended without any updates, it might be a retry.
        // If it's early in the retry we can restart. We can't know for sure
        // whether we'll eventually process an update during this render pass,
        // but it's somewhat unlikely that we get to a ping before that, since
        // getting to the root most update is usually very fast.
        if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && workInProgressRootLatestProcessedExpirationTime === Sync && now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
          // Restart from the root. Don't need to schedule a ping because
          // we're already working on this tree.
          prepareFreshStack(root, renderExpirationTime);
        } else {
          // Even though we can't restart right now, we might get an
          // opportunity later. So we mark this render as having a ping.
          workInProgressRootHasPendingPing = true;
        }

        return;
      }

      var lastPendingTime = root.lastPendingTime;

      if (lastPendingTime < suspendedTime) {
        // The root is no longer suspended at this time.
        return;
      }

      var pingTime = root.pingTime;

      if (pingTime !== NoWork && pingTime < suspendedTime) {
        // There's already a lower priority ping scheduled.
        return;
      } // Mark the time at which this ping was scheduled.


      root.pingTime = suspendedTime;

      if (root.finishedExpirationTime === suspendedTime) {
        // If there's a pending fallback waiting to commit, throw it away.
        root.finishedExpirationTime = NoWork;
        root.finishedWork = null;
      }

      var currentTime = requestCurrentTime();
      var priorityLevel = inferPriorityFromExpirationTime(currentTime, suspendedTime);
      scheduleCallbackForRoot(root, priorityLevel, suspendedTime);
    }

    function retryTimedOutBoundary(boundaryFiber) {
      // The boundary fiber (a Suspense component or SuspenseList component)
      // previously was rendered in its fallback state. One of the promises that
      // suspended it has resolved, which means at least part of the tree was
      // likely unblocked. Try rendering again, at a new expiration time.
      var currentTime = requestCurrentTime();
      var suspenseConfig = null; // Retries don't carry over the already committed update.

      var retryTime = computeExpirationForFiber(currentTime, boundaryFiber, suspenseConfig); // TODO: Special case idle priority?

      var priorityLevel = inferPriorityFromExpirationTime(currentTime, retryTime);
      var root = markUpdateTimeFromFiberToRoot(boundaryFiber, retryTime);

      if (root !== null) {
        scheduleCallbackForRoot(root, priorityLevel, retryTime);
      }
    }

    function resolveRetryThenable(boundaryFiber, thenable) {
      var retryCache = void 0;

      if (enableSuspenseServerRenderer) {
        switch (boundaryFiber.tag) {
          case SuspenseComponent:
            retryCache = boundaryFiber.stateNode;
            break;

          case DehydratedSuspenseComponent:
            retryCache = boundaryFiber.memoizedState;
            break;

          default:
            (function () {
              {
                {
                  throw ReactError(Error('Pinged unknown suspense boundary type. This is probably a bug in React.'));
                }
              }
            })();

        }
      } else {
        retryCache = boundaryFiber.stateNode;
      }

      if (retryCache !== null) {
        // The thenable resolved, so we no longer need to memoize, because it will
        // never be thrown again.
        retryCache.delete(thenable);
      }

      retryTimedOutBoundary(boundaryFiber);
    } // Computes the next Just Noticeable Difference (JND) boundary.
    // The theory is that a person can't tell the difference between small differences in time.
    // Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
    // difference in the experience. However, waiting for longer might mean that we can avoid
    // showing an intermediate loading state. The longer we have already waited, the harder it
    // is to tell small differences in time. Therefore, the longer we've already waited,
    // the longer we can wait additionally. At some point we have to give up though.
    // We pick a train model where the next boundary commits at a consistent schedule.
    // These particular numbers are vague estimates. We expect to adjust them based on research.


    function jnd(timeElapsed) {
      return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3000 ? 3000 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
    }

    function computeMsUntilSuspenseLoadingDelay(mostRecentEventTime, committedExpirationTime, suspenseConfig) {
      var busyMinDurationMs = suspenseConfig.busyMinDurationMs | 0;

      if (busyMinDurationMs <= 0) {
        return 0;
      }

      var busyDelayMs = suspenseConfig.busyDelayMs | 0; // Compute the time until this render pass would expire.

      var currentTimeMs = now$1();
      var eventTimeMs = inferTimeFromExpirationTimeWithSuspenseConfig(mostRecentEventTime, suspenseConfig);
      var timeElapsed = currentTimeMs - eventTimeMs;

      if (timeElapsed <= busyDelayMs) {
        // If we haven't yet waited longer than the initial delay, we don't
        // have to wait any additional time.
        return 0;
      }

      var msUntilTimeout = busyDelayMs + busyMinDurationMs - timeElapsed; // This is the value that is passed to `setTimeout`.

      return msUntilTimeout;
    }

    function checkForNestedUpdates() {
      if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
        nestedUpdateCount = 0;
        rootWithNestedUpdates = null;

        (function () {
          {
            {
              throw ReactError(Error('Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'));
            }
          }
        })();
      }

      {
        if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
          nestedPassiveUpdateCount = 0;
          warning$1(false, 'Maximum update depth exceeded. This can happen when a component ' + "calls setState inside useEffect, but useEffect either doesn't " + 'have a dependency array, or one of the dependencies changes on ' + 'every render.');
        }
      }
    }

    function flushRenderPhaseStrictModeWarningsInDEV() {
      {
        ReactStrictModeWarnings.flushLegacyContextWarning();

        if (warnAboutDeprecatedLifecycles) {
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
        }
      }
    }

    function stopFinishedWorkLoopTimer() {
      var didCompleteRoot = true;
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
    }

    function stopInterruptedWorkLoopTimer() {
      // TODO: Track which fiber caused the interruption.
      var didCompleteRoot = false;
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
    }

    function checkForInterruption(fiberThatReceivedUpdate, updateExpirationTime) {
      if (enableUserTimingAPI && workInProgressRoot !== null && updateExpirationTime > renderExpirationTime) {
        interruptedBy = fiberThatReceivedUpdate;
      }
    }

    var didWarnStateUpdateForUnmountedComponent = null;

    function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
      {
        var tag = fiber.tag;

        if (tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent) {
          // Only warn for user-defined components, not internal ones like Suspense.
          return;
        } // We show the whole stack but dedupe on the top component's name because
        // the problematic code almost always lies inside that component.


        var componentName = getComponentName(fiber.type) || 'ReactComponent';

        if (didWarnStateUpdateForUnmountedComponent !== null) {
          if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
            return;
          }

          didWarnStateUpdateForUnmountedComponent.add(componentName);
        } else {
          didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
        }

        warningWithoutStack$1(false, "Can't perform a React state update on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in %s.%s', tag === ClassComponent ? 'the componentWillUnmount method' : 'a useEffect cleanup function', getStackByFiberInDevAndProd(fiber));
      }
    }

    var beginWork$$1 = void 0;

    if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
      var dummyFiber = null;

      beginWork$$1 = function (current$$1, unitOfWork, expirationTime) {
        // If a component throws an error, we replay it again in a synchronously
        // dispatched event, so that the debugger will treat it as an uncaught
        // error See ReactErrorUtils for more information.
        // Before entering the begin phase, copy the work-in-progress onto a dummy
        // fiber. If beginWork throws, we'll use this to reset the state.
        var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);

        try {
          return beginWork$1(current$$1, unitOfWork, expirationTime);
        } catch (originalError) {
          if (originalError !== null && typeof originalError === 'object' && typeof originalError.then === 'function') {
            // Don't replay promises. Treat everything else like an error.
            throw originalError;
          } // Keep this code in sync with renderRoot; any changes here must have
          // corresponding changes there.


          resetContextDependencies();
          resetHooks(); // Unwind the failed stack frame

          unwindInterruptedWork(unitOfWork); // Restore the original properties of the fiber.

          assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);

          if (enableProfilerTimer && unitOfWork.mode & ProfileMode) {
            // Reset the profiler timer.
            startProfilerTimer(unitOfWork);
          } // Run beginWork again.


          invokeGuardedCallback(null, beginWork$1, null, current$$1, unitOfWork, expirationTime);

          if (hasCaughtError()) {
            var replayError = clearCaughtError(); // `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
            // Rethrow this error instead of the original one.

            throw replayError;
          } else {
            // This branch is reachable if the render phase is impure.
            throw originalError;
          }
        }
      };
    } else {
      beginWork$$1 = beginWork$1;
    }

    var didWarnAboutUpdateInRender = false;
    var didWarnAboutUpdateInGetChildContext = false;

    function warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber) {
      {
        if (fiber.tag === ClassComponent) {
          switch (phase) {
            case 'getChildContext':
              if (didWarnAboutUpdateInGetChildContext) {
                return;
              }

              warningWithoutStack$1(false, 'setState(...): Cannot call setState() inside getChildContext()');
              didWarnAboutUpdateInGetChildContext = true;
              break;

            case 'render':
              if (didWarnAboutUpdateInRender) {
                return;
              }

              warningWithoutStack$1(false, 'Cannot update during an existing state transition (such as ' + 'within `render`). Render methods should be a pure function of ' + 'props and state.');
              didWarnAboutUpdateInRender = true;
              break;
          }
        }
      }
    } // a 'shared' variable that changes when act() opens/closes in tests.


    var IsThisRendererActing = {
      current: false
    };

    function warnIfNotScopedWithMatchingAct(fiber) {
      {
        if (warnsIfNotActing === true && IsSomeRendererActing.current === true && IsThisRendererActing.current !== true) {
          warningWithoutStack$1(false, "It looks like you're using the wrong act() around your test interactions.\n" + 'Be sure to use the matching version of act() corresponding to your renderer:\n\n' + '// for react-dom:\n' + "import {act} from 'react-dom/test-utils';\n" + '//...\n' + 'act(() => ...);\n\n' + '// for react-test-renderer:\n' + "import TestRenderer from 'react-test-renderer';\n" + 'const {act} = TestRenderer;\n' + '//...\n' + 'act(() => ...);' + '%s', getStackByFiberInDevAndProd(fiber));
        }
      }
    }

    function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
      {
        if (warnsIfNotActing === true && (fiber.mode & StrictMode) !== NoMode && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
          warningWithoutStack$1(false, 'An update to %s ran an effect, but was not wrapped in act(...).\n\n' + 'When testing, code that causes React state updates should be ' + 'wrapped into act(...):\n\n' + 'act(() => {\n' + '  /* fire events that update state */\n' + '});\n' + '/* assert on the output */\n\n' + "This ensures that you're testing the behavior the user would see " + 'in the browser.' + ' Learn more at https://fb.me/react-wrap-tests-with-act' + '%s', getComponentName(fiber.type), getStackByFiberInDevAndProd(fiber));
        }
      }
    }

    function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
      {
        if (warnsIfNotActing === true && executionContext === NoContext && IsSomeRendererActing.current === false && IsThisRendererActing.current === false) {
          warningWithoutStack$1(false, 'An update to %s inside a test was not wrapped in act(...).\n\n' + 'When testing, code that causes React state updates should be ' + 'wrapped into act(...):\n\n' + 'act(() => {\n' + '  /* fire events that update state */\n' + '});\n' + '/* assert on the output */\n\n' + "This ensures that you're testing the behavior the user would see " + 'in the browser.' + ' Learn more at https://fb.me/react-wrap-tests-with-act' + '%s', getComponentName(fiber.type), getStackByFiberInDevAndProd(fiber));
        }
      }
    }

    var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV; // In tests, we want to enforce a mocked scheduler.

    var didWarnAboutUnmockedScheduler = false; // TODO Before we release concurrent mode, revisit this and decide whether a mocked
    // scheduler is the actual recommendation. The alternative could be a testing build,
    // a new lib, or whatever; we dunno just yet. This message is for early adopters
    // to get their tests right.

    function warnIfUnmockedScheduler(fiber) {
      {
        if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === undefined) {
          if (fiber.mode & BatchedMode || fiber.mode & ConcurrentMode) {
            didWarnAboutUnmockedScheduler = true;
            warningWithoutStack$1(false, 'In Concurrent or Sync modes, the "scheduler" module needs to be mocked ' + 'to guarantee consistent behaviour across tests and browsers. ' + 'For example, with jest: \n' + "jest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\n" + 'For more info, visit https://fb.me/react-mock-scheduler');
          } else if (warnAboutUnmockedScheduler === true) {
            didWarnAboutUnmockedScheduler = true;
            warningWithoutStack$1(false, 'Starting from React v17, the "scheduler" module will need to be mocked ' + 'to guarantee consistent behaviour across tests and browsers. ' + 'For example, with jest: \n' + "jest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\n" + 'For more info, visit https://fb.me/react-mock-scheduler');
          }
        }
      }
    }

    var componentsThatTriggeredHighPriSuspend = null;

    function checkForWrongSuspensePriorityInDEV(sourceFiber) {
      {
        var currentPriorityLevel = getCurrentPriorityLevel();

        if ((sourceFiber.mode & ConcurrentMode) !== NoEffect && (currentPriorityLevel === UserBlockingPriority || currentPriorityLevel === ImmediatePriority)) {
          var workInProgressNode = sourceFiber;

          while (workInProgressNode !== null) {
            // Add the component that triggered the suspense
            var current$$1 = workInProgressNode.alternate;

            if (current$$1 !== null) {
              // TODO: warn component that triggers the high priority
              // suspend is the HostRoot
              switch (workInProgressNode.tag) {
                case ClassComponent:
                  // Loop through the component's update queue and see whether the component
                  // has triggered any high priority updates
                  var updateQueue = current$$1.updateQueue;

                  if (updateQueue !== null) {
                    var update = updateQueue.firstUpdate;

                    while (update !== null) {
                      var priorityLevel = update.priority;

                      if (priorityLevel === UserBlockingPriority || priorityLevel === ImmediatePriority) {
                        if (componentsThatTriggeredHighPriSuspend === null) {
                          componentsThatTriggeredHighPriSuspend = new Set([getComponentName(workInProgressNode.type)]);
                        } else {
                          componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));
                        }

                        break;
                      }

                      update = update.next;
                    }
                  }

                  break;

                case FunctionComponent:
                case ForwardRef:
                case SimpleMemoComponent:
                  if (workInProgressNode.memoizedState !== null && workInProgressNode.memoizedState.baseUpdate !== null) {
                    var _update = workInProgressNode.memoizedState.baseUpdate; // Loop through the functional component's memoized state to see whether
                    // the component has triggered any high pri updates

                    while (_update !== null) {
                      var priority = _update.priority;

                      if (priority === UserBlockingPriority || priority === ImmediatePriority) {
                        if (componentsThatTriggeredHighPriSuspend === null) {
                          componentsThatTriggeredHighPriSuspend = new Set([getComponentName(workInProgressNode.type)]);
                        } else {
                          componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));
                        }

                        break;
                      }

                      if (_update.next === workInProgressNode.memoizedState.baseUpdate) {
                        break;
                      }

                      _update = _update.next;
                    }
                  }

                  break;

                default:
                  break;
              }
            }

            workInProgressNode = workInProgressNode.return;
          }
        }
      }
    }

    function flushSuspensePriorityWarningInDEV() {
      {
        if (componentsThatTriggeredHighPriSuspend !== null) {
          var componentNames = [];
          componentsThatTriggeredHighPriSuspend.forEach(function (name) {
            return componentNames.push(name);
          });
          componentsThatTriggeredHighPriSuspend = null;

          if (componentNames.length > 0) {
            warningWithoutStack$1(false, '%s triggered a user-blocking update that suspended.' + '\n\n' + 'The fix is to split the update into multiple parts: a user-blocking ' + 'update to provide immediate feedback, and another update that ' + 'triggers the bulk of the changes.' + '\n\n' + 'Refer to the documentation for useSuspenseTransition to learn how ' + 'to implement this pattern.', // TODO: Add link to React docs with more information, once it exists
            componentNames.sort().join(', '));
          }
        }
      }
    }

    function computeThreadID(root, expirationTime) {
      // Interaction threads are unique per root and expiration time.
      return expirationTime * 1000 + root.interactionThreadID;
    }

    function markSpawnedWork(expirationTime) {
      if (!enableSchedulerTracing) {
        return;
      }

      if (spawnedWorkDuringRender === null) {
        spawnedWorkDuringRender = [expirationTime];
      } else {
        spawnedWorkDuringRender.push(expirationTime);
      }
    }

    function scheduleInteractions(root, expirationTime, interactions) {
      if (!enableSchedulerTracing) {
        return;
      }

      if (interactions.size > 0) {
        var pendingInteractionMap = root.pendingInteractionMap;
        var pendingInteractions = pendingInteractionMap.get(expirationTime);

        if (pendingInteractions != null) {
          interactions.forEach(function (interaction) {
            if (!pendingInteractions.has(interaction)) {
              // Update the pending async work count for previously unscheduled interaction.
              interaction.__count++;
            }

            pendingInteractions.add(interaction);
          });
        } else {
          pendingInteractionMap.set(expirationTime, new Set(interactions)); // Update the pending async work count for the current interactions.

          interactions.forEach(function (interaction) {
            interaction.__count++;
          });
        }

        var subscriber = tracing.__subscriberRef.current;

        if (subscriber !== null) {
          var threadID = computeThreadID(root, expirationTime);
          subscriber.onWorkScheduled(interactions, threadID);
        }
      }
    }

    function schedulePendingInteractions(root, expirationTime) {
      // This is called when work is scheduled on a root.
      // It associates the current interactions with the newly-scheduled expiration.
      // They will be restored when that expiration is later committed.
      if (!enableSchedulerTracing) {
        return;
      }

      scheduleInteractions(root, expirationTime, tracing.__interactionsRef.current);
    }

    function startWorkOnPendingInteractions(root, expirationTime) {
      // This is called when new work is started on a root.
      if (!enableSchedulerTracing) {
        return;
      } // Determine which interactions this batch of work currently includes, So that
      // we can accurately attribute time spent working on it, And so that cascading
      // work triggered during the render phase will be associated with it.


      var interactions = new Set();
      root.pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
        if (scheduledExpirationTime >= expirationTime) {
          scheduledInteractions.forEach(function (interaction) {
            return interactions.add(interaction);
          });
        }
      }); // Store the current set of interactions on the FiberRoot for a few reasons:
      // We can re-use it in hot functions like renderRoot() without having to
      // recalculate it. We will also use it in commitWork() to pass to any Profiler
      // onRender() hooks. This also provides DevTools with a way to access it when
      // the onCommitRoot() hook is called.

      root.memoizedInteractions = interactions;

      if (interactions.size > 0) {
        var subscriber = tracing.__subscriberRef.current;

        if (subscriber !== null) {
          var threadID = computeThreadID(root, expirationTime);

          try {
            subscriber.onWorkStarted(interactions, threadID);
          } catch (error) {
            // If the subscriber throws, rethrow it in a separate task
            scheduleCallback(ImmediatePriority, function () {
              throw error;
            });
          }
        }
      }
    }

    function finishPendingInteractions(root, committedExpirationTime) {
      if (!enableSchedulerTracing) {
        return;
      }

      var earliestRemainingTimeAfterCommit = root.firstPendingTime;
      var subscriber = void 0;

      try {
        subscriber = tracing.__subscriberRef.current;

        if (subscriber !== null && root.memoizedInteractions.size > 0) {
          var threadID = computeThreadID(root, committedExpirationTime);
          subscriber.onWorkStopped(root.memoizedInteractions, threadID);
        }
      } catch (error) {
        // If the subscriber throws, rethrow it in a separate task
        scheduleCallback(ImmediatePriority, function () {
          throw error;
        });
      } finally {
        // Clear completed interactions from the pending Map.
        // Unless the render was suspended or cascading work was scheduled,
        // In which case– leave pending interactions until the subsequent render.
        var pendingInteractionMap = root.pendingInteractionMap;
        pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
          // Only decrement the pending interaction count if we're done.
          // If there's still work at the current priority,
          // That indicates that we are waiting for suspense data.
          if (scheduledExpirationTime > earliestRemainingTimeAfterCommit) {
            pendingInteractionMap.delete(scheduledExpirationTime);
            scheduledInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                try {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                } catch (error) {
                  // If the subscriber throws, rethrow it in a separate task
                  scheduleCallback(ImmediatePriority, function () {
                    throw error;
                  });
                }
              }
            });
          }
        });
      }
    }

    var onCommitFiberRoot = null;
    var onCommitFiberUnmount = null;
    var hasLoggedError = false;
    var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';

    function injectInternals(internals) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        // No DevTools
        return false;
      }

      var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;

      if (hook.isDisabled) {
        // This isn't a real property on the hook, but it can be set to opt out
        // of DevTools integration and associated warnings and logs.
        // https://github.com/facebook/react/issues/3877
        return true;
      }

      if (!hook.supportsFiber) {
        {
          warningWithoutStack$1(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
        } // DevTools exists, even though it doesn't support Fiber.

        return true;
      }

      try {
        var rendererID = hook.inject(internals); // We have successfully injected, so now it is safe to set up hooks.

        onCommitFiberRoot = function (root, expirationTime) {
          try {
            var didError = (root.current.effectTag & DidCapture) === DidCapture;

            if (enableProfilerTimer) {
              var currentTime = requestCurrentTime();
              var priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
              hook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
            } else {
              hook.onCommitFiberRoot(rendererID, root, undefined, didError);
            }
          } catch (err) {
            if (true && !hasLoggedError) {
              hasLoggedError = true;
              warningWithoutStack$1(false, 'React DevTools encountered an error: %s', err);
            }
          }
        };

        onCommitFiberUnmount = function (fiber) {
          try {
            hook.onCommitFiberUnmount(rendererID, fiber);
          } catch (err) {
            if (true && !hasLoggedError) {
              hasLoggedError = true;
              warningWithoutStack$1(false, 'React DevTools encountered an error: %s', err);
            }
          }
        };
      } catch (err) {
        // Catch all errors because it is unsafe to throw during initialization.
        {
          warningWithoutStack$1(false, 'React DevTools encountered an error: %s.', err);
        }
      } // DevTools exists


      return true;
    }

    function onCommitRoot(root, expirationTime) {
      if (typeof onCommitFiberRoot === 'function') {
        onCommitFiberRoot(root, expirationTime);
      }
    }

    function onCommitUnmount(fiber) {
      if (typeof onCommitFiberUnmount === 'function') {
        onCommitFiberUnmount(fiber);
      }
    }

    var hasBadMapPolyfill = void 0;
    {
      hasBadMapPolyfill = false;

      try {
        var nonExtensibleObject = Object.preventExtensions({});
        var testMap = new Map([[nonExtensibleObject, null]]);
        var testSet = new Set([nonExtensibleObject]); // This is necessary for Rollup to not consider these unused.
        // https://github.com/rollup/rollup/issues/1771
        // TODO: we can remove these if Rollup fixes the bug.

        testMap.set(0, 0);
        testSet.add(0);
      } catch (e) {
        // TODO: Consider warning about bad polyfills
        hasBadMapPolyfill = true;
      }
    } // A Fiber is work on a Component that needs to be done or was done. There can
    // be more than one per component.

    var debugCounter = void 0;
    {
      debugCounter = 1;
    }

    function FiberNode(tag, pendingProps, key, mode) {
      // Instance
      this.tag = tag;
      this.key = key;
      this.elementType = null;
      this.type = null;
      this.stateNode = null; // Fiber

      this.return = null;
      this.child = null;
      this.sibling = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = pendingProps;
      this.memoizedProps = null;
      this.updateQueue = null;
      this.memoizedState = null;
      this.dependencies = null;
      this.mode = mode; // Effects

      this.effectTag = NoEffect;
      this.nextEffect = null;
      this.firstEffect = null;
      this.lastEffect = null;
      this.expirationTime = NoWork;
      this.childExpirationTime = NoWork;
      this.alternate = null;

      if (enableProfilerTimer) {
        // Note: The following is done to avoid a v8 performance cliff.
        //
        // Initializing the fields below to smis and later updating them with
        // double values will cause Fibers to end up having separate shapes.
        // This behavior/bug has something to do with Object.preventExtension().
        // Fortunately this only impacts DEV builds.
        // Unfortunately it makes React unusably slow for some applications.
        // To work around this, initialize the fields below with doubles.
        //
        // Learn more about this here:
        // https://github.com/facebook/react/issues/14365
        // https://bugs.chromium.org/p/v8/issues/detail?id=8538
        this.actualDuration = Number.NaN;
        this.actualStartTime = Number.NaN;
        this.selfBaseDuration = Number.NaN;
        this.treeBaseDuration = Number.NaN; // It's okay to replace the initial doubles with smis after initialization.
        // This won't trigger the performance cliff mentioned above,
        // and it simplifies other profiler code (including DevTools).

        this.actualDuration = 0;
        this.actualStartTime = -1;
        this.selfBaseDuration = 0;
        this.treeBaseDuration = 0;
      }

      {
        this._debugID = debugCounter++;
        this._debugSource = null;
        this._debugOwner = null;
        this._debugIsCurrentlyTiming = false;
        this._debugNeedsRemount = false;
        this._debugHookTypes = null;

        if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
          Object.preventExtensions(this);
        }
      }
    } // This is a constructor function, rather than a POJO constructor, still
    // please ensure we do the following:
    // 1) Nobody should add any instance methods on this. Instance methods can be
    //    more difficult to predict when they get optimized and they are almost
    //    never inlined properly in static compilers.
    // 2) Nobody should rely on `instanceof Fiber` for type testing. We should
    //    always know when it is a fiber.
    // 3) We might want to experiment with using numeric keys since they are easier
    //    to optimize in a non-JIT environment.
    // 4) We can easily go from a constructor to a createFiber object literal if that
    //    is faster.
    // 5) It should be easy to port this to a C struct and keep a C implementation
    //    compatible.


    var createFiber = function (tag, pendingProps, key, mode) {
      // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
      return new FiberNode(tag, pendingProps, key, mode);
    };

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function isSimpleFunctionComponent(type) {
      return typeof type === 'function' && !shouldConstruct(type) && type.defaultProps === undefined;
    }

    function resolveLazyComponentTag(Component) {
      if (typeof Component === 'function') {
        return shouldConstruct(Component) ? ClassComponent : FunctionComponent;
      } else if (Component !== undefined && Component !== null) {
        var $$typeof = Component.$$typeof;

        if ($$typeof === REACT_FORWARD_REF_TYPE) {
          return ForwardRef;
        }

        if ($$typeof === REACT_MEMO_TYPE) {
          return MemoComponent;
        }
      }

      return IndeterminateComponent;
    } // This is used to create an alternate fiber to do work on.


    function createWorkInProgress(current, pendingProps, expirationTime) {
      var workInProgress = current.alternate;

      if (workInProgress === null) {
        // We use a double buffering pooling technique because we know that we'll
        // only ever need at most two versions of a tree. We pool the "other" unused
        // node that we're free to reuse. This is lazily created to avoid allocating
        // extra objects for things that are never updated. It also allow us to
        // reclaim the extra memory if needed.
        workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
        workInProgress.elementType = current.elementType;
        workInProgress.type = current.type;
        workInProgress.stateNode = current.stateNode;
        {
          // DEV-only fields
          workInProgress._debugID = current._debugID;
          workInProgress._debugSource = current._debugSource;
          workInProgress._debugOwner = current._debugOwner;
          workInProgress._debugHookTypes = current._debugHookTypes;
        }
        workInProgress.alternate = current;
        current.alternate = workInProgress;
      } else {
        workInProgress.pendingProps = pendingProps; // We already have an alternate.
        // Reset the effect tag.

        workInProgress.effectTag = NoEffect; // The effect list is no longer valid.

        workInProgress.nextEffect = null;
        workInProgress.firstEffect = null;
        workInProgress.lastEffect = null;

        if (enableProfilerTimer) {
          // We intentionally reset, rather than copy, actualDuration & actualStartTime.
          // This prevents time from endlessly accumulating in new commits.
          // This has the downside of resetting values for different priority renders,
          // But works for yielding (the common case) and should support resuming.
          workInProgress.actualDuration = 0;
          workInProgress.actualStartTime = -1;
        }
      }

      workInProgress.childExpirationTime = current.childExpirationTime;
      workInProgress.expirationTime = current.expirationTime;
      workInProgress.child = current.child;
      workInProgress.memoizedProps = current.memoizedProps;
      workInProgress.memoizedState = current.memoizedState;
      workInProgress.updateQueue = current.updateQueue; // Clone the dependencies object. This is mutated during the render phase, so
      // it cannot be shared with the current fiber.

      var currentDependencies = current.dependencies;
      workInProgress.dependencies = currentDependencies === null ? null : {
        expirationTime: currentDependencies.expirationTime,
        firstContext: currentDependencies.firstContext,
        responders: currentDependencies.responders
      }; // These will be overridden during the parent's reconciliation

      workInProgress.sibling = current.sibling;
      workInProgress.index = current.index;
      workInProgress.ref = current.ref;

      if (enableProfilerTimer) {
        workInProgress.selfBaseDuration = current.selfBaseDuration;
        workInProgress.treeBaseDuration = current.treeBaseDuration;
      }

      {
        workInProgress._debugNeedsRemount = current._debugNeedsRemount;

        switch (workInProgress.tag) {
          case IndeterminateComponent:
          case FunctionComponent:
          case SimpleMemoComponent:
            workInProgress.type = resolveFunctionForHotReloading(current.type);
            break;

          case ClassComponent:
            workInProgress.type = resolveClassForHotReloading(current.type);
            break;

          case ForwardRef:
            workInProgress.type = resolveForwardRefForHotReloading(current.type);
            break;

          default:
            break;
        }
      }
      return workInProgress;
    } // Used to reuse a Fiber for a second pass.


    function resetWorkInProgress(workInProgress, renderExpirationTime) {
      // This resets the Fiber to what createFiber or createWorkInProgress would
      // have set the values to before during the first pass. Ideally this wouldn't
      // be necessary but unfortunately many code paths reads from the workInProgress
      // when they should be reading from current and writing to workInProgress.
      // We assume pendingProps, index, key, ref, return are still untouched to
      // avoid doing another reconciliation.
      // Reset the effect tag but keep any Placement tags, since that's something
      // that child fiber is setting, not the reconciliation.
      workInProgress.effectTag &= Placement; // The effect list is no longer valid.

      workInProgress.nextEffect = null;
      workInProgress.firstEffect = null;
      workInProgress.lastEffect = null;
      var current = workInProgress.alternate;

      if (current === null) {
        // Reset to createFiber's initial values.
        workInProgress.childExpirationTime = NoWork;
        workInProgress.expirationTime = renderExpirationTime;
        workInProgress.child = null;
        workInProgress.memoizedProps = null;
        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        workInProgress.dependencies = null;

        if (enableProfilerTimer) {
          // Note: We don't reset the actualTime counts. It's useful to accumulate
          // actual time across multiple render passes.
          workInProgress.selfBaseDuration = 0;
          workInProgress.treeBaseDuration = 0;
        }
      } else {
        // Reset to the cloned values that createWorkInProgress would've.
        workInProgress.childExpirationTime = current.childExpirationTime;
        workInProgress.expirationTime = current.expirationTime;
        workInProgress.child = current.child;
        workInProgress.memoizedProps = current.memoizedProps;
        workInProgress.memoizedState = current.memoizedState;
        workInProgress.updateQueue = current.updateQueue; // Clone the dependencies object. This is mutated during the render phase, so
        // it cannot be shared with the current fiber.

        var currentDependencies = current.dependencies;
        workInProgress.dependencies = currentDependencies === null ? null : {
          expirationTime: currentDependencies.expirationTime,
          firstContext: currentDependencies.firstContext,
          responders: currentDependencies.responders
        };

        if (enableProfilerTimer) {
          // Note: We don't reset the actualTime counts. It's useful to accumulate
          // actual time across multiple render passes.
          workInProgress.selfBaseDuration = current.selfBaseDuration;
          workInProgress.treeBaseDuration = current.treeBaseDuration;
        }
      }

      return workInProgress;
    }

    function createHostRootFiber(tag) {
      var mode = void 0;

      if (tag === ConcurrentRoot) {
        mode = ConcurrentMode | BatchedMode | StrictMode;
      } else if (tag === BatchedRoot) {
        mode = BatchedMode | StrictMode;
      } else {
        mode = NoMode;
      }

      if (enableProfilerTimer && isDevToolsPresent) {
        // Always collect profile timings when DevTools are present.
        // This enables DevTools to start capturing timing at any point–
        // Without some nodes in the tree having empty base times.
        mode |= ProfileMode;
      }

      return createFiber(HostRoot, null, null, mode);
    }

    function createFiberFromTypeAndProps(type, // React$ElementType
    key, pendingProps, owner, mode, expirationTime) {
      var fiber = void 0;
      var fiberTag = IndeterminateComponent; // The resolved type is set if we know what the final type will be. I.e. it's not lazy.

      var resolvedType = type;

      if (typeof type === 'function') {
        if (shouldConstruct(type)) {
          fiberTag = ClassComponent;
          {
            resolvedType = resolveClassForHotReloading(resolvedType);
          }
        } else {
          {
            resolvedType = resolveFunctionForHotReloading(resolvedType);
          }
        }
      } else if (typeof type === 'string') {
        fiberTag = HostComponent;
      } else {
        getTag: switch (type) {
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);

          case REACT_CONCURRENT_MODE_TYPE:
            fiberTag = Mode;
            mode |= ConcurrentMode | BatchedMode | StrictMode;
            break;

          case REACT_STRICT_MODE_TYPE:
            fiberTag = Mode;
            mode |= StrictMode;
            break;

          case REACT_PROFILER_TYPE:
            return createFiberFromProfiler(pendingProps, mode, expirationTime, key);

          case REACT_SUSPENSE_TYPE:
            return createFiberFromSuspense(pendingProps, mode, expirationTime, key);

          case REACT_SUSPENSE_LIST_TYPE:
            return createFiberFromSuspenseList(pendingProps, mode, expirationTime, key);

          default:
            {
              if (typeof type === 'object' && type !== null) {
                switch (type.$$typeof) {
                  case REACT_PROVIDER_TYPE:
                    fiberTag = ContextProvider;
                    break getTag;

                  case REACT_CONTEXT_TYPE:
                    // This is a consumer
                    fiberTag = ContextConsumer;
                    break getTag;

                  case REACT_FORWARD_REF_TYPE:
                    fiberTag = ForwardRef;
                    {
                      resolvedType = resolveForwardRefForHotReloading(resolvedType);
                    }
                    break getTag;

                  case REACT_MEMO_TYPE:
                    fiberTag = MemoComponent;
                    break getTag;

                  case REACT_LAZY_TYPE:
                    fiberTag = LazyComponent;
                    resolvedType = null;
                    break getTag;

                  case REACT_FUNDAMENTAL_TYPE:
                    if (enableFundamentalAPI) {
                      return createFiberFromFundamental(type, pendingProps, mode, expirationTime, key);
                    }

                    break;
                }
              }

              var info = '';
              {
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                  info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
                }

                var ownerName = owner ? getComponentName(owner.type) : null;

                if (ownerName) {
                  info += '\n\nCheck the render method of `' + ownerName + '`.';
                }
              }

              (function () {
                {
                  {
                    throw ReactError(Error('Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ' + (type == null ? type : typeof type) + '.' + info));
                  }
                }
              })();
            }
        }
      }

      fiber = createFiber(fiberTag, pendingProps, key, mode);
      fiber.elementType = type;
      fiber.type = resolvedType;
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromElement(element, mode, expirationTime) {
      var owner = null;
      {
        owner = element._owner;
      }
      var type = element.type;
      var key = element.key;
      var pendingProps = element.props;
      var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime);
      {
        fiber._debugSource = element._source;
        fiber._debugOwner = element._owner;
      }
      return fiber;
    }

    function createFiberFromFragment(elements, mode, expirationTime, key) {
      var fiber = createFiber(Fragment, elements, key, mode);
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromFundamental(fundamentalComponent, pendingProps, mode, expirationTime, key) {
      var fiber = createFiber(FundamentalComponent, pendingProps, key, mode);
      fiber.elementType = fundamentalComponent;
      fiber.type = fundamentalComponent;
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
      {
        if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
          warningWithoutStack$1(false, 'Profiler must specify an "id" string and "onRender" function as props');
        }
      }
      var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode); // TODO: The Profiler fiber shouldn't have a type. It has a tag.

      fiber.elementType = REACT_PROFILER_TYPE;
      fiber.type = REACT_PROFILER_TYPE;
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromSuspense(pendingProps, mode, expirationTime, key) {
      var fiber = createFiber(SuspenseComponent, pendingProps, key, mode); // TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
      // This needs to be fixed in getComponentName so that it relies on the tag
      // instead.

      fiber.type = REACT_SUSPENSE_TYPE;
      fiber.elementType = REACT_SUSPENSE_TYPE;
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromSuspenseList(pendingProps, mode, expirationTime, key) {
      var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
      {
        // TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
        // This needs to be fixed in getComponentName so that it relies on the tag
        // instead.
        fiber.type = REACT_SUSPENSE_LIST_TYPE;
      }
      fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromText(content, mode, expirationTime) {
      var fiber = createFiber(HostText, content, null, mode);
      fiber.expirationTime = expirationTime;
      return fiber;
    }

    function createFiberFromHostInstanceForDeletion() {
      var fiber = createFiber(HostComponent, null, null, NoMode); // TODO: These should not need a type.

      fiber.elementType = 'DELETED';
      fiber.type = 'DELETED';
      return fiber;
    }

    function createFiberFromPortal(portal, mode, expirationTime) {
      var pendingProps = portal.children !== null ? portal.children : [];
      var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
      fiber.expirationTime = expirationTime;
      fiber.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: portal.implementation
      };
      return fiber;
    } // Used for stashing WIP properties to replay failed work in DEV.


    function assignFiberPropertiesInDEV(target, source) {
      if (target === null) {
        // This Fiber's initial properties will always be overwritten.
        // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
        target = createFiber(IndeterminateComponent, null, null, NoMode);
      } // This is intentionally written as a list of all properties.
      // We tried to use Object.assign() instead but this is called in
      // the hottest path, and Object.assign() was too slow:
      // https://github.com/facebook/react/issues/12502
      // This code is DEV-only so size is not a concern.


      target.tag = source.tag;
      target.key = source.key;
      target.elementType = source.elementType;
      target.type = source.type;
      target.stateNode = source.stateNode;
      target.return = source.return;
      target.child = source.child;
      target.sibling = source.sibling;
      target.index = source.index;
      target.ref = source.ref;
      target.pendingProps = source.pendingProps;
      target.memoizedProps = source.memoizedProps;
      target.updateQueue = source.updateQueue;
      target.memoizedState = source.memoizedState;
      target.dependencies = source.dependencies;
      target.mode = source.mode;
      target.effectTag = source.effectTag;
      target.nextEffect = source.nextEffect;
      target.firstEffect = source.firstEffect;
      target.lastEffect = source.lastEffect;
      target.expirationTime = source.expirationTime;
      target.childExpirationTime = source.childExpirationTime;
      target.alternate = source.alternate;

      if (enableProfilerTimer) {
        target.actualDuration = source.actualDuration;
        target.actualStartTime = source.actualStartTime;
        target.selfBaseDuration = source.selfBaseDuration;
        target.treeBaseDuration = source.treeBaseDuration;
      }

      target._debugID = source._debugID;
      target._debugSource = source._debugSource;
      target._debugOwner = source._debugOwner;
      target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
      target._debugNeedsRemount = source._debugNeedsRemount;
      target._debugHookTypes = source._debugHookTypes;
      return target;
    } // TODO: This should be lifted into the renderer.
    // The following attributes are only used by interaction tracing builds.
    // They enable interactions to be associated with their async work,
    // And expose interaction metadata to the React DevTools Profiler plugin.
    // Note that these attributes are only defined when the enableSchedulerTracing flag is enabled.
    // Exported FiberRoot type includes all properties,
    // To avoid requiring potentially error-prone :any casts throughout the project.
    // Profiling properties are only safe to access in profiling builds (when enableSchedulerTracing is true).
    // The types are defined separately within this file to ensure they stay in sync.
    // (We don't have to use an inline :any cast when enableSchedulerTracing is disabled.)


    function FiberRootNode(containerInfo, tag, hydrate) {
      this.tag = tag;
      this.current = null;
      this.containerInfo = containerInfo;
      this.pendingChildren = null;
      this.pingCache = null;
      this.finishedExpirationTime = NoWork;
      this.finishedWork = null;
      this.timeoutHandle = noTimeout;
      this.context = null;
      this.pendingContext = null;
      this.hydrate = hydrate;
      this.firstBatch = null;
      this.callbackNode = null;
      this.callbackExpirationTime = NoWork;
      this.firstPendingTime = NoWork;
      this.lastPendingTime = NoWork;
      this.pingTime = NoWork;

      if (enableSchedulerTracing) {
        this.interactionThreadID = tracing.unstable_getThreadID();
        this.memoizedInteractions = new Set();
        this.pendingInteractionMap = new Map();
      }
    }

    function createFiberRoot(containerInfo, tag, hydrate) {
      var root = new FiberRootNode(containerInfo, tag, hydrate); // Cyclic construction. This cheats the type system right now because
      // stateNode is any.

      var uninitializedFiber = createHostRootFiber(tag);
      root.current = uninitializedFiber;
      uninitializedFiber.stateNode = root;
      return root;
    } // This lets us hook into Fiber to debug what it's doing.
    // See https://github.com/facebook/react/pull/8033.
    // This is not part of the public API, not even for React DevTools.
    // You may only inject a debugTool if you work on React Fiber itself.


    var ReactFiberInstrumentation = {
      debugTool: null
    };
    var ReactFiberInstrumentation_1 = ReactFiberInstrumentation; // 0 is PROD, 1 is DEV.
    // Might add PROFILE later.

    var didWarnAboutNestedUpdates = void 0;
    var didWarnAboutFindNodeInStrictMode = void 0;
    {
      didWarnAboutNestedUpdates = false;
      didWarnAboutFindNodeInStrictMode = {};
    }

    function getContextForSubtree(parentComponent) {
      if (!parentComponent) {
        return emptyContextObject;
      }

      var fiber = get(parentComponent);
      var parentContext = findCurrentUnmaskedContext(fiber);

      if (fiber.tag === ClassComponent) {
        var Component = fiber.type;

        if (isContextProvider(Component)) {
          return processChildContext(fiber, Component, parentContext);
        }
      }

      return parentContext;
    }

    function scheduleRootUpdate(current$$1, element, expirationTime, suspenseConfig, callback) {
      {
        if (phase === 'render' && current !== null && !didWarnAboutNestedUpdates) {
          didWarnAboutNestedUpdates = true;
          warningWithoutStack$1(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(current.type) || 'Unknown');
        }
      }
      var update = createUpdate(expirationTime, suspenseConfig); // Caution: React DevTools currently depends on this property
      // being called "element".

      update.payload = {
        element: element
      };
      callback = callback === undefined ? null : callback;

      if (callback !== null) {
        !(typeof callback === 'function') ? warningWithoutStack$1(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
        update.callback = callback;
      }

      if (revertPassiveEffectsChange) {
        flushPassiveEffects();
      }

      enqueueUpdate(current$$1, update);
      scheduleWork(current$$1, expirationTime);
      return expirationTime;
    }

    function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, suspenseConfig, callback) {
      // TODO: If this is a nested container, this won't be the root.
      var current$$1 = container.current;
      {
        if (ReactFiberInstrumentation_1.debugTool) {
          if (current$$1.alternate === null) {
            ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
          } else if (element === null) {
            ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
          } else {
            ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
          }
        }
      }
      var context = getContextForSubtree(parentComponent);

      if (container.context === null) {
        container.context = context;
      } else {
        container.pendingContext = context;
      }

      return scheduleRootUpdate(current$$1, element, expirationTime, suspenseConfig, callback);
    }

    function findHostInstance(component) {
      var fiber = get(component);

      if (fiber === undefined) {
        if (typeof component.render === 'function') {
          (function () {
            {
              {
                throw ReactError(Error('Unable to find node on an unmounted component.'));
              }
            }
          })();
        } else {
          (function () {
            {
              {
                throw ReactError(Error('Argument appears to not be a ReactComponent. Keys: ' + Object.keys(component)));
              }
            }
          })();
        }
      }

      var hostFiber = findCurrentHostFiber(fiber);

      if (hostFiber === null) {
        return null;
      }

      return hostFiber.stateNode;
    }

    function findHostInstanceWithWarning(component, methodName) {
      {
        var fiber = get(component);

        if (fiber === undefined) {
          if (typeof component.render === 'function') {
            (function () {
              {
                {
                  throw ReactError(Error('Unable to find node on an unmounted component.'));
                }
              }
            })();
          } else {
            (function () {
              {
                {
                  throw ReactError(Error('Argument appears to not be a ReactComponent. Keys: ' + Object.keys(component)));
                }
              }
            })();
          }
        }

        var hostFiber = findCurrentHostFiber(fiber);

        if (hostFiber === null) {
          return null;
        }

        if (hostFiber.mode & StrictMode) {
          var componentName = getComponentName(fiber.type) || 'Component';

          if (!didWarnAboutFindNodeInStrictMode[componentName]) {
            didWarnAboutFindNodeInStrictMode[componentName] = true;

            if (fiber.mode & StrictMode) {
              warningWithoutStack$1(false, '%s is deprecated in StrictMode. ' + '%s was passed an instance of %s which is inside StrictMode. ' + 'Instead, add a ref directly to the element you want to reference.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-find-node', methodName, methodName, componentName, getStackByFiberInDevAndProd(hostFiber));
            } else {
              warningWithoutStack$1(false, '%s is deprecated in StrictMode. ' + '%s was passed an instance of %s which renders StrictMode children. ' + 'Instead, add a ref directly to the element you want to reference.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-find-node', methodName, methodName, componentName, getStackByFiberInDevAndProd(hostFiber));
            }
          }
        }

        return hostFiber.stateNode;
      }
      return findHostInstance(component);
    }

    function createContainer(containerInfo, tag, hydrate) {
      return createFiberRoot(containerInfo, tag, hydrate);
    }

    function updateContainer(element, container, parentComponent, callback) {
      var current$$1 = container.current;
      var currentTime = requestCurrentTime();
      {
        // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
        if ('undefined' !== typeof jest) {
          warnIfUnmockedScheduler(current$$1);
          warnIfNotScopedWithMatchingAct(current$$1);
        }
      }
      var suspenseConfig = requestCurrentSuspenseConfig();
      var expirationTime = computeExpirationForFiber(currentTime, current$$1, suspenseConfig);
      return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, suspenseConfig, callback);
    }

    function getPublicRootInstance(container) {
      var containerFiber = container.current;

      if (!containerFiber.child) {
        return null;
      }

      switch (containerFiber.child.tag) {
        case HostComponent:
          return getPublicInstance(containerFiber.child.stateNode);

        default:
          return containerFiber.child.stateNode;
      }
    }

    function findHostInstanceWithNoPortals(fiber) {
      var hostFiber = findCurrentHostFiberWithNoPortals(fiber);

      if (hostFiber === null) {
        return null;
      }

      if (hostFiber.tag === FundamentalComponent) {
        return hostFiber.stateNode.instance;
      }

      return hostFiber.stateNode;
    }

    var shouldSuspendImpl = function (fiber) {
      return false;
    };

    function shouldSuspend(fiber) {
      return shouldSuspendImpl(fiber);
    }

    var overrideHookState = null;
    var overrideProps = null;
    var scheduleUpdate = null;
    var setSuspenseHandler = null;
    {
      var copyWithSetImpl = function (obj, path, idx, value) {
        if (idx >= path.length) {
          return value;
        }

        var key = path[idx];
        var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj); // $FlowFixMe number or string is fine here

        updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
        return updated;
      };

      var copyWithSet = function (obj, path, value) {
        return copyWithSetImpl(obj, path, 0, value);
      }; // Support DevTools editable values for useState and useReducer.


      overrideHookState = function (fiber, id, path, value) {
        // For now, the "id" of stateful hooks is just the stateful hook index.
        // This may change in the future with e.g. nested hooks.
        var currentHook = fiber.memoizedState;

        while (currentHook !== null && id > 0) {
          currentHook = currentHook.next;
          id--;
        }

        if (currentHook !== null) {
          if (revertPassiveEffectsChange) {
            flushPassiveEffects();
          }

          var newState = copyWithSet(currentHook.memoizedState, path, value);
          currentHook.memoizedState = newState;
          currentHook.baseState = newState; // We aren't actually adding an update to the queue,
          // because there is no update we can add for useReducer hooks that won't trigger an error.
          // (There's no appropriate action type for DevTools overrides.)
          // As a result though, React will see the scheduled update as a noop and bailout.
          // Shallow cloning props works as a workaround for now to bypass the bailout check.

          fiber.memoizedProps = _assign({}, fiber.memoizedProps);
          scheduleWork(fiber, Sync);
        }
      }; // Support DevTools props for function components, forwardRef, memo, host components, etc.


      overrideProps = function (fiber, path, value) {
        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);

        if (fiber.alternate) {
          fiber.alternate.pendingProps = fiber.pendingProps;
        }

        scheduleWork(fiber, Sync);
      };

      scheduleUpdate = function (fiber) {
        if (revertPassiveEffectsChange) {
          flushPassiveEffects();
        }

        scheduleWork(fiber, Sync);
      };

      setSuspenseHandler = function (newShouldSuspendImpl) {
        shouldSuspendImpl = newShouldSuspendImpl;
      };
    }

    function injectIntoDevTools(devToolsConfig) {
      var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      return injectInternals(_assign({}, devToolsConfig, {
        overrideHookState: overrideHookState,
        overrideProps: overrideProps,
        setSuspenseHandler: setSuspenseHandler,
        scheduleUpdate: scheduleUpdate,
        currentDispatcherRef: ReactCurrentDispatcher,
        findHostInstanceByFiber: function (fiber) {
          var hostFiber = findCurrentHostFiber(fiber);

          if (hostFiber === null) {
            return null;
          }

          return hostFiber.stateNode;
        },
        findFiberByHostInstance: function (instance) {
          if (!findFiberByHostInstance) {
            // Might not be implemented by the renderer.
            return null;
          }

          return findFiberByHostInstance(instance);
        },
        // React Refresh
        findHostInstancesForRefresh: findHostInstancesForRefresh,
        scheduleRefresh: scheduleRefresh,
        scheduleRoot: scheduleRoot,
        setRefreshHandler: setRefreshHandler,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: function () {
          return current;
        }
      }));
    }

    var ReactFiberReconciler = Object.freeze({
      updateContainerAtExpirationTime: updateContainerAtExpirationTime,
      createContainer: createContainer,
      updateContainer: updateContainer,
      flushRoot: flushRoot,
      computeUniqueAsyncExpiration: computeUniqueAsyncExpiration,
      batchedEventUpdates: batchedEventUpdates,
      batchedUpdates: batchedUpdates,
      unbatchedUpdates: unbatchedUpdates,
      deferredUpdates: deferredUpdates,
      syncUpdates: syncUpdates,
      discreteUpdates: discreteUpdates,
      flushDiscreteUpdates: flushDiscreteUpdates,
      flushControlled: flushControlled,
      flushSync: flushSync,
      flushPassiveEffects: flushPassiveEffects,
      IsThisRendererActing: IsThisRendererActing,
      getPublicRootInstance: getPublicRootInstance,
      findHostInstance: findHostInstance,
      findHostInstanceWithWarning: findHostInstanceWithWarning,
      findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
      shouldSuspend: shouldSuspend,
      injectIntoDevTools: injectIntoDevTools
    }); // This entry point is intentionally not typed. It exists only for third-party
    // renderers. The renderers we ship (such as React DOM) instead import a named
    // "inline" entry point (for example, `react-reconciler/inline.dom`). It uses
    // the same code, but the Flow configuration redirects the host config to its
    // real implementation so we can check it against exact intended host types.
    //
    // Only one renderer (the one you passed to `yarn flow <renderer>`) is fully
    // type-checked at any given time. The Flow config maps the
    // `react-reconciler/inline.<renderer>` import (which is *not* Flow typed) to
    // `react-reconciler/inline-typed` (which *is*) for the current renderer.
    // On CI, we run Flow checks for each renderer separately.
    // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest.

    var reactReconciler = ReactFiberReconciler.default || ReactFiberReconciler;
    module.exports = reactReconciler;
    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
  };
}
},{"object-assign":"node_modules/object-assign/index.js","react":"node_modules/react/index.js","prop-types/checkPropTypes":"node_modules/prop-types/checkPropTypes.js","scheduler":"node_modules/scheduler/index.js","scheduler/tracing":"node_modules/scheduler/tracing.js"}],"node_modules/react-reconciler/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react-reconciler.production.min.js');
} else {
  module.exports = require('./cjs/react-reconciler.development.js');
}
},{"./cjs/react-reconciler.development.js":"node_modules/react-reconciler/cjs/react-reconciler.development.js"}],"node_modules/shallowequal/index.js":[function(require,module,exports) {
//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

},{}],"node_modules/lodash.omit/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Creates an array of the own and inherited enumerable symbol properties
 * of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable string keyed properties of `object` that are
 * not omitted.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = baseRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props, 1), toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = omit;

},{}],"src/VNode.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lodash_omit_1 = __importDefault(require("lodash.omit"));

var uid = 0;

var VNode =
/** @class */
function () {
  function VNode(type, name, container, props) {
    this.id = uid++; // 节点类型

    this.type = "normal";
    this.mounted = false;
    this.children = [];
    this.type = type;
    this.name = name;
    this.container = container;
    this.props = props;
  }

  VNode.prototype.appendChild = function (child) {
    child.parent = this;
    this.children.push(child);

    if (this.isMounted()) {
      this.container.update();
    }
  };

  VNode.prototype.removeChild = function (node) {
    var idx = this.children.indexOf(node);

    if (idx !== -1) {
      this.children.splice(idx, 1);

      if (this.isMounted()) {
        this.container.update();
      }
    }
  };

  VNode.prototype.insertBefore = function (newNode, referenceNode) {
    newNode.parent = this;
    var idx = this.children.indexOf(referenceNode);
    this.children.splice(idx, 0, newNode);

    if (this.isMounted()) {
      this.container.update();
    }
  };

  VNode.prototype.updateText = function (text) {
    this.text = text;

    if (this.isMounted()) {
      this.container.update();
    }
  };

  VNode.prototype.updateProps = function (props) {
    this.props = props;

    if (this.isMounted()) {
      this.container.update();
    }
  };

  VNode.prototype.isMounted = function () {
    return this.parent ? this.parent.isMounted() : this.mounted;
  };

  VNode.prototype.toJSON = function () {
    var isText = this.type === "text";
    return isText ? this.text : {
      type: this.name,
      props: lodash_omit_1.default(this.props, "children"),
      children: this.children.map(function (i) {
        return i.toJSON();
      })
    };
  };

  return VNode;
}();

exports.default = VNode;
},{"lodash.omit":"node_modules/lodash.omit/index.js"}],"src/hostConfig.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var shallowequal_1 = __importDefault(require("shallowequal"));

var VNode_1 = __importDefault(require("./VNode"));

var rootContext = {};
var childContext = {};
var hostConfig = {
  now: Date.now,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  noTimeout: -1,
  supportsMutation: true,
  getPublicInstance: function getPublicInstance(instance) {
    console.log("getPublicInstance", instance);
    return instance;
  },
  getRootHostContext: function getRootHostContext(rootContainerInstance) {
    console.log("getRootHostContext", rootContainerInstance);
    return rootContext;
  },
  getChildHostContext: function getChildHostContext(parentHostContext, type, rootContainerInstance) {
    console.log("getChildHostContext", type, rootContainerInstance);
    return childContext;
  },
  shouldSetTextContent: function shouldSetTextContent(type, props) {
    console.log("shouldSetTextContent", type, props);
    return false;
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(type, props) {
    return false;
  },
  prepareForCommit: function prepareForCommit(containerInfo) {
    console.log("prepareForCommit");
  },
  resetAfterCommit: function resetAfterCommit(containerInfo) {
    console.log("resetAfterCommit");
  },
  createInstance: function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log("createInstance", type, props);
    var vnode = new VNode_1.default("normal", type, rootContainerInstance, props);
    return vnode;
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
    console.log("createTextInstance", text);
    var vnode = new VNode_1.default("text", undefined, rootContainerInstance, undefined);
    vnode.updateText(text);
    return vnode;
  },
  appendInitialChild: function appendInitialChild(parentInstance, child) {
    console.log("appendInitialChild", parentInstance, child);
    parentInstance.appendChild(child);
  },
  finalizeInitialChildren: function finalizeInitialChildren(parentInstance, type, props, rootContainerInstance, hostContext) {
    console.log("finalizeInitialChildren", parentInstance);
    return true;
  },
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
    console.log("prepareUpdate for ", type, instance);

    if (!shallowequal_1.default(newProps, oldProps)) {
      return true;
    }

    return null;
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    console.log("commitTextUpdate", textInstance);

    if (oldText !== newText) {
      textInstance.updateText(newText);
    }
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
    console.log("commitUpdate for ", type, instance);
    instance.updateProps(newProps);
  },
  appendChild: function appendChild(parentInstance, child) {
    console.log("appendChild", parentInstance, child);
    parentInstance.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    console.log("appendChildTonContainer", container, child);
    container.node.appendChild(child);
  },
  insertBefore: function insertBefore(parentInstance, child, beforeChild) {
    console.log("insertBefore", parentInstance, child);
    parentInstance.insertBefore(child, beforeChild);
  },
  insertInContainerBefore: function insertInContainerBefore(container, child, beforeChild) {
    console.log("insertInContainerBefore", container, child);
    container.node.insertBefore(child, beforeChild);
  },
  removeChild: function removeChild(parentInstance, child) {
    console.log("removeCHild", child);
    parentInstance.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(container, child) {
    console.log("removeFromContainer", child);
    container.node.removeChild(child);
  },
  resetTextContent: function resetTextContent(instance) {
    console.log("resetTextContent", instance);
  },
  commitMount: function commitMount(instance, type, newProps, internalInstanceHandle) {
    console.log("commitMount for ", type, instance);
  }
};
exports.default = hostConfig;
},{"shallowequal":"node_modules/shallowequal/index.js","./VNode":"src/VNode.ts"}],"src/renderer.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_reconciler_1 = __importDefault(require("react-reconciler"));

var hostConfig_1 = __importDefault(require("./hostConfig"));

var customReconciler = react_reconciler_1.default(hostConfig_1.default);

function render(element, container, callback) {
  if (container._rootContainer == null) {
    container._rootContainer = customReconciler.createContainer(container, false, false);
  }

  return customReconciler.updateContainer(element, container._rootContainer, null, callback);
}

exports.render = render;
},{"react-reconciler":"node_modules/react-reconciler/index.js","./hostConfig":"src/hostConfig.ts"}],"src/Container.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var VNode_1 = __importDefault(require("./VNode"));

var Container =
/** @class */
function () {
  function Container(updater) {
    var _this = this;

    this.commiting = false;

    this.applyUpdate = function () {
      _this.commiting = false;

      if (_this.updater) {
        _this.updater(_this.node);
      }
    };

    this.node = new VNode_1.default("normal", "root", this, undefined);
    this.node.mounted = true;
    this.updater = updater;
  } // 触发更新


  Container.prototype.update = function () {
    if (this.commiting) {
      return;
    }

    this.commiting = true;
    setTimeout(this.applyUpdate);
  };

  return Container;
}();

exports.default = Container;
},{"./VNode":"src/VNode.ts"}],"src/index.tsx":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(require("react"));

var renderer_1 = require("./renderer");

var Container_1 = __importDefault(require("./Container"));

var root = document.getElementById("root");
var container = new Container_1.default(function (vnode) {
  console.log("updating", vnode);
  root.innerHTML = JSON.stringify(vnode, undefined, 2);
});

var ClassComp =
/** @class */
function (_super) {
  __extends(ClassComp, _super);

  function ClassComp() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ClassComp.prototype.render = function () {
    return react_1.default.createElement("div", null, "class Comp");
  };

  return ClassComp;
}(react_1.default.Component);

var MyComp = function MyComp() {
  var _a = react_1.useState(1),
      count = _a[0],
      setCount = _a[1];

  react_1.useEffect(function () {
    var timer = setInterval(function () {
      setCount(function (c) {
        return c + 1;
      });
    }, 10000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  var isEven = count % 2 === 0;
  return react_1.default.createElement("div", {
    className: "mycomp",
    style: {
      color: isEven ? "red" : "blue"
    }
  }, isEven ? react_1.default.createElement("div", null, "even") : null, react_1.default.createElement("span", {
    className: "foo"
  }, "hello world ", count));
};

renderer_1.render(react_1.default.createElement("main", {
  className: "root"
}, react_1.default.createElement(ClassComp, null), react_1.default.createElement(MyComp, null), react_1.default.createElement("span", {
  className: "bar"
}, "--custom renderer")), container, function () {
  console.log("rendered");
});
},{"react":"node_modules/react/index.js","./renderer":"src/renderer.ts","./Container":"src/Container.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54683" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.tsx"], null)
//# sourceMappingURL=/src.fc45d0fd.js.map