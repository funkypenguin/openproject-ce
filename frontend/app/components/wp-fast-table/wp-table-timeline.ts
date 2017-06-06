// -- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
// ++

import {WorkPackageTableBaseState, WorkPackageTableQueryState} from "./wp-table-base";
import {QueryResource, TimelineZoomLevel} from "../api/api-v3/hal-resources/query-resource.service";

export class WorkPackageTableTimelineState extends WorkPackageTableBaseState<boolean> implements WorkPackageTableQueryState {
  constructor(public visible:boolean, public zoomLevel:TimelineZoomLevel) {
    super();
  }

  public hasChanged(query:QueryResource) {
    const visibilityChanged = this.isVisible !== query.timelineVisible;
    const zoomLevelChanged = this.zoomLevel !== query.timelineZoomLevel;

    return visibilityChanged || zoomLevelChanged;
  }

  public applyToQuery(query:QueryResource) {
    query.timelineVisible = this.isVisible;
    query.timelineZoomLevel = this.zoomLevel;
  }

  public get current():boolean {
    return this.isVisible;
  }

  public get extractedCompareValue():any {
    return this.isVisible;
  }

  public get currentQueryValue () {
    return this.isVisible;
  }

  public toggle() {
    this.visible = !this.visible;
  }

  public get isVisible() {
    return this.visible;
  }
}
