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

package com.facebook.litho.testing.testrunner;

import com.facebook.litho.config.ComponentsConfiguration;
import org.junit.runners.model.FrameworkMethod;

public class SplitBuildAndLayoutTestRunConfiguration implements LithoTestRunConfiguration {

  private final boolean defaultIsSplitStateHandlersEnabled =
      ComponentsConfiguration.isSplitStateHandlersEnabled;
  private final boolean defaultApplyStateUpdateEarly =
      ComponentsConfiguration.applyStateUpdateEarly;
  private final boolean defaultReuseLastMeasuredNodeInComponentMeasure =
      ComponentsConfiguration.reuseLastMeasuredNodeInComponentMeasure;

  @Override
  public void beforeTest(FrameworkMethod method) {
    ComponentsConfiguration.isSplitStateHandlersEnabled = !defaultIsSplitStateHandlersEnabled;
    ComponentsConfiguration.applyStateUpdateEarly = !defaultApplyStateUpdateEarly;
    ComponentsConfiguration.reuseLastMeasuredNodeInComponentMeasure =
        !defaultReuseLastMeasuredNodeInComponentMeasure;
  }

  @Override
  public void afterTest(FrameworkMethod method) {
    ComponentsConfiguration.applyStateUpdateEarly = defaultApplyStateUpdateEarly;
    ComponentsConfiguration.isSplitStateHandlersEnabled = defaultIsSplitStateHandlersEnabled;
    ComponentsConfiguration.reuseLastMeasuredNodeInComponentMeasure =
        defaultReuseLastMeasuredNodeInComponentMeasure;
  }
}