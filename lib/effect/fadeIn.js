'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'mask': {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'rgba(82, 95, 127, 0.3)',
        'zIndex': 10001,
        'opacity': 1,
        'transition': 'opacity 0.3s ease-in-out'
    },
    'maskHidden': {
        'opacity': 0,
        'zIndex': -1,
        'height': 0,
        'width': 0
    },
    'container': {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'zIndex': 10000
    },
    'containerHidden': {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'zIndex': -1
    },
    'panel': {
        'backgroundColor': '#fff',
        'borderRadius': '5px',
        'boxSizing': 'border-box',
        'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'transition': 'opacity 0.3s ease-in-out',
        'transform': 'scale(1)',
        'opacity': 1,
        'zIndex': 10002
    },
    'panelHidden': {
        'transform': 'scale(0.95)',
        'opacity': 0,
        'zIndex': -1,
        'height': 0,
        'width': 0,
        'overflow': 'hidden'
    }
};