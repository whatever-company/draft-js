/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule editOnCompositionStart
 * @flow
 */

'use strict';

var EditorState = require('EditorState');

/**
 * The user has begun using an IME input system. Switching to `composite` mode
 * allows handling composition input and disables other edit behavior.
 */
function editOnCompositionStart(e): void {
  this.setRenderGuard();
  this.setMode('composite');
  this._onCompositionStart(e);
  this.update(
    EditorState.set(this.props.editorState, {inCompositionMode: true})
  );
}

module.exports = editOnCompositionStart;
