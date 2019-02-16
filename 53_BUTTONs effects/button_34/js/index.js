'use strict';

var btn = document.querySelector('.js-button');
var btnText = btn.textContent;
var width = btn.clientWidth;
var height = btn.clientHeight;
var svg = Snap(width, height);
var color1 = '#FFFFFF';
var gradient = 'L(0, 0, 300, 300)#0575E6-#021B79';
var maskOffset = btn.clientHeight;

var border = svg.rect(0, 0, width, height).attr({ 'fill': 'none', 'stroke': color1, 'stroke-width': 4, 'class': 'border' });

var mask = svg.path('M0,0 L' + (width + maskOffset) + ',0 L' + width + ',' + height + ' L-' + maskOffset + ', ' + height + ' Z').attr({ 'fill': 'white', 'stroke': 'white', 'class': 'mask', 'stroke-width': 0 }).transform('t-' + (width + maskOffset) + ',0');

var maskInvert = mask.clone().transform('t0,0');

var text = svg.text(width / 2, height / 2, btnText).attr({ 'text-anchor': 'middle', 'dominant-baseline': 'central', 'fill': color1 });

var button = svg.group(text, border).attr({ mask: maskInvert });

var textMasked = text.clone().attr({ 'fill': gradient });

var borderMasked = border.clone().attr({ 'stroke': gradient });

var masked = svg.group(textMasked, borderMasked).attr({ mask: mask });

svg.hover(function () {
  mask.attr('stroke-width', 4);
  mask.stop().animate({ transform: 't0,0' }, 500, mina.easein);
  maskInvert.stop().animate({ transform: 't' + (width + maskOffset) + ',0' }, 500, mina.easein);
}, function () {
  mask.stop().animate({ transform: 't-' + (width + maskOffset) + ',0' }, 350, mina.easeout, function () {
    return mask.attr('stroke-width', 0);
  });
  maskInvert.stop().animate({ transform: 't0,0' }, 350, mina.easeout);
});

svg.click(function () {
  return btn.click();
});
btn.replaceWith(svg.node);