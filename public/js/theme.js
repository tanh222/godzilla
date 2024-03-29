"use strict";

var _this = this;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*-----------------------------------------------
|   Theme Configuration
-----------------------------------------------*/
var storage = {
  isDark: false
};
/*-----------------------------------------------
|   Utilities
-----------------------------------------------*/

var utils = function ($) {
  var grays = function grays() {
    var colors = {
      white: '#fff',
      100: '#f9fafd',
      200: '#edf2f9',
      300: '#d8e2ef',
      400: '#b6c1d2',
      500: '#9da9bb',
      600: '#748194',
      700: '#5e6e82',
      800: '#4d5969',
      900: '#344050',
      1000: '#232e3c',
      1100: '#0b1727',
      black: '#000'
    };

    if (storage.isDark) {
      colors = {
        white: '#0e1c2f',
        100: '#132238',
        200: '#061325',
        300: '#344050',
        400: '#4d5969',
        500: '#5e6e82',
        600: '#748194',
        700: '#9da9bb',
        800: '#b6c1d2',
        900: '#d8e2ef',
        1000: '#edf2f9',
        1100: '#f9fafd',
        black: '#fff'
      };
    }

    return colors;
  };

  var themeColors = function themeColors() {
    var colors = {
      primary: '#2c7be5',
      secondary: '#748194',
      success: '#00d27a',
      info: '#27bcfd',
      warning: '#f5803e',
      danger: '#e63757',
      light: '#f9fafd',
      dark: '#0b1727'
    };

    if (storage.isDark) {
      colors.light = grays()['100'];
      colors.dark = grays()['1100'];
    }

    return colors;
  };

  var pluginSettings = function pluginSettings() {
    var settings = {
      tinymce: {
        theme: 'oxide'
      },
      chart: {
        borderColor: 'rgba(255, 255, 255, 0.8)'
      }
    };

    if (storage.isDark) {
      settings.tinymce.theme = 'oxide-dark';
      settings.chart.borderColor = themeColors().primary;
    }

    return settings;
  };

  var Utils = {
    $window: $(window),
    $document: $(document),
    $html: $('html'),
    $body: $('body'),
    $main: $('main'),
    isRTL: function isRTL() {
      return this.$html.attr('dir') === 'rtl';
    },
    location: window.location,
    nua: navigator.userAgent,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
    colors: themeColors(),
    grays: grays(),
    offset: function offset(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    },
    isScrolledIntoViewJS: function isScrolledIntoViewJS(element) {
      var windowHeight = window.innerHeight;
      var elemTop = this.offset(element).top;
      var elemHeight = element.offsetHeight;
      var windowScrollTop = window.scrollY;
      return elemTop <= windowScrollTop + windowHeight && windowScrollTop <= elemTop + elemHeight;
    },
    isScrolledIntoView: function isScrolledIntoView(el) {
      var $el = $(el);
      var windowHeight = this.$window.height();
      var elemTop = $el.offset().top;
      var elemHeight = $el.height();
      var windowScrollTop = this.$window.scrollTop();
      return elemTop <= windowScrollTop + windowHeight && windowScrollTop <= elemTop + elemHeight;
    },
    getCurrentScreanBreakpoint: function getCurrentScreanBreakpoint() {
      var _this2 = this;

      var currentScrean = '';
      var windowWidth = this.$window.width();
      $.each(this.breakpoints, function (index, value) {
        if (windowWidth >= value) {
          currentScrean = index;
        } else if (windowWidth >= _this2.breakpoints.xl) {
          currentScrean = 'xl';
        }
      });
      return {
        currentScrean: currentScrean,
        currentBreakpoint: this.breakpoints[currentScrean]
      };
    },
    hexToRgb: function hexToRgb(hexValue) {
      var hex;
      hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      }));
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    },
    rgbColor: function rgbColor(color) {
      if (color === void 0) {
        color = '#fff';
      }

      return "rgb(" + this.hexToRgb(color) + ")";
    },
    rgbaColor: function rgbaColor(color, alpha) {
      if (color === void 0) {
        color = '#fff';
      }

      if (alpha === void 0) {
        alpha = 0.5;
      }

      return "rgba(" + this.hexToRgb(color) + ", " + alpha + ")";
    },
    rgbColors: function rgbColors() {
      var _this3 = this;

      return Object.keys(this.colors).map(function (color) {
        return _this3.rgbColor(_this3.colors[color]);
      });
    },
    rgbaColors: function rgbaColors() {
      var _this4 = this;

      return Object.keys(this.colors).map(function (color) {
        return _this4.rgbaColor(_this4.colors[color]);
      });
    },
    settings: pluginSettings(_this),
    isIterableArray: function isIterableArray(array) {
      return Array.isArray(array) && !!array.length;
    }
  };
  return Utils;
}(jQuery);
/*-----------------------------------------------
|   Emoji Picker
-----------------------------------------------*/


