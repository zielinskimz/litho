/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.samples.litho.kotlin.primitives.bindto

import com.facebook.litho.Column
import com.facebook.litho.Component
import com.facebook.litho.ComponentScope
import com.facebook.litho.KComponent
import com.facebook.litho.Style
import com.facebook.litho.animated.useBinding
import com.facebook.litho.core.height
import com.facebook.litho.core.margin
import com.facebook.litho.core.padding
import com.facebook.litho.core.width
import com.facebook.litho.dp
import com.facebook.samples.litho.kotlin.animations.dynamicprops.SeekBar

class PrimitiveBindToExampleComponent : KComponent() {

  // start_bindTo_seekbar_code
  override fun ComponentScope.render(): Component? {
    val background = useBinding(50f)
    val rotation = useBinding(0f)
    val scale = useBinding(1f)
    return Column(style = Style.padding(all = 20.dp)) {
      child(
          SeekBar(
              initialValue = 0f,
              label = "background",
              onProgressChanged = { backgroundValue -> background.set(backgroundValue) }))
      child(
          SeekBar(
              initialValue = 0f,
              label = "rotation",
              onProgressChanged = { rotationValue ->
                rotation.set(evaluate(rotationValue, 0f, 360f))
              }))
      child(
          SeekBar(
              initialValue = 1f,
              label = "scale",
              onProgressChanged = { scaleValue -> scale.set(evaluate(scaleValue, .75f, 1.25f)) }))
      // end_bindTo_seekbar_code
      // start_bindTo_imagecomponent_def
      child(
          Column(style = Style.width(100.dp).height(100.dp).margin(all = 50.dp)) {
            child(ImageViewComponent(background = background, rotation = rotation, scale = scale))
          })
      // end_bindTo_imagecomponent_def
    }
  }
}
