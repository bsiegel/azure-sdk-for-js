/**
 * @ignore
 */
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
export class LocationRouting {
  private pIgnorePreferredLocation: boolean;
  private pLocationIndexToRoute: number;
  private pLocationEndpointToRoute: string;
  public get ignorePreferredLocation() {
    return this.pIgnorePreferredLocation;
  }

  public get locationIndexToRoute() {
    return this.pLocationIndexToRoute;
  }

  public get locationEndpointToRoute() {
    return this.pLocationEndpointToRoute;
  }

  public routeToLocation(locationEndpoint: string): void;
  public routeToLocation(locationIndex: number, ignorePreferredLocation: boolean): void;
  public routeToLocation(endpointOrIndex: string | number, ignorePreferredLocation?: boolean) {
    if (typeof ignorePreferredLocation !== "undefined" && typeof endpointOrIndex === "number") {
      this.pLocationIndexToRoute = endpointOrIndex;
      this.pIgnorePreferredLocation = ignorePreferredLocation;
      this.pLocationEndpointToRoute = undefined;
    } else if (
      typeof ignorePreferredLocation === "undefined" &&
      typeof endpointOrIndex === "string"
    ) {
      this.pLocationEndpointToRoute = endpointOrIndex;
      this.pLocationIndexToRoute = undefined;
      this.pIgnorePreferredLocation = undefined;
    } else {
      throw new Error("Invalid arguments passed to routeToLocation");
    }
  }

  public clearRouteToLocation(): void {
    this.pLocationEndpointToRoute = undefined;
    this.pLocationIndexToRoute = undefined;
    this.pIgnorePreferredLocation = undefined;
  }
}