window.utils.$document.ready(function () {
  var Event = {
    FOCUS: 'focus'
  };
  var Selector = {
    EMOJIAREA: '.emojiarea'
  };
  var DATA_KEY = {
    OPTIONS: 'options'
  };
  var emojioneareas = $(Selector.EMOJIAREA); // Place the Blinking Text Cursor at the end of the editor text

  var placeCaretAtEnd = function placeCaretAtEnd(el) {
    if (!!window.getSelection && !!document.createRange) {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.body.createTextRange) {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }; // EmojioneArea plugin call


  if (emojioneareas.length) {
    emojioneareas.each(function (item, value) {
      var $this = $(value);
      var options = $.extend({}, $this.data(DATA_KEY.OPTIONS));
      $this.emojioneArea(options); // // Call the caret position function on focus

      emojioneareas[item].emojioneArea.on(Event.FOCUS, function ($editor) {
        placeCaretAtEnd($editor.get(0));
      });
    });
  }
});
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

utils.$document.ready(function () {
  var $navbar = $('.navbar-theme');

  if ($navbar.length) {
    var windowHeight = utils.$window.height();
    utils.$window.scroll(function () {
      var scrollTop = utils.$window.scrollTop();
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 1 && (alpha = 1);
      $navbar.css({
        'background-color': "rgba(11, 23, 39, " + alpha + ")"
      });
    }); // Fix navbar background color [after and before expand]

    var classList = $navbar.attr('class').split(' ');
    var breakpoint = classList.filter(function (c) {
      return c.indexOf('navbar-expand-') >= 0;
    })[0].split('navbar-expand-')[1];
    utils.$window.resize(function () {
      if (utils.$window.width() > utils.breakpoints[breakpoint]) {
        return $navbar.removeClass('bg-dark');
      }

      if (!$navbar.find('.navbar-toggler').hasClass('collapsed')) {
        return $navbar.addClass('bg-dark');
      }

      return null;
    }); // Top navigation background toggle on mobile

    $navbar.on('show.bs.collapse hide.bs.collapse', function (e) {
      $(e.currentTarget).toggleClass('bg-dark');
    });
  }
});
/*-----------------------------------------------
|   Select menu [bootstrap 4]
-----------------------------------------------*/

utils.$document.ready(function () {
  // https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#select-menu
  // https://github.com/twbs/bootstrap/issues/26183
  window.is.android() && $('select.form-control').removeClass('form-control').css('width', '100%');
});
/*-----------------------------------------------
|   Bootstrap Wizard
-----------------------------------------------*/

utils.$document.ready(function () {
  var Selector = {
    DATA_WIZARD: '[data-wizard]',
    PREVIOUS_BUTTON: '.previous .btn',
    TAB_PANE: '.tab-pane',
    FORM_VALIDATION: '.form-validation',
    NAV_ITEM_CIRCLE: '.nav-item-circle',
    NAV_ITEM: '.nav-item',
    NAV_LINK: '.nav-link',
    WIZARD_LOTTIE: '.wizard-lottie'
  };
  var ClassName = {
    ACTIVE: 'active',
    DONE: 'done',
    NAV: 'nav'
  };
  var DATA_KEY = {
    OPTIONS: 'options',
    WIZARD_STATE: 'wizard-state',
    CONTROLLER: 'controller',
    ERROR_MODAL: 'error-modal'
  };
  var wizards = $(Selector.DATA_WIZARD);

  var isFormValidate = function isFormValidate($currentTab) {
    var $currentTabForms = $currentTab.find(Selector.FORM_VALIDATION);
    var isValidate = false;
    $currentTabForms.each(function (i, v) {
      isValidate = $(v).valid();
      return isValidate;
    });
    return isValidate;
  };

  !!wizards.length && wizards.each(function (index, value) {
    var $this = $(value);
    var controller = $this.data(DATA_KEY.CONTROLLER);
    var $controller = $(controller);
    var $buttonPrev = $controller.find(Selector.PREVIOUS_BUTTON);
    var $modal = $($this.data(DATA_KEY.ERROR_MODAL));
    var $lottie = $(value).find(Selector.WIZARD_LOTTIE);
    var options = $.extend({
      container: value.querySelector(Selector.WIZARD_LOTTIE),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      name: 'Hello World'
    }, $lottie.data(DATA_KEY.OPTIONS));
    var animation = window.bodymovin.loadAnimation(options);
    $this.bootstrapWizard({
      tabClass: ClassName.NAV,
      onNext: function onNext(tab, navigation, idx) {
        var $currentTab = $this.find(Selector.TAB_PANE).eq(idx - 1);
        return isFormValidate($currentTab);
      },
      onTabClick: function onTabClick(tab, navigation, idx, clickedIndex) {
        var stepDone = $this.find(".nav-item:nth-child(" + (clickedIndex + 1) + ") .nav-link").data(DATA_KEY.WIZARD_STATE);

        if (stepDone === 'done') {
          $modal.modal('show');
          return false;
        }

        if (clickedIndex <= idx) {
          return true;
        }

        var isValid = true;
        $this.find(Selector.TAB_PANE).each(function (tabIndex, tabValue) {
          if (tabIndex < clickedIndex) {
            $this.bootstrapWizard('show', tabIndex);
            isValid = isFormValidate($(tabValue));
          }

          return isValid;
        });
        return isValid;
      },
      onTabShow: function onTabShow(tab, navigation, idx) {
        var length = navigation.find('li').length - 1;
        idx === 0 ? $buttonPrev.hide() : $buttonPrev.show();
        idx === length && setTimeout(function () {
          return animation.play();
        }, 300);
        $this.find(Selector.NAV_LINK).removeClass(ClassName.DONE);
        $this.find(Selector.NAV_ITEM).each(function (i, v) {
          var link = $(v).find(Selector.NAV_LINK);

          if (idx === length && !link.hasClass(ClassName.ACTIVE)) {
            link.attr('data-wizard-state', 'done');
          }

          if (!link.hasClass(ClassName.ACTIVE)) {
            link.addClass(ClassName.DONE);
            return true;
          }

          if (idx === length) {
            link.addClass(ClassName.DONE);
            $controller.hide();
          }

          return false;
        });
      }
    });
  });
});
/*-----------------------------------------------
|   Bulk Actions
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var checkboxBulkSelects = $('.checkbox-bulk-select');

  if (checkboxBulkSelects.length) {
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      CHECKBOX_BULK_SELECT_CHECKBOX: '.checkbox-bulk-select-target'
    };
    var ClassName = {
      D_NONE: 'd-none'
    };
    var DATA_KEY = {
      CHECKBOX_BODY: 'checkbox-body',
      CHECKBOX_ACTIONS: 'checkbox-actions',
      CHECKBOX_REPLACED_ELEMENT: 'checkbox-replaced-element'
    };
    var Attribute = {
      CHECKED: 'checked',
      INDETERMINATE: 'indeterminate'
    };
    checkboxBulkSelects.each(function (index, value) {
      var checkboxBulkAction = $(value);
      var bulkActions = $(checkboxBulkAction.data(DATA_KEY.CHECKBOX_ACTIONS));
      var replacedElement = $(checkboxBulkAction.data(DATA_KEY.CHECKBOX_REPLACED_ELEMENT));
      var rowCheckboxes = $(checkboxBulkAction.data(DATA_KEY.CHECKBOX_BODY)).find(Selector.CHECKBOX_BULK_SELECT_CHECKBOX);
      checkboxBulkAction.on(Event.CLICK, function () {
        if (checkboxBulkAction.attr(Attribute.INDETERMINATE) === Attribute.INDETERMINATE) {
          bulkActions.addClass(ClassName.D_NONE);
          replacedElement.removeClass(ClassName.D_NONE);
          checkboxBulkAction.prop(Attribute.INDETERMINATE, false).attr(Attribute.INDETERMINATE, false);
          checkboxBulkAction.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
          rowCheckboxes.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
        } else {
          bulkActions.toggleClass(ClassName.D_NONE);
          replacedElement.toggleClass(ClassName.D_NONE);

          if (checkboxBulkAction.attr(Attribute.CHECKED)) {
            checkboxBulkAction.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
          } else {
            checkboxBulkAction.prop(Attribute.CHECKED, true).attr(Attribute.CHECKED, true);
          }

          rowCheckboxes.each(function (i, v) {
            var $this = $(v);

            if ($this.attr(Attribute.CHECKED)) {
              $this.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
            } else {
              $this.prop(Attribute.CHECKED, true).attr(Attribute.CHECKED, true);
            }
          });
        }
      });
      rowCheckboxes.on(Event.CLICK, function (e) {
        var $this = $(e.target);

        if ($this.attr(Attribute.CHECKED)) {
          $this.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
        } else {
          $this.prop(Attribute.CHECKED, true).attr(Attribute.CHECKED, true);
        }

        rowCheckboxes.each(function (i, v) {
          var $elem = $(v);

          if ($elem.attr(Attribute.CHECKED)) {
            checkboxBulkAction.prop(Attribute.INDETERMINATE, true).attr(Attribute.INDETERMINATE, Attribute.INDETERMINATE);
            bulkActions.removeClass(ClassName.D_NONE);
            replacedElement.addClass(ClassName.D_NONE);
            return false;
          }

          if (i === checkboxBulkAction.length) {
            checkboxBulkAction.prop(Attribute.INDETERMINATE, false).attr(Attribute.INDETERMINATE, false);
            checkboxBulkAction.prop(Attribute.CHECKED, false).attr(Attribute.CHECKED, false);
            bulkActions.addClass(ClassName.D_NONE);
            replacedElement.removeClass(ClassName.D_NONE);
          }

          return true;
        });
      });
    });
  }
});
/*-----------------------------------------------
|   Chart
-----------------------------------------------*/

window.utils.$document.ready(function () {
  /*-----------------------------------------------
  |   Helper functions and Data
  -----------------------------------------------*/
  var _window = window,
      utils = _window.utils;
  var chartData = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7];
  var labels = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
  /*-----------------------------------------------
  |   Chart Initialization
  -----------------------------------------------*/

  var newChart = function newChart(chart, config) {
    var ctx = chart.getContext('2d');
    return new window.Chart(ctx, config);
  };
  /*-----------------------------------------------
  |   Line Chart
  -----------------------------------------------*/


  var chartLine = document.getElementById('chart-line');

  if (chartLine) {
    var getChartBackground = function getChartBackground(chart) {
      var ctx = chart.getContext('2d');

      if (storage.isDark) {
        var _gradientFill = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);

        _gradientFill.addColorStop(0, utils.rgbaColor(utils.colors.primary, 0.5));

        _gradientFill.addColorStop(1, 'transparent');

        return _gradientFill;
      }

      var gradientFill = ctx.createLinearGradient(0, 0, 0, 250);
      gradientFill.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');
      return gradientFill;
    };

    var dashboardLineChart = newChart(chartLine, {
      type: 'line',
      data: {
        labels: labels.map(function (label) {
          return label.substring(0, label.length - 3);
        }),
        datasets: [{
          borderWidth: 2,
          data: chartData.map(function (d) {
            return (d * 3.14).toFixed(2);
          }),
          borderColor: utils.settings.chart.borderColor,
          backgroundColor: getChartBackground(chartLine)
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          mode: 'x-axis',
          xPadding: 20,
          yPadding: 10,
          displayColors: false,
          callbacks: {
            label: function label(tooltipItem) {
              return labels[tooltipItem.index] + " - " + tooltipItem.yLabel + " USD";
            },
            title: function title() {
              return null;
            }
          }
        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              show: true,
              labelString: 'Month'
            },
            ticks: {
              fontColor: utils.rgbaColor('#fff', 0.7),
              fontStyle: 600
            },
            gridLines: {
              color: utils.rgbaColor('#fff', 0.1),
              zeroLineColor: utils.rgbaColor('#fff', 0.1),
              lineWidth: 1
            }
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    });
    $('#dashboard-chart-select').on('change', function (e) {
      var LineDB = {
        all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10].map(function (d) {
          return (d * 3.14).toFixed(2);
        }),
        successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8].map(function (d) {
          return (d * 3.14).toFixed(2);
        }),
        failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2].map(function (d) {
          return (d * 3.14).toFixed(2);
        })
      };
      dashboardLineChart.data.datasets[0].data = LineDB[e.target.value];
      dashboardLineChart.update();
    });
  }
  /*-----------------------------------------------
  |   Bar Chart
  -----------------------------------------------*/


  var chartBar = document.getElementById('chart-bar');

  if (chartBar) {
    newChart(chartBar, {
      type: 'bar',
      data: {
        labels: labels.slice(0, 2),
        datasets: [{
          label: 'First dataset',
          backgroundColor: [utils.rgbaColor(utils.colors.info), utils.rgbaColor(utils.colors.warning)],
          borderColor: [utils.rgbColor(utils.colors.info), utils.rgbColor(utils.colors.warning)],
          borderWidth: 2,
          data: [6, 10]
        }, {
          label: 'Second dataset',
          backgroundColor: [utils.rgbaColor(utils.colors.success), utils.rgbaColor(utils.colors.danger)],
          borderColor: [utils.rgbColor(utils.colors.success), utils.rgbColor(utils.colors.danger)],
          borderWidth: 2,
          data: [3, 7]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  /*-----------------------------------------------
  |   Radar Chart
  -----------------------------------------------*/


  var chartRadar = document.getElementById('chart-radar');

  if (chartRadar) {
    newChart(chartRadar, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'First dataset',
          backgroundColor: utils.rgbaColor(utils.colors.warning),
          borderColor: utils.rgbColor(utils.colors.warning),
          borderWidth: 2,
          data: chartData.slice(0, 12),
          fill: 1
        }, {
          label: 'Second dataset',
          backgroundColor: utils.rgbaColor(utils.colors.danger),
          borderColor: utils.rgbColor(utils.colors.danger),
          borderWidth: 2,
          data: chartData.slice(12, 24),
          fill: 1
        }]
      },
      options: {
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        }
      }
    });
  }
  /*-----------------------------------------------
  |   Pie Chart
  -----------------------------------------------*/


  var chartPie = document.getElementById('chart-pie');

  if (chartPie) {
    newChart(chartPie, {
      type: 'pie',
      data: {
        labels: labels.slice(0, 3),
        datasets: [{
          backgroundColor: utils.rgbaColors(),
          borderColor: utils.rgbColors(),
          data: chartData.slice(0, 3)
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  /*-----------------------------------------------
  |   Doughnut Chart
  -----------------------------------------------*/


  var chartDoughnut = document.getElementById('chart-doughnut');

  if (chartDoughnut) {
    newChart(chartDoughnut, {
      type: 'doughnut',
      data: {
        labels: labels.slice(0, 3),
        datasets: [{
          backgroundColor: utils.rgbColors(),
          borderColor: utils.rgbColors(),
          data: chartData.slice(0, 3)
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  /*-----------------------------------------------
  |   Polar Area Chart
  -----------------------------------------------*/


  var chartPolarArea = document.getElementById('chart-polar-area');

  if (chartPolarArea) {
    newChart(chartPolarArea, {
      type: 'polarArea',
      data: {
        labels: labels.slice(0, 3),
        datasets: [{
          backgroundColor: utils.rgbaColors(),
          borderColor: utils.rgbaColors(),
          data: chartData.slice(0, 3)
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  /* eslint-disable */

  /*-----------------------------------------------
  |   Polar Bubble
  -----------------------------------------------*/


  var colorize = function colorize(opaque, context) {
    var value = context.dataset.data[context.dataIndex];
    var x = value.x / 100;
    var y = value.y / 100;
    var r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
    var g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
    var b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
    var a = opaque ? 1 : 0.5 * value.v / 1000;
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  };

  var rand = function rand(min, max) {
    var seed = _this._seed;
    min = min === undefined ? 0 : min;
    max = max === undefined ? 1 : max;
    _this._seed = (seed * 9301 + 49297) % 233280;
    return min + _this._seed / 233280 * (max - min);
  };

  var generateData = function generateData() {
    var data = [];
    var DATA_COUNT = 16;
    var MIN_XY = -150;
    var MAX_XY = 100;

    for (var i = 0; i < DATA_COUNT; i += 1) {
      data.push({
        x: rand(MIN_XY, MAX_XY),
        y: rand(MIN_XY, MAX_XY),
        v: rand(0, 1000)
      });
    }

    return data;
  };

  var chartBubble = document.getElementById('chart-bubble');

  if (chartBubble) {
    newChart(chartBubble, {
      type: 'bubble',
      data: {
        datasets: [{
          label: ['Deer Population'],
          data: [{
            x: -10,
            y: -20,
            r: 20
          }, {
            x: 100,
            y: 0,
            r: 10
          }, {
            x: 60,
            y: 30,
            r: 20
          }, {
            x: 40,
            y: 60,
            r: 25
          }, {
            x: 80,
            y: 80,
            r: 30
          }, {
            x: 20,
            y: 30,
            r: 25
          }, {
            x: 0,
            y: 100,
            r: 5
          }],
          backgroundColor: '#2C7BE5'
        }]
      }
    });
  }
  /*-----------------------------------------------
  |   Component Line Chart
  -----------------------------------------------*/


  var componentChartLine = document.getElementById('component-chart-line');

  if (componentChartLine) {
    newChart(componentChartLine, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          borderWidth: 2,
          data: chartData.slice(2, 14).map(function (d) {
            return (d * 3.14).toFixed(2);
          }),
          borderColor: utils.rgbaColor(utils.colors.primary, 0.4),
          backgroundColor: utils.rgbaColor(utils.colors.primary)
        }, {
          borderWidth: 2,
          borderColor: '#fff',
          data: chartData.slice(3, 15).map(function (d) {
            return (d * 3.14).toFixed(2);
          }),
          backgroundColor: utils.rgbaColor(utils.colors.primary)
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          mode: 'x-axis',
          xPadding: 20,
          yPadding: 10,
          displayColors: false,
          callbacks: {
            label: function label(tooltipItem) {
              return labels[tooltipItem.index] + " - " + tooltipItem.yLabel + " USD";
            },
            title: function title() {
              return null;
            }
          }
        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              show: true,
              labelString: 'Month'
            },
            ticks: {
              fontColor: utils.rgbaColor('#000', 0.7),
              fontStyle: 600
            },
            gridLines: {
              // color: utils.rgbaColor('#000', 0.1),
              color: utils.rgbaColor('#000', 0.1),
              zeroLineColor: utils.rgbaColor('#000', 0.1),
              lineWidth: 1
            }
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    });
  }
  /*-----------------------------------------------
  |   Real time user
  -----------------------------------------------*/

  /*-----------------------------------------------
  |   Bar Chart
  -----------------------------------------------*/


  var realTimeUser = document.getElementById('real-time-user');

  if (realTimeUser) {
    var realTimeUserChart = newChart(realTimeUser, {
      type: 'bar',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        datasets: [{
          label: 'Users',
          backgroundColor: utils.rgbaColor('#fff', 0.3),
          data: [183, 163, 176, 172, 166, 161, 164, 159, 172, 173, 184, 163, 99, 173, 183, 167, 160, 183, 163, 176, 172, 166, 173, 188, 175]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: false,
            stacked: true
          }],
          xAxes: [{
            stacked: false,
            ticks: {
              display: false
            },
            barPercentage: 0.9,
            categoryPercentage: 1.0,
            gridLines: {
              color: utils.rgbaColor('#fff', 0.1),
              display: false
            }
          }]
        }
      }
    });
    var userCounterDom = $('.real-time-user');
    setInterval(function () {
      var userCounter = Math.floor(Math.random() * (120 - 60) + 60);
      /*-----------------------------------------------
      |   Remove data
      -----------------------------------------------*/

      realTimeUserChart.data.datasets.forEach(function (dataset) {
        dataset.data.shift();
      });
      realTimeUserChart.update();
      /*-----------------------------------------------
      |   Add data
      -----------------------------------------------*/

      setTimeout(function () {
        realTimeUserChart.data.datasets.forEach(function (dataset) {
          dataset.data.push(userCounter);
        });
        realTimeUserChart.update();
        userCounterDom.text(userCounter);
      }, 500);
    }, 2000);
  }
});
/*-----------------------------------------------
|   Chat
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var Event = {
    CLICK: 'click',
    SHOWN_BS_TAB: 'shown.bs.tab',
    RESIZE: 'resize',
    KEYUP: 'keyup',
    EMOJI_BTN_CLIK: 'emojibtn.click'
  };
  var Selector = {
    CHAT_SIDEBAR: '.chat-sidebar',
    CHAT_CONTACT: '.chat-contact',
    CHAT_CONTENT_SCROLL_AREA: '.chat-content-scroll-area',
    CHAT_CONTENT_HEADER_ACTIVE: '.card-chat-pane.active .chat-content-header',
    CHAT_CONTENT_SCROLL_AREA_ACTIVE: '.card-chat-pane.active .chat-content-scroll-area',
    CARD_CHAT_PANE_ACTIVE: '.card-chat-pane.active',
    CHAT_EMOJIAREA: '.chat-editor-area .emojiarea',
    BTN_SEND: '.btn-send',
    CHAT_FILE_UPLOAD: '.chat-file-upload',
    CARD_CHAT_CONTENT: '.card-chat-content',
    EMOJIONEAREA_EDITOR: '.emojionearea-editor',
    BTN_INFO: '.btn-info',
    CONVERSATION_INFO: '.conversation-info',
    CONTACTS_LIST_SHOW: '.contacts-list-show',
    CHAT_EDITOR_AREA: '.chat-editor-area'
  };
  var ClassName = {
    UNREAD_MESSAGE: 'unread-message',
    TEXT_PRIMARY: 'text-primary',
    SHOW: 'show'
  };
  var DATA_KEY = {
    TARGET: 'target',
    INDEX: 'index'
  };
  var Attribute = {
    STYLE: 'style'
  };
  var $chatSidebar = $(Selector.CHAT_SIDEBAR);
  var $chatContact = $(Selector.CHAT_CONTACT);
  var $chatEmojiarea = $(Selector.CHAT_EMOJIAREA);
  var $chatIcons = $(Selector.BTN_SEND + "," + Selector.CHAT_FILE_UPLOAD);
  var $btnSend = $(Selector.BTN_SEND);
  var initialEditorHeight = $(Selector.EMOJIONEAREA_EDITOR).outerHeight();
  var $chatContent = $(Selector.CARD_CHAT_CONTENT);
  var $scrollArea = $(Selector.CHAT_CONTENT_SCROLL_AREA);
  var $currentChatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA); // Set chat scrollbar area height

  var setChatAreaHeight = function setChatAreaHeight(chatContentArea, editorAreaHeight) {
    var chatContentHeight = chatContentArea.height();
    var calculated = chatContentHeight - editorAreaHeight;
    var chatContentHeaderHeight = $(Selector.CHAT_CONTENT_HEADER_ACTIVE).outerHeight();
    var chatArea = chatContentArea.find(Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE);
    chatArea.css({
      height: calculated - chatContentHeaderHeight
    });
  }; // Set scrollbar position


  var setScrollbarPosition = function setScrollbarPosition($chatArea) {
    if ($chatArea) {
      var scrollArea = $chatArea;
      scrollArea.scrollTop = $chatArea.scrollHeight;
    }
  };

  setTimeout(function () {
    setScrollbarPosition($currentChatArea);
  }, 700);
  window.utils.$document.on(Event.CLICK, Selector.CHAT_CONTACT, function (e) {
    var $this = $(e.currentTarget); // Hide contact list sidebar on responsive

    window.utils.$window.width() < 768 && $chatSidebar.css('left', '-100%'); // Remove unread-message class when read

    $this.hasClass(ClassName.UNREAD_MESSAGE) && $this.removeClass(ClassName.UNREAD_MESSAGE);
  });
  $chatContact.on(Event.SHOWN_BS_TAB, function (e) {
    var $this = $(e.currentTarget);
    var $tab = $this.data(DATA_KEY.TARGET);
    $chatEmojiarea.length && $chatEmojiarea[0].emojioneArea.setText('');
    var editorHeight = $(Selector.EMOJIONEAREA_EDITOR).outerHeight();
    setChatAreaHeight($chatContent, editorHeight);
    $chatIcons.removeAttr(Attribute.STYLE);
    $btnSend.removeClass(ClassName.TEXT_PRIMARY); // Set scrollbar position on bottom

    var $chatArea = document.querySelector($tab + " " + Selector.CHAT_CONTENT_SCROLL_AREA);
    setScrollbarPosition($chatArea);
  }); // Detect keyup event on EmojioneArea Editor

  if ($chatEmojiarea.length) {
    $chatEmojiarea[0].emojioneArea.on(Event.KEYUP + " " + Event.EMOJI_BTN_CLIK, function ($editor) {
      var textLength = $editor.text().trim().length;
      var _$editor$ = $editor[0],
          offsetWidth = _$editor$.offsetWidth,
          clientWidth = _$editor$.clientWidth;
      var currentEditorHeight = $editor.outerHeight();
      var emojiLength = $editor.find('img').length; // Change color of submit button on keyup

      textLength || emojiLength ? $btnSend.addClass(ClassName.TEXT_PRIMARY) : $btnSend.removeClass(ClassName.TEXT_PRIMARY);

      if (currentEditorHeight !== initialEditorHeight) {
        setChatAreaHeight($chatContent, currentEditorHeight); // Set scrollbar position on bottom

        var tabContentId = $chatContent.find(Selector.CARD_CHAT_PANE_ACTIVE).attr('id');
        var $chatArea = document.querySelector("#" + tabContentId + " " + Selector.CHAT_CONTENT_SCROLL_AREA);
        setScrollbarPosition($chatArea);
      } // Align file upload and send icons when editor overflow scroll


      $chatIcons.css({
        marginRight: offsetWidth === clientWidth ? 0 : '1rem'
      });
      initialEditorHeight = currentEditorHeight;
    });
  } // Open conversation info sidebar


  window.utils.$document.on(Event.CLICK, Selector.BTN_INFO, function (e) {
    var $this = $(e.currentTarget);
    var dataIndex = $this.data(DATA_KEY.INDEX);
    var $info = $(Selector.CONVERSATION_INFO + "[data-" + DATA_KEY.INDEX + "='" + dataIndex + "']");
    $info.toggleClass(ClassName.SHOW);
  }); // Show contact list sidebar on responsive

  window.utils.$document.on(Event.CLICK, Selector.CONTACTS_LIST_SHOW, function () {
    return $chatSidebar.css('left', 0);
  }); // Set scrollbar area height on resize

  window.utils.$window.on(Event.RESIZE, function () {
    if ($scrollArea.length) {
      var editorCurrentHeight = $(Selector.EMOJIONEAREA_EDITOR).outerHeight();
      setChatAreaHeight($chatContent, editorCurrentHeight);
      var chatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE);
      setScrollbarPosition(chatArea);
    }
  });
});
/*-----------------------------------------------
|   Copy link
-----------------------------------------------*/

utils.$document.ready(function () {
  $('#copyLinkModal').on('shown.bs.modal', function () {
    $('.invitation-link').focus().select();
  });
});
/*-----------------------------------------------
|   Count Up
-----------------------------------------------*/

utils.$document.ready(function () {
  var $counters = $('[data-countup]');

  if ($counters.length) {
    $counters.each(function (index, value) {
      var $counter = $(value);
      var counter = $counter.data('countup');

      var toAlphanumeric = function toAlphanumeric(num) {
        var number = num;
        var abbreviations = {
          k: 1000,
          m: 1000000,
          b: 1000000000,
          t: 1000000000000
        };

        if (num < abbreviations.m) {
          number = (num / abbreviations.k).toFixed(2) + "k";
        } else if (num < abbreviations.b) {
          number = (num / abbreviations.m).toFixed(2) + "m";
        } else if (num < abbreviations.t) {
          number = (num / abbreviations.b).toFixed(2) + "b";
        } else {
          number = (num / abbreviations.t).toFixed(2) + "t";
        }

        return number;
      };

      var toComma = function toComma(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

      var toSpace = function toSpace(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      };

      var playCountUpTriggered = false;

      var countUP = function countUP() {
        if (utils.isScrolledIntoView(value) && !playCountUpTriggered) {
          if (!playCountUpTriggered) {
            $({
              countNum: 0
            }).animate({
              countNum: counter.count
            }, {
              duration: counter.duration || 1000,
              easing: 'linear',
              step: function step() {
                $counter.text((counter.prefix ? counter.prefix : '') + Math.floor(this.countNum));
              },
              complete: function complete() {
                switch (counter.format) {
                  case 'comma':
                    $counter.text((counter.prefix ? counter.prefix : '') + toComma(this.countNum));
                    break;

                  case 'space':
                    $counter.text((counter.prefix ? counter.prefix : '') + toSpace(this.countNum));
                    break;

                  case 'alphanumeric':
                    $counter.text((counter.prefix ? counter.prefix : '') + toAlphanumeric(this.countNum));
                    break;

                  default:
                    $counter.text((counter.prefix ? counter.prefix : '') + this.countNum);
                }
              }
            });
            playCountUpTriggered = true;
          }
        }

        return playCountUpTriggered;
      };

      countUP();
      utils.$window.scroll(function () {
        countUP();
      });
    });
  }
});
/*-----------------------------------------------
|   Data table
-----------------------------------------------*/

window.utils.$document.ready(function () {
  // $.fn.dataTable.ext.classes.sPageButton = 'btn btn-falcon-default btn-sm';
  var dataTables = $('.data-table');

  var customDataTable = function customDataTable(elem) {
    elem.find('.pagination').addClass('pagination-sm'); //   .closest('[class*="col"]')
    //   .removeClass('col-sm-12 col-md-7')
    //   .addClass('col-auto mt-2 px-1')
    //   .closest('.row')
    //   .addClass('no-gutters justify-content-center justify-content-md-between px-3 pb-3');
  };

  dataTables.length && dataTables.each(function (index, value) {
    var $this = $(value);
    var options = $.extend({
      responsive: true,
      dom: "<'row mx-1'<'col-sm-12 col-md-6 px-3'l><'col-sm-12 col-md-6 px-3'f>>" + "<'table-responsive'tr>" + "<'row mx-1 align-items-center justify-content-center justify-content-md-between'<'col-auto mb-2 mb-sm-0'i><'col-auto'p>>"
    }, $this.data('options'));
    $this.DataTable(options);
    var $wrpper = $this.closest('.dataTables_wrapper');
    customDataTable($wrpper);
    $this.on('draw.dt', function () {
      return customDataTable($wrpper);
    });
  });
});
/*-----------------------------------------------
|   Countdown
-----------------------------------------------*/

utils.$document.ready(function () {
  var $dataCountdowns = $('[data-countdown]');
  var DATA_KEY = {
    FALLBACK: 'countdown-fallback',
    COUNTDOWN: 'countdown'
  };

  if ($dataCountdowns.length) {
    $dataCountdowns.each(function (index, value) {
      var $dateCountdown = $(value);
      var date = $dateCountdown.data(DATA_KEY.COUNTDOWN);
      var fallback;

      if (_typeof($dateCountdown.data(DATA_KEY.FALLBACK)) !== _typeof(undefined)) {
        fallback = $dateCountdown.data(DATA_KEY.FALLBACK);
      }

      $dateCountdown.countdown(date, function (event) {
        if (event.elapsed) {
          $dateCountdown.text(fallback);
        } else {
          $dateCountdown.text(event.strftime('%D days %H:%M:%S'));
        }
      });
    });
  }
});
/*-----------------------------------------------
|   Demo mode
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var _window2 = window,
      utils = _window2.utils,
      location = _window2.location;
  var Event = {
    CHANGE: 'change'
  };
  var Selector = {
    DARK: '#dark',
    RTL: '#rtl',
    FLUID: '#fluid'
  };
  var DATA_KEY = {
    URL: 'url',
    HOME_URL: 'home-url'
  }; // Redirect on Checkbox change

  var handleChange = function handleChange(selector) {
    utils.$document.on(Event.CHANGE, selector, function (e) {
      var $this = $(e.currentTarget);
      var isChecked = $this.prop('checked');

      if (isChecked) {
        var url = $this.data(DATA_KEY.URL);
        location.replace(url);
      } else {
        var homeUrl = $this.data(DATA_KEY.HOME_URL);
        location.replace(homeUrl);
      }
    });
  }; // Mode checkbox handler


  handleChange(Selector.DARK);
  handleChange(Selector.RTL);
  handleChange(Selector.FLUID);
});
/*-----------------------------------------------
|   Detector
-----------------------------------------------*/

utils.$document.ready(function () {
  if (window.is.opera()) utils.$html.addClass('opera');
  if (window.is.mobile()) utils.$html.addClass('mobile');
  if (window.is.firefox()) utils.$html.addClass('firefox');
  if (window.is.safari()) utils.$html.addClass('safari');
  if (window.is.ios()) utils.$html.addClass('ios');
  if (window.is.ie()) utils.$html.addClass('ie');
  if (window.is.edge()) utils.$html.addClass('edge');
  if (window.is.chrome()) utils.$html.addClass('chrome');
  if (utils.nua.match(/puppeteer/i)) utils.$html.addClass('puppeteer');
  if (window.is.mac()) utils.$html.addClass('osx');
  if (window.is.windows()) utils.$html.addClass('windows');
});
/*-----------------------------------------------
|   Documentation and Component Navigation
-----------------------------------------------*/

utils.$document.ready(function () {
  var $componentNav = $('#components-nav');

  if ($componentNav.length) {
    var loc = window.location.href;

    var _loc$split = loc.split('#');

    loc = _loc$split[0];
    var location = loc.split('/');
    var url = location[location.length - 2] + "/" + location.pop();
    var urls = $componentNav.children('li').children('a');

    for (var i = 0, max = urls.length; i < max; i += 1) {
      var dom = urls[i].href.split('/');
      var domURL = dom[dom.length - 2] + "/" + dom.pop();

      if (domURL === url) {
        var $targetedElement = $(urls[i]);
        $targetedElement.removeClass('text-800');
        $targetedElement.addClass('font-weight-medium');
        break;
      }
    }
  }
});
/*-----------------------------------------------
|   Dashboard Table dropdown
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var Event = {
    SHOWN_BS_DROPDOWN: 'shown.bs.dropdown',
    HIDDEN_BS_DROPDOWN: 'hidden.bs.dropdown'
  };
  var Selector = {
    TABLE_RESPONSIVE: '.table-responsive',
    DROPDOWN_MENU: '.dropdown-menu'
  };
  $(Selector.TABLE_RESPONSIVE).on(Event.SHOWN_BS_DROPDOWN, function dashboardTableDropdown(e) {
    var t = $(this);
    var m = $(e.target).find(Selector.DROPDOWN_MENU);
    var tb = t.offset().top + t.height();
    var mb = m.offset().top + m.outerHeight(true);
    var d = 20; // Space for shadow + scrollbar.

    if (t[0].scrollWidth > t.innerWidth()) {
      if (mb + d > tb) {
        t.css('padding-bottom', mb + d - tb);
      }
    } else {
      t.css('overflow', 'visible');
    }
  }).on(Event.HIDDEN_BS_DROPDOWN, function (e) {
    var $this = $(e.currentTarget);
    $this.css({
      'padding-bottom': '',
      overflow: ''
    });
  });
}); // Reference
// https://github.com/twbs/bootstrap/issues/11037#issuecomment-274870381

/*-----------------------------------------------
|   Dropzone
-----------------------------------------------*/

window.Dropzone ? window.Dropzone.autoDiscover = false : '';
window.utils.$document.ready(function () {
  var Selector = {
    DROPZONE: '[data-dropzone]',
    DZ_ERROR_MESSAGE: '.dz-error-message',
    DZ_PREVIEW: '.dz-preview',
    DZ_PROGRESS: '.dz-preview .dz-preview-cover .dz-progress',
    DZ_PREVIEW_COVER: '.dz-preview .dz-preview-cover'
  };
  var ClassName = {
    DZ_FILE_PROCESSING: 'dz-file-processing',
    DZ_FILE_COMPLETE: 'dz-file-complete',
    DZ_COMPLETE: 'dz-complete',
    DZ_PROCESSING: 'dz-processing'
  };
  var DATA_KEY = {
    OPTIONS: 'options'
  };
  var Events = {
    ADDED_FILE: 'addedfile',
    COMPLETE: 'complete'
  };
  var dropzones = $(Selector.DROPZONE);
  !!dropzones.length && dropzones.each(function (index, value) {
    var element = value;
    var $this = $(element);
    var userOptions = $this.data(DATA_KEY.OPTIONS);
    userOptions = userOptions || {};
    var data = userOptions.data ? userOptions.data : {};
    var options = $.extend({
      url: '/assets/php/',
      addRemoveLinks: false,
      previewsContainer: element.querySelector(Selector.DZ_PREVIEW),
      previewTemplate: element.querySelector(Selector.DZ_PREVIEW).innerHTML,
      thumbnailWidth: null,
      thumbnailHeight: null,
      init: function init() {
        var thisDropzone = this;

        if (data.length) {
          $.each(data, function (i, v) {
            var mockFile = {
              name: v.name,
              size: v.size
            };
            thisDropzone.options.addedfile.call(thisDropzone, mockFile);
            thisDropzone.options.thumbnail.call(thisDropzone, mockFile, v.url + "/" + v.name);
          });
        }

        thisDropzone.on(Events.ADDED_FILE, function addedfile() {
          if ('maxFiles' in userOptions) {
            if (userOptions.maxFiles === 1 && $this.find(Selector.DZ_PREVIEW_COVER).length > 1) {
              $this.find(Selector.DZ_PREVIEW_COVER).first().remove();
            }

            if (userOptions.maxFiles === 1 && this.files.length > 1) {
              this.removeFile(this.files[0]);
            }
          }
        });
      }
    }, userOptions);
    element.querySelector(Selector.DZ_PREVIEW).innerHTML = '';
    var dropzone = new window.Dropzone(value, options);
    dropzone.on(Events.ADDED_FILE, function () {
      $this.find(Selector.DZ_PREVIEW_COVER).removeClass(ClassName.DZ_FILE_COMPLETE);
      $this.addClass(ClassName.DZ_FILE_PROCESSING);
    });
    dropzone.on(Events.COMPLETE, function () {
      $this.find(Selector.DZ_PREVIEW_COVER).removeClass(ClassName.DZ_PROCESSING);
      $this.addClass(ClassName.DZ_FILE_COMPLETE);
    });
  });
});
/*-----------------------------------------------
|  Echarts
-----------------------------------------------*/

var getPosition = function getPosition(pos, params, dom, rect, size) {
  return {
    top: pos[1] - size.contentSize[1] - 10,
    left: pos[0] - size.contentSize[0] / 2
  };
};

utils.$document.ready(function () {
  var Events = {
    CHANGE: 'change'
  };
  var Selector = {
    ECHART_LINE_TOTAL_ORDER: '.echart-line-total-order',
    ECHART_BAR_WEEKLY_SALES: '.echart-bar-weekly-sales',
    ECHART_LINE_TOTAL_SALES: '.echart-line-total-sales',
    SELECT_MONTH: '.select-month',
    ECHART_BAR_TOP_PRODUCTS: '.echart-bar-top-products',
    ECHART_WORLD_MAP: '.echart-world-map',
    ECHART_DOUGHNUT: '.echart-doughnut'
  }; //
  // ─── TOTAL ORDER CHART ──────────────────────────────────────────────────────────
  //

  var $echartLineTotalOrder = document.querySelector(Selector.ECHART_LINE_TOTAL_ORDER);

  if ($echartLineTotalOrder) {
    var $this = $($echartLineTotalOrder); // Get options from data attribute

    var userOptions = $this.data('options');
    var chart = window.echarts.init($echartLineTotalOrder); // Default options

    var defaultOptions = {
      tooltip: {
        triggerOn: 'mousemove',
        trigger: 'axis',
        padding: [7, 10],
        formatter: '{b0}: {c0}',
        backgroundColor: utils.grays.white,
        borderColor: utils.grays['300'],
        borderWidth: 1,
        transitionDuration: 0,
        position: function position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        textStyle: {
          color: utils.colors.dark
        }
      },
      xAxis: {
        type: 'category',
        data: ['Week 4', 'Week 5'],
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: utils.grays['300'],
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          type: 'none'
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          show: false
        }
      },
      series: [{
        type: 'line',
        lineStyle: {
          color: utils.colors.primary,
          width: 3
        },
        itemStyle: {
          color: utils.grays.white,
          borderColor: utils.colors.primary,
          borderWidth: 2
        },
        hoverAnimation: true,
        data: [20, 130],
        connectNulls: true,
        smooth: 0.6,
        smoothMonotone: 'x',
        symbol: 'circle',
        symbolSize: 8,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: utils.rgbaColor(utils.colors.primary, 0.25)
            }, {
              offset: 1,
              color: utils.rgbaColor(utils.colors.primary, 0)
            }]
          }
        }
      }],
      grid: {
        bottom: '2%',
        top: '0%',
        right: '10px',
        left: '10px'
      }
    }; // Merge options using lodash

    var options = window._.merge(defaultOptions, userOptions);

    chart.setOption(options);
  } //
  // ─── WEEKLY SALES CHART ─────────────────────────────────────────────────────────
  //


  var $echartBarWeeklySales = document.querySelector(Selector.ECHART_BAR_WEEKLY_SALES);

  if ($echartBarWeeklySales) {
    var _$this = $($echartBarWeeklySales); // Get options from data attribute


    var _userOptions = _$this.data('options');

    var data = [120, 200, 150, 80, 70, 110, 120]; // Max value of data

    var yMax = Math.max.apply(Math, data);
    var dataBackground = data.map(function () {
      return yMax;
    });

    var _chart = window.echarts.init($echartBarWeeklySales); // Default options


    var _defaultOptions = {
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        formatter: '{b1}: {c1}',
        backgroundColor: utils.grays.white,
        borderColor: utils.grays['300'],
        borderWidth: 1,
        textStyle: {
          color: utils.colors.dark
        },
        transitionDuration: 0,
        position: function position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        }
      },
      xAxis: {
        type: 'category',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        boundaryGap: false,
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          type: 'none'
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          type: 'none'
        }
      },
      series: [{
        type: 'bar',
        barWidth: '5px',
        barGap: '-100%',
        itemStyle: {
          color: utils.grays['200'],
          barBorderRadius: 10
        },
        data: dataBackground,
        animation: false,
        emphasis: {
          itemStyle: {
            color: utils.grays['200']
          }
        }
      }, {
        type: 'bar',
        barWidth: '5px',
        itemStyle: {
          color: utils.colors.primary,
          barBorderRadius: 10
        },
        data: data,
        emphasis: {
          itemStyle: {
            color: utils.colors.primary
          }
        },
        z: 10
      }],
      grid: {
        right: 5,
        left: 10,
        top: 0,
        bottom: 0
      }
    }; // Merge user options with lodash

    var _options = window._.merge(_defaultOptions, _userOptions);

    _chart.setOption(_options);
  } //
  // ─── EHCART LINE TOTAL SALES ────────────────────────────────────────────────────────────────
  //


  var $echartsLineTotalSales = document.querySelector(Selector.ECHART_LINE_TOTAL_SALES);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function getFormatter(params) {
    var _params$ = params[0],
        name = _params$.name,
        value = _params$.value;
    var date = new Date(name);
    return months[0] + " " + date.getDate() + ", " + value;
  }

  if ($echartsLineTotalSales) {
    var _$this2 = $($echartsLineTotalSales); // Get options from data attribute


    var _userOptions2 = _$this2.data('options');

    var _chart2 = window.echarts.init($echartsLineTotalSales);

    var monthsnumber = [[60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70], [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50], [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60], [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80], [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50], [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70], [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50], [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110], [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70], [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70], [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]];
    var _defaultOptions2 = {
      color: utils.grays.white,
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.grays.white,
        borderColor: utils.grays['300'],
        borderWidth: 1,
        textStyle: {
          color: utils.colors.dark
        },
        formatter: function formatter(params) {
          return getFormatter(params);
        },
        transitionDuration: 0,
        position: function position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        }
      },
      xAxis: {
        type: 'category',
        data: ['2019-01-05', '2019-01-06', '2019-01-07', '2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11', '2019-01-12', '2019-01-13', '2019-01-14', '2019-01-15', '2019-01-16'],
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            color: utils.grays['300'],
            type: 'dashed'
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            // color: utils.grays['300'],
            color: utils.rgbaColor('#000', 0.01),
            type: 'dashed'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: utils.grays['400'],
          formatter: function formatter(value) {
            var date = new Date(value);
            return months[date.getMonth()] + " " + date.getDate();
          },
          margin: 15
        }
      },
      yAxis: {
        type: 'value',
        axisPointer: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: utils.grays['300'],
            type: 'dashed'
          }
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.grays['400'],
          margin: 15
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      series: [{
        type: 'line',
        data: monthsnumber[0],
        lineStyle: {
          color: utils.colors.primary
        },
        itemStyle: {
          borderColor: utils.colors.primary,
          borderWidth: 2
        },
        symbol: 'circle',
        symbolSize: 10,
        smooth: false,
        hoverAnimation: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: utils.rgbaColor(utils.colors.primary, 0.2)
            }, {
              offset: 1,
              color: utils.rgbaColor(utils.colors.primary, 0)
            }]
          }
        }
      }],
      grid: {
        right: '28px',
        left: '40px',
        bottom: '15%',
        top: '5%'
      }
    };

    var _options2 = window._.merge(_defaultOptions2, _userOptions2);

    _chart2.setOption(_options2); // Change chart options accordiong to the selected month


    utils.$document.on(Events.CHANGE, Selector.SELECT_MONTH, function (e) {
      var $field = $(e.target);
      var month = $field.val();
      var data = monthsnumber[month];

      _chart2.setOption({
        tooltip: {
          formatter: function formatter(params) {
            var _params$2 = params[0],
                name = _params$2.name,
                value = _params$2.value;
            var date = new Date(name);
            return months[month] + " " + date.getDate() + ", " + value;
          }
        },
        xAxis: {
          axisLabel: {
            formatter: function formatter(value) {
              var date = new Date(value);
              return months[$field.val()] + " " + date.getDate();
            },
            margin: 15
          }
        },
        series: [{
          data: data
        }]
      });
    });
  } //
  // ─── BAR CHART TOP PRODUCTS ──────────────────────────────────────────────────────────────────
  //


  var $echartBarTopProducts = document.querySelector(Selector.ECHART_BAR_TOP_PRODUCTS);

  if ($echartBarTopProducts) {
    var _data = [['product', '2019', '2018'], ['Boots4', 43, 85], ['Reign Pro', 83, 73], ['Slick', 86, 62], ['Falcon', 72, 53], ['Sparrow', 80, 50], ['Hideway', 50, 70], ['Freya', 80, 90] // ['Raven Pro', 60, 70],
    // ['Posh', 80, 70],
    ];

    var _$this3 = $($echartBarTopProducts);

    var _userOptions3 = _$this3.data('options');

    var _chart3 = window.echarts.init($echartBarTopProducts);

    var _defaultOptions3 = {
      color: [utils.colors.primary, utils.grays['300']],
      dataset: {
        source: _data
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.grays.white,
        borderColor: utils.grays['300'],
        borderWidth: 1,
        textStyle: {
          color: utils.colors.dark
        },
        transitionDuration: 0,
        position: function position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: function formatter(params) {
          return "<div class=\"font-weight-semi-bold\">" + params.seriesName + "</div><div class=\"fs--1 text-600\"><strong>" + params.name + ":</strong> " + params.value[params.componentIndex + 1] + "</div>";
        }
      },
      legend: {
        data: ['2019', '2018'],
        left: 'left',
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 0,
        icon: 'circle',
        inactiveColor: utils.grays['500'],
        textStyle: {
          color: utils.grays['700']
        }
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: utils.grays['400']
        },
        axisLine: {
          lineStyle: {
            color: utils.grays['300'],
            type: 'dashed'
          }
        },
        axisTick: false,
        boundaryGap: true
      },
      yAxis: {
        axisPointer: {
          type: 'none'
        },
        axisTick: 'none',
        splitLine: {
          lineStyle: {
            color: utils.grays['300'],
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: utils.grays['400']
        }
      },
      series: [{
        type: 'bar',
        barWidth: '12%',
        barGap: '30%',
        label: {
          normal: {
            show: false
          }
        },
        z: 10,
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 0, 0],
            color: utils.colors.primary
          }
        }
      }, {
        type: 'bar',
        barWidth: '12%',
        barGap: '30%',
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: [4, 4, 0, 0],
            color: utils.grays[300]
          }
        }
      }],
      grid: {
        right: '0',
        left: '30px',
        bottom: '10%',
        top: '20%'
      }
    };

    var _options3 = window._.merge(_defaultOptions3, _userOptions3);

    _chart3.setOption(_options3);
  } //
  // ─── PIE CHART ──────────────────────────────────────────────────────────────────
  //


  var $pieChartRevenue = document.querySelector(Selector.ECHART_DOUGHNUT);

  if ($pieChartRevenue) {
    var _$this4 = $($pieChartRevenue);

    var _userOptions4 = _$this4.data('options');

    var _chart4 = window.echarts.init($pieChartRevenue);

    var _defaultOptions4 = {
      color: [utils.colors.primary, utils.colors.info, utils.grays[300]],
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.grays.white,
        textStyle: {
          color: utils.grays.black
        },
        transitionDuration: 0,
        borderColor: utils.grays['300'],
        borderWidth: 1,
        formatter: function formatter(params) {
          return "<strong>" + params.data.name + ":</strong> " + params.percent + "%";
        }
      },
      position: function position(pos, params, dom, rect, size) {
        return getPosition(pos, params, dom, rect, size);
      },
      legend: {
        show: false
      },
      series: [{
        type: 'pie',
        radius: ['100%', '87%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        itemStyle: {
          borderWidth: 2,
          borderColor: utils.grays.white
        },
        label: {
          normal: {
            show: false,
            position: 'center',
            textStyle: {
              fontSize: '20',
              fontWeight: '500',
              color: utils.grays['700']
            }
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 5300000,
          name: 'Samsung'
        }, {
          value: 1900000,
          name: 'Huawei'
        }, {
          value: 2000000,
          name: 'Apple'
        }]
      }]
    };

    var _options4 = window._.merge(_defaultOptions4, _userOptions4);

    _chart4.setOption(_options4);
  } //
  // ─── WORLD MAP ──────────────────────────────────────────────────────────────────
  //


  var $echartsWorldMap = document.querySelector(Selector.ECHART_WORLD_MAP);

  if ($echartsWorldMap) {
    var _$this5 = $($echartsWorldMap);

    var _userOptions5 = _$this5.data('options');

    var _chart5 = window.echarts.init($echartsWorldMap);

    var activeUserByCountry = [{
      name: 'Afghanistan',
      value: 28397.812
    }, {
      name: 'Angola',
      value: 19549.124
    }, {
      name: 'Albania',
      value: 3150.143
    }, {
      name: 'United Arab Emirates',
      value: 8441.537
    }, {
      name: 'Argentina',
      value: 40374.224
    }, {
      name: 'Armenia',
      value: 2963.496
    }, {
      name: 'French Southern and Antarctic Lands',
      value: 268.065
    }, {
      name: 'Australia',
      value: 22404.488
    }, {
      name: 'Austria',
      value: 8401.924
    }, {
      name: 'Azerbaijan',
      value: 9094.718
    }, {
      name: 'Burundi',
      value: 9232.753
    }, {
      name: 'Belgium',
      value: 10941.288
    }, {
      name: 'Benin',
      value: 9509.798
    }, {
      name: 'Burkina Faso',
      value: 15540.284
    }, {
      name: 'Bangladesh',
      value: 151125.475
    }, {
      name: 'Bulgaria',
      value: 7389.175
    }, {
      name: 'The Bahamas',
      value: 66402.316
    }, {
      name: 'Bosnia and Herzegovina',
      value: 3845.929
    }, {
      name: 'Belarus',
      value: 9491.07
    }, {
      name: 'Belize',
      value: 308.595
    }, {
      name: 'Bermuda',
      value: 64.951
    }, {
      name: 'Bolivia',
      value: 716.939
    }, {
      name: 'Brazil',
      value: 195210.154
    }, {
      name: 'Brunei',
      value: 27.223
    }, {
      name: 'Bhutan',
      value: 716.939
    }, {
      name: 'Botswana',
      value: 1969.341
    }, {
      name: 'Central African Republic',
      value: 4349.921
    }, {
      name: 'Canada',
      value: 34126.24
    }, {
      name: 'Switzerland',
      value: 7830.534
    }, {
      name: 'Chile',
      value: 17150.76
    }, {
      name: 'China',
      value: 1359821.465
    }, {
      name: 'Ivory Coast',
      value: 60508.978
    }, {
      name: 'Cameroon',
      value: 20624.343
    }, {
      name: 'Democratic Republic of the Congo',
      value: 62191.161
    }, {
      name: 'Republic of the Congo',
      value: 3573.024
    }, {
      name: 'Colombia',
      value: 46444.798
    }, {
      name: 'Costa Rica',
      value: 4669.685
    }, {
      name: 'Cuba',
      value: 11281.768
    }, {
      name: 'Northern Cyprus',
      value: 1.468
    }, {
      name: 'Cyprus',
      value: 1103.685
    }, {
      name: 'Czech Republic',
      value: 10553.701
    }, {
      name: 'Germany',
      value: 83017.404
    }, {
      name: 'Djibouti',
      value: 834.036
    }, {
      name: 'Denmark',
      value: 5550.959
    }, {
      name: 'Dominican Republic',
      value: 10016.797
    }, {
      name: 'Algeria',
      value: 37062.82
    }, {
      name: 'Ecuador',
      value: 15001.072
    }, {
      name: 'Egypt',
      value: 78075.705
    }, {
      name: 'Eritrea',
      value: 5741.159
    }, {
      name: 'Spain',
      value: 46182.038
    }, {
      name: 'Estonia',
      value: 1298.533
    }, {
      name: 'Ethiopia',
      value: 87095.281
    }, {
      name: 'Finland',
      value: 5367.693
    }, {
      name: 'Fiji',
      value: 860.559
    }, {
      name: 'Falkland Islands',
      value: 49.581
    }, {
      name: 'France',
      value: 63230.866
    }, {
      name: 'Gabon',
      value: 1556.222
    }, {
      name: 'United Kingdom',
      value: 62066.35
    }, {
      name: 'Georgia',
      value: 4388.674
    }, {
      name: 'Ghana',
      value: 24262.901
    }, {
      name: 'Guinea',
      value: 10876.033
    }, {
      name: 'Gambia',
      value: 1680.64
    }, {
      name: 'Guinea Bissau',
      value: 10876.033
    }, {
      name: 'Equatorial Guinea',
      value: 696.167
    }, {
      name: 'Greece',
      value: 11109.999
    }, {
      name: 'Greenland',
      value: 56.546
    }, {
      name: 'Guatemala',
      value: 14341.576
    }, {
      name: 'French Guiana',
      value: 231.169
    }, {
      name: 'Guyana',
      value: 786.126
    }, {
      name: 'Honduras',
      value: 7621.204
    }, {
      name: 'Croatia',
      value: 4338.027
    }, {
      name: 'Haiti',
      value: 9896.4
    }, {
      name: 'Hungary',
      value: 10014.633
    }, {
      name: 'Indonesia',
      value: 240676.485
    }, {
      name: 'India',
      value: 1205624.648
    }, {
      name: 'Ireland',
      value: 4467.561
    }, {
      name: 'Iran',
      value: 240676.485
    }, {
      name: 'Iraq',
      value: 30962.38
    }, {
      name: 'Iceland',
      value: 318.042
    }, {
      name: 'Israel',
      value: 7420.368
    }, {
      name: 'Italy',
      value: 60508.978
    }, {
      name: 'Jamaica',
      value: 2741.485
    }, {
      name: 'Jordan',
      value: 6454.554
    }, {
      name: 'Japan',
      value: 127352.833
    }, {
      name: 'Kazakhstan',
      value: 15921.127
    }, {
      name: 'Kenya',
      value: 40909.194
    }, {
      name: 'Kyrgyzstan',
      value: 5334.223
    }, {
      name: 'Cambodia',
      value: 14364.931
    }, {
      name: 'South Korea',
      value: 51452.352
    }, {
      name: 'Kosovo',
      value: 97.743
    }, {
      name: 'Kuwait',
      value: 2991.58
    }, {
      name: 'Laos',
      value: 6395.713
    }, {
      name: 'Lebanon',
      value: 4341.092
    }, {
      name: 'Liberia',
      value: 3957.99
    }, {
      name: 'Libya',
      value: 6040.612
    }, {
      name: 'Sri Lanka',
      value: 20758.779
    }, {
      name: 'Lesotho',
      value: 2008.921
    }, {
      name: 'Lithuania',
      value: 3068.457
    }, {
      name: 'Luxembourg',
      value: 507.885
    }, {
      name: 'Latvia',
      value: 2090.519
    }, {
      name: 'Morocco',
      value: 31642.36
    }, {
      name: 'Moldova',
      value: 103.619
    }, {
      name: 'Madagascar',
      value: 21079.532
    }, {
      name: 'Mexico',
      value: 117886.404
    }, {
      name: 'Macedonia',
      value: 507.885
    }, {
      name: 'Mali',
      value: 13985.961
    }, {
      name: 'Myanmar',
      value: 51931.231
    }, {
      name: 'Montenegro',
      value: 620.078
    }, {
      name: 'Mongolia',
      value: 2712.738
    }, {
      name: 'Mozambique',
      value: 23967.265
    }, {
      name: 'Mauritania',
      value: 3609.42
    }, {
      name: 'Malawi',
      value: 15013.694
    }, {
      name: 'Malaysia',
      value: 28275.835
    }, {
      name: 'Namibia',
      value: 2178.967
    }, {
      name: 'New Caledonia',
      value: 246.379
    }, {
      name: 'Niger',
      value: 15893.746
    }, {
      name: 'Nigeria',
      value: 159707.78
    }, {
      name: 'Nicaragua',
      value: 5822.209
    }, {
      name: 'Netherlands',
      value: 16615.243
    }, {
      name: 'Norway',
      value: 4891.251
    }, {
      name: 'Nepal',
      value: 26846.016
    }, {
      name: 'New Zealand',
      value: 4368.136
    }, {
      name: 'Oman',
      value: 2802.768
    }, {
      name: 'Pakistan',
      value: 173149.306
    }, {
      name: 'Panama',
      value: 3678.128
    }, {
      name: 'Peru',
      value: 29262.83
    }, {
      name: 'Philippines',
      value: 93444.322
    }, {
      name: 'Papua New Guinea',
      value: 6858.945
    }, {
      name: 'Poland',
      value: 38198.754
    }, {
      name: 'Puerto Rico',
      value: 3709.671
    }, {
      name: 'North Korea',
      value: 1.468
    }, {
      name: 'Portugal',
      value: 10589.792
    }, {
      name: 'Paraguay',
      value: 6459.721
    }, {
      name: 'Qatar',
      value: 1749.713
    }, {
      name: 'Romania',
      value: 21861.476
    }, {
      name: 'Russia',
      value: 21861.476
    }, {
      name: 'Rwanda',
      value: 10836.732
    }, {
      name: 'Western Sahara',
      value: 514.648
    }, {
      name: 'Saudi Arabia',
      value: 27258.387
    }, {
      name: 'Sudan',
      value: 35652.002
    }, {
      name: 'South Sudan',
      value: 9940.929
    }, {
      name: 'Senegal',
      value: 12950.564
    }, {
      name: 'Solomon Islands',
      value: 526.447
    }, {
      name: 'Sierra Leone',
      value: 5751.976
    }, {
      name: 'El Salvador',
      value: 6218.195
    }, {
      name: 'Somaliland',
      value: 9636.173
    }, {
      name: 'Somalia',
      value: 9636.173
    }, {
      name: 'Republic of Serbia',
      value: 3573.024
    }, {
      name: 'Suriname',
      value: 524.96
    }, {
      name: 'Slovakia',
      value: 5433.437
    }, {
      name: 'Slovenia',
      value: 2054.232
    }, {
      name: 'Sweden',
      value: 9382.297
    }, {
      name: 'Swaziland',
      value: 1193.148
    }, {
      name: 'Syria',
      value: 7830.534
    }, {
      name: 'Chad',
      value: 11720.781
    }, {
      name: 'Togo',
      value: 6306.014
    }, {
      name: 'Thailand',
      value: 66402.316
    }, {
      name: 'Tajikistan',
      value: 7627.326
    }, {
      name: 'Turkmenistan',
      value: 5041.995
    }, {
      name: 'East Timor',
      value: 10016.797
    }, {
      name: 'Trinidad and Tobago',
      value: 1328.095
    }, {
      name: 'Tunisia',
      value: 10631.83
    }, {
      name: 'Turkey',
      value: 72137.546
    }, {
      name: 'United Republic of Tanzania',
      value: 44973.33
    }, {
      name: 'Uganda',
      value: 33987.213
    }, {
      name: 'Ukraine',
      value: 46050.22
    }, {
      name: 'Uruguay',
      value: 3371.982
    }, {
      name: 'United States of America',
      value: 312247.116
    }, {
      name: 'Uzbekistan',
      value: 27769.27
    }, {
      name: 'Venezuela',
      value: 236.299
    }, {
      name: 'Vietnam',
      value: 89047.397
    }, {
      name: 'Vanuatu',
      value: 236.299
    }, {
      name: 'West Bank',
      value: 13.565
    }, {
      name: 'Yemen',
      value: 22763.008
    }, {
      name: 'South Africa',
      value: 51452.352
    }, {
      name: 'Zambia',
      value: 13216.985
    }, {
      name: 'Zimbabwe',
      value: 13076.978
    }];
    var _defaultOptions5 = {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: utils.grays['100'],
        textStyle: {
          color: utils.grays.black
        },
        transitionDuration: 0,
        formatter: function formatter(_ref) {
          var name = _ref.name,
              value = _ref.value;
          return "<strong>" + name + "</strong><br/>Active user: " + (value ? "" + Math.round(value / 10000) : 0);
        }
      },
      visualMap: {
        min: 0,
        max: 100000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: [utils.rgbaColor(utils.colors.primary, '0.5'), utils.colors.primary]
        },
        textStyle: {
          color: utils.grays[700]
        }
      },
      series: [{
        type: 'map',
        mapType: 'world',
        roam: true,
        zoom: 1.25,
        scaleLimit: {
          min: 0.9,
          max: 17
        },
        itemStyle: {
          normal: {
            borderColor: utils.grays[200],
            borderWidth: 0.5,
            areaStyle: {
              color: utils.grays['300']
            }
          },
          emphasis: {
            areaColor: '#0443a2',
            borderColor: utils.grays['300'],
            label: {
              show: false
            }
          }
        },
        data: activeUserByCountry
      }]
    };

    var _options5 = window._.merge(_defaultOptions5, _userOptions5);

    _chart5.setOption(_options5);
  } //
  // ─── ECHART FIX ON WINDOW RESIZE ────────────────────────────────────────────────
  //


  var $echarts = document.querySelectorAll('[data-echart-responsive]');

  window.onresize = function () {
    if ($echarts.length) {
      $.each($echarts, function (item, value) {
        if ($(value).data('echart-responsive')) {
          window.echarts.init(value).resize();
        }
      });
    }
  };
});
/*-----------------------------------------------
|   On page scroll for #id targets
-----------------------------------------------*/

