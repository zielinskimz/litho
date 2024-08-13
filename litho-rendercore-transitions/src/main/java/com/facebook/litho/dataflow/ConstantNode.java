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

package com.facebook.litho.dataflow;

import com.facebook.infer.annotation.Nullsafe;

/** A dataflow node that returns a constant value. */
@Nullsafe(Nullsafe.Mode.LOCAL)
public class ConstantNode extends ValueNode {

  private final float mValue;

  public ConstantNode(float value) {
    mValue = value;
  }

  @Override
  public float calculateValue(long frameTimeNanos) {
    return mValue;
  }
}
