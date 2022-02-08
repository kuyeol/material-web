/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore

import {customElement} from 'lit/decorators.js';

import {TabIndicatorBase} from './lib/tab-indicator';
import {styles} from './lib/tab-indicator-styles.css';

declare global {
  interface HTMLElementTagNameMap {
    'md-tab-indicator': TabIndicator;
  }
}

@customElement('md-tab-indicator')
export class TabIndicator extends TabIndicatorBase {
  static override styles = [styles];
}