utils.$document.ready(function ($) {
  $('a[data-fancyscroll]').click(function scrollTo(e) {
    // const $this = $(e.currentTarget);
    var $this = $(this);

    if (utils.location.pathname === $this[0].pathname && utils.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && utils.location.hostname === this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - ($this.data('offset') || 0)
        }, 400, 'swing', function () {
          var hash = $this.attr('href');
          window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
        });
        return false;
      }
    }

    return true;
  });
  var hash = window.location.hash;

  if (hash && document.getElementById(hash.slice(1))) {
    var $this = $(hash);
    $('html,body').animate({
      scrollTop: $this.offset().top - $("a[href='" + hash + "']").data('offset')
    }, 400, 'swing', function () {
      window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash;
    });
  }
});
/*-----------------------------------------------
|   Flatpickr
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var datetimepicker = $('.datetimepicker');
  datetimepicker.length && datetimepicker.each(function (index, value) {
    var $this = $(value);
    var options = $.extend({
      dateFormat: 'd/m/y',
      disableMobile: true
    }, $this.data('options'));
    $this.attr('placeholder', options.dateFormat);
    $this.flatpickr(options);
  });
});
/*-----------------------------------------------
|   Bootstrap validation
-----------------------------------------------*/

(function () {
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply theme Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*-----------------------------------------------
|   Gooogle Map
-----------------------------------------------*/

/*
  global google
*/


function initMap() {
  var $googlemaps = $('.googlemap');

  if ($googlemaps.length) {
    // Visit https://snazzymaps.com/ for more themes
    var mapStyles = {
      Default: [{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#e9e9e9'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 18
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5'
        }, {
          lightness: 21
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#dedede'
        }, {
          lightness: 21
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#ffffff'
        }, {
          lightness: 16
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36
        }, {
          color: '#333333'
        }, {
          lightness: 40
        }]
      }, {
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#f2f2f2'
        }, {
          lightness: 19
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#fefefe'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#fefefe'
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }],
      Gray: [{
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36
        }, {
          color: '#000000'
        }, {
          lightness: 40
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#000000'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 21
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 18
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 19
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 17
        }]
      }],
      Midnight: [{
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#ffffff'
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 13
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#144b53'
        }, {
          lightness: 14
        }, {
          weight: 1.4
        }]
      }, {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{
          color: '#08304b'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#0c4152'
        }, {
          lightness: 5
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#0b434f'
        }, {
          lightness: 25
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#0b3d51'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }]
      }, {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{
          color: '#146474'
        }]
      }, {
        featureType: 'water',
        elementType: 'all',
        stylers: [{
          color: '#021019'
        }]
      }],
      Hopper: [{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          hue: '#165c64'
        }, {
          saturation: 34
        }, {
          lightness: -69
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          hue: '#b7caaa'
        }, {
          saturation: -14
        }, {
          lightness: -18
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [{
          hue: '#cbdac1'
        }, {
          saturation: -6
        }, {
          lightness: -9
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          hue: '#8d9b83'
        }, {
          saturation: -89
        }, {
          lightness: -12
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          hue: '#d4dad0'
        }, {
          saturation: -88
        }, {
          lightness: 54
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          hue: '#bdc5b6'
        }, {
          saturation: -89
        }, {
          lightness: -3
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          hue: '#bdc5b6'
        }, {
          saturation: -89
        }, {
          lightness: -26
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          hue: '#c17118'
        }, {
          saturation: 61
        }, {
          lightness: -45
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [{
          hue: '#8ba975'
        }, {
          saturation: -46
        }, {
          lightness: -28
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          hue: '#a43218'
        }, {
          saturation: 74
        }, {
          lightness: -51
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [{
          hue: '#ffffff'
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'administrative.neighborhood',
        elementType: 'all',
        stylers: [{
          hue: '#ffffff'
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [{
          hue: '#ffffff'
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [{
          hue: '#ffffff'
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [{
          hue: '#3a3935'
        }, {
          saturation: 5
        }, {
          lightness: -57
        }, {
          visibility: 'off'
        }]
      }, {
        featureType: 'poi.medical',
        elementType: 'geometry',
        stylers: [{
          hue: '#cba923'
        }, {
          saturation: 50
        }, {
          lightness: -46
        }, {
          visibility: 'on'
        }]
      }],
      Beard: [{
        featureType: 'poi.business',
        elementType: 'labels.text',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#333333'
        }]
      }],
      AssassianCreed: [{
        featureType: 'all',
        elementType: 'all',
        stylers: [{
          visibility: 'on'
        }]
      }, {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, {
          saturation: '-100'
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{
          saturation: 36
        }, {
          color: '#000000'
        }, {
          lightness: 40
        }, {
          visibility: 'off'
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'off'
        }, {
          color: '#000000'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 20
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#4d6059'
        }]
      }, {
        featureType: 'landscape',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#4d6059'
        }]
      }, {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#4d6059'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          lightness: 21
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#4d6059'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#4d6059'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#7f8d89'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#7f8d89'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#7f8d89'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#7f8d89'
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 18
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#7f8d89'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#7f8d89'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 16
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#7f8d89'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#7f8d89'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#000000'
        }, {
          lightness: 19
        }]
      }, {
        featureType: 'water',
        elementType: 'all',
        stylers: [{
          color: '#2b3638'
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#2b3638'
        }, {
          lightness: 17
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#24282b'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#24282b'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [{
          visibility: 'off '
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }],
      SubtleGray: [{
        featureType: 'administrative',
        elementType: 'all',
        stylers: [{
          saturation: '-100'
        }]
      }, {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{
          saturation: -100
        }, {
          lightness: 65
        }, {
          visibility: 'on'
        }]
      }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{
          saturation: -100
        }, {
          lightness: '50'
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'road',
        elementType: 'all',
        stylers: [{
          saturation: -100
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [{
          visibility: 'simplified'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [{
          lightness: '30'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [{
          lightness: '40'
        }]
      }, {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{
          saturation: -100
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          hue: '#ffff00'
        }, {
          lightness: -25
        }, {
          saturation: -97
        }]
      }, {
        featureType: 'water',
        elementType: 'labels',
        stylers: [{
          lightness: -25
        }, {
          saturation: -100
        }]
      }],
      Tripitty: [{
        featureType: 'all',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{
          color: '#2c5ca5'
        }]
      }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{
          color: '#2c5ca5'
        }]
      }, {
        featureType: 'road',
        elementType: 'all',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'water',
        elementType: 'all',
        stylers: [{
          color: '#193a70'
        }, {
          visibility: 'on'
        }]
      }]
    };
    $googlemaps.each(function (index, value) {
      var $googlemap = $(value);
      var latLng = $googlemap.data('latlng').split(',');
      var markerPopup = $googlemap.html();
      var icon = $googlemap.data('icon') ? $googlemap.data('icon') : 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png';
      var zoom = $googlemap.data('zoom');
      var mapStyle = $googlemap.data('theme');
      var mapElement = value;

      if ($googlemap.data('theme') === 'streetview') {
        var pov = $googlemap.data('pov');
        var _mapOptions = {
          position: {
            lat: Number(latLng[0]),
            lng: Number(latLng[1])
          },
          pov: pov,
          zoom: zoom,
          gestureHandling: 'none',
          scrollwheel: false
        };
        return new google.maps.StreetViewPanorama(mapElement, _mapOptions);
      }

      var mapOptions = {
        zoom: zoom,
        scrollwheel: $googlemap.data('scrollwheel'),
        center: new google.maps.LatLng(latLng[0], latLng[1]),
        styles: mapStyles[mapStyle]
      };
      var map = new google.maps.Map(mapElement, mapOptions);
      var infowindow = new google.maps.InfoWindow({
        content: markerPopup
      });
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latLng[0], latLng[1]),
        icon: icon,
        map: map
      });
      marker.addListener('click', function () {
        infowindow.open(map, marker);
      });
      return null;
    });
  }
}
/*-----------------------------------------------
|   Incrment/Decrement Input Fields
-----------------------------------------------*/


utils.$document.ready(function () {
  $(document).on('click', '[data-field]', function (e) {
    var $this = $(e.target);
    var inputField = $this.data('field');
    var $inputField = $this.parents('.input-group').children("." + inputField);
    var $btnType = $this.data('type');
    var value = parseInt($inputField.val(), 10);
    var min = $inputField.data('min');

    if (min) {
      min = parseInt(min, 10);
    } else {
      min = 0;
    }

    if ($btnType === 'plus') {
      value += 1;
    } else if (value > min) {
      value -= 1;
    }

    $inputField.val(value);
  });
});
/*-----------------------------------------------
|   Jquery Validation
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var forms = $('.form-validation');
  forms.length && forms.each(function (index, value) {
    var $this = $(value);
    var options = $.extend({}, $this.data('options'));
    $this.validate(options);
  });
});
/*-----------------------------------------------
|   Leaflet
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var points = [{
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 52.192001,
    long: -2.220000,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.063202,
    long: -1.308000,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  }, {
    lat: 51.209000,
    long: -2.647000,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 53.680000,
    long: -1.490000,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 50.259998,
    long: -5.051000,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 54.906101,
    long: -1.381130,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 53.383331,
    long: -1.466667,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 53.483002,
    long: -2.293100,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  }, {
    lat: 53.483959,
    long: -2.244644,
    name: 'Ethel B. Brooks',
    street: '2576 Sun Valley Road'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 39.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 38.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 37.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  }, {
    lat: 40.7128,
    long: 74.0060,
    name: 'Elizabeth C. Lyons',
    street: '4553 Kenwood Place',
    location: 'Fort Lauderdale'
  }, {
    lat: 40.7128,
    long: 74.1181,
    name: 'Elizabeth C. Lyons',
    street: '4553 Kenwood Place',
    location: 'Fort Lauderdale'
  }, {
    lat: 14.2350,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  }, {
    lat: 14.2350,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  }, {
    lat: 14.2350,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  }, {
    lat: 14.2350,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  }, {
    lat: 15.8267,
    long: 47.9218,
    name: 'Hope A. Atkins',
    street: '3715 Hillcrest Drive',
    location: 'Seattle'
  }, {
    lat: 15.8267,
    long: 47.9218,
    name: 'Hope A. Atkins',
    street: '3715 Hillcrest Drive',
    location: 'Seattle'
  }, {
    lat: 23.4425,
    long: 58.4438,
    name: 'Samuel R. Bailey',
    street: '2883 Raoul Wallenberg Place',
    location: 'Cheshire'
  }, {
    lat: 23.4425,
    long: 58.3438,
    name: 'Samuel R. Bailey',
    street: '2883 Raoul Wallenberg Place',
    location: 'Cheshire'
  }, {
    lat: -37.8927369333,
    long: 175.4087452333,
    name: 'Samuel R. Bailey',
    street: '3228 Glory Road',
    location: 'Nashville'
  }, {
    lat: -37.9064188833,
    long: 175.4441556833,
    name: 'Samuel R. Bailey',
    street: '3228 Glory Road',
    location: 'Nashville'
  }, {
    lat: -11.409874,
    long: -65.596832,
    name: 'Ann J. Perdue',
    street: '921 Ella Street',
    location: 'Dublin'
  }, {
    lat: -22.090887,
    long: -57.411827,
    name: 'Jorge C. Woods',
    street: '4800 North Bend River Road',
    location: 'Allen'
  }, {
    lat: -19.019585,
    long: -65.261963,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: -16.500093,
    long: -68.214684,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: -17.413977,
    long: -66.165321,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: -16.489689,
    long: -68.119293,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 54.766323,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 54.766323,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 49.537685,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 54.715424,
    long: 0.509207,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 44.891666,
    long: 10.136665,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: 48.078335,
    long: 14.535004,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: -26.358055,
    long: 27.398056,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  }, {
    lat: -29.100000,
    long: 26.216700,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -29.883333,
    long: 31.049999,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -26.266111,
    long: 27.865833,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -29.087217,
    long: 26.154898,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -33.958252,
    long: 25.619022,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -33.977074,
    long: 22.457581,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: -26.563404,
    long: 27.844164,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  }, {
    lat: 51.213890,
    long: -102.462776,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 52.321945,
    long: -106.584167,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 50.288055,
    long: -107.793892,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 52.757500,
    long: -108.286110,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 50.393333,
    long: -105.551941,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 50.930557,
    long: -102.807777,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 52.856388,
    long: -104.610001,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 52.289722,
    long: -106.666664,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 52.201942,
    long: -105.123055,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 53.278046,
    long: -110.005470,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 49.136730,
    long: -102.990959,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  }, {
    lat: 45.484531,
    long: -73.597023,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.266666,
    long: -71.900002,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.349998,
    long: -72.516670,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 47.333332,
    long: -79.433334,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.400002,
    long: -74.033333,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.683334,
    long: -73.433334,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 48.099998,
    long: -77.783333,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.500000,
    long: -72.316666,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 46.349998,
    long: -72.550003,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 48.119999,
    long: -69.180000,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.599998,
    long: -75.250000,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 46.099998,
    long: -71.300003,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 45.700001,
    long: -73.633331,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 47.680000,
    long: -68.879997,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  }, {
    lat: 46.716667,
    long: -79.099998,
    name: '299'
  }, {
    lat: 45.016666,
    long: -72.099998,
    name: '299'
  }];
  var _window3 = window,
      L = _window3.L;

  if (L) {
    var filterColor = ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];
    var tileLayerTheme = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    var tiles;

    if (storage.isDark) {
      filterColor = ['invert:98%', 'grayscale:69%', 'bright:89%', 'contrast:111%', 'hue:205deg', 'saturate:1000%'];
    }

    if (window.is.ie()) {
      if (storage.isDark) {
        tileLayerTheme = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      }

      tiles = L.tileLayer(tileLayerTheme, {
        attribution: null,
        transparent: true
      });
    } else {
      tiles = L.tileLayer.colorFilter(tileLayerTheme, {
        attribution: null,
        transparent: true,
        filter: filterColor
      });
    }

    var map = L.map('map', {
      center: L.latLng(10.737, 0),
      zoom: 0,
      layers: [tiles],
      minZoom: 1,
      zoomSnap: 0.5
    });
    var mcg = L.markerClusterGroup({
      chunkedLoading: false,
      spiderfyOnMaxZoom: false
    });
    points.map(function (point) {
      var name = point.name,
          location = point.location,
          street = point.street;
      var marker = L.marker(new L.LatLng(point.lat, point.long), {
        name: name,
        location: location
      });
      var popupContent = "\n        <h6 class=\"mb-1\">" + name + "</h6>\n        <p class=\"m-0 text-500\">" + street + ", " + location + "</p>\n      ";
      var popup = L.popup({
        minWidth: 180
      }).setContent(popupContent);
      marker.bindPopup(popup);
      mcg.addLayer(marker);
      return true;
    });
    map.addLayer(mcg);
  }
});
/*-----------------------------------------------
|   Lightbox
-----------------------------------------------*/

/*
  global lightbox
*/

utils.$document.ready(function () {
  if ($('[data-lightbox]').length) {
    lightbox.option({
      resizeDuration: 400,
      wrapAround: true,
      fadeDuration: 300,
      imageFadeDuration: 300
    });
  }
});
/*-----------------------------------------------
|   Lottie
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var lotties = $('.lottie');

  if (lotties.length) {
    lotties.each(function (index, value) {
      var $this = $(value);
      var options = $.extend({
        container: value,
        path: '../img/animated-icons/warning-light.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: 'Hello World'
      }, $this.data('options'));
      window.bodymovin.loadAnimation(options);
    });
  }
});
/*-----------------------------------------------
|   Navbar
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var _window4 = window,
      utils = _window4.utils;
  var $window = utils.$window,
      breakpoints = utils.breakpoints;
  var navDropShadowFlag = true;
  var CLASS_NAME = {
    navbarGlassShadow: 'navbar-glass-shadow',
    collapsed: 'collapsed'
  };
  var SELECTOR = {
    navbar: '.navbar:not(.navbar-vertical)',
    navbarVertical: '.navbar-vertical',
    navbarToggler: '.navbar-toggler',
    navbarVerticalCollapse: '#navbarVerticalCollapse'
  };
  var $navbar = $(SELECTOR.navbar);
  var $navbarVerticalCollapse = $(SELECTOR.navbarVerticalCollapse);

  var setDropShadow = function setDropShadow($elem) {
    if ($elem.scrollTop() > 0 && navDropShadowFlag) {
      $navbar.addClass(CLASS_NAME.navbarGlassShadow);
    } else {
      $navbar.removeClass(CLASS_NAME.navbarGlassShadow);
    }
  };

  var breakPoint;
  var navbarVerticalClass = $(SELECTOR.navbarVertical).attr('class');

  if (navbarVerticalClass) {
    breakPoint = breakpoints[navbarVerticalClass.split(' ').filter(function (cls) {
      return cls.indexOf('navbar-expand-') === 0;
    }).pop().split('-').pop()];
  }

  $window.on('load scroll', function () {
    return setDropShadow($window);
  });
  $navbarVerticalCollapse.on('scroll', function () {
    navDropShadowFlag = true;
    setDropShadow($navbarVerticalCollapse);
  });
  $navbarVerticalCollapse.on('show.bs.collapse', function () {
    if ($window.width() < breakPoint) {
      navDropShadowFlag = false;
      setDropShadow($window);
    }
  });
  $navbarVerticalCollapse.on('hide.bs.collapse', function () {
    if ($navbarVerticalCollapse.hasClass('show') && $window.width() < breakPoint) {
      navDropShadowFlag = false;
    } else {
      navDropShadowFlag = true;
    }

    setDropShadow($window);
  });
});
/*-----------------------------------------------
|   Owl Carousel
-----------------------------------------------*/

var $carousel = $('.owl-carousel');
utils.$document.ready(function () {
  if ($carousel.length) {
    var Selector = {
      ALL_TIMELINE: '*[data-zanim-timeline]',
      ACTIVE_ITEM: '.owl-item.active'
    };
    var owlZanim = {
      zanimTimeline: function zanimTimeline($el) {
        return $el.find(Selector.ALL_TIMELINE);
      },
      play: function play($el) {
        if (this.zanimTimeline($el).length === 0) return;
        $el.find(Selector.ACTIVE_ITEM + " > " + Selector.ALL_TIMELINE).zanimation(function (animation) {
          animation.play();
        });
      },
      kill: function kill($el) {
        if (this.zanimTimeline($el).length === 0) return;
        this.zanimTimeline($el).zanimation(function (animation) {
          animation.kill();
        });
      }
    };
    $carousel.each(function (index, value) {
      var $this = $(value);
      var options = $this.data('options') || {};
      utils.isRTL() && (options.rtl = true);
      options.navText || (options.navText = ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>']);
      options.touchDrag = true;
      $this.owlCarousel($.extend(options || {}, {
        onInitialized: function onInitialized(event) {
          owlZanim.play($(event.target));
        },
        onTranslate: function onTranslate(event) {
          owlZanim.kill($(event.target));
        },
        onTranslated: function onTranslated(event) {
          owlZanim.play($(event.target));
        }
      }));
    });
  }

  var $controllers = $('[data-owl-carousel-controller]');

  if ($controllers.length) {
    $controllers.each(function (index, value) {
      var $this = $(value);
      var $thumbs = $($this.data('owl-carousel-controller'));
      $thumbs.find('.owl-item:first-child').addClass('current');
      $thumbs.on('click', '.item', function (e) {
        var thumbIndex = $(e.target).parents('.owl-item').index();
        $('.owl-item').removeClass('current');
        $(e.target).parents('.owl-item').addClass('current');
        $this.trigger('to.owl.carousel', thumbIndex, 500);
      });
      $this.on('changed.owl.carousel', function (e) {
        var itemIndex = e.item.index;
        var item = itemIndex + 1;
        $('.owl-item').removeClass('current');
        $thumbs.find(".owl-item:nth-child(" + item + ")").addClass('current');
        $thumbs.trigger('to.owl.carousel', itemIndex, 500);
      });
    });
  }
});
/*-----------------------------------------------
|   Perfect Scrollbar
-----------------------------------------------*/

window.utils.$document.ready(function () {
  if (window.is.ie() || window.is.edge()) {
    var scrollbars = document.querySelectorAll('.perfect-scrollbar');

    if (scrollbars.length) {
      $.each(scrollbars, function (item, value) {
        var $this = $(value);
        var userOptions = $this.data('options');
        var options = $.extend({
          wheelPropagation: true,
          suppressScrollX: true,
          suppressScrollY: false
        }, userOptions);
        var ps = new PerfectScrollbar(value, options);
        ps.update();
      });
    }
  }
});
/*-----------------------------------------------
|   Inline Player [plyr]
-----------------------------------------------*/

/*
  global Plyr
*/

utils.$document.ready(function () {
  var $players = $('.player');

  if ($players.length) {
    $players.each(function (index, value) {
      return new Plyr($(value), {
        captions: {
          active: true
        }
      });
    });
  }

  return false;
});
/*
 global ProgressBar
*/

utils.$document.ready(function () {
  var merge = window._.merge; // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  /*-----------------------------------------------
  |   Progress Circle
  -----------------------------------------------*/

  var progresCircle = $('.progress-circle');

  if (progresCircle.length) {
    progresCircle.each(function (index, value) {
      var $this = $(value);
      var userOptions = $this.data('options');
      var defaultOptions = {
        strokeWidth: 2,
        trailWidth: 2,
        trailColor: utils.grays['200'],
        easing: 'easeInOut',
        duration: 3000,
        svgStyle: {
          'stroke-linecap': 'round',
          display: 'block',
          width: '100%'
        },
        text: {
          autoStyleContainer: false
        },
        // Set default step function for all animate calls
        step: function step(state, circle) {
          // Change stroke color during progress
          // circle.path.setAttribute('stroke', state.color);
          // Change stroke width during progress
          // circle.path.setAttribute('stroke-width', state.width);
          var percentage = Math.round(circle.value() * 100);
          circle.setText("<span class='value'>" + percentage + "<b>%</b></span> <span>" + (userOptions.text || '') + "</span>");
        }
      }; // Assign default color for IE

      if (window.is.ie()) {
        userOptions.color = utils.colors.primary;
      }

      var options = merge(defaultOptions, userOptions);
      var bar = new ProgressBar.Circle(value, options);
      var linearGradient = "<defs>\n          <linearGradient id=\"gradient\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0%\" stop-color='#1970e2' />\n            <stop offset=\"100%\" stop-color='#4695ff' />\n          </linearGradient>\n        </defs>"; // Disable gradient color in IE

      !window.is.ie() && bar.svg.insertAdjacentHTML('beforeEnd', linearGradient);
      var playProgressTriggered = false;

      var progressCircleAnimation = function progressCircleAnimation() {
        if (!playProgressTriggered) {
          if (utils.isScrolledIntoView(value) || utils.nua.match(/puppeteer/i)) {
            bar.animate(options.progress / 100);
            playProgressTriggered = true;
          }
        }

        return playProgressTriggered;
      };

      progressCircleAnimation();
      utils.$window.scroll(function () {
        progressCircleAnimation();
      });
    });
  }
  /*-----------------------------------------------
  |   Progress Line
  -----------------------------------------------*/


  var progressLine = $('.progress-line');

  if (progressLine.length) {
    progressLine.each(function (index, value) {
      var $this = $(value);
      var options = $this.data('options');
      var bar = new ProgressBar.Line(value, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 3000,
        color: '#333',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {
          width: '100%',
          height: '0.25rem',
          'stroke-linecap': 'round',
          'border-radius': '0.125rem'
        },
        text: {
          style: {
            transform: null
          },
          autoStyleContainer: false
        },
        from: {
          color: '#aaa'
        },
        to: {
          color: '#111'
        },
        step: function step(state, line) {
          line.setText("<span class='value'>" + Math.round(line.value() * 100) + "<b>%</b></span> <span>" + options.text + "</span>");
        }
      });
      var playProgressTriggered = false;

      var progressLineAnimation = function progressLineAnimation() {
        if (!playProgressTriggered) {
          if (utils.isScrolledIntoView(value) || utils.nua.match(/puppeteer/i)) {
            bar.animate(options.progress / 100);
            playProgressTriggered = true;
          }
        }

        return playProgressTriggered;
      };

      progressLineAnimation();
      utils.$window.scroll(function () {
        progressLineAnimation();
      });
    });
  }
});
/*-----------------------------------------------
|   Raty
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var ratings = $('.raty');

  if (ratings.length) {
    ratings.each(function (index, value) {
      var $this = $(value);
      var options = $.extend({
        starHalf: 'star-half-png text-warning',
        starOff: 'star-off-png text-300',
        starOn: 'star-on-png text-warning',
        starType: 'span',
        size: 30
      }, $this.data('options'));
      $(value).raty(options);
    });
  }
});
/*-----------------------------------------------
|   Select2
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var select2 = $('.selectpicker');
  select2.length && select2.each(function (index, value) {
    var $this = $(value);
    var options = $.extend({}, $this.data('options'));
    $this.select2(options);
  });
});
/*
  global Stickyfill
*/

/*-----------------------------------------------
|   Sticky fill
-----------------------------------------------*/

utils.$document.ready(function () {
  Stickyfill.add($('.sticky-top'));
  Stickyfill.add($('.sticky-bottom'));
});
/*-----------------------------------------------
|   Sticky Kit
-----------------------------------------------*/

utils.$document.ready(function () {
  var stickyKits = $('.sticky-kit');

  if (stickyKits.length) {
    stickyKits.each(function (index, value) {
      var $this = $(value);

      var options = _objectSpread({}, $this.data('options'));

      $this.stick_in_parent(options);
    });
  }
});
/*-----------------------------------------------
|   Tabs
-----------------------------------------------*/

utils.$document.ready(function () {
  var $fancyTabs = $('.fancy-tab');

  if ($fancyTabs.length) {
    var Selector = {
      TAB_BAR: '.nav-bar',
      TAB_BAR_ITEM: '.nav-bar-item',
      TAB_CONTENTS: '.tab-contents'
    };
    var ClassName = {
      ACTIVE: 'active',
      TRANSITION_REVERSE: 'transition-reverse',
      TAB_INDICATOR: 'tab-indicator'
    };
    /*-----------------------------------------------
    |   Function for active tab indicator change
    -----------------------------------------------*/

    var updateIncicator = function updateIncicator($indicator, $tabs, $tabnavCurrentItem) {
      var _$tabnavCurrentItem$p = $tabnavCurrentItem.position(),
          left = _$tabnavCurrentItem$p.left;

      var right = $tabs.children(Selector.TAB_BAR).outerWidth() - (left + $tabnavCurrentItem.outerWidth());
      $indicator.css({
        left: left,
        right: right
      });
    };

    $fancyTabs.each(function (index, value) {
      var $tabs = $(value);
      var $navBar = $tabs.children(Selector.TAB_BAR);
      var $tabnavCurrentItem = $navBar.children(Selector.TAB_BAR_ITEM + "." + ClassName.ACTIVE);
      $navBar.append("\n        <div class=" + ClassName.TAB_INDICATOR + "></div>\n      ");
      var $indicator = $navBar.children("." + ClassName.TAB_INDICATOR);
      var $preIndex = $tabnavCurrentItem.index();
      updateIncicator($indicator, $tabs, $tabnavCurrentItem);
      $navBar.children(Selector.TAB_BAR_ITEM).click(function (e) {
        $tabnavCurrentItem = $(e.currentTarget);
        var $currentIndex = $tabnavCurrentItem.index();
        var $tabContent = $tabs.children(Selector.TAB_CONTENTS).children().eq($currentIndex);
        $tabnavCurrentItem.siblings().removeClass(ClassName.ACTIVE);
        $tabnavCurrentItem.addClass(ClassName.ACTIVE);
        $tabContent.siblings().removeClass(ClassName.ACTIVE);
        $tabContent.addClass(ClassName.ACTIVE);
        /*-----------------------------------------------
        |   Indicator Transition
        -----------------------------------------------*/

        updateIncicator($indicator, $tabs, $tabnavCurrentItem);

        if ($currentIndex - $preIndex <= 0) {
          $indicator.addClass(ClassName.TRANSITION_REVERSE);
        } else {
          $indicator.removeClass(ClassName.TRANSITION_REVERSE);
        }

        $preIndex = $currentIndex;
      });
      utils.$window.on('resize', function () {
        updateIncicator($indicator, $tabs, $tabnavCurrentItem);
      });
    });
  }
  /*-----------------------------------------------
  |   Product Review Tab
  -----------------------------------------------*/


  var $review = $('[data-tab-target]');
  $review.click(function (e) {
    var $this = $(e.currentTarget);
    var $reviewTab = $($this.data('tab-target'));
    $reviewTab.trigger('click');
  });
});
/*-----------------------------------------------
|   TINYMCE
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var tinymces = $('.tinymce');

  if (tinymces.length) {
    window.tinymce.init({
      selector: '.tinymce',
      height: '50vh',
      menubar: false,
      skin: utils.settings.tinymce.theme,
      content_style: ".mce-content-body { color: " + utils.grays.black + " }",
      mobile: {
        theme: 'mobile',
        toolbar: ['undo', 'bold']
      },
      statusbar: false,
      plugins: 'link,image,lists,table,media',
      toolbar: 'styleselect | bold italic link bullist numlist image blockquote table media undo redo'
    });
  }

  var toggle = $('#progress-toggle-animation');
  toggle.on('click', function () {
    return $('#progress-toggle').toggleClass('progress-bar-animated');
  });
});
/*-----------------------------------------------
|   Toast [bootstrap 4]
-----------------------------------------------*/

utils.$document.ready(function () {
  $('.toast').toast();
});
/*-----------------------------------------------
|   Toastr
-----------------------------------------------*/

window.utils.$document.ready(function () {
  var $notifications = $('[data-notification]');
  $notifications.each(function (index, value) {
    var _window5 = window,
        toastr = _window5.toastr;
    var $this = $(value);
    var config = $this.data('notification');
    var defaultOptions = {
      closeButton: true,
      newestOnTop: false,
      positionClass: 'toast-bottom-right'
    };
    $this.on('click', function () {
      var type = config.type,
          title = config.title,
          message = config.message;
      var mergedOptions = $.extend(defaultOptions, config);
      toastr.options.positionClass !== mergedOptions.positionClass && toastr.remove();
      toastr.options = mergedOptions;

      switch (type) {
        case 'success':
          toastr.success(message, title);
          break;

        case 'warning':
          toastr.warning(message, title);
          break;

        case 'error':
          toastr.error(message, title);
          break;

        default:
          toastr.info(message, title);
          break;
      }
    });
  });
});
/*-----------------------------------------------
|   Tootltip [bootstrap 4]
-----------------------------------------------*/

utils.$document.ready(function () {
  // https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('body').tooltip({
    selector: '[data-toggle=tooltip]'
  });
});
/*-----------------------------------------------
|   Typed Text
-----------------------------------------------*/

/*
  global Typed
 */

utils.$document.ready(function () {
  var typedText = $('.typed-text');

  if (typedText.length) {
    typedText.each(function (index, value) {
      return new Typed(value, {
        strings: $(value).data('typed-text'),
        typeSpeed: 100,
        loop: true,
        backDelay: 1500
      });
    });
  }
});
/*-----------------------------------------------
|   YTPlayer
-----------------------------------------------*/

utils.$document.ready(function () {
  var Selector = {
    BG_YOUTUBE: '.bg-youtube',
    BG_HOLDER: '.bg-holder'
  };
  var DATA_KEY = {
    PROPERTY: 'property'
  };
  var $youtubeBackground = $(Selector.BG_YOUTUBE);

  if ($youtubeBackground.length) {
    $youtubeBackground.each(function (index, value) {
      var $this = $(value);
      $this.data(DATA_KEY.PROPERTY, $.extend($this.data(DATA_KEY.PROPERTY), {
        showControls: false,
        loop: true,
        autoPlay: true,
        mute: true,
        containment: $this.parent(Selector.BG_HOLDER)
      }));
      $this.YTPlayer();
    });
  }
